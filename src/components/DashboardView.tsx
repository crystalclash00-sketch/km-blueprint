import React from 'react';
import { useApp } from '../context/AppContext';
import { HscCountdownBanner } from './HscCountdownBanner';
import {
  PieChart,
  CheckCircle,
  Clock,
  Sparkles,
  ArrowRight,
  BookOpen,
  Award,
  Layers,
  AlertTriangle,
  Flame,
  TrendingUp,
  Target,
  FileCheck
} from 'lucide-react';
import { startNewExamAttempt } from '../services/examService';

export const DashboardView: React.FC = () => {
  const {
    currentUser,
    curriculum,
    studentData,
    overallCompletionPercentage,
    overallRemainingPercentage,
    totalConfirmedTopics,
    completedConfirmedTopicsCount,
    setIsSubmitStudyModalOpen,
    setActivePage,
    setSelectedSubjectId,
    setSelectedPaperNumber,
    setSelectedChapterId,
    questionBank,
    setActiveExamAttempt
  } = useApp();

  // Find next incomplete topic
  let nextIncompleteTopic: { subjectName: string; paperTitle: string; chapterTitle: string; topicTitle: string; chapterId: string; subjectId: string; paperNumber: 1 | 2 } | null = null;
  for (const s of curriculum) {
    for (const p of s.papers) {
      for (const c of p.chapters) {
        for (const t of c.topics) {
          if (!studentData.confirmedCompletedTopics.includes(t.id)) {
            nextIncompleteTopic = {
              subjectName: s.name,
              paperTitle: p.title,
              chapterTitle: c.title,
              topicTitle: t.title,
              chapterId: c.id,
              subjectId: s.id,
              paperNumber: p.paperNumber
            };
            break;
          }
        }
        if (nextIncompleteTopic) break;
      }
      if (nextIncompleteTopic) break;
    }
    if (nextIncompleteTopic) break;
  }

  // Quick Start Exam
  const handleQuickExam = () => {
    const attempt = startNewExamAttempt(
      studentData.userId,
      'phy',
      1,
      [],
      questionBank,
      25,
      25
    );
    setActiveExamAttempt(attempt);
    setActivePage('exam_runner');
  };

  const todayDateStr = new Date().toISOString().split('T')[0];
  const todaySubmissions = studentData.submissions.filter(s => s.date === todayDateStr);
  const recentExam = studentData.examAttempts[0];

  return (
    <div className="space-y-6 pb-12 animate-fade-in">
      {/* 1. Permanent HSC Examination Countdown Banner */}
      <HscCountdownBanner />

      {/* Greeting & Top Stats */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
              স্বাগতম, {currentUser.displayName}!
            </h2>
            <span className="inline-flex items-center gap-1 text-xs font-bold px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300">
              <Flame className="w-3.5 h-3.5 text-amber-500" />
              {studentData.streakDays} দিন স্ট্রিক
            </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
            তোমার সার্বিক এইচএসসি বিজ্ঞান সিলেবাস অগ্রগতি এবং আজকের প্রস্তুতি একনজরে দেখো
          </p>
        </div>

        {/* 6. Submit My Study Action Button & Quick Exam */}
        <div className="flex items-center gap-2.5">
          <button
            onClick={() => setIsSubmitStudyModalOpen(true)}
            className="px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold bg-blue-600 text-white hover:bg-blue-700 shadow-md shadow-blue-500/20 flex items-center gap-2"
          >
            <CheckCircle className="w-4 h-4" />
            <span>আজকের পড়াশোনা জমা দিন</span>
          </button>
          <button
            onClick={handleQuickExam}
            className="px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold bg-indigo-600 text-white hover:bg-indigo-700 shadow-md shadow-indigo-500/20 flex items-center gap-2"
          >
            <Layers className="w-4 h-4" />
            <span>২৫ MCQ পরীক্ষা দিন</span>
          </button>
        </div>
      </div>

      {/* 2 & 3. Overall Completion vs Remaining Syllabus Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Overall Completion */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              সিলেবাস সম্পন্ন (Completed)
            </span>
            <CheckCircle className="w-4 h-4 text-emerald-500" />
          </div>
          <div className="text-3xl font-black font-mono text-emerald-600 dark:text-emerald-400">
            {overallCompletionPercentage}%
          </div>
          <div className="text-xs text-slate-500 mt-1">
            {completedConfirmedTopicsCount} / {totalConfirmedTopics} টি টপিক নিশ্চিত সম্পন্ন
          </div>
          <div className="w-full h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden mt-3">
            <div className="h-full bg-emerald-500 rounded-full" style={{ width: `${overallCompletionPercentage}%` }} />
          </div>
        </div>

        {/* 3 & 7. Overall Remaining with Shortcut */}
        <div
          onClick={() => setActivePage('remaining_syllabus')}
          className="bg-white dark:bg-slate-900 rounded-3xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm cursor-pointer hover:border-blue-400 transition group"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              বাকি সিলেবাস (Remaining)
            </span>
            <PieChart className="w-4 h-4 text-amber-500 group-hover:scale-110 transition-transform" />
          </div>
          <div className="text-3xl font-black font-mono text-amber-600 dark:text-amber-400">
            {overallRemainingPercentage}%
          </div>
          <div className="text-xs text-slate-500 mt-1 flex items-center justify-between">
            <span>{totalConfirmedTopics - completedConfirmedTopicsCount} টি টপিক বাকি</span>
            <span className="text-blue-600 font-bold flex items-center gap-0.5">বিস্তারিত <ArrowRight className="w-3 h-3" /></span>
          </div>
          <div className="w-full h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden mt-3">
            <div className="h-full bg-amber-500 rounded-full" style={{ width: `${overallRemainingPercentage}%` }} />
          </div>
        </div>

        {/* 9 & 10. Study Goal & Focus Time */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              আজকের ফোকাস সময় (Focus Time)
            </span>
            <Clock className="w-4 h-4 text-blue-500" />
          </div>
          <div className="text-3xl font-black font-mono text-blue-600 dark:text-blue-400">
            {studentData.timerSessions.reduce((acc, s) => acc + s.durationMinutes, 0)} মি.
          </div>
          <div className="text-xs text-slate-500 mt-1">
            স্বয়ংক্রিয় টাইমার দ্বারা পরিমাপকৃত সময়
          </div>
        </div>

        {/* Total Points / XP */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              অর্জন ও জ্ঞান স্কোর (XP)
            </span>
            <Award className="w-4 h-4 text-purple-500" />
          </div>
          <div className="text-3xl font-black font-mono text-purple-600 dark:text-purple-400">
            {studentData.xp} XP
          </div>
          <div className="text-xs text-slate-500 mt-1">
            প্রতিটি অনুশীলন ও সমাপ্ত টপিকে অর্জিত
          </div>
        </div>
      </div>

      {/* 16. Recommended Next Action Widget */}
      {nextIncompleteTopic && (
        <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 text-white rounded-3xl p-6 shadow-md shadow-blue-500/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-bold bg-white/20 backdrop-blur-sm">
              <Sparkles className="w-3.5 h-3.5" />
              পরবর্তী করণীয় পড়াশোনা (Recommended Next Action)
            </div>
            <h3 className="text-lg font-bold">
              {nextIncompleteTopic.subjectName} — {nextIncompleteTopic.topicTitle}
            </h3>
            <p className="text-xs text-blue-100 max-w-xl">
              অধ্যায়: {nextIncompleteTopic.chapterTitle} ({nextIncompleteTopic.paperTitle})। তোমার পাঠ্যক্রমের পরবর্তী অসম্পূর্ণ টপিক।
            </p>
          </div>

          <button
            onClick={() => {
              setSelectedSubjectId(nextIncompleteTopic!.subjectId);
              setSelectedPaperNumber(nextIncompleteTopic!.paperNumber);
              setSelectedChapterId(nextIncompleteTopic!.chapterId);
              setActivePage('learning_workspace');
            }}
            className="px-5 py-2.5 rounded-2xl text-xs font-bold bg-white text-blue-900 hover:bg-blue-50 transition shadow-sm flex items-center gap-1.5 shrink-0"
          >
            <span>এখনই পড়া শুরু করুন</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Two Column Layout: Subject Progress & Study Summary */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* 4. Subject-wise Progress (2 cols) */}
        <div className="lg:col-span-2 bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-blue-600" />
              বিষয়ভিত্তিক সিলেবাস অগ্রগতি (Subject Progress)
            </h3>
            <button
              onClick={() => setActivePage('hsc_library')}
              className="text-xs font-bold text-blue-600 hover:underline"
            >
              সকল পত্র দেখুন →
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {curriculum.slice(0, 6).map(sub => {
              let subTotal = 0;
              let subCompleted = 0;
              for (const p of sub.papers) {
                for (const c of p.chapters) {
                  for (const t of c.topics) {
                    subTotal++;
                    if (studentData.confirmedCompletedTopics.includes(t.id)) {
                      subCompleted++;
                    }
                  }
                }
              }
              const pct = subTotal > 0 ? Math.round((subCompleted / subTotal) * 100) : 0;

              return (
                <div
                  key={sub.id}
                  onClick={() => {
                    setSelectedSubjectId(sub.id);
                    setSelectedPaperNumber(1);
                    setActivePage('hsc_library');
                  }}
                  className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-800 hover:border-blue-400 cursor-pointer transition"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-slate-800 dark:text-slate-200">
                      {sub.name}
                    </span>
                    <span className="text-xs font-black font-mono text-blue-600 dark:text-blue-400">
                      {pct}%
                    </span>
                  </div>
                  <div className="w-full h-1.5 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-600 rounded-full" style={{ width: `${pct}%` }} />
                  </div>
                  <div className="text-[10px] text-slate-400 mt-2">
                    {subCompleted} সম্পন্ন / {subTotal - subCompleted} বাকি
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 5, 8 & 15. Today's Summary & Recent Exams (1 col) */}
        <div className="space-y-6">
          {/* 5. Today's Study Summary */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
              <FileCheck className="w-4 h-4 text-emerald-500" />
              আজকের পড়াশোনার সারাংশ ({todayDateStr})
            </h3>
            {todaySubmissions.length > 0 ? (
              <div className="space-y-2.5">
                {todaySubmissions.map(sub => (
                  <div key={sub.id} className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 text-xs space-y-1">
                    <div className="font-bold text-slate-800 dark:text-slate-200">
                      {sub.subjectId.toUpperCase()} • Paper {sub.paperNumber}
                    </div>
                    <div className="text-slate-600 dark:text-slate-400 line-clamp-2">
                      {sub.whatPractised}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-xs text-slate-500 dark:text-slate-400 py-3 text-center">
                আজকের পড়াশোনা এখনও জমা দাওনি।
                <button
                  onClick={() => setIsSubmitStudyModalOpen(true)}
                  className="block mx-auto text-blue-600 font-bold mt-1.5 hover:underline"
                >
                  এখনই জমা দিন +
                </button>
              </div>
            )}
          </div>

          {/* 15. Recent Examination Result Card */}
          {recentExam ? (
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                <Layers className="w-4 h-4 text-indigo-500" />
                সর্বশেষ পরীক্ষার ফলাফল
              </h3>
              <div className="p-3.5 rounded-2xl bg-indigo-50/50 dark:bg-indigo-950/20 border border-indigo-200 dark:border-indigo-900/40 space-y-1.5 text-xs">
                <div className="font-bold text-slate-900 dark:text-white">
                  {recentExam.examTitle}
                </div>
                <div className="flex items-center justify-between font-mono">
                  <span className="text-slate-500">নম্বর: {recentExam.totalScore}/{recentExam.maxScore}</span>
                  <span className="font-bold text-indigo-600">{recentExam.percentage}%</span>
                </div>
                <button
                  onClick={() => {
                    // Review this exam
                    setActivePage('exam_results');
                  }}
                  className="text-xs font-bold text-blue-600 hover:underline pt-1 block"
                >
                  বিশদ ভুল ও ব্যাখ্যা দেখুন →
                </button>
              </div>
            </div>
          ) : (
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm text-center text-xs text-slate-400 py-6">
              এখনও কোনো পরীক্ষা দেওয়া হয়নি।
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
