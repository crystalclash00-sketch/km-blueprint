import { QuestionBankItem } from '../types';

export const kmQuestionsList: QuestionBankItem[] = [
  // Physics 1st Paper - Vectors
  {
    id: 'q-phy-1',
    subjectId: 'phy',
    paperNumber: 1,
    chapterId: 'phy-1-2',
    topicId: 'phy-1-2-t1',
    type: 'MCQ',
    questionText: 'দুটি সমান মানের বল কোনো বিন্দুতে ক্রিয়াশীল। তাদের লব্ধির মান এদের যেকোনো একটির সমান হলে বলদ্বয়ের মধ্যবর্তী কোণ কত?',
    options: ['60°', '90°', '120°', '180°'],
    correctOptionIndex: 2,
    explanation: 'R = P = Q হলে সামান্তরিক সূত্রানুসারে: P² = P² + P² + 2P² cos α => P² = 2P²(1 + cos α) => 1/2 = 1 + cos α => cos α = -1/2 => α = 120°।',
    whyIncorrect: [
      '60° হলে লব্ধি হবে √3 P',
      '90° হলে লব্ধি হবে √2 P',
      'সঠিক উত্তর: 120° এ লব্ধি বলের মান বলদ্বয়ের সমান হয়',
      '180° হলে লব্ধি হবে 0'
    ],
    difficulty: 'Medium',
    origin: 'Official Board Question',
    boardYearInfo: { board: 'Dhaka Board', year: 2023 },
    verificationStatus: 'Verified',
    stepByStepSolution: [
      'ধরি, বলদ্বয় P ও P এবং লব্ধি R = P',
      'সূত্র: R² = P² + Q² + 2PQ cos α',
      'মান বসিয়ে: P² = P² + P² + 2P² cos α',
      'cos α = -1/2',
      'অতএব, α = cos⁻¹(-0.5) = 120°'
    ]
  },
  {
    id: 'q-phy-2',
    subjectId: 'phy',
    paperNumber: 1,
    chapterId: 'phy-1-2',
    topicId: 'phy-1-2-t2',
    type: 'MCQ',
    questionText: 'একটি নদীতে স্রোতের বেগ 3 km/h এবং সাঁতারুর বেগ 6 km/h। নদীটি সোজা অপর পারে পার হতে সাঁতারুকে স্রোতের সাথে কত কোণে সাঁতার কাটতে হবে?',
    options: ['90°', '120°', '150°', '60°'],
    correctOptionIndex: 1,
    explanation: 'সোজাসুজি পারাপারের শর্ত: cos α = -u / v = -3 / 6 = -0.5 => α = cos⁻¹(-0.5) = 120°।',
    whyIncorrect: [
      '90° কোণে যাত্রা করলে স্রোতের টানে সোজাসুজি পৌঁছানো যাবে না, দূরে চলে যাবে',
      'সঠিক উত্তর: 120° কোণে রওনা দিলে লব্ধি বেগ ঠিক 90° বরাবর নদী পার করে',
      '150° কোণে বেগ অতিরিক্ত বিপরীতে যাবে',
      '60° কোণে স্রোতের অনুকূলে চলে যাবে'
    ],
    difficulty: 'Medium',
    origin: 'Official Board Question',
    boardYearInfo: { board: 'Rajshahi Board', year: 2022 },
    verificationStatus: 'Verified'
  },
  {
    id: 'q-phy-3',
    subjectId: 'phy',
    paperNumber: 1,
    chapterId: 'phy-1-2',
    topicId: 'phy-1-2-t4',
    type: 'MCQ',
    questionText: 'কোনো ভেক্টর ক্ষেত্র V সোলেনয়েডাল (Solenoidal) হওয়ার শর্ত কোনটি?',
    options: ['∇ · V = 0', '∇ × V = 0', '∇ V = 0', '∇ · V = 1'],
    correctOptionIndex: 0,
    explanation: 'ডাইভারজেন্স শূন্য হলে (∇ · V = 0) কোনো ভেক্টর ক্ষেত্র সোলেনয়েডাল হয় (অর্থাৎ কোনো নেট উৎস বা সিঙ্ক নেই)। আর কার্ল শূন্য হলে (∇ × V = 0) অঘূর্ণনশীল হয়।',
    whyIncorrect: [
      'সঠিক উত্তর: ডাইভারজেন্স শূন্য (div V = 0)',
      '∇ × V = 0 হলো অঘূর্ণনশীল বা সংরক্ষণশীল ভেক্টরের শর্ত',
      '∇ V স্কেলারের ক্ষেত্রে প্রযোজ্য গ্রেডিয়েন্ট',
      'একক ডাইভারজেন্স সোলেনয়েডাল নয়'
    ],
    difficulty: 'Easy',
    origin: 'Original K&M Practice',
    verificationStatus: 'Verified'
  },
  {
    id: 'q-phy-4',
    subjectId: 'phy',
    paperNumber: 1,
    chapterId: 'phy-1-4',
    topicId: 'phy-1-4-t2',
    type: 'MCQ',
    questionText: '50m ব্যাসার্ধ বিশিষ্ট একটি রেললাইনের বাঁকে ট্রেনের সর্বোচ্চ নিরাপদ বেগ 70 km/h। লাইনের দুই পাতের দূরত্ব 1m হলে বাইরের পাতটি ভেতরের পাত অপেক্ষা কত উঁচুতে রাখতে হবে? (g = 9.8 m/s²)',
    options: ['0.38 m', '0.77 m', '0.19 m', '0.52 m'],
    correctOptionIndex: 1,
    explanation: 'v = 70 * (1000/3600) = 19.44 m/s। সূত্র: tan θ ≈ h / d = v² / (rg) => h = (v² * d) / (r * g) = (19.44² * 1) / (50 * 9.8) = 378.1 / 490 = 0.771 m।',
    whyIncorrect: [
      '0.38 m হিসাব ভুল (ব্যাসার্ধ ১০০ ধরে করা)',
      'সঠিক উত্তর: 0.77 m উচ্চতা',
      '0.19 m ভুল একক রূপান্তর',
      '0.52 m ভুল মান'
    ],
    difficulty: 'Hard',
    origin: 'Official Board Question',
    boardYearInfo: { board: 'Chittagong Board', year: 2023 },
    verificationStatus: 'Verified'
  },

  // Physics 2nd Paper - Thermodynamics & Electricity
  {
    id: 'q-phy-5',
    subjectId: 'phy',
    paperNumber: 2,
    chapterId: 'phy-2-1',
    topicId: 'phy-2-1-t3',
    type: 'MCQ',
    questionText: 'একটি কার্নো ইঞ্জিন 327°C এবং 27°C তাপমাত্রার মধ্যে কার্যরত। ইঞ্জিনটির কর্মদক্ষতা কত?',
    options: ['50%', '60%', '40%', '30%'],
    correctOptionIndex: 0,
    explanation: 'T1 = 327 + 273 = 600 K; T2 = 27 + 273 = 300 K। η = (1 - T2/T1) * 100% = (1 - 300/600) * 100% = 50%।',
    whyIncorrect: [
      'সঠিক উত্তর: 50%',
      '60% ভুল হিসাব',
      'সেলসিয়াস স্কেল সরাসরি বসালে ভুল আসবে',
      '30% ভুল মান'
    ],
    difficulty: 'Medium',
    origin: 'Official Board Question',
    boardYearInfo: { board: 'Dhaka Board', year: 2022 },
    verificationStatus: 'Verified'
  },

  // Chemistry 1st Paper - Qualitative
  {
    id: 'q-chem-1',
    subjectId: 'chem',
    paperNumber: 1,
    chapterId: 'chem-1-2',
    topicId: 'chem-1-2-t1',
    type: 'MCQ',
    questionText: 'প্রধান কোয়ান্টাম সংখ্যা n = 3 হলে মোট অরবিটাল সংখ্যা কয়টি?',
    options: ['3', '6', '9', '18'],
    correctOptionIndex: 2,
    explanation: 'যেকোনো প্রধান শক্তিস্তরে মোট অরবিটাল সংখ্যা = n²। অতএব n = 3 এর জন্য অরবিটাল সংখ্যা = 3² = 9 (একটি 3s, তিনটি 3p এবং পাঁচটি 3d)। আর সর্বোচ্চ ইলেকট্রন সংখ্যা = 2n² = 18।',
    whyIncorrect: [
      '3 হলো উপশক্তিস্তরের সংখ্যা (s, p, d)',
      '6 ভুল মান',
      'সঠিক উত্তর: 9টি অরবিটাল',
      '18 হলো সর্বোচ্চ ইলেকট্রন সংখ্যা, অরবিটাল সংখ্যা নয়'
    ],
    difficulty: 'Easy',
    origin: 'Official Board Question',
    boardYearInfo: { board: 'Dinajpur Board', year: 2023 },
    verificationStatus: 'Verified'
  },
  {
    id: 'q-chem-2',
    subjectId: 'chem',
    paperNumber: 1,
    chapterId: 'chem-1-2',
    topicId: 'chem-1-2-t2',
    type: 'MCQ',
    questionText: 'হাইড্রোজেন পরমাণুর বামার (Balmer) সিরিজের ক্ষেত্রে নিম্নতম শক্তিস্তর (n1) এর মান কত?',
    options: ['n1 = 1', 'n1 = 2', 'n1 = 3', 'n1 = 4'],
    correctOptionIndex: 1,
    explanation: 'লাইমেন সিরিজে n1 = 1, বামার সিরিজে n1 = 2 (দৃশ্যমান আলো), প্যাসচেন সিরিজে n1 = 3, ব্রাকেট সিরিজে n1 = 4, ফুন্ড সিরিজে n1 = 5।',
    whyIncorrect: [
      'n1 = 1 হলো লাইমেন সিরিজ (UV অঞ্চল)',
      'সঠিক উত্তর: বামার সিরিজে n1 = 2 (দৃশ্যমান আলো অঞ্চল)',
      'n1 = 3 হলো প্যাসচেন সিরিজ (IR অঞ্চল)',
      'n1 = 4 হলো ব্রাকেট সিরিজ'
    ],
    difficulty: 'Easy',
    origin: 'Official Board Question',
    boardYearInfo: { board: 'Mymensingh Board', year: 2023 },
    verificationStatus: 'Verified'
  },
  {
    id: 'q-chem-3',
    subjectId: 'chem',
    paperNumber: 2,
    chapterId: 'chem-2-2',
    topicId: 'chem-2-2-t2',
    type: 'MCQ',
    questionText: 'হাকেল নীতি (Hückel\'s Rule) অনুসারে কোনো সমতলীয় চাক্রিক যৌগে অ্যারোমেটিক বৈশিষ্ট্যের জন্য সঞ্চারণশীল π-ইলেকট্রন সংখ্যা কত হতে হয়?',
    options: ['4n + 2', '2n + 4', '4n', '2n + 1'],
    correctOptionIndex: 0,
    explanation: 'হাকেল নীতি অনুযায়ী সমতলীয় চক্রাকার বলয়ে সঞ্চারণশীল (4n + 2) সংখ্যক পাই-ইলেকট্রন থাকতে হবে, যেখানে n = 0, 1, 2, 3... পূর্ণসংখ্যা। বেনজিনের ক্ষেত্রে n = 1 হলে 6টি পাই ইলেকট্রন থাকে।',
    whyIncorrect: [
      'সঠিক উত্তর: (4n + 2)',
      '2n + 4 হাকেল নিয়ম নয়',
      '4n হলো অ্যান্টি-অ্যারোমেটিক যৌগের বৈশিষ্ট্য',
      '2n + 1 ভুল সমীকরণ'
    ],
    difficulty: 'Easy',
    origin: 'Official Board Question',
    boardYearInfo: { board: 'Comilla Board', year: 2022 },
    verificationStatus: 'Verified'
  },

  // Biology 1st & 2nd Paper
  {
    id: 'q-bio-1',
    subjectId: 'bio',
    paperNumber: 1,
    chapterId: 'bio-1-1',
    topicId: 'bio-1-1-t1',
    type: 'MCQ',
    questionText: 'প্লাজমামেমব্রেনের সর্বাধিক গ্রহণযোগ্য ‘ফ্লুইড মোজাইক মডেল’ কত সালে এবং কারা প্রস্তাব করেন?',
    options: ['1972 সালে, সিঙ্গার ও নিকলসন', '1935 সালে, ড্যানিয়েলি ও ড্যাভসন', '1953 সালে, ওয়াটসন ও ক্রিক', '1965 সালে, রবার্টসন'],
    correctOptionIndex: 0,
    explanation: '১৯৭২ সালে এস. জে. সিঙ্গার এবং জি. এল. নিকলসন কোষঝিল্লির ফ্লুইড মোজাইক মডেল (Fluid Mosaic Model) প্রবর্তন করেন। এখানে ফসফোলিপিড বাইলেয়ারকে সমুদ্রের সাথে এবং প্রোটিনকে বরফখণ্ডের সাথে তুলনা করা হয়।',
    whyIncorrect: [
      'সঠিক উত্তর: 1972 সালে সিঙ্গার ও নিকলসন',
      'ড্যানিয়েলি ও ড্যাভসন স্যান্ডউইচ মডেল দেন',
      'ওয়াটসন ও ক্রিক ডিএনএ ডাবল হেলিক্স মডেল দেন',
      'রবার্টসন ইউনিট মেমব্রেন ধারণা দেন'
    ],
    difficulty: 'Easy',
    origin: 'Official Board Question',
    boardYearInfo: { board: 'Barisal Board', year: 2023 },
    verificationStatus: 'Verified'
  },
  {
    id: 'q-bio-2',
    subjectId: 'bio',
    paperNumber: 2,
    chapterId: 'bio-2-4',
    topicId: 'bio-2-4-t3',
    type: 'MCQ',
    questionText: 'মানুষের হৃদপিণ্ডের কোন অংশকে ‘প্রাকৃতিক পেসমেকার’ (Natural Pacemaker) বলা হয়?',
    options: ['AV Node', 'SA Node (সাইনোট্রিয়াল নোড)', 'Bundle of His', 'Purkinje Fibers'],
    correctOptionIndex: 1,
    explanation: 'SA Node (Sinoatrial Node) ডান অলিন্দের প্রাচীরে অবস্থিত এবং এটি নিজ থেকেই প্রতি মিনিটে ৭০-৮০ বার স্বতঃস্ফূর্তভাবে অ্যাকশন পটেনশিয়াল তৈরি করে হৃদস্পন্দন শুরু করে, তাই একে প্রাকৃতিক পেসমেকার বলা হয়।',
    whyIncorrect: [
      'AV Node হলো সংরক্ষিত বা রিজার্ভ পেসমেকার',
      'সঠিক উত্তর: SA Node হলো প্রাকৃতিক পেসমেকার',
      'Bundle of His হলো পরিবাহী তন্তু',
      'পারকিনজি ফাইবার নিলয়ে উদ্দীপনা ছড়ায়'
    ],
    difficulty: 'Easy',
    origin: 'Official Board Question',
    boardYearInfo: { board: 'Sylhet Board', year: 2023 },
    verificationStatus: 'Verified'
  },

  // Higher Mathematics 1st & 2nd Paper
  {
    id: 'q-math-1',
    subjectId: 'hmath',
    paperNumber: 1,
    chapterId: 'hmath-1-1',
    topicId: 'hmath-1-1-t1',
    type: 'MCQ',
    questionText: 'একটি ম্যাট্রিক্স A এর ক্রম 3 × 2 এবং B এর ক্রম 2 × 4 হলে, AB ম্যাট্রিক্সের ক্রম কত হবে?',
    options: ['2 × 2', '3 × 4', '4 × 3', 'ম্যাট্রিক্স গুণন সংজ্ঞায়িত নয়'],
    correctOptionIndex: 1,
    explanation: 'যদি ম্যাট্রিক্স A এর ক্রম m × n এবং B এর ক্রম n × p হয়, তবে গুণফল AB সংজ্ঞায়িত হবে এবং এর ক্রম হবে m × p। এখানে 3 × 2 এবং 2 × 4 এর জন্য AB হবে 3 × 4।',
    whyIncorrect: [
      '2 × 2 ভুল',
      'সঠিক উত্তর: 3 × 4 ক্রম',
      '4 × 3 ভুল ক্রম',
      'সংজ্ঞায়িত কারণ ১মটির কলাম = ২য়টির সারি'
    ],
    difficulty: 'Easy',
    origin: 'Official Board Question',
    boardYearInfo: { board: 'Dhaka Board', year: 2023 },
    verificationStatus: 'Verified'
  },
  {
    id: 'q-math-2',
    subjectId: 'hmath',
    paperNumber: 2,
    chapterId: 'hmath-2-6',
    topicId: 'hmath-2-6-t1',
    type: 'MCQ',
    questionText: 'y² = 16x পরাবৃত্তের উপকেন্দ্রের (Focus) স্থানাঙ্ক কোনটি?',
    options: ['(4, 0)', '(0, 4)', '(-4, 0)', '(0, -4)'],
    correctOptionIndex: 0,
    explanation: 'পরাবৃত্তের আদর্শ সমীকরণ y² = 4ax। এখানে 4a = 16 => a = 4। অতএব উপকেন্দ্রের স্থানাঙ্ক (a, 0) = (4, 0)।',
    whyIncorrect: [
      'সঠিক উত্তর: (4, 0)',
      '(0, 4) হবে x² = 16y সমীকরণের জন্য',
      '(-4, 0) দিকাক্ষের পাদবিন্দু',
      '(0, -4) ভুল'
    ],
    difficulty: 'Easy',
    origin: 'Official Board Question',
    boardYearInfo: { board: 'Jessore Board', year: 2022 },
    verificationStatus: 'Verified'
  },

  // ICT
  {
    id: 'q-ict-1',
    subjectId: 'ict',
    paperNumber: 1,
    chapterId: 'ict-1-3',
    topicId: 'ict-1-3-t1',
    type: 'MCQ',
    questionText: 'ডেসিমাল সংখ্যা (25)₁₀ এর বাইনারি মান কত?',
    options: ['(11001)₂', '(10011)₂', '(11101)₂', '(10101)₂'],
    correctOptionIndex: 0,
    explanation: '25 = 16 + 8 + 0 + 0 + 1 = 1·2⁴ + 1·2³ + 0·2² + 0·2¹ + 1·2⁰ = (11001)₂।',
    whyIncorrect: [
      'সঠিক উত্তর: (11001)₂',
      '(10011)₂ হলো ১৯',
      '(11101)₂ হলো ২৯',
      '(10101)₂ হলো ২১'
    ],
    difficulty: 'Easy',
    origin: 'Official Board Question',
    boardYearInfo: { board: 'Dhaka Board', year: 2023 },
    verificationStatus: 'Verified'
  },

  // Bangla 1st Paper
  {
    id: 'q-ban-1',
    subjectId: 'ban',
    paperNumber: 1,
    chapterId: 'ban-1-1',
    topicId: 'ban-1-1-t2',
    type: 'MCQ',
    questionText: '‘অপরিচিতা’ গল্পে অনুপমের আসল অভিভাবক কে ছিলেন?',
    options: ['অনুপমের মা', 'অনুপমের মামা', 'হরিশ', 'বিনু দাদা'],
    correctOptionIndex: 1,
    explanation: '‘অপরিচিতা’ গল্পে অনুপমের পিতা জীবিত ছিলেন না এবং সংসারের সর্বময় কর্তৃত্ব ছিল অনুপমের মামার হাতে। অনুপম বলেছে: "সংসারে তার কথাই ছিল চূড়ান্ত।"',
    whyIncorrect: [
      'মা ছিলেন মমতাময়ী কিন্তু কর্তৃত্বপরায়ণ অভিভাবক নন',
      'সঠিক উত্তর: অনুপমের মামা',
      'হরিশ ছিল আসর জমানো বন্ধু',
      'বিনু দাদা ছিলেন অনুপমের পিসতুতো ভাই'
    ],
    difficulty: 'Easy',
    origin: 'Official Board Question',
    boardYearInfo: { board: 'Dhaka Board', year: 2023 },
    verificationStatus: 'Verified'
  }
];
