import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { defaultExamConfigs, startNewExamAttempt } from '../services/examService';
import {
  Layers,
  Clock,
  Sparkles,
  Play,
  RotateCcw,
  CheckCircle,
  AlertTriangle,
  History,
  ShieldCheck
} from 'lucide-react';

export const McqExamCenterView: React.FC = () => {
  const {
    curriculum,
    questionBank,
    studentData,
    setActiveExamAttempt,
    setLastCompletedAttempt,
    setActivePage
  } = useApp();

  const [selectedSubjectId, setSelectedSubjectId] = useState<string>('phy');
  const [selectedPaperNumber, setSelectedPaperNumber] = useState<1 | 2>(1);
  const [selectedChapterIds, setSelectedChapterIds] = useState<string[]>([]);
  const [customQuestionCount, setCustomQuestionCount] = useState<number>(25);
  const [customDurationMinutes, setCustomDurationMinutes] = useState<number>(25);

  const currentSubject = curriculum.find(s => s.id === selectedSubjectId) || curriculum[0];
  const currentPaper = currentSubject.papers.find(p => p.paperNumber === selectedPaperNumber) || currentSubject.papers[0];

  const handleStartExam = () => {
    const attempt = startNewExamAttempt(
      studentData.userId,
      selectedSubjectId,
      selectedPaperNumber,
      selectedChapterIds,
      questionBank,
      customQuestionCount,
      customDurationMinutes
    );
    setActiveExamAttempt(attempt);
    setActivePage('exam_runner');
  };

  const handleSelectDefault = (subjectId: string, paperNum: 1 | 2) => {
    setSelectedSubjectId(subjectId);
    setSelectedPaperNumber(paperNum);
    const key = `${subjectId}-${paperNum}`;
    const def = defaultExamConfigs[key];
    if (def) {
      setCustomQuestionCount(def.questionCount);
      setCustomDurationMinutes(def.durationMinutes);
    }
    setSelectedChapterIds([]);
  };

  return (
    <div className="space-y-6 pb-12 animate-fade-in">
      {/* Page Header */}
      <div>
        <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
          র‍্যান্ডমাইজড MCQ পরীক্ষা কেন্দ্র (Randomized Timed Examination Center)
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
          বড় প্রশ্ন পুল থেকে প্রশ্ন ও অপশন এলোমেলো করে প্রকৃত বোর্ড পরীক্ষার আদলে আনলিমিটেড পরীক্ষা দাও
        </p>
      </div>

      {/* Default Configuration Table Card */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
        <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <Clock className="w-4 h-4 text-blue-600" />
          স্ট্যান্ডার্ড পরীক্ষা কনফিগারেশন (Default Exam Settings)
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {Object.entries(defaultExamConfigs).map(([key, config]) => {
            const isSelected = selectedSubjectId === config.subjectId && selectedPaperNumber === config.paperNumber;
            return (
              <div
                key={key}
                onClick={() => handleSelectDefault(config.subjectId, config.paperNumber)}
                className={`p-3.5 rounded-2xl border cursor-pointer transition text-center select-none ${
                  isSelected
                    ? 'border-blue-500 bg-blue-50/70 dark:bg-blue-950/40'
                    : 'border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/40'
                }`}
              >
                <div className="text-xs font-bold text-slate-800 dark:text-slate-200 truncate">
                  {config.title}
                </div>
                <div className="text-xs font-mono font-bold text-blue-600 dark:text-blue-400 mt-1">
                  {config.questionCount} প্রশ্ন / {config.durationMinutes} মিনিট
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Custom Exam Launcher Setup */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: Exam Options (2 cols) */}
        <div className="lg:col-span-2 bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-5">
          <h3 className="text-base font-bold text-slate-900 dark:text-white">
            পরীক্ষার বিষয় ও অধ্যায় নির্বাচন করুন
          </h3>

          {/* Subject Pills */}
          <div>
            <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
              বিষয় নির্বাচন
            </label>
            <div className="flex flex-wrap gap-2">
              {curriculum.map(sub => (
                <button
                  key={sub.id}
                  onClick={() => {
                    setSelectedSubjectId(sub.id);
                    setSelectedPaperNumber(1);
                    setSelectedChapterIds([]);
                  }}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold transition ${
                    selectedSubjectId === sub.id
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200'
                  }`}
                >
                  {sub.name}
                </button>
              ))}
            </div>
          </div>

          {/* Paper Selector */}
          <div>
            <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
              পত্র নির্বাচন
            </label>
            <div className="flex gap-3">
              {currentSubject.papers.map(p => (
                <button
                  key={p.id}
                  onClick={() => {
                    setSelectedPaperNumber(p.paperNumber);
                    setSelectedChapterIds([]);
                  }}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
                    selectedPaperNumber === p.paperNumber
                      ? 'bg-indigo-600 text-white shadow-sm'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                  }`}
                >
                  {p.title}
                </button>
              ))}
            </div>
          </div>

          {/* Chapter Multi-Select (Optional, default all) */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider">
                অধ্যায় নির্বাচন (খালি রাখলে পুরো পত্রের উপর পরীক্ষা হবে)
              </label>
              {selectedChapterIds.length > 0 && (
                <button
                  onClick={() => setSelectedChapterIds([])}
                  className="text-xs text-blue-600 font-semibold"
                >
                  পুরো পত্র সিলেক্ট করুন
                </button>
              )}
            </div>
            <div className="flex flex-wrap gap-2 max-h-40 overflow-y-auto p-1">
              {currentPaper.chapters.map(chap => {
                const isSelected = selectedChapterIds.includes(chap.id);
                return (
                  <button
                    key={chap.id}
                    onClick={() => {
                      if (isSelected) {
                        setSelectedChapterIds(prev => prev.filter(id => id !== chap.id));
                      } else {
                        setSelectedChapterIds(prev => [...prev, chap.id]);
                      }
                    }}
                    className={`px-3 py-1.5 rounded-xl text-xs font-medium border transition ${
                      isSelected
                        ? 'bg-blue-600 text-white border-blue-600'
                        : 'bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    অধ্যায় {chap.chapterNumber}: {chap.title}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Counts and Time */}
          <div className="grid grid-cols-2 gap-4 pt-2">
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                প্রশ্ন সংখ্যা (Questions)
              </label>
              <input
                type="number"
                min={5}
                max={100}
                value={customQuestionCount}
                onChange={e => setCustomQuestionCount(parseInt(e.target.value, 10) || 25)}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 font-mono text-sm"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                সময়সীমা মিনিট (Duration Minutes)
              </label>
              <input
                type="number"
                min={5}
                max={180}
                value={customDurationMinutes}
                onChange={e => setCustomDurationMinutes(parseInt(e.target.value, 10) || 25)}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 font-mono text-sm"
              />
            </div>
          </div>

          <div className="pt-2">
            <button
              onClick={handleStartExam}
              className="w-full py-3.5 rounded-2xl text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-md shadow-blue-500/20 flex items-center justify-center gap-2"
            >
              <Play className="w-5 h-5" />
              <span>র‍্যান্ডমাইজড পরীক্ষা শুরু করুন (Start Timed Exam)</span>
            </button>
          </div>
        </div>

        {/* Right Column: Engine Rules & Past Attempts (1 col) */}
        <div className="space-y-6">
          {/* Engine Guarantees */}
          <div className="bg-slate-50 dark:bg-slate-900 rounded-3xl p-5 border border-slate-200 dark:border-slate-800 space-y-3">
            <h4 className="text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              K&M নির্ভরযোগ্য পরীক্ষা নিয়ামাবলী:
            </h4>
            <ul className="text-xs text-slate-600 dark:text-slate-400 space-y-2 leading-relaxed">
              <li>• <strong>অটো-সাবমিশন:</strong> সময় ০ হলে পরীক্ষা আপনা-আপনি বন্ধ হয়ে যাবে এবং সব প্রদত্ত উত্তর অক্ষত সংরক্ষিত হবে।</li>
              <li>• <strong>টাইমার নিরাপত্তা:</strong> পেজ রিলোড দিলে বা ট্যাব পরিবর্তন করলেও টাইমার বাড়ানো বা বাড়ানো যায় না।</li>
              <li>• <strong>এলোমেলো অপশন:</strong> মুখস্থ উত্তর রোধ করতে প্রশ্ন ও অপশন উভয়ই প্রতিবার নতুন ক্রমানুসারে আসে।</li>
            </ul>
          </div>

          {/* Past Attempts */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
              <History className="w-4 h-4" />
              তোমার পূর্ববর্তী পরীক্ষার রেকর্ড ({studentData.examAttempts.length})
            </h4>
            {studentData.examAttempts.length > 0 ? (
              <div className="space-y-2 max-h-56 overflow-y-auto">
                {studentData.examAttempts.slice(0, 4).map(attempt => (
                  <div
                    key={attempt.id}
                    onClick={() => {
                      setLastCompletedAttempt(attempt);
                      setActivePage('exam_results');
                    }}
                    className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 cursor-pointer hover:border-blue-400 text-xs transition"
                  >
                    <div className="font-bold text-slate-800 dark:text-slate-200 truncate">
                      {attempt.examTitle}
                    </div>
                    <div className="flex items-center justify-between text-slate-500 mt-1">
                      <span>{attempt.totalScore}/{attempt.maxScore} নম্বর</span>
                      <span className="font-mono font-bold text-blue-600">{attempt.percentage}%</span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-xs text-slate-400 py-3 text-center">
                এখনও কোনো পরীক্ষা সম্পন্ন হয়নি।
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
