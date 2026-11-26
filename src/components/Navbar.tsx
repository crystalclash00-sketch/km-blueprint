import React from 'react';
import { useApp } from '../context/AppContext';
import {
  Compass,
  Moon,
  Sun,
  User,
  PlusCircle,
  Shield,
  GraduationCap,
  Sparkles,
  Menu,
  LogOut
} from 'lucide-react';

export const Navbar: React.FC = () => {
  const {
    currentUser,
    overallCompletionPercentage,
    setIsSubmitStudyModalOpen,
    setIsAccountModalOpen,
    setIsMobileNavOpen,
    logout,
    isDarkMode,
    toggleDarkMode,
    setActivePage
  } = useApp();

  return (
    <header className="sticky top-0 z-30 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Left Side: Mobile Hamburger + Brand Logo */}
        <div className="flex items-center gap-2.5">
          <button
            onClick={() => setIsMobileNavOpen(true)}
            aria-label="মেনু খুলুন"
            className="md:hidden p-2 rounded-xl text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
          >
            <Menu className="w-5 h-5" />
          </button>

          <div
            onClick={() => setActivePage('dashboard')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-violet-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
              <span className="font-mono font-black text-lg">K&M</span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="font-extrabold text-slate-900 dark:text-white text-base sm:text-lg tracking-tight">
                  K&M Blueprint
                </h1>
                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300">
                  HSC Science
                </span>
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 hidden sm:block">
                Bangladesh's First All-in-One HSC Learning Platform
              </p>
            </div>
          </div>
        </div>

        {/* Center: Overall Progress Mini-Indicator */}
        <div className="hidden md:flex items-center gap-3 bg-slate-100 dark:bg-slate-800/60 px-3.5 py-1.5 rounded-full border border-slate-200 dark:border-slate-700">
          <GraduationCap className="w-4 h-4 text-blue-600 dark:text-blue-400" />
          <span className="text-xs font-semibold text-slate-700 dark:text-slate-200">
            সিলেবাস অগ্রগতি:
          </span>
          <div className="w-24 h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full transition-all duration-500"
              style={{ width: `${overallCompletionPercentage}%` }}
            />
          </div>
          <span className="text-xs font-black text-blue-600 dark:text-blue-400 font-mono">
            {overallCompletionPercentage}%
          </span>
        </div>

        {/* Right Action Controls */}
        <div className="flex items-center gap-2.5">
          {/* Submit My Study Quick Action Button */}
          <button
            onClick={() => setIsSubmitStudyModalOpen(true)}
            className="flex items-center gap-1.5 px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold bg-blue-600 text-white hover:bg-blue-700 active:scale-95 transition shadow-sm shadow-blue-500/20"
          >
            <PlusCircle className="w-4 h-4" />
            <span className="hidden sm:inline">আজকের পড়াশোনা জমা দিন</span>
            <span className="sm:hidden">পড়াশোনা জমা</span>
          </button>

          {/* Dark / Light Toggle */}
          <button
            onClick={toggleDarkMode}
            aria-label="Toggle theme"
            className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
          >
            {isDarkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-600" />}
          </button>

          {/* Account Profile Switcher Pill */}
          <button
            onClick={() => setIsAccountModalOpen(true)}
            className="flex items-center gap-2 pl-2 pr-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 transition group"
          >
            <span className="text-lg leading-none">{currentUser.avatar}</span>
            <div className="text-left hidden lg:block">
              <div className="text-xs font-bold text-slate-900 dark:text-white leading-tight">
                {currentUser.displayName}
              </div>
              <div className="text-[10px] uppercase font-semibold text-slate-500 dark:text-slate-400 flex items-center gap-1">
                {currentUser.role === 'owner' ? (
                  <span className="text-purple-600 dark:text-purple-400 font-bold flex items-center gap-0.5">
                    <Shield className="w-2.5 h-2.5" /> Owner
                  </span>
                ) : (
                  <span className="text-blue-600 dark:text-blue-400 font-semibold">Student</span>
                )}
              </div>
            </div>
          </button>

          {/* Logout Button */}
          <button
            onClick={logout}
            title="লগআউট"
            className="p-2 rounded-xl text-slate-500 hover:text-rose-600 dark:hover:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/40 transition flex items-center gap-1.5"
          >
            <LogOut className="w-4 h-4" />
            <span className="text-xs font-bold hidden xl:inline">লগআউট</span>
          </button>
        </div>
      </div>
    </header>
  );
};
