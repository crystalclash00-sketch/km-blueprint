import React, { useState } from 'react';
import { kmChemicalReactionsList } from '../data/kmChemicalReactions';
import { FlaskConical, Search, Layers, TestTube } from 'lucide-react';

export const ChemicalEquationCenterView: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState<string>('all');

  const filtered = kmChemicalReactionsList.filter(rxn => {
    if (selectedType !== 'all' && rxn.type !== selectedType) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      return rxn.title.toLowerCase().includes(q) || rxn.balancedEquation.toLowerCase().includes(q);
    }
    return true;
  });

  return (
    <div className="space-y-6 pb-12 animate-fade-in">
      <div>
        <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
          রাসায়নিক সমীকরণ কেন্দ্র (Chemical Equation Center)
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
          জৈব ও অজৈব রসায়নের সমতাকৃত বিক্রিয়া, প্রভাবক, শর্ত, বর্ণ পরিবর্তন ও শনাক্তকারী পর্যবেক্ষণ
        </p>
      </div>

      {/* Filter and Search */}
      <div className="flex flex-col sm:flex-row items-center gap-3">
        <div className="relative flex-1 w-full">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="বিক্রিয়া বা যৌগের নাম লিখে খুঁজুন (যেমন: বেনজিন, নাইট্রেশন, টলেন বিকারক, পারম্যাঙ্গানেট)..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-2xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <select
          value={selectedType}
          onChange={e => setSelectedType(e.target.value)}
          className="px-4 py-2.5 rounded-2xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs font-semibold focus:outline-none w-full sm:w-auto"
        >
          <option value="all">সকল ধরন (All Types)</option>
          <option value="Organic">জৈব রসায়ন (Organic)</option>
          <option value="Redox">জারণ-বিজারণ (Redox)</option>
        </select>
      </div>

      {/* Equations Grid */}
      <div className="space-y-4">
        {filtered.map(rxn => (
          <div
            key={rxn.id}
            className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4 hover:border-rose-400 transition"
          >
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-rose-100 text-rose-700 dark:bg-rose-900/40 dark:text-rose-300">
                {rxn.type} Reaction
              </span>
              <span className="text-xs text-slate-400 font-mono">Reaction ID: {rxn.id}</span>
            </div>

            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              {rxn.title}
            </h3>

            {/* Balanced Equation Block */}
            <div className="bg-slate-50 dark:bg-slate-800/60 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 font-mono font-bold text-sm sm:text-base text-rose-600 dark:text-rose-400 text-center select-all">
              {rxn.balancedEquation}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 space-y-1">
                <span className="font-semibold text-slate-400 block uppercase text-[10px]">বিক্রিয়ার শর্ত ও প্রভাবক:</span>
                <span className="font-medium text-slate-800 dark:text-slate-200">{rxn.reactionConditions}</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-amber-50/50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/40 space-y-1">
                <span className="font-semibold text-amber-600 block uppercase text-[10px]">দৃশ্যমান পর্যবেক্ষণ (Observation):</span>
                <span className="font-medium text-amber-900 dark:text-amber-200">{rxn.observations}</span>
              </div>
            </div>

            <div className="text-xs text-slate-600 dark:text-slate-300 bg-slate-50 dark:bg-slate-800/30 p-3.5 rounded-2xl border border-slate-100 dark:border-slate-800 leading-relaxed">
              <strong className="text-slate-800 dark:text-slate-200">বিক্রিয়া কৌশল ও ব্যাখ্যা: </strong>
              {rxn.explanation}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
