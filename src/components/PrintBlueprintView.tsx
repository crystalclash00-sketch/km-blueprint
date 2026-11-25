import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  Sparkles,
  BookOpen,
  CheckCircle2,
  Clock,
  ShieldCheck,
  Send,
  ExternalLink,
  Layers
} from 'lucide-react';

export const PrintBlueprintView: React.FC = () => {
  const {
    researchItems,
    researchNewTopic,
    publishResearch,
    currentUser,
    curriculum
  } = useApp();

  const [topicInput, setTopicInput] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!topicInput.trim() || isGenerating) return;

    setIsGenerating(true);
    try {
      await researchNewTopic(topicInput.trim());
      setTopicInput('');
    } catch (err) {
      console.error(err);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="space-y-6 pb-12 animate-fade-in">
      <div>
        <div className="flex items-center gap-2 mb-1">
          <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300">
            K&M Research Lab
          </span>
          <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300">
            Free-First AI Engine
          </span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
          Print the Blueprint — শিক্ষামূলক গবেষণা এআই
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
          অনুমোদিত পাঠ্যক্রম বিশ্লেষণ করে স্বয়ংক্রিয় মৌলিক K&M লেকচার, সংজ্ঞা, সূত্র ও মডেল প্রশ্ন প্রস্তুতকারী গবেষণা সিস্টেম
        </p>
      </div>

      {/* Generation Bar */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
        <h3 className="text-sm font-bold text-slate-900 dark:text-white">
          নতুন টপিক নিয়ে গবেষণা শুরু করুন:
        </h3>

        <form onSubmit={handleGenerate} className="flex flex-col sm:flex-row items-center gap-3">
          <input
            type="text"
            placeholder="যেকোনো HSC টপিকের নাম লিখুন (যেমন: ডপলার ক্রিয়া, বাফার ক্রিয়া, কার্শফের সূত্র, কেলভিন চক্র)..."
            value={topicInput}
            onChange={e => setTopicInput(e.target.value)}
            disabled={isGenerating}
            className="flex-1 w-full px-4 py-2.5 rounded-2xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <button
            type="submit"
            disabled={!topicInput.trim() || isGenerating}
            className="w-full sm:w-auto px-6 py-2.5 rounded-2xl text-xs sm:text-sm font-bold text-white bg-purple-600 hover:bg-purple-700 disabled:opacity-50 shadow-md shadow-purple-500/20 flex items-center justify-center gap-2 shrink-0"
          >
            <Sparkles className="w-4 h-4" />
            <span>{isGenerating ? 'গবেষণা চলমান...' : 'Print the Blueprint'}</span>
          </button>
        </form>

        <div className="bg-slate-50 dark:bg-slate-800/40 p-3.5 rounded-2xl border border-slate-200 dark:border-slate-800 text-xs text-slate-500 space-y-1">
          <div className="font-semibold text-slate-700 dark:text-slate-300">
            গবেষণা স্বচ্ছতা ও যাচাই নীতিমালা:
          </div>
          <div>• কোনো এআই এপিআই কি ছাড়াও এটি ইনবিল্ট অফলাইন HSC জ্ঞান ভাণ্ডার ব্যবহার করে সম্পূর্ণ কাজ করে।</div>
          <div>• কেবল স্বত্ত্বাধিকারী (Owner) কর্তৃক পর্যালোচিত ও ভেরিফাইড কনটেন্টই শিক্ষার্থীদের সাধারণ লাইব্রেরিতে 'Verified' ব্যাজে দৃশ্যমান হয়।</div>
        </div>
      </div>

      {/* Generated Research Items List */}
      <div className="space-y-4">
        <h3 className="text-base font-bold text-slate-900 dark:text-white">
          সাম্প্রতিক প্রস্তুতকৃত গবেষণা ও খসড়া লেকচার ({researchItems.length})
        </h3>

        {researchItems.map(item => (
          <div
            key={item.id}
            className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4"
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase ${
                    item.status === 'Published'
                      ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300'
                      : 'bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300'
                  }`}>
                    {item.status}
                  </span>
                  <span className="text-xs text-slate-400 font-mono">
                    {new Date(item.createdAt).toLocaleDateString()}
                  </span>
                </div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                  {item.topicTitle}
                </h4>
              </div>

              {currentUser.role === 'owner' && item.status !== 'Published' && (
                <button
                  onClick={() => publishResearch(item.id)}
                  className="px-4 py-2 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl shadow-sm flex items-center gap-1.5 shrink-0"
                >
                  <ShieldCheck className="w-4 h-4" />
                  <span>অনুমোদন ও প্রকাশ করুন (Publish)</span>
                </button>
              )}
            </div>

            {/* Generated Lesson Snippet */}
            <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-sans whitespace-pre-line">
              {item.generatedBanglaLesson}
            </div>

            {/* Sources & Citations */}
            {item.sourceReferences && item.sourceReferences.length > 0 && (
              <div className="border-t border-slate-100 dark:border-slate-800 pt-3">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1.5">
                  উৎস ও সিলেবাস রেফারেন্স:
                </span>
                <div className="flex flex-wrap gap-2">
                  {item.sourceReferences.map((ref, rIdx) => (
                    <a
                      key={rIdx}
                      href={ref.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs px-3 py-1 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-blue-600 border border-slate-200 dark:border-slate-700"
                    >
                      <span>{ref.title}</span>
                      <ExternalLink className="w-3 h-3 opacity-60" />
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
