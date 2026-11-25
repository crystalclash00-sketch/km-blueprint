import React, { useState } from 'react';
import { kmFormulasList } from '../data/kmFormulas';
import { FormulaItem } from '../types';
import { Atom, Search, Filter, BookOpen, Layers } from 'lucide-react';

export const FormulaCenterView: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSubject, setSelectedSubject] = useState<string>('all');

  const filteredFormulas = kmFormulasList.filter(f => {
    if (selectedSubject !== 'all' && f.subjectId !== selectedSubject) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchTitle = f.title.toLowerCase().includes(q);
      const matchExpr = f.expression.toLowerCase().includes(q);
      return matchTitle || matchExpr;
    }
    return true;
  });

  return (
    <div className="space-y-6 pb-12 animate-fade-in">
      {/* Title */}
      <div>
        <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
          সূত্র ভাণ্ডার (HSC Formula Center)
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
          পদার্থবিজ্ঞান, রসায়ন ও উচ্চতর গণিতের গুরুত্বপূর্ণ সূত্র, প্রতীকের অর্থ, এসআই একক ও শর্তাবলী
        </p>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col sm:flex-row items-center gap-3">
        <div className="relative flex-1 w-full">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="সূত্র বা প্রতীকের নাম লিখে খুঁজুন (যেমন: সামান্তরিক, রুদ্ধতাপীয়, চরম মান)..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-2xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <select
          value={selectedSubject}
          onChange={e => setSelectedSubject(e.target.value)}
          className="px-4 py-2.5 rounded-2xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs font-semibold focus:outline-none w-full sm:w-auto"
        >
          <option value="all">সকল বিষয় (All Subjects)</option>
          <option value="phy">পদার্থবিজ্ঞান (Physics)</option>
          <option value="chem">রসায়ন (Chemistry)</option>
          <option value="hmath">উচ্চতর গণিত (Higher Math)</option>
        </select>
      </div>

      {/* Formulas Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredFormulas.map(item => (
          <div
            key={item.id}
            className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4 hover:border-blue-400 transition"
          >
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300 uppercase">
                {item.subjectId.toUpperCase()} • Paper {item.paperNumber}
              </span>
              <span className="text-xs text-slate-400 font-mono">Formula ID: {item.id}</span>
            </div>

            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              {item.title}
            </h3>

            {/* Formula Expression Highlight */}
            <div className="bg-slate-50 dark:bg-slate-800/60 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 text-center font-mono font-bold text-base sm:text-lg text-indigo-600 dark:text-indigo-400 select-all">
              {item.expression}
            </div>

            {/* Symbols Table */}
            <div className="space-y-1.5 text-xs">
              <div className="font-semibold text-slate-500 uppercase tracking-wider text-[11px]">
                প্রতীকের অর্থ ও এসআই (SI) একক:
              </div>
              <div className="space-y-1">
                {item.symbols.map((s, idx) => (
                  <div key={idx} className="flex items-center justify-between p-2 rounded-xl bg-slate-50 dark:bg-slate-800/40 text-[11px]">
                    <span className="font-mono font-bold text-slate-800 dark:text-slate-200">{s.symbol}</span>
                    <span className="text-slate-600 dark:text-slate-400">{s.meaning}</span>
                    <span className="font-mono text-blue-600 dark:text-blue-400 font-semibold">{s.siUnit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Conditions */}
            <div className="space-y-1 text-xs">
              <div className="font-semibold text-slate-500 uppercase tracking-wider text-[11px]">
                প্রয়োগের শর্তাবলী (Conditions):
              </div>
              <ul className="list-disc list-inside space-y-0.5 text-slate-600 dark:text-slate-400 text-[11px]">
                {item.conditions.map((c, idx) => (
                  <li key={idx}>{c}</li>
                ))}
              </ul>
            </div>

            {/* Example Calculation */}
            <div className="p-3.5 rounded-2xl bg-indigo-50/50 dark:bg-indigo-950/20 border border-indigo-200 dark:border-indigo-900/30 text-xs space-y-1">
              <div className="font-bold text-indigo-900 dark:text-indigo-300">উদাহরণ ও সমাধান:</div>
              <div className="text-slate-700 dark:text-slate-300 font-medium">{item.exampleCalculation.problem}</div>
              <div className="text-slate-600 dark:text-slate-400 text-[11px] font-mono">{item.exampleCalculation.calculation}</div>
              <div className="text-emerald-700 dark:text-emerald-400 font-bold text-[11px]">{item.exampleCalculation.result}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
