import React from 'react';
import { useApp } from '../context/AppContext';
import {
  LayoutDashboard,
  BookOpen,
  PlusCircle,
  PenTool,
  Menu
} from 'lucide-react';

export const MobileBottomNav: React.FC = () => {
  const { activePage, setActivePage, setIsSubmitStudyModalOpen, setIsMobileNavOpen } = useApp();

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-t border-slate-200 dark:border-slate-800 px-2 py-1.5 flex items-center justify-around">
      <button
        onClick={() => setActivePage('dashboard')}
        className={`flex flex-col items-center py-1 px-2 rounded-lg text-[10px] font-semibold transition ${
          activePage === 'dashboard'
            ? 'text-blue-600 dark:text-blue-400 font-bold'
            : 'text-slate-500 dark:text-slate-400 hover:text-slate-800'
        }`}
      >
        <LayoutDashboard className="w-5 h-5 mb-0.5" />
        ড্যাশবোর্ড
      </button>

      <button
        onClick={() => setActivePage('hsc_library')}
        className={`flex flex-col items-center py-1 px-2 rounded-lg text-[10px] font-semibold transition ${
          activePage === 'hsc_library'
            ? 'text-blue-600 dark:text-blue-400 font-bold'
            : 'text-slate-500 dark:text-slate-400 hover:text-slate-800'
        }`}
      >
        <BookOpen className="w-5 h-5 mb-0.5" />
        লাইব্রেরি
      </button>

      {/* Center Submit Study Action */}
      <button
        onClick={() => setIsSubmitStudyModalOpen(true)}
        className="flex flex-col items-center -mt-4 bg-gradient-to-tr from-blue-600 to-indigo-600 text-white p-3 rounded-full shadow-lg shadow-blue-500/30 active:scale-95 transition"
      >
        <PlusCircle className="w-6 h-6" />
      </button>

      <button
        onClick={() => setActivePage('bangla_center')}
        className={`flex flex-col items-center py-1 px-2 rounded-lg text-[10px] font-semibold transition ${
          activePage === 'bangla_center'
            ? 'text-emerald-600 dark:text-emerald-400 font-bold'
            : 'text-slate-500 dark:text-slate-400 hover:text-slate-800'
        }`}
      >
        <PenTool className="w-5 h-5 mb-0.5" />
        বাংলা ১ম
      </button>

      <button
        onClick={() => setIsMobileNavOpen(true)}
        className="flex flex-col items-center py-1 px-2 rounded-lg text-[10px] font-semibold text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white transition"
      >
        <Menu className="w-5 h-5 mb-0.5" />
        সব মেনু
      </button>
    </nav>
  );
};
