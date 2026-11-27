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
  Award,
  Settings,
  Shield,
  Layers,
  Calendar,
  History,
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
    title: 'মূল ড্যাশবোর্ড ও পাঠ্যক্রম',
    items: [
      { id: 'dashboard', label: 'ড্যাশবোর্ড (Dashboard)', icon: LayoutDashboard },
      { id: 'hsc_library', label: 'HSC লাইব্রেরি ও বিষয়ভিত্তিক অধ্যায়', icon: BookOpen },
      { id: 'remaining_syllabus', label: 'বাকি সিলেবাস ও সার্বিক অগ্রগতি', icon: PieChart }
    ]
  },
  {
    title: 'পড়াশোনা ও ট্র্যাকিং',
    items: [
      { id: 'study_now', label: 'Study Now (পড়া শুরু করুন)', icon: Sparkles },
      { id: 'submit_study', label: 'আজকের পড়াশোনা জমা দিন', icon: CheckCircle },
      { id: 'submission_history', label: 'পড়াশোনা জমার ইতিহাস', icon: History },
      { id: 'study_timer', label: 'স্টাডি টাইমার (Pomodoro)', icon: Clock },
      { id: 'study_coach', label: 'স্টাডি কোচ (Study Coach)', icon: Bot },
      { id: 'routine_calendar', label: 'রুটিন ও ক্যালেন্ডার', icon: Calendar },
      { id: 'missions', label: 'আজকের মিশন (Missions)', icon: Award }
    ]
  },
  {
    title: 'প্রশ্ন ব্যাংক ও পরীক্ষা',
    items: [
      { id: 'question_bank', label: 'প্রশ্ন ব্যাংক (MCQ ও CQ)', icon: HelpCircle, badge: '২০১০-২০২৬' },
      { id: 'mcq_exam_center', label: 'MCQ পরীক্ষা কেন্দ্র', icon: Layers, badge: 'Timed' },
      { id: 'exam_results', label: 'পরীক্ষার ফলাফল ও ভুল বিশ্লেষণ', icon: History }
    ]
  },
  {
    title: 'এআই গবেষণা ও পর্যবেক্ষণ',
    items: [
      { id: 'print_blueprint', label: 'Print the Blueprint (AI)', icon: Sparkles, badge: 'AI' },
      { id: 'hsc_date_monitor', label: 'HSC তারিখ মনিটর', icon: Clock }
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
    setIsSubmitStudyModalOpen,
    logout,
    isDarkMode,
    toggleDarkMode
  } = useApp();

  if (!isMobileNavOpen) return null;

  const handleNavigate = (page: NavigationPage) => {
    if (page === 'submit_study') {
      setIsMobileNavOpen(false);
      setIsSubmitStudyModalOpen(true);
      return;
    }
    setActivePage(page);
    setIsMobileNavOpen(false);
  };

  return (
    <div className="fixed inset-0 z-50 md:hidden flex justify-end animate-fade-in">
      {/* Backdrop */}
      <div
        onClick={() => setIsMobileNavOpen(false)}
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm"
      />

      {/* Drawer Panel Sliding in from Right (Ergonomic for right-handed use) */}
      <div className="relative w-4/5 max-w-xs bg-white dark:bg-slate-900 h-full shadow-2xl flex flex-col z-10 border-l border-slate-200 dark:border-slate-800 animate-slide-in-right">
        {/* Header */}
        <div className="p-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white font-mono font-black text-sm shadow">
              K&M
            </div>
            <div className="max-w-[170px] truncate">
              <div className="font-extrabold text-sm text-slate-900 dark:text-white truncate">
                {currentUser.displayName}
              </div>
              <div className="text-[10px] text-slate-500 font-mono truncate">
                {currentUser.email || 'student@kmblueprint.bd'}
              </div>
            </div>
          </div>
          <button
            onClick={() => setIsMobileNavOpen(false)}
            aria-label="মেনু বন্ধ করুন"
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
