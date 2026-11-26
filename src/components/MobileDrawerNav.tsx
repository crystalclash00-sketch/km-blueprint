import React from 'react';
import { useApp, NavigationPage } from '../context/AppContext';
import {
  LayoutDashboard,
  BookOpen,
  PieChart,
  CheckCircle,
  Clock,
  Sparkles,
  Bot,
  HelpCircle,
  FileText,
  Bookmark,
  Award,
  Video,
  Settings,
  Shield,
  Layers,
  Atom,
  FlaskConical,
  Languages,
  PenTool,
  Calendar,
  History,
  TrendingUp,
  Search,
  BookMarked,
  X,
  LogOut,
  Moon,
  Sun
} from 'lucide-react';

interface NavSection {
  title: string;
  items: Array<{
    id: NavigationPage;
    label: string;
    icon: React.ComponentType<{ className?: string }>;
    badge?: string;
    ownerOnly?: boolean;
  }>;
}

export const mobileNavSections: NavSection[] = [
  {
    title: 'মূল ড্যাশবোর্ড ও সিলেবাস',
    items: [
      { id: 'dashboard', label: 'ড্যাশবোর্ড (Dashboard)', icon: LayoutDashboard },
      { id: 'hsc_library', label: 'HSC লাইব্রেরি (Curriculum)', icon: BookOpen },
      { id: 'remaining_syllabus', label: 'বাকি সিলেবাস (Remaining)', icon: PieChart },
      { id: 'syllabus_progress', label: 'সিলেবাস অগ্রগতি (Progress)', icon: TrendingUp }
    ]
  },
  {
    title: 'পড়াশোনা ও ট্র্যাকিং',
    items: [
      { id: 'study_now', label: 'Study Now (পড়া শুরু করুন)', icon: Sparkles },
      { id: 'submit_study', label: 'আজকের পড়াশোনা জমা দিন', icon: CheckCircle },
      { id: 'submission_history', label: 'পড়াশোনা জমার ইতিহাস', icon: History },
      { id: 'study_coach', label: 'স্টাডি কোচ (Study Coach)', icon: Bot },
      { id: 'study_timer', label: 'স্টাডি টাইমার (Pomodoro)', icon: Clock },
      { id: 'routine_calendar', label: 'রুটিন ও ক্যালেন্ডার', icon: Calendar },
      { id: 'missions', label: 'আজকের মিশন (Missions)', icon: Award }
    ]
  },
  {
    title: 'পরীক্ষা ও প্রশ্ন ব্যাংক',
    items: [
      { id: 'mcq_exam_center', label: 'MCQ পরীক্ষা কেন্দ্র', icon: Layers, badge: 'Timed' },
      { id: 'question_bank', label: 'প্রশ্ন ব্যাংক (Question Bank)', icon: HelpCircle },
      { id: 'exam_history', label: 'পরীক্ষার ফলাফল ও ভুল বিশ্লেষণ', icon: History },
      { id: 'cq_practice', label: 'CQ সৃজনশীল অনুশীলন', icon: FileText },
      { id: 'previous_board_papers', label: 'বিগত বোর্ড প্রশ্নপত্র', icon: BookMarked }
    ]
  },
  {
    title: 'বিশেষায়িত জ্ঞান কেন্দ্র',
    items: [
      { id: 'bangla_center', label: 'বাংলা সাহিত্য ও ব্যাকরণ কেন্দ্র', icon: PenTool, badge: '২৪টি অধ্যায়' },
      { id: 'english_center', label: 'English Learning Center', icon: Languages },
      { id: 'formula_center', label: 'সূত্র ভাণ্ডার (Formula Center)', icon: Atom },
      { id: 'chemical_equation_center', label: 'রাসায়নিক সমীকরণ কেন্দ্র', icon: FlaskConical },
      { id: 'diagram_center', label: 'ডায়াগ্রাম ও চিহ্নিত চিত্র', icon: Layers },
      { id: 'flashcards', label: 'ফ্ল্যাশ কার্ড (Flashcards)', icon: Bookmark },
      { id: 'revision_center', label: 'রিভিশন কেন্দ্র (Spaced Recall)', icon: History }
    ]
  },
  {
    title: 'এআই গবেষণা ও পর্যবেক্ষণ',
    items: [
      { id: 'print_blueprint', label: 'Print the Blueprint (AI)', icon: Sparkles, badge: 'AI' },
      { id: 'chapter_builder', label: 'অটোমেটিক চ্যাপ্টার বিল্ডার', icon: Layers },
      { id: 'textbook_discovery', label: 'পাঠ্যবই অনুসন্ধান (Textbooks)', icon: Search },
      { id: 'hsc_date_monitor', label: 'HSC তারিখ মনিটর (Date Monitor)', icon: Clock },
      { id: 'educational_videos', label: 'ভিডিও লাইব্রেরি (Lectures)', icon: Video }
    ]
  },
  {
    title: 'প্রশাসন ও সেটিংস',
    items: [
      { id: 'owner_panel', label: 'মাস্টার কন্ট্রোল প্যানেল', icon: Shield, ownerOnly: true },
      { id: 'settings', label: 'প্ল্যাটফর্ম সেটিংস', icon: Settings }
    ]
  }
];

export const MobileDrawerNav: React.FC = () => {
  const {
    activePage,
    setActivePage,
    currentUser,
    isOwner,
    isMobileNavOpen,
    setIsMobileNavOpen,
    logout,
    isDarkMode,
    toggleDarkMode
  } = useApp();

  if (!isMobileNavOpen) return null;

  const handleNavigate = (page: NavigationPage) => {
    setActivePage(page);
    setIsMobileNavOpen(false);
  };

  return (
    <div className="fixed inset-0 z-50 md:hidden flex animate-fade-in">
      {/* Backdrop */}
      <div
        onClick={() => setIsMobileNavOpen(false)}
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm"
      />

      {/* Drawer Panel */}
      <div className="relative w-4/5 max-w-xs bg-white dark:bg-slate-900 h-full shadow-2xl flex flex-col z-10 border-r border-slate-200 dark:border-slate-800">
        {/* Header */}
        <div className="p-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white font-mono font-black text-sm shadow">
              K&M
            </div>
            <div>
              <div className="font-extrabold text-sm text-slate-900 dark:text-white">
                K&M Blueprint
              </div>
              <div className="text-[10px] text-slate-500">
                {currentUser.displayName} ({currentUser.role === 'owner' ? 'Owner' : 'Student'})
              </div>
            </div>
          </div>
          <button
            onClick={() => setIsMobileNavOpen(false)}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Navigation List */}
        <div className="flex-1 overflow-y-auto p-3 space-y-4">
          {mobileNavSections.map((section, idx) => {
            const visibleItems = section.items.filter(item => !item.ownerOnly || isOwner);
            if (visibleItems.length === 0) return null;

            return (
              <div key={idx} className="space-y-1">
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider px-2 py-1">
                  {section.title}
                </div>
                {visibleItems.map(item => {
                  const Icon = item.icon;
                  const isActive = activePage === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleNavigate(item.id)}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold transition ${
                        isActive
                          ? 'bg-blue-600 text-white shadow-sm'
                          : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                        <span>{item.label}</span>
                      </div>
                      {item.badge && (
                        <span
                          className={`text-[9px] font-bold px-1.5 py-0.5 rounded-full ${
                            isActive
                              ? 'bg-white/20 text-white'
                              : 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300'
                          }`}
                        >
                          {item.badge}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            );
          })}
        </div>

        {/* Footer with Dark Mode and Logout */}
        <div className="p-3 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40 space-y-2">
          <div className="flex items-center justify-between px-2">
            <span className="text-xs text-slate-500 font-medium">থিম পরিবর্তন</span>
            <button
              onClick={toggleDarkMode}
              className="p-1.5 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300"
            >
              {isDarkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
            </button>
          </div>

          <button
            onClick={() => {
              setIsMobileNavOpen(false);
              logout();
            }}
            className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-xl text-xs font-bold text-rose-600 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/40 transition"
          >
            <LogOut className="w-4 h-4" />
            <span>লগআউট (Log Out)</span>
          </button>
        </div>
      </div>
    </div>
  );
};
