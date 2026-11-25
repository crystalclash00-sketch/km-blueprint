// K&M Blueprint — Randomized Timed Examination Engine
import { ExamAttempt, QuestionBankItem } from '../types';

export interface SubjectExamDefaults {
  subjectId: string;
  paperNumber: 1 | 2;
  title: string;
  questionCount: number;
  durationMinutes: number;
}

export const defaultExamConfigs: Record<string, SubjectExamDefaults> = {
  'bio-1': { subjectId: 'bio', paperNumber: 1, title: 'Biology 1st Paper Exam', questionCount: 25, durationMinutes: 25 },
  'bio-2': { subjectId: 'bio', paperNumber: 2, title: 'Biology 2nd Paper Exam', questionCount: 25, durationMinutes: 25 },
  'phy-1': { subjectId: 'phy', paperNumber: 1, title: 'Physics 1st Paper Exam', questionCount: 25, durationMinutes: 25 },
  'phy-2': { subjectId: 'phy', paperNumber: 2, title: 'Physics 2nd Paper Exam', questionCount: 25, durationMinutes: 25 },
  'chem-1': { subjectId: 'chem', paperNumber: 1, title: 'Chemistry 1st Paper Exam', questionCount: 25, durationMinutes: 25 },
  'chem-2': { subjectId: 'chem', paperNumber: 2, title: 'Chemistry 2nd Paper Exam', questionCount: 25, durationMinutes: 25 },
  'hmath-1': { subjectId: 'hmath', paperNumber: 1, title: 'Higher Mathematics 1st Paper Exam', questionCount: 25, durationMinutes: 25 },
  'hmath-2': { subjectId: 'hmath', paperNumber: 2, title: 'Higher Mathematics 2nd Paper Exam', questionCount: 25, durationMinutes: 25 },
  'ict-1': { subjectId: 'ict', paperNumber: 1, title: 'ICT Examination', questionCount: 25, durationMinutes: 25 },
  'ban-1': { subjectId: 'ban', paperNumber: 1, title: 'বাংলা ১ম পত্র পরীক্ষা', questionCount: 30, durationMinutes: 30 }
};

// Fisher-Yates Shuffle
export function shuffleArray<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// Create a new timed exam attempt
export const startNewExamAttempt = (
  userId: string,
  subjectId: string,
  paperNumber: 1 | 2,
  chapterIds: string[],
  availableQuestions: QuestionBankItem[],
  customQuestionCount?: number,
  customDurationMinutes?: number
): ExamAttempt => {
  const configKey = `${subjectId}-${paperNumber}`;
  const defaults = defaultExamConfigs[configKey] || {
    subjectId,
    paperNumber,
    title: `${subjectId.toUpperCase()} Paper ${paperNumber} Exam`,
    questionCount: 25,
    durationMinutes: 25
  };

  const totalQuestions = customQuestionCount || defaults.questionCount;
  const durationMinutes = customDurationMinutes || defaults.durationMinutes;

  // Filter eligible verified questions
  const filteredQuestions = availableQuestions.filter(q => {
    const matchSubject = q.subjectId === subjectId && q.paperNumber === paperNumber;
    const matchChapter = chapterIds.length === 0 || chapterIds.includes(q.chapterId);
    return matchSubject && matchChapter;
  });

  const pool = filteredQuestions.length > 0 ? filteredQuestions : availableQuestions;
  const randomizedQuestions = shuffleArray(pool).slice(0, Math.min(totalQuestions, pool.length));

  // Prepare questions snapshot with randomized options
  const questionsSnapshot = randomizedQuestions.map(q => {
    const originalOptions = q.options || ['ক', 'খ', 'গ', 'ঘ'];
    const correctOriginalIndex = q.correctOptionIndex ?? 0;
    const correctText = originalOptions[correctOriginalIndex];

    // Shuffle options
    const shuffledOptions = shuffleArray(originalOptions);
    const correctShuffledIndex = shuffledOptions.indexOf(correctText);

    return {
      questionId: q.id,
      originalQuestion: q,
      shuffledOptions,
      correctShuffledIndex,
      studentAnswerIndex: undefined,
      isCorrect: undefined,
      timeSpentSeconds: 0
    };
  });

  const now = new Date();
  const deadline = new Date(now.getTime() + durationMinutes * 60 * 1000);

  const attempt: ExamAttempt = {
    id: 'exam-' + Date.now() + '-' + Math.random().toString(36).substring(2, 7),
    userId,
    subjectId,
    paperNumber,
    chapterIds,
    examTitle: defaults.title,
    totalQuestions: questionsSnapshot.length,
    durationMinutes,
    startedAt: now.toISOString(),
    deadline: deadline.toISOString(),
    isAutoSubmitted: false,
    status: 'in_progress',
    questions: questionsSnapshot,
    totalScore: 0,
    maxScore: questionsSnapshot.length,
    percentage: 0,
    correctCount: 0,
    incorrectCount: 0,
    unansweredCount: questionsSnapshot.length,
    weakTopicIds: []
  };

  return attempt;
};

// Submit Exam (Manual or Auto-Submit on Deadline Expiry)
export const evaluateExamSubmission = (
  attempt: ExamAttempt,
  isAutoSubmitted: boolean = false
): ExamAttempt => {
  let correctCount = 0;
  let incorrectCount = 0;
  let unansweredCount = 0;
  const weakTopicIds: string[] = [];

  const evaluatedQuestions = attempt.questions.map(q => {
    if (q.studentAnswerIndex === undefined || q.studentAnswerIndex === null) {
      unansweredCount++;
      return {
        ...q,
        isCorrect: false
      };
    }

    const isCorrect = q.studentAnswerIndex === q.correctShuffledIndex;
    if (isCorrect) {
      correctCount++;
    } else {
      incorrectCount++;
      if (q.originalQuestion.topicId && !weakTopicIds.includes(q.originalQuestion.topicId)) {
        weakTopicIds.push(q.originalQuestion.topicId);
      }
    }

    return {
      ...q,
      isCorrect
    };
  });

  const totalScore = correctCount; // 1 mark per question
  const percentage = attempt.maxScore > 0 ? Math.round((totalScore / attempt.maxScore) * 100) : 0;

  return {
    ...attempt,
    questions: evaluatedQuestions,
    submittedAt: new Date().toISOString(),
    isAutoSubmitted,
    status: 'completed',
    totalScore,
    percentage,
    correctCount,
    incorrectCount,
    unansweredCount,
    weakTopicIds
  };
};
