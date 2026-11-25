import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  BookOpen,
  CheckCircle,
  Clock,
  Sparkles,
  Layers,
  Award,
  ArrowLeft,
  Atom,
  HelpCircle,
  FileText,
  Bookmark
} from 'lucide-react';
import { startNewExamAttempt } from '../services/examService';

export const LearningWorkspace: React.FC = () => {
  const {
    curriculum,
    selectedSubjectId,
    selectedPaperNumber,
    selectedChapterId,
    selectedTopicId,
    setSelectedTopicId,
    studentData,
    confirmTopicCompletion,
    updateTopicStatus,
    saveChapterNote,
    questionBank,
    setActiveExamAttempt,
    setActivePage
  } = useApp();

  const [activeTab, setActiveTab] = useState<'lesson' | 'definitions' | 'formulas' | 'examples' | 'notes'>('lesson');
  const [personalNoteText, setPersonalNoteText] = useState<string>(() => {
    return studentData.personalNotes[selectedChapterId] || '';
  });

  const currentSubject = curriculum.find(s => s.id === selectedSubjectId) || curriculum[0];
  const currentPaper = currentSubject.papers.find(p => p.paperNumber === selectedPaperNumber) || currentSubject.papers[0];
  const currentChapter = currentPaper.chapters.find(c => c.id === selectedChapterId) || currentPaper.chapters[0];
  const currentTopic = currentChapter.topics.find(t => t.id === selectedTopicId) || currentChapter.topics[0];

  const isConfirmed = studentData.confirmedCompletedTopics.includes(currentTopic?.id || '');

  // Handle note save
  const handleSaveNote = () => {
    saveChapterNote(selectedChapterId, personalNoteText);
    alert('তোমার ব্যক্তিগত নোট সফলভাবে সংরক্ষিত হয়েছে!');
  };

  // Launch timed practice exam for this chapter
  const handleStartChapterExam = () => {
    const attempt = startNewExamAttempt(
      studentData.userId,
      currentSubject.id,
      currentPaper.paperNumber,
      [currentChapter.id],
      questionBank,
      10, // 10 questions quick test
      10 // 10 minutes
    );
    setActiveExamAttempt(attempt);
    setActivePage('exam_runner');
  };

  return (
    <div className="space-y-6 pb-12 animate-fade-in">
      {/* Top Breadcrumb & Actions */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-white dark:bg-slate-900 rounded-3xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setActivePage('hsc_library')}
            className="p-2 rounded-xl text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <div className="text-xs font-semibold text-blue-600 dark:text-blue-400">
              {currentSubject.name} • {currentPaper.title}
            </div>
            <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
              {currentChapter.title}
            </h2>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2.5 w-full sm:w-auto justify-end">
          <button
            onClick={handleStartChapterExam}
            className="px-3.5 py-2 text-xs font-bold rounded-xl bg-purple-600 text-white hover:bg-purple-700 shadow-sm flex items-center gap-1.5"
          >
            <Layers className="w-4 h-4" />
            <span>১০ নম্বরের কুইজ দিন</span>
          </button>

          <button
            onClick={() => confirmTopicCompletion(currentTopic.id)}
            disabled={isConfirmed}
            className={`px-4 py-2 text-xs font-bold rounded-xl flex items-center gap-1.5 transition ${
              isConfirmed
                ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300'
                : 'bg-emerald-600 text-white hover:bg-emerald-700 shadow-sm shadow-emerald-500/20'
            }`}
          >
            <CheckCircle className="w-4 h-4" />
            <span>{isConfirmed ? 'টপিক সম্পন্ন হয়েছে' : 'পড়া শেষ করেছি (Confirm)'}</span>
          </button>
        </div>
      </div>

      {/* Topics Selector Bar */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {currentChapter.topics.map(topic => {
          const isSelected = topic.id === currentTopic.id;
          const isTopicConfirmed = studentData.confirmedCompletedTopics.includes(topic.id);

          return (
            <button
              key={topic.id}
              onClick={() => setSelectedTopicId(topic.id)}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold shrink-0 transition flex items-center gap-2 ${
                isSelected
                  ? 'bg-blue-600 text-white shadow-sm shadow-blue-500/20'
                  : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:bg-slate-50'
              }`}
            >
              {isTopicConfirmed && <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />}
              <span className="truncate max-w-[220px]">{topic.title}</span>
            </button>
          );
        })}
      </div>

      {/* Main Workspace Grid: Left Content / Right Tools */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: Lesson Tabs & Core Study (2 cols) */}
        <div className="lg:col-span-2 space-y-5">
          {/* Workspace Tabs */}
          <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800/60 p-1.5 rounded-2xl border border-slate-200 dark:border-slate-700">
            <button
              onClick={() => setActiveTab('lesson')}
              className={`flex-1 py-2 text-xs font-bold rounded-xl transition ${
                activeTab === 'lesson'
                  ? 'bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
              }`}
            >
              মূল লেকচার (Lesson)
            </button>
            <button
              onClick={() => setActiveTab('definitions')}
              className={`flex-1 py-2 text-xs font-bold rounded-xl transition ${
                activeTab === 'definitions'
                  ? 'bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
              }`}
            >
              সংজ্ঞা ও শব্দার্থ
            </button>
            <button
              onClick={() => setActiveTab('formulas')}
              className={`flex-1 py-2 text-xs font-bold rounded-xl transition ${
                activeTab === 'formulas'
                  ? 'bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
              }`}
            >
              সূত্র ও একক
            </button>
            <button
              onClick={() => setActiveTab('notes')}
              className={`flex-1 py-2 text-xs font-bold rounded-xl transition ${
                activeTab === 'notes'
                  ? 'bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
              }`}
            >
              ব্যক্তিগত নোট (Private)
            </button>
          </div>

          {/* Active Tab View */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm">
            {activeTab === 'lesson' && (
              <div className="space-y-5">
                <div className="border-b border-slate-100 dark:border-slate-800 pb-4">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300">
                      {currentTopic?.priorityCategory}
                    </span>
                    <span className="text-xs text-slate-500 font-medium">
                      আনুমানিক পড়ার সময়: {currentTopic?.estimatedMinutes} মিনিট
                    </span>
                  </div>
                  <h3 className="text-xl font-black text-slate-900 dark:text-white">
                    {currentTopic?.title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    {currentTopic?.importanceReason}
                  </p>
                </div>

                <div className="prose dark:prose-invert max-w-none text-sm text-slate-700 dark:text-slate-300 leading-relaxed space-y-4">
                  <p>
                    <strong>১. ভূমিকা ও তাত্ত্বিক ভিত্তি:</strong> {currentChapter.title}-এর অধীনে {currentTopic?.title} অংশটি বোর্ড পরীক্ষায় উচ্চ নম্বরের গাণিতিক ও সৃজনশীল প্রশ্নের অন্যতম উৎস।
                  </p>
                  <div className="bg-blue-50/50 dark:bg-blue-950/20 p-4 rounded-2xl border border-blue-200 dark:border-blue-900/40 text-xs text-blue-900 dark:text-blue-200 space-y-1">
                    <div className="font-bold">শিখনফল (Learning Objectives):</div>
                    <ul className="list-disc list-inside space-y-1">
                      {(currentChapter.learningObjectives || [
                        'মূল বৈজ্ঞানিক ধারণা অনুধাবন',
                        'গাণিতিক সূত্র প্রয়োগ ও সমস্যা সমাধান',
                        'বোর্ড মানসম্পন্ন প্রশ্নের সঠিক অনুশীলন'
                      ]).map((obj, idx) => (
                        <li key={idx}>{obj}</li>
                      ))}
                    </ul>
                  </div>
                  <p>
                    <strong>২. গুরুত্বপূর্ণ পর্যবেক্ষণ:</strong> বিগত বছরগুলোর ঢাকা, চট্টগ্রাম ও রাজশাহী শিক্ষা বোর্ডের প্রশ্ন পর্যালোচনা করলে দেখা যায় যে, শিক্ষার্থীরা প্রায়শই এসআই একক (SI units) রূপান্তর এবং চিহ্নের নিয়মে ভুল করে থাকে।
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'definitions' && (
              <div className="space-y-4">
                <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-2">
                  অধ্যায়ের গুরুত্বপূর্ণ সংজ্ঞা ও কী-ওয়ার্ডসমূহ:
                </h4>
                {currentChapter.definitions && currentChapter.definitions.length > 0 ? (
                  <div className="space-y-3">
                    {currentChapter.definitions.map((def, idx) => (
                      <div
                        key={idx}
                        className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 space-y-1"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-bold text-blue-600 dark:text-blue-400">
                            {def.term}
                          </span>
                          <span className="text-xs font-mono text-slate-400">
                            {def.englishTerm}
                          </span>
                        </div>
                        <div className="text-xs text-slate-700 dark:text-slate-300">
                          {def.definition}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-xs text-slate-500 py-6 text-center">
                    এই অধ্যায়ের সংজ্ঞাসমূহ প্রমিত সিলেবাস অনুযায়ী প্রস্তুত করা হচ্ছে।
                  </div>
                )}
              </div>
            )}

            {activeTab === 'formulas' && (
              <div className="space-y-4">
                <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-2">
                  সম্পর্কিত গাণিতিক সূত্রাবলী ও এসআই একক:
                </h4>
                <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-3">
                  <div className="text-sm font-mono font-bold text-indigo-600 dark:text-indigo-400">
                    R = √(P² + Q² + 2PQ cos α)
                  </div>
                  <div className="text-xs text-slate-600 dark:text-slate-300">
                    P ও Q বলদ্বয়ের লব্ধির মান। α হলো মধ্যবর্তী কোণ।
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'notes' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                    তোমার ব্যক্তিগত স্টাডি নোট (সম্পূর্ণ প্রাইভেট)
                  </h4>
                  <button
                    onClick={handleSaveNote}
                    className="px-3.5 py-1.5 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl"
                  >
                    নোট সংরক্ষণ করুন
                  </button>
                </div>
                <textarea
                  rows={8}
                  value={personalNoteText}
                  onChange={e => setPersonalNoteText(e.target.value)}
                  placeholder="এই অধ্যায় পড়ার সময় গুরুত্বপূর্ণ কোনো তথ্য, নিজস্ব শর্টকাট বা প্রশ্ন এখানে লিখে রাখো..."
                  className="w-full p-4 rounded-2xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <p className="text-[11px] text-slate-400">
                  🔒 এই নোট শুধুমাত্র তোমার অ্যাকাউন্টে সংরক্ষিত এবং অন্য কোনো শিক্ষার্থী বা অ্যাডমিন এটি দেখতে পাবে না।
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Topic Progress & Fast Actions (1 col) */}
        <div className="space-y-5">
          {/* Chapter Syllabus Checklist */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
            <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              অধ্যায়ের প্রগ্রেস চেকলিস্ট
            </h4>
            <div className="space-y-2">
              {currentChapter.topics.map(t => {
                const isTCompleted = studentData.confirmedCompletedTopics.includes(t.id);
                return (
                  <div
                    key={t.id}
                    onClick={() => setSelectedTopicId(t.id)}
                    className={`flex items-center justify-between p-2.5 rounded-xl border text-xs cursor-pointer transition ${
                      t.id === currentTopic.id
                        ? 'border-blue-500 bg-blue-50/50 dark:bg-blue-950/30'
                        : 'border-slate-100 dark:border-slate-800 hover:bg-slate-50'
                    }`}
                  >
                    <span className="truncate pr-2 font-medium">{t.title}</span>
                    {isTCompleted ? (
                      <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                    ) : (
                      <span className="text-[10px] text-slate-400">Pending</span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Quick Help / Study Coach Widget */}
          <div className="bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-slate-900 dark:to-indigo-950/40 rounded-3xl p-5 border border-indigo-100 dark:border-indigo-900/30 space-y-3">
            <div className="flex items-center gap-2 text-indigo-700 dark:text-indigo-400 text-xs font-bold">
              <Sparkles className="w-4 h-4" />
              <span>K&M স্টাডি টিপস</span>
            </div>
            <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
              এই অধ্যায়টি পড়ার পর ডান পাশের <strong>১০ নম্বরের কুইজ দিন</strong> বাটনে চাপ দিয়ে তোমার সক্রিয় স্মরণ ক্ষমতা যাচাই করো।
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
