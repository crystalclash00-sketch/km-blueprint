import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Subject, Paper, Chapter } from '../types';
import {
  BookOpen,
  ChevronRight,
  Sparkles,
  CheckCircle2,
  Clock,
  Layers,
  Award,
  ArrowRight
} from 'lucide-react';

export const HscLibraryView: React.FC = () => {
  const {
    curriculum,
    studentData,
    setSelectedSubjectId,
    setSelectedPaperNumber,
    setSelectedChapterId,
    setSelectedTopicId,
    setActivePage
  } = useApp();

  const [activeSubjectTab, setActiveSubjectTab] = useState<string>('phy');
  const [activePaperNum, setActivePaperNum] = useState<1 | 2>(1);

  const currentSubject = curriculum.find(s => s.id === activeSubjectTab) || curriculum[0];
  const currentPaper = currentSubject.papers.find(p => p.paperNumber === activePaperNum) || currentSubject.papers[0];

  const handleOpenWorkspace = (chapter: Chapter, topicId?: string) => {
    setSelectedSubjectId(currentSubject.id);
    setSelectedPaperNumber(currentPaper.paperNumber);
    setSelectedChapterId(chapter.id);
    if (topicId) {
      setSelectedTopicId(topicId);
    } else if (chapter.topics[0]) {
      setSelectedTopicId(chapter.topics[0].id);
    }
    setActivePage('learning_workspace');
  };

  return (
    <div className="space-y-6 pb-12 animate-fade-in">
      {/* Header */}
      <div>
        <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
          HSC পাঠ্যক্রম ও লাইব্রেরি (Curriculum Library)
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
          অনুমোদিত এইচএসসি বিজ্ঞান পাঠ্যক্রমের প্রতিটি বিষয়, পত্র, অধ্যায় ও টপিকভিত্তিক শিক্ষা ভাণ্ডার
        </p>
      </div>

      {/* Subject Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {curriculum.map(subject => {
          const isActive = activeSubjectTab === subject.id;
          return (
            <button
              key={subject.id}
              onClick={() => {
                setActiveSubjectTab(subject.id);
                setActivePaperNum(1);
              }}
              className={`px-4 py-2.5 rounded-2xl text-xs font-bold shrink-0 transition flex items-center gap-2 ${
                isActive
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                  : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:bg-slate-50'
              }`}
            >
              <span>{subject.name}</span>
              <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                isActive ? 'bg-white/20 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-500'
              }`}>
                {subject.papers.length} পত্র
              </span>
            </button>
          );
        })}
      </div>

      {/* Paper Switcher (1st Paper vs 2nd Paper) */}
      <div className="flex items-center gap-3">
        {currentSubject.papers.map(paper => (
          <button
            key={paper.id}
            onClick={() => setActivePaperNum(paper.paperNumber)}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
              activePaperNum === paper.paperNumber
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200'
            }`}
          >
            {paper.title}
          </button>
        ))}
      </div>

      {/* Chapters Grid */}
      <div className="space-y-4">
        {currentPaper.chapters.map((chapter, cIdx) => {
          const completedInChap = chapter.topics.filter(t =>
            studentData.confirmedCompletedTopics.includes(t.id)
          ).length;
          const chapPercentage = chapter.topics.length > 0 ? Math.round((completedInChap / chapter.topics.length) * 100) : 0;

          return (
            <div
              key={chapter.id}
              className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition"
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 font-mono">
                      অধ্যায় {chapter.chapterNumber}
                    </span>
                    <span className="text-[11px] font-semibold px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                      {chapter.importance}
                    </span>
                    <span className="text-[11px] font-semibold text-slate-400">
                      • {chapter.difficulty}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    {chapter.title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 max-w-2xl leading-relaxed">
                    {chapter.overview}
                  </p>
                </div>

                {/* Chapter Progress & Workspace Action */}
                <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end shrink-0 pt-2 sm:pt-0">
                  <div className="text-right">
                    <div className="text-xs font-bold text-slate-800 dark:text-slate-200 font-mono">
                      {completedInChap} / {chapter.topics.length} সমাপ্ত
                    </div>
                    <div className="w-24 h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden mt-1">
                      <div
                        className="h-full bg-blue-600 rounded-full"
                        style={{ width: `${chapPercentage}%` }}
                      />
                    </div>
                  </div>

                  <button
                    onClick={() => handleOpenWorkspace(chapter)}
                    className="px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-sm flex items-center gap-1.5"
                  >
                    <span>পড়া শুরু (Learn)</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Topics Pills */}
              <div className="border-t border-slate-100 dark:border-slate-800 pt-3">
                <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2">
                  অধ্যায়ের অন্তর্ভুক্ত মূল টপিকসমূহ:
                </div>
                <div className="flex flex-wrap gap-2">
                  {chapter.topics.map(topic => {
                    const isConfirmed = studentData.confirmedCompletedTopics.includes(topic.id);
                    const status = studentData.topicStatuses[topic.id] || 'not_started';

                    return (
                      <button
                        key={topic.id}
                        onClick={() => handleOpenWorkspace(chapter, topic.id)}
                        className={`text-xs px-3 py-1.5 rounded-xl border flex items-center gap-2 transition ${
                          isConfirmed
                            ? 'bg-emerald-50 text-emerald-800 border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-200 dark:border-emerald-900'
                            : status !== 'not_started'
                            ? 'bg-blue-50 text-blue-800 border-blue-200 dark:bg-blue-950/40 dark:text-blue-200 dark:border-blue-900'
                            : 'bg-slate-50 text-slate-700 border-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700 hover:bg-slate-100'
                        }`}
                      >
                        {isConfirmed ? (
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                        ) : (
                          <span className="w-2 h-2 rounded-full bg-slate-300 dark:bg-slate-600 shrink-0" />
                        )}
                        <span className="truncate max-w-[200px]">{topic.title}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
