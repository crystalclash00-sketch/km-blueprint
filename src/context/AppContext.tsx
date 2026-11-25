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
  accounts: UserAccount[];
  currentUser: UserAccount;
  switchUser: (userId: string) => void;
  loginWithPin: (userId: string, pin: string) => boolean;

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
  // 1. Accounts
  const [accounts, setAccounts] = useState<UserAccount[]>(() => loadAllAccounts());
  const [currentUserId, setCurrentUserIdState] = useState<string>(() => getActiveUserId());
  const currentUser = accounts.find(a => a.id === currentUserId) || accounts[1]; // default to student 1

  // 2. Global Data
  const [globalData, setGlobalDataState] = useState<GlobalKmData>(() => loadGlobalData());
  const [hscConfig, setHscConfigState] = useState<HscExamConfig>(() => globalData.hscConfig);
  const [hscCountdown, setHscCountdown] = useState<CountdownTime | null>(() => calculateHscCountdown(hscConfig));

  // 3. Student Private Data (Isolated per user)
  const [studentData, setStudentDataState] = useState<StudentPrivateData>(() => loadStudentData(currentUser.id));

  // 4. Navigation State
  const [activePage, setActivePage] = useState<NavigationPage>('dashboard');
  const [selectedSubjectId, setSelectedSubjectId] = useState<string>('phy');
  const [selectedPaperNumber, setSelectedPaperNumber] = useState<1 | 2>(1);
  const [selectedChapterId, setSelectedChapterId] = useState<string>('phy-1-2');
  const [selectedTopicId, setSelectedTopicId] = useState<string>('phy-1-2-t1');

  // 5. Exam State
  const [activeExamAttempt, setActiveExamAttempt] = useState<ExamAttempt | null>(null);
  const [lastCompletedAttempt, setLastCompletedAttempt] = useState<ExamAttempt | null>(null);

  // 6. UI Modals & Theme
  const [isSubmitStudyModalOpen, setIsSubmitStudyModalOpen] = useState(false);
  const [isAccountModalOpen, setIsAccountModalOpen] = useState(false);
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
    const freshStudentData = loadStudentData(userId);
    setStudentDataState(freshStudentData);
    setActivePage('dashboard');
  };

  // Login with PIN
  const loginWithPin = (userId: string, pin: string): boolean => {
    const target = accounts.find(a => a.id === userId);
    if (target && target.pin === pin) {
      switchUser(userId);
      return true;
    }
    return false;
  };

  // Student Record Updates
  const updateTopicStatus = (topicId: string, status: TopicStatus) => {
    const updatedStatuses = { ...studentData.topicStatuses, [topicId]: status };
    const updatedData: StudentPrivateData = {
      ...studentData,
      topicStatuses: updatedStatuses
    };
    setStudentDataState(updatedData);
    saveStudentData(updatedData);
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
    saveStudentData(updatedData);
  };

  const addStudySubmission = (submission: StudySubmissionActivity) => {
    const updatedSubmissions = [submission, ...studentData.submissions];
    let updatedConfirmed = [...studentData.confirmedCompletedTopics];
    const updatedStatuses = { ...studentData.topicStatuses };

    // If confirmed by student, apply topic updates
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
    saveStudentData(updatedData);
  };

  const saveExamAttemptRecord = (attempt: ExamAttempt) => {
    const updatedAttempts = [attempt, ...studentData.examAttempts];
    const updatedData: StudentPrivateData = {
      ...studentData,
      examAttempts: updatedAttempts,
      xp: studentData.xp + (attempt.totalScore * 10)
    };
    setStudentDataState(updatedData);
    saveStudentData(updatedData);
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
    saveStudentData(updatedData);
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
    saveStudentData(updatedData);
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
    saveStudentData(updatedData);
  };

  const saveChapterNote = (chapterId: string, note: string) => {
    const updatedNotes = { ...studentData.personalNotes, [chapterId]: note };
    const updatedData: StudentPrivateData = {
      ...studentData,
      personalNotes: updatedNotes
    };
    setStudentDataState(updatedData);
    saveStudentData(updatedData);
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
        switchUser,
        loginWithPin,
        curriculum: globalData.curriculum,
        questionBank: kmQuestionsList,
        researchItems: globalData.researchItems,
        hscConfig,
        hscCountdown,
        runDateMonitorCheck,
        updateHscConfig,
        researchNewTopic,
        publishResearch,
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
