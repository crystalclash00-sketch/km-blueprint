import React, { useState } from 'react';
import { kmEnglishVocabularyList, kmEnglishGrammarRules } from '../data/kmEnglishLessons';
import { EnglishVocabularyItem } from '../types';
import { Languages, BookOpen, Sparkles, Check, HelpCircle } from 'lucide-react';

export const EnglishCenterView: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'vocab' | 'grammar'>('vocab');
  const [selectedWord, setSelectedWord] = useState<EnglishVocabularyItem | null>(null);

  return (
    <div className="space-y-6 pb-12 animate-fade-in">
      <div>
        <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
          English Learning Center (1st & 2nd Paper)
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
          HSC English 1st Paper passage vocabulary with interactive word cards, and 2nd Paper grammar rules
        </p>
      </div>

      {/* Tabs */}
      <div className="flex gap-2">
        <button
          onClick={() => setActiveTab('vocab')}
          className={`px-4 py-2 text-xs font-bold rounded-2xl transition ${
            activeTab === 'vocab'
              ? 'bg-blue-600 text-white shadow-sm'
              : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800'
          }`}
        >
          ক্লিকযোগ্য শব্দভাণ্ডার (Interactive Vocabulary)
        </button>
        <button
          onClick={() => setActiveTab('grammar')}
          className={`px-4 py-2 text-xs font-bold rounded-2xl transition ${
            activeTab === 'grammar'
              ? 'bg-blue-600 text-white shadow-sm'
              : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800'
          }`}
        >
          গ্রামার রুলস (Modifiers & Verbs)
        </button>
      </div>

      {activeTab === 'vocab' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {kmEnglishVocabularyList.map(vocab => (
            <div
              key={vocab.id}
              onClick={() => setSelectedWord(vocab)}
              className="bg-white dark:bg-slate-900 rounded-3xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm hover:border-blue-500 cursor-pointer transition space-y-3"
            >
              <div className="flex items-center justify-between">
                <span className="text-base font-black text-blue-600 dark:text-blue-400">
                  {vocab.word}
                </span>
                <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                  {vocab.partOfSpeech}
                </span>
              </div>

              <div className="text-xs font-bold text-slate-800 dark:text-slate-200">
                বাংলা অর্থ: {vocab.banglaMeaning}
              </div>

              <div className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                {vocab.englishDefinition}
              </div>

              <div className="pt-2 border-t border-slate-100 dark:border-slate-800 text-[11px] space-y-1">
                <div>
                  <span className="font-semibold text-slate-400">Synonyms: </span>
                  <span className="text-slate-600 dark:text-slate-300">{vocab.synonyms.join(', ')}</span>
                </div>
                <div>
                  <span className="font-semibold text-slate-400">Antonyms: </span>
                  <span className="text-slate-600 dark:text-slate-300">{vocab.antonyms.join(', ')}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="space-y-4">
          {kmEnglishGrammarRules.map(rule => (
            <div
              key={rule.id}
              className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-indigo-100 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300 uppercase">
                  {rule.topic}
                </span>
                <span className="text-xs text-slate-400 font-mono">Rule ID: {rule.id}</span>
              </div>

              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                {rule.title}
              </h3>

              <div className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                {rule.ruleBangla}
              </div>

              <div className="bg-slate-50 dark:bg-slate-800/60 p-3 rounded-xl font-mono text-xs text-indigo-600 dark:text-indigo-400 font-bold">
                {rule.formulaOrPattern}
              </div>

              <div className="space-y-1 text-xs">
                {rule.examples.map((ex, eIdx) => (
                  <div key={eIdx} className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/40 text-slate-700 dark:text-slate-300">
                    <span className="font-bold text-emerald-600 dark:text-emerald-400">✓ {ex.correct}</span>
                    <span className="text-slate-400 block text-[11px] mt-0.5">{ex.explanation}</span>
                  </div>
                ))}
              </div>

              <div className="p-3 rounded-xl bg-amber-50 dark:bg-amber-950/20 text-xs text-amber-800 dark:text-amber-200 border border-amber-200 dark:border-amber-900/40">
                <strong>বোর্ড ট্র্যাপ: </strong> {rule.commonBoardTrap}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
