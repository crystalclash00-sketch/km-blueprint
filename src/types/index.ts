// K&M Blueprint — Unified Types Definition
// Bangladesh's First All-in-One HSC Learning Platform

export type HSCGroup = 'Science' | 'Humanities' | 'Business Studies';
export type UserRole = 'owner' | 'student' | 'admin' | 'friend1' | 'friend2';

export interface UserAccount {
  id: string; // e.g. 'owner_1', 'student_1', 'student_2'
  username: string;
  displayName: string;
  role: 'owner' | 'student';
  email?: string;
  pin?: string;
  avatar: string;
  group: 'Science';
  targetExamYear: number;
  optionalSubjectId?: string; // 4th subject (e.g. 'bio' or 'hmath')
  createdAt: string;
}

// 7 Topic Statuses
export type TopicStatus = 
  | 'not_started' 
  | 'reading' 
  | 'learning' 
  | 'practising' 
  | 'understood' 
  | 'revision_needed' 
  | 'completed';

export interface TopicItem {
  id: string;
  title: string;
  englishTitle?: string;
  priorityCategory?: 'Essential Concept' | 'High Priority' | 'Important' | 'Supporting Concept' | 'Additional Learning';
  importanceReason?: string;
  estimatedMinutes?: number;
  estimatedHours?: number;
  status?: TopicStatus;
  isConfirmedCompleted?: boolean;
  isCompleted?: boolean;
  notes?: string;
  formulaIds?: string[];
  equationIds?: string[];
}

export interface Chapter {
  id: string;
  chapterNumber: number;
  title: string;
  englishTitle?: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  importance: 'Standard' | 'Important' | 'Most Important (3-Star)';
  totalTopics: number;
  topics: TopicItem[];
  overview?: string;
  learningObjectives?: string[];
  status: 'not_started' | 'in_progress' | 'completed' | 'revised';
  cqSolvedCount: number;
  mcqSolvedCount: number;
  lastRevisedDate?: string;
  nextRevisionDate?: string;
  masteryPercentage: number;
  // K&M Educational Content
  lessonContent?: string;
  definitions?: Array<{ term: string; englishTerm: string; banglaMeaning: string; definition: string; example?: string }>;
  keyConcepts?: Array<{ title: string; explanation: string; importance: string }>;
  solvedExamples?: Array<{ question: string; solution: string; steps: string[]; tip?: string }>;
  numericalProblems?: Array<{ problem: string; givenData: string; formula: string; solution: string; answer: string }>;
  boardQuestions?: Array<{ year: string; board: string; question: string; answer: string; type: 'MCQ' | 'CQ' }>;
}

export interface Paper {
  id: string;
  paperNumber: 1 | 2;
  title: string;
  englishTitle?: string;
  chapters: Chapter[];
}

export interface Subject {
  id: string;
  name: string;
  englishName?: string;
  code: string;
  isCompulsory: boolean;
  color: string;
  iconName?: string;
  papers: Paper[];
  totalChapters?: number;
  completedChapters?: number;
}

// Formula Definition
export interface FormulaItem {
  id: string;
  subjectId: string;
  paperNumber: 1 | 2;
  chapterId: string;
  title: string;
  expression: string;
  latex?: string;
  symbols: Array<{ symbol: string; meaning: string; siUnit: string }>;
  conditions: string[];
  exampleCalculation: {
    problem: string;
    given: string;
    calculation: string;
    result: string;
  };
  relatedTopicId?: string;
}

// Chemical Equation Definition
export interface ChemicalEquationItem {
  id: string;
  paperNumber: 1 | 2;
  chapterId: string;
  title: string;
  balancedEquation: string;
  reactants: string[];
  products: string[];
  reactionConditions: string;
  observations: string;
  explanation: string;
  type: 'Organic' | 'Inorganic' | 'Redox' | 'Acid-Base' | 'Electrochemistry';
}

// Diagram Definition
export interface DiagramItem {
  id: string;
  subjectId: string;
  paperNumber: 1 | 2;
  chapterId: string;
  title: string;
  description: string;
  labels: Array<{ label: string; description: string; x?: number; y?: number }>;
  svgMarkup?: string;
  category: 'Biology Structure' | 'Physics Apparatus' | 'Chemistry Setup' | 'Mathematical Graph';
}

// English Vocabulary Item
export interface EnglishVocabularyItem {
  id: string;
  word: string;
  banglaMeaning: string;
  englishDefinition: string;
  partOfSpeech: string;
  synonyms: string[];
  antonyms: string[];
  exampleSentence: string;
  passageRef?: string;
}

// Question Bank Item
export interface QuestionBankItem {
  id: string;
  subjectId: string;
  paperNumber: 1 | 2;
  chapterId: string;
  topicId?: string;
  type: 'MCQ' | 'CQ' | 'Short' | 'Numerical' | 'Board';
  questionText: string;
  options?: string[];
  correctOptionIndex?: number;
  correctAnswerText?: string;
  explanation: string;
  whyIncorrect?: string[];
  difficulty: 'Easy' | 'Medium' | 'Hard';
  origin: 'Official Board Question' | 'Original K&M Practice' | 'Model Question';
  boardYearInfo?: { board: string; year: number };
  verificationStatus: 'Verified' | 'Needs Review' | 'Draft';
  stepByStepSolution?: string[];
  relevantFormulaId?: string;
}

export interface QuizQuestion {
  id: string;
  subject: string;
  paper?: 1 | 2;
  chapter: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

// Examination Attempt
export interface ExamAttempt {
  id: string;
  userId: string;
  subjectId: string;
  paperNumber: 1 | 2;
  chapterIds: string[];
  examTitle: string;
  totalQuestions: number;
  durationMinutes: number;
  startedAt: string;
  deadline: string;
  submittedAt?: string;
  isAutoSubmitted: boolean;
  status: 'in_progress' | 'completed' | 'expired';
  questions: Array<{
    questionId: string;
    originalQuestion: QuestionBankItem;
    shuffledOptions: string[];
    correctShuffledIndex: number;
    studentAnswerIndex?: number;
    isCorrect?: boolean;
    timeSpentSeconds?: number;
  }>;
  totalScore: number;
  maxScore: number;
  percentage: number;
  correctCount: number;
  incorrectCount: number;
  unansweredCount: number;
  weakTopicIds: string[];
}

// HSC Date Monitor & Countdown Configuration
export type HscDateStatus = 
  | 'Not Announced'
  | 'Searching'
  | 'Candidate Notice Found'
  | 'Awaiting Verification'
  | 'Officially Verified'
  | 'Date Published'
  | 'Revised'
  | 'Postponed'
  | 'Monitoring Error';

export interface HscDateNotice {
  id: string;
  title: string;
  sourceName: string;
  sourceUrl: string;
  discoveredAt: string;
  publicationDate: string;
  targetExamYear: number;
  announcedStartDate?: string;
  announcedStartTime?: string;
  verificationStatus: HscDateStatus;
  isVerifiedByOwner: boolean;
  ownerNotes?: string;
  rawSnippet: string;
}

export interface HscExamConfig {
  targetExamYear: number;
  officialStartDate: string | null;
  startTime: string;
  timeZone: string;
  isOfficiallyAnnounced: boolean;
  status: HscDateStatus;
  lastCheckedAt: string;
  lastDiscoveredNotice?: HscDateNotice;
  automaticPublishEnabled: boolean;
  dateChangeAuditLog: Array<{
    timestamp: string;
    changedBy: string;
    previousDate: string | null;
    newDate: string | null;
    reason: string;
    sourceUrl?: string;
  }>;
}

// Study Submission ("What I Studied Today")
export interface StudySubmissionActivity {
  id: string;
  userId: string;
  submittedAt: string;
  date: string;
  subjectId: string;
  paperNumber: 1 | 2;
  chapterId: string;
  topicIds: string[];
  naturalLanguageNote: string;
  whatRead: string;
  whatStudied: string;
  whatUnderstood: string;
  whatPractised: string;
  mcqsAttemptedCount: number;
  cqsAttemptedCount: number;
  numericalProblemsCount: number;
  formulasRevised: string[];
  timeSpentMinutes: number;
  difficulties: string;
  suggestedTopicStatusUpdates: Array<{
    topicId: string;
    previousStatus: TopicStatus;
    suggestedStatus: TopicStatus;
    reason: string;
  }>;
  isConfirmedByStudent: boolean;
  confirmedAt?: string;
  studentEditNotes?: string;
}

// Print the Blueprint AI Research Content
export type ContentResearchStatus = 
  | 'Researching'
  | 'Draft Generated'
  | 'Needs Verification'
  | 'Verified'
  | 'Published'
  | 'Needs Update'
  | 'Rejected';

export interface BlueprintResearchItem {
  id: string;
  subjectId: string;
  paperNumber: 1 | 2;
  chapterId: string;
  topicTitle: string;
  generatedBanglaLesson: string;
  generatedDefinitions: Array<{ term: string; banglaMeaning: string; definition: string }>;
  generatedFormulas: Array<{ name: string; expression: string; symbols: string; units: string }>;
  generatedExamples: Array<{ question: string; solution: string }>;
  generatedMcqs: Array<{ question: string; options: string[]; answerIndex: number; explanation: string }>;
  sourceReferences: Array<{ title: string; url: string; organization: string }>;
  uncertaintyNotes?: string;
  status: ContentResearchStatus;
  createdAt: string;
  reviewedByOwnerAt?: string;
  ownerFeedback?: string;
}

// Flashcard
export interface FlashcardItem {
  id: string;
  userId: string;
  subjectId: string;
  paperNumber: 1 | 2;
  chapterId: string;
  front: string;
  back: string;
  category: 'Formula' | 'Definition' | 'Keyword' | 'English Vocab' | 'Custom Note';
  nextReviewDate: string;
  intervalDays: number;
  easeFactor: number;
  repetitions: number;
}

// Routine & Mission
export interface StudyMission {
  id: string;
  userId: string;
  date: string;
  title: string;
  subjectId?: string;
  subject?: string;
  paperNumber?: 1 | 2;
  paper?: 1 | 2;
  chapterId?: string;
  chapter?: string;
  topicTitle?: string;
  topic?: string;
  durationMinutes?: number;
  estimatedMinutes?: number;
  actualMinutesSpent?: number;
  actionDetails?: string[];
  dayNumber?: number;
  phase?: 'Academic' | 'Pre-Admission' | 'Full Admission';
  priority?: 'High' | 'Important' | 'Normal';
  difficulty?: 'Easy' | 'Medium' | 'Hard';
  status: 'pending' | 'completed' | 'partial' | 'skipped';
  skipReason?: string;
  notes?: string;
  xpReward: number;
  isRevision?: boolean;
  isExam?: boolean;
}

// General Study Timer Session
export interface GeneralTimerSession {
  id: string;
  userId: string;
  subjectId: string;
  mode: 'pomodoro' | 'stopwatch' | 'countdown';
  durationMinutes: number;
  completedAt: string;
  missionId?: string;
}

// Educational Video
export interface EducationalVideoItem {
  id: string;
  subjectId: string;
  paperNumber: 1 | 2;
  chapterId: string;
  topicTitle: string;
  title: string;
  channelName: string;
  youtubeId: string;
  duration: string;
  hasAccessibleCaptions: boolean;
  transcriptSummary?: string;
}

// Textbook Discovery Item
export interface TextbookResource {
  id: string;
  title: string;
  subjectId: string;
  paperNumber: 1 | 2;
  organization: string;
  author: string;
  year: number;
  edition: string;
  sourceUrl: string;
  fileType: 'PDF' | 'Web Page';
  permissions: 'Public NCTB Open' | 'Government Educational Portal' | 'Permitted Open Resource';
  lastCheckedDate: string;
  isExtracted: boolean;
  extractedTextSnippet?: string;
}
