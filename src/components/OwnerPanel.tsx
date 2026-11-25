import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { exportFullDatabaseJson } from '../services/storage';
import {
  Shield,
  Download,
  Users,
  Settings,
  BookOpen,
  HelpCircle,
  Clock,
  Sparkles,
  CheckCircle,
  FileCode,
  HardDrive
} from 'lucide-react';

export const OwnerPanel: React.FC = () => {
  const {
    currentUser,
    curriculum,
    accounts,
    hscConfig,
    researchItems,
    publishResearch
  } = useApp();

  const [activeTab, setActiveTab] = useState<'content' | 'accounts' | 'hsc' | 'backup' | 'quotas'>('content');

  if (currentUser.role !== 'owner') {
    return (
      <div className="p-12 text-center bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-3">
        <Shield className="w-12 h-12 text-rose-500 mx-auto" />
        <h3 className="text-lg font-bold text-slate-900 dark:text-white">
          প্রবেশাধিকার সংরক্ষিত (Restricted to Owner)
        </h3>
        <p className="text-xs text-slate-500 max-w-md mx-auto">
          এই নিয়ন্ত্রণ প্যানেল শুধুমাত্র শিক্ষা প্ল্যাটফর্মের স্বত্ত্বাধিকারী (Owner / Academic Director)-এর জন্য উন্মুক্ত।
        </p>
      </div>
    );
  }

  const handleExportJson = () => {
    const jsonStr = exportFullDatabaseJson();
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `km-blueprint-backup-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-6 pb-12 animate-fade-in">
      <div>
        <div className="flex items-center gap-2 mb-1">
          <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300 flex items-center gap-1">
            <Shield className="w-3 h-3" /> Master Administration
          </span>
          <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300">
            K&M Blueprint v1.0
          </span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
          মাস্টার কন্ট্রোল প্যানেল (Owner Control Panel)
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
          এইচএসসি পাঠ্যক্রম, প্রশ্ন ব্যাংক, এআই গবেষণা কনটেন্ট অনুমোদন, শিক্ষার্থী আমন্ত্রণ ও ব্যাকআপ ব্যবস্থাপনা
        </p>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
        <button
          onClick={() => setActiveTab('content')}
          className={`px-4 py-2 text-xs font-bold rounded-2xl transition shrink-0 ${
            activeTab === 'content'
              ? 'bg-blue-600 text-white shadow-sm'
              : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800'
          }`}
        >
          এআই কনটেন্ট অনুমোদন ({researchItems.filter(r => r.status !== 'Published').length})
        </button>
        <button
          onClick={() => setActiveTab('accounts')}
          className={`px-4 py-2 text-xs font-bold rounded-2xl transition shrink-0 ${
            activeTab === 'accounts'
              ? 'bg-blue-600 text-white shadow-sm'
              : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800'
          }`}
        >
          শিক্ষার্থী আমন্ত্রণ ও অ্যাকাউন্টস
        </button>
        <button
          onClick={() => setActiveTab('backup')}
          className={`px-4 py-2 text-xs font-bold rounded-2xl transition shrink-0 ${
            activeTab === 'backup'
              ? 'bg-blue-600 text-white shadow-sm'
              : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800'
          }`}
        >
          ডাটাবেস ব্যাকআপ ও এক্সপোর্ট
        </button>
        <button
          onClick={() => setActiveTab('quotas')}
          className={`px-4 py-2 text-xs font-bold rounded-2xl transition shrink-0 ${
            activeTab === 'quotas'
              ? 'bg-blue-600 text-white shadow-sm'
              : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800'
          }`}
        >
          ৳০ ফ্রি-টিয়ার কোটা ডকুমেন্টেশন
        </button>
      </div>

      {/* Tab 1: AI Content Approval */}
      {activeTab === 'content' && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
          <h3 className="text-base font-bold text-slate-900 dark:text-white">
            পর্যালোচনা ও প্রকাশের জন্য অপেক্ষমান এআই লেকচারসমূহ
          </h3>

          <div className="space-y-3">
            {researchItems.map(item => (
              <div
                key={item.id}
                className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs"
              >
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-bold text-slate-800 dark:text-slate-200 text-sm">{item.topicTitle}</span>
                    <span className="px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 font-mono text-[10px]">
                      {item.status}
                    </span>
                  </div>
                  <div className="text-slate-500 line-clamp-1">{item.generatedBanglaLesson}</div>
                </div>

                {item.status !== 'Published' && (
                  <button
                    onClick={() => {
                      publishResearch(item.id);
                      alert('কনটেন্টটি ভেরিফাইড হিসেবে সফলভাবে শিক্ষার্থীদের জন্য প্রকাশিত হয়েছে!');
                    }}
                    className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 shadow-sm shrink-0"
                  >
                    অনুমোদন দিন (Publish)
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 2: Accounts Management */}
      {activeTab === 'accounts' && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
          <h3 className="text-base font-bold text-slate-900 dark:text-white">
            প্ল্যাটফর্মের ৩টি নির্দিষ্ট অ্যাকাউন্ট (১ স্বত্ত্বাধিকারী + ২ শিক্ষার্থী)
          </h3>

          <div className="space-y-3">
            {accounts.map(acc => (
              <div
                key={acc.id}
                className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs"
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{acc.avatar}</span>
                  <div>
                    <div className="font-bold text-slate-900 dark:text-white text-sm">{acc.displayName}</div>
                    <div className="text-slate-500">{acc.email} • রোল: {acc.role}</div>
                  </div>
                </div>
                <div className="font-mono text-slate-400 font-bold">PIN: {acc.pin}</div>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-2xl bg-blue-50/50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900/40 text-xs text-blue-900 dark:text-blue-300">
            🔒 <strong>গোপনীয়তা নীতি:</strong> স্বত্ত্বাধিকারী হিসেবেও আপনি শিক্ষার্থীদের ব্যক্তিগত স্টাডি নোট, পাসওয়ার্ড বা ব্যক্তিগত পড়ালেখা ইন্টারসেপ্ট করতে পারবেন না।
          </div>
        </div>
      )}

      {/* Tab 3: Backup & Export */}
      {activeTab === 'backup' && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
          <h3 className="text-base font-bold text-slate-900 dark:text-white">
            ডাটাবেস ব্যাকআপ, স্ন্যাপশট ও রপ্তানি (Export)
          </h3>
          <p className="text-xs text-slate-500">
            সম্পূর্ণ কারিকুলাম, প্রশ্ন ব্যাংক, শিক্ষার্থীর সার্বিক প্রগ্রেস ও সিস্টেম কনফিগারেশন JSON ফরম্যাটে ডাউনলোড করুন।
          </p>

          <div className="pt-2">
            <button
              onClick={handleExportJson}
              className="px-5 py-3 rounded-2xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-md shadow-blue-500/20 flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              <span>সম্পূর্ণ ডাটাবেস ব্যাকআপ ডাউনলোড করুন (JSON Snapshot)</span>
            </button>
          </div>
        </div>
      )}

      {/* Tab 4: Free-Tier Quota Documentation */}
      {activeTab === 'quotas' && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
          <h3 className="text-base font-bold text-slate-900 dark:text-white">
            ৳০/মাস ফ্রি-টিয়ার স্থাপত্য ও অনুমোদিত সীমা (Free-Tier Quotas)
          </h3>

          <div className="space-y-3 text-xs">
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 space-y-1">
              <div className="font-bold text-slate-800 dark:text-slate-200">১. ক্লাউডফ্লেয়ার পেজেস (Cloudflare Pages):</div>
              <div className="text-slate-600 dark:text-slate-400">
                বিনামূল্যে আনলিমিটেড স্ট্যাটিক ব্যান্ডউইথ, প্রতি মাসে ৫০০টি বিল্ড, এবং গ্লোবাল এজ সিডিএন ক্যাশিং।
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 space-y-1">
              <div className="font-bold text-slate-800 dark:text-slate-200">২. সুপারবেস পোস্টগ্রেসকিউএল (Supabase Free Tier):</div>
              <div className="text-slate-600 dark:text-slate-400">
                ৫০০ MB ডাটাবেস স্টোরেজ, ১ GB ফাইল স্টোরেজ, ৫০,০০০ মাসিক সক্রিয় ব্যবহারকারী, যা ৩ জনের জন্য আজীবন সম্পূর্ণ বিনামূল্যে প্রযোজ্য।
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 space-y-1">
              <div className="font-bold text-slate-800 dark:text-slate-200">৩. গুগল জেমিনি এআই (Google AI Studio Free Tier):</div>
              <div className="text-slate-600 dark:text-slate-400">
                প্রতি মিনিটে ১৫টি রিকোয়েস্ট (15 RPM) এবং প্রতিদিন ১,৫০০টি রিকোয়েস্ট সম্পূর্ণ বিনামূল্যে। কোনো ক্রেডিট কার্ড প্রয়োজন হয় না।
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
