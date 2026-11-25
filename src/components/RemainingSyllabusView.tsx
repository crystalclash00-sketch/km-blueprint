import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  PieChart,
  CheckCircle,
  Clock,
  Sparkles,
  ArrowRight,
  Filter,
  AlertCircle,
  HelpCircle
} from 'lucide-react';

export const RemainingSyllabusView: React.FC = () => {
  const {
    curriculum,
    studentData,
    overallRemainingPercentage,
    overallCompletionPercentage,
    totalConfirmedTopics,
    completedConfirmedTopicsCount,
    setSelectedSubjectId,
    setSelectedPaperNumber,
    setSelectedChapterId,
    setSelectedTopicId,
    setActivePage
  } = useApp();

  const [selectedSubjectFilter, setSelectedSubjectFilter] = useState<string>('all');
  const [statusFilter, setStatusFilter] = useState<string>('all');

  const remainingTopicsCount = totalConfirmedTopics - completedConfirmedTopicsCount;

  // Flatten topics with subject & paper metadata
  interface FlattenedTopic {
    subjectId: string;
    subjectName: string;
    paperNumber: 1 | 2;
    paperTitle: string;
    chapterId: string;
    chapterNumber: number;
    chapterTitle: string;
    topicId: string;
    topicTitle: string;
    priorityCategory: string;
    status: string;
    isCompleted: boolean;
  }

  const allTopics: FlattenedTopic[] = [];
  for (const s of curriculum) {
    for (const p of s.papers) {
      for (const c of p.chapters) {
        for (const t of c.topics) {
          const isDone = studentData.confirmedCompletedTopics.includes(t.id);
          const currentStatus = studentData.topicStatuses[t.id] || 'not_started';
          allTopics.push({
            subjectId: s.id,
            subjectName: s.name,
            paperNumber: p.paperNumber,
            paperTitle: p.title,
            chapterId: c.id,
            chapterNumber: c.chapterNumber,
            chapterTitle: c.title,
            topicId: t.id,
            topicTitle: t.title,
            priorityCategory: t.priorityCategory || 'Important',
            status: currentStatus,
            isCompleted: isDone
          });
        }
      }
    }
  }

  // Filter topics
  const filteredTopics = allTopics.filter(t => {
    if (selectedSubjectFilter !== 'all' && t.subjectId !== selectedSubjectFilter) return false;
    if (statusFilter === 'remaining' && t.isCompleted) return false;
    if (statusFilter === 'completed' && !t.isCompleted) return false;
    if (statusFilter === 'revision_needed' && t.status !== 'revision_needed') return false;
    return true;
  });

  // Calculate subjects with most remaining work
  const subjectRemainingStats = curriculum.map(sub => {
    let total = 0;
    let done = 0;
    for (const p of sub.papers) {
      for (const c of p.chapters) {
        for (const t of c.topics) {
          total++;
          if (studentData.confirmedCompletedTopics.includes(t.id)) {
            done++;
          }
        }
      }
    }
    const rem = total - done;
    return {
      id: sub.id,
      name: sub.name,
      total,
      done,
      remaining: rem,
      remainingPercentage: total > 0 ? Math.round((rem / total) * 100) : 0
    };
  }).sort((a, b) => b.remaining - a.remaining);

  const handleStudyTopic = (topic: FlattenedTopic) => {
    setSelectedSubjectId(topic.subjectId);
    setSelectedPaperNumber(topic.paperNumber);
    setSelectedChapterId(topic.chapterId);
    setSelectedTopicId(topic.topicId);
    setActivePage('learning_workspace');
  };

  return (
    <div className="space-y-6 pb-12 animate-fade-in">
      {/* Page Title */}
      <div>
        <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
          বাকি সিলেবাস ট্র্যাকার (Remaining Syllabus Tracker)
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
          অনুমোদিত পাঠ্যক্রম অনুযায়ী এখনো কত শতাংশ ও কয়টি টপিক পড়া বাকি আছে তার সম্পূর্ণ হিসেব
        </p>
      </div>

      {/* Top Mathematical Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
            সার্বিক বাকি সিলেবাস (Overall Remaining)
          </div>
          <div className="text-4xl font-black font-mono text-amber-600 dark:text-amber-400">
            {overallRemainingPercentage}%
          </div>
          <div className="text-xs text-slate-500 mt-1">
            মোট সিলেবাসের শতকরা {overallRemainingPercentage}% এখনো সম্পন্ন হয়নি
          </div>
          <div className="w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden mt-3">
            <div className="h-full bg-amber-500 rounded-full" style={{ width: `${overallRemainingPercentage}%` }} />
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
            বাকি টপিক সংখ্যা (Remaining Topics)
          </div>
          <div className="text-4xl font-black font-mono text-blue-600 dark:text-blue-400">
            {remainingTopicsCount}
          </div>
          <div className="text-xs text-slate-500 mt-1">
            মোট {totalConfirmedTopics} টির মধ্যে {remainingTopicsCount} টি টপিক অসম্পূর্ণ
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
            নিশ্চিত সম্পন্ন টপিক (Confirmed Completed)
          </div>
          <div className="text-4xl font-black font-mono text-emerald-600 dark:text-emerald-400">
            {completedConfirmedTopicsCount}
          </div>
          <div className="text-xs text-slate-500 mt-1">
            শিক্ষার্থী কর্তৃক নিশ্চিতকৃত পড়াশোনার ভিত্তিতে গণনাকৃত
          </div>
        </div>
      </div>

      {/* Highest Remaining Work by Subject (Alert / Priority) */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
        <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <AlertCircle className="w-4 h-4 text-amber-500" />
          যে বিষয়গুলোতে সবচেয়ে বেশি পড়াশোনা বাকি (Subjects with Most Remaining Work)
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {subjectRemainingStats.slice(0, 3).map(sub => (
            <div
              key={sub.id}
              className="p-4 rounded-2xl bg-amber-50/50 dark:bg-amber-950/20 border border-amber-200/80 dark:border-amber-900/40 space-y-1.5"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-800 dark:text-slate-200">{sub.name}</span>
                <span className="text-xs font-black font-mono text-amber-600 dark:text-amber-400">
                  {sub.remaining} বাকি
                </span>
              </div>
              <div className="text-[11px] text-slate-500">
                {sub.remainingPercentage}% সিলেবাস এখনও অপঠিত
              </div>
              <div className="w-full h-1.5 bg-amber-200/60 dark:bg-amber-900/60 rounded-full overflow-hidden mt-1">
                <div className="h-full bg-amber-500 rounded-full" style={{ width: `${sub.remainingPercentage}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Filterable Topics List */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <h3 className="text-sm font-bold text-slate-900 dark:text-white">
            টপিকভিত্তিক বিস্তারিত অবস্থা ও ফিল্টার ({filteredTopics.length} টি ফলাফল)
          </h3>

          <div className="flex flex-wrap items-center gap-2">
            <select
              value={selectedSubjectFilter}
              onChange={e => setSelectedSubjectFilter(e.target.value)}
              className="px-3 py-1.5 text-xs font-semibold rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-200 focus:outline-none"
            >
              <option value="all">সকল বিষয় (All Subjects)</option>
              {curriculum.map(s => (
                <option key={s.id} value={s.id}>{s.name}</option>
              ))}
            </select>

            <select
              value={statusFilter}
              onChange={e => setStatusFilter(e.target.value)}
              className="px-3 py-1.5 text-xs font-semibold rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-200 focus:outline-none"
            >
              <option value="all">সকল অবস্থা (All Statuses)</option>
              <option value="remaining">শুধু বাকি টপিক (Remaining)</option>
              <option value="completed">শুধু সম্পন্ন টপিক (Completed)</option>
              <option value="revision_needed">রিভিশন দরকার (Needs Revision)</option>
            </select>
          </div>
        </div>

        {/* Topics Table / Cards */}
        <div className="space-y-2">
          {filteredTopics.map(t => (
            <div
              key={t.topicId}
              className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-800 hover:border-blue-400 gap-3 transition"
            >
              <div className="space-y-0.5">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300">
                    {t.subjectName}
                  </span>
                  <span className="text-[10px] font-semibold text-slate-400">
                    {t.paperTitle} • অধ্যায় {t.chapterNumber}
                  </span>
                  <span className="text-[10px] font-semibold text-slate-400">
                    • {t.priorityCategory}
                  </span>
                </div>
                <div className="text-xs font-bold text-slate-800 dark:text-slate-200">
                  {t.topicTitle}
                </div>
              </div>

              <div className="flex items-center gap-3 self-end sm:self-center">
                <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full uppercase ${
                  t.isCompleted
                    ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300'
                    : 'bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300'
                }`}>
                  {t.isCompleted ? 'Completed' : t.status}
                </span>

                <button
                  onClick={() => handleStudyTopic(t)}
                  className="px-3.5 py-1.5 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-sm flex items-center gap-1"
                >
                  <span>পড়ুন</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
