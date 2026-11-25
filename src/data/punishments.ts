export interface FunnyPunishment {
  id: string;
  title: string;
  banglaTitle: string;
  description: string;
  actionRequired: 'apology_note' | 'quick_revision' | 'solve_mcqs' | 'pet_snack';
  questText: string;
  redeemXp: number;
}

export const humorousPunishments: FunnyPunishment[] = [
  {
    id: 'ceo_procrastination',
    title: 'Promoted to CEO of Procrastination',
    banglaTitle: 'আলসেমির প্রধান নির্বাহী (CEO of Procrastination)!',
    description: 'তোমার কাল্পনিক প্রফেসর হতাশ চোখে তোমার দিকে তাকিয়ে আছেন... তিনি তোমার পদোন্নতি দিয়েছেন!',
    actionRequired: 'apology_note',
    questText: 'তোমার ভবিষ্যৎ সেলফের কাছে ৩ লাইনের একটি ক্ষমা প্রার্থনামূলক মোটিভেশনাল নোট লেখো যাতে তোমার সম্মান পুনরুদ্ধার হয়!',
    redeemXp: 30
  },
  {
    id: 'pet_strike',
    title: 'Study Pet On Strike!',
    banglaTitle: 'স্টাডি পেটের অনশন ধর্মঘট!',
    description: 'তোমার আদরের স্টাডি পেট না খেয়ে বসে আছে এবং ঘোষণা দিয়েছে: অন্তত একটি মিশন শেষ না করা পর্যন্ত সে কোনোভাবেই বিবর্তিত হবে না!',
    actionRequired: 'pet_snack',
    questText: 'যেকোনো একটি মিশন শুরু করে ১৫ মিনিট পড়াশোনা করো এবং পেটের মুখে হাসি ফোটাও!',
    redeemXp: 40
  },
  {
    id: 'mcq_debt',
    title: 'The Great MCQ Debt',
    banglaTitle: '১০টি বাড়তি এমসিকিউ এর জরিমানা!',
    description: 'ব্যাকলগ মনস্টার তোমার অবহেলার সুযোগে একটু নাদুসনুদুস হয়েছে! সে জরিমানা দাবি করছে।',
    actionRequired: 'solve_mcqs',
    questText: 'কুইজ সেকশনে গিয়ে ১০টি যেকোনো এমসিকিউ প্র্যাকটিস করে ঋণ পরিশোধ করো!',
    redeemXp: 50
  },
  {
    id: 'honor_restore',
    title: '15-Minute Honor Restoration Quest',
    banglaTitle: 'সম্মান পুনরুদ্ধারের ১৫ মিনিটের রিভিশন কোয়েস্ট',
    description: 'এইচএসসি যুদ্ধক্ষেত্রে তোমার তরবারিতে একটু মরচে ধরেছে। এখনো সময় আছে ঘুরে দাঁড়ানোর!',
    actionRequired: 'quick_revision',
    questText: 'টাইমার অন করে ঠিক ১৫ মিনিট যেকোনো সূত্রের নোট বা দাগানো বই রিভিশন করো!',
    redeemXp: 35
  }
];

export const getRandomPunishment = (unfinishedCount: number): FunnyPunishment => {
  if (unfinishedCount <= 1) {
    return humorousPunishments[0];
  } else if (unfinishedCount <= 3) {
    return humorousPunishments[1];
  } else if (unfinishedCount <= 5) {
    return humorousPunishments[2];
  } else {
    return humorousPunishments[3];
  }
};
