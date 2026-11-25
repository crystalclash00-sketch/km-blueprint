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
  BookMarked
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

export const Sidebar: React.FC = () => {
  const { activePage, setActivePage, currentUser, overallRemainingPercentage } = useApp();

  const sections: NavSection[] = [
    {
      title: 'মূল ড্যাশবোর্ড ও সিলেবাস',
      items: [
        { id: 'dashboard', label: 'ড্যাশবোর্ড (Dashboard)', icon: LayoutDashboard },
        { id: 'hsc_library', label: 'HSC লাইব্রেরি (Curriculum)', icon: BookOpen },
        { id: 'remaining_syllabus', label: 'বাকি সিলেবাস (Remaining)', icon: PieChart, badge: `${overallRemainingPercentage}%` },
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
        { id: 'mcq_exam_center', label: 'MCQ পরীক্ষা কেন্দ্র (Exam Center)', icon: Layers, badge: 'Timed' },
        { id: 'question_bank', label: 'প্রশ্ন ব্যাংক (Question Bank)', icon: HelpCircle },
        { id: 'exam_history', label: 'পরীক্ষার ফলাফল ও ভুল বিশ্লেষণ', icon: History },
        { id: 'cq_practice', label: 'CQ সৃজনশীল অনুশীলন', icon: FileText },
        { id: 'previous_board_papers', label: 'বিগত বোর্ড প্রশ্নপত্র', icon: BookMarked }
      ]
    },
    {
      title: 'বিশেষায়িত জ্ঞান কেন্দ্র',
      items: [
        { id: 'formula_center', label: 'সূত্র ভাণ্ডার (Formula Center)', icon: Atom },
        { id: 'chemical_equation_center', label: 'রাসায়নিক সমীকরণ কেন্দ্র', icon: FlaskConical },
        { id: 'diagram_center', label: 'ডায়াগ্রাম ও চিহ্নিত চিত্র', icon: Layers },
        { id: 'english_center', label: 'English Learning Center', icon: Languages },
        { id: 'bangla_center', label: 'বাংলা সাহিত্য ও ব্যাকরণ কেন্দ্র', icon: PenTool },
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
        { id: 'owner_panel', label: 'মাস্টার কন্ট্রোল প্যানেল', icon: Shield, badge: 'Admin', ownerOnly: true },
        { id: 'settings', label: 'সেটিংস (Settings)', icon: Settings }
      ]
    }
  ];

  return (
    <aside className="w-64 shrink-0 hidden md:block bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 h-[calc(100vh-4rem)] sticky top-16 overflow-y-auto p-4 space-y-6 select-none scrollbar-thin">
      {sections.map((section, idx) => {
        // Hide owner only sections if user is not owner
        const visibleItems = section.items.filter(item => !item.ownerOnly || currentUser.role === 'owner');
        if (visibleItems.length === 0) return null;

        return (
          <div key={idx} className="space-y-1">
            <h3 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 px-3 mb-2">
              {section.title}
            </h3>
            {visibleItems.map(item => {
              const Icon = item.icon;
              const isActive = activePage === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => setActivePage(item.id)}
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
    </aside>
  );
};
