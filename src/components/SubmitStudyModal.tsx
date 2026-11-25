import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { analyzeStudySubmissionText, ParsedSubmissionDraft } from '../services/submissionService';
import { StudySubmissionActivity } from '../types';
import {
  X,
  Sparkles,
  BookOpen,
  CheckCircle,
  Clock,
  HelpCircle,
  ArrowRight,
  Edit3,
  AlertTriangle
} from 'lucide-react';

export const SubmitStudyModal: React.FC = () => {
  const {
    isSubmitStudyModalOpen,
    setIsSubmitStudyModalOpen,
    currentUser,
    curriculum,
    studentData,
    addStudySubmission
  } = useApp();

  const [naturalText, setNaturalText] = useState('');
  const [step, setStep] = useState<'input' | 'summary'>('input');
  const [draftSummary, setDraftSummary] = useState<ParsedSubmissionDraft | null>(null);

  if (!isSubmitStudyModalOpen) return null;

  const handleAnalyze = (e: React.FormEvent) => {
    e.preventDefault();
    if (!naturalText.trim()) return;

    const analysis = analyzeStudySubmissionText(
      naturalText,
      curriculum,
      studentData.topicStatuses
    );
    setDraftSummary(analysis);
    setStep('summary');
  };

  const handleConfirmAndSave = () => {
    if (!draftSummary) return;

    const submissionRecord: StudySubmissionActivity = {
      id: 'sub-' + Date.now(),
      userId: currentUser.id,
      submittedAt: new Date().toISOString(),
      date: new Date().toISOString().split('T')[0],
      subjectId: draftSummary.subjectId,
      paperNumber: draftSummary.paperNumber,
      chapterId: draftSummary.chapterId,
      topicIds: draftSummary.topicIds,
      naturalLanguageNote: naturalText,
      whatRead: draftSummary.whatRead,
      whatStudied: draftSummary.whatStudied,
      whatUnderstood: draftSummary.whatUnderstood,
      whatPractised: draftSummary.whatPractised,
      mcqsAttemptedCount: draftSummary.mcqsAttemptedCount,
      cqsAttemptedCount: draftSummary.cqsAttemptedCount,
      numericalProblemsCount: draftSummary.numericalProblemsCount,
      formulasRevised: draftSummary.formulasRevised,
      timeSpentMinutes: draftSummary.timeSpentMinutes,
      difficulties: draftSummary.difficulties,
      suggestedTopicStatusUpdates: draftSummary.suggestedUpdates.map(u => ({
        topicId: u.topicId,
        previousStatus: u.previousStatus,
        suggestedStatus: u.suggestedStatus,
        reason: u.reason
      })),
      isConfirmedByStudent: true,
      confirmedAt: new Date().toISOString()
    };

    addStudySubmission(submissionRecord);
    setIsSubmitStudyModalOpen(false);
    setNaturalText('');
    setStep('input');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in overflow-y-auto">
      <div className="bg-white dark:bg-slate-900 rounded-3xl max-w-xl w-full border border-slate-200 dark:border-slate-800 shadow-2xl p-6 relative my-8">
        <button
          onClick={() => {
            setIsSubmitStudyModalOpen(false);
            setStep('input');
          }}
          className="absolute right-4 top-4 p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-full"
        >
          <X className="w-5 h-5" />
        </button>

        {step === 'input' ? (
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                <Edit3 className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                  আজকের পড়াশোনা জমা দিন (Submit My Study)
                </h2>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  সহজ বাংলায় তোমার আজকের অগ্রগতি বর্ণনা করো
                </p>
              </div>
            </div>

            <form onSubmit={handleAnalyze} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-slate-800 dark:text-slate-200 mb-2">
                  আজ তুমি কী কী পড়েছো এবং কী কী কাজ শেষ করেছো?
                </label>
                <textarea
                  rows={5}
                  value={naturalText}
                  onChange={e => setNaturalText(e.target.value)}
                  placeholder="যেমন: আজ Physics 1st Paper-এর প্রথম অধ্যায়ের ভেক্টর পড়েছি। যোগ ও বিয়োগ বুঝেছি, ১৫টি MCQ করেছি এবং ৩টি গাণিতিক সমস্যা সমাধান করেছি।"
                  className="w-full p-4 rounded-2xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/70 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-slate-400 dark:placeholder:text-slate-500 leading-relaxed"
                />
              </div>

              {/* Helpful suggestions */}
              <div className="bg-slate-50 dark:bg-slate-800/40 p-3 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-1.5 text-xs text-slate-600 dark:text-slate-400">
                <div className="font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-blue-500" />
                  এআই প্রসেসিং ও রুল ইঞ্জিন সুবিধা:
                </div>
                <div>• বিষয়, অধ্যায়, টপিক, MCQ সংখ্যা ও সময় স্বয়ংক্রিয়ভাবে শনাক্ত হবে।</div>
                <div>• সংরক্ষণ করার পূর্বে তোমাকে বিস্তারিত সারাংশ দেখিয়ে নিশ্চিত করা হবে।</div>
              </div>

              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setIsSubmitStudyModalOpen(false)}
                  className="px-4 py-2 text-xs font-semibold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl"
                >
                  বাতিল
                </button>
                <button
                  type="submit"
                  disabled={!naturalText.trim()}
                  className="px-5 py-2.5 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 disabled:opacity-50 rounded-xl shadow-md shadow-blue-500/20 flex items-center gap-1.5"
                >
                  <span>বিশ্লেষণ ও সারাংশ দেখুন</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>
        ) : (
          /* Confirmation Summary View */
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                <CheckCircle className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                  তোমার আজকের পড়াশোনার সারাংশ
                </h2>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  তথ্যগুলো যাচাই করো এবং নিশ্চিত করলেই কেবল সিলেবাস প্রগ্রেস আপডেট হবে
                </p>
              </div>
            </div>

            {draftSummary && (
              <div className="space-y-4 mb-6">
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-slate-50 dark:bg-slate-800/50 p-3 rounded-2xl border border-slate-200 dark:border-slate-800">
                    <div className="text-[11px] font-semibold text-slate-400 uppercase">বিষয় ও পত্র</div>
                    <div className="text-xs font-bold text-slate-800 dark:text-slate-200 mt-0.5">
                      {draftSummary.subjectId.toUpperCase()} (Paper {draftSummary.paperNumber})
                    </div>
                  </div>
                  <div className="bg-slate-50 dark:bg-slate-800/50 p-3 rounded-2xl border border-slate-200 dark:border-slate-800">
                    <div className="text-[11px] font-semibold text-slate-400 uppercase">পড়ার সময় (Self-Reported)</div>
                    <div className="text-xs font-bold text-slate-800 dark:text-slate-200 mt-0.5 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-blue-500" />
                      {draftSummary.timeSpentMinutes} মিনিট
                    </div>
                  </div>
                </div>

                <div className="bg-slate-50 dark:bg-slate-800/50 p-3.5 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-2 text-xs">
                  <div>
                    <span className="font-semibold text-slate-500">যা পড়া হয়েছে: </span>
                    <span className="text-slate-800 dark:text-slate-200">{draftSummary.whatStudied}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-slate-500">যা অনুশীলন হয়েছে: </span>
                    <span className="text-slate-800 dark:text-slate-200">{draftSummary.whatPractised}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-slate-500">অনুধাবন ও সমাপ্তি: </span>
                    <span className="text-slate-800 dark:text-slate-200">{draftSummary.whatUnderstood}</span>
                  </div>
                </div>

                {/* Suggested Topic Updates */}
                {draftSummary.suggestedUpdates.length > 0 && (
                  <div className="space-y-2">
                    <div className="text-xs font-bold text-slate-700 dark:text-slate-300">
                      প্রস্তাবিত সিলেবাস স্ট্যাটাস পরিবর্তন:
                    </div>
                    {draftSummary.suggestedUpdates.map((u, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between p-2.5 rounded-xl bg-blue-50/70 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-900/50 text-xs"
                      >
                        <span className="font-medium text-slate-800 dark:text-slate-200 truncate pr-2">
                          {u.topicTitle}
                        </span>
                        <div className="flex items-center gap-1.5 shrink-0">
                          <span className="text-slate-400">{u.previousStatus}</span>
                          <span>→</span>
                          <span className="font-bold text-blue-600 dark:text-blue-400 uppercase">
                            {u.suggestedStatus}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/40 p-3 rounded-2xl flex items-start gap-2.5 text-xs text-amber-800 dark:text-amber-200">
                  <AlertTriangle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    তুমি নিচে <strong>“নিশ্চিত ও সংরক্ষণ (Confirm & Save)”</strong> বাটনে চাপ দিলেই কেবল তোমার ব্যক্তিগত সিলেবাস রেকর্ড আপডেট হবে।
                  </div>
                </div>
              </div>
            )}

            <div className="flex items-center justify-between gap-3 pt-2 border-t border-slate-200 dark:border-slate-800">
              <button
                type="button"
                onClick={() => setStep('input')}
                className="px-4 py-2 text-xs font-semibold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl"
              >
                এডিট করুন (Edit)
              </button>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setIsSubmitStudyModalOpen(false);
                    setStep('input');
                  }}
                  className="px-4 py-2 text-xs font-semibold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl"
                >
                  বাতিল
                </button>
                <button
                  type="button"
                  onClick={handleConfirmAndSave}
                  className="px-5 py-2.5 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl shadow-md shadow-emerald-500/20"
                >
                  নিশ্চিত ও সংরক্ষণ (Confirm and Save)
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
