import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';
import { MobileBottomNav } from './components/MobileBottomNav';
import { MobileDrawerNav } from './components/MobileDrawerNav';
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
import { QuestionBankView } from './components/QuestionBankView';
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
    case 'syllabus_progress':
      return <RemainingSyllabusView />;

    case 'mcq_exam_center':
    case 'model_tests':
      return <McqExamCenterView />;

    case 'exam_runner':
      return <ExamRunner />;

    case 'exam_results':
    case 'exam_history':
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
    case 'cq_practice':
      return <QuestionBankView />;

    case 'submit_study':
      return <DashboardView />;

    case 'submission_history':
      return (
        <div className="space-y-6 pb-12 animate-fade-in">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
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
              className="px-4 py-2 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-sm"
            >
              নতুন পড়াশোনা জমা দিন +
            </button>
          </div>

          {studentData.submissions.length === 0 ? (
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 sm:p-12 border border-slate-200 dark:border-slate-800 text-center space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-950/40 text-blue-600 flex items-center justify-center mx-auto">
                <History className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  কোনো রেকর্ড নেই (No Submissions Recorded)
                </h3>
                <p className="text-xs text-slate-500 max-w-sm mx-auto leading-relaxed">
                  তুমি এখনো কোনো দৈনিক পড়াশোনা বা অধ্যায় পড়ার লগ জমা দাওনি। পড়াশোনা শুরু করে সময় ও নোট জমা দিলে এখানে তোমার অগ্রগতি সংরক্ষিত থাকবে।
                </p>
              </div>
              <button
                onClick={() => setIsSubmitStudyModalOpen(true)}
                className="px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-sm"
              >
                এখনই পড়াশোনা জমা দিন
              </button>
            </div>
          ) : (
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
          )}
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
              <div><strong>প্ল্যাটফর্ম:</strong> K&M Blueprint</div>
              <div><strong>বর্ণনা:</strong> Bangladesh's Premier All-in-One HSC Learning Platform</div>
              <div><strong>সক্রিয় অ্যাকাউন্ট:</strong> {studentData.userId}</div>
              <div><strong>ক্লাউড অবকাঠামো:</strong> Cloudflare Pages & Supabase Cloud</div>
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

const AppLayout: React.FC = () => {
  const { isAuthenticated } = useApp();

  // Clean login/entry gate before accessing the main dashboard or study views
  if (!isAuthenticated) {
    return <AuthView />;
  }

  return (
    <div className="min-h-screen bg-[#f8fafc] dark:bg-[#090d16] text-slate-800 dark:text-slate-100 font-sans antialiased selection:bg-blue-600 selection:text-white flex flex-col">
      {/* Navigation Bar */}
      <Navbar />

      {/* Center Workspace with Right-Hand Desktop Sidebar */}
      <div className="flex-1 flex max-w-7xl w-full mx-auto">
        {/* Main Dynamic Page Pane */}
        <main className="flex-1 min-w-0 p-4 sm:p-6 lg:p-8 pb-20 md:pb-8">
          <MainContentRouter />
        </main>

        {/* Right-Hand Desktop Navigation Sidebar */}
        <Sidebar />
      </div>

      {/* Mobile Navigation */}
      <MobileBottomNav />
      <MobileDrawerNav />

      {/* Global Modals */}
      <AccountSwitcherModal />
      <SubmitStudyModal />
    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <AppLayout />
    </AppProvider>
  );
}
