import React, { useState } from 'react';

export const ChloroplastSvg: React.FC<{ className?: string }> = ({ className = 'w-full h-auto max-h-72' }) => {
  const [hoveredPart, setHoveredPart] = useState<string | null>(null);

  return (
    <div className="bg-slate-900/90 rounded-2xl p-4 text-white border border-emerald-500/30 shadow-lg">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
          জীববিজ্ঞান ১ম পত্র • অধ্যায় ১: কোষ ও এর গঠন
        </span>
        <span className="text-[11px] px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 font-mono">
          চিহ্নিত চিত্র: ক্লোরোপ্লাস্ট (Chloroplast)
        </span>
      </div>
      <svg viewBox="0 0 600 340" className={className}>
        {/* Definitions */}
        <defs>
          <linearGradient id="chloroGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#064e3b" />
            <stop offset="100%" stopColor="#022c22" />
          </linearGradient>
          <linearGradient id="thylakoidGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#10b981" />
            <stop offset="100%" stopColor="#047857" />
          </linearGradient>
          <radialGradient id="stromaGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#059669" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#022c22" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Outer and Inner Membranes (Double Membrane) */}
        <ellipse cx="300" cy="170" rx="260" ry="140" fill="url(#chloroGrad)" stroke="#10b981" strokeWidth="4" />
        <ellipse cx="300" cy="170" rx="245" ry="128" fill="url(#stromaGlow)" stroke="#34d399" strokeWidth="2" strokeDasharray="6,3" />

        {/* Stroma Matrix */}
        <text x="300" y="165" fill="#a7f3d0" fontSize="13" textAnchor="middle" opacity="0.6">
          স্ট্রোমা ম্যাট্রিক্স (Stroma Matrix)
        </text>

        {/* Granum 1 (Stack of Thylakoids) */}
        <g id="granum1" className="cursor-pointer" onMouseEnter={() => setHoveredPart('গ্রানাম থাইলাকয়েড (Granum Thylakoid): সালোকসংশ্লেষণের আলোক নির্ভর বিক্রিয়া ও এটিপি সংশ্লেষ')}>
          <ellipse cx="180" cy="190" rx="36" ry="10" fill="url(#thylakoidGrad)" stroke="#6ee7b7" strokeWidth="1.5" />
          <ellipse cx="180" cy="175" rx="36" ry="10" fill="url(#thylakoidGrad)" stroke="#6ee7b7" strokeWidth="1.5" />
          <ellipse cx="180" cy="160" rx="36" ry="10" fill="url(#thylakoidGrad)" stroke="#6ee7b7" strokeWidth="1.5" />
          <ellipse cx="180" cy="145" rx="36" ry="10" fill="url(#thylakoidGrad)" stroke="#6ee7b7" strokeWidth="1.5" />
        </g>

        {/* Granum 2 */}
        <g id="granum2" className="cursor-pointer" onMouseEnter={() => setHoveredPart('গ্রানাম চাকতিসমূহ একত্রিত হয়ে গ্রানা তৈরি করে')}>
          <ellipse cx="300" cy="215" rx="38" ry="11" fill="url(#thylakoidGrad)" stroke="#6ee7b7" strokeWidth="1.5" />
          <ellipse cx="300" cy="198" rx="38" ry="11" fill="url(#thylakoidGrad)" stroke="#6ee7b7" strokeWidth="1.5" />
          <ellipse cx="300" cy="181" rx="38" ry="11" fill="url(#thylakoidGrad)" stroke="#6ee7b7" strokeWidth="1.5" />
          <ellipse cx="300" cy="164" rx="38" ry="11" fill="url(#thylakoidGrad)" stroke="#6ee7b7" strokeWidth="1.5" />
          <ellipse cx="300" cy="147" rx="38" ry="11" fill="url(#thylakoidGrad)" stroke="#6ee7b7" strokeWidth="1.5" />
        </g>

        {/* Granum 3 */}
        <g id="granum3" className="cursor-pointer" onMouseEnter={() => setHoveredPart('ক্লোরোফিল অণু ও কোয়ান্টোজোম ধারণকারী আলোক শোষণ অঞ্চল')}>
          <ellipse cx="420" cy="190" rx="36" ry="10" fill="url(#thylakoidGrad)" stroke="#6ee7b7" strokeWidth="1.5" />
          <ellipse cx="420" cy="175" rx="36" ry="10" fill="url(#thylakoidGrad)" stroke="#6ee7b7" strokeWidth="1.5" />
          <ellipse cx="420" cy="160" rx="36" ry="10" fill="url(#thylakoidGrad)" stroke="#6ee7b7" strokeWidth="1.5" />
          <ellipse cx="420" cy="145" rx="36" ry="10" fill="url(#thylakoidGrad)" stroke="#6ee7b7" strokeWidth="1.5" />
        </g>

        {/* Stroma Lamellae (Interconnecting tubes) */}
        <path d="M 180 175 C 240 185, 240 198, 300 198" stroke="#34d399" strokeWidth="3" fill="none" />
        <path d="M 300 181 C 360 181, 360 175, 420 175" stroke="#34d399" strokeWidth="3" fill="none" />

        {/* Chloroplast DNA (Circular loop) */}
        <path d="M 230 115 C 220 100, 260 95, 270 110 C 280 125, 240 130, 230 115" stroke="#fbbf24" strokeWidth="2" strokeDasharray="3,2" fill="none" />
        <text x="250" y="90" fill="#fbbf24" fontSize="10" textAnchor="middle">বৃত্তাকার ক্লোরোপ্লাস্ট DNA</text>
        <line x1="250" y1="95" x2="250" y2="108" stroke="#fbbf24" strokeWidth="1" />

        {/* 70S Ribosomes */}
        <circle cx="370" cy="115" r="3" fill="#60a5fa" />
        <circle cx="380" cy="120" r="3" fill="#60a5fa" />
        <circle cx="365" cy="128" r="3" fill="#60a5fa" />
        <text x="375" y="100" fill="#60a5fa" fontSize="10" textAnchor="middle">70S রাইবোসোম</text>

        {/* Labels & Callouts */}
        {/* Outer Membrane */}
        <line x1="120" y1="60" x2="160" y2="80" stroke="#a7f3d0" strokeWidth="1" />
        <text x="110" y="55" fill="#a7f3d0" fontSize="11" textAnchor="end">বহিঃপর্দা (Outer Membrane)</text>

        {/* Inner Membrane */}
        <line x1="130" y1="280" x2="170" y2="260" stroke="#a7f3d0" strokeWidth="1" />
        <text x="120" y="295" fill="#a7f3d0" fontSize="11" textAnchor="end">অন্তঃপর্দা (Inner Membrane)</text>

        {/* Stroma Lamellae */}
        <line x1="360" y1="181" x2="380" y2="240" stroke="#34d399" strokeWidth="1" />
        <text x="390" y="255" fill="#34d399" fontSize="11">স্ট্রোমা ল্যামেলি (Intergranal Thylakoid)</text>

        {/* Granum */}
        <line x1="420" y1="145" x2="470" y2="110" stroke="#6ee7b7" strokeWidth="1" />
        <text x="475" y="108" fill="#6ee7b7" fontSize="11">গ্রানাম (Granum - থাইলাকয়েড স্তূপ)</text>
      </svg>
      {hoveredPart && (
        <div className="mt-2 p-2 rounded-lg bg-emerald-950/70 border border-emerald-500/40 text-xs text-emerald-200 text-center animate-fade-in">
          {hoveredPart}
        </div>
      )}
    </div>
  );
};

export const VectorResolutionSvg: React.FC<{ className?: string }> = ({ className = 'w-full h-auto max-h-72' }) => {
  return (
    <div className="bg-slate-900/90 rounded-2xl p-4 text-white border border-blue-500/30 shadow-lg">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs font-bold text-blue-400 uppercase tracking-wider">
          পদার্থবিজ্ঞান ১ম পত্র • অধ্যায় ২: ভেক্টর
        </span>
        <span className="text-[11px] px-2 py-0.5 rounded bg-blue-950 text-blue-300 font-mono">
          ভেক্টর বিভাজন ও সামান্তরিক সূত্র
        </span>
      </div>
      <svg viewBox="0 0 540 280" className={className}>
        <defs>
          <marker id="arrowBlue" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#3b82f6" />
          </marker>
          <marker id="arrowEmerald" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#10b981" />
          </marker>
          <marker id="arrowPurple" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#a855f7" />
          </marker>
        </defs>

        {/* Axes */}
        <line x1="60" y1="230" x2="480" y2="230" stroke="#475569" strokeWidth="1.5" />
        <line x1="60" y1="230" x2="60" y2="40" stroke="#475569" strokeWidth="1.5" />
        <text x="490" y="234" fill="#94a3b8" fontSize="12" fontWeight="bold">X</text>
        <text x="60" y="30" fill="#94a3b8" fontSize="12" fontWeight="bold" textAnchor="middle">Y</text>
        <text x="50" y="245" fill="#94a3b8" fontSize="12" fontWeight="bold">O</text>

        {/* Vector P (along X axis) */}
        <line x1="60" y1="230" x2="280" y2="230" stroke="#3b82f6" strokeWidth="3.5" markerEnd="url(#arrowBlue)" />
        <text x="170" y="255" fill="#60a5fa" fontSize="13" fontWeight="bold">ভেক্টর P (Ox)</text>

        {/* Vector Q (at angle alpha) */}
        <line x1="60" y1="230" x2="190" y2="100" stroke="#10b981" strokeWidth="3.5" markerEnd="url(#arrowEmerald)" />
        <text x="110" y="150" fill="#34d399" fontSize="13" fontWeight="bold">ভেক্টর Q</text>

        {/* Parallelogram dotted lines */}
        <line x1="190" y1="100" x2="410" y2="100" stroke="#64748b" strokeWidth="1.5" strokeDasharray="5,5" />
        <line x1="280" y1="230" x2="410" y2="100" stroke="#64748b" strokeWidth="1.5" strokeDasharray="5,5" />

        {/* Resultant Vector R */}
        <line x1="60" y1="230" x2="405" y2="103" stroke="#a855f7" strokeWidth="4" markerEnd="url(#arrowPurple)" />
        <text x="270" y="145" fill="#c084fc" fontSize="14" fontWeight="bold">লব্ধি R = P + Q</text>

        {/* Angle alpha arc */}
        <path d="M 110 230 A 50 50 0 0 0 92 198" fill="none" stroke="#fbbf24" strokeWidth="2" />
        <text x="115" y="215" fill="#fbbf24" fontSize="11" fontWeight="bold">α</text>

        {/* Angle theta arc (between R and P) */}
        <path d="M 130 230 A 70 70 0 0 0 118 205" fill="none" stroke="#f43f5e" strokeWidth="2" />
        <text x="135" y="222" fill="#f43f5e" fontSize="11" fontWeight="bold">θ</text>

        {/* Formula summary */}
        <rect x="300" y="30" width="220" height="60" rx="10" fill="#1e293b" stroke="#334155" />
        <text x="310" y="52" fill="#e2e8f0" fontSize="11" fontWeight="bold">লব্ধির মান: R = √(P² + Q² + 2PQ cos α)</text>
        <text x="310" y="74" fill="#a78bfa" fontSize="11" fontWeight="bold">দিক: tan θ = (Q sin α) / (P + Q cos α)</text>
      </svg>
    </div>
  );
};

export const BenzeneNitrationSvg: React.FC<{ className?: string }> = ({ className = 'w-full h-auto max-h-72' }) => {
  return (
    <div className="bg-slate-900/90 rounded-2xl p-4 text-white border border-amber-500/30 shadow-lg">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
          রসায়ন ২য় পত্র • অধ্যায় ২: জৈব রসায়ন
        </span>
        <span className="text-[11px] px-2 py-0.5 rounded bg-amber-950 text-amber-300 font-mono">
          বেনজিনের নাইট্রেশন ও ইলেকট্রোফিলিক প্রতিস্থাপন কৌশল
        </span>
      </div>
      <svg viewBox="0 0 620 250" className={className}>
        <defs>
          <marker id="arrowAmber" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#f59e0b" />
          </marker>
        </defs>

        {/* Step 1: Benzene Ring */}
        <g transform="translate(60, 90)">
          {/* Hexagon */}
          <polygon points="40,10 70,27 70,63 40,80 10,63 10,27" fill="none" stroke="#f59e0b" strokeWidth="2.5" />
          {/* Inner Resonance Circle */}
          <circle cx="40" cy="45" r="18" fill="none" stroke="#f59e0b" strokeWidth="1.8" strokeDasharray="4,3" />
          <text x="40" y="105" fill="#fcd34d" fontSize="12" textAnchor="middle" fontWeight="bold">বেনজিন (C₆H₆)</text>
        </g>

        {/* Plus sign */}
        <text x="145" y="140" fill="#ffffff" fontSize="20" fontWeight="bold">+</text>

        {/* Electrophile NO2+ */}
        <g transform="translate(170, 115)">
          <rect x="0" y="0" width="60" height="34" rx="8" fill="#78350f" stroke="#d97706" />
          <text x="30" y="22" fill="#fde68a" fontSize="13" textAnchor="middle" fontWeight="bold">NO₂⁺</text>
        </g>

        {/* Arrow to intermediate */}
        <line x1="245" y1="132" x2="285" y2="132" stroke="#f59e0b" strokeWidth="2.5" markerEnd="url(#arrowAmber)" />
        <text x="265" y="120" fill="#94a3b8" fontSize="10" textAnchor="middle">ধাপ ১ (আক্রমণ)</text>

        {/* Step 2: Arenium Ion (Wheland Complex) Intermediate */}
        <g transform="translate(305, 90)">
          <polygon points="40,10 70,27 70,63 40,80 10,63 10,27" fill="none" stroke="#ec4899" strokeWidth="2.5" />
          {/* Broken circle */}
          <path d="M 22 55 A 18 18 0 1 1 58 55" fill="none" stroke="#ec4899" strokeWidth="2" strokeDasharray="3,2" />
          <text x="40" y="47" fill="#f472b6" fontSize="12" textAnchor="middle" fontWeight="bold">+</text>
          {/* H and NO2 bonds */}
          <line x1="40" y1="10" x2="30" y2="-10" stroke="#ec4899" strokeWidth="2" />
          <line x1="40" y1="10" x2="55" y2="-10" stroke="#ec4899" strokeWidth="2" />
          <text x="24" y="-14" fill="#ffffff" fontSize="10" fontWeight="bold">H</text>
          <text x="64" y="-14" fill="#fbbf24" fontSize="10" fontWeight="bold">NO₂</text>
          <text x="40" y="105" fill="#f472b6" fontSize="11" textAnchor="middle" fontWeight="bold">কার্বোক্যাটায়ন অন্তর্বর্তী</text>
          <text x="40" y="120" fill="#94a3b8" fontSize="9" textAnchor="middle">(সিগমা কমপ্লেক্স)</text>
        </g>

        {/* Arrow to product */}
        <line x1="395" y1="132" x2="435" y2="132" stroke="#f59e0b" strokeWidth="2.5" markerEnd="url(#arrowAmber)" />
        <text x="415" y="120" fill="#94a3b8" fontSize="10" textAnchor="middle">- H⁺ (ধাপ ২)</text>

        {/* Step 3: Nitrobenzene */}
        <g transform="translate(455, 90)">
          <polygon points="40,10 70,27 70,63 40,80 10,63 10,27" fill="none" stroke="#10b981" strokeWidth="2.5" />
          <circle cx="40" cy="45" r="18" fill="none" stroke="#10b981" strokeWidth="1.8" />
          {/* NO2 bond */}
          <line x1="40" y1="10" x2="40" y2="-12" stroke="#10b981" strokeWidth="2.5" />
          <text x="40" y="-16" fill="#34d399" fontSize="12" textAnchor="middle" fontWeight="bold">NO₂</text>
          <text x="40" y="105" fill="#34d399" fontSize="12" textAnchor="middle" fontWeight="bold">নাইট্রোবেনজিন</text>
        </g>

        {/* Bottom Reaction Condition */}
        <rect x="130" y="210" width="360" height="28" rx="6" fill="#1e293b" />
        <text x="310" y="228" fill="#e2e8f0" fontSize="11" textAnchor="middle">
          প্রভাবক ও শর্ত: গাঢ় HNO₃ + গাঢ় H₂SO₄, তাপমাত্রা: ৫০°-৬০°C
        </text>
      </svg>
    </div>
  );
};

export const IctLogicGatesSvg: React.FC<{ className?: string }> = ({ className = 'w-full h-auto max-h-72' }) => {
  const [a, setA] = useState<0 | 1>(0);
  const [b, setB] = useState<0 | 1>(0);

  const andOut = a && b ? 1 : 0;
  const orOut = a || b ? 1 : 0;
  const nandOut = andOut === 1 ? 0 : 1;
  const xorOut = (a ^ b) ? 1 : 0;

  return (
    <div className="bg-slate-900/90 rounded-2xl p-4 text-white border border-cyan-500/30 shadow-lg">
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">
          তথ্য ও যোগাযোগ প্রযুক্তি • অধ্যায় ৩: ডিজিটাল ডিভাইস ও লজিক গেট
        </span>
        <span className="text-[11px] px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 font-mono">
          ইন্টারঅ্যাক্টিভ গেট সিমুলেটর
        </span>
      </div>

      {/* Input Switch Toggles */}
      <div className="flex items-center justify-center gap-6 mb-4 p-3 bg-slate-800/80 rounded-xl border border-slate-700">
        <span className="text-xs text-slate-300 font-medium">ইনপুট পরিবর্তন করে আউটপুট পর্যবেক্ষণ করুন:</span>
        <button
          onClick={() => setA(a === 0 ? 1 : 0)}
          className={`px-3 py-1.5 rounded-lg text-xs font-bold font-mono transition ${
            a === 1 ? 'bg-cyan-500 text-slate-950 ring-2 ring-cyan-300' : 'bg-slate-700 text-slate-300'
          }`}
        >
          Input A = {a}
        </button>
        <button
          onClick={() => setB(b === 0 ? 1 : 0)}
          className={`px-3 py-1.5 rounded-lg text-xs font-bold font-mono transition ${
            b === 1 ? 'bg-cyan-500 text-slate-950 ring-2 ring-cyan-300' : 'bg-slate-700 text-slate-300'
          }`}
        >
          Input B = {b}
        </button>
      </div>

      {/* 4 Gates Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
        {/* AND Gate */}
        <div className="p-3 bg-slate-800/60 rounded-xl border border-slate-700 space-y-2">
          <div className="text-xs font-bold text-cyan-400">AND Gate (A · B)</div>
          <svg viewBox="0 0 120 60" className="w-full h-12">
            <line x1="10" y1="20" x2="40" y2="20" stroke="#94a3b8" strokeWidth="2" />
            <line x1="10" y1="40" x2="40" y2="40" stroke="#94a3b8" strokeWidth="2" />
            <path d="M 40 10 L 65 10 A 20 20 0 0 1 65 50 L 40 50 Z" fill="none" stroke="#22d3ee" strokeWidth="2.5" />
            <line x1="85" y1="30" x2="110" y2="30" stroke="#22d3ee" strokeWidth="2" />
          </svg>
          <div className={`text-base font-black font-mono ${andOut ? 'text-emerald-400' : 'text-slate-500'}`}>
            Output = {andOut}
          </div>
        </div>

        {/* OR Gate */}
        <div className="p-3 bg-slate-800/60 rounded-xl border border-slate-700 space-y-2">
          <div className="text-xs font-bold text-blue-400">OR Gate (A + B)</div>
          <svg viewBox="0 0 120 60" className="w-full h-12">
            <line x1="10" y1="20" x2="44" y2="20" stroke="#94a3b8" strokeWidth="2" />
            <line x1="10" y1="40" x2="44" y2="40" stroke="#94a3b8" strokeWidth="2" />
            <path d="M 38 10 Q 55 30 38 50 Q 75 48 85 30 Q 75 12 38 10 Z" fill="none" stroke="#3b82f6" strokeWidth="2.5" />
            <line x1="85" y1="30" x2="110" y2="30" stroke="#3b82f6" strokeWidth="2" />
          </svg>
          <div className={`text-base font-black font-mono ${orOut ? 'text-emerald-400' : 'text-slate-500'}`}>
            Output = {orOut}
          </div>
        </div>

        {/* NAND Gate */}
        <div className="p-3 bg-slate-800/60 rounded-xl border border-slate-700 space-y-2">
          <div className="text-xs font-bold text-purple-400">NAND Gate (A · B)&#773;</div>
          <svg viewBox="0 0 120 60" className="w-full h-12">
            <line x1="10" y1="20" x2="40" y2="20" stroke="#94a3b8" strokeWidth="2" />
            <line x1="10" y1="40" x2="40" y2="40" stroke="#94a3b8" strokeWidth="2" />
            <path d="M 40 10 L 60 10 A 20 20 0 0 1 60 50 L 40 50 Z" fill="none" stroke="#c084fc" strokeWidth="2.5" />
            <circle cx="83" cy="30" r="3.5" fill="none" stroke="#c084fc" strokeWidth="2" />
            <line x1="87" y1="30" x2="110" y2="30" stroke="#c084fc" strokeWidth="2" />
          </svg>
          <div className={`text-base font-black font-mono ${nandOut ? 'text-emerald-400' : 'text-slate-500'}`}>
            Output = {nandOut}
          </div>
        </div>

        {/* XOR Gate */}
        <div className="p-3 bg-slate-800/60 rounded-xl border border-slate-700 space-y-2">
          <div className="text-xs font-bold text-rose-400">XOR Gate (A ⊕ B)</div>
          <svg viewBox="0 0 120 60" className="w-full h-12">
            <path d="M 32 10 Q 48 30 32 50" fill="none" stroke="#fb7185" strokeWidth="2.5" />
            <path d="M 40 10 Q 55 30 40 50 Q 75 48 85 30 Q 75 12 40 10 Z" fill="none" stroke="#fb7185" strokeWidth="2.5" />
            <line x1="85" y1="30" x2="110" y2="30" stroke="#fb7185" strokeWidth="2" />
          </svg>
          <div className={`text-base font-black font-mono ${xorOut ? 'text-emerald-400' : 'text-slate-500'}`}>
            Output = {xorOut}
          </div>
        </div>
      </div>
    </div>
  );
};
