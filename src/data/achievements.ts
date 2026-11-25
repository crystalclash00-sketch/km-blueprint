export interface AchievementDef {
  id: string;
  title: string;
  banglaTitle: string;
  description: string;
  icon: string;
  xpReward: number;
  category: 'streak' | 'mission' | 'timer' | 'syllabus' | 'pet';
}

export const allAchievements: AchievementDef[] = [
  {
    id: 'first_mission',
    title: 'First Step to Board Exam',
    banglaTitle: 'প্রথম মিশন সম্পন্ন',
    description: 'তোমার HSC যাত্রার প্রথম মিশনটি সফলভাবে শেষ করেছ!',
    icon: '🎯',
    xpReward: 50,
    category: 'mission'
  },
  {
    id: 'streak_7',
    title: '7-Day Warrior',
    banglaTitle: '৭ দিনের অপরাজেয় যোদ্ধা',
    description: 'টানা ৭ দিন পড়াশোনার স্ট্রিক বজায় রেখেছ!',
    icon: '🔥',
    xpReward: 150,
    category: 'streak'
  },
  {
    id: 'streak_30',
    title: 'Unstoppable Momentum',
    banglaTitle: '৩০ দিনের মহাসাধক',
    description: 'এক মাস ধরে প্রতিদিন অধ্যবসায় দেখিয়েছ!',
    icon: '⚡',
    xpReward: 500,
    category: 'streak'
  },
  {
    id: 'chapter_slayer',
    title: 'Chapter Slayer',
    banglaTitle: 'অধ্যায় সংহারক (Chapter Slayer)',
    description: 'যেকোনো একটি পূর্ণাঙ্গ অধ্যায় সম্পূর্ণ রপ্ত করেছ!',
    icon: '⚔️',
    xpReward: 100,
    category: 'syllabus'
  },
  {
    id: 'mcq_master',
    title: 'MCQ Master',
    banglaTitle: 'এমসিকিউ মাস্টার',
    description: 'কুইজে ৯০%+ সঠিক উত্তর দিয়ে অসাধারণ দক্ষতা দেখিয়েছ!',
    icon: '🧠',
    xpReward: 120,
    category: 'mission'
  },
  {
    id: 'pomodoro_monk',
    title: 'Focus Monk',
    banglaTitle: 'ফোকাস সন্ন্যাসী',
    description: 'টানা ৪টি পোমোডোরো সেশন (১০০ মিনিট নিবিড় ফোকাস) সম্পন্ন করেছ!',
    icon: '🧘',
    xpReward: 100,
    category: 'timer'
  },
  {
    id: 'revision_king',
    title: 'Revision King',
    banglaTitle: 'রিভিশন সম্রাট',
    description: 'স্পেসড রিপিটেশন পদ্ধতিতে ৫টি চ্যাপ্টার সাফল্যের সাথে রিভাইজ করেছ!',
    icon: '👑',
    xpReward: 200,
    category: 'syllabus'
  },
  {
    id: 'physics_conqueror',
    title: 'Physics Conqueror',
    banglaTitle: 'পদার্থবিজ্ঞান বিজেতা',
    description: 'পদার্থবিজ্ঞানের প্রথম ও দ্বিতীয় পত্রের ৫০% এর বেশি শেষ করেছ!',
    icon: '⚛️',
    xpReward: 250,
    category: 'syllabus'
  },
  {
    id: 'monster_tamer',
    title: 'Monster Tamer',
    banglaTitle: 'ব্যাকলগ মনস্টার দমনকারী',
    description: 'জমিয়ে রাখা ব্যাকলগ টাস্কগুলো শেষ করে স্টাডি পেটকে মুক্ত করেছ!',
    icon: '🛡️',
    xpReward: 150,
    category: 'pet'
  },
  {
    id: 'pet_phoenix',
    title: 'Phoenix Ascended',
    banglaTitle: 'ফিনিক্সের পুনর্জন্ম',
    description: 'তোমার স্টাডি পেট সর্বোচ্চ স্তর ফিনিক্সে বিবর্তিত হয়েছে!',
    icon: '🦅',
    xpReward: 500,
    category: 'pet'
  },
  {
    id: 'full_syllabus_champion',
    title: 'Full Syllabus Champion',
    banglaTitle: 'পূর্ণাঙ্গ সিলেবাস চ্যাম্পিয়ন',
    description: 'বোর্ড পরীক্ষার আগেই পুরো HSC সিলেবাস ১০০% সম্পন্ন করেছ!',
    icon: '🏆',
    xpReward: 1000,
    category: 'syllabus'
  }
];
