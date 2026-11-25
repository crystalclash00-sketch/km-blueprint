import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { Clock, Play, Pause, RotateCcw, Coffee, ShieldCheck } from 'lucide-react';

export const StudyTimerView: React.FC = () => {
  const { curriculum, addTimerSessionRecord, studentData } = useApp();

  const [mode, setMode] = useState<'pomodoro' | 'stopwatch' | 'countdown'>('pomodoro');
  const [selectedSubject, setSelectedSubject] = useState<string>('phy');
  const [isActive, setIsActive] = useState<boolean>(false);
  const [isBreak, setIsBreak] = useState<boolean>(false);
  const [secondsLeft, setSecondsLeft] = useState<number>(25 * 60);
  const [stopwatchSeconds, setStopwatchSeconds] = useState<number>(0);
  const [completedSessionsCount, setCompletedSessionsCount] = useState<number>(0);

  // Timer Interval
  useEffect(() => {
    let interval: any = null;

    if (isActive) {
      interval = setInterval(() => {
        if (mode === 'stopwatch') {
          setStopwatchSeconds(prev => prev + 1);
        } else {
          setSecondsLeft(prev => {
            if (prev <= 1) {
              handleSessionComplete();
              return 0;
            }
            return prev - 1;
          });
        }
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive, mode, isBreak]);

  const handleSessionComplete = () => {
    setIsActive(false);
    if (!isBreak) {
      const minutesSpent = mode === 'pomodoro' ? 25 : 45;
      addTimerSessionRecord({
        subjectId: selectedSubject,
        mode: mode,
        durationMinutes: minutesSpent,
        completedAt: new Date().toISOString()
      });

      const nextCount = completedSessionsCount + 1;
      setCompletedSessionsCount(nextCount);

      // Pomodoro break rule: 5 min short break, 15 min long break after 4
      const breakMinutes = nextCount % 4 === 0 ? 15 : 5;
      setIsBreak(true);
      setSecondsLeft(breakMinutes * 60);
      alert(`অভিনন্দন! তোমার ${minutesSpent} মিনিটের ফোকাস সেশন সমাপ্ত। এখন ${breakMinutes} মিনিটের ব্রেক শুরু করো!`);
    } else {
      setIsBreak(false);
      setSecondsLeft(25 * 60);
      alert('ব্রেক শেষ! পরবর্তী ফোকাস সেশন শুরু করার জন্য প্রস্তুত হও।');
    }
  };

  const handleReset = () => {
    setIsActive(false);
    setIsBreak(false);
    if (mode === 'pomodoro') setSecondsLeft(25 * 60);
    else if (mode === 'countdown') setSecondsLeft(45 * 60);
    else setStopwatchSeconds(0);
  };

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6 pb-12 animate-fade-in text-center">
      <div>
        <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
          সাধারণ স্টাডি টাইমার (Study Timer & Pomodoro)
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
          বিজ্ঞানসম্মত ২৫/৫ পমোডোরো বা স্টপওয়াচের মাধ্যমে ফোকাস টাইম রেকর্ড করো
        </p>
      </div>

      {/* Strict Separation Notice */}
      <div className="bg-slate-50 dark:bg-slate-900 p-3.5 rounded-2xl border border-slate-200 dark:border-slate-800 text-[11px] text-slate-500 flex items-center justify-center gap-2">
        <ShieldCheck className="w-4 h-4 text-blue-500 shrink-0" />
        <span>
          <strong>সিস্টেম স্বাতন্ত্র্য:</strong> এই স্টাডি টাইমারটি HSC কাউন্টডাউন এবং পরীক্ষার টাইমার থেকে সম্পূর্ণ পৃথক।
        </span>
      </div>

      {/* Mode Selector */}
      <div className="flex justify-center gap-2">
        {(['pomodoro', 'stopwatch', 'countdown'] as const).map(m => (
          <button
            key={m}
            onClick={() => {
              setMode(m);
              handleReset();
            }}
            className={`px-4 py-2 text-xs font-bold rounded-2xl transition capitalize ${
              mode === m
                ? 'bg-blue-600 text-white shadow-sm'
                : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800'
            }`}
          >
            {m === 'pomodoro' ? 'Pomodoro (২৫ মি.)' : m === 'stopwatch' ? 'Stopwatch' : 'Countdown (৪৫ মি.)'}
          </button>
        ))}
      </div>

      {/* Timer Circle / Card */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 sm:p-12 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
        <div className="flex items-center justify-center gap-2">
          {isBreak ? (
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-amber-100 text-amber-800 flex items-center gap-1.5">
              <Coffee className="w-4 h-4" /> রিলাক্স ও ব্রেক টাইম
            </span>
          ) : (
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300">
              ফোকাস স্টাডি সেশন #{completedSessionsCount + 1}
            </span>
          )}
        </div>

        <div className="text-6xl sm:text-7xl font-black font-mono tracking-tight text-slate-900 dark:text-white select-none">
          {mode === 'stopwatch' ? formatTime(stopwatchSeconds) : formatTime(secondsLeft)}
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={() => setIsActive(!isActive)}
            className={`px-8 py-3.5 rounded-2xl text-sm font-bold text-white shadow-md flex items-center gap-2 transition active:scale-95 ${
              isActive
                ? 'bg-amber-600 hover:bg-amber-700 shadow-amber-500/20'
                : 'bg-blue-600 hover:bg-blue-700 shadow-blue-500/20'
            }`}
          >
            {isActive ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
            <span>{isActive ? 'পজ করুন (Pause)' : 'শুরু করুন (Start)'}</span>
          </button>

          <button
            onClick={handleReset}
            className="p-3.5 rounded-2xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
          >
            <RotateCcw className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Focus History */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm text-left space-y-3">
        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
          আজকের রেকর্ডকৃত ফোকাস সেশনসমূহ ({studentData.timerSessions.length})
        </h3>
        {studentData.timerSessions.length > 0 ? (
          <div className="space-y-2">
            {studentData.timerSessions.slice(0, 3).map((sess, idx) => (
              <div key={idx} className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 text-xs">
                <span className="font-bold text-slate-800 dark:text-slate-200">{sess.subjectId.toUpperCase()} • {sess.mode}</span>
                <span className="font-mono text-blue-600 font-bold">{sess.durationMinutes} মিনিট</span>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-xs text-slate-400 py-3 text-center">এখনো কোনো সেশন রেকর্ড করা হয়নি।</div>
        )}
      </div>
    </div>
  );
};
