import React from 'react';
import { useApp } from '../context/AppContext';
import {
  Award,
  CheckCircle,
  XCircle,
  HelpCircle,
  Clock,
  ArrowLeft,
  RotateCcw,
  Sparkles,
  BookOpen
} from 'lucide-react';

export const ExamResultView: React.FC = () => {
  const {
    lastCompletedAttempt,
    setActivePage,
    setSelectedSubjectId,
    setSelectedPaperNumber,
    addPersonalFlashcard
  } = useApp();

  if (!lastCompletedAttempt) {
    return (
      <div className="p-8 text-center text-slate-500">
        কোনো পরীক্ষার ফলাফল পাওয়া যায়নি।{' '}
        <button
          onClick={() => setActivePage('mcq_exam_center')}
          className="text-blue-600 font-bold underline ml-1"
        >
          পরীক্ষা কেন্দ্রে যান
        </button>
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
  } = lastCompletedAttempt;

  return (
    <div className="max-w-4xl mx-auto space-y-6 pb-12 animate-fade-in">
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
            <div className="text-[11px] font-semibold text-emerald-500 mt-0.5">প্রশংসনীয় দক্ষতা</div>
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

        {/* Practice Label Disclaimer */}
        <div className="mt-6 bg-slate-50 dark:bg-slate-800/40 p-3 rounded-2xl border border-slate-200 dark:border-slate-800 text-[11px] text-slate-500 flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-blue-500 shrink-0" />
          <span>
            <strong>স্মারকলিপি:</strong> এই ফলাফল ও ভুল বিশ্লেষণের ব্যাখ্যাসমূহ K&M Blueprint অনুশীলন সহায়িকা হিসেবে প্রস্তুত করা হয়েছে, যা কোনো অফিশিয়াল বোর্ড পরীক্ষকের মার্কিং নয়।
          </span>
        </div>
      </div>

      {/* Question by Question In-depth Mistake Analysis */}
      <div className="space-y-4">
        <h3 className="text-base font-bold text-slate-900 dark:text-white px-2">
          প্রতিটি প্রশ্নের বিশদ ব্যাখ্যা ও ভুল হওয়ার কারণ (Mistake Explanations)
        </h3>

        {questions.map((q, idx) => {
          const isCorrect = q.isCorrect === true;
          const isUnanswered = q.studentAnswerIndex === undefined || q.studentAnswerIndex === null;
          const studentAnsText = !isUnanswered ? q.shuffledOptions[q.studentAnswerIndex!] : 'উত্তর দেওয়া হয়নি';
          const correctAnsText = q.shuffledOptions[q.correctShuffledIndex];

          return (
            <div
              key={idx}
              className={`bg-white dark:bg-slate-900 rounded-3xl p-6 border shadow-sm transition ${
                isCorrect
                  ? 'border-emerald-200 dark:border-emerald-950'
                  : isUnanswered
                  ? 'border-amber-200 dark:border-amber-950'
                  : 'border-rose-200 dark:border-rose-950'
              }`}
            >
              {/* Question Header */}
              <div className="flex items-start justify-between gap-3 mb-3">
                <div className="flex items-center gap-2">
                  <span className="font-mono font-bold text-xs px-2.5 py-1 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                    প্রশ্ন {idx + 1}
                  </span>
                  {q.originalQuestion.origin && (
                    <span className="text-[10px] font-semibold text-slate-400">
                      {q.originalQuestion.origin}
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-1.5 font-bold text-xs">
                  {isCorrect ? (
                    <span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400">
                      <CheckCircle className="w-4 h-4" /> সঠিক (+১)
                    </span>
                  ) : isUnanswered ? (
                    <span className="flex items-center gap-1 text-amber-600 dark:text-amber-400">
                      <HelpCircle className="w-4 h-4" /> বাদ পড়েছে (০)
                    </span>
                  ) : (
                    <span className="flex items-center gap-1 text-rose-600 dark:text-rose-400">
                      <XCircle className="w-4 h-4" /> ভুল হয়েছে (০)
                    </span>
                  )}
                </div>
              </div>

              {/* Question Text */}
              <p className="text-sm sm:text-base font-bold text-slate-900 dark:text-white mb-4">
                {q.originalQuestion.questionText}
              </p>

              {/* Answers Comparison */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4 text-xs">
                <div className={`p-3 rounded-xl border ${
                  isCorrect
                    ? 'bg-emerald-50/50 border-emerald-200 text-emerald-900 dark:bg-emerald-950/30 dark:border-emerald-900 dark:text-emerald-200'
                    : 'bg-rose-50/50 border-rose-200 text-rose-900 dark:bg-rose-950/30 dark:border-rose-900 dark:text-rose-200'
                }`}>
                  <span className="font-semibold block mb-0.5 text-slate-500">তোমার উত্তর:</span>
                  <span className="font-bold">{studentAnsText}</span>
                </div>

                <div className="p-3 rounded-xl border bg-emerald-50/50 border-emerald-200 text-emerald-900 dark:bg-emerald-950/30 dark:border-emerald-900 dark:text-emerald-200">
                  <span className="font-semibold block mb-0.5 text-slate-500">সঠিক উত্তর:</span>
                  <span className="font-bold">{correctAnsText}</span>
                </div>
              </div>

              {/* In-depth Explanation */}
              <div className="bg-slate-50 dark:bg-slate-800/60 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-2 text-xs">
                <div className="font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-blue-500" />
                  বিশদ একাডেমিক ব্যাখ্যা:
                </div>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  {q.originalQuestion.explanation}
                </p>

                {/* Why Incorrect Explanation */}
                {q.originalQuestion.whyIncorrect && q.originalQuestion.whyIncorrect.length > 0 && !isCorrect && (
                  <div className="pt-2 border-t border-slate-200/60 dark:border-slate-700/60">
                    <span className="font-bold text-rose-600 dark:text-rose-400 block mb-1">
                      অন্য অপশন কেন ভুল? (Why other options are wrong):
                    </span>
                    <ul className="list-disc list-inside space-y-1 text-slate-600 dark:text-slate-400">
                      {q.originalQuestion.whyIncorrect.map((reason, rIdx) => (
                        <li key={rIdx}>{reason}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Step by step solution if numerical */}
                {q.originalQuestion.stepByStepSolution && q.originalQuestion.stepByStepSolution.length > 0 && (
                  <div className="pt-2 border-t border-slate-200/60 dark:border-slate-700/60">
                    <span className="font-bold text-slate-700 dark:text-slate-300 block mb-1">
                      ধাপে ধাপে সমাধান (Step-by-step Solution):
                    </span>
                    <ol className="list-decimal list-inside space-y-1 text-slate-600 dark:text-slate-400">
                      {q.originalQuestion.stepByStepSolution.map((step, sIdx) => (
                        <li key={sIdx}>{step}</li>
                      ))}
                    </ol>
                  </div>
                )}
              </div>

              {/* Weak topic action */}
              {!isCorrect && (
                <div className="mt-3 flex items-center justify-end">
                  <button
                    onClick={() => {
                      addPersonalFlashcard({
                        subjectId: q.originalQuestion.subjectId,
                        paperNumber: q.originalQuestion.paperNumber,
                        chapterId: q.originalQuestion.chapterId,
                        front: q.originalQuestion.questionText,
                        back: `${q.originalQuestion.correctAnswerText || correctAnsText}\n\nব্যাখ্যা: ${q.originalQuestion.explanation}`,
                        category: 'Custom Note',
                        nextReviewDate: new Date().toISOString().split('T')[0],
                        intervalDays: 1,
                        easeFactor: 2.5,
                        repetitions: 0
                      });
                      alert('এই ভুল প্রশ্নটি তোমার রিভিশন ফ্ল্যাশকার্ড ডেকে যুক্ত করা হয়েছে!');
                    }}
                    className="text-xs font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-400 flex items-center gap-1"
                  >
                    + এই প্রশ্নটি রিভিশন ফ্ল্যাশকার্ডে যুক্ত করুন
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
