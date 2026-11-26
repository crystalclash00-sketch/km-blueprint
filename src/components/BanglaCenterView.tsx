import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  hscBanglaFirstPaperChapters,
  BanglaChapter
} from '../data/banglaFirstPaper';
import {
  BookOpen,
  Search,
  Filter,
  CheckCircle2,
  PenTool,
  Bookmark,
  FileText,
  Sparkles,
  Quote,
  X,
  ExternalLink,
  Save,
  HelpCircle,
  Award,
  Layers,
  ChevronRight
} from 'lucide-react';

export const BanglaCenterView: React.FC = () => {
  const { studentData, saveChapterNote } = useApp();
  const [activePaper, setActivePaper] = useState<'paper1' | 'paper2'>('paper1');
  const [categoryFilter, setCategoryFilter] = useState<'all' | 'prose' | 'poetry'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedChapter, setSelectedChapter] = useState<BanglaChapter | null>(null);
  const [activeSectionTab, setActiveSectionTab] = useState<'all' | 'author' | 'theme' | 'quotes' | 'exam'>('all');
  const [personalNoteText, setPersonalNoteText] = useState('');
  const [isNoteSaved, setIsNoteSaved] = useState(false);

  // Handle open chapter modal
  const handleOpenChapter = (chapter: BanglaChapter) => {
    setSelectedChapter(chapter);
    setActiveSectionTab('all');
    setPersonalNoteText(studentData.personalNotes?.[chapter.id] || '');
    setIsNoteSaved(false);
  };

  // Save personal note
  const handleSaveNote = () => {
    if (!selectedChapter) return;
    saveChapterNote(selectedChapter.id, personalNoteText);
    setIsNoteSaved(true);
    setTimeout(() => setIsNoteSaved(false), 2000);
  };

  // Filter chapters for Paper 1
  const filteredChapters = hscBanglaFirstPaperChapters.filter(ch => {
    // Category match
    if (categoryFilter === 'prose' && ch.category !== 'prose') return false;
    if (categoryFilter === 'poetry' && ch.category !== 'poetry') return false;

    // Search query match
    if (!searchQuery.trim()) return true;
    const query = searchQuery.toLowerCase();
    const titleMatch = ch.title.toLowerCase().includes(query);
    const authorMatch = ch.author.toLowerCase().includes(query);
    const tagMatch = ch.tags.some(t => t.toLowerCase().includes(query));
    const themeMatch = ch.coreThemeAndContext.coreTheme.toLowerCase().includes(query);
    return titleMatch || authorMatch || tagMatch || themeMatch;
  });

  const proseCount = hscBanglaFirstPaperChapters.filter(c => c.category === 'prose').length;
  const poetryCount = hscBanglaFirstPaperChapters.filter(c => c.category === 'poetry').length;

  return (
    <div className="space-y-6 pb-16 animate-fade-in">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-950/50 dark:text-emerald-300">
              NCTB HSC বাংলা সাহিত্যপাঠ
            </span>
            <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300">
              ২৪টি সম্পূর্ণ অধ্যায়
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight">
            বাংলা সাহিত্য ও ব্যাকরণ কেন্দ্র (Bangla Learning Center)
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
            এইচএসসি বাংলা ১ম পত্রের সকল ১২টি গদ্য ও ১২টি পদ্যের উচ্চফলনশীল বিশ্লেষণ ও পরীক্ষার প্রস্তুতি
          </p>
        </div>

        {/* Paper 1 vs Paper 2 Selector */}
        <div className="inline-flex p-1 bg-slate-100 dark:bg-slate-800 rounded-2xl shrink-0 self-start sm:self-auto">
          <button
            onClick={() => setActivePaper('paper1')}
            className={`px-4 py-2 text-xs font-bold rounded-xl transition ${
              activePaper === 'paper1'
                ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm'
                : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
            }`}
          >
            বাংলা ১ম পত্র (সাহিত্যপাঠ)
          </button>
          <button
            onClick={() => setActivePaper('paper2')}
            className={`px-4 py-2 text-xs font-bold rounded-xl transition ${
              activePaper === 'paper2'
                ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm'
                : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
            }`}
          >
            বাংলা ২য় পত্র (ব্যাকরণ ও নির্মিতি)
          </button>
        </div>
      </div>

      {/* PAPER 1 CONTENT */}
      {activePaper === 'paper1' && (
        <div className="space-y-6">
          {/* Controls: Category Filter + Search Bar */}
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
            {/* Filter Pills */}
            <div className="flex items-center gap-1.5 p-1 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-x-auto">
              <button
                onClick={() => setCategoryFilter('all')}
                className={`px-3.5 py-1.5 text-xs font-bold rounded-xl transition whitespace-nowrap ${
                  categoryFilter === 'all'
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800'
                }`}
              >
                সব অধ্যায় ({hscBanglaFirstPaperChapters.length})
              </button>
              <button
                onClick={() => setCategoryFilter('prose')}
                className={`px-3.5 py-1.5 text-xs font-bold rounded-xl transition whitespace-nowrap ${
                  categoryFilter === 'prose'
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800'
                }`}
              >
                গদ্য ({proseCount})
              </button>
              <button
                onClick={() => setCategoryFilter('poetry')}
                className={`px-3.5 py-1.5 text-xs font-bold rounded-xl transition whitespace-nowrap ${
                  categoryFilter === 'poetry'
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800'
                }`}
              >
                পদ্য ({poetryCount})
              </button>
            </div>

            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <input
                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="অধ্যায়, কবি/লেখক, বা মূলভাব দিয়ে অনুসন্ধান..."
                className="w-full px-4 py-2 pl-10 pr-9 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-xs text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
              <Search className="w-4 h-4 absolute left-3.5 top-2.5 text-slate-400" />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          {/* Chapters Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredChapters.map(chapter => (
              <div
                key={chapter.id}
                onClick={() => handleOpenChapter(chapter)}
                className="bg-white dark:bg-slate-900 rounded-3xl p-5 border border-slate-200 dark:border-slate-800 hover:border-emerald-500 dark:hover:border-emerald-500 shadow-sm hover:shadow-md transition cursor-pointer flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <span
                      className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full ${
                        chapter.category === 'prose'
                          ? 'bg-blue-50 text-blue-700 dark:bg-blue-950/40 dark:text-blue-300 border border-blue-200 dark:border-blue-800/40'
                          : 'bg-purple-50 text-purple-700 dark:bg-purple-950/40 dark:text-purple-300 border border-purple-200 dark:border-purple-800/40'
                      }`}
                    >
                      {chapter.categoryBn} • {chapter.genre}
                    </span>
                    <span className="text-[11px] font-mono text-slate-400">
                      #{chapter.chapterNumber.toString().padStart(2, '0')}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition leading-snug">
                      {chapter.title}
                    </h3>
                    <p className="text-xs font-semibold text-slate-600 dark:text-slate-400 mt-1">
                      {chapter.author}
                    </p>
                  </div>

                  <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed">
                    {chapter.coreThemeAndContext.coreTheme}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
                  <span className="text-[11px] text-slate-400 font-medium">
                    {chapter.importantQuotes.length}টি প্রধান উদ্ধৃতি • {chapter.examHighYield.mcqKeyFacts.length}টি MCQ ফ্যাক্টস
                  </span>
                  <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                    অধ্যয়ন <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            ))}
          </div>

          {filteredChapters.length === 0 && (
            <div className="text-center py-16 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-2">
              <BookOpen className="w-10 h-10 mx-auto text-slate-300 dark:text-slate-600" />
              <div className="text-sm font-bold text-slate-700 dark:text-slate-300">
                কোনো অধ্যায় খুঁজে পাওয়া যায়নি
              </div>
              <p className="text-xs text-slate-400">
                অনুসন্ধানের কীওয়ার্ড পরিবর্তন করুন অথবা ফিল্টার রিসেট করুন।
              </p>
            </div>
          )}
        </div>
      )}

      {/* PAPER 2 CONTENT */}
      {activePaper === 'paper2' && (
        <div className="space-y-4">
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800 dark:bg-blue-950/50 dark:text-blue-300">
                উচ্চারণ ও বানান
              </span>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                বাংলা আদ্য ‘অ’ সংবৃত উচ্চারণের প্রধান ৫টি নিয়ম (বোর্ড স্ট্যান্ডার্ড)
              </h3>
            </div>
            <ul className="text-xs text-slate-700 dark:text-slate-300 space-y-2 list-decimal list-inside leading-relaxed bg-slate-50 dark:bg-slate-800/40 p-4 rounded-2xl">
              <li>শব্দের প্রথমে যদি ‘অ’ থাকে এবং তার পরে ‘ই’, ‘ঈ’, ‘উ’ বা ‘ঊ’ থাকে, তবে সেই ‘অ’ সংবৃত (ও-এর মতো) উচ্চারিত হয়। যেমন: অতি (ওতি), নদী (নোদি)।</li>
              <li>আদ্য ‘অ’-এর পরে ‘য-ফলা’ যুক্ত ব্যঞ্জনবর্ণ থাকলে ‘অ’ সংবৃত হয়। যেমন: কন্যা (কোন্না), অন্য (ওন্নো)।</li>
              <li>আদ্য ‘অ’-এর পরে ‘ক্ষ’ বা ‘জ্ঞ’ থাকলে ‘অ’-এর উচ্চারণ সংবৃত হয়। যেমন: দক্ষ (দোক্‌খো), যজ্ঞ (জোগ্‌গোঁ)।</li>
              <li>আদ্য ‘অ’-এর পরে ‘ঋ-কার’ থাকলে ‘অ’-এর উচ্চারণ সংবৃত হয়। যেমন: মসৃণ (মোস্রিণ), বক্তৃতা (বোক্-তৃতা)।</li>
              <li>বিশেষণবাচক শব্দের আদ্য ‘অ’ সংবৃত হয়। যেমন: ভালো (ভালো), কত (কতো)।</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-950/50 dark:text-emerald-300">
                বাংলা একাডেমি প্রমিত বানান
              </span>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                অতৎসম (তদ্ভব, দেশি, বিদেশি) শব্দের বানানের ৫টি মৌলিক নিয়ম
              </h3>
            </div>
            <ul className="text-xs text-slate-700 dark:text-slate-300 space-y-2 list-decimal list-inside leading-relaxed bg-slate-50 dark:bg-slate-800/40 p-4 rounded-2xl">
              <li>সকল অতৎসম শব্দের বানানে কেবল হ্রস্ব ই-কার (ি) বা হ্রস্ব উ-কার (ু) ব্যবহৃত হবে; দীর্ঘ ঈ-কার বা দীর্ঘ ঊ-কার হবে না। যেমন: পাখি, শাড়ি, বাড়ি, কেরানি, সরকারি।</li>
              <li>অতৎসম শব্দে ‘ণ’ ব্যবহার সম্পূর্ণ নিষিদ্ধ; কেবল ‘ন’ হবে। যেমন: কান, সোনা, চুন, কোরআন।</li>
              <li>অতৎসম শব্দে মূর্ধন্য ‘ষ’ ব্যবহার নিষিদ্ধ; কেবল ‘স’ বা ‘শ’ ব্যবহৃত হবে। যেমন: স্টেশন, পোস্ট, জিনিস, নাশতা।</li>
              <li>ইংরেজি ‘S’ উচ্চারণে ‘স’ এবং ‘SH’ বা ‘SI’ উচ্চারণে ‘শ’ ব্যবহৃত হবে। যেমন: বাস (Bus), শার্ট (Shirt), ক্যাশ (Cash)।</li>
              <li>শব্দশেষে রেফের পর ব্যঞ্জনবর্ণের দ্বিত্ব হবে না। যেমন: অর্জন, সূর্য, কার্য, ধর্ম (অর্জনন বা কার্য্য নয়)।</li>
            </ul>
          </div>
        </div>
      )}

      {/* FULL CHAPTER STUDY MODAL / DRAWER */}
      {selectedChapter && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/60 backdrop-blur-sm animate-fade-in overflow-y-auto">
          <div className="bg-white dark:bg-slate-900 w-full max-w-4xl max-h-[92vh] rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl flex flex-col overflow-hidden my-auto">
            {/* Modal Header */}
            <div className="p-5 sm:p-6 border-b border-slate-200 dark:border-slate-800 flex items-start justify-between gap-4 bg-slate-50/50 dark:bg-slate-800/30 shrink-0">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span
                    className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full ${
                      selectedChapter.category === 'prose'
                        ? 'bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300'
                        : 'bg-purple-100 text-purple-800 dark:bg-purple-950 dark:text-purple-300'
                    }`}
                  >
                    {selectedChapter.categoryBn} • {selectedChapter.genre}
                  </span>
                  <span className="text-xs text-slate-400 font-mono">
                    উৎস: {selectedChapter.sourceOrOrigin}
                  </span>
                </div>
                <h2 className="text-lg sm:text-2xl font-black text-slate-900 dark:text-white">
                  {selectedChapter.title}
                </h2>
                <div className="text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-400">
                  {selectedChapter.author}
                </div>
              </div>

              <button
                onClick={() => setSelectedChapter(null)}
                className="p-2 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Navigation Tabs Inside Chapter Modal */}
            <div className="flex items-center gap-1 px-5 pt-3 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-x-auto shrink-0">
              <button
                onClick={() => setActiveSectionTab('all')}
                className={`px-3 py-2 text-xs font-bold border-b-2 transition whitespace-nowrap ${
                  activeSectionTab === 'all'
                    ? 'border-emerald-600 text-emerald-600 dark:text-emerald-400'
                    : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
                }`}
              >
                সম্পূর্ণ অধ্যায়
              </button>
              <button
                onClick={() => setActiveSectionTab('author')}
                className={`px-3 py-2 text-xs font-bold border-b-2 transition whitespace-nowrap ${
                  activeSectionTab === 'author'
                    ? 'border-emerald-600 text-emerald-600 dark:text-emerald-400'
                    : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
                }`}
              >
                লেখক / কবি পরিচিতি
              </button>
              <button
                onClick={() => setActiveSectionTab('theme')}
                className={`px-3 py-2 text-xs font-bold border-b-2 transition whitespace-nowrap ${
                  activeSectionTab === 'theme'
                    ? 'border-emerald-600 text-emerald-600 dark:text-emerald-400'
                    : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
                }`}
              >
                মূলভাব ও প্রেক্ষাপট
              </button>
              <button
                onClick={() => setActiveSectionTab('quotes')}
                className={`px-3 py-2 text-xs font-bold border-b-2 transition whitespace-nowrap ${
                  activeSectionTab === 'quotes'
                    ? 'border-emerald-600 text-emerald-600 dark:text-emerald-400'
                    : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
                }`}
              >
                গুরুত্বপূর্ণ পঙক্তি ও ব্যাখ্যা ({selectedChapter.importantQuotes.length})
              </button>
              <button
                onClick={() => setActiveSectionTab('exam')}
                className={`px-3 py-2 text-xs font-bold border-b-2 transition whitespace-nowrap ${
                  activeSectionTab === 'exam'
                    ? 'border-emerald-600 text-emerald-600 dark:text-emerald-400'
                    : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
                }`}
              >
                পরীক্ষার প্রস্তুতি (High-Yield)
              </button>
            </div>

            {/* Modal Body / Structured Content */}
            <div className="p-5 sm:p-6 overflow-y-auto space-y-6 flex-1 text-slate-800 dark:text-slate-200 text-xs sm:text-sm">
              {/* SECTION 1: লেখক / কবি পরিচিতি */}
              {(activeSectionTab === 'all' || activeSectionTab === 'author') && (
                <div className="space-y-3 bg-slate-50 dark:bg-slate-800/40 p-5 rounded-3xl border border-slate-200 dark:border-slate-800">
                  <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold text-sm">
                    <PenTool className="w-4 h-4" />
                    <span>১. লেখক / কবি পরিচিতি</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div>
                      <strong className="text-slate-500 dark:text-slate-400 block">জীবনকাল:</strong>
                      <span className="font-semibold text-slate-900 dark:text-white">
                        {selectedChapter.authorProfile.birthDeath}
                      </span>
                    </div>
                    <div>
                      <strong className="text-slate-500 dark:text-slate-400 block">জন্মস্থান:</strong>
                      <span className="font-semibold text-slate-900 dark:text-white">
                        {selectedChapter.authorProfile.birthPlace}
                      </span>
                    </div>
                    {selectedChapter.authorProfile.keyAwardsOrTitles && (
                      <div className="sm:col-span-2">
                        <strong className="text-slate-500 dark:text-slate-400 block">উপাধি / সম্মাননা:</strong>
                        <span className="font-semibold text-emerald-700 dark:text-emerald-300">
                          {selectedChapter.authorProfile.keyAwardsOrTitles}
                        </span>
                      </div>
                    )}
                    <div className="sm:col-span-2">
                      <strong className="text-slate-500 dark:text-slate-400 block">উল্লেখযোগ্য সাহিত্যকর্ম:</strong>
                      <div className="flex flex-wrap gap-1.5 mt-1">
                        {selectedChapter.authorProfile.notableWorks.map((work, idx) => (
                          <span
                            key={idx}
                            className="px-2.5 py-0.5 rounded-lg bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-[11px] font-medium"
                          >
                            {work}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <strong className="text-slate-500 dark:text-slate-400 block">সাহিত্যিক তাৎপর্য:</strong>
                      <p className="text-slate-700 dark:text-slate-300 leading-relaxed mt-0.5">
                        {selectedChapter.authorProfile.literarySignificance}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* SECTION 2: মূলভাব ও প্রেক্ষাপট */}
              {(activeSectionTab === 'all' || activeSectionTab === 'theme') && (
                <div className="space-y-3 bg-slate-50 dark:bg-slate-800/40 p-5 rounded-3xl border border-slate-200 dark:border-slate-800">
                  <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-bold text-sm">
                    <BookOpen className="w-4 h-4" />
                    <span>২. মূলভাব ও প্রেক্ষাপট</span>
                  </div>
                  <div className="space-y-2 text-xs leading-relaxed">
                    <div>
                      <strong className="text-slate-900 dark:text-white block mb-0.5 font-bold">মূল বক্তব্য:</strong>
                      <p className="text-slate-700 dark:text-slate-300">
                        {selectedChapter.coreThemeAndContext.coreTheme}
                      </p>
                    </div>
                    <div>
                      <strong className="text-slate-900 dark:text-white block mb-0.5 font-bold">ঐতিহাসিক ও সাহিত্যিক প্রেক্ষাপট:</strong>
                      <p className="text-slate-700 dark:text-slate-300">
                        {selectedChapter.coreThemeAndContext.historicalOrLiteraryContext}
                      </p>
                    </div>
                    <div>
                      <strong className="text-slate-900 dark:text-white block mb-1 font-bold">মূল শিক্ষণীয় বিষয়সমূহ:</strong>
                      <ul className="space-y-1 list-disc list-inside text-slate-700 dark:text-slate-300">
                        {selectedChapter.coreThemeAndContext.mainTakeaways.map((point, idx) => (
                          <li key={idx}>{point}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {/* SECTION 3: গুরুত্বপূর্ণ পঙক্তি ও ব্যাখ্যা */}
              {(activeSectionTab === 'all' || activeSectionTab === 'quotes') && (
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400 font-bold text-sm">
                    <Quote className="w-4 h-4" />
                    <span>৩. গুরুত্বপূর্ণ পঙক্তি / উদ্ধৃতি ও ব্যাখ্যা ({selectedChapter.importantQuotes.length}টি)</span>
                  </div>
                  <div className="space-y-3">
                    {selectedChapter.importantQuotes.map((item, idx) => (
                      <div
                        key={idx}
                        className="p-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm space-y-2 text-xs"
                      >
                        <div className="flex items-start gap-2">
                          <span className="font-bold text-purple-600 shrink-0 font-mono">
                            {idx + 1}.
                          </span>
                          <div className="font-bold text-slate-900 dark:text-white italic leading-relaxed text-xs sm:text-sm">
                            "{item.quote}"
                          </div>
                        </div>
                        <div className="pl-5 text-slate-700 dark:text-slate-300 leading-relaxed bg-slate-50 dark:bg-slate-900/60 p-3 rounded-xl border border-slate-100 dark:border-slate-800">
                          <strong className="text-purple-700 dark:text-purple-300 font-bold">ব্যাখ্যা ও প্রেক্ষাপট: </strong>
                          {item.explanation}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* SECTION 4: পরীক্ষার জন্য গুরুত্বপূর্ণ বিষয় (High-Yield) */}
              {(activeSectionTab === 'all' || activeSectionTab === 'exam') && (
                <div className="space-y-4 bg-slate-50 dark:bg-slate-800/40 p-5 rounded-3xl border border-slate-200 dark:border-slate-800">
                  <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 font-bold text-sm">
                    <Award className="w-4 h-4" />
                    <span>৪. পরীক্ষার জন্য উচ্চফলনশীল প্রস্তুতি (High-Yield Exam Focus)</span>
                  </div>

                  {/* Character/Symbol Analysis */}
                  {selectedChapter.examHighYield.characterOrSymbolAnalysis && (
                    <div className="space-y-2">
                      <strong className="text-xs font-bold text-slate-900 dark:text-white block">
                        চরিত্র ও প্রতীক বিশ্লেষণ:
                      </strong>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                        {selectedChapter.examHighYield.characterOrSymbolAnalysis.map((char, idx) => (
                          <div key={idx} className="p-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                            <span className="font-bold text-emerald-600 dark:text-emerald-400 block mb-0.5">
                              {char.name}
                            </span>
                            <span className="text-slate-600 dark:text-slate-400 text-[11px] leading-relaxed">
                              {char.description}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* জ্ঞান ও অনুধাবনমূলক */}
                  <div className="space-y-2">
                    <strong className="text-xs font-bold text-slate-900 dark:text-white block">
                      জ্ঞান ও অনুধাবনমূলক শীর্ষ প্রশ্নোত্তর:
                    </strong>
                    <ul className="space-y-1.5 list-disc list-inside text-xs text-slate-700 dark:text-slate-300 leading-relaxed bg-white dark:bg-slate-800 p-4 rounded-2xl border border-slate-200 dark:border-slate-700">
                      {selectedChapter.examHighYield.knowledgeAndComprehension.map((qa, idx) => (
                        <li key={idx} className="leading-relaxed">
                          {qa}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* MCQ Key Facts */}
                  <div className="space-y-2">
                    <strong className="text-xs font-bold text-slate-900 dark:text-white block">
                      বিগত বোর্ড ও মডেল টেস্টের শীর্ষ MCQ ফ্যাক্টস:
                    </strong>
                    <div className="grid grid-cols-1 gap-1.5 text-xs">
                      {selectedChapter.examHighYield.mcqKeyFacts.map((fact, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-2 p-2.5 rounded-xl bg-amber-50/60 dark:bg-amber-950/20 border border-amber-200/60 dark:border-amber-900/40 text-amber-950 dark:text-amber-200"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                          <span>{fact}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* সৃজনশীল অগ্রাধিকার */}
                  <div className="space-y-2">
                    <strong className="text-xs font-bold text-slate-900 dark:text-white block">
                      সৃজনশীলের জন্য অগ্রাধিকার বিষয় (CQ Priorities):
                    </strong>
                    <ul className="space-y-1 list-disc list-inside text-xs text-slate-700 dark:text-slate-300">
                      {selectedChapter.examHighYield.priorities.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* SECTION 5: ব্যক্তিগত স্টাডি নোট ও রিভিশন */}
              <div className="space-y-3 bg-white dark:bg-slate-800 p-5 rounded-3xl border border-slate-200 dark:border-slate-700">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 font-bold text-xs text-slate-900 dark:text-white">
                    <FileText className="w-4 h-4 text-emerald-600" />
                    <span>আপনার ব্যক্তিগত স্টাডি নোট (Auto-Saved)</span>
                  </div>
                  {isNoteSaved && (
                    <span className="text-[11px] font-bold text-emerald-600 flex items-center gap-1 animate-fade-in">
                      <CheckCircle2 className="w-3.5 h-3.5" /> সংরক্ষিত হয়েছে
                    </span>
                  )}
                </div>
                <textarea
                  value={personalNoteText}
                  onChange={e => setPersonalNoteText(e.target.value)}
                  placeholder="এই অধ্যায়ের জন্য আপনার নিজস্ব সংক্ষিপ্ত নোট বা রিভিশন পয়েন্ট এখানে লিখুন..."
                  rows={3}
                  className="w-full px-4 py-2.5 rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
                <div className="flex justify-end">
                  <button
                    onClick={handleSaveNote}
                    className="px-4 py-1.5 rounded-xl font-bold text-xs text-white bg-emerald-600 hover:bg-emerald-700 transition flex items-center gap-1.5 shadow-sm"
                  >
                    <Save className="w-3.5 h-3.5" />
                    নোট সংরক্ষণ করুন
                  </button>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40 flex items-center justify-between shrink-0 text-xs">
              <span className="text-slate-500">
                K&M Blueprint • এইচএসসি বাংলা ১ম পত্র সম্পূর্ণ সিলেবাস
              </span>
              <button
                onClick={() => setSelectedChapter(null)}
                className="px-5 py-2 font-bold text-xs text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl hover:bg-slate-100 transition"
              >
                বন্ধ করুন
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
