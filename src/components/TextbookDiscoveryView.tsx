import React, { useState } from 'react';
import { kmTextbooksList } from '../data/kmTextbooks';
import { TextbookResource } from '../types';
import { Search, BookOpen, ExternalLink, ShieldCheck, FileText, CheckCircle } from 'lucide-react';

export const TextbookDiscoveryView: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBook, setSelectedBook] = useState<TextbookResource | null>(null);

  const filtered = kmTextbooksList.filter(b => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return b.title.toLowerCase().includes(q) || b.author.toLowerCase().includes(q) || b.organization.toLowerCase().includes(q);
  });

  return (
    <div className="space-y-6 pb-12 animate-fade-in">
      <div>
        <div className="flex items-center gap-2 mb-1">
          <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300">
            Open Educational Resources (OER)
          </span>
          <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300">
            NCTB Approved
          </span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
          বৈধ পাঠ্যবই অনুসন্ধান ও পিডিএফ রিডার (Textbook Discovery)
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
          এনসিটিবি ও শিক্ষা বোর্ড কর্তৃক অনুমোদিত বৈধ উন্মুক্ত পাঠ্যবই এবং তথ্যভাণ্ডার অনুসন্ধান
        </p>
      </div>

      {/* Search Bar */}
      <div className="relative">
        <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          placeholder="বইয়ের নাম, লেখক বা সংস্থা লিখে খুঁজুন (বাংলা বা ইংরেজি)..."
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          className="w-full pl-10 pr-4 py-2.5 rounded-2xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Legal & Copyright Policy Notice */}
      <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400 space-y-1">
        <div className="font-semibold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
          <ShieldCheck className="w-4 h-4 text-emerald-500" />
          কপিরাইট ও আইনি ব্যবহারের নিশ্চয়তা:
        </div>
        <div>• এখানে শুধুমাত্র সরকারি ও প্রাতিষ্ঠানিক উন্মুক্ত শিক্ষামূলক রিসোর্স ও সিলেবাস মেটাডেটা তালিকাভুক্ত রয়েছে।</div>
        <div>• কোনো বাণিজ্যিক গাইড বই বা পেওয়ালযুক্ত কনটেন্ট অননুমোদিতভাবে সংরক্ষণ বা লঙ্ঘন করা হয় না।</div>
      </div>

      {/* Grid of Books */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filtered.map(book => (
          <div
            key={book.id}
            className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3"
          >
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300">
                {book.permissions}
              </span>
              <span className="text-xs text-slate-400 font-mono">সংস্করণ: {book.edition}</span>
            </div>

            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              {book.title}
            </h3>

            <div className="text-xs text-slate-500 space-y-1">
              <div><strong>লেখক/সম্পাদক:</strong> {book.author}</div>
              <div><strong>সংস্থা:</strong> {book.organization} ({book.year})</div>
            </div>

            {book.extractedTextSnippet && (
              <div className="bg-slate-50 dark:bg-slate-800/40 p-3 rounded-xl text-xs text-slate-600 dark:text-slate-300 font-sans">
                <span className="font-semibold text-slate-400 block mb-1">PDF এক্সট্রাক্টেড পাঠ্যাংশ:</span>
                {book.extractedTextSnippet}
              </div>
            )}

            <div className="pt-2 flex items-center justify-between">
              <span className="text-[11px] text-slate-400">যাচাইকৃত তারিখ: {book.lastCheckedDate}</span>
              <a
                href={book.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 text-xs font-bold text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-slate-800 rounded-xl flex items-center gap-1"
              >
                <span>অফিসিয়াল সাইটে দেখুন</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
