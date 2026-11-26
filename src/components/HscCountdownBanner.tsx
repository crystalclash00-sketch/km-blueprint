import React from 'react';
import { useApp } from '../context/AppContext';
import { Clock, ShieldAlert, CheckCircle2, RefreshCw, Calendar } from 'lucide-react';

export const HscCountdownBanner: React.FC = () => {
  const { hscConfig, hscCountdown, runDateMonitorCheck, setActivePage } = useApp();

  // If 2028 is targeted and NOT officially announced:
  const isUnannounced2028 = hscConfig.targetExamYear === 2028 && (!hscConfig.isOfficiallyAnnounced || !hscConfig.officialStartDate);

  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-800 text-white p-5 shadow-lg mb-6 border border-blue-500/30">
      {/* Background aesthetic decorative shapes */}
      <div className="absolute -right-10 -bottom-10 w-44 h-44 rounded-full bg-white/5 pointer-events-none blur-2xl" />
      <div className="absolute left-1/3 -top-12 w-32 h-32 rounded-full bg-indigo-400/10 pointer-events-none blur-xl" />

      <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        {/* Left Side: Status & Title */}
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-white/20 backdrop-blur-md text-blue-100">
              <Calendar className="w-3.5 h-3.5" />
              HSC {hscConfig.targetExamYear} Examination Countdown
            </span>
          </div>

          <h2 className="text-lg md:text-xl font-bold tracking-tight text-white flex items-center gap-2">
            <Clock className="w-5 h-5 text-yellow-300 animate-pulse" />
            {isUnannounced2028 ? (
              <span className="text-amber-200">অফিসিয়াল তারিখ অনুসন্ধান চলমান</span>
            ) : (
              <span>বাকি সময় (Time Remaining)</span>
            )}
          </h2>
        </div>

        {/* Center / Right: Countdown Display or Official Disclaimer */}
        <div className="w-full md:w-auto">
          {isUnannounced2028 ? (
            <div className="bg-amber-950/40 border border-amber-400/40 rounded-xl p-3 flex items-start gap-3 backdrop-blur-md">
              <ShieldAlert className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-semibold text-amber-100">
                  ২০২৮ সালের HSC পরীক্ষার তারিখ এখনো আনুষ্ঠানিকভাবে ঘোষণা বা যাচাই করা হয়নি।
                </p>
                <p className="text-xs text-amber-300/80 mt-0.5">
                  শিক্ষা মন্ত্রণালয় বা ঢাকা শিক্ষা বোর্ডের চূড়ান্ত নোটিশ ছাড়া কোনো অনুমিত বা কৃত্রিম তারিখ দেখানো হয় না।
                </p>
              </div>
            </div>
          ) : hscCountdown ? (
            <div className="flex items-center gap-2 text-center">
              <div className="bg-black/30 backdrop-blur-md px-3 py-2 rounded-xl border border-white/10 min-w-[64px]">
                <div className="text-2xl font-black font-mono text-yellow-300">{hscCountdown.days}</div>
                <div className="text-[10px] uppercase font-semibold text-blue-200">Days</div>
              </div>
              <span className="text-xl font-bold text-white/60">:</span>
              <div className="bg-black/30 backdrop-blur-md px-3 py-2 rounded-xl border border-white/10 min-w-[56px]">
                <div className="text-2xl font-black font-mono text-white">
                  {hscCountdown.hours.toString().padStart(2, '0')}
                </div>
                <div className="text-[10px] uppercase font-semibold text-blue-200">Hours</div>
              </div>
              <span className="text-xl font-bold text-white/60">:</span>
              <div className="bg-black/30 backdrop-blur-md px-3 py-2 rounded-xl border border-white/10 min-w-[56px]">
                <div className="text-2xl font-black font-mono text-white">
                  {hscCountdown.minutes.toString().padStart(2, '0')}
                </div>
                <div className="text-[10px] uppercase font-semibold text-blue-200">Mins</div>
              </div>
              <span className="text-xl font-bold text-white/60">:</span>
              <div className="bg-black/30 backdrop-blur-md px-3 py-2 rounded-xl border border-white/10 min-w-[56px]">
                <div className="text-2xl font-black font-mono text-emerald-400">
                  {hscCountdown.seconds.toString().padStart(2, '0')}
                </div>
                <div className="text-[10px] uppercase font-semibold text-blue-200">Secs</div>
              </div>
            </div>
          ) : (
            <div className="text-sm text-blue-100">তারিখ লোড হচ্ছে...</div>
          )}
        </div>

        {/* Action Button: Check Monitor */}
        <div className="flex items-center gap-2 self-end md:self-center shrink-0">
          <button
            onClick={() => setActivePage('hsc_date_monitor')}
            className="px-3.5 py-2 text-xs font-semibold rounded-xl bg-white text-blue-900 hover:bg-blue-50 transition shadow-sm flex items-center gap-1.5"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            তারিখ পর্যবেক্ষণ (Monitor)
          </button>
        </div>
      </div>
    </div>
  );
};
