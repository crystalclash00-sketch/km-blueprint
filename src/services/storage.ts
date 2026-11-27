import {
  UserAccount,
  Subject,
  TopicStatus,
  ExamAttempt,
  StudySubmissionActivity,
  BlueprintResearchItem,
  FlashcardItem,
  StudyMission,
  GeneralTimerSession,
  HscExamConfig
} from '../types';
import { kmDefaultSubjects } from '../data/kmCurriculum';
import { loadHscExamConfig, saveHscExamConfig } from './hscDateMonitor';
import { supabase, isSupabaseConfigured } from '../lib/supabase';

// Production Student Private Storage Data
export interface StudentPrivateData {
  userId: string;
  topicStatuses: Record<string, TopicStatus>;
  confirmedCompletedTopics: string[];
  submissions: StudySubmissionActivity[];
  examAttempts: ExamAttempt[];
  flashcards: FlashcardItem[];
  missions: StudyMission[];
  timerSessions: GeneralTimerSession[];
  personalNotes: Record<string, string>;
  xp: number;
  streakDays: number;
}

// Global Educational & System Storage
export interface GlobalKmData {
  curriculum: Subject[];
  researchItems: BlueprintResearchItem[];
  hscConfig: HscExamConfig;
  apiKeys: {
    gemini?: string;
    supabaseUrl?: string;
    supabaseAnonKey?: string;
  };
}

// Production User Accounts
export const loadAllAccounts = (): UserAccount[] => {
  try {
    const raw = localStorage.getItem('km_user_accounts');
    if (raw) return JSON.parse(raw);
  } catch (e) {
    console.error('Error loading accounts:', e);
  }
  return [
    {
      id: 'owner_master',
      username: 'director',
      displayName: 'Platform Director',
      role: 'owner',
      email: 'director@kmblueprint.bd',
      pin: '2026',
      avatar: '👨‍🏫',
      group: 'Science',
      targetExamYear: 2026,
      createdAt: new Date().toISOString()
    },
    {
      id: 'student_1',
      username: 'student1',
      displayName: 'HSC Science Student',
      role: 'student',
      email: 'student1@kmblueprint.bd',
      pin: '1234',
      avatar: '👨‍🎓',
      group: 'Science',
      targetExamYear: 2026,
      createdAt: new Date().toISOString()
    }
  ];
};

export const saveAccounts = (accounts: UserAccount[]): void => {
  localStorage.setItem('km_user_accounts', JSON.stringify(accounts));
};

// Active User ID Session tracker
export const getActiveUserId = (): string => {
  return localStorage.getItem('km_active_user_id') || 'student_1';
};

export const setActiveUserId = (userId: string): void => {
  localStorage.setItem('km_active_user_id', userId);
};

// Initial fresh record generator for any student account
export const createInitialStudentData = (userId: string): StudentPrivateData => ({
  userId,
  topicStatuses: {},
  confirmedCompletedTopics: [],
  submissions: [],
  examAttempts: [],
  flashcards: [],
  missions: [
    {
      id: 'mission-1',
      userId,
      date: new Date().toISOString().split('T')[0],
      title: 'ভেক্টর সামান্তরিক সূত্রের গাণিতিক প্রমাণ ও ১০টি MCQ সমাধান',
      subjectId: 'phy',
      paperNumber: 1,
      chapterId: 'phy-1-2',
      durationMinutes: 45,
      priority: 'High',
      difficulty: 'Medium',
      status: 'pending',
      xpReward: 100
    },
    {
      id: 'mission-2',
      userId,
      date: new Date().toISOString().split('T')[0],
      title: 'জৈব রসায়ন বেনজিনের ইলেকট্রোফিলিক প্রতিস্থাপন রিভিশন',
      subjectId: 'chem',
      paperNumber: 2,
      chapterId: 'chem-2-2',
      durationMinutes: 50,
      priority: 'Important',
      difficulty: 'Hard',
      status: 'pending',
      xpReward: 120
    }
  ],
  timerSessions: [],
  personalNotes: {},
  xp: 150,
  streakDays: 1
});

// Load Student Private Data (Keyed by Email across sessions)
export const loadStudentData = (userId: string, email?: string): StudentPrivateData => {
  const effectiveKey = (email && email.includes('@'))
    ? `km_user_progress_${email.toLowerCase().trim()}`
    : (userId.includes('@') ? `km_user_progress_${userId.toLowerCase().trim()}` : `km_student_data_${userId}`);
  try {
    const raw = localStorage.getItem(effectiveKey);
    if (raw) {
      return JSON.parse(raw);
    }
  } catch (e) {
    console.error(`Error loading data for ${effectiveKey}:`, e);
  }

  const initial = createInitialStudentData(userId);
  localStorage.setItem(effectiveKey, JSON.stringify(initial));
  return initial;
};

// Save Student Private Data with Cloud Synchronization & Email-Keyed Storage
export const saveStudentData = async (data: StudentPrivateData, email?: string): Promise<void> => {
  const effectiveKey = (email && email.includes('@'))
    ? `km_user_progress_${email.toLowerCase().trim()}`
    : (data.userId?.includes('@') ? `km_user_progress_${data.userId.toLowerCase().trim()}` : `km_student_data_${data.userId}`);
  // 1. Immediately cache locally for offline PWA & instantaneous UI response
  localStorage.setItem(effectiveKey, JSON.stringify(data));

  // 2. Synchronize to Supabase PostgreSQL when credentials configured & online
  if (isSupabaseConfigured && navigator.onLine) {
    try {
      // Sync topic status snapshots
      const updates = Object.entries(data.topicStatuses).map(([topicId, status]) => ({
        user_id: data.userId,
        topic_id: topicId,
        chapter_id: topicId.split('-').slice(0, 3).join('-'),
        subject_id: topicId.split('-')[0],
        status,
        is_confirmed_completed: data.confirmedCompletedTopics.includes(topicId),
        last_studied_at: new Date().toISOString()
      }));

      if (updates.length > 0) {
        await supabase
          .from('student_topic_progress')
          .upsert(updates, { onConflict: 'user_id, topic_id' });
      }
    } catch (err) {
      console.warn('Background Supabase sync pending network or session:', err);
    }
  }
};

// Load Global KM Data
export const loadGlobalData = (): GlobalKmData => {
  let curriculum = kmDefaultSubjects;
  let researchItems: BlueprintResearchItem[] = [];
  let hscConfig = loadHscExamConfig();
  let apiKeys = {};

  try {
    const curRaw = localStorage.getItem('km_global_curriculum');
    if (curRaw) curriculum = JSON.parse(curRaw);

    const resRaw = localStorage.getItem('km_global_research');
    if (resRaw) {
      try {
        const parsed: BlueprintResearchItem[] = JSON.parse(resRaw);
        researchItems = parsed
          .filter(item => {
            const t = (item.topicTitle || '').toLowerCase();
            const l = (item.generatedBanglaLesson || '').toLowerCase();
            return !t.includes('mitocondrea') && !l.includes('mitocondrea');
          })
          .map(item => ({
            ...item,
            topicTitle: (item.topicTitle || '').replace(/mitocondrea/gi, 'মাইটোকন্ড্রিয়া'),
            generatedBanglaLesson: (item.generatedBanglaLesson || '').replace(/mitocondrea/gi, 'মাইটোকন্ড্রিয়া')
          }));
        localStorage.setItem('km_global_research', JSON.stringify(researchItems));
      } catch (err) {
        console.warn('Error parsing or cleansing research items:', err);
      }
    }

    const keysRaw = localStorage.getItem('km_global_apikeys');
    if (keysRaw) apiKeys = JSON.parse(keysRaw);
  } catch (e) {
    console.error('Error loading global data:', e);
  }

  return { curriculum, researchItems, hscConfig, apiKeys };
};

// Save Global KM Data
export const saveGlobalData = (data: Partial<GlobalKmData>): void => {
  if (data.curriculum) localStorage.setItem('km_global_curriculum', JSON.stringify(data.curriculum));
  if (data.researchItems) localStorage.setItem('km_global_research', JSON.stringify(data.researchItems));
  if (data.hscConfig) saveHscExamConfig(data.hscConfig);
  if (data.apiKeys) localStorage.setItem('km_global_apikeys', JSON.stringify(data.apiKeys));
};

// Clean Export of Full Database to JSON (Manual Backup & Cloud Migration)
export const exportFullDatabaseJson = (): string => {
  const global = loadGlobalData();
  const currentUserId = getActiveUserId();
  const studentData = loadStudentData(currentUserId);
  
  const backup = {
    exportedAt: new Date().toISOString(),
    version: '2.0.0',
    platform: 'K&M Blueprint — Bangladesh HSC Platform',
    global,
    activeStudent: studentData
  };

  return JSON.stringify(backup, null, 2);
};
