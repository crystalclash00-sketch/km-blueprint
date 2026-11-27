import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { ExamAttempt } from '../types';
import {
  Award,
  CheckCircle,
  XCircle,
  HelpCircle,
  Clock,
  ArrowLeft,
  RotateCcw,
  Sparkles,
  BookOpen,
  Filter,
  Layers,
  ArrowRight
} from 'lucide-react';

export const ExamResultView: React.FC = () => {
  const {
    lastCompletedAttempt,
    studentData,
    setActivePage,
    setSelectedSubjectId,
    setSelectedPaperNumber,
    addPersonalFlashcard
  } = useApp();

  const [filterMode, setFilterMode] = useState<'all' | 'incorrect' | 'correct' | 'unanswered'>('all');
  const [selectedAttemptId, setSelectedAttemptId] = useState<string | null>(() => {
    if (lastCompletedAttempt) return lastCompletedAttempt.id;
    if (studentData.examAttempts.length > 0) return studentData.examAttempts[0].id;
    return null;
  });

  // Find active attempt
  const currentAttempt: ExamAttempt | undefined =
    lastCompletedAttempt?.id === selectedAttemptId
      ? lastCompletedAttempt
      : studentData.examAttempts.find(a => a.id === selectedAttemptId) ||
        lastCompletedAttempt ||
        studentData.examAttempts[0];

  // 1. Clean Empty State Card
  if (!currentAttempt) {
    return (
      <div className="max-w-3xl mx-auto py-12 px-4 animate-fade-in text-center space-y-6">
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 sm:p-12 border border-slate-200 dark:border-slate-800 shadow-sm space-y-5">
          <div className="w-16 h-16 rounded-3xl bg-blue-50 dark:bg-blue-950/40 text-blue-600 flex items-center justify-center mx-auto">
            <Layers className="w-8 h-8" />
          </div>

          <div className="space-y-2">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
              কোনো পরীক্ষার রেকর্ড নেই (No Exam Records Found)
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto leading-relaxed">
              তুমি এখনো কোনো মডেল টেস্ট বা অধ্যায়ভিত্তিক কুইজ সম্পন্ন করোনি। পরীক্ষা শেষ করার পর প্রতিটি প্রশ্নের নির্ভুল ব্যাখ্যা ও ভুল বিশ্লেষণ এখানে প্রদর্শিত হবে।
            </p>
          </div>

          <div className="pt-2">
            <button
              onClick={() => setActivePage('mcq_exam_center')}
              className="px-6 py-3 rounded-2xl text-xs sm:text-sm font-bold bg-blue-600 text-white hover:bg-blue-700 shadow-md shadow-blue-500/20 inline-flex items-center gap-2"
            >
              <span>MCQ পরীক্ষা কেন্দ্রে যান</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  const {
    examTitle,
    totalQuestions,
    totalScore,
    maxScore,
    percentage,
    correctCount,
    incorrectCount,
    unansweredCount,
    isAutoSubmitted,
    questions,
    weakTopicIds
  } = currentAttempt;

  // Filter questions
  const filteredQuestions = questions.filter(q => {
    const isAnswered = q.studentAnswerIndex !== undefined;
    const isCorrect = q.isCorrect;

    if (filterMode === 'incorrect') return isAnswered && !isCorrect;
    if (filterMode === 'correct') return isAnswered && isCorrect;
    if (filterMode === 'unanswered') return !isAnswered;
    return true;
  });

  return (
    <div className="max-w-4xl mx-auto space-y-6 pb-12 animate-fade-in">
      {/* Attempt Switcher if multiple exams exist */}
      {studentData.examAttempts.length > 1 && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-4 border border-slate-200 dark:border-slate-800 shadow-sm flex items-center gap-2 overflow-x-auto scrollbar-none">
          <span className="text-xs font-bold text-slate-400 shrink-0 px-2 uppercase">পরীক্ষা রেকর্ড:</span>
          {studentData.examAttempts.slice(0, 8).map(attempt => (
            <button
              key={attempt.id}
              onClick={() => setSelectedAttemptId(attempt.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold shrink-0 transition ${
                currentAttempt.id === attempt.id
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200'
              }`}
            >
              {attempt.examTitle} ({attempt.percentage}%)
            </button>
          ))}
        </div>
      )}

      {/* Top Banner / Summary */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-100 dark:border-slate-800">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300">
                পরীক্ষার ফলাফল বিশ্লেষণ (Result Review)
              </span>
              {isAutoSubmitted && (
                <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 dark:bg-amber-950/50 dark:text-amber-300">
                  সময় শেষ হওয়ায় অটো-সাবমিট
                </span>
              )}
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
              {examTitle}
            </h2>
          </div>

          <button
            onClick={() => setActivePage('mcq_exam_center')}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200"
          >
            <RotateCcw className="w-4 h-4" />
            পুনরায় নতুন পরীক্ষা দিন
          </button>
        </div>

        {/* Score Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="bg-blue-50/60 dark:bg-blue-950/30 p-4 rounded-2xl border border-blue-200 dark:border-blue-900/40 text-center">
            <div className="text-3xl font-black font-mono text-blue-600 dark:text-blue-400">
              {totalScore} / {maxScore}
            </div>
            <div className="text-xs font-bold text-slate-500 mt-1">মোট প্রাপ্ত নম্বর</div>
            <div className="text-[11px] font-semibold text-blue-500 font-mono mt-0.5">{percentage}% অর্জন</div>
          </div>

          <div className="bg-emerald-50/60 dark:bg-emerald-950/30 p-4 rounded-2xl border border-emerald-200 dark:border-emerald-900/40 text-center">
            <div className="text-3xl font-black font-mono text-emerald-600 dark:text-emerald-400">
              {correctCount}
            </div>
            <div className="text-xs font-bold text-slate-500 mt-1">সঠিক উত্তর</div>
            <div className="text-[11px] font-semibold text-emerald-500 mt-0.5">প্রশংসনীয় নির্ভুলতা</div>
          </div>

          <div className="bg-rose-50/60 dark:bg-rose-950/30 p-4 rounded-2xl border border-rose-200 dark:border-rose-900/40 text-center">
            <div className="text-3xl font-black font-mono text-rose-600 dark:text-rose-400">
              {incorrectCount}
            </div>
            <div className="text-xs font-bold text-slate-500 mt-1">ভুল উত্তর</div>
            <div className="text-[11px] font-semibold text-rose-500 mt-0.5">রিভিশন দরকার</div>
          </div>

          <div className="bg-amber-50/60 dark:bg-amber-950/30 p-4 rounded-2xl border border-amber-200 dark:border-amber-900/40 text-center">
            <div className="text-3xl font-black font-mono text-amber-600 dark:text-amber-400">
              {unansweredCount}
            </div>
            <div className="text-xs font-bold text-slate-500 mt-1">উত্তরহীন</div>
            <div className="text-[11px] font-semibold text-amber-500 mt-0.5">পরবর্তীতে চেষ্টা করুন</div>
          </div>
        </div>

        {/* Weak Topics Callout */}
        {weakTopicIds && weakTopicIds.length > 0 && (
          <div className="mt-6 p-4 rounded-2xl bg-rose-50 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-900/40 space-y-1">
            <span className="text-xs font-bold text-rose-800 dark:text-rose-300">
              শনাক্তকৃত দুর্বল টপিকসমূহ (Weak Areas Identified):
            </span>
            <div className="flex flex-wrap gap-2 pt-1">
              {weakTopicIds.map((tid, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-xl bg-white dark:bg-slate-900 text-xs font-medium text-rose-700 dark:text-rose-400 border border-rose-200 dark:border-rose-800"
                >
                  {tid}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center justify-between">
        <h3 className="text-base font-bold text-slate-900 dark:text-white">
          প্রশ্নের বিশদ ভুল ও সঠিক উত্তর বিশ্লেষণ ({filteredQuestions.length})
        </h3>

        <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800 p-1 rounded-2xl">
          <button
            onClick={() => setFilterMode('all')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition ${
              filterMode === 'all'
                ? 'bg-white dark:bg-slate-900 text-blue-600 shadow-sm'
                : 'text-slate-600 dark:text-slate-400'
            }`}
          >
            সব প্রশ্ন
          </button>
          <button
            onClick={() => setFilterMode('incorrect')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition ${
              filterMode === 'incorrect'
                ? 'bg-white dark:bg-slate-900 text-rose-600 shadow-sm'
                : 'text-slate-600 dark:text-slate-400'
            }`}
          >
            ভুল ({incorrectCount})
          </button>
          <button
            onClick={() => setFilterMode('correct')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition ${
              filterMode === 'correct'
                ? 'bg-white dark:bg-slate-900 text-emerald-600 shadow-sm'
                : 'text-slate-600 dark:text-slate-400'
            }`}
          >
            সঠিক ({correctCount})
          </button>
          <button
            onClick={() => setFilterMode('unanswered')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition ${
              filterMode === 'unanswered'
                ? 'bg-white dark:bg-slate-900 text-amber-600 shadow-sm'
                : 'text-slate-600 dark:text-slate-400'
            }`}
          >
            উত্তরহীন ({unansweredCount})
          </button>
        </div>
      </div>

      {/* Questions Side-by-Side Review List */}
      <div className="space-y-4">
        {filteredQuestions.map((q, idx) => {
          const orig = q.originalQuestion;
          const isAnswered = q.studentAnswerIndex !== undefined;
          const isCorrect = q.isCorrect;

          return (
            <div
              key={q.questionId || idx}
              className={`bg-white dark:bg-slate-900 rounded-3xl p-5 sm:p-6 border shadow-sm space-y-4 ${
                !isAnswered
                  ? 'border-amber-200 dark:border-amber-900/40'
                  : isCorrect
                  ? 'border-emerald-200 dark:border-emerald-900/40'
                  : 'border-rose-200 dark:border-rose-900/40'
              }`}
            >
              {/* Question Header */}
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-slate-500 font-mono">প্রশ্ন {idx + 1}</span>
                  {orig.boardYearInfo && (
                    <span className="px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-mono">
                      {orig.boardYearInfo.board} {orig.boardYearInfo.year}
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-2">
                  {!isAnswered ? (
                    <span className="px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300 font-bold">
                      উত্তরহীন
                    </span>
                  ) : isCorrect ? (
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300 font-bold flex items-center gap-1">
                      <CheckCircle className="w-3.5 h-3.5" /> সঠিক উত্তর
                    </span>
                  ) : (
                    <span className="px-2.5 py-0.5 rounded-full bg-rose-100 text-rose-800 dark:bg-rose-950/60 dark:text-rose-300 font-bold flex items-center gap-1">
                      <XCircle className="w-3.5 h-3.5" /> ভুল উত্তর
                    </span>
                  )}
                </div>
              </div>

              {/* Question Text */}
              <div className="text-sm sm:text-base font-bold text-slate-900 dark:text-white leading-relaxed">
                {orig.questionText}
              </div>

              {/* Shuffled Options Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm">
                {q.shuffledOptions.map((opt, oIdx) => {
                  const isThisCorrect = oIdx === q.correctShuffledIndex;
                  const isThisStudentChoice = oIdx === q.studentAnswerIndex;

                  let cardStyle = 'bg-slate-50 dark:bg-slate-800/40 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300';
                  if (isThisCorrect) {
                    cardStyle = 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-400 font-bold text-emerald-800 dark:text-emerald-300';
                  } else if (isThisStudentChoice && !isCorrect) {
                    cardStyle = 'bg-rose-50 dark:bg-rose-950/40 border-rose-400 font-bold text-rose-800 dark:text-rose-300';
                  }

                  return (
                    <div
                      key={oIdx}
                      className={`p-3 rounded-2xl border flex items-center justify-between ${cardStyle}`}
                    >
                      <div className="flex items-center gap-2">
                        <span className="font-mono font-bold text-slate-400">
                          {String.fromCharCode(65 + oIdx)}.
                        </span>
                        <span>{opt}</span>
                      </div>
                      {isThisCorrect && (
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-200 dark:bg-emerald-800 text-emerald-900 dark:text-emerald-100">
                          সঠিক উত্তর
                        </span>
                      )}
                      {isThisStudentChoice && !isCorrect && (
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-rose-200 dark:bg-rose-800 text-rose-900 dark:text-rose-100">
                          তোমার উত্তর
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Explanation & Mistake Breakdown */}
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 space-y-2 text-xs">
                <div>
                  <span className="font-bold text-slate-900 dark:text-white block mb-0.5">
                    ব্যাখ্যা ও সমাধান:
                  </span>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    {orig.explanation}
                  </p>
                </div>

                {orig.whyIncorrect && orig.whyIncorrect.length > 0 && (
                  <div className="pt-2 border-t border-slate-200 dark:border-slate-700">
                    <span className="font-bold text-slate-700 dark:text-slate-300 block mb-1">
                      অন্যান্য অপশন কেন ভুল ছিল:
                    </span>
                    <ul className="list-disc list-inside space-y-0.5 text-slate-500">
                      {orig.whyIncorrect.map((why, wIdx) => (
                        <li key={wIdx}>{why}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Add to Flashcard Button for spaced revision */}
              <div className="pt-1 flex justify-end">
                <button
                  onClick={() => {
                    addPersonalFlashcard({
                      subjectId: orig.subjectId,
                      paperNumber: orig.paperNumber,
                      chapterId: orig.chapterId,
                      front: orig.questionText,
                      back: orig.explanation,
                      category: 'Definition',
                      nextReviewDate: new Date().toISOString().split('T')[0],
                      intervalDays: 1,
                      repetitions: 0,
                      easeFactor: 2.5
                    });
                    alert('প্রশ্নটি তোমার রিভিশন ডেকে সংরক্ষিত হয়েছে!');
                  }}
                  className="px-3 py-1.5 rounded-xl text-xs font-semibold text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-950/40 transition flex items-center gap-1.5"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>রিভিশন ডেকে যুক্ত করুন</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
