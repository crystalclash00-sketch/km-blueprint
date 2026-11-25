import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { evaluateExamSubmission } from '../services/examService';
import {
  Clock,
  AlertTriangle,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  HelpCircle,
  Send
} from 'lucide-react';

export const ExamRunner: React.FC = () => {
  const {
    activeExamAttempt,
    setActiveExamAttempt,
    setLastCompletedAttempt,
    saveExamAttemptRecord,
    setActivePage
  } = useApp();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [remainingSeconds, setRemainingSeconds] = useState<number>(0);
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  // Reliable examination timer based on absolute deadline timestamp
  useEffect(() => {
    if (!activeExamAttempt) return;

    const deadlineMs = new Date(activeExamAttempt.deadline).getTime();

    const updateTimer = () => {
      const nowMs = Date.now();
      const diffSeconds = Math.max(0, Math.floor((deadlineMs - nowMs) / 1000));
      setRemainingSeconds(diffSeconds);

      // Auto-submit on timeout
      if (diffSeconds <= 0 && activeExamAttempt.status === 'in_progress') {
        handleCompleteExam(true);
      }
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, [activeExamAttempt]);

  if (!activeExamAttempt) {
    return (
      <div className="p-8 text-center text-slate-500">
        কোনো সক্রিয় পরীক্ষা পাওয়া যায়নি।{' '}
        <button
          onClick={() => setActivePage('mcq_exam_center')}
          className="text-blue-600 font-bold underline ml-1"
        >
          পরীক্ষা কেন্দ্রে ফিরে যান
        </button>
      </div>
    );
  }

  const currentQ = activeExamAttempt.questions[currentIndex];
  const answeredCount = activeExamAttempt.questions.filter(q => q.studentAnswerIndex !== undefined).length;
  const unansweredCount = activeExamAttempt.questions.length - answeredCount;

  // Select Option
  const handleSelectOption = (optionIndex: number) => {
    if (activeExamAttempt.status !== 'in_progress') return;

    const updatedQuestions = [...activeExamAttempt.questions];
    updatedQuestions[currentIndex] = {
      ...updatedQuestions[currentIndex],
      studentAnswerIndex: optionIndex
    };

    setActiveExamAttempt({
      ...activeExamAttempt,
      questions: updatedQuestions
    });
  };

  // Submit Exam (Manual or Auto on zero seconds)
  const handleCompleteExam = (isAutoSubmitted: boolean = false) => {
    const evaluated = evaluateExamSubmission(activeExamAttempt, isAutoSubmitted);
    saveExamAttemptRecord(evaluated);
    setLastCompletedAttempt(evaluated);
    setActiveExamAttempt(null);
    setShowConfirmModal(false);
    setActivePage('exam_results');
  };

  const minutes = Math.floor(remainingSeconds / 60);
  const seconds = remainingSeconds % 60;
  const isTimeCritical = remainingSeconds <= 120; // 2 minutes left

  return (
    <div className="max-w-4xl mx-auto space-y-6 pb-12 animate-fade-in">
      {/* Exam Header */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 sticky top-20 z-20 backdrop-blur-md">
        <div>
          <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
            {activeExamAttempt.examTitle}
          </h2>
          <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            উত্তর দেওয়া হয়েছে: <span className="font-bold text-blue-600">{answeredCount}</span> / {activeExamAttempt.totalQuestions} টি প্রশ্ন
          </div>
        </div>

        {/* Reliable Timer */}
        <div className={`flex items-center gap-2 px-4 py-2 rounded-2xl border font-mono font-bold text-lg ${
          isTimeCritical
            ? 'bg-rose-50 text-rose-600 border-rose-200 dark:bg-rose-950/40 dark:border-rose-900 dark:text-rose-400 animate-pulse'
            : 'bg-slate-100 text-slate-800 border-slate-200 dark:bg-slate-800 dark:border-slate-700 dark:text-white'
        }`}>
          <Clock className="w-5 h-5 shrink-0" />
          <span>
            {minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}
          </span>
        </div>

        {/* Submit Button */}
        <button
          onClick={() => setShowConfirmModal(true)}
          className="px-4 py-2 text-xs sm:text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-md shadow-blue-500/20 flex items-center gap-1.5"
        >
          <Send className="w-4 h-4" />
          <span>পরীক্ষা সমাপ্ত (Submit)</span>
        </button>
      </div>

      {/* Main Question Display */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm">
        <div className="flex items-center justify-between text-xs font-semibold text-slate-400 mb-4 pb-3 border-b border-slate-100 dark:border-slate-800">
          <span>প্রশ্ন {currentIndex + 1} / {activeExamAttempt.totalQuestions}</span>
          <span className="px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-mono">
            {currentQ.originalQuestion.difficulty}
          </span>
        </div>

        <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-relaxed mb-6">
          {currentQ.originalQuestion.questionText}
        </h3>

        {/* Shuffled Options */}
        <div className="space-y-3 mb-8">
          {currentQ.shuffledOptions.map((option, idx) => {
            const isSelected = currentQ.studentAnswerIndex === idx;
            const optionLabels = ['ক', 'খ', 'গ', 'ঘ'];

            return (
              <div
                key={idx}
                onClick={() => handleSelectOption(idx)}
                className={`flex items-center gap-3.5 p-4 rounded-2xl border cursor-pointer transition select-none ${
                  isSelected
                    ? 'border-blue-500 bg-blue-50/70 dark:bg-blue-950/40 text-blue-950 dark:text-blue-100 shadow-sm'
                    : 'border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/40 text-slate-800 dark:text-slate-200'
                }`}
              >
                <div className={`w-7 h-7 rounded-xl flex items-center justify-center font-bold text-xs shrink-0 transition ${
                  isSelected
                    ? 'bg-blue-600 text-white'
                    : 'bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                }`}>
                  {optionLabels[idx] || idx + 1}
                </div>
                <div className="text-sm font-medium leading-relaxed">{option}</div>
              </div>
            );
          })}
        </div>

        {/* Question Navigation Buttons */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800">
          <button
            onClick={() => setCurrentIndex(prev => Math.max(0, prev - 1))}
            disabled={currentIndex === 0}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 disabled:opacity-40"
          >
            <ChevronLeft className="w-4 h-4" />
            পূর্ববর্তী প্রশ্ন
          </button>

          <span className="text-xs font-semibold text-slate-400">
            {currentIndex + 1} of {activeExamAttempt.totalQuestions}
          </span>

          <button
            onClick={() => setCurrentIndex(prev => Math.min(activeExamAttempt.totalQuestions - 1, prev + 1))}
            disabled={currentIndex === activeExamAttempt.totalQuestions - 1}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 disabled:opacity-40"
          >
            পরবর্তী প্রশ্ন
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Question Palette Grid */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm">
        <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">
          প্রশ্ন তালিকা (Question Navigator)
        </h4>
        <div className="flex flex-wrap gap-2">
          {activeExamAttempt.questions.map((q, idx) => {
            const isAnswered = q.studentAnswerIndex !== undefined;
            const isCurrent = idx === currentIndex;

            return (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-9 h-9 rounded-xl font-mono text-xs font-bold transition flex items-center justify-center ${
                  isCurrent
                    ? 'ring-2 ring-blue-600 ring-offset-2 dark:ring-offset-slate-900'
                    : ''
                } ${
                  isAnswered
                    ? 'bg-blue-600 text-white'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200'
                }`}
              >
                {idx + 1}
              </button>
            );
          })}
        </div>
      </div>

      {/* Submission Confirmation Modal */}
      {showConfirmModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-white dark:bg-slate-900 rounded-3xl max-w-md w-full border border-slate-200 dark:border-slate-800 shadow-2xl p-6">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
              পরীক্ষা জমা নিশ্চিতকরণ
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">
              তুমি কি নিশ্চিত যে পরীক্ষা শেষ করে ফলাফল দেখতে চাও?
            </p>

            <div className="bg-slate-50 dark:bg-slate-800/60 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-2 text-xs mb-6">
              <div className="flex justify-between">
                <span className="text-slate-500">উত্তর দেওয়া হয়েছে:</span>
                <span className="font-bold text-blue-600">{answeredCount} টি</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">বাকি প্রশ্ন:</span>
                <span className="font-bold text-amber-600">{unansweredCount} টি</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">বাকি সময়:</span>
                <span className="font-mono font-bold text-slate-800 dark:text-slate-200">
                  {minutes} মি. {seconds} সে.
                </span>
              </div>
            </div>

            <div className="flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => setShowConfirmModal(false)}
                className="px-4 py-2 text-xs font-semibold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl"
              >
                ফিরে যাও (Keep Answering)
              </button>
              <button
                type="button"
                onClick={() => handleCompleteExam(false)}
                className="px-5 py-2.5 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-md shadow-blue-500/20"
              >
                জমা দাও (Submit Now)
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
