import React, { useState } from 'react';
import { PenTool, BookOpen, Layers, CheckCircle2 } from 'lucide-react';

export const BanglaCenterView: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'paper1' | 'paper2'>('paper1');

  return (
    <div className="space-y-6 pb-12 animate-fade-in">
      <div>
        <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
          বাংলা সাহিত্য ও ব্যাকরণ কেন্দ্র (Bangla Learning Center)
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
          বাংলা ১ম পত্রের গদ্য-পদ্য সাহিত্য বিশ্লেষণ এবং ২য় পত্রের প্রমিত উচ্চারণ ও বানান শুদ্ধিকরণ
        </p>
      </div>

      <div className="flex gap-2">
        <button
          onClick={() => setActiveTab('paper1')}
          className={`px-4 py-2 text-xs font-bold rounded-2xl transition ${
            activeTab === 'paper1'
              ? 'bg-emerald-600 text-white shadow-sm'
              : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800'
          }`}
        >
          বাংলা ১ম পত্র (সাহিত্য পাঠ)
        </button>
        <button
          onClick={() => setActiveTab('paper2')}
          className={`px-4 py-2 text-xs font-bold rounded-2xl transition ${
            activeTab === 'paper2'
              ? 'bg-emerald-600 text-white shadow-sm'
              : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800'
          }`}
        >
          বাংলা ২য় পত্র (উচ্চারণ ও বানান)
        </button>
      </div>

      {activeTab === 'paper1' ? (
        <div className="space-y-4">
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
            <div className="text-xs font-bold text-emerald-600 uppercase">গল্প বিশ্লেষণ</div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              অপরিচিতা — রবীন্দ্রনাথ ঠাকুর
            </h3>
            <div className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed space-y-2">
              <p>
                <strong>মূলভাব:</strong> বিশ শতকের দ্বিতীয় দশকের পটভূমিতে রচিত ‘অপরিচিতা’ গল্পে যৌতুক প্রথার বিরুদ্ধে এক বলিষ্ঠ নারী কল্যাণীর প্রতিবাদী মনোভাব ফুটে উঠেছে। অনুপমের আত্মমর্যাদাহীন দুর্বল মানসিকতার বিপরীতে কল্যাণীর পিতা শম্ভুনাথ সেনের দৃপ্ত আত্মসম্মানবোধ বাঙালি সমাজের তৎকালীন অবক্ষয়কে উন্মোচিত করে।
              </p>
              <div className="bg-emerald-50 dark:bg-emerald-950/20 p-3 rounded-2xl border border-emerald-200 dark:border-emerald-900/40">
                <strong>অনুধাবনমূলক কি-পয়েন্ট:</strong> ‘মাকাল ফল’ উক্তিটির মাধ্যমে অনুপমের বাইরের ভদ্র আচরণ কিন্তু ভেতরের ব্যক্তিত্বহীনতাকে উপহাস করা হয়েছে।
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
            <div className="text-xs font-bold text-emerald-600 uppercase">কবিতা বিশ্লেষণ</div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              বিদ্রোহী — কাজী নজরুল ইসলাম
            </h3>
            <div className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed space-y-2">
              <p>
                <strong>মূলভাব:</strong> ‘অগ্নিবীণা’ কাব্যের এই অমর কবিতায় নজরুল ঔপনিবেশিক পরাধীনতার শৃঙ্খল ভাঙার উদাত্ত আহ্বান জানিয়েছেন। কবি একাধারে চির-উন্নত শির আবার মানবপ্রেমী কোমল হৃদয়। তিনি ভৃগু, পরশুরাম, বলরাম ও নটরাজের পৌরাণিক রূপকের মাধ্যমে অন্যায়ের বিরুদ্ধে বিপ্লব ঘোষণা করেছেন।
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              বাংলা আদ্য ‘অ’ সংবৃত উচ্চারণের পাঁচটি নিয়ম (বোর্ড স্ট্যান্ডার্ড)
            </h3>
            <ul className="text-xs text-slate-700 dark:text-slate-300 space-y-2 list-decimal list-inside leading-relaxed">
              <li>শব্দের প্রথমে যদি ‘অ’ থাকে এবং তার পরে ‘ই’, ‘ঈ’, ‘উ’ বা ‘ঊ’ থাকে, তবে সেই ‘অ’ সাধারণত সংবৃত (ও-এর মতো) উচ্চারিত হয়। যেমন: অতি (ওতি), নদী (নোদি)।</li>
              <li>আদ্য ‘অ’-এর পরে ‘য-ফলা’ যুক্ত ব্যঞ্জনবর্ণ থাকলে ‘অ’ সংবৃত হয়। যেমন: কন্যা (কোন্না), অন্য (ওন্নো)।</li>
              <li>আদ্য ‘অ’-এর পরে ‘ক্ষ’ বা ‘জ্ঞ’ থাকলে ‘অ’-এর উচ্চারণ সংবৃত হয়। যেমন: দক্ষ (দোক্‌খো), যজ্ঞ (জোগ্‌গোঁ)।</li>
              <li>আদ্য ‘অ’-এর পরে ‘ঋ-কার’ থাকলে ‘অ’-এর উচ্চারণ সংবৃত হয়। যেমন: মসৃণ (মোস্রিণ)।</li>
              <li>বিশেষণবাচক শব্দের আদ্য ‘অ’ সংবৃত হয়। যেমন: ভালো (ভালো), কত (কতো)।</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};
