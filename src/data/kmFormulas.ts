import { FormulaItem } from '../types';

export const kmFormulasList: FormulaItem[] = [
  // Physics 1st Paper - Vectors
  {
    id: 'f-phy-vec-1',
    subjectId: 'phy',
    paperNumber: 1,
    chapterId: 'phy-1-2',
    title: 'সামান্তরিক সূত্রের লব্ধির মান',
    expression: 'R = √(P² + Q² + 2PQ cos α)',
    latex: 'R = \\sqrt{P^2 + Q^2 + 2PQ \\cos \\alpha}',
    symbols: [
      { symbol: 'R', meaning: 'লব্ধি ভেক্টরের মান', siUnit: 'N / m/s / নির্দিষ্ট একক' },
      { symbol: 'P, Q', meaning: 'কার্যকর দুটি ভেক্টরের মান', siUnit: 'একই একক' },
      { symbol: 'α', meaning: 'ভেক্টরদ্বয়ের মধ্যবর্তী কোণ', siUnit: 'ডিগ্রি (deg) বা রেডিয়ান (rad)' }
    ],
    conditions: [
      'উভয় ভেক্টর অবশ্যই একই বিন্দুতে সমসাময়িক ক্রিয়াশীল হতে হবে',
      'α = 0° হলে R_max = P + Q',
      'α = 180° হলে R_min = |P - Q|',
      'α = 90° হলে R = √(P² + Q²)'
    ],
    exampleCalculation: {
      problem: 'দুটি সমান বল P পরস্পরের সাথে 120° কোণে ক্রিয়া করলে লব্ধির মান কত হবে?',
      given: 'P = Q, α = 120°, cos 120° = -0.5',
      calculation: 'R = √(P² + P² + 2·P·P·(-0.5)) = √(2P² - P²) = √P² = P',
      result: 'লব্ধির মান প্রতিটি বলের সমান (R = P)'
    }
  },
  {
    id: 'f-phy-vec-2',
    subjectId: 'phy',
    paperNumber: 1,
    chapterId: 'phy-1-2',
    title: 'নদী পারাপারে সর্বনিম্ন সময় ও দূরত্ব',
    expression: 't_min = d / v, t_straight = d / √(v² - u²)',
    latex: 't_{min} = \\frac{d}{v}, \\quad t_{straight} = \\frac{d}{\\sqrt{v^2 - u^2}}',
    symbols: [
      { symbol: 'd', meaning: 'নদীর প্রস্থ', siUnit: 'মিটার (m)' },
      { symbol: 'v', meaning: 'নৌকার নিজস্ব বেগ', siUnit: 'm/s' },
      { symbol: 'u', meaning: 'নদীর স্রোতের বেগ', siUnit: 'm/s' }
    ],
    conditions: [
      'সর্বনিম্ন সময়ে পৌঁছাতে নৌকাকে ঠিক ৯০° কোণে চালাতে হবে (α = 90°)',
      'ঠিক সোজাসুজি অপর পারে পৌঁছাতে α = cos⁻¹(-u/v) কোণে যাত্রা করতে হবে (যেখানে v > u)'
    ],
    exampleCalculation: {
      problem: 'একটি নদীর প্রস্থ 500m। স্রোতের বেগ 3 m/s এবং নৌকার বেগ 5 m/s। সোজাসুজি পার হতে কত সময় লাগবে?',
      given: 'd = 500m, u = 3 m/s, v = 5 m/s',
      calculation: 'লব্ধি বেগ = √(5² - 3²) = √(25 - 9) = 4 m/s। সময় t = 500 / 4 = 125s',
      result: 'সময় লাগবে ১২৫ সেকেন্ড (বা ২ মিনিট ৫ সেকেন্ড)'
    }
  },

  // Physics 1st Paper - Newtonian Mechanics
  {
    id: 'f-phy-newton-1',
    subjectId: 'phy',
    paperNumber: 1,
    chapterId: 'phy-1-4',
    title: 'রাস্তার ব্যাংকিং কোণ ও নিরাপদ বেগ',
    expression: 'tan θ = v² / (r · g)',
    latex: '\\tan \\theta = \\frac{v^2}{r g}, \\quad h = \\frac{v^2 d}{r g}',
    symbols: [
      { symbol: 'θ', meaning: 'ব্যাংকিং কোণ', siUnit: 'ডিগ্রি (deg)' },
      { symbol: 'v', meaning: 'যানবাহনের সর্বোচ্চ নিরাপদ বেগ', siUnit: 'm/s' },
      { symbol: 'r', meaning: 'বাঁকের ব্যাসার্ধ', siUnit: 'মিটার (m)' },
      { symbol: 'g', meaning: 'অভিকর্ষজ ত্বরণ (9.8)', siUnit: 'm/s²' },
      { symbol: 'd', meaning: 'রাস্তার প্রস্থ', siUnit: 'মিটার (m)' },
      { symbol: 'h', meaning: 'বাইরের প্রান্তের উচ্চতা', siUnit: 'মিটার (m)' }
    ],
    conditions: [
      'ঘর্ষণহীন বা ঘর্ষণ উপেক্ষা করে হিসাবকৃত আদর্শ ব্যাংকিং',
      'ছোট কোণের ক্ষেত্রে tan θ ≈ sin θ = h / d'
    ],
    exampleCalculation: {
      problem: '100m ব্যাসার্ধের বাঁকে 50.4 km/h বেগে মোড় নিতে ব্যাংকিং কোণ কত হতে হবে?',
      given: 'r = 100m, v = 50.4 * (1000/3600) = 14 m/s, g = 9.8 m/s²',
      calculation: 'tan θ = (14)² / (100 * 9.8) = 196 / 980 = 0.2 => θ = tan⁻¹(0.2) ≈ 11.31°',
      result: 'ব্যাংকিং কোণ θ ≈ 11.31°'
    }
  },

  // Physics 2nd Paper - Thermodynamics
  {
    id: 'f-phy-thermo-1',
    subjectId: 'phy',
    paperNumber: 2,
    chapterId: 'phy-2-1',
    title: 'কার্নো ইঞ্জিনের কর্মদক্ষতা',
    expression: 'η = (1 - T2 / T1) * 100%',
    latex: '\\eta = \\left(1 - \\frac{T_2}{T_1}\\right) \\times 100\\%',
    symbols: [
      { symbol: 'η', meaning: 'ইঞ্জিনের তাপীয় দক্ষতা', siUnit: 'শতাংশ (%)' },
      { symbol: 'T1', meaning: 'তাপ উৎসের পরম তাপমাত্রা', siUnit: 'কেলভিন (K)' },
      { symbol: 'T2', meaning: 'তাপ গ্রাহকের পরম তাপমাত্রা', siUnit: 'কেলভিন (K)' }
    ],
    conditions: [
      'তাপমাত্রা অবশ্যই কেলভিন (K) স্কেলে নিতে হবে',
      'কোনো বাস্তব ইঞ্জিনের দক্ষতা কার্নো ইঞ্জিনের চেয়ে বেশি হতে পারে না (η < 100%)'
    ],
    exampleCalculation: {
      problem: 'একটি কার্নো ইঞ্জিন 227°C উৎসের তাপমাত্রা এবং 27°C গ্রাহকের তাপমাত্রায় কাজ করে। এর দক্ষতা কত?',
      given: 'T1 = 227 + 273 = 500 K, T2 = 27 + 273 = 300 K',
      calculation: 'η = (1 - 300 / 500) * 100% = (1 - 0.6) * 100% = 40%',
      result: 'কার্নো ইঞ্জিনের দক্ষতা ৪০%'
    }
  },

  // Chemistry 1st Paper - Qualitative
  {
    id: 'f-chem-ksp-1',
    subjectId: 'chem',
    paperNumber: 1,
    chapterId: 'chem-1-2',
    title: 'দ্রাব্যতা গুণফল ও অধঃক্ষেপের শর্ত',
    expression: 'Kip > Ksp => অধঃক্ষেপ পড়বে',
    latex: 'K_{ip} > K_{sp} \\implies \\text{Precipitate forms}',
    symbols: [
      { symbol: 'Ksp', meaning: 'দ্রাব্যতা গুণফল (নির্দিষ্ট তাপমাত্রায় ধ্রুবক)', siUnit: 'মোলার একক ঘাত' },
      { symbol: 'Kip', meaning: 'আয়নিক গুণফল (যেকোনো ঘনমাত্রায়)', siUnit: 'মোলার একক ঘাত' }
    ],
    conditions: [
      'Kip < Ksp: দ্রবণটি অসম্পৃক্ত (আরও দ্রব দ্রবীভূত হতে পারবে)',
      'Kip = Ksp: দ্রবণটি সম্পৃক্ত (সাম্যাবস্থা)',
      'Kip > Ksp: দ্রবণটি অতিপৃক্ত এবং অধঃক্ষেপ পড়বে'
    ],
    exampleCalculation: {
      problem: 'AgCl এর দ্রাব্যতা S = 1.0 × 10⁻⁵ mol/L হলে এর Ksp কত?',
      given: 'AgCl ⇌ Ag⁺ + Cl⁻, Ksp = [Ag⁺][Cl⁻] = S · S = S²',
      calculation: 'Ksp = (1.0 × 10⁻⁵)² = 1.0 × 10⁻¹⁰ mol²/L²',
      result: 'Ksp = 1.0 × 10⁻¹⁰'
    }
  },

  // Higher Math 1st Paper - Calculus
  {
    id: 'f-math-diff-1',
    subjectId: 'hmath',
    paperNumber: 1,
    chapterId: 'hmath-1-9',
    title: 'গুরুমান ও লঘুমানের শর্ত',
    expression: 'dy/dx = 0; d²y/dx² < 0 => গুরুমান, d²y/dx² > 0 => লঘুমান',
    latex: '\\frac{dy}{dx} = 0, \\quad \\frac{d^2y}{dx^2} < 0 \\implies \\text{Max}, \\quad \\frac{d^2y}{dx^2} > 0 \\implies \\text{Min}',
    symbols: [
      { symbol: 'dy/dx', meaning: '১ম ক্রমের অন্তরজ (ঢাল)', siUnit: 'মাত্রা নেই' },
      { symbol: 'd²y/dx²', meaning: '২য় ক্রমের অন্তরজ (বক্রতা)', siUnit: 'মাত্রা নেই' }
    ],
    conditions: [
      'চরম মানের বিন্দুতে স্পর্শক x-অক্ষের সমান্তরাল হয়',
      'যদি d²y/dx² = 0 হয়, তবে উচ্চতর ক্রমের অন্তরজ পরীক্ষা করতে হবে'
    ],
    exampleCalculation: {
      problem: 'y = 2x³ - 9x² + 12x + 5 ফাংশনটির গুরুমান ও লঘুমান বিন্দু নির্ণয় কর।',
      given: 'dy/dx = 6x² - 18x + 12 = 0 => 6(x-1)(x-2) = 0 => x = 1, x = 2',
      calculation: 'd²y/dx² = 12x - 18। x = 1 এ মান -6 (<0, গুরুমান)। x = 2 এ মান +6 (>0, লঘুমান)।',
      result: 'x = 1 এ গুরুমান y = 10, x = 2 এ লঘুমান y = 9'
    }
  }
];
