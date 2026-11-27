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
  LogOut
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

export const sidebarNavSections: NavSection[] = [
  {
    title: 'মূল ড্যাশবোর্ড ও পাঠ্যক্রম',
    items: [
      { id: 'dashboard', label: 'ড্যাশবোর্ড (Dashboard)', icon: LayoutDashboard },
      { id: 'hsc_library', label: 'HSC লাইব্রেরি ও অধ্যায়', icon: BookOpen },
      { id: 'remaining_syllabus', label: 'বাকি সিলেবাস ও অগ্রগতি', icon: PieChart }
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

export const Sidebar: React.FC = () => {
  const {
    activePage,
    setActivePage,
    isOwner,
    setIsSubmitStudyModalOpen,
    logout
  } = useApp();

  const handleNavigate = (page: NavigationPage) => {
    if (page === 'submit_study') {
      setIsSubmitStudyModalOpen(true);
      return;
    }
    setActivePage(page);
  };

  return (
    <aside className="w-64 shrink-0 hidden md:block border-l border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 backdrop-blur-md p-4 space-y-6 select-none transition-colors">
      {sidebarNavSections.map((section, idx) => {
        const visibleItems = section.items.filter(item => !item.ownerOnly || isOwner);
        if (visibleItems.length === 0) return null;

        return (
          <div key={idx} className="space-y-1">
            <div className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider px-3 py-1">
              {section.title}
            </div>
            {visibleItems.map(item => {
              const Icon = item.icon;
              const isActive = activePage === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => handleNavigate(item.id)}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold transition-all ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-sm shadow-blue-500/30'
                      : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  <div className="flex items-center gap-2.5 truncate">
                    <Icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-white' : 'text-slate-500 dark:text-slate-400'}`} />
                    <span className="truncate">{item.label}</span>
                  </div>
                  {item.badge && (
                    <span
                      className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full ${
                        isActive
                          ? 'bg-white/20 text-white'
                          : 'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300'
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

      {/* Logout Action */}
      <div className="pt-4 mt-2 border-t border-slate-200 dark:border-slate-800">
        <button
          onClick={logout}
          className="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-bold text-rose-600 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/30 transition"
        >
          <LogOut className="w-4 h-4 shrink-0" />
          <span>লগআউট (Log Out)</span>
        </button>
      </div>
    </aside>
  );
};
