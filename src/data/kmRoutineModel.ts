// K&M Blueprint — Routine & Study Plan Types & 391-Day Master Preset

export interface RoutineDayTask {
  id: string;
  dayNumber: number;
  phase: 1 | 2 | 3;
  phaseTitle: string;
  dayName: string; // 'শনিবার', 'রবিবার', etc.
  subject: string;
  paper?: number;
  chapterOrTopic: string;
  classType: 'BASIC CLASS' | 'MATH SOLVING' | 'REVISION CLASS' | 'EXAM BATCH' | 'QB SOLVING' | 'ENGINEERING PREP' | 'MEDICAL PREP' | 'VARSITY A UNIT PREP' | 'MOCK TEST' | 'FINAL REVISION';
  actionInstructions: string[];
  isCompleted?: boolean;
}

export interface UserUploadedRoutine {
  fileName: string;
  uploadedAt: string;
  totalDays: number;
  phases: number;
  days: RoutineDayTask[];
}

export interface CustomStudyPlanItem {
  id: string;
  createdAt: string;
  targetDate: string;
  rawText: string;
  parsedSubject?: string;
  parsedPaper?: number;
  parsedChapter?: string;
  parsedTopic?: string;
  pages?: string;
  mcqCount?: number;
  cqCount?: number;
  status: 'planned' | 'in_progress' | 'completed';
}

// Master Sample of the 391-Day HSC Science Routine (HSC 28 Edge Course / Academic to Admission)
export const master391DayPreset: RoutineDayTask[] = [
  // Phase 1 — Academic (Day 1 - 239)
  {
    id: 'd-1-1',
    dayNumber: 1,
    phase: 1,
    phaseTitle: 'Phase 1 — Academic',
    dayName: 'শনিবার',
    subject: 'Higher Math',
    paper: 1,
    chapterOrTopic: 'ম্যাট্রিক্স ও নির্ণায়ক L-1',
    classType: 'BASIC CLASS',
    actionInstructions: ['অনলাইন / সেলফ স্টাডি ক্লাস ও মূল বিষয়বস্তু দেখা', 'গুরুত্বপূর্ণ পয়েন্ট নোট করা', 'দাগানো বই — সংশ্লিষ্ট চ্যাপ্টার পড়া', 'লেকচার শিট সম্পন্ন করা']
  },
  {
    id: 'd-1-2',
    dayNumber: 1,
    phase: 1,
    phaseTitle: 'Phase 1 — Academic',
    dayName: 'শনিবার',
    subject: 'Chemistry',
    paper: 1,
    chapterOrTopic: 'ল্যাবরেটরির নিরাপদ ব্যবহার',
    classType: 'BASIC CLASS',
    actionInstructions: ['অনলাইন / সেলফ স্টাডি ক্লাস ও মূল বিষয়বস্তু দেখা', 'গুরুত্বপূর্ণ পয়েন্ট নোট করা', 'দাগানো বই — সংশ্লিষ্ট চ্যাপ্টার পড়া', 'লেকচার শিট সম্পন্ন করা']
  },
  {
    id: 'd-2-1',
    dayNumber: 2,
    phase: 1,
    phaseTitle: 'Phase 1 — Academic',
    dayName: 'রবিবার',
    subject: 'Physics',
    paper: 1,
    chapterOrTopic: 'ভৌত জগত ও পরিমাপ',
    classType: 'BASIC CLASS',
    actionInstructions: ['অনলাইন / সেলফ স্টাডি ক্লাস ও মূল বিষয়বস্তু দেখা', 'গুরুত্বপূর্ণ পয়েন্ট নোট করা', 'দাগানো বই — সংশ্লিষ্ট চ্যাপ্টার পড়া', 'লেকচার শিট সম্পন্ন করা']
  },
  {
    id: 'd-2-2',
    dayNumber: 2,
    phase: 1,
    phaseTitle: 'Phase 1 — Academic',
    dayName: 'রবিবার',
    subject: 'Biology',
    paper: 1,
    chapterOrTopic: 'কোষ ও এর গঠন L-1',
    classType: 'BASIC CLASS',
    actionInstructions: ['অনলাইন / সেলফ স্টাডি ক্লাস ও মূল বিষয়বস্তু দেখা', 'গুরুত্বপূর্ণ পয়েন্ট নোট করা', 'দাগানো বই — সংশ্লিষ্ট চ্যাপ্টার পড়া', 'লেকচার শিট সম্পন্ন করা']
  },
  {
    id: 'd-3-1',
    dayNumber: 3,
    phase: 1,
    phaseTitle: 'Phase 1 — Academic',
    dayName: 'সোমবার',
    subject: 'Bangla',
    paper: 1,
    chapterOrTopic: 'অপরিচিতা L-1',
    classType: 'BASIC CLASS',
    actionInstructions: ['লেকচার দেখা ও মূল ভাববস্তু আয়ত্ত করা', 'দাগানো বই থেকে শব্দার্থ ও টীকা পড়া']
  },
  {
    id: 'd-3-2',
    dayNumber: 3,
    phase: 1,
    phaseTitle: 'Phase 1 — Academic',
    dayName: 'সোমবার',
    subject: 'English',
    paper: 1,
    chapterOrTopic: "Unit-1 Lesson-1: The Parrot's Tale",
    classType: 'BASIC CLASS',
    actionInstructions: ['প্যাসেজ পড়ে ভোকাবুলারি আয়ত্ত করা', 'ফ্লোচার্ট ও থিম লেখার চর্চা']
  },
  {
    id: 'd-4-1',
    dayNumber: 4,
    phase: 1,
    phaseTitle: 'Phase 1 — Academic',
    dayName: 'মঙ্গলবার',
    subject: 'Higher Math',
    paper: 1,
    chapterOrTopic: 'ম্যাট্রিক্স ও নির্ণায়ক L-2',
    classType: 'BASIC CLASS',
    actionInstructions: ['নির্ণায়কের ধর্মাবলির প্রমাণ ও সমস্যা সমাধান', 'বোর্ড এমসিকিউ সলভ করা']
  },
  {
    id: 'd-4-2',
    dayNumber: 4,
    phase: 1,
    phaseTitle: 'Phase 1 — Academic',
    dayName: 'মঙ্গলবার',
    subject: 'Chemistry',
    paper: 1,
    chapterOrTopic: 'গুণগত রসায়ন',
    classType: 'BASIC CLASS',
    actionInstructions: ['রাদারফোর্ড ও বোর পরমাণু মডেলের তুলনা', 'কোয়ান্টাম সংখ্যা হিসাব করা']
  },
  {
    id: 'd-5-1',
    dayNumber: 5,
    phase: 1,
    phaseTitle: 'Phase 1 — Academic',
    dayName: 'বুধবার',
    subject: 'Physics',
    paper: 1,
    chapterOrTopic: 'ভেক্টর L-1',
    classType: 'BASIC CLASS',
    actionInstructions: ['সামান্তরিক সূত্র ও লব্ধির মান-দিক নির্ণয়', 'নদী-নৌকার বেগের প্রাথমিক সমীকরণ']
  },
  {
    id: 'd-5-2',
    dayNumber: 5,
    phase: 1,
    phaseTitle: 'Phase 1 — Academic',
    dayName: 'বুধবার',
    subject: 'Biology',
    paper: 1,
    chapterOrTopic: 'কোষ ও এর গঠন L-2',
    classType: 'BASIC CLASS',
    actionInstructions: ['প্লাজমামেমব্রেনের ফ্লুইড মোজাইক মডেল চিহ্নিত চিত্র অঙ্কন', 'মাইটোকন্ড্রিয়া ও প্লাস্টিডের গঠন']
  },
  {
    id: 'd-6-1',
    dayNumber: 6,
    phase: 1,
    phaseTitle: 'Phase 1 — Academic',
    dayName: 'বৃহস্পতিবার',
    subject: 'Bangla',
    paper: 1,
    chapterOrTopic: 'অপরিচিতা L-2',
    classType: 'BASIC CLASS',
    actionInstructions: ['কল্যাণী ও শম্ভুনাথ সেনের চরিত্র বিশ্লেষণ', 'যৌতুকবিরোধী সৃজনশীল ক-খ-গ-ঘ অনুশীলন']
  },
  {
    id: 'd-6-2',
    dayNumber: 6,
    phase: 1,
    phaseTitle: 'Phase 1 — Academic',
    dayName: 'বৃহস্পতিবার',
    subject: 'English',
    paper: 1,
    chapterOrTopic: 'Unit-1 Lesson-3: Children in School Part-1',
    classType: 'BASIC CLASS',
    actionInstructions: ['প্যাসেজের সামারি প্রস্তুতকরণ', 'সিনোনিম ও অ্যান্টনিম প্র্যাকটিস']
  },
  {
    id: 'd-7-1',
    dayNumber: 7,
    phase: 1,
    phaseTitle: 'Phase 1 — Academic',
    dayName: 'শুক্রবার',
    subject: 'All Subjects',
    chapterOrTopic: 'সাপ্তাহিক বিশ্রাম ও রিভিশন ডে (Revision Day)',
    classType: 'REVISION CLASS',
    actionInstructions: ['এই সপ্তাহের সব সাবজেক্টের নোট পুনরায় পড়া', 'দাগানো বই থেকে দুর্বল চ্যাপ্টার রিভিশন', 'HSC Suggestion থেকে গুরুত্বপূর্ণ প্রশ্নোত্তর পড়া', 'অনলাইন সাপ্তাহিক এক্সাম দেওয়া ও ভুল প্রশ্ন নোট করা']
  }
];
