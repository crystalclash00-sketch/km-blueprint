import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { officialSources } from '../services/hscDateMonitor';
import {
  Clock,
  RefreshCw,
  ShieldCheck,
  ShieldAlert,
  Calendar,
  ExternalLink,
  History,
  CheckCircle,
  XCircle,
  FileText
} from 'lucide-react';

export const HscDateMonitorView: React.FC = () => {
  const {
    hscConfig,
    runDateMonitorCheck,
    updateHscConfig,
    currentUser
  } = useApp();

  const [isChecking, setIsChecking] = useState(false);
  const [manualDateInput, setManualDateInput] = useState(hscConfig.officialStartDate || '');
  const [targetYearInput, setTargetYearInput] = useState(hscConfig.targetExamYear);

  const handleManualCheck = () => {
    setIsChecking(true);
    setTimeout(() => {
      runDateMonitorCheck();
      setIsChecking(false);
    }, 700);
  };

  const handleSaveOwnerDate = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentUser.role !== 'owner') {
      alert('শুধুমাত্র স্বত্ত্বাধিকারী (Owner) পরীক্ষার তারিখ পরিবর্তন ও নিশ্চিত করতে পারবেন।');
      return;
    }

    const previous = hscConfig.officialStartDate;
    const isNowAnnounced = Boolean(manualDateInput.trim());

    updateHscConfig({
      targetExamYear: targetYearInput,
      officialStartDate: isNowAnnounced ? manualDateInput : null,
      isOfficiallyAnnounced: isNowAnnounced,
      status: isNowAnnounced ? 'Officially Verified' : 'Not Announced',
      dateChangeAuditLog: [
        {
          timestamp: new Date().toISOString(),
          changedBy: currentUser.displayName,
          previousDate: previous,
          newDate: manualDateInput || null,
          reason: isNowAnnounced
            ? `Owner manually verified official HSC ${targetYearInput} routine.`
            : `Set to unannounced for HSC ${targetYearInput}.`
        },
        ...hscConfig.dateChangeAuditLog
      ]
    });

    alert('HSC পরীক্ষার তারিখ ও কাউন্টডাউন কনফিগারেশন সফলভাবে আপডেট করা হয়েছে!');
  };

  return (
    <div className="space-y-6 pb-12 animate-fade-in">
      {/* Title */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300">
              Autonomous Background Monitor
            </span>
            <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300 font-mono">
              Asia/Dhaka UTC+6
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
            HSC তারিখ পর্যবেক্ষণ সিস্টেম (HSC Date Monitor AI)
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
            বাংলাদেশ শিক্ষা মন্ত্রণালয় ও ঢাকা শিক্ষা বোর্ডের অফিসিয়াল বিজ্ঞপ্তি স্বয়ংক্রিয়ভাবে ট্র্যাকিং
          </p>
        </div>

        <button
          onClick={handleManualCheck}
          disabled={isChecking}
          className="px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-md shadow-blue-500/20 flex items-center gap-2 shrink-0"
        >
          <RefreshCw className={`w-4 h-4 ${isChecking ? 'animate-spin' : ''}`} />
          <span>{isChecking ? 'অফিসিয়াল সাইট যাচাই হচ্ছে...' : 'এখনই নতুন বিজ্ঞপ্তি চেক করুন'}</span>
        </button>
      </div>

      {/* Current Official Status Banner */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div>
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              বর্তমান যাচাইকৃত অবস্থা (Target Year: {hscConfig.targetExamYear})
            </div>
            <div className="text-lg font-black text-slate-900 dark:text-white mt-1 flex items-center gap-2">
              {hscConfig.isOfficiallyAnnounced ? (
                <span className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400">
                  <CheckCircle className="w-5 h-5" /> অফিশিয়াল তারিখ ঘোষিত: {hscConfig.officialStartDate} ({hscConfig.startTime})
                </span>
              ) : (
                <span className="flex items-center gap-1.5 text-amber-600 dark:text-amber-400">
                  <ShieldAlert className="w-5 h-5" /> ২০২৮ সালের HSC পরীক্ষার তারিখ এখনো আনুষ্ঠানিকভাবে ঘোষণা বা যাচাই করা হয়নি।
                </span>
              )}
            </div>
          </div>

          <div className="text-xs text-slate-400 font-mono self-end sm:self-center">
            সর্বশেষ সফল যাচাই: {new Date(hscConfig.lastCheckedAt).toLocaleTimeString()}
          </div>
        </div>
      </div>

      {/* Monitored Official Portals */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
        <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-emerald-500" />
          পর্যবেক্ষণাধীন অনুমোদিত সরকারি ওয়েবসাইটসমূহ (Official Sources)
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {officialSources.map((src, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 flex items-center justify-between"
            >
              <div>
                <div className="text-xs font-bold text-slate-800 dark:text-slate-200">{src.name}</div>
                <div className="text-[11px] text-slate-400 font-mono mt-0.5">{src.url}</div>
              </div>
              <a
                href={src.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl text-blue-600 hover:bg-blue-50 dark:hover:bg-slate-800"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Owner Configuration Form (Section 12.A & 12.E) */}
      {currentUser.role === 'owner' ? (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
          <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <Calendar className="w-4 h-4 text-purple-600" />
            স্বত্ত্বাধিকারী কনফিগারেশন ও তারিখ অনুমোদন (Owner Control)
          </h3>

          <form onSubmit={handleSaveOwnerDate} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                  টার্গেট পরীক্ষার বছর (Target Exam Year)
                </label>
                <input
                  type="number"
                  value={targetYearInput}
                  onChange={e => setTargetYearInput(parseInt(e.target.value, 10) || 2028)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 font-mono text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                  অফিসিয়াল শুরুর তারিখ (YYYY-MM-DD)
                </label>
                <input
                  type="date"
                  value={manualDateInput}
                  onChange={e => setManualDateInput(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 font-mono text-sm"
                />
              </div>
            </div>

            <div className="flex items-center justify-between pt-2">
              <button
                type="button"
                onClick={() => setManualDateInput('')}
                className="text-xs text-rose-600 font-semibold hover:underline"
              >
                তারিখ খালি করুন (Set Unannounced)
              </button>
              <button
                type="submit"
                className="px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-sm"
              >
                সংরক্ষণ ও উভয় শিক্ষার্থীর কাউন্টডাউন আপডেট
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div className="bg-slate-50 dark:bg-slate-900 rounded-3xl p-5 border border-slate-200 dark:border-slate-800 text-xs text-slate-500 space-y-1">
          <div className="font-semibold text-slate-700 dark:text-slate-300">
            শিক্ষার্থী অবগতি:
          </div>
          <div>• পরীক্ষার তারিখ অনুমোদন ও কাউন্টডাউন চূড়ান্ত পরিবর্তন শুধুমাত্র স্বত্ত্বাধিকারী (Owner) দ্বারা নিয়ন্ত্রিত।</div>
          <div>• কোনো গুজব বা আনঅফিসিয়াল সোশ্যাল মিডিয়া পোস্টের ভিত্তিতে তারিখ পরিবর্তন করা হয় না।</div>
        </div>
      )}

      {/* Date Change Audit Log */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
        <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <History className="w-4 h-4 text-blue-600" />
          তারিখ পরিবর্তন ও নোটিশ অডিট ইতিহাস (Audit Log)
        </h3>

        <div className="space-y-2.5">
          {hscConfig.dateChangeAuditLog.map((log, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 text-xs space-y-1"
            >
              <div className="flex items-center justify-between">
                <span className="font-bold text-slate-800 dark:text-slate-200">{log.changedBy}</span>
                <span className="font-mono text-slate-400 text-[11px]">{new Date(log.timestamp).toLocaleString()}</span>
              </div>
              <div className="text-slate-600 dark:text-slate-400">{log.reason}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
