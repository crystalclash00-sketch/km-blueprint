import { StudyMission } from '../types';

export interface RoutineTemplateItem {
  dayNumber: number;
  dayName: string; // শনিবার, রবিবার, etc.
  phase: 'Academic' | 'Pre-Admission' | 'Full Admission';
  missions: {
    type: 'BASIC CLASS' | 'MATH SOLVING' | 'REVISION CLASS' | 'EXAM BATCH' | 'QB SOLVING' | 'ENGINEERING PREP' | 'MEDICAL PREP' | 'VARSITY A UNIT PREP' | 'MOCK TEST' | 'FINAL REVISION';
    subject: string;
    paper?: 1 | 2;
    title: string;
    actionDetails: string[];
    estimatedMinutes: number;
    difficulty: 'Easy' | 'Medium' | 'Hard';
    priority: 'Normal' | 'Important' | 'High';
    xpReward: number;
  }[];
}

// Representative authentic curriculum mapped from the 391-day Hulkenstein Edge Course Science syllabus
export const hsc28MasterRoutine: RoutineTemplateItem[] = [
  // Day 1
  {
    dayNumber: 1,
    dayName: 'শনিবার',
    phase: 'Academic',
    missions: [
      {
        type: 'BASIC CLASS',
        subject: 'উচ্চতর গণিত',
        paper: 1,
        title: 'ম্যাট্রিক্স ও নির্ণায়ক L-1',
        actionDetails: ['▶ অনলাইন / সেলফ স্টাডি ক্লাস ও মূল বিষয়বস্তু দেখা', 'গুরুত্বপূর্ণ পয়েন্ট নোট করো', 'দাগানো বই — সংশ্লিষ্ট চ্যাপ্টার পড়ো', 'লেকচার শিট সম্পন্ন করো'],
        estimatedMinutes: 60,
        difficulty: 'Easy',
        priority: 'Important',
        xpReward: 50
      },
      {
        type: 'BASIC CLASS',
        subject: 'রসায়ন',
        paper: 1,
        title: 'ল্যাবরেটরির নিরাপদ ব্যবহার',
        actionDetails: ['▶ অনলাইন / সেলফ স্টাডি ক্লাস ও মূল বিষয়বস্তু দেখা', 'গুরুত্বপূর্ণ পয়েন্ট নোট করো', 'দাগানো বই — সংশ্লিষ্ট চ্যাপ্টার পড়ো', 'লেকচার শিট সম্পন্ন করো'],
        estimatedMinutes: 60,
        difficulty: 'Easy',
        priority: 'Normal',
        xpReward: 40
      }
    ]
  },
  // Day 2
  {
    dayNumber: 2,
    dayName: 'রবিবার',
    phase: 'Academic',
    missions: [
      {
        type: 'BASIC CLASS',
        subject: 'পদার্থবিজ্ঞান',
        paper: 1,
        title: 'ভৌত জগত ও পরিমাপ',
        actionDetails: ['▶ অনলাইন / সেলফ স্টাডি ক্লাস ও মূল বিষয়বস্তু দেখা', 'গুরুত্বপূর্ণ পয়েন্ট নোট করো', 'দাগানো বই — সংশ্লিষ্ট চ্যাপ্টার পড়ো', 'লেকচার শিট সম্পন্ন করো'],
        estimatedMinutes: 60,
        difficulty: 'Easy',
        priority: 'Normal',
        xpReward: 45
      },
      {
        type: 'BASIC CLASS',
        subject: 'জীববিজ্ঞান',
        paper: 1,
        title: 'কোষ ও এর গঠন L-1',
        actionDetails: ['▶ অনলাইন / সেলফ স্টাডি ক্লাস ও মূল বিষয়বস্তু দেখা', 'গুরুত্বপূর্ণ পয়েন্ট নোট করো', 'দাগানো বই — সংশ্লিষ্ট চ্যাপ্টার পড়ো', 'লেকচার শিট সম্পন্ন করো'],
        estimatedMinutes: 60,
        difficulty: 'Medium',
        priority: 'Important',
        xpReward: 50
      }
    ]
  },
  // Day 3
  {
    dayNumber: 3,
    dayName: 'সোমবার',
    phase: 'Academic',
    missions: [
      {
        type: 'BASIC CLASS',
        subject: 'বাংলা',
        paper: 1,
        title: 'অপরিচিতা L-1',
        actionDetails: ['▶ অনলাইন / সেলফ স্টাডি ক্লাস ও মূল বিষয়বস্তু দেখা', 'গুরুত্বপূর্ণ পয়েন্ট নোট করো', 'দাগানো বই — সংশ্লিষ্ট চ্যাপ্টার পড়ো', 'লেকচার শিট সম্পন্ন করো'],
        estimatedMinutes: 50,
        difficulty: 'Easy',
        priority: 'Normal',
        xpReward: 40
      },
      {
        type: 'BASIC CLASS',
        subject: 'ইংরেজি',
        paper: 1,
        title: 'Unit-1 Lesson-1: The Parrot\'s Tale',
        actionDetails: ['▶ অনলাইন / সেলফ স্টাডি ক্লাস ও মূল বিষয়বস্তু দেখা', 'গুরুত্বপূর্ণ পয়েন্ট নোট করো', 'দাগানো বই — সংশ্লিষ্ট চ্যাপ্টার পড়ো', 'লেকচার শিট সম্পন্ন করো'],
        estimatedMinutes: 50,
        difficulty: 'Easy',
        priority: 'Normal',
        xpReward: 40
      }
    ]
  },
  // Day 4
  {
    dayNumber: 4,
    dayName: 'মঙ্গলবার',
    phase: 'Academic',
    missions: [
      {
        type: 'BASIC CLASS',
        subject: 'উচ্চতর গণিত',
        paper: 1,
        title: 'ম্যাট্রিক্স ও নির্ণায়ক L-2',
        actionDetails: ['▶ অনলাইন / সেলফ স্টাডি ক্লাস ও মূল বিষয়বস্তু দেখা', 'গুরুত্বপূর্ণ পয়েন্ট নোট করো', 'ম্যাট্রিক্সের গুণ ও ক্রেমারের নিয়ম প্র্যাকটিস'],
        estimatedMinutes: 60,
        difficulty: 'Medium',
        priority: 'Important',
        xpReward: 55
      },
      {
        type: 'BASIC CLASS',
        subject: 'রসায়ন',
        paper: 1,
        title: 'গুণগত রসায়ন L-1',
        actionDetails: ['▶ অনলাইন / সেলফ স্টাডি ক্লাস ও মূল বিষয়বস্তু দেখা', 'কোয়ান্টাম সংখ্যা ও বোর পরমাণু মডেল নোট করো'],
        estimatedMinutes: 60,
        difficulty: 'Hard',
        priority: 'High',
        xpReward: 60
      }
    ]
  },
  // Day 5
  {
    dayNumber: 5,
    dayName: 'বুধবার',
    phase: 'Academic',
    missions: [
      {
        type: 'BASIC CLASS',
        subject: 'পদার্থবিজ্ঞান',
        paper: 1,
        title: 'ভেক্টর L-1',
        actionDetails: ['▶ অনলাইন / সেলফ স্টাডি ক্লাস ও মূল বিষয়বস্তু দেখা', 'ভেক্টরের যোগ ও সামান্তরিক সূত্রের ম্যাথ সলভ'],
        estimatedMinutes: 60,
        difficulty: 'Medium',
        priority: 'High',
        xpReward: 55
      },
      {
        type: 'BASIC CLASS',
        subject: 'জীববিজ্ঞান',
        paper: 1,
        title: 'কোষ ও এর গঠন L-2',
        actionDetails: ['▶ অনলাইন / সেলফ স্টাডি ক্লাস ও মূল বিষয়বস্তু দেখা', 'ফ্লুইড মোজাইক মডেল ও ডিএনএ অনুলিপন চিত্রসহ পড়া'],
        estimatedMinutes: 60,
        difficulty: 'Medium',
        priority: 'Important',
        xpReward: 50
      }
    ]
  },
  // Day 6
  {
    dayNumber: 6,
    dayName: 'বৃহস্পতিবার',
    phase: 'Academic',
    missions: [
      {
        type: 'BASIC CLASS',
        subject: 'বাংলা',
        paper: 1,
        title: 'অপরিচিতা L-2 (CQ সলভিং)',
        actionDetails: ['▶ অনলাইন / সেলফ স্টাডি ক্লাস ও মূল বিষয়বস্তু দেখা', 'অপরিচিতার বোর্ড সৃজনশীল প্রশ্ন ও চরিত্র বিশ্লেষণ'],
        estimatedMinutes: 50,
        difficulty: 'Easy',
        priority: 'Normal',
        xpReward: 45
      },
      {
        type: 'BASIC CLASS',
        subject: 'ইংরেজি',
        paper: 1,
        title: 'Unit-1 Lesson-3: Children in School Part-1',
        actionDetails: ['▶ অনলাইন / সেলফ স্টাডি ক্লাস ও মূল বিষয়বস্তু দেখা', 'প্যাসেজের শব্দার্থ ও Flow Chart তৈরি প্র্যাকটিস'],
        estimatedMinutes: 50,
        difficulty: 'Medium',
        priority: 'Normal',
        xpReward: 45
      }
    ]
  },
  // Day 7: Revision & Exam Day
  {
    dayNumber: 7,
    dayName: 'শুক্রবার',
    phase: 'Academic',
    missions: [
      {
        type: 'REVISION CLASS',
        subject: 'সাপ্তাহিক রিভিশন',
        title: 'এই সপ্তাহের সব চ্যাপ্টার রিভিশন',
        actionDetails: ['এই সপ্তাহের নোট পুনরায় পড়ো', 'দাগানো বই — দুর্বল টপিক রিভিশন করো', 'HSC Suggestion থেকে গুরুত্বপূর্ণ প্রশ্নোত্তর পড়ো'],
        estimatedMinutes: 90,
        difficulty: 'Medium',
        priority: 'High',
        xpReward: 100
      },
      {
        type: 'EXAM BATCH',
        subject: 'অনলাইন এক্সাম',
        title: 'Week 1 মডেল টেস্ট (Edge Course / QZTest)',
        actionDetails: ['Week 1 সিলেবাসের উপর ৫০টি MCQ সলভ করো', 'ভুল প্রশ্ন চিহ্নিত করো ও নোটবুকে লিখে রাখো'],
        estimatedMinutes: 45,
        difficulty: 'Hard',
        priority: 'High',
        xpReward: 120
      }
    ]
  },
  // Day 8
  {
    dayNumber: 8,
    dayName: 'শনিবার',
    phase: 'Academic',
    missions: [
      {
        type: 'BASIC CLASS',
        subject: 'উচ্চতর গণিত',
        paper: 1,
        title: 'ম্যাট্রিক্স ও নির্ণায়ক L-3',
        actionDetails: ['নির্ণায়কের ধর্মাবলি ও মান নির্ণয়ের বিশেষ কৌশল আয়ত্ত করো'],
        estimatedMinutes: 60,
        difficulty: 'Hard',
        priority: 'Important',
        xpReward: 60
      },
      {
        type: 'BASIC CLASS',
        subject: 'রসায়ন',
        paper: 1,
        title: 'মৌলের পর্যায়বৃত্ততা ও রাসায়নিক বন্ধন L-1',
        actionDetails: ['পর্যায়বৃত্ত ধর্মের ব্যতিক্রমসমূহ ও আয়নীকরণ শক্তি'],
        estimatedMinutes: 60,
        difficulty: 'Medium',
        priority: 'Important',
        xpReward: 50
      }
    ]
  },
  // Day 9
  {
    dayNumber: 9,
    dayName: 'রবিবার',
    phase: 'Academic',
    missions: [
      {
        type: 'BASIC CLASS',
        subject: 'পদার্থবিজ্ঞান',
        paper: 1,
        title: 'ভেক্টর L-2: নদী-নৌকা ও বৃষ্টি সমস্যা',
        actionDetails: ['নদী পারাপারের ন্যূনতম সময় ও দূরত্ব এবং ছাতা ধরার কোণ'],
        estimatedMinutes: 65,
        difficulty: 'Hard',
        priority: 'High',
        xpReward: 65
      },
      {
        type: 'BASIC CLASS',
        subject: 'জীববিজ্ঞান',
        paper: 1,
        title: 'কোষ ও এর গঠন L-3: ট্রান্সক্রিপশন ও ট্রান্সলেশন',
        actionDetails: ['প্রোটিন সংশ্লেষণ ও জেনেটিক কোড বিস্তারিত'],
        estimatedMinutes: 60,
        difficulty: 'Hard',
        priority: 'Important',
        xpReward: 60
      }
    ]
  },
  // Day 10
  {
    dayNumber: 10,
    dayName: 'সোমবার',
    phase: 'Academic',
    missions: [
      {
        type: 'BASIC CLASS',
        subject: 'বাংলা',
        paper: 1,
        title: 'বিদ্রোহী (কাজী নজরুল ইসলাম)',
        actionDetails: ['কবিতার প্রতিটি পঙ্‌ক্তির অন্তর্নিহিত দর্শন ও রূপক ভাবার্থ বিশ্লেষণ'],
        estimatedMinutes: 50,
        difficulty: 'Hard',
        priority: 'Important',
        xpReward: 50
      },
      {
        type: 'BASIC CLASS',
        subject: 'ইংরেজি',
        paper: 1,
        title: 'Unit-1 Lesson-3: Children in School Part-2',
        actionDetails: ['Thematic analysis and summary writing'],
        estimatedMinutes: 50,
        difficulty: 'Medium',
        priority: 'Normal',
        xpReward: 45
      }
    ]
  },
  // Day 11
  {
    dayNumber: 11,
    dayName: 'মঙ্গলবার',
    phase: 'Academic',
    missions: [
      {
        type: 'BASIC CLASS',
        subject: 'উচ্চতর গণিত',
        paper: 1,
        title: 'Vector L-1',
        actionDetails: ['ভেক্টর যোগজীকরণ, ডট গুণন ও লম্ব প্রক্ষেপ'],
        estimatedMinutes: 60,
        difficulty: 'Medium',
        priority: 'Important',
        xpReward: 50
      },
      {
        type: 'BASIC CLASS',
        subject: 'রসায়ন',
        paper: 1,
        title: 'মৌলের পর্যায়বৃত্ততা ও রাসায়নিক বন্ধন L-2',
        actionDetails: ['সংকরায়ন (sp, sp2, sp3) ও VSEPR তত্ত্ব'],
        estimatedMinutes: 65,
        difficulty: 'Hard',
        priority: 'High',
        xpReward: 65
      }
    ]
  },
  // Day 12
  {
    dayNumber: 12,
    dayName: 'বুধবার',
    phase: 'Academic',
    missions: [
      {
        type: 'BASIC CLASS',
        subject: 'পদার্থবিজ্ঞান',
        paper: 1,
        title: 'ভেক্টর L-3: ডট ও ক্রস গুণন',
        actionDetails: ['সামান্তরিকের ক্ষেত্রফল, ত্রিভুজের ক্ষেত্রফল ও সমতলীয় ভেক্টর প্রমাণ'],
        estimatedMinutes: 60,
        difficulty: 'Medium',
        priority: 'Important',
        xpReward: 55
      },
      {
        type: 'BASIC CLASS',
        subject: 'জীববিজ্ঞান',
        paper: 1,
        title: 'কোষ বিভাজন L-1: মাইটোসিস',
        actionDetails: ['মেটাফেজ ও অ্যানাফেজ দশার বৈশিষ্ট্য ও ক্রোমোজোমীয় নৃত্য'],
        estimatedMinutes: 55,
        difficulty: 'Medium',
        priority: 'Normal',
        xpReward: 50
      }
    ]
  },
  // Day 13
  {
    dayNumber: 13,
    dayName: 'বৃহস্পতিবার',
    phase: 'Academic',
    missions: [
      {
        type: 'BASIC CLASS',
        subject: 'বাংলা',
        paper: 1,
        title: 'ফেব্রুয়ারি ১৯৬৯ (শামসুর রাহমান)',
        actionDetails: ['ভাষা আন্দোলন ও একাত্তরের চেতনা সম্পর্কিত সৃজনশীল প্রস্তুতি'],
        estimatedMinutes: 50,
        difficulty: 'Medium',
        priority: 'Normal',
        xpReward: 45
      },
      {
        type: 'BASIC CLASS',
        subject: 'ইংরেজি',
        paper: 1,
        title: 'Unit-1 Lesson-4: Civic Engagement Part-1',
        actionDetails: ['Civic rights, vocabulary, and fill in the blanks without clues'],
        estimatedMinutes: 50,
        difficulty: 'Medium',
        priority: 'Normal',
        xpReward: 45
      }
    ]
  },
  // Day 14: Revision & Exam Day
  {
    dayNumber: 14,
    dayName: 'শুক্রবার',
    phase: 'Academic',
    missions: [
      {
        type: 'REVISION CLASS',
        subject: 'সাপ্তাহিক রিভিশন',
        title: 'Week 2 রিভিশন ও প্র্যাকটিস',
        actionDetails: ['ভেক্টর ও রাসায়নিক বন্ধনের কঠিন সমস্যাগুলো সমাধান করো'],
        estimatedMinutes: 90,
        difficulty: 'Medium',
        priority: 'High',
        xpReward: 100
      },
      {
        type: 'EXAM BATCH',
        subject: 'অনলাইন এক্সাম',
        title: 'Week 2 পরীক্ষা ও ভুল সংশোধন',
        actionDetails: ['QZTest অনলাইন টেস্ট সম্পন্ন করো ও ভুল এনালাইসিস করো'],
        estimatedMinutes: 45,
        difficulty: 'Hard',
        priority: 'High',
        xpReward: 120
      }
    ]
  },
  // Day 205: Pre-Admission Math Solving (Phase 2 preview)
  {
    dayNumber: 205,
    dayName: 'রবিবার',
    phase: 'Academic',
    missions: [
      {
        type: 'MATH SOLVING',
        subject: 'উচ্চতর গণিত',
        title: 'ম্যাথ সলভিং: ভেক্টর সলভিং',
        actionDetails: ['▶ Math Solving ক্লাস দেখা', 'নিজে আবার সমাধান করো', 'ভুল হলে স্পেশাল নোট খাতায় তোলো'],
        estimatedMinutes: 75,
        difficulty: 'Hard',
        priority: 'High',
        xpReward: 80
      },
      {
        type: 'MATH SOLVING',
        subject: 'পদার্থবিজ্ঞান',
        title: 'ম্যাথ সলভিং: নিউটনিয়ান বলবিদ্যা সলভিং',
        actionDetails: ['জড়তার ভ্রামক, ব্যাংকিং ও ঘর্ষণের অ্যাডভান্সড ম্যাথ সলভ'],
        estimatedMinutes: 75,
        difficulty: 'Hard',
        priority: 'High',
        xpReward: 80
      }
    ]
  },
  // Day 240: Phase 2 Pre-Admission (Question Bank Solve)
  {
    dayNumber: 240,
    dayName: 'রবিবার',
    phase: 'Pre-Admission',
    missions: [
      {
        type: 'QB SOLVING',
        subject: 'পদার্থবিজ্ঞান',
        title: 'DU A Unit QB Solve: Vector',
        actionDetails: ['ঢাকা বিশ্ববিদ্যালয় ক-ইউনিট বিগত ২০ বছরের প্রশ্ন সমাধান', 'শর্টকাট ট্রিকস নোট করো'],
        estimatedMinutes: 80,
        difficulty: 'Hard',
        priority: 'High',
        xpReward: 90
      },
      {
        type: 'QB SOLVING',
        subject: 'পদার্থবিজ্ঞান',
        title: 'DU A Unit QB Solve: নিউটনিয়ান বলবিদ্যা',
        actionDetails: ['কৌণিক ভরবেগ, ব্যাংকিং ও লিফটের প্রশ্ন ব্যাংক সলভ'],
        estimatedMinutes: 80,
        difficulty: 'Hard',
        priority: 'High',
        xpReward: 90
      }
    ]
  },
  // Day 341: Phase 3 Full Admission (Engineering & Medical Track)
  {
    dayNumber: 341,
    dayName: 'বুধবার',
    phase: 'Full Admission',
    missions: [
      {
        type: 'ENGINEERING PREP',
        subject: 'পদার্থবিজ্ঞান',
        title: 'Engineering Admission Class: ভেক্টর (BUET Standard)',
        actionDetails: ['B/D Unit Analysis Mega Book + Subject Analysis Materials পড়ো', 'ক্যালকুলাস নির্ভর ভেক্টর সমস্যার সমাধান'],
        estimatedMinutes: 90,
        difficulty: 'Hard',
        priority: 'High',
        xpReward: 100
      },
      {
        type: 'ENGINEERING PREP',
        subject: 'পদার্থবিজ্ঞান',
        title: 'Engineering Admission Class: নিউটনিয়ান বলবিদ্যা',
        actionDetails: ['বুয়েট, কুয়েট, রুয়েট, চুয়েটের বিগত বছরের রিটেন প্রশ্ন সলভ'],
        estimatedMinutes: 90,
        difficulty: 'Hard',
        priority: 'High',
        xpReward: 100
      }
    ]
  }
];

// Helper to generate full daily missions for any date based on template or syllabus
export const generateMissionsForDate = (
  userId: string,
  targetDate: string,
  dayOffset: number = 1
): StudyMission[] => {
  const templateIdx = ((dayOffset - 1) % hsc28MasterRoutine.length);
  const template = hsc28MasterRoutine[templateIdx];

  return template.missions.map((m, index) => ({
    id: `mission_${userId}_d${dayOffset}_${index}_${Date.now()}`,
    userId,
    dayNumber: dayOffset,
    phase: template.phase,
    title: `${m.subject} — ${m.title}`,
    subject: m.subject,
    paper: m.paper,
    chapter: m.title.split(' ')[0],
    topic: m.title,
    actionDetails: m.actionDetails,
    date: targetDate,
    estimatedMinutes: m.estimatedMinutes,
    actualMinutesSpent: 0,
    difficulty: m.difficulty,
    priority: m.priority,
    status: 'pending',
    xpReward: m.xpReward,
    isRevision: m.type === 'REVISION CLASS',
    isExam: m.type === 'EXAM BATCH' || m.type === 'MOCK TEST'
  }));
};
