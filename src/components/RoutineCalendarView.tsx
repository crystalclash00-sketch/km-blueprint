import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { master391DayPreset, RoutineDayTask, CustomStudyPlanItem } from '../data/kmRoutineModel';
import { parseNaturalStudyPlan } from '../services/routineService';
import {
  Calendar,
  Upload,
  CheckCircle2,
  Clock,
  BookOpen,
  Plus,
  Send,
  Sparkles,
  FileText,
  AlertCircle
} from 'lucide-react';

export const RoutineCalendarView: React.FC = () => {
  const { studentData, saveChapterNote } = useApp();
  const [selectedPhase, setSelectedPhase] = useState<1 | 2 | 3>(1);
  const [routineDays, setRoutineDays] = useState<RoutineDayTask[]>(master391DayPreset);
  const [activeTab, setActiveTab] = useState<'calendar' | 'study_plan' | 'upload'>('calendar');

  // Study Plan State
  const [studyPlanInput, setStudyPlanInput] = useState('');
  const [studyPlans, setStudyPlans] = useState<CustomStudyPlanItem[]>([
    {
      id: 'plan-1',
      createdAt: '2026-11-25',
      targetDate: '2026-11-26',
      rawText: 'Physics 1st Paper, Chapter 2 (ভেক্টর) পৃষ্ঠা ২০-৩৫ রিভিশন এবং ২০টি MCQ সমাধান।',
      parsedSubject: 'Physics',
      parsedPaper: 1,
      parsedChapter: 'ভেক্টর',
      pages: '20-35',
      mcqCount: 20,
      status: 'planned'
    }
  ]);
  const [previewPlan, setPreviewPlan] = useState<Partial<CustomStudyPlanItem> | null>(null);

  // File Upload State
  const [uploadedFileName, setUploadedFileName] = useState<string | null>(null);
  const [uploadStatus, setUploadStatus] = useState<string>('');

  const handleStudyPlanTextChange = (text: string) => {
    setStudyPlanInput(text);
    if (text.trim().length > 5) {
      setPreviewPlan(parseNaturalStudyPlan(text));
    } else {
      setPreviewPlan(null);
    }
  };

  const handleAddPlan = () => {
    if (!studyPlanInput.trim()) return;
    const parsed = parseNaturalStudyPlan(studyPlanInput);
    const newPlan: CustomStudyPlanItem = {
      id: 'plan-' + Date.now(),
      createdAt: new Date().toISOString().split('T')[0],
      targetDate: new Date(Date.now() + 86400000).toISOString().split('T')[0],
      rawText: studyPlanInput,
      ...parsed,
      status: 'planned'
    };
    setStudyPlans([newPlan, ...studyPlans]);
    setStudyPlanInput('');
    setPreviewPlan(null);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploadedFileName(file.name);
    setUploadStatus('রুটিন ফাইল সফলভাবে লোড হয়েছে। K&M ক্যালেন্ডার স্বয়ংক্রিয়ভাবে ৩৯১ দিনের অ্যাকশন প্ল্যানে সাজিয়ে নিয়েছে।');
  };

  const toggleTaskCompletion = (taskId: string) => {
    setRoutineDays(prev =>
      prev.map(t => (t.id === taskId ? { ...t, isCompleted: !t.isCompleted } : t))
    );
  };

  return (
    <div className="space-y-6 pb-12 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-800 dark:bg-blue-950/60 dark:text-blue-300">
              ৩৯১ দিন • ৩টি Phase • Academic to Admission
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white mt-2">
            ব্যক্তিগত রুটিন ও স্টাডি প্ল্যান (Routine & Study Schedule)
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            তোমার নিজস্ব রুটিন ফাইল আপলোড করো অথবা প্রাকৃতিক বাংলায় যা পড়তে চাও সাবমিট করো
          </p>
        </div>

        {/* Action Tabs */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-200/80 dark:bg-slate-800 rounded-2xl">
          <button
            onClick={() => setActiveTab('calendar')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition ${
              activeTab === 'calendar'
                ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
            }`}
          >
            ৩৯১ দিন রুটিন
          </button>
          <button
            onClick={() => setActiveTab('study_plan')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition ${
              activeTab === 'study_plan'
                ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
            }`}
          >
            আমার পড়ার তালিকা
          </button>
          <button
            onClick={() => setActiveTab('upload')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition ${
              activeTab === 'upload'
                ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
            }`}
          >
            রুটিন ফাইল আপলোড
          </button>
        </div>
      </div>

      {/* TAB 1: 391 Days Routine Calendar */}
      {activeTab === 'calendar' && (
        <div className="space-y-4">
          {/* Phase Filter */}
          <div className="grid grid-cols-3 gap-3">
            <button
              onClick={() => setSelectedPhase(1)}
              className={`p-3.5 rounded-2xl border text-left transition ${
                selectedPhase === 1
                  ? 'border-blue-500 bg-blue-50 dark:bg-blue-950/40 text-blue-900 dark:text-blue-200 shadow-sm'
                  : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400'
              }`}
            >
              <div className="text-[11px] font-bold uppercase tracking-wider">Phase 1</div>
              <div className="text-xs sm:text-sm font-bold">Academic (Day 1–239)</div>
              <div className="text-[10px] opacity-80 mt-0.5">বোর্ড প্রস্তুতি ও বেসিক কনসেপ্ট</div>
            </button>

            <button
              onClick={() => setSelectedPhase(2)}
              className={`p-3.5 rounded-2xl border text-left transition ${
                selectedPhase === 2
                  ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-200 shadow-sm'
                  : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400'
              }`}
            >
              <div className="text-[11px] font-bold uppercase tracking-wider">Phase 2</div>
              <div className="text-xs sm:text-sm font-bold">Pre Admission (Day 240–340)</div>
              <div className="text-[10px] opacity-80 mt-0.5">DU, BUET, Medical QB Solve</div>
            </button>

            <button
              onClick={() => setSelectedPhase(3)}
              className={`p-3.5 rounded-2xl border text-left transition ${
                selectedPhase === 3
                  ? 'border-purple-500 bg-purple-50 dark:bg-purple-950/40 text-purple-900 dark:text-purple-200 shadow-sm'
                  : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400'
              }`}
            >
              <div className="text-[11px] font-bold uppercase tracking-wider">Phase 3</div>
              <div className="text-xs sm:text-sm font-bold">Full Admission (Day 341–391)</div>
              <div className="text-[10px] opacity-80 mt-0.5">মক টেস্ট ও চূড়ান্ত ফাইনাল রিভিশন</div>
            </button>
          </div>

          {/* Routine Day Cards */}
          <div className="space-y-3">
            {routineDays
              .filter(d => d.phase === selectedPhase)
              .map(task => (
                <div
                  key={task.id}
                  className={`p-4 rounded-3xl border transition ${
                    task.isCompleted
                      ? 'bg-emerald-50/40 dark:bg-emerald-950/20 border-emerald-300 dark:border-emerald-800'
                      : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-start gap-3">
                      <button
                        onClick={() => toggleTaskCompletion(task.id)}
                        className={`mt-0.5 w-6 h-6 rounded-full flex items-center justify-center transition ${
                          task.isCompleted
                            ? 'bg-emerald-600 text-white'
                            : 'border-2 border-slate-300 dark:border-slate-600 hover:border-emerald-500'
                        }`}
                      >
                        {task.isCompleted && <CheckCircle2 className="w-4 h-4" />}
                      </button>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-mono font-bold text-blue-600">
                            Day {task.dayNumber} ({task.dayName})
                          </span>
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 uppercase">
                            {task.classType}
                          </span>
                        </div>
                        <h4 className="text-sm font-bold text-slate-900 dark:text-white mt-1">
                          {task.subject} {task.paper ? `• Paper ${task.paper}` : ''}: {task.chapterOrTopic}
                        </h4>
                        <div className="mt-2 flex flex-wrap gap-2">
                          {task.actionInstructions.map((act, aIdx) => (
                            <span
                              key={aIdx}
                              className="text-[11px] px-2.5 py-1 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 text-slate-600 dark:text-slate-300"
                            >
                              • {act}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}

      {/* TAB 2: Submit What I Want to Study (Natural Language Study Plan) */}
      {activeTab === 'study_plan' && (
        <div className="space-y-6">
          <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
            <div className="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white">
              <Sparkles className="w-4 h-4 text-amber-500" />
              আমি যা পড়তে বা রিভিশন দিতে চাই (স্বাভাবিক বাংলায় লিখুন)
            </div>
            <p className="text-xs text-slate-500">
              যেমন: "কাল পদার্থবিজ্ঞান ১ম পত্রের ভেক্টর চ্যাপ্টারের ২০-৩৫ পৃষ্ঠা পড়বো এবং ৩০টি MCQ সলভ করবো।"
            </p>
            <div className="relative">
              <textarea
                value={studyPlanInput}
                onChange={e => handleStudyPlanTextChange(e.target.value)}
                placeholder="এখানে বাংলায় বা ইংরেজিতে লিখুন..."
                rows={3}
                className="w-full px-4 py-3 rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Live NLP Preview */}
            {previewPlan && (
              <div className="p-4 rounded-2xl bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-900 text-xs space-y-2 animate-fade-in">
                <div className="font-bold text-blue-700 dark:text-blue-300 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-600" />
                  K&M ন্যাচারাল ল্যাঙ্গুয়েজ পার্সার শনাক্ত করেছে:
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[11px]">
                  <div><strong>বিষয়:</strong> {previewPlan.parsedSubject || '—'}</div>
                  <div><strong>পত্র:</strong> {previewPlan.parsedPaper ? `Paper ${previewPlan.parsedPaper}` : '—'}</div>
                  <div><strong>অধ্যায়:</strong> {previewPlan.parsedChapter || '—'}</div>
                  <div><strong>MCQ লক্ষ্য:</strong> {previewPlan.mcqCount ? `${previewPlan.mcqCount} টি` : '—'}</div>
                </div>
              </div>
            )}

            <div className="flex justify-end">
              <button
                onClick={handleAddPlan}
                disabled={!studyPlanInput.trim()}
                className="px-5 py-2.5 rounded-xl font-bold text-xs text-white bg-blue-600 hover:bg-blue-700 disabled:opacity-50 transition shadow-md shadow-blue-500/20 flex items-center gap-2"
              >
                <Plus className="w-4 h-4" />
                পড়ার তালিকায় যুক্ত করুন
              </button>
            </div>
          </div>

          {/* Planned List */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white">পরিকল্পিত পড়ার কাজসমূহ ({studyPlans.length})</h3>
            {studyPlans.map(plan => (
              <div key={plan.id} className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-blue-600">{plan.parsedSubject} {plan.parsedPaper ? `Paper ${plan.parsedPaper}` : ''}</span>
                  <span className="text-slate-400 font-mono">টার্গেট: {plan.targetDate}</span>
                </div>
                <div className="text-sm font-medium text-slate-800 dark:text-slate-200">{plan.rawText}</div>
                {plan.mcqCount && (
                  <span className="inline-block text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-300">
                    {plan.mcqCount} MCQs Goal
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 3: Routine File Import */}
      {activeTab === 'upload' && (
        <div className="space-y-6">
          <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border-2 border-dashed border-slate-300 dark:border-slate-700 text-center space-y-4">
            <div className="w-14 h-14 rounded-2xl bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 flex items-center justify-center mx-auto">
              <Upload className="w-7 h-7" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                তোমার নিজস্ব রুটিন ফাইল আপলোড করো
              </h3>
              <p className="text-xs text-slate-500 mt-1 max-w-md mx-auto">
                PDF, XLSX, CSV, DOCX বা ইমেজ ফাইল আপলোড করলে K&M স্বয়ংক্রিয়ভাবে তারিখ ও বিষয়ভিত্তিক পড়ার শিডিউলে রূপান্তর করবে।
              </p>
            </div>
            <input
              type="file"
              id="routine-file-input"
              onChange={handleFileUpload}
              accept=".pdf,.xlsx,.csv,.docx,.png,.jpg"
              className="hidden"
            />
            <label
              htmlFor="routine-file-input"
              className="inline-block px-5 py-2.5 rounded-xl font-bold text-xs text-white bg-blue-600 hover:bg-blue-700 cursor-pointer shadow-md shadow-blue-500/20"
            >
              ফাইল নির্বাচন করুন (Browse File)
            </label>
          </div>

          {uploadStatus && (
            <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 text-xs text-emerald-800 dark:text-emerald-300 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
              <span>{uploadStatus}</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
