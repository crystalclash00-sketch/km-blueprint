import { QuizQuestion } from '../types';

export const hscQuestionBank: QuizQuestion[] = [
  // Physics 1st Paper
  {
    id: 'q_phy_1',
    subject: 'পদার্থবিজ্ঞান',
    paper: 1,
    chapter: 'ভেক্টর',
    question: 'দুইটি সমমানের ভেক্টর একটি বিন্দুতে কত কোণে ক্রিয়া করলে এদের লব্ধির মান যেকোনো একটি ভেক্টরের সমান হবে?',
    options: ['0°', '60°', '90°', '120°'],
    correctIndex: 3,
    explanation: 'R² = P² + Q² + 2PQ cosθ। যখন P = Q = R হয়, তখন R² = 2R² + 2R² cosθ => cosθ = -1/2 => θ = 120°।'
  },
  {
    id: 'q_phy_2',
    subject: 'পদার্থবিজ্ঞান',
    paper: 1,
    chapter: 'ভেক্টর',
    question: 'একটি ভেক্টর ক্ষেত্র কখন সলিনয়ডাল (Solenoidal) হয়?',
    options: ['∇ × V = 0', '∇ • V = 0', '∇ V = 0', '∇² V = 0'],
    correctIndex: 1,
    explanation: 'কোনো ভেক্টর ক্ষেত্রের ডাইভারজেন্স শূন্য হলে (∇ • V = 0) তাকে সলিনয়ডাল ক্ষেত্র বলা হয়।'
  },
  {
    id: 'q_phy_3',
    subject: 'পদার্থবিজ্ঞান',
    paper: 1,
    chapter: 'নিউটনিয়ান বলবিদ্যা',
    question: 'একটি বস্তুর ভরবেগ 50% বৃদ্ধি করলে তার গতিশক্তি কত শতাংশ বৃদ্ধি পাবে?',
    options: ['50%', '100%', '125%', '225%'],
    correctIndex: 2,
    explanation: 'Ek = P² / (2m)। P2 = 1.5 P1, তাই Ek2 = (1.5)² Ek1 = 2.25 Ek1। বৃদ্ধি = (2.25 - 1) × 100% = 125%।'
  },
  // Chemistry 1st Paper
  {
    id: 'q_chem_1',
    subject: 'রসায়ন',
    paper: 1,
    chapter: 'গুণগত রসায়ন',
    question: 'প্রধান কোয়ান্টাম সংখ্যা n = 4 হলে সর্বোচ্চ কতটি ইলেকট্রন থাকতে পারে?',
    options: ['8', '16', '32', '64'],
    correctIndex: 2,
    explanation: 'সর্বোচ্চ ইলেকট্রন সংখ্যা = 2n² = 2 × (4)² = 32।'
  },
  {
    id: 'q_chem_2',
    subject: 'রসায়ন',
    paper: 1,
    chapter: 'মৌলের পর্যায়বৃত্ত ধর্ম ও রাসায়নিক বন্ধন',
    question: 'BF3 অণুর সংকরায়ন (Hybridization) এবং জ্যামিতিক আকৃতি কোনটি?',
    options: ['sp, সরলরৈখিক', 'sp², ত্রিকোণাকার সমতলীয়', 'sp³, চতুস্তলকীয়', 'dsp², সমতলীয় বর্গাকার'],
    correctIndex: 1,
    explanation: 'BF3 এর কেন্দ্রিয় পরমাণু বোরণে ৩টি বন্ধনজোড় এবং শূন্য নিঃসঙ্গ জোড় রয়েছে, সংকরায়ন sp² এবং আকৃতি সমতলীয় ত্রিকোণাকার (বন্ধন কোণ 120°)।'
  },
  {
    id: 'q_chem_3',
    subject: 'রসায়ন',
    paper: 2,
    chapter: 'পরিবেশ রসায়ন',
    question: 'কোন শর্তে একটি বাস্তব গ্যাস আদর্শ গ্যাসের মতো আচরণ করে?',
    options: ['নিম্ন চাপ ও উচ্চ তাপমাত্রা', 'উচ্চ চাপ ও নিম্ন তাপমাত্রা', 'নিম্ন চাপ ও নিম্ন তাপমাত্রা', 'উচ্চ চাপ ও উচ্চ তাপমাত্রা'],
    correctIndex: 0,
    explanation: 'নিম্ন চাপ ও উচ্চ তাপমাত্রায় গ্যাসের অণুগুলোর পারস্পরিক আকর্ষণ নগণ্য হয় এবং আয়তন পাত্রের তুলনায় নগণ্য হয়, ফলে বাস্তব গ্যাস আদর্শ আচরণ দেখায়।'
  },
  // Higher Math
  {
    id: 'q_math_1',
    subject: 'উচ্চতর গণিত',
    paper: 1,
    chapter: 'ম্যাট্রিক্স ও নির্ণায়ক',
    question: 'একটি 3×3 ম্যাট্রিক্স A এর জন্য |A| = 5 হলে, |2A| এর মান কত?',
    options: ['10', '20', '40', '80'],
    correctIndex: 2,
    explanation: 'n×n ম্যাট্রিক্সের ক্ষেত্রে |kA| = kⁿ |A|। এখানে n = 3, k = 2। সুতরাং |2A| = 2³ × 5 = 8 × 5 = 40।'
  },
  {
    id: 'q_math_2',
    subject: 'উচ্চতর গণিত',
    paper: 1,
    chapter: 'অন্তরীকরণ',
    question: 'd/dx [sin(ln x)] এর অন্তরজ কোনটি?',
    options: ['cos(ln x)', 'cos(ln x) / x', '-cos(ln x) / x', 'sin(ln x) / x'],
    correctIndex: 1,
    explanation: 'চেইন রুল অনুসারে: cos(ln x) × d/dx(ln x) = cos(ln x) / x।'
  },
  // Biology
  {
    id: 'q_bio_1',
    subject: 'জীববিজ্ঞান',
    paper: 1,
    chapter: 'কোষ ও এর গঠন',
    question: 'কোষের প্রোটিন ফ্যাক্টরি বলা হয় কোন অঙ্গাণুকে?',
    options: ['মাইটোকন্ড্রিয়া', 'গলগি বস্তু', 'রাইবোজোম', 'লাইসোজোম'],
    correctIndex: 2,
    explanation: 'রাইবোজোম কোষে প্রোটিন সংশ্লেষণ করে, তাই একে প্রোটিন ফ্যাক্টরি বলা হয়।'
  },
  {
    id: 'q_bio_2',
    subject: 'জীববিজ্ঞান',
    paper: 2,
    chapter: 'রক্ত ও সংবহন',
    question: 'মানুষের হৃদপিণ্ডের প্রাকৃতিক পেসমেকার কোনটি?',
    options: ['AV Node', 'SA Node', 'Bundle of His', 'Purkinje Fiber'],
    correctIndex: 1,
    explanation: 'SA Node (Sino-atrial Node) থেকে অ্যাকশন পটেনশিয়াল তৈরি হয়, তাই একে হৃদপিণ্ডের পেসমেকার বলা হয়।'
  },
  // ICT
  {
    id: 'q_ict_1',
    subject: 'আইসিটি (ICT)',
    paper: 1,
    chapter: 'সংখ্যা পদ্ধতি ও ডিজিটাল ডিভাইস',
    question: '(1011)₂ এর ২-এর পরিপূরক (2\'s Complement) কত?',
    options: ['(0100)₂', '(0101)₂', '(1100)₂', '(0011)₂'],
    correctIndex: 1,
    explanation: '(1011)₂ এর ১-এর পরিপূরক হলো (0100)₂। এর সাথে ১ যোগ করলে হয় (0101)₂।'
  },
  {
    id: 'q_ict_2',
    subject: 'আইসিটি (ICT)',
    paper: 1,
    chapter: 'ওয়েব ডিজাইন ও HTML',
    question: 'HTML-এ টেবিলের সেল বা ঘরকে অনুভূমিকভাবে সংযুক্ত (Merge) করতে কোন অ্যাট্রিবিউট ব্যবহৃত হয়?',
    options: ['rowspan', 'colspan', 'cellspacing', 'cellpadding'],
    correctIndex: 1,
    explanation: 'কলাম বা পাশাপাশি ঘর সংযুক্ত করতে colspan এবং সারি বা উপর-নিচ ঘর সংযুক্ত করতে rowspan ব্যবহৃত হয়।'
  }
];
