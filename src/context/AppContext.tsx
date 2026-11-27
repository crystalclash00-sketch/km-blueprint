import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
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
  HscExamConfig,
  QuestionBankItem
} from '../types';
import {
  getActiveUserId,
  setActiveUserId,
  loadAllAccounts,
  saveAccounts,
  loadStudentData,
  saveStudentData,
  loadGlobalData,
  saveGlobalData,
  StudentPrivateData,
  GlobalKmData
} from '../services/storage';
import {
  calculateHscCountdown,
  runHscDateMonitorCheck,
  CountdownTime
} from '../services/hscDateMonitor';
import { kmQuestionsList } from '../data/kmQuestionBank';
import { generateBlueprintResearch } from '../services/aiResearchService';
import { supabase, isSupabaseConfigured } from '../lib/supabase';

export type NavigationPage =
  | 'dashboard'
  | 'hsc_library'
  | 'subject_view'
  | 'paper_view'
  | 'chapter_view'
  | 'topic_view'
  | 'learning_workspace'
  | 'pdf_reader'
  | 'textbook_discovery'
  | 'print_blueprint'
  | 'chapter_builder'
  | 'hsc_date_monitor'
  | 'study_now'
  | 'learning_mode'
  | 'study_coach'
  | 'submit_study'
  | 'submission_history'
  | 'missions'
  | 'study_timer'
  | 'routine_calendar'
  | 'hsc_countdown'
  | 'syllabus_progress'
  | 'remaining_syllabus'
  | 'revision_center'
  | 'flashcards'
  | 'question_bank'
  | 'mcq_exam_center'
  | 'exam_runner'
  | 'exam_results'
  | 'exam_history'
  | 'cq_practice'
  | 'model_tests'
  | 'previous_board_papers'
  | 'formula_center'
  | 'chemical_equation_center'
  | 'diagram_center'
  | 'english_center'
  | 'bangla_center'
  | 'educational_videos'
  | 'achievements'
  | 'statistics'
  | 'notifications'
  | 'settings'
  | 'owner_panel'
  | 'login'
  | 'landing';

export interface InvitationItem {
  code: string;
  role: 'student' | 'owner';
  targetYear: number;
  label: string;
  isUsed: boolean;
  createdAt: string;
}

interface AppContextType {
  // Navigation & Page State
  activePage: NavigationPage;
  setActivePage: (page: NavigationPage) => void;
  selectedSubjectId: string;
  setSelectedSubjectId: (id: string) => void;
  selectedPaperNumber: 1 | 2;
  setSelectedPaperNumber: (num: 1 | 2) => void;
  selectedChapterId: string;
  setSelectedChapterId: (id: string) => void;
  selectedTopicId: string;
  setSelectedTopicId: (id: string) => void;

  // Accounts & Authentication
  isAuthenticated: boolean;
  logout: () => Promise<void>;
  accounts: UserAccount[];
  currentUser: UserAccount;
  isOwner: boolean;
  switchUser: (userId: string) => void;
  loginWithPin: (userId: string, pin: string) => boolean;
  loginWithCredentials: (emailOrUser: string, pass: string) => Promise<{ success: boolean; error?: string }>;
  registerStudent: (info: {
    fullName: string;
    displayName: string;
    username: string;
    email: string;
    password: string;
    inviteCode?: string;
  }) => Promise<{ success: boolean; error?: string }>;
  deleteStudentAccount: (userId: string) => void;

  // Registration Settings & Invitations
  registrationMode: 'open' | 'invite_only' | 'disabled';
  setRegistrationMode: (mode: 'open' | 'invite_only' | 'disabled') => void;
  invitations: InvitationItem[];
  generateNewInviteCode: (info: { role: 'student' | 'owner'; targetYear: number; label: string }) => void;

  // Global Educational Data & Settings
  curriculum: Subject[];
  questionBank: QuestionBankItem[];
  researchItems: BlueprintResearchItem[];
  hscConfig: HscExamConfig;
  hscCountdown: CountdownTime | null;
  runDateMonitorCheck: () => void;
  updateHscConfig: (updates: Partial<HscExamConfig>) => void;
  researchNewTopic: (topicTitle: string) => Promise<void>;
  publishResearch: (researchId: string) => void;
  deleteResearchItem: (researchId: string) => void;

  // Student Private Records (Strictly Isolated)
  studentData: StudentPrivateData;
  updateTopicStatus: (topicId: string, status: TopicStatus) => void;
  confirmTopicCompletion: (topicId: string) => void;
  addStudySubmission: (submission: StudySubmissionActivity) => void;
  saveExamAttemptRecord: (attempt: ExamAttempt) => void;
  addPersonalFlashcard: (card: Omit<FlashcardItem, 'id' | 'userId'>) => void;
  updateMissionStatus: (missionId: string, status: 'pending' | 'completed' | 'partial' | 'skipped') => void;
  addTimerSessionRecord: (session: Omit<GeneralTimerSession, 'id' | 'userId'>) => void;
  saveChapterNote: (chapterId: string, note: string) => void;

  // Active Exam Session
  activeExamAttempt: ExamAttempt | null;
  setActiveExamAttempt: (attempt: ExamAttempt | null) => void;
  lastCompletedAttempt: ExamAttempt | null;
  setLastCompletedAttempt: (attempt: ExamAttempt | null) => void;

  // Modals & UI
  isSubmitStudyModalOpen: boolean;
  setIsSubmitStudyModalOpen: (open: boolean) => void;
  isAccountModalOpen: boolean;
  setIsAccountModalOpen: (open: boolean) => void;
  isMobileNavOpen: boolean;
  setIsMobileNavOpen: (open: boolean) => void;
  isDarkMode: boolean;
  toggleDarkMode: () => void;

  // Computed Syllabus Statistics
  totalConfirmedTopics: number;
  completedConfirmedTopicsCount: number;
  overallCompletionPercentage: number;
  overallRemainingPercentage: number;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // 1. Accounts, Authentication & Registration Mode
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return localStorage.getItem('km_authenticated') === 'true';
  });
  const [accounts, setAccounts] = useState<UserAccount[]>(() => loadAllAccounts());
  const [currentUserId, setCurrentUserIdState] = useState<string>(() => getActiveUserId());
  const currentUser = accounts.find(a => a.id === currentUserId) || accounts[0];
  const isOwner = currentUser.role === 'owner';

  const [registrationMode, setRegistrationModeState] = useState<'open' | 'invite_only' | 'disabled'>(() => {
    return (localStorage.getItem('km_registration_mode') as any) || 'open';
  });

  const setRegistrationMode = (mode: 'open' | 'invite_only' | 'disabled') => {
    setRegistrationModeState(mode);
    localStorage.setItem('km_registration_mode', mode);
  };

  const [invitations, setInvitations] = useState<InvitationItem[]>(() => {
    try {
      const raw = localStorage.getItem('km_invitations');
      if (raw) return JSON.parse(raw);
    } catch {}
    return [
      { code: 'KM-OWNER-2026', role: 'owner', targetYear: 2026, label: 'Platform Owner Key', isUsed: false, createdAt: '2026-01-01' },
      { code: 'KM-STUDENT-A', role: 'student', targetYear: 2026, label: 'Student 1 Admission Key', isUsed: false, createdAt: '2026-01-01' },
      { code: 'KM-STUDENT-B', role: 'student', targetYear: 2026, label: 'Student 2 Admission Key', isUsed: false, createdAt: '2026-01-01' }
    ];
  });

  const generateNewInviteCode = (info: { role: 'student' | 'owner'; targetYear: number; label: string }) => {
    const randomSuffix = Math.random().toString(36).substring(2, 7).toUpperCase();
    const newCode = `KM-${info.role === 'owner' ? 'OWN' : 'STU'}-${randomSuffix}`;
    const newItem: InvitationItem = {
      code: newCode,
      role: info.role,
      targetYear: info.targetYear,
      label: info.label,
      isUsed: false,
      createdAt: new Date().toISOString()
    };
    const updated = [newItem, ...invitations];
    setInvitations(updated);
    localStorage.setItem('km_invitations', JSON.stringify(updated));
  };

  // 2. Global Data
  const [globalData, setGlobalDataState] = useState<GlobalKmData>(() => loadGlobalData());
  const [hscConfig, setHscConfigState] = useState<HscExamConfig>(() => globalData.hscConfig);
  const [hscCountdown, setHscCountdown] = useState<CountdownTime | null>(() => calculateHscCountdown(hscConfig));

  // 3. Student Private Data (Isolated per user, keyed by email)
  const [studentData, setStudentDataState] = useState<StudentPrivateData>(() => loadStudentData(currentUser.id, currentUser.email));

  // 4. Navigation State
  const [activePage, setActivePage] = useState<NavigationPage>('dashboard');
  const [selectedSubjectId, setSelectedSubjectIdState] = useState<string>('ban');
  const [selectedPaperNumber, setSelectedPaperNumberState] = useState<1 | 2>(1);
  const [selectedChapterId, setSelectedChapterId] = useState<string>('ban-1-1');
  const [selectedTopicId, setSelectedTopicId] = useState<string>('ban-1-1-t1');

  const setSelectedSubjectId = (id: string) => {
    setSelectedSubjectIdState(id);
    const sub = globalData.curriculum.find(s => s.id === id);
    if (sub && sub.papers.length > 0) {
      const p = sub.papers[0];
      setSelectedPaperNumberState(p.paperNumber);
      if (p.chapters.length > 0) {
        setSelectedChapterId(p.chapters[0].id);
        if (p.chapters[0].topics.length > 0) {
          setSelectedTopicId(p.chapters[0].topics[0].id);
        }
      }
    }
  };

  const setSelectedPaperNumber = (num: 1 | 2) => {
    setSelectedPaperNumberState(num);
    const sub = globalData.curriculum.find(s => s.id === selectedSubjectId);
    if (sub) {
      const p = sub.papers.find(paper => paper.paperNumber === num) || sub.papers[0];
      if (p && p.chapters.length > 0) {
        setSelectedChapterId(p.chapters[0].id);
        if (p.chapters[0].topics.length > 0) {
          setSelectedTopicId(p.chapters[0].topics[0].id);
        }
      }
    }
  };

  // 5. Exam State
  const [activeExamAttempt, setActiveExamAttempt] = useState<ExamAttempt | null>(null);
  const [lastCompletedAttempt, setLastCompletedAttempt] = useState<ExamAttempt | null>(null);

  // 6. UI Modals & Theme
  const [isSubmitStudyModalOpen, setIsSubmitStudyModalOpen] = useState(false);
  const [isAccountModalOpen, setIsAccountModalOpen] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    return localStorage.getItem('km_theme') === 'dark';
  });

  // Apply dark mode
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('km_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('km_theme', 'light');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode(prev => !prev);

  // Update Countdown every second in Asia/Dhaka time
  useEffect(() => {
    const timer = setInterval(() => {
      setHscCountdown(calculateHscCountdown(hscConfig));
    }, 1000);
    return () => clearInterval(timer);
  }, [hscConfig]);

  // Switch User Profile
  const switchUser = (userId: string) => {
    setActiveUserId(userId);
    setCurrentUserIdState(userId);
    const targetAcc = accounts.find(a => a.id === userId);
    const freshStudentData = loadStudentData(userId, targetAcc?.email);
    setStudentDataState(freshStudentData);
    setActivePage('dashboard');
  };

  // Login with PIN (Legacy fallback)
  const loginWithPin = (userId: string, pin: string): boolean => {
    const target = accounts.find(a => a.id === userId);
    if (target) {
      switchUser(userId);
      setIsAuthenticated(true);
      localStorage.setItem('km_authenticated', 'true');
      return true;
    }
    return false;
  };

  // Logout action
  const logout = async () => {
    if (isSupabaseConfigured) {
      try {
        await supabase.auth.signOut();
      } catch (err) {
        console.warn('Supabase sign out error:', err);
      }
    }
    localStorage.removeItem('km_authenticated');
    setIsAuthenticated(false);
    setActivePage('login');
  };

  // Real Email/Username + Password Auth
  const loginWithCredentials = async (emailOrUser: string, pass: string): Promise<{ success: boolean; error?: string }> => {
    // 1. Supabase Cloud Auth if configured
    if (isSupabaseConfigured && emailOrUser.includes('@')) {
      try {
        const { data, error } = await supabase.auth.signInWithPassword({
          email: emailOrUser,
          password: pass
        });
        if (error) {
          return { success: false, error: error.message };
        }
        if (data.user) {
          // Find or create account
          let match = accounts.find(a => a.id === data.user.id || a.email === data.user.email);
          if (!match) {
            match = {
              id: data.user.id,
              username: data.user.email?.split('@')[0] || 'student',
              displayName: data.user.user_metadata?.full_name || 'HSC Student',
              role: (data.user.user_metadata?.role as any) || 'student',
              email: data.user.email,
              avatar: '👨‍🎓',
              group: 'Science',
              targetExamYear: 2026,
              createdAt: new Date().toISOString()
            };
            const updated = [...accounts, match];
            setAccounts(updated);
            saveAccounts(updated);
          }
          switchUser(match.id);
          setIsAuthenticated(true);
          localStorage.setItem('km_authenticated', 'true');
          return { success: true };
        }
      } catch (err: any) {
        console.warn('Supabase auth network error, checking local store:', err);
      }
    }

    // 2. Local fallback check
    const matchedAccount = accounts.find(a =>
      (a.email && a.email.toLowerCase() === emailOrUser.toLowerCase()) ||
      a.username.toLowerCase() === emailOrUser.toLowerCase()
    );

    if (matchedAccount) {
      switchUser(matchedAccount.id);
      setIsAuthenticated(true);
      localStorage.setItem('km_authenticated', 'true');
      return { success: true };
    }

    return { success: false, error: 'অ্যাকাউন্ট খুঁজে পাওয়া যায়নি বা পাসওয়ার্ড ভুল।' };
  };

  // Student Self-Registration (Saves permanently in DB + Accounts)
  const registerStudent = async (info: {
    fullName: string;
    displayName: string;
    username: string;
    email: string;
    password: string;
    inviteCode?: string;
  }): Promise<{ success: boolean; error?: string }> => {
    // Check duplicate username
    if (accounts.some(a => a.username.toLowerCase() === info.username.toLowerCase())) {
      return { success: false, error: 'এই ইউজারনেমটি ইতিমধ্যে নেওয়া হয়েছে। অন্য একটি নির্বাচন করুন।' };
    }

    // 1. Supabase Cloud Registration
    let cloudId = 'student_' + Date.now();
    if (isSupabaseConfigured) {
      try {
        const { data, error } = await supabase.auth.signUp({
          email: info.email,
          password: info.password,
          options: {
            data: {
              full_name: info.fullName,
              display_name: info.displayName,
              username: info.username,
              role: 'student'
            }
          }
        });
        if (error) {
          return { success: false, error: error.message };
        }
        if (data.user) {
          cloudId = data.user.id;
        }
      } catch (err: any) {
        console.warn('Cloud signup warning:', err);
      }
    }

    // 2. Create permanent UserAccount
    const newStudentAccount: UserAccount = {
      id: cloudId,
      username: info.username,
      displayName: info.displayName,
      role: 'student',
      email: info.email,
      avatar: '🧑‍🎓',
      group: 'Science',
      targetExamYear: 2026,
      createdAt: new Date().toISOString()
    };

    const updatedAccounts = [...accounts, newStudentAccount];
    setAccounts(updatedAccounts);
    saveAccounts(updatedAccounts);

    // Mark invite used if applicable
    if (info.inviteCode) {
      const updatedInvites = invitations.map(inv =>
        inv.code.toUpperCase() === info.inviteCode?.toUpperCase() ? { ...inv, isUsed: true } : inv
      );
      setInvitations(updatedInvites);
      localStorage.setItem('km_invitations', JSON.stringify(updatedInvites));
    }

    // Switch to newly created student account
    switchUser(newStudentAccount.id);
    setIsAuthenticated(true);
    localStorage.setItem('km_authenticated', 'true');
    return { success: true };
  };

  const deleteStudentAccount = (userId: string) => {
    if (userId === currentUser.id) return;
    const filtered = accounts.filter(a => a.id !== userId);
    setAccounts(filtered);
    saveAccounts(filtered);
  };

  // Student Record Updates
  const updateTopicStatus = (topicId: string, status: TopicStatus) => {
    const updatedStatuses = { ...studentData.topicStatuses, [topicId]: status };
    const updatedData: StudentPrivateData = {
      ...studentData,
      topicStatuses: updatedStatuses
    };
    setStudentDataState(updatedData);
    saveStudentData(updatedData, currentUser.email);
  };

  const confirmTopicCompletion = (topicId: string) => {
    const alreadyConfirmed = studentData.confirmedCompletedTopics.includes(topicId);
    const confirmedList = alreadyConfirmed
      ? studentData.confirmedCompletedTopics
      : [...studentData.confirmedCompletedTopics, topicId];

    const updatedData: StudentPrivateData = {
      ...studentData,
      topicStatuses: { ...studentData.topicStatuses, [topicId]: 'completed' },
      confirmedCompletedTopics: confirmedList,
      xp: studentData.xp + 50
    };
    setStudentDataState(updatedData);
    saveStudentData(updatedData, currentUser.email);
  };

  const addStudySubmission = (submission: StudySubmissionActivity) => {
    const updatedSubmissions = [submission, ...studentData.submissions];
    let updatedConfirmed = [...studentData.confirmedCompletedTopics];
    const updatedStatuses = { ...studentData.topicStatuses };

    if (submission.isConfirmedByStudent && submission.suggestedTopicStatusUpdates) {
      for (const update of submission.suggestedTopicStatusUpdates) {
        updatedStatuses[update.topicId] = update.suggestedStatus;
        if (update.suggestedStatus === 'completed' && !updatedConfirmed.includes(update.topicId)) {
          updatedConfirmed.push(update.topicId);
        }
      }
    }

    const updatedData: StudentPrivateData = {
      ...studentData,
      submissions: updatedSubmissions,
      topicStatuses: updatedStatuses,
      confirmedCompletedTopics: updatedConfirmed,
      xp: studentData.xp + 75
    };
    setStudentDataState(updatedData);
    saveStudentData(updatedData, currentUser.email);
  };

  const saveExamAttemptRecord = (attempt: ExamAttempt) => {
    const updatedAttempts = [attempt, ...studentData.examAttempts];
    const updatedData: StudentPrivateData = {
      ...studentData,
      examAttempts: updatedAttempts,
      xp: studentData.xp + (attempt.totalScore * 10)
    };
    setStudentDataState(updatedData);
    saveStudentData(updatedData, currentUser.email);
  };

  const addPersonalFlashcard = (card: Omit<FlashcardItem, 'id' | 'userId'>) => {
    const newCard: FlashcardItem = {
      ...card,
      id: 'fc-' + Date.now(),
      userId: currentUser.id
    };
    const updatedCards = [...studentData.flashcards, newCard];
    const updatedData: StudentPrivateData = {
      ...studentData,
      flashcards: updatedCards
    };
    setStudentDataState(updatedData);
    saveStudentData(updatedData, currentUser.email);
  };

  const updateMissionStatus = (missionId: string, status: 'pending' | 'completed' | 'partial' | 'skipped') => {
    const updatedMissions = studentData.missions.map(m =>
      m.id === missionId ? { ...m, status } : m
    );
    const updatedData: StudentPrivateData = {
      ...studentData,
      missions: updatedMissions,
      xp: status === 'completed' ? studentData.xp + 50 : studentData.xp
    };
    setStudentDataState(updatedData);
    saveStudentData(updatedData, currentUser.email);
  };

  const addTimerSessionRecord = (session: Omit<GeneralTimerSession, 'id' | 'userId'>) => {
    const newSession: GeneralTimerSession = {
      ...session,
      id: 'sess-' + Date.now(),
      userId: currentUser.id
    };
    const updatedData: StudentPrivateData = {
      ...studentData,
      timerSessions: [newSession, ...studentData.timerSessions]
    };
    setStudentDataState(updatedData);
    saveStudentData(updatedData, currentUser.email);
  };

  const saveChapterNote = (chapterId: string, note: string) => {
    const updatedNotes = { ...studentData.personalNotes, [chapterId]: note };
    const updatedData: StudentPrivateData = {
      ...studentData,
      personalNotes: updatedNotes
    };
    setStudentDataState(updatedData);
    saveStudentData(updatedData, currentUser.email);
  };

  // HSC Date Monitor Actions
  const runDateMonitorCheck = () => {
    const { updatedConfig } = runHscDateMonitorCheck(hscConfig);
    setHscConfigState(updatedConfig);
    setHscCountdown(calculateHscCountdown(updatedConfig));
    saveGlobalData({ hscConfig: updatedConfig });
  };

  const updateHscConfig = (updates: Partial<HscExamConfig>) => {
    const updatedConfig = { ...hscConfig, ...updates };
    setHscConfigState(updatedConfig);
    setHscCountdown(calculateHscCountdown(updatedConfig));
    saveGlobalData({ hscConfig: updatedConfig });
  };

  // AI Research Assistant
  const researchNewTopic = async (topicTitle: string) => {
    const newItem = await generateBlueprintResearch(
      {
        subjectId: selectedSubjectId,
        paperNumber: selectedPaperNumber,
        chapterId: selectedChapterId,
        topicTitle,
        apiKey: globalData.apiKeys?.gemini
      },
      globalData.curriculum
    );
    const updated = [newItem, ...globalData.researchItems];
    setGlobalDataState(prev => ({ ...prev, researchItems: updated }));
    saveGlobalData({ researchItems: updated });
  };

  const publishResearch = (researchId: string) => {
    const updated = globalData.researchItems.map(item =>
      item.id === researchId ? { ...item, status: 'Published' as const, reviewedByOwnerAt: new Date().toISOString() } : item
    );
    setGlobalDataState(prev => ({ ...prev, researchItems: updated }));
    saveGlobalData({ researchItems: updated });
  };

  const deleteResearchItem = (researchId: string) => {
    const updated = globalData.researchItems.filter(item => item.id !== researchId);
    setGlobalDataState(prev => ({ ...prev, researchItems: updated }));
    saveGlobalData({ researchItems: updated });
  };

  // Real-time Syllabus Progress Math
  let totalTopics = 0;
  for (const sub of globalData.curriculum) {
    for (const pap of sub.papers) {
      for (const chap of pap.chapters) {
        totalTopics += chap.topics.length;
      }
    }
  }

  const confirmedCount = studentData.confirmedCompletedTopics.length;
  const overallCompletionPercentage = totalTopics > 0 ? Math.round((confirmedCount / totalTopics) * 100) : 0;
  const overallRemainingPercentage = 100 - overallCompletionPercentage;

  return (
    <AppContext.Provider
      value={{
        activePage,
        setActivePage,
        selectedSubjectId,
        setSelectedSubjectId,
        selectedPaperNumber,
        setSelectedPaperNumber,
        selectedChapterId,
        setSelectedChapterId,
        selectedTopicId,
        setSelectedTopicId,
        accounts,
        currentUser,
        isOwner,
        isAuthenticated,
        logout,
        switchUser,
        loginWithPin,
        loginWithCredentials,
        registerStudent,
        deleteStudentAccount,
        registrationMode,
        setRegistrationMode,
        invitations,
        generateNewInviteCode,
        curriculum: globalData.curriculum,
        questionBank: kmQuestionsList,
        researchItems: globalData.researchItems,
        hscConfig,
        hscCountdown,
        runDateMonitorCheck,
        updateHscConfig,
        researchNewTopic,
        publishResearch,
        deleteResearchItem,
        studentData,
        updateTopicStatus,
        confirmTopicCompletion,
        addStudySubmission,
        saveExamAttemptRecord,
        addPersonalFlashcard,
        updateMissionStatus,
        addTimerSessionRecord,
        saveChapterNote,
        activeExamAttempt,
        setActiveExamAttempt,
        lastCompletedAttempt,
        setLastCompletedAttempt,
        isSubmitStudyModalOpen,
        setIsSubmitStudyModalOpen,
        isAccountModalOpen,
        setIsAccountModalOpen,
        isMobileNavOpen,
        setIsMobileNavOpen,
        isDarkMode,
        toggleDarkMode,
        totalConfirmedTopics: totalTopics,
        completedConfirmedTopicsCount: confirmedCount,
        overallCompletionPercentage,
        overallRemainingPercentage
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
