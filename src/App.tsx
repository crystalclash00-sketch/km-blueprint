import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';
import { MobileBottomNav } from './components/MobileBottomNav';
import { AccountSwitcherModal } from './components/AccountSwitcherModal';
import { SubmitStudyModal } from './components/SubmitStudyModal';
import { DashboardView } from './components/DashboardView';
import { HscLibraryView } from './components/HscLibraryView';
import { LearningWorkspace } from './components/LearningWorkspace';
import { RemainingSyllabusView } from './components/RemainingSyllabusView';
import { McqExamCenterView } from './components/McqExamCenterView';
import { ExamRunner } from './components/ExamRunner';
import { ExamResultView } from './components/ExamResultView';
import { FormulaCenterView } from './components/FormulaCenterView';
import { ChemicalEquationCenterView } from './components/ChemicalEquationCenterView';
import { PrintBlueprintView } from './components/PrintBlueprintView';
import { HscDateMonitorView } from './components/HscDateMonitorView';
import { StudyTimerView } from './components/StudyTimerView';
import { StudyCoachView } from './components/StudyCoachView';
import { EnglishCenterView } from './components/EnglishCenterView';
import { BanglaCenterView } from './components/BanglaCenterView';
import { TextbookDiscoveryView } from './components/TextbookDiscoveryView';
import { OwnerPanel } from './components/OwnerPanel';
import { RoutineCalendarView } from './components/RoutineCalendarView';
import { AuthView } from './components/AuthView';
import {
  HelpCircle,
  FileText,
  Calendar,
  Bookmark,
  Award,
  Video,
  Settings,
  History,
  Layers,
  Sparkles,
  ArrowRight
} from 'lucide-react';

const MainContentRouter: React.FC = () => {
  const {
    activePage,
    setActivePage,
    studentData,
    questionBank,
    curriculum,
    hscCountdown,
    hscConfig,
    setIsSubmitStudyModalOpen
  } = useApp();

  // Route to the corresponding page view
  switch (activePage) {
    case 'dashboard':
      return <DashboardView />;

    case 'hsc_library':
    case 'subject_view':
    case 'paper_view':
    case 'chapter_view':
    case 'topic_view':
      return <HscLibraryView />;

    case 'learning_workspace':
    case 'study_now':
    case 'learning_mode':
      return <LearningWorkspace />;

    case 'remaining_syllabus':
      return <RemainingSyllabusView />;

    case 'mcq_exam_center':
    case 'model_tests':
      return <McqExamCenterView />;

    case 'exam_runner':
      return <ExamRunner />;

    case 'exam_results':
      return <ExamResultView />;

    case 'formula_center':
      return <FormulaCenterView />;

    case 'chemical_equation_center':
      return <ChemicalEquationCenterView />;

    case 'print_blueprint':
    case 'chapter_builder':
      return <PrintBlueprintView />;

    case 'hsc_date_monitor':
    case 'hsc_countdown':
      return <HscDateMonitorView />;

    case 'study_timer':
      return <StudyTimerView />;

    case 'study_coach':
      return <StudyCoachView />;

    case 'english_center':
      return <EnglishCenterView />;

    case 'bangla_center':
      return <BanglaCenterView />;

    case 'textbook_discovery':
    case 'pdf_reader':
      return <TextbookDiscoveryView />;

    case 'owner_panel':
      return <OwnerPanel />;

    case 'question_bank':
    case 'previous_board_papers':
      return (
        <div className="space-y-6 pb-12 animate-fade-in">
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
              প্রশ্ন ব্যাংক ও বিগত বোর্ড প্রশ্নপত্র (Question Bank)
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              এইচএসসি বিগত বোর্ড পরীক্ষা ও মৌলিক K&M প্র্যাকটিস প্রশ্ন ভাণ্ডার ({questionBank.length} টি ভেরিফাইড প্রশ্ন)
            </p>
          </div>
          <div className="space-y-3">
            {questionBank.map((q, idx) => (
              <div key={q.id} className="p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-blue-600">{q.subjectId.toUpperCase()} • Paper {q.paperNumber}</span>
                  <span className="text-slate-400 font-mono">{q.origin}</span>
                </div>
                <div className="text-sm font-bold text-slate-900 dark:text-white">{idx + 1}. {q.questionText}</div>
                {q.options && (
                  <div className="grid grid-cols-2 gap-2 text-xs pt-1">
                    {q.options.map((opt, oIdx) => (
                      <div key={oIdx} className={`p-2.5 rounded-xl border ${oIdx === q.correctOptionIndex ? 'bg-emerald-50 dark:bg-emerald-950/30 border-emerald-300 font-bold text-emerald-800 dark:text-emerald-300' : 'bg-slate-50 dark:bg-slate-800/40 border-slate-200 dark:border-slate-800'}`}>
                        {opt}
                      </div>
                    ))}
                  </div>
                )}
                <div className="text-xs text-slate-600 dark:text-slate-400 pt-1">
                  <strong>ব্যাখ্যা: </strong>{q.explanation}
                </div>
              </div>
            ))}
          </div>
        </div>
      );

    case 'submission_history':
      return (
        <div className="space-y-6 pb-12 animate-fade-in">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
                পড়াশোনা জমার ইতিহাস (Submission History)
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                তোমার অতীতের সমস্ত সাবমিশন ও নিশ্চিতকৃত সিলেবাস পরিবর্তনের অডিট রেকর্ড
              </p>
            </div>
            <button
              onClick={() => setIsSubmitStudyModalOpen(true)}
              className="px-4 py-2 text-xs font-bold text-white bg-blue-600 rounded-xl"
            >
              নতুন পড়াশোনা জমা দিন +
            </button>
          </div>
          <div className="space-y-3">
            {studentData.submissions.map(sub => (
              <div key={sub.id} className="p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2 text-xs">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-blue-600 uppercase">{sub.subjectId} • Paper {sub.paperNumber}</span>
                  <span className="text-slate-400 font-mono">{sub.date} ({sub.timeSpentMinutes} মিনিট)</span>
                </div>
                <div className="text-slate-800 dark:text-slate-200 text-sm font-medium">
                  {sub.naturalLanguageNote}
                </div>
                <div className="text-slate-500">{sub.whatPractised}</div>
              </div>
            ))}
          </div>
        </div>
      );

    case 'cq_practice':
      return (
        <div className="space-y-6 pb-12 animate-fade-in">
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
              সৃজনশীল প্রশ্ন অনুশীলন (CQ Practice)
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              উদ্দীপক, জ্ঞান, অনুধাবন, প্রয়োগ ও উচ্চতর দক্ষতামূলক প্রশ্ন ও আদর্শ উত্তর
            </p>
          </div>
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 space-y-4">
            <div className="text-xs font-bold text-blue-600">পদার্থবিজ্ঞান ১ম পত্র • ভেক্টর (উদ্দীপক)</div>
            <p className="text-sm font-medium text-slate-800 dark:text-slate-200 leading-relaxed bg-slate-50 dark:bg-slate-800/40 p-4 rounded-2xl">
              একটি নদীতে স্রোতের বেগ 4 km/h। একজন মাঝি 8 km/h বেগে নৌকা চালিয়ে নদী পার হতে চায়। নদীর প্রস্থ 1.5 km।
            </p>
            <div className="space-y-3 text-xs">
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40">
                <span className="font-bold text-slate-900 dark:text-white block mb-0.5">ক. অবস্থান ভেক্টর কাকে বলে? (১)</span>
                <span className="text-slate-600 dark:text-slate-400">প্রসঙ্গ কাঠামোর মূল বিন্দুর সাপেক্ষে কোনো বিন্দুর অবস্থান যে ভেক্টরের সাহায্যে নির্দেশ করা হয় তাকে অবস্থান ভেক্টর বা ব্যাসার্ধ ভেক্টর বলে।</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40">
                <span className="font-bold text-slate-900 dark:text-white block mb-0.5">খ. স্কেলার গুণন বিনিময় সূত্র মেনে চলে কেন? (২)</span>
                <span className="text-slate-600 dark:text-slate-400">A·B = AB cosθ এবং B·A = BA cosθ = AB cosθ। যেহেতু মান ও স্কেলার চিহ্ন অপরিবর্তিত থাকে, তাই এটি বিনিময় সূত্র মেনে চলে।</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40">
                <span className="font-bold text-slate-900 dark:text-white block mb-0.5">গ. সোজাসুজি অপর পারে পৌঁছাতে মাঝিকে কত কোণে নৌকা চালাতে হবে? (৩)</span>
                <span className="text-slate-600 dark:text-slate-400">cos α = -u/v = -4/8 = -0.5 → α = 120° কোণে যাত্রা করতে হবে।</span>
              </div>
            </div>
          </div>
        </div>
      );

    case 'flashcards':
    case 'revision_center':
      return (
        <div className="space-y-6 pb-12 animate-fade-in">
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
              ফ্ল্যাশকার্ড ও সক্রিয় স্মরণ কেন্দ্র (Active Recall & Spaced Repetition)
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              ভুল হওয়া প্রশ্ন এবং দুর্বল সূত্রাবলীর জন্য স্বয়ংক্রিয় রিভিশন ডেক
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
              <span className="text-xs font-bold text-purple-600 uppercase">Formula Flashcard</span>
              <div className="text-base font-bold text-slate-900 dark:text-white">রাস্তার ব্যাংকিং কোণের সমীকরণ কী?</div>
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800 font-mono text-sm font-bold text-indigo-600 text-center">
                tan θ = v² / (r · g)
              </div>
            </div>
            <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
              <span className="text-xs font-bold text-emerald-600 uppercase">Biology Terminology</span>
              <div className="text-base font-bold text-slate-900 dark:text-white">প্রাকৃতিক পেসমেকার কাকে বলে?</div>
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800 text-xs text-slate-700 dark:text-slate-300 text-center">
                SA Node (সাইনোট্রিয়াল নোড)-কে হৃদস্পন্দন স্বতঃস্ফূর্তভাবে শুরুর জন্য প্রাকৃতিক পেসমেকার বলে।
              </div>
            </div>
          </div>
        </div>
      );

    case 'diagram_center':
      return (
        <div className="space-y-6 pb-12 animate-fade-in">
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
              ডায়াগ্রাম ও চিহ্নিত চিত্র কেন্দ্র (Diagram Center)
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              উদ্ভিদবিজ্ঞান, প্রাণিবিজ্ঞান ও পদার্থবিজ্ঞানের বোর্ড স্ট্যান্ডার্ড চিহ্নিত চিত্রাবলী
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 space-y-3">
              <div className="text-xs font-bold text-blue-600">জীববিজ্ঞান ১ম পত্র • অধ্যায় ১</div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">প্লাজমামেমব্রেনের ফ্লুইড মোজাইক মডেল</h3>
              <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-2xl text-center border border-slate-200 dark:border-slate-700 space-y-2">
                <div className="text-xs font-mono text-slate-400">[Phospholipid Bilayer Structure]</div>
                <div className="flex justify-center gap-4 text-xs font-bold text-indigo-600">
                  <span>• পোলার হেড (হাইড্রোফিলিক)</span>
                  <span>• নন-পোলার টেইল (হাইড্রোফোবিক)</span>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 space-y-3">
              <div className="text-xs font-bold text-emerald-600">জীববিজ্ঞান ২য় পত্র • অধ্যায় ৪</div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">হৃদপিণ্ডের জাংশনাল টিস্যু ও সংবহন তন্ত্র</h3>
              <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-2xl text-center border border-slate-200 dark:border-slate-700 space-y-2">
                <div className="text-xs font-mono text-slate-400">[SA Node → AV Node → Purkinje]</div>
                <div className="text-xs text-slate-600 dark:text-slate-400">
                  ডান অলিন্দ থেকে নিলয়ের প্রাচীরে বিদ্যুৎ তরঙ্গ সঞ্চালন চক্র
                </div>
              </div>
            </div>
          </div>
        </div>
      );

    case 'educational_videos':
      return (
        <div className="space-y-6 pb-12 animate-fade-in">
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
              ভিডিও লাইব্রেরি (Educational Video Center)
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              টপিকভিত্তিক কিউরেটেড ভিডিও লেকচার ও অ্যানিমেশন
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-5 border border-slate-200 dark:border-slate-800 space-y-3">
              <div className="aspect-video bg-slate-100 dark:bg-slate-800 rounded-2xl flex items-center justify-center text-slate-400 font-mono text-xs">
                ▶ Physics Vector Lecture
              </div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white">নদী-নৌকা ও বৃষ্টির আপেক্ষিক বেগ সমাধান</h4>
              <div className="text-xs text-slate-500">সময়: ২৫ মিনিট • K&M Master Lecture</div>
            </div>
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-5 border border-slate-200 dark:border-slate-800 space-y-3">
              <div className="aspect-video bg-slate-100 dark:bg-slate-800 rounded-2xl flex items-center justify-center text-slate-400 font-mono text-xs">
                ▶ Organic Chemistry Lecture
              </div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white">বেনজিনের ইলেকট্রোফিলিক প্রতিস্থাপন কৌশল</h4>
              <div className="text-xs text-slate-500">সময়: ৩০ মিনিট • K&M Chemistry</div>
            </div>
          </div>
        </div>
      );

    case 'missions':
    case 'routine_calendar':
      return <RoutineCalendarView />;

    case 'login':
    case 'landing':
      return <AuthView />;

    case 'settings':
    case 'notifications':
    case 'achievements':
    case 'statistics':
    default:
      return (
        <div className="space-y-6 pb-12 animate-fade-in">
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 space-y-4">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              প্ল্যাটফর্ম সেটিংস ও তথ্যাবলী (Settings & System Info)
            </h2>
            <div className="space-y-2 text-xs text-slate-600 dark:text-slate-400">
              <div><strong>সফটওয়্যার নাম:</strong> K&M Blueprint</div>
              <div><strong>ট্যাগলাইন:</strong> Bangladesh's First All-in-One HSC Learning Platform</div>
              <div><strong>সক্রিয় অ্যাকাউন্ট:</strong> {studentData.userId}</div>
              <div><strong>টাইমজোন:</strong> Asia/Dhaka (UTC+6)</div>
              <div><strong>হোস্টিং ও খরচ:</strong> ৳০/মাস (Cloudflare Pages + Supabase Free Architecture)</div>
            </div>
            <button
              onClick={() => setActivePage('dashboard')}
              className="px-4 py-2 text-xs font-bold text-white bg-blue-600 rounded-xl"
            >
              ড্যাশবোর্ডে ফিরে যান
            </button>
          </div>
        </div>
      );
  }
};

export default function App() {
  return (
    <AppProvider>
      <div className="min-h-screen bg-[#f8fafc] dark:bg-[#090d16] text-slate-800 dark:text-slate-100 font-sans antialiased selection:bg-blue-600 selection:text-white flex flex-col">
        {/* Navigation Bar */}
        <Navbar />

        {/* Center Workspace with Desktop Sidebar */}
        <div className="flex-1 flex max-w-7xl w-full mx-auto">
          <Sidebar />

          {/* Main Dynamic Page Pane */}
          <main className="flex-1 min-w-0 p-4 sm:p-6 lg:p-8 pb-20 md:pb-8">
            <MainContentRouter />
          </main>
        </div>

        {/* Mobile Bottom Navigation */}
        <MobileBottomNav />

        {/* Global Modals */}
        <AccountSwitcherModal />
        <SubmitStudyModal />
      </div>
    </AppProvider>
  );
}
