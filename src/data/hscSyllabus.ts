import { Subject, HSCGroup } from '../types';

export const scienceSubjects: Subject[] = [
  {
    id: 'phy',
    name: 'পদার্থবিজ্ঞান (Physics)',
    code: '174',
    isCompulsory: false,
    color: '#3b82f6',
    completedChapters: 0,
    totalChapters: 21,
    papers: [
      {
        id: 'phy-1',
        paperNumber: 1,
        title: 'পদার্থবিজ্ঞান ১ম পত্র',
        chapters: [
          {
            id: 'phy-1-1',
            chapterNumber: 1,
            title: 'ভৌত জগত ও পরিমাপ',
            englishTitle: 'Physical World and Measurement',
            difficulty: 'Easy',
            importance: 'Standard',
            totalTopics: 5,
            status: 'not_started',
            cqSolvedCount: 0,
            mcqSolvedCount: 0,
            masteryPercentage: 0,
            topics: [
              { id: 'phy-1-1-t1', title: 'ভৌত রাশি ও পরিমাপের একক', estimatedHours: 1.5, isCompleted: false },
              { id: 'phy-1-1-t2', title: 'পরিমাপের ত্রুটি ও ত্রুটির বিশ্লেষণ', estimatedHours: 2, isCompleted: false },
              { id: 'phy-1-1-t3', title: 'স্লাইড ক্যালিপার্স ও স্ক্রু গজ', estimatedHours: 1.5, isCompleted: false },
            ]
          },
          {
            id: 'phy-1-2',
            chapterNumber: 2,
            title: 'ভেক্টর',
            englishTitle: 'Vectors',
            difficulty: 'Medium',
            importance: 'Most Important (3-Star)',
            totalTopics: 7,
            status: 'not_started',
            cqSolvedCount: 0,
            mcqSolvedCount: 0,
            masteryPercentage: 0,
            topics: [
              { id: 'phy-1-2-t1', title: 'ভেক্টরের যোগ, বিয়োগ ও সামান্তরিক সূত্র', estimatedHours: 2.5, isCompleted: false },
              { id: 'phy-1-2-t2', title: 'নদী-নৌকার বেগ ও বৃষ্টির আপেক্ষিক বেগ', estimatedHours: 3, isCompleted: false },
              { id: 'phy-1-2-t3', title: 'স্কেলার ও ভেক্টর গুণন (Dot & Cross Product)', estimatedHours: 3, isCompleted: false },
              { id: 'phy-1-2-t4', title: 'গ্রেডিয়েন্ট, ডাইভারজেন্স ও কার্ল', estimatedHours: 2, isCompleted: false }
            ]
          },
          {
            id: 'phy-1-3',
            chapterNumber: 3,
            title: 'গতিবিদ্যা',
            englishTitle: 'Dynamics',
            difficulty: 'Hard',
            importance: 'Most Important (3-Star)',
            totalTopics: 6,
            status: 'not_started',
            cqSolvedCount: 0,
            mcqSolvedCount: 0,
            masteryPercentage: 0,
            topics: [
              { id: 'phy-1-3-t1', title: 'একমাত্রিক ও দ্বিমাত্রিক গতি সমীকরণ', estimatedHours: 2.5, isCompleted: false },
              { id: 'phy-1-3-t2', title: 'প্রাসের গতি (Projectile Motion)', estimatedHours: 3.5, isCompleted: false },
              { id: 'phy-1-3-t3', title: 'বৃত্তীয় গতি ও কৌণিক বেগ', estimatedHours: 2.5, isCompleted: false }
            ]
          },
          {
            id: 'phy-1-4',
            chapterNumber: 4,
            title: 'নিউটনিয়ান বলবিদ্যা',
            englishTitle: 'Newtonian Mechanics',
            difficulty: 'Hard',
            importance: 'Most Important (3-Star)',
            totalTopics: 8,
            status: 'not_started',
            cqSolvedCount: 0,
            mcqSolvedCount: 0,
            masteryPercentage: 0,
            topics: [
              { id: 'phy-1-4-t1', title: 'নিউটনের সূত্র ও ভরবেগের নিত্যতা', estimatedHours: 2.5, isCompleted: false },
              { id: 'phy-1-4-t2', title: 'ঘর্ষণ ও লিফটের প্রতিক্রিয়া বল', estimatedHours: 3, isCompleted: false },
              { id: 'phy-1-4-t3', title: 'রাস্তার ব্যাংকিং ও কেন্দ্রমুখী বল', estimatedHours: 3, isCompleted: false },
              { id: 'phy-1-4-t4', title: 'জড়তার ভ্রামক ও চক্রগতির ব্যাসার্ধ', estimatedHours: 3.5, isCompleted: false },
              { id: 'phy-1-4-t5', title: 'কৌণিক ভরবেগ ও টর্ক', estimatedHours: 3, isCompleted: false }
            ]
          },
          {
            id: 'phy-1-5',
            chapterNumber: 5,
            title: 'কাজ, শক্তি ও ক্ষমতা',
            englishTitle: 'Work, Energy & Power',
            difficulty: 'Medium',
            importance: 'Important',
            totalTopics: 6,
            status: 'not_started',
            cqSolvedCount: 0,
            mcqSolvedCount: 0,
            masteryPercentage: 0,
            topics: [
              { id: 'phy-1-5-t1', title: 'ধ্রুব ও পরিবর্তনশীল বল দ্বারা কৃতকাজ', estimatedHours: 2, isCompleted: false },
              { id: 'phy-1-5-t2', title: 'কাজের উপপাদ্য ও স্প্রিং বলের কাজ', estimatedHours: 3, isCompleted: false },
              { id: 'phy-1-5-t3', title: 'কুয়ার পানি তোলার কাজ ও কর্মদক্ষতা', estimatedHours: 3.5, isCompleted: false }
            ]
          },
          {
            id: 'phy-1-6',
            chapterNumber: 6,
            title: 'মহাকর্ষ ও অভিকর্ষ',
            englishTitle: 'Gravitation & Gravity',
            difficulty: 'Medium',
            importance: 'Important',
            totalTopics: 6,
            status: 'not_started',
            cqSolvedCount: 0,
            mcqSolvedCount: 0,
            masteryPercentage: 0,
            topics: [
              { id: 'phy-1-6-t1', title: 'নিউটনের মহাকর্ষ সূত্র ও মহাকর্ষীয় ধ্রুবক', estimatedHours: 2, isCompleted: false },
              { id: 'phy-1-6-t2', title: 'উচ্চতা ও গভীরতায় g-এর পরিবর্তন', estimatedHours: 2.5, isCompleted: false },
              { id: 'phy-1-6-t3', title: 'মুক্তিবেগ ও ভূ-স্থির উপগ্রহ', estimatedHours: 3, isCompleted: false }
            ]
          },
          {
            id: 'phy-1-7',
            chapterNumber: 7,
            title: 'পদার্থের গাঠনিক ধর্ম',
            englishTitle: 'Structural Properties of Matter',
            difficulty: 'Medium',
            importance: 'Important',
            totalTopics: 6,
            status: 'not_started',
            cqSolvedCount: 0,
            mcqSolvedCount: 0,
            masteryPercentage: 0,
            topics: [
              { id: 'phy-1-7-t1', title: 'হুকের সূত্র ও স্থিতিস্থাপক গুণাঙ্ক (Y, B, n)', estimatedHours: 3, isCompleted: false },
              { id: 'phy-1-7-t2', title: 'পৃষ্ঠটান, পৃষ্ঠশক্তি ও স্পর্শকোণ', estimatedHours: 3, isCompleted: false },
              { id: 'phy-1-7-t3', title: 'সান্দ্রতা ও স্টোকসের সূত্র', estimatedHours: 2.5, isCompleted: false }
            ]
          },
          {
            id: 'phy-1-8',
            chapterNumber: 8,
            title: 'পর্যাবৃত্ত গতি',
            englishTitle: 'Periodic Motion',
            difficulty: 'Medium',
            importance: 'Most Important (3-Star)',
            totalTopics: 5,
            status: 'not_started',
            cqSolvedCount: 0,
            mcqSolvedCount: 0,
            masteryPercentage: 0,
            topics: [
              { id: 'phy-1-8-t1', title: 'সরল ছন্দিত স্পন্দন ও ব্যবকলনীয় সমীকরণ', estimatedHours: 3, isCompleted: false },
              { id: 'phy-1-8-t2', title: 'সরল দোলক ও দোলনকাল সংক্রান্ত গাণিতিক সমস্যা', estimatedHours: 3.5, isCompleted: false },
              { id: 'phy-1-8-t3', title: 'স্প্রিং-এর দোলনকাল ও শক্তি সংরক্ষণ', estimatedHours: 3, isCompleted: false }
            ]
          },
          {
            id: 'phy-1-9',
            chapterNumber: 9,
            title: 'তরঙ্গ',
            englishTitle: 'Waves',
            difficulty: 'Hard',
            importance: 'Important',
            totalTopics: 5,
            status: 'not_started',
            cqSolvedCount: 0,
            mcqSolvedCount: 0,
            masteryPercentage: 0,
            topics: [
              { id: 'phy-1-9-t1', title: 'অগ্রগামী তরঙ্গ ও তরঙ্গের সমীকরণ', estimatedHours: 3, isCompleted: false },
              { id: 'phy-1-9-t2', title: 'স্থির তরঙ্গ, সুস্পন্দ ও নিস্পন্দ বিন্দু', estimatedHours: 3, isCompleted: false },
              { id: 'phy-1-9-t3', title: 'শব্দের তীব্রতা, তীব্রতা লেভেল ও বিট', estimatedHours: 3.5, isCompleted: false }
            ]
          },
          {
            id: 'phy-1-10',
            chapterNumber: 10,
            title: 'আদর্শ গ্যাস ও গ্যাসের গতিতত্ত্ব',
            englishTitle: 'Ideal Gas & Kinetic Theory',
            difficulty: 'Medium',
            importance: 'Most Important (3-Star)',
            totalTopics: 6,
            status: 'not_started',
            cqSolvedCount: 0,
            mcqSolvedCount: 0,
            masteryPercentage: 0,
            topics: [
              { id: 'phy-1-10-t1', title: 'বয়েল, চার্লস ও আদর্শ গ্যাস সমীকরণ (PV=nRT)', estimatedHours: 2.5, isCompleted: false },
              { id: 'phy-1-10-t2', title: 'গ্যাসের অণুর মূল গড় বর্গবেগ (RMS Velocity)', estimatedHours: 3, isCompleted: false },
              { id: 'phy-1-10-t3', title: 'শিশিরাঙ্ক ও আপেক্ষিক আর্দ্রতা (Relative Humidity)', estimatedHours: 3.5, isCompleted: false }
            ]
          }
        ]
      },
      {
        id: 'phy-2',
        paperNumber: 2,
        title: 'পদার্থবিজ্ঞান ২য় পত্র',
        chapters: [
          {
            id: 'phy-2-1',
            chapterNumber: 1,
            title: 'তাপগতিবিদ্যা',
            englishTitle: 'Thermodynamics',
            difficulty: 'Hard',
            importance: 'Most Important (3-Star)',
            totalTopics: 7,
            status: 'not_started',
            cqSolvedCount: 0,
            mcqSolvedCount: 0,
            masteryPercentage: 0,
            topics: [
              { id: 'phy-2-1-t1', title: 'তাপগতিবিদ্যার ১ম সূত্র ও বিভিন্ন তাপগতীয় প্রক্রিয়া', estimatedHours: 3, isCompleted: false },
              { id: 'phy-2-1-t2', title: 'কার্নো চক্র ও ইঞ্জিনের কর্মদক্ষতা', estimatedHours: 3.5, isCompleted: false },
              { id: 'phy-2-1-t3', title: 'এন্ট্রপি ও বিশৃঙ্খলা', estimatedHours: 3, isCompleted: false }
            ]
          },
          {
            id: 'phy-2-2',
            chapterNumber: 2,
            title: 'স্থির তড়িৎ',
            englishTitle: 'Electrostatics',
            difficulty: 'Medium',
            importance: 'Most Important (3-Star)',
            totalTopics: 6,
            status: 'not_started',
            cqSolvedCount: 0,
            mcqSolvedCount: 0,
            masteryPercentage: 0,
            topics: [
              { id: 'phy-2-2-t1', title: 'কুলম্বের সূত্র, প্রাবল্য ও বিভব', estimatedHours: 3, isCompleted: false },
              { id: 'phy-2-2-t2', title: 'তড়িৎ দ্বিমেরু ও গাউসের সূত্র', estimatedHours: 3, isCompleted: false },
              { id: 'phy-2-2-t3', title: 'ধারক ও ধারকত্ব (Capacitance)', estimatedHours: 3, isCompleted: false }
            ]
          },
          {
            id: 'phy-2-3',
            chapterNumber: 3,
            title: 'চল তড়িৎ',
            englishTitle: 'Current Electricity',
            difficulty: 'Hard',
            importance: 'Most Important (3-Star)',
            totalTopics: 7,
            status: 'not_started',
            cqSolvedCount: 0,
            mcqSolvedCount: 0,
            masteryPercentage: 0,
            topics: [
              { id: 'phy-2-3-t1', title: 'ওহমের সূত্র ও রোধের সমাবেশ', estimatedHours: 2.5, isCompleted: false },
              { id: 'phy-2-3-t2', title: 'কার্শফের সূত্র ও হুইটস্টোন ব্রিজ', estimatedHours: 3.5, isCompleted: false },
              { id: 'phy-2-3-t3', title: 'মিটার ব্রিজ ও পোটেনশিওমিটার', estimatedHours: 3, isCompleted: false },
              { id: 'phy-2-3-t4', title: 'তড়িৎ প্রবাহের তাপীয় ফল ও বিদ্যুৎ বিল হিসাব', estimatedHours: 2.5, isCompleted: false }
            ]
          },
          {
            id: 'phy-2-4',
            chapterNumber: 4,
            title: 'তড়িৎ প্রবাহের চৌম্বক ক্রিয়া ও চুম্বকত্ব',
            englishTitle: 'Magnetic Effect of Current & Magnetism',
            difficulty: 'Hard',
            importance: 'Important',
            totalTopics: 5,
            status: 'not_started',
            cqSolvedCount: 0,
            mcqSolvedCount: 0,
            masteryPercentage: 0,
            topics: [
              { id: 'phy-2-4-t1', title: 'বায়ট-স্যাভার্টের সূত্র ও প্রয়োগ', estimatedHours: 3, isCompleted: false },
              { id: 'phy-2-4-t2', title: 'অ্যাম্পিয়ারের সূত্র ও লরেঞ্জ বল', estimatedHours: 3, isCompleted: false },
              { id: 'phy-2-4-t3', title: 'ভূ-চুম্বকত্ব ও চৌম্বক উপাদান', estimatedHours: 2.5, isCompleted: false }
            ]
          },
          {
            id: 'phy-2-5',
            chapterNumber: 5,
            title: 'তাড়িতচৌম্বকীয় আবেশ ও পরিবর্তী প্রবাহ',
            englishTitle: 'Electromagnetic Induction & AC',
            difficulty: 'Hard',
            importance: 'Important',
            totalTopics: 5,
            status: 'not_started',
            cqSolvedCount: 0,
            mcqSolvedCount: 0,
            masteryPercentage: 0,
            topics: [
              { id: 'phy-2-5-t1', title: 'ফ্যারাডের সূত্র ও লেঞ্জের সূত্র', estimatedHours: 2.5, isCompleted: false },
              { id: 'phy-2-5-t2', title: 'স্বকীয় ও পারস্পরিক আবেশ', estimatedHours: 3, isCompleted: false },
              { id: 'phy-2-5-t3', title: 'ট্রান্সফরমার ও পরিবর্তী প্রবাহ (AC Current)', estimatedHours: 3, isCompleted: false }
            ]
          },
          {
            id: 'phy-2-6',
            chapterNumber: 6,
            title: 'জ্যামিতিক আলোকবিজ্ঞান',
            englishTitle: 'Geometrical Optics',
            difficulty: 'Medium',
            importance: 'Important',
            totalTopics: 5,
            status: 'not_started',
            cqSolvedCount: 0,
            mcqSolvedCount: 0,
            masteryPercentage: 0,
            topics: [
              { id: 'phy-2-6-t1', title: 'লেন্স ও লেন্স প্রস্তুতকারকের সূত্র', estimatedHours: 3, isCompleted: false },
              { id: 'phy-2-6-t2', title: 'প্রিজম ও ন্যূনতম বিচ্যুতি কোণ', estimatedHours: 2.5, isCompleted: false },
              { id: 'phy-2-6-t3', title: 'অণুবীক্ষণ ও দূরবীক্ষণ যন্ত্র', estimatedHours: 3, isCompleted: false }
            ]
          },
          {
            id: 'phy-2-7',
            chapterNumber: 7,
            title: 'ভৌত আলোকবিজ্ঞান',
            englishTitle: 'Physical Optics',
            difficulty: 'Hard',
            importance: 'Most Important (3-Star)',
            totalTopics: 5,
            status: 'not_started',
            cqSolvedCount: 0,
            mcqSolvedCount: 0,
            masteryPercentage: 0,
            topics: [
              { id: 'phy-2-7-t1', title: 'হাইগেনের নীতি ও তরঙ্গমুখ', estimatedHours: 2, isCompleted: false },
              { id: 'phy-2-7-t2', title: 'ইয়ং-এর দ্বি-চির ব্যতিচার পরীক্ষা', estimatedHours: 3.5, isCompleted: false },
              { id: 'phy-2-7-t3', title: 'আলোর অপবর্তন ও সমবর্তন', estimatedHours: 3, isCompleted: false }
            ]
          },
          {
            id: 'phy-2-8',
            chapterNumber: 8,
            title: 'আধুনিক পদার্থবিজ্ঞানের সূচনা',
            englishTitle: 'Intro to Modern Physics',
            difficulty: 'Hard',
            importance: 'Most Important (3-Star)',
            totalTopics: 6,
            status: 'not_started',
            cqSolvedCount: 0,
            mcqSolvedCount: 0,
            masteryPercentage: 0,
            topics: [
              { id: 'phy-2-8-t1', title: 'আপেক্ষিকতার বিশেষ তত্ত্ব (দৈর্ঘ্য সংকোচন, কাল দীর্ঘায়ন)', estimatedHours: 3.5, isCompleted: false },
              { id: 'phy-2-8-t2', title: 'ভর-শক্তি সম্পর্ক E=mc^2', estimatedHours: 2, isCompleted: false },
              { id: 'phy-2-8-t3', title: 'আলোকতড়িৎ ক্রিয়া ও আইনস্টাইনের সমীকরণ', estimatedHours: 3.5, isCompleted: false },
              { id: 'phy-2-8-t4', title: 'কম্পটন ক্রিয়া ও দ্য ব্রগলির তরঙ্গদৈর্ঘ্য', estimatedHours: 2.5, isCompleted: false }
            ]
          },
          {
            id: 'phy-2-9',
            chapterNumber: 9,
            title: 'পরমাণু মডেল ও নিউক্লিয়ার পদার্থবিজ্ঞান',
            englishTitle: 'Atomic Model & Nuclear Physics',
            difficulty: 'Medium',
            importance: 'Important',
            totalTopics: 5,
            status: 'not_started',
            cqSolvedCount: 0,
            mcqSolvedCount: 0,
            masteryPercentage: 0,
            topics: [
              { id: 'phy-2-9-t1', title: 'রাদারফোর্ড ও বোর পরমাণু মডেল', estimatedHours: 2.5, isCompleted: false },
              { id: 'phy-2-9-t2', title: 'তেজস্ক্রিয় ক্ষয় সূত্র, অর্ধায়ু ও গড় আয়ু', estimatedHours: 3.5, isCompleted: false },
              { id: 'phy-2-9-t3', title: 'ভর ত্রুটি, বন্ধন শক্তি ও নিউক্লিয়ার ফিশন-ফিউশন', estimatedHours: 3, isCompleted: false }
            ]
          },
          {
            id: 'phy-2-10',
            chapterNumber: 10,
            title: 'সেমিকন্ডাক্টর ও ইলেকট্রনিক্স',
            englishTitle: 'Semiconductor & Electronics',
            difficulty: 'Easy',
            importance: 'Important',
            totalTopics: 5,
            status: 'not_started',
            cqSolvedCount: 0,
            mcqSolvedCount: 0,
            masteryPercentage: 0,
            topics: [
              { id: 'phy-2-10-t1', title: 'p-n জংশন ডায়োড ও রেকটিফায়ার', estimatedHours: 2.5, isCompleted: false },
              { id: 'phy-2-10-t2', title: 'ট্রানজিস্টর ও অ্যামপ্লিফায়ার', estimatedHours: 3, isCompleted: false },
              { id: 'phy-2-10-t3', title: 'লজিক গেট (AND, OR, NOT, NAND, NOR, XOR)', estimatedHours: 2.5, isCompleted: false }
            ]
          },
          {
            id: 'phy-2-11',
            chapterNumber: 11,
            title: 'জ্যোতির্বিজ্ঞান',
            englishTitle: 'Astronomy',
            difficulty: 'Easy',
            importance: 'Standard',
            totalTopics: 3,
            status: 'not_started',
            cqSolvedCount: 0,
            mcqSolvedCount: 0,
            masteryPercentage: 0,
            topics: [
              { id: 'phy-2-11-t1', title: 'মহাবিশ্ব, গ্যালাক্সি ও নক্ষত্রের বিবর্তন', estimatedHours: 2, isCompleted: false },
              { id: 'phy-2-11-t2', title: 'হাবলের সূত্র ও বিগ ব্যাং তত্ত্ব', estimatedHours: 2, isCompleted: false }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'chem',
    name: 'রসায়ন (Chemistry)',
    code: '176',
    isCompulsory: false,
    color: '#10b981',
    completedChapters: 0,
    totalChapters: 10,
    papers: [
      {
        id: 'chem-1',
        paperNumber: 1,
        title: 'রসায়ন ১ম পত্র',
        chapters: [
          {
            id: 'chem-1-1',
            chapterNumber: 1,
            title: 'ল্যাবরেটরির নিরাপদ ব্যবহার',
            englishTitle: 'Safe Use of Laboratory',
            difficulty: 'Easy',
            importance: 'Standard',
            totalTopics: 4,
            status: 'not_started',
            cqSolvedCount: 0,
            mcqSolvedCount: 0,
            masteryPercentage: 0,
            topics: [
              { id: 'chem-1-1-t1', title: 'ল্যাবরেটরির নিরাপত্তামূলক পোশাক ও বিধি', estimatedHours: 1.5, isCompleted: false },
              { id: 'chem-1-1-t2', title: 'হ্যাজার্ড প্রতীক ও ঝুঁকি সতর্কতা', estimatedHours: 2, isCompleted: false }
            ]
          },
          {
            id: 'chem-1-2',
            chapterNumber: 2,
            title: 'গুণগত রসায়ন',
            englishTitle: 'Qualitative Chemistry',
            difficulty: 'Hard',
            importance: 'Most Important (3-Star)',
            totalTopics: 7,
            status: 'not_started',
            cqSolvedCount: 0,
            mcqSolvedCount: 0,
            masteryPercentage: 0,
            topics: [
              { id: 'chem-1-2-t1', title: 'কোয়ান্টাম সংখ্যা ও ইলেকট্রন বিন্যাসের নীতি (আউফবাউ, হুন্ড, পাউলি)', estimatedHours: 3, isCompleted: false },
              { id: 'chem-1-2-t2', title: 'হাইড্রোজেনের পারমাণবিক বর্ণালী ও রিডবার্গ সমীকরণ', estimatedHours: 3, isCompleted: false },
              { id: 'chem-1-2-t3', title: 'দ্রাব্যতা, দ্রাব্যতা গুণফল (Ksp) ও আয়নিক গুণফল (Kip)', estimatedHours: 3.5, isCompleted: false },
              { id: 'chem-1-2-t4', title: 'আয়ন শনাক্তকরণ ও ক্রোম্যাটোগ্রাফি', estimatedHours: 2.5, isCompleted: false }
            ]
          },
          {
            id: 'chem-1-3',
            chapterNumber: 3,
            title: 'মৌলের পর্যায়বৃত্ত ধর্ম ও রাসায়নিক বন্ধন',
            englishTitle: 'Periodic Properties & Chemical Bonding',
            difficulty: 'Hard',
            importance: 'Most Important (3-Star)',
            totalTopics: 8,
            status: 'not_started',
            cqSolvedCount: 0,
            mcqSolvedCount: 0,
            masteryPercentage: 0,
            topics: [
              { id: 'chem-1-3-t1', title: 'পর্যায় সারণি ও পর্যায়বৃত্ত ধর্ম (আয়নীকরণ শক্তি, তড়িৎ ঋণাত্মকতা)', estimatedHours: 3, isCompleted: false },
              { id: 'chem-1-3-t2', title: 'সংকরায়ন (Hybridization: sp, sp2, sp3, sp3d) ও অণুর আকৃতি', estimatedHours: 4, isCompleted: false },
              { id: 'chem-1-3-t3', title: 'ফাযানের নীতি ও পোলারায়ন', estimatedHours: 3, isCompleted: false },
              { id: 'chem-1-3-t4', title: 'হাইড্রোজেন বন্ধন ও তার প্রভাব', estimatedHours: 2.5, isCompleted: false }
            ]
          },
          {
            id: 'chem-1-4',
            chapterNumber: 4,
            title: 'রাসায়নিক পরিবর্তন',
            englishTitle: 'Chemical Changes',
            difficulty: 'Hard',
            importance: 'Most Important (3-Star)',
            totalTopics: 7,
            status: 'not_started',
            cqSolvedCount: 0,
            mcqSolvedCount: 0,
            masteryPercentage: 0,
            topics: [
              { id: 'chem-1-4-t1', title: 'রাসায়নিক সাম্যাবস্থা ও লা শাতেলীয়ার নীতি', estimatedHours: 3, isCompleted: false },
              { id: 'chem-1-4-t2', title: 'সাম্যধ্রুবক Kp ও Kc সংক্রান্ত গাণিতিক হিসাব', estimatedHours: 3.5, isCompleted: false },
              { id: 'chem-1-4-t3', title: 'pH ও বাফার দ্রবণ (হেন্ডারসন সমীকরণ)', estimatedHours: 3.5, isCompleted: false },
              { id: 'chem-1-4-t4', title: 'বিক্রিয়ার হার ও আরহেনিয়াসের সমীকরণ', estimatedHours: 3, isCompleted: false }
            ]
          },
          {
            id: 'chem-1-5',
            chapterNumber: 5,
            title: 'কর্মমুখী রসায়ন',
            englishTitle: 'Applied Chemistry',
            difficulty: 'Easy',
            importance: 'Standard',
            totalTopics: 4,
            status: 'not_started',
            cqSolvedCount: 0,
            mcqSolvedCount: 0,
            masteryPercentage: 0,
            topics: [
              { id: 'chem-1-5-t1', title: 'খাদ্য নিরাপত্তা ও প্রিজারভেটিভস', estimatedHours: 2, isCompleted: false },
              { id: 'chem-1-5-t2', title: 'ভিনেগার ও টয়লেট্রিজ প্রস্তুত প্রণালী', estimatedHours: 2, isCompleted: false }
            ]
          }
        ]
      },
      {
        id: 'chem-2',
        paperNumber: 2,
        title: 'রসায়ন ২য় পত্র',
        chapters: [
          {
            id: 'chem-2-1',
            chapterNumber: 1,
            title: 'পরিবেশ রসায়ন',
            englishTitle: 'Environmental Chemistry',
            difficulty: 'Medium',
            importance: 'Most Important (3-Star)',
            totalTopics: 6,
            status: 'not_started',
            cqSolvedCount: 0,
            mcqSolvedCount: 0,
            masteryPercentage: 0,
            topics: [
              { id: 'chem-2-1-t1', title: 'বায়ুমণ্ডলের উপাদান ও গ্যাসের সূত্রাবলি (ডাল্টনের আংশিক চাপ, গ্রাহামের ব্যাপন)', estimatedHours: 3, isCompleted: false },
              { id: 'chem-2-1-t2', title: 'আদর্শ ও বাস্তব গ্যাস (ভ্যান্ডার ওয়ালস সমীকরণ)', estimatedHours: 2.5, isCompleted: false },
              { id: 'chem-2-1-t3', title: 'এসিড বৃষ্টি, গ্রিনহাউস প্রভাব ও ওজোনস্তর ক্ষয়', estimatedHours: 2.5, isCompleted: false },
              { id: 'chem-2-1-t4', title: 'পানির বিশুদ্ধতার মানদণ্ড (DO, BOD, COD, TDS)', estimatedHours: 3, isCompleted: false }
            ]
          },
          {
            id: 'chem-2-2',
            chapterNumber: 2,
            title: 'জৈব রসায়ন',
            englishTitle: 'Organic Chemistry',
            difficulty: 'Hard',
            importance: 'Most Important (3-Star)',
            totalTopics: 12,
            status: 'not_started',
            cqSolvedCount: 0,
            mcqSolvedCount: 0,
            masteryPercentage: 0,
            topics: [
              { id: 'chem-2-2-t1', title: 'জৈব যৌগের নামকরণ (IUPAC)', estimatedHours: 3, isCompleted: false },
              { id: 'chem-2-2-t2', title: 'সমানুতা (গাঠনিক ও স্টেরিও সমানুতা/সিস-ট্রান্স ও আলোক সমানুতা)', estimatedHours: 4, isCompleted: false },
              { id: 'chem-2-2-t3', title: 'বেনজিন ও অ্যারোমেটিক যৌগের ইলেকট্রোফিলিক প্রতিস্থাপন', estimatedHours: 4, isCompleted: false },
              { id: 'chem-2-2-t4', title: 'অ্যালকাইল হ্যালাইড ও নিউক্লিওফিলিক প্রতিস্থাপন (SN1, SN2)', estimatedHours: 3.5, isCompleted: false },
              { id: 'chem-2-2-t5', title: 'অ্যালকোহল ও ফেনল প্রস্তুতি ও শনাক্তকরণ', estimatedHours: 3, isCompleted: false },
              { id: 'chem-2-2-t6', title: 'অ্যালডিহাইড ও কিটোন (নিউক্লিওফিলিক সংযোজন, ক্যানিজারো, অ্যালডল ঘনীভবন)', estimatedHours: 4, isCompleted: false },
              { id: 'chem-2-2-t7', title: 'জৈব এসিড ও অ্যামিন (কার্বিল অ্যামিন পরীক্ষা)', estimatedHours: 3, isCompleted: false }
            ]
          },
          {
            id: 'chem-2-3',
            chapterNumber: 3,
            title: 'পরিমাণগত রসায়ন',
            englishTitle: 'Quantitative Chemistry',
            difficulty: 'Hard',
            importance: 'Most Important (3-Star)',
            totalTopics: 7,
            status: 'not_started',
            cqSolvedCount: 0,
            mcqSolvedCount: 0,
            masteryPercentage: 0,
            topics: [
              { id: 'chem-2-3-t1', title: 'মোলারিটি, শতকরা মাত্রা ও পিপিএম (ppm)', estimatedHours: 3, isCompleted: false },
              { id: 'chem-2-3-t2', title: 'এসিড-ক্ষার টাইট্রেশন ও নির্দেশক', estimatedHours: 3.5, isCompleted: false },
              { id: 'chem-2-3-t3', title: 'জারণ-বিজারণ সমতাকরণ (আয়ন-ইলেকট্রন পদ্ধতি)', estimatedHours: 4, isCompleted: false },
              { id: 'chem-2-3-t4', title: 'আয়োডোমিতি ও আয়োডিমেট্রি', estimatedHours: 3, isCompleted: false },
              { id: 'chem-2-3-t5', title: 'বিয়ার-ল্যাম্বার্ট সূত্র', estimatedHours: 2, isCompleted: false }
            ]
          },
          {
            id: 'chem-2-4',
            chapterNumber: 4,
            title: 'তড়িৎ রসায়ন',
            englishTitle: 'Electrochemistry',
            difficulty: 'Medium',
            importance: 'Important',
            totalTopics: 6,
            status: 'not_started',
            cqSolvedCount: 0,
            mcqSolvedCount: 0,
            masteryPercentage: 0,
            topics: [
              { id: 'chem-2-4-t1', title: 'তড়িৎ পরিবাহী ও ফ্যারাডের তড়িৎ বিশ্লেষণ সূত্র', estimatedHours: 3, isCompleted: false },
              { id: 'chem-2-4-t2', title: 'গ্যালভানিক কোষ ও প্রমাণ তড়িৎদ্বার বিভব', estimatedHours: 3, isCompleted: false },
              { id: 'chem-2-4-t3', title: 'নার্নস্ট সমীকরণ ও ইএমএফ (EMF) নির্ণয়', estimatedHours: 3.5, isCompleted: false },
              { id: 'chem-2-4-t4', title: 'ব্যাটারি ও ফুয়েল সেল', estimatedHours: 2, isCompleted: false }
            ]
          },
          {
            id: 'chem-2-5',
            chapterNumber: 5,
            title: 'অর্থনৈতিক রসায়ন',
            englishTitle: 'Economic Chemistry',
            difficulty: 'Easy',
            importance: 'Standard',
            totalTopics: 4,
            status: 'not_started',
            cqSolvedCount: 0,
            mcqSolvedCount: 0,
            masteryPercentage: 0,
            topics: [
              { id: 'chem-2-5-t1', title: 'ইউরিয়া সার ও সিমেন্ট কারখানা রসায়ন', estimatedHours: 2.5, isCompleted: false },
              { id: 'chem-2-5-t2', title: 'চামড়া প্রক্রিয়াজাতকরণ ও ন্যানো কণা', estimatedHours: 2, isCompleted: false }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'math',
    name: 'উচ্চতর গণিত (Higher Mathematics)',
    code: '265',
    isCompulsory: false,
    color: '#8b5cf6',
    completedChapters: 0,
    totalChapters: 19,
    papers: [
      {
        id: 'math-1',
        paperNumber: 1,
        title: 'উচ্চতর গণিত ১ম পত্র',
        chapters: [
          {
            id: 'math-1-1',
            chapterNumber: 1,
            title: 'ম্যাট্রিক্স ও নির্ণায়ক',
            englishTitle: 'Matrices & Determinants',
            difficulty: 'Easy',
            importance: 'Most Important (3-Star)',
            totalTopics: 5,
            status: 'not_started',
            cqSolvedCount: 0,
            mcqSolvedCount: 0,
            masteryPercentage: 0,
            topics: [
              { id: 'math-1-1-t1', title: 'ম্যাট্রিক্সের যোগ, বিয়োগ ও গুণ', estimatedHours: 2.5, isCompleted: false },
              { id: 'math-1-1-t2', title: 'নির্ণায়কের ধর্মাবলি ও মান নির্ণয়', estimatedHours: 3, isCompleted: false },
              { id: 'math-1-1-t3', title: 'ক্রেমারের নিয়ম ও বিপরীত ম্যাট্রিক্স (Inverse Matrix)', estimatedHours: 3, isCompleted: false }
            ]
          },
          {
            id: 'math-1-2',
            chapterNumber: 2,
            title: 'ভেক্টর',
            englishTitle: 'Vectors',
            difficulty: 'Medium',
            importance: 'Important',
            totalTopics: 4,
            status: 'not_started',
            cqSolvedCount: 0,
            mcqSolvedCount: 0,
            masteryPercentage: 0,
            topics: [
              { id: 'math-1-2-t1', title: 'ত্রিমাত্রিক ভেক্টর ও অবস্থান ভেক্টর', estimatedHours: 2, isCompleted: false },
              { id: 'math-1-2-t2', title: 'ডট ও ক্রস গুণন এবং লম্ব ও সমান্তরাল ভেক্টর', estimatedHours: 2.5, isCompleted: false }
            ]
          },
          {
            id: 'math-1-3',
            chapterNumber: 3,
            title: 'সরলরেখা',
            englishTitle: 'Straight Lines',
            difficulty: 'Hard',
            importance: 'Most Important (3-Star)',
            totalTopics: 7,
            status: 'not_started',
            cqSolvedCount: 0,
            mcqSolvedCount: 0,
            masteryPercentage: 0,
            topics: [
              { id: 'math-1-3-t1', title: 'কার্তেসীয় ও পোলার স্থানাঙ্ক এবং দূরত্ব', estimatedHours: 2, isCompleted: false },
              { id: 'math-1-3-t2', title: 'বিভাজন বিন্দু ও ত্রিভুজের ক্ষেত্রফল', estimatedHours: 2.5, isCompleted: false },
              { id: 'math-1-3-t3', title: 'সরলরেখার বিভিন্ন সমীকরণ ও ঢাল', estimatedHours: 3.5, isCompleted: false },
              { id: 'math-1-3-t4', title: 'দুইটি সরলরেখার মধ্যবর্তী কোণ ও লম্ব দূরত্ব', estimatedHours: 3.5, isCompleted: false }
            ]
          },
          {
            id: 'math-1-4',
            chapterNumber: 4,
            title: 'বৃত্ত',
            englishTitle: 'Circles',
            difficulty: 'Medium',
            importance: 'Most Important (3-Star)',
            totalTopics: 5,
            status: 'not_started',
            cqSolvedCount: 0,
            mcqSolvedCount: 0,
            masteryPercentage: 0,
            topics: [
              { id: 'math-1-4-t1', title: 'বৃত্তের প্রমিত সমীকরণ, কেন্দ্র ও ব্যাসার্ধ', estimatedHours: 2.5, isCompleted: false },
              { id: 'math-1-4-t2', title: 'অক্ষদ্বয়ের ছেদাংশ ও স্পর্শকের সমীকরণ', estimatedHours: 3.5, isCompleted: false }
            ]
          },
          {
            id: 'math-1-5',
            chapterNumber: 5,
            title: 'বিন্যাস ও সমাবেশ',
            englishTitle: 'Permutations & Combinations',
            difficulty: 'Medium',
            importance: 'Important',
            totalTopics: 5,
            status: 'not_started',
            cqSolvedCount: 0,
            mcqSolvedCount: 0,
            masteryPercentage: 0,
            topics: [
              { id: 'math-1-5-t1', title: 'গণনার মৌলিক নীতি ও শব্দ গঠন (Permutations)', estimatedHours: 3, isCompleted: false },
              { id: 'math-1-5-t2', title: 'দল গঠন ও বাছাই (Combinations)', estimatedHours: 3, isCompleted: false }
            ]
          },
          {
            id: 'math-1-7',
            chapterNumber: 7,
            title: 'সংযুক্ত কোণের ত্রিকোণমিতিক অনুপাত',
            englishTitle: 'Trigonometric Ratios of Associated Angles',
            difficulty: 'Hard',
            importance: 'Most Important (3-Star)',
            totalTopics: 7,
            status: 'not_started',
            cqSolvedCount: 0,
            mcqSolvedCount: 0,
            masteryPercentage: 0,
            topics: [
              { id: 'math-1-7-t1', title: 'সংযুক্ত কোণ ও যৌগিক কোণের সূত্রাবলি (sin(A±B), cos(A±B))', estimatedHours: 3, isCompleted: false },
              { id: 'math-1-7-t2', title: 'গুণিতক ও উপগুণিতক কোণ', estimatedHours: 3.5, isCompleted: false },
              { id: 'math-1-7-t3', title: 'ত্রিভুজের কোণ ও বাহু সম্পর্কিত গুণাবলি', estimatedHours: 3, isCompleted: false }
            ]
          },
          {
            id: 'math-1-8',
            chapterNumber: 8,
            title: 'ফাংশন ও ফাংশনের লেখচিত্র',
            englishTitle: 'Functions & Graphs',
            difficulty: 'Medium',
            importance: 'Important',
            totalTopics: 4,
            status: 'not_started',
            cqSolvedCount: 0,
            mcqSolvedCount: 0,
            masteryPercentage: 0,
            topics: [
              { id: 'math-1-8-t1', title: 'ডোমেন, রেঞ্জ ও বিপরীত ফাংশন', estimatedHours: 2.5, isCompleted: false },
              { id: 'math-1-8-t2', title: 'এক-এক ও সার্বিক ফাংশন', estimatedHours: 2, isCompleted: false }
            ]
          },
          {
            id: 'math-1-9',
            chapterNumber: 9,
            title: 'অন্তরীকরণ',
            englishTitle: 'Differentiation (Calculus)',
            difficulty: 'Hard',
            importance: 'Most Important (3-Star)',
            totalTopics: 9,
            status: 'not_started',
            cqSolvedCount: 0,
            mcqSolvedCount: 0,
            masteryPercentage: 0,
            topics: [
              { id: 'math-1-9-t1', title: 'সীমা (Limit) ও অবিচ্ছিন্নতা', estimatedHours: 3, isCompleted: false },
              { id: 'math-1-9-t2', title: 'মূল নিয়মে অন্তরজ নির্ণয়', estimatedHours: 3, isCompleted: false },
              { id: 'math-1-9-t3', title: 'অন্তরীকরণের নিয়ম (Product, Quotient, Chain rule)', estimatedHours: 3.5, isCompleted: false },
              { id: 'math-1-9-t4', title: 'পর্যায়ক্রমিক অন্তরীকরণ (Successive Differentiation)', estimatedHours: 3.5, isCompleted: false },
              { id: 'math-1-9-t5', title: 'গুরুমান ও লঘুমান (Maxima & Minima)', estimatedHours: 4, isCompleted: false }
            ]
          },
          {
            id: 'math-1-10',
            chapterNumber: 10,
            title: 'যোগজীকরণ',
            englishTitle: 'Integration (Calculus)',
            difficulty: 'Hard',
            importance: 'Most Important (3-Star)',
            totalTopics: 8,
            status: 'not_started',
            cqSolvedCount: 0,
            mcqSolvedCount: 0,
            masteryPercentage: 0,
            topics: [
              { id: 'math-1-10-t1', title: 'অনির্দিষ্ট যোগজ ও প্রতিস্থাপন পদ্ধতি', estimatedHours: 3.5, isCompleted: false },
              { id: 'math-1-10-t2', title: 'আংশিক ভগ্নাংশ ও খণ্ডশ যোগজীকরণ (Integration by Parts)', estimatedHours: 4, isCompleted: false },
              { id: 'math-1-10-t3', title: 'নির্দিষ্ট যোগজ (Definite Integral) ও ক্ষেত্রফল নির্ণয়', estimatedHours: 4, isCompleted: false }
            ]
          }
        ]
      },
      {
        id: 'math-2',
        paperNumber: 2,
        title: 'উচ্চতর গণিত ২য় পত্র',
        chapters: [
          {
            id: 'math-2-1',
            chapterNumber: 1,
            title: 'বাস্তব সংখ্যা ও অসমতা',
            englishTitle: 'Real Numbers & Inequalities',
            difficulty: 'Easy',
            importance: 'Standard',
            totalTopics: 4,
            status: 'not_started',
            cqSolvedCount: 0,
            mcqSolvedCount: 0,
            masteryPercentage: 0,
            topics: [
              { id: 'math-2-1-t1', title: 'পরমমান ও অসমতার সমাধান', estimatedHours: 2, isCompleted: false },
              { id: 'math-2-1-t2', title: 'সুপ্রিমাম ও ইনফিমাম', estimatedHours: 2, isCompleted: false }
            ]
          },
          {
            id: 'math-2-2',
            chapterNumber: 2,
            title: 'যোগাশ্রয়ী প্রোগ্রাম',
            englishTitle: 'Linear Programming',
            difficulty: 'Easy',
            importance: 'Important',
            totalTopics: 3,
            status: 'not_started',
            cqSolvedCount: 0,
            mcqSolvedCount: 0,
            masteryPercentage: 0,
            topics: [
              { id: 'math-2-2-t1', title: 'লেখচিত্রের সাহায্যে যোগাশ্রয়ী প্রোগ্রাম গঠন ও সমাধান', estimatedHours: 3, isCompleted: false }
            ]
          },
          {
            id: 'math-2-3',
            chapterNumber: 3,
            title: 'জটিল সংখ্যা',
            englishTitle: 'Complex Numbers',
            difficulty: 'Medium',
            importance: 'Most Important (3-Star)',
            totalTopics: 5,
            status: 'not_started',
            cqSolvedCount: 0,
            mcqSolvedCount: 0,
            masteryPercentage: 0,
            topics: [
              { id: 'math-2-3-t1', title: 'মডুলাস, আর্গুমেন্ট ও পোলার আকার', estimatedHours: 3, isCompleted: false },
              { id: 'math-2-3-t2', title: 'এককের ঘনমূল ও চতুর্থমূল', estimatedHours: 3, isCompleted: false }
            ]
          },
          {
            id: 'math-2-4',
            chapterNumber: 4,
            title: 'বহুপদী ও বহুপদী সমীকরণ',
            englishTitle: 'Polynomials & Polynomial Equations',
            difficulty: 'Hard',
            importance: 'Most Important (3-Star)',
            totalTopics: 6,
            status: 'not_started',
            cqSolvedCount: 0,
            mcqSolvedCount: 0,
            masteryPercentage: 0,
            topics: [
              { id: 'math-2-4-t1', title: 'দ্বিঘাত সমীকরণের মূল ও সহগের সম্পর্ক', estimatedHours: 3, isCompleted: false },
              { id: 'math-2-4-t2', title: 'মূলের প্রকৃতি ও নিশ্চয়ক', estimatedHours: 3, isCompleted: false },
              { id: 'math-2-4-t3', title: 'ত্রিঘাত ও বহুঘাত সমীকরণ সমাধান', estimatedHours: 3.5, isCompleted: false }
            ]
          },
          {
            id: 'math-2-5',
            chapterNumber: 5,
            title: 'দ্বিপদী বিস্তৃতি',
            englishTitle: 'Binomial Expansion',
            difficulty: 'Medium',
            importance: 'Important',
            totalTopics: 4,
            status: 'not_started',
            cqSolvedCount: 0,
            mcqSolvedCount: 0,
            masteryPercentage: 0,
            topics: [
              { id: 'math-2-5-t1', title: 'দ্বিপদী উপপাদ্য ও সাধারণ পদ নির্ণয়', estimatedHours: 3, isCompleted: false },
              { id: 'math-2-5-t2', title: 'ঋণাত্মক ও ভগ্নাংশ সূচকের দ্বিপদী বিস্তৃতি', estimatedHours: 3, isCompleted: false }
            ]
          },
          {
            id: 'math-2-6',
            chapterNumber: 6,
            title: 'কণিক',
            englishTitle: 'Conics',
            difficulty: 'Hard',
            importance: 'Most Important (3-Star)',
            totalTopics: 7,
            status: 'not_started',
            cqSolvedCount: 0,
            mcqSolvedCount: 0,
            masteryPercentage: 0,
            topics: [
              { id: 'math-2-6-t1', title: 'পরাবৃত্ত (Parabola) সংক্রান্ত সমস্যা', estimatedHours: 3.5, isCompleted: false },
              { id: 'math-2-6-t2', title: 'উপবৃত্ত (Ellipse) সংক্রান্ত সমস্যা', estimatedHours: 4, isCompleted: false },
              { id: 'math-2-6-t3', title: 'অধিবৃত্ত (Hyperbola) সংক্রান্ত সমস্যা', estimatedHours: 3.5, isCompleted: false }
            ]
          },
          {
            id: 'math-2-7',
            chapterNumber: 7,
            title: 'বিপরীত ত্রিকোণমিতিক ফাংশন ও সমীকরণ',
            englishTitle: 'Inverse Trigonometric Functions',
            difficulty: 'Hard',
            importance: 'Most Important (3-Star)',
            totalTopics: 6,
            status: 'not_started',
            cqSolvedCount: 0,
            mcqSolvedCount: 0,
            masteryPercentage: 0,
            topics: [
              { id: 'math-2-7-t1', title: 'বিপরীত বৃত্তীয় ফাংশনের সূত্রাবলী ও মান নির্ণয়', estimatedHours: 3.5, isCompleted: false },
              { id: 'math-2-7-t2', title: 'ত্রিকোণমিতিক সমীকরণের সাধারণ সমাধান', estimatedHours: 4, isCompleted: false }
            ]
          },
          {
            id: 'math-2-8',
            chapterNumber: 8,
            title: 'স্থিতিবিদ্যা',
            englishTitle: 'Statics',
            difficulty: 'Hard',
            importance: 'Most Important (3-Star)',
            totalTopics: 6,
            status: 'not_started',
            cqSolvedCount: 0,
            mcqSolvedCount: 0,
            masteryPercentage: 0,
            topics: [
              { id: 'math-2-8-t1', title: 'লামির উপপাদ্য ও বলের সাম্যাবস্থা', estimatedHours: 3.5, isCompleted: false },
              { id: 'math-2-8-t2', title: 'সদৃশ ও অসদৃশ সমান্তরাল বল', estimatedHours: 3.5, isCompleted: false }
            ]
          },
          {
            id: 'math-2-9',
            chapterNumber: 9,
            title: 'সমতলে বস্তুকণার গতি',
            englishTitle: 'Dynamics of Particles in a Plane',
            difficulty: 'Hard',
            importance: 'Most Important (3-Star)',
            totalTopics: 6,
            status: 'not_started',
            cqSolvedCount: 0,
            mcqSolvedCount: 0,
            masteryPercentage: 0,
            topics: [
              { id: 'math-2-9-t1', title: 'সরলরেখায় ত্বরণযুক্ত গতি', estimatedHours: 3, isCompleted: false },
              { id: 'math-2-9-t2', title: 'প্রাসের গতি ও পাল্লা সংক্রান্ত সমস্যা', estimatedHours: 3.5, isCompleted: false },
              { id: 'math-2-9-t3', title: 'আপেক্ষিক গতি ও সংঘর্ষ', estimatedHours: 3, isCompleted: false }
            ]
          },
          {
            id: 'math-2-10',
            chapterNumber: 10,
            title: 'বিস্তার পরিমাপ ও সম্ভাবনা',
            englishTitle: 'Measures of Dispersion & Probability',
            difficulty: 'Medium',
            importance: 'Important',
            totalTopics: 4,
            status: 'not_started',
            cqSolvedCount: 0,
            mcqSolvedCount: 0,
            masteryPercentage: 0,
            topics: [
              { id: 'math-2-10-t1', title: 'ভেদাঙ্ক ও পরিমিত ব্যবধান', estimatedHours: 2.5, isCompleted: false },
              { id: 'math-2-10-t2', title: 'সম্ভাবনার যোগ ও গুণন সূত্র', estimatedHours: 3, isCompleted: false }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'bio',
    name: 'জীববিজ্ঞান (Biology)',
    code: '178',
    isCompulsory: false,
    color: '#14b8a6',
    completedChapters: 0,
    totalChapters: 24,
    papers: [
      {
        id: 'bio-1',
        paperNumber: 1,
        title: 'জীববিজ্ঞান ১ম পত্র (উদ্ভিদবিজ্ঞান)',
        chapters: [
          {
            id: 'bio-1-1',
            chapterNumber: 1,
            title: 'কোষ ও এর গঠন',
            englishTitle: 'Cell & Its Structure',
            difficulty: 'Medium',
            importance: 'Most Important (3-Star)',
            totalTopics: 6,
            status: 'not_started',
            cqSolvedCount: 0,
            mcqSolvedCount: 0,
            masteryPercentage: 0,
            topics: [
              { id: 'bio-1-1-t1', title: 'কোষঝিল্লি ও ফ্লুইড মোজাইক মডেল', estimatedHours: 2.5, isCompleted: false },
              { id: 'bio-1-1-t2', title: 'ডিএনএ (DNA) গঠন ও অনুলিপন', estimatedHours: 3.5, isCompleted: false },
              { id: 'bio-1-1-t3', title: 'ট্রান্সক্রিপশন ও ট্রান্সলেশন', estimatedHours: 3.5, isCompleted: false }
            ]
          },
          {
            id: 'bio-1-2',
            chapterNumber: 2,
            title: 'কোষ বিভাজন',
            englishTitle: 'Cell Division',
            difficulty: 'Medium',
            importance: 'Most Important (3-Star)',
            totalTopics: 5,
            status: 'not_started',
            cqSolvedCount: 0,
            mcqSolvedCount: 0,
            masteryPercentage: 0,
            topics: [
              { id: 'bio-1-2-t1', title: 'মাইটোটিক মেটাকাইনেসিস ও দশাগুলো', estimatedHours: 2.5, isCompleted: false },
              { id: 'bio-1-2-t2', title: 'মিয়োসিস-১ এর প্রফেজ-১ ও ক্রসিং ওভার', estimatedHours: 3.5, isCompleted: false }
            ]
          },
          {
            id: 'bio-1-3',
            chapterNumber: 3,
            title: 'কোষ রসায়ন',
            englishTitle: 'Cell Chemistry',
            difficulty: 'Hard',
            importance: 'Important',
            totalTopics: 5,
            status: 'not_started',
            cqSolvedCount: 0,
            mcqSolvedCount: 0,
            masteryPercentage: 0,
            topics: [
              { id: 'bio-1-3-t1', title: 'কার্বোহাইড্রেট ও গ্লাইকোসাইডিক বন্ধন', estimatedHours: 2.5, isCompleted: false },
              { id: 'bio-1-3-t2', title: 'অ্যামিনো এসিড, প্রোটিন ও পেপটাইড বন্ধন', estimatedHours: 2.5, isCompleted: false },
              { id: 'bio-1-3-t3', title: 'এনজাইমের ক্রিয়া ও শ্রেণিবিভাগ', estimatedHours: 2.5, isCompleted: false }
            ]
          },
          {
            id: 'bio-1-4',
            chapterNumber: 4,
            title: 'অণুজীব',
            englishTitle: 'Microorganisms',
            difficulty: 'Medium',
            importance: 'Most Important (3-Star)',
            totalTopics: 6,
            status: 'not_started',
            cqSolvedCount: 0,
            mcqSolvedCount: 0,
            masteryPercentage: 0,
            topics: [
              { id: 'bio-1-4-t1', title: 'ভাইরাস (T2 ব্যাকটেরিওফায ও HIV)', estimatedHours: 3, isCompleted: false },
              { id: 'bio-1-4-t2', title: 'ব্যাকটেরিয়ার গঠন ও অর্থনৈতিক গুরুত্ব', estimatedHours: 3, isCompleted: false },
              { id: 'bio-1-4-t3', title: 'ম্যালেরিয়া পরজীবী (Plasmodium) জীবনচক্র', estimatedHours: 3.5, isCompleted: false }
            ]
          },
          {
            id: 'bio-1-7',
            chapterNumber: 7,
            title: 'নগ্নবীজী ও আবৃতবীজী উদ্ভিদ',
            englishTitle: 'Gymnosperms & Angiosperms',
            difficulty: 'Medium',
            importance: 'Important',
            totalTopics: 5,
            status: 'not_started',
            cqSolvedCount: 0,
            mcqSolvedCount: 0,
            masteryPercentage: 0,
            topics: [
              { id: 'bio-1-7-t1', title: 'সাইকাসের বৈশিষ্ট্য ও জনন', estimatedHours: 2.5, isCompleted: false },
              { id: 'bio-1-7-t2', title: 'পোয়াসি ও মালভেসি গোত্রের শনাক্তকারী বৈশিষ্ট্য', estimatedHours: 3.5, isCompleted: false }
            ]
          },
          {
            id: 'bio-1-8',
            chapterNumber: 8,
            title: 'টিস্যু ও টিস্যুতন্ত্র',
            englishTitle: 'Tissue & Tissue System',
            difficulty: 'Medium',
            importance: 'Important',
            totalTopics: 5,
            status: 'not_started',
            cqSolvedCount: 0,
            mcqSolvedCount: 0,
            masteryPercentage: 0,
            topics: [
              { id: 'bio-1-8-t1', title: 'ভাজক টিস্যু ও এপিডার্মাল টিস্যুতন্ত্র (পত্ররন্ধ্র)', estimatedHours: 3, isCompleted: false },
              { id: 'bio-1-8-t2', title: 'ভাস্কুলার বান্ডলের প্রকারভেদ', estimatedHours: 3, isCompleted: false },
              { id: 'bio-1-8-t3', title: 'একবীজপত্রী উদ্ভিদের মূল ও কাণ্ডের অন্তর্গঠন', estimatedHours: 3.5, isCompleted: false }
            ]
          },
          {
            id: 'bio-1-9',
            chapterNumber: 9,
            title: 'উদ্ভিদ শারীরতত্ত্ব',
            englishTitle: 'Plant Physiology',
            difficulty: 'Hard',
            importance: 'Most Important (3-Star)',
            totalTopics: 8,
            status: 'not_started',
            cqSolvedCount: 0,
            mcqSolvedCount: 0,
            masteryPercentage: 0,
            topics: [
              { id: 'bio-1-9-t1', title: 'খনিজ লবণ পরিশোষণ ও প্রস্বেদন', estimatedHours: 3, isCompleted: false },
              { id: 'bio-1-9-t2', title: 'সালোকসংশ্লেষণ (আলোক পর্যায়, ক্যালভিন ও হ্যাচ-স্ল্যাক চক্র)', estimatedHours: 4, isCompleted: false },
              { id: 'bio-1-9-t3', title: 'শ্বসন (গ্লাইকোলাইসিস ও ক্রেবস চক্র)', estimatedHours: 4, isCompleted: false }
            ]
          },
          {
            id: 'bio-1-11',
            chapterNumber: 11,
            title: 'জীবপ্রযুক্তি',
            englishTitle: 'Biotechnology',
            difficulty: 'Medium',
            importance: 'Most Important (3-Star)',
            totalTopics: 5,
            status: 'not_started',
            cqSolvedCount: 0,
            mcqSolvedCount: 0,
            masteryPercentage: 0,
            topics: [
              { id: 'bio-1-11-t1', title: 'টিস্যু কালচার প্রযুক্তি ও প্রয়োগ', estimatedHours: 3, isCompleted: false },
              { id: 'bio-1-11-t2', title: 'রিকম্বিনেন্ট ডিএনএ প্রযুক্তি (জিন ক্লোনিং)', estimatedHours: 3.5, isCompleted: false }
            ]
          }
        ]
      },
      {
        id: 'bio-2',
        paperNumber: 2,
        title: 'জীববিজ্ঞান ২য় পত্র (প্রাণিবিজ্ঞান)',
        chapters: [
          {
            id: 'bio-2-1',
            chapterNumber: 1,
            title: 'প্রাণীর বিভিন্নতা ও শ্রেণিবিন্যাস',
            englishTitle: 'Animal Diversity & Classification',
            difficulty: 'Medium',
            importance: 'Most Important (3-Star)',
            totalTopics: 6,
            status: 'not_started',
            cqSolvedCount: 0,
            mcqSolvedCount: 0,
            masteryPercentage: 0,
            topics: [
              { id: 'bio-2-1-t1', title: 'শ্রেণিবিন্যাসের ভিত্তি (প্রতিসাম্য, সিলম, খণ্ডকায়ন)', estimatedHours: 3, isCompleted: false },
              { id: 'bio-2-1-t2', title: 'প্রধান ৯টি পর্বের বৈশিষ্ট্য ও উদাহরণ', estimatedHours: 4, isCompleted: false },
              { id: 'bio-2-1-t3', title: 'কর্ডাটা পর্বের উপপর্ব ও শ্রেণিবিভাগ', estimatedHours: 3.5, isCompleted: false }
            ]
          },
          {
            id: 'bio-2-2',
            chapterNumber: 2,
            title: 'প্রাণীর পরিচিতি',
            englishTitle: 'Introduction to Animals (Hydra, Grasshopper, Rohu Fish)',
            difficulty: 'Hard',
            importance: 'Most Important (3-Star)',
            totalTopics: 8,
            status: 'not_started',
            cqSolvedCount: 0,
            mcqSolvedCount: 0,
            masteryPercentage: 0,
            topics: [
              { id: 'bio-2-2-t1', title: 'হাইড্রার বহিঃত্বকীয় ও অন্তঃত্বকীয় কোষ এবং নেমাটোসিস্ট', estimatedHours: 3.5, isCompleted: false },
              { id: 'bio-2-2-t2', title: 'ঘাসফড়িঙের পৌষ্টিকতন্ত্র ও ওমাটিডিয়াম দর্শন কৌশল', estimatedHours: 4, isCompleted: false },
              { id: 'bio-2-2-t3', title: 'রুই মাছের রক্ত সংবহন ও পটকা', estimatedHours: 3.5, isCompleted: false }
            ]
          },
          {
            id: 'bio-2-3',
            chapterNumber: 3,
            title: 'পরিপাক ও শোষণ',
            englishTitle: 'Digestion & Absorption',
            difficulty: 'Medium',
            importance: 'Important',
            totalTopics: 6,
            status: 'not_started',
            cqSolvedCount: 0,
            mcqSolvedCount: 0,
            masteryPercentage: 0,
            topics: [
              { id: 'bio-2-3-t1', title: 'মুখগহ্বর ও পাকস্থলীতে খাদ্য পরিপাক', estimatedHours: 3, isCompleted: false },
              { id: 'bio-2-3-t2', title: 'ক্ষুদ্রান্ত্রে এনজাইমের ক্রিয়া ও শোষণ', estimatedHours: 3.5, isCompleted: false },
              { id: 'bio-2-3-t3', title: 'যকৃতের সঞ্চয়ী ও বিপাকীয় ভূমিকা', estimatedHours: 2.5, isCompleted: false }
            ]
          },
          {
            id: 'bio-2-4',
            chapterNumber: 4,
            title: 'রক্ত ও সংবহন',
            englishTitle: 'Blood & Circulation',
            difficulty: 'Hard',
            importance: 'Most Important (3-Star)',
            totalTopics: 7,
            status: 'not_started',
            cqSolvedCount: 0,
            mcqSolvedCount: 0,
            masteryPercentage: 0,
            topics: [
              { id: 'bio-2-4-t1', title: 'রক্তকণিকা ও রক্ত তঞ্চন প্রক্রিয়া', estimatedHours: 3, isCompleted: false },
              { id: 'bio-2-4-t2', title: 'হৃদপিণ্ডের গঠন ও কার্ডিয়াক চক্র', estimatedHours: 3.5, isCompleted: false },
              { id: 'bio-2-4-t3', title: 'মায়োজেনিক নিয়ন্ত্রণ (SA node, AV node)', estimatedHours: 3, isCompleted: false },
              { id: 'bio-2-4-t4', title: 'অ্যানজাইনা, হার্ট অ্যাটাক ও বাইপাস সার্জারি', estimatedHours: 2.5, isCompleted: false }
            ]
          },
          {
            id: 'bio-2-5',
            chapterNumber: 5,
            title: 'শ্বাসক্রিয়া ও শ্বসন',
            englishTitle: 'Respiration & Breathing',
            difficulty: 'Medium',
            importance: 'Important',
            totalTopics: 5,
            status: 'not_started',
            cqSolvedCount: 0,
            mcqSolvedCount: 0,
            masteryPercentage: 0,
            topics: [
              { id: 'bio-2-5-t1', title: 'ফুসফুসের গঠন ও অ্যালভিওলাস', estimatedHours: 2.5, isCompleted: false },
              { id: 'bio-2-5-t2', title: 'অক্সিজেন ও কার্বন ডাই-অক্সাইড পরিবহন কৌশল', estimatedHours: 3.5, isCompleted: false }
            ]
          },
          {
            id: 'bio-2-7',
            chapterNumber: 7,
            title: 'চলন ও অঙ্গচালনা',
            englishTitle: 'Locomotion & Movement',
            difficulty: 'Medium',
            importance: 'Important',
            totalTopics: 5,
            status: 'not_started',
            cqSolvedCount: 0,
            mcqSolvedCount: 0,
            masteryPercentage: 0,
            topics: [
              { id: 'bio-2-7-t1', title: 'মানুষের কঙ্কালতন্ত্রের অস্থিসমূহ', estimatedHours: 3, isCompleted: false },
              { id: 'bio-2-7-t2', title: 'পেশির গঠন ও অ্যাকটিন-মায়োসিন সংকোচন কৌশল', estimatedHours: 3.5, isCompleted: false }
            ]
          },
          {
            id: 'bio-2-11',
            chapterNumber: 11,
            title: 'জিনতত্ত্ব ও বিবর্তন',
            englishTitle: 'Genetics & Evolution',
            difficulty: 'Hard',
            importance: 'Most Important (3-Star)',
            totalTopics: 7,
            status: 'not_started',
            cqSolvedCount: 0,
            mcqSolvedCount: 0,
            masteryPercentage: 0,
            topics: [
              { id: 'bio-2-11-t1', title: 'মেন্ডেলের ১ম ও ২য় সূত্র', estimatedHours: 3, isCompleted: false },
              { id: 'bio-2-11-t2', title: 'মেন্ডেলের সূত্রের ব্যতিক্রম (অসম্পূর্ণ প্রকটতা, লিথাল জিন)', estimatedHours: 3.5, isCompleted: false },
              { id: 'bio-2-11-t3', title: 'সেক্স লিংকড ডিসঅর্ডার (হিমোফিলিয়া, বর্ণান্ধতা)', estimatedHours: 3.5, isCompleted: false },
              { id: 'bio-2-11-t4', title: 'এবিও রক্ত গ্রুপ ও আরএইচ ফ্যাক্টর', estimatedHours: 2.5, isCompleted: false }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'bng',
    name: 'বাংলা (Bangla)',
    code: '101',
    isCompulsory: true,
    color: '#ef4444',
    completedChapters: 0,
    totalChapters: 26,
    papers: [
      {
        id: 'bng-1',
        paperNumber: 1,
        title: 'বাংলা ১ম পত্র (সাহিত্য ও সহপাঠ)',
        chapters: [
          {
            id: 'bng-1-1',
            chapterNumber: 1,
            title: 'অপরিচিতা (গল্প - রবীন্দ্রনাথ ঠাকুর)',
            englishTitle: 'Oporichita',
            difficulty: 'Easy',
            importance: 'Most Important (3-Star)',
            totalTopics: 3,
            status: 'not_started',
            cqSolvedCount: 0,
            mcqSolvedCount: 0,
            masteryPercentage: 0,
            topics: [
              { id: 'bng-1-1-t1', title: 'মূলভাব ও চরিত্র বিশ্লেষণ (অনুপম, কল্যাণী, শম্ভুনাথ)', estimatedHours: 2, isCompleted: false },
              { id: 'bng-1-1-t2', title: 'যৌতুকপ্রথা ও আত্মমর্যাদা বোধ CQ সলভিং', estimatedHours: 2, isCompleted: false }
            ]
          },
          {
            id: 'bng-1-2',
            chapterNumber: 2,
            title: 'বিলাসী (গল্প - শরৎচন্দ্র চট্টোপাধ্যায়)',
            englishTitle: 'Bilasi',
            difficulty: 'Easy',
            importance: 'Important',
            totalTopics: 3,
            status: 'not_started',
            cqSolvedCount: 0,
            mcqSolvedCount: 0,
            masteryPercentage: 0,
            topics: [
              { id: 'bng-1-2-t1', title: 'মূল বিষয়বস্তু ও চরিত্র বিশ্লেষণ (বিলাসী, মৃত্যুঞ্জয়)', estimatedHours: 2, isCompleted: false }
            ]
          },
          {
            id: 'bng-1-3',
            chapterNumber: 3,
            title: 'আমার পথ (প্রবন্ধ - কাজী নজরুল ইসলাম)',
            englishTitle: 'Amar Poth',
            difficulty: 'Medium',
            importance: 'Important',
            totalTopics: 2,
            status: 'not_started',
            cqSolvedCount: 0,
            mcqSolvedCount: 0,
            masteryPercentage: 0,
            topics: [
              { id: 'bng-1-3-t1', title: 'সত্যের স্বরূপ, আত্মনির্ভরতা ও প্রাবন্ধিক বক্তব্য', estimatedHours: 2, isCompleted: false }
            ]
          },
          {
            id: 'bng-1-4',
            chapterNumber: 4,
            title: 'বায়ান্নর দিনগুলো (স্মৃতিকথা - শেখ মুজিবুর রহমান)',
            englishTitle: 'Bayannor Dingulo',
            difficulty: 'Easy',
            importance: 'Most Important (3-Star)',
            totalTopics: 2,
            status: 'not_started',
            cqSolvedCount: 0,
            mcqSolvedCount: 0,
            masteryPercentage: 0,
            topics: [
              { id: 'bng-1-4-t1', title: 'ভাষা আন্দোলন ও কারাবন্দি বঙ্গবন্ধুর স্মৃতিচারণ', estimatedHours: 2, isCompleted: false }
            ]
          },
          {
            id: 'bng-1-5',
            chapterNumber: 5,
            title: 'রেইনকোট (গল্প - আখতারুজ্জামান ইলিয়াস)',
            englishTitle: 'Raincoat',
            difficulty: 'Medium',
            importance: 'Most Important (3-Star)',
            totalTopics: 2,
            status: 'not_started',
            cqSolvedCount: 0,
            mcqSolvedCount: 0,
            masteryPercentage: 0,
            topics: [
              { id: 'bng-1-5-t1', title: 'মুক্তিযুদ্ধকালীন অবরুদ্ধ ঢাকার চিত্র ও নুরুল হুদা', estimatedHours: 2.5, isCompleted: false }
            ]
          },
          {
            id: 'bng-1-6',
            chapterNumber: 6,
            title: 'সোনার তরী (কবিতা - রবীন্দ্রনাথ ঠাকুর)',
            englishTitle: 'Sonar Tori',
            difficulty: 'Medium',
            importance: 'Most Important (3-Star)',
            totalTopics: 2,
            status: 'not_started',
            cqSolvedCount: 0,
            mcqSolvedCount: 0,
            masteryPercentage: 0,
            topics: [
              { id: 'bng-1-6-t1', title: 'রূপক অর্থ, শিল্পকর্মের চিরন্তনতা ও কবির মানবসত্তা', estimatedHours: 2, isCompleted: false }
            ]
          },
          {
            id: 'bng-1-7',
            chapterNumber: 7,
            title: 'বিদ্রোহী (কবিতা - কাজী নজরুল ইসলাম)',
            englishTitle: 'Bidrohi',
            difficulty: 'Hard',
            importance: 'Most Important (3-Star)',
            totalTopics: 2,
            status: 'not_started',
            cqSolvedCount: 0,
            mcqSolvedCount: 0,
            masteryPercentage: 0,
            topics: [
              { id: 'bng-1-7-t1', title: 'কবির অহংবোধ, পৌরাণিক অনুষঙ্গ ও বিপ্লব চেতনা', estimatedHours: 2.5, isCompleted: false }
            ]
          },
          {
            id: 'bng-1-8',
            chapterNumber: 8,
            title: 'প্রতিদান (কবিতা - জসীম উদ্‌দীন)',
            englishTitle: 'Protidan',
            difficulty: 'Easy',
            importance: 'Important',
            totalTopics: 2,
            status: 'not_started',
            cqSolvedCount: 0,
            mcqSolvedCount: 0,
            masteryPercentage: 0,
            topics: [
              { id: 'bng-1-8-t1', title: 'মহত্ত্ব, পরোপকার ও অহিংস মনোভাব', estimatedHours: 1.5, isCompleted: false }
            ]
          },
          {
            id: 'bng-1-9',
            chapterNumber: 9,
            title: 'তাহারেই পড়ে মনে (কবিতা - সুফিয়া কামাল)',
            englishTitle: 'Taharei Pore Mone',
            difficulty: 'Medium',
            importance: 'Most Important (3-Star)',
            totalTopics: 2,
            status: 'not_started',
            cqSolvedCount: 0,
            mcqSolvedCount: 0,
            masteryPercentage: 0,
            topics: [
              { id: 'bng-1-9-t1', title: 'নাটকীয় সংলাপ, বসন্ত বরণ ও ব্যক্তিগত শোক', estimatedHours: 2, isCompleted: false }
            ]
          },
          {
            id: 'bng-1-10',
            chapterNumber: 10,
            title: 'ফেব্রুয়ারি ১৯৬৯ (কবিতা - শামসুর রাহমান)',
            englishTitle: 'February 1969',
            difficulty: 'Medium',
            importance: 'Important',
            totalTopics: 2,
            status: 'not_started',
            cqSolvedCount: 0,
            mcqSolvedCount: 0,
            masteryPercentage: 0,
            topics: [
              { id: 'bng-1-10-t1', title: 'ঊনসত্তরের গণঅভ্যুত্থান ও বরকত-সালামের আত্মত্যাগ', estimatedHours: 2, isCompleted: false }
            ]
          },
          {
            id: 'bng-1-11',
            chapterNumber: 11,
            title: 'লালসালু (উপন্যাস - সৈয়দ ওয়ালীউল্লাহ)',
            englishTitle: 'Lalsalu (Novel)',
            difficulty: 'Hard',
            importance: 'Most Important (3-Star)',
            totalTopics: 5,
            status: 'not_started',
            cqSolvedCount: 0,
            mcqSolvedCount: 0,
            masteryPercentage: 0,
            topics: [
              { id: 'bng-1-11-t1', title: 'মজিদ ও ধর্মব্যবসার পটভূমি', estimatedHours: 3, isCompleted: false },
              { id: 'bng-1-11-t2', title: 'রহিমা ও জমিলা চরিত্র দ্বৈততা', estimatedHours: 3, isCompleted: false },
              { id: 'bng-1-11-t3', title: 'লালসালু উপন্যাস সমগ্র CQ ও চরিত্র ব্যাখ্যা', estimatedHours: 3.5, isCompleted: false }
            ]
          },
          {
            id: 'bng-1-12',
            chapterNumber: 12,
            title: 'সিরাজউদ্দৌলা (নাটক - সিকান্দার আবু জাফর)',
            englishTitle: 'Sirajuddaula (Drama)',
            difficulty: 'Hard',
            importance: 'Most Important (3-Star)',
            totalTopics: 5,
            status: 'not_started',
            cqSolvedCount: 0,
            mcqSolvedCount: 0,
            masteryPercentage: 0,
            topics: [
              { id: 'bng-1-12-t1', title: 'অঙ্ক ১ ও ২: নবাবের দরবার ও পলাশী চক্রান্ত', estimatedHours: 3, isCompleted: false },
              { id: 'bng-1-12-t2', title: 'মীর জাফর, ঘসেটি বেগম ও ক্লাইভের ভূমিকা', estimatedHours: 3, isCompleted: false },
              { id: 'bng-1-12-t3', title: 'পলাশীর ট্র্যাজেডি ও নবাবের দেশপ্রেম', estimatedHours: 3, isCompleted: false }
            ]
          }
        ]
      },
      {
        id: 'bng-2',
        paperNumber: 2,
        title: 'বাংলা ২য় পত্র (ব্যাকরণ ও নির্মিতি)',
        chapters: [
          {
            id: 'bng-2-1',
            chapterNumber: 1,
            title: 'বাংলা উচ্চারণের নিয়ম',
            englishTitle: 'Pronunciation Rules',
            difficulty: 'Medium',
            importance: 'Most Important (3-Star)',
            totalTopics: 4,
            status: 'not_started',
            cqSolvedCount: 0,
            mcqSolvedCount: 0,
            masteryPercentage: 0,
            topics: [
              { id: 'bng-2-1-t1', title: 'অ-ধ্বনির সংবৃত ও বিবৃত উচ্চারণ', estimatedHours: 2, isCompleted: false },
              { id: 'bng-2-1-t2', title: 'এ-ধ্বনি, ব-ফলা ও ম-ফলার উচ্চারণ', estimatedHours: 2.5, isCompleted: false }
            ]
          },
          {
            id: 'bng-2-2',
            chapterNumber: 2,
            title: 'বাংলা বানানের নিয়ম ও ণ-ত্ব/ষ-ত্ব বিধান',
            englishTitle: 'Spelling Rules',
            difficulty: 'Medium',
            importance: 'Most Important (3-Star)',
            totalTopics: 4,
            status: 'not_started',
            cqSolvedCount: 0,
            mcqSolvedCount: 0,
            masteryPercentage: 0,
            topics: [
              { id: 'bng-2-2-t1', title: 'বাংলা একাডেমি প্রমিত বানানের নিয়ম', estimatedHours: 2.5, isCompleted: false },
              { id: 'bng-2-2-t2', title: 'ণ-ত্ব ও ষ-ত্ব বিধানের ৫টি নিয়ম', estimatedHours: 2, isCompleted: false }
            ]
          },
          {
            id: 'bng-2-3',
            chapterNumber: 3,
            title: 'ব্যাকরণিক শব্দশ্রেণি',
            englishTitle: 'Grammatical Word Classes',
            difficulty: 'Medium',
            importance: 'Most Important (3-Star)',
            totalTopics: 4,
            status: 'not_started',
            cqSolvedCount: 0,
            mcqSolvedCount: 0,
            masteryPercentage: 0,
            topics: [
              { id: 'bng-2-3-t1', title: 'বিশেষ্য, বিশেষণ ও ক্রিয়াপদের শ্রেণিবিভাগ', estimatedHours: 2.5, isCompleted: false },
              { id: 'bng-2-3-t2', title: 'যোজক, আবেগ ও অনুসর্গ নির্ণয়', estimatedHours: 2, isCompleted: false }
            ]
          },
          {
            id: 'bng-2-4',
            chapterNumber: 4,
            title: 'শব্দ গঠন: উপসর্গ, প্রত্যয় ও সমাস',
            englishTitle: 'Word Formation: Affixes & Compounds',
            difficulty: 'Hard',
            importance: 'Most Important (3-Star)',
            totalTopics: 5,
            status: 'not_started',
            cqSolvedCount: 0,
            mcqSolvedCount: 0,
            masteryPercentage: 0,
            topics: [
              { id: 'bng-2-4-t1', title: 'উপসর্গের অর্থবাচকতা ও অর্থদ্যোতকতা', estimatedHours: 2, isCompleted: false },
              { id: 'bng-2-4-t2', title: 'দ্বন্দ্ব, কর্মধারয়, তৎপুরুষ, বহুব্রীহি ও দ্বিগু সমাস ব্যাসবাক্যসহ', estimatedHours: 4, isCompleted: false },
              { id: 'bng-2-4-t3', title: 'কৃৎ প্রত্যয় ও তদ্ধিত প্রত্যয়', estimatedHours: 2.5, isCompleted: false }
            ]
          },
          {
            id: 'bng-2-5',
            chapterNumber: 5,
            title: 'বাক্যতত্ত্ব ও বাক্য রূপান্তর',
            englishTitle: 'Syntax & Sentence Transformation',
            difficulty: 'Medium',
            importance: 'Most Important (3-Star)',
            totalTopics: 3,
            status: 'not_started',
            cqSolvedCount: 0,
            mcqSolvedCount: 0,
            masteryPercentage: 0,
            topics: [
              { id: 'bng-2-5-t1', title: 'একটি সার্থক বাক্যের তিনটি গুণ (আকাঙ্ক্ষা, আসত্তি, যোগ্যতা)', estimatedHours: 2, isCompleted: false },
              { id: 'bng-2-5-t2', title: 'সরল, জটিল ও যৌগিক বাক্য রূপান্তর', estimatedHours: 3, isCompleted: false }
            ]
          },
          {
            id: 'bng-2-6',
            chapterNumber: 6,
            title: 'বাংলা ভাষার অপপ্রয়োগ ও শুদ্ধ প্রয়োগ',
            englishTitle: 'Error Correction in Bangla',
            difficulty: 'Medium',
            importance: 'Most Important (3-Star)',
            totalTopics: 3,
            status: 'not_started',
            cqSolvedCount: 0,
            mcqSolvedCount: 0,
            masteryPercentage: 0,
            topics: [
              { id: 'bng-2-6-t1', title: 'বাক্যে সাধারণ অপপ্রয়োগ সংশোধন অনুশীলন', estimatedHours: 3, isCompleted: false }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'eng',
    name: 'ইংরেজি (English)',
    code: '107',
    isCompulsory: true,
    color: '#0284c7',
    completedChapters: 0,
    totalChapters: 20,
    papers: [
      {
        id: 'eng-1',
        paperNumber: 1,
        title: 'English 1st Paper',
        chapters: [
          {
            id: 'eng-1-1',
            chapterNumber: 1,
            title: 'Unit 1: People or Personalities (Nelson Mandela, Kuakata, etc.)',
            englishTitle: 'Unit 1: Personalities',
            difficulty: 'Medium',
            importance: 'Most Important (3-Star)',
            totalTopics: 4,
            status: 'not_started',
            cqSolvedCount: 0,
            mcqSolvedCount: 0,
            masteryPercentage: 0,
            topics: [
              { id: 'eng-1-1-t1', title: 'Nelson Mandela: An Apartheid Fighter (Passage + MCQ)', estimatedHours: 2.5, isCompleted: false },
              { id: 'eng-1-1-t2', title: 'The Unbeaten Girls & Great Personalities', estimatedHours: 2.5, isCompleted: false }
            ]
          },
          {
            id: 'eng-1-2',
            chapterNumber: 2,
            title: 'Unit 2: Dreams and Adolescence',
            englishTitle: 'Unit 2: Dreams',
            difficulty: 'Easy',
            importance: 'Important',
            totalTopics: 3,
            status: 'not_started',
            cqSolvedCount: 0,
            mcqSolvedCount: 0,
            masteryPercentage: 0,
            topics: [
              { id: 'eng-1-2-t1', title: 'What is a Dream? & I Have a Dream (MLK Jr.)', estimatedHours: 2.5, isCompleted: false }
            ]
          },
          {
            id: 'eng-1-3',
            chapterNumber: 3,
            title: 'Unit 3: Myths and Literature',
            englishTitle: 'Unit 3: Myths',
            difficulty: 'Medium',
            importance: 'Important',
            totalTopics: 3,
            status: 'not_started',
            cqSolvedCount: 0,
            mcqSolvedCount: 0,
            masteryPercentage: 0,
            topics: [
              { id: 'eng-1-3-t1', title: 'Icarus & The Legend of Gazi', estimatedHours: 2, isCompleted: false }
            ]
          },
          {
            id: 'eng-1-4',
            chapterNumber: 4,
            title: 'Summary & Theme Writing Techniques',
            englishTitle: 'Summary & Theme',
            difficulty: 'Medium',
            importance: 'Most Important (3-Star)',
            totalTopics: 3,
            status: 'not_started',
            cqSolvedCount: 0,
            mcqSolvedCount: 0,
            masteryPercentage: 0,
            topics: [
              { id: 'eng-1-4-t1', title: 'Summary Writing within 5 sentences rule', estimatedHours: 2.5, isCompleted: false },
              { id: 'eng-1-4-t2', title: 'Poem Theme Writing Framework & Practice', estimatedHours: 2.5, isCompleted: false }
            ]
          },
          {
            id: 'eng-1-5',
            chapterNumber: 5,
            title: 'Flow Chart & Information Transfer',
            englishTitle: 'Flow Chart',
            difficulty: 'Medium',
            importance: 'Most Important (3-Star)',
            totalTopics: 3,
            status: 'not_started',
            cqSolvedCount: 0,
            mcqSolvedCount: 0,
            masteryPercentage: 0,
            topics: [
              { id: 'eng-1-5-t1', title: 'Flow Chart Box Formatting & Verb-ing Rules', estimatedHours: 2.5, isCompleted: false }
            ]
          },
          {
            id: 'eng-1-6',
            chapterNumber: 6,
            title: 'Writing: Graph & Chart Interpretation',
            englishTitle: 'Graph & Chart',
            difficulty: 'Medium',
            importance: 'Most Important (3-Star)',
            totalTopics: 3,
            status: 'not_started',
            cqSolvedCount: 0,
            mcqSolvedCount: 0,
            masteryPercentage: 0,
            topics: [
              { id: 'eng-1-6-t1', title: 'Describing Trends, Percentages & Data Comparison', estimatedHours: 3, isCompleted: false }
            ]
          }
        ]
      },
      {
        id: 'eng-2',
        paperNumber: 2,
        title: 'English 2nd Paper (Grammar & Composition)',
        chapters: [
          {
            id: 'eng-2-1',
            chapterNumber: 1,
            title: 'Prepositions',
            englishTitle: 'Prepositions',
            difficulty: 'Medium',
            importance: 'Most Important (3-Star)',
            totalTopics: 4,
            status: 'not_started',
            cqSolvedCount: 0,
            mcqSolvedCount: 0,
            masteryPercentage: 0,
            topics: [
              { id: 'eng-2-1-t1', title: 'Appropriate Prepositions 150 Most Frequent List', estimatedHours: 3.5, isCompleted: false },
              { id: 'eng-2-1-t2', title: 'Board Question Cloze Test Practice', estimatedHours: 3, isCompleted: false }
            ]
          },
          {
            id: 'eng-2-2',
            chapterNumber: 2,
            title: 'Special Phrases & Words (was born, have to, would rather, as if)',
            englishTitle: 'Special Phrases',
            difficulty: 'Easy',
            importance: 'Important',
            totalTopics: 3,
            status: 'not_started',
            cqSolvedCount: 0,
            mcqSolvedCount: 0,
            masteryPercentage: 0,
            topics: [
              { id: 'eng-2-2-t1', title: '10 Core Special Clue Usage Rules & Practice', estimatedHours: 2.5, isCompleted: false }
            ]
          },
          {
            id: 'eng-2-3',
            chapterNumber: 3,
            title: 'Completing Sentences (Conditionals, So that, Lest, It is time)',
            englishTitle: 'Completing Sentences',
            difficulty: 'Medium',
            importance: 'Most Important (3-Star)',
            totalTopics: 4,
            status: 'not_started',
            cqSolvedCount: 0,
            mcqSolvedCount: 0,
            masteryPercentage: 0,
            topics: [
              { id: 'eng-2-3-t1', title: 'Conditional 1st, 2nd, 3rd & Clauses rules', estimatedHours: 3, isCompleted: false }
            ]
          },
          {
            id: 'eng-2-4',
            chapterNumber: 4,
            title: 'Right Form of Verbs',
            englishTitle: 'Right Form of Verbs',
            difficulty: 'Hard',
            importance: 'Most Important (3-Star)',
            totalTopics: 5,
            status: 'not_started',
            cqSolvedCount: 0,
            mcqSolvedCount: 0,
            masteryPercentage: 0,
            topics: [
              { id: 'eng-2-4-t1', title: 'Subject-Verb Agreement Master Rules', estimatedHours: 3, isCompleted: false },
              { id: 'eng-2-4-t2', title: 'Tense, Passive & Gerund/Participle Rules', estimatedHours: 3.5, isCompleted: false }
            ]
          },
          {
            id: 'eng-2-5',
            chapterNumber: 5,
            title: 'Narrative Style (Direct to Indirect Speech)',
            englishTitle: 'Passage Narration',
            difficulty: 'Hard',
            importance: 'Most Important (3-Star)',
            totalTopics: 4,
            status: 'not_started',
            cqSolvedCount: 0,
            mcqSolvedCount: 0,
            masteryPercentage: 0,
            topics: [
              { id: 'eng-2-5-t1', title: 'Passage Narration Conversion Rules', estimatedHours: 3.5, isCompleted: false }
            ]
          },
          {
            id: 'eng-2-6',
            chapterNumber: 6,
            title: 'Modifiers (Pre-modifiers & Post-modifiers)',
            englishTitle: 'Modifiers',
            difficulty: 'Hard',
            importance: 'Most Important (3-Star)',
            totalTopics: 4,
            status: 'not_started',
            cqSolvedCount: 0,
            mcqSolvedCount: 0,
            masteryPercentage: 0,
            topics: [
              { id: 'eng-2-6-t1', title: 'Intensifiers, Participles, Appositives & Infinitives', estimatedHours: 3.5, isCompleted: false }
            ]
          },
          {
            id: 'eng-2-7',
            chapterNumber: 7,
            title: 'Sentence Connectors & Linkers',
            englishTitle: 'Sentence Connectors',
            difficulty: 'Medium',
            importance: 'Important',
            totalTopics: 3,
            status: 'not_started',
            cqSolvedCount: 0,
            mcqSolvedCount: 0,
            masteryPercentage: 0,
            topics: [
              { id: 'eng-2-7-t1', title: 'Cause-effect, Contrast, Sequence connectors', estimatedHours: 2.5, isCompleted: false }
            ]
          },
          {
            id: 'eng-2-8',
            chapterNumber: 8,
            title: 'Synonym and Antonym',
            englishTitle: 'Synonym and Antonym',
            difficulty: 'Medium',
            importance: 'Important',
            totalTopics: 3,
            status: 'not_started',
            cqSolvedCount: 0,
            mcqSolvedCount: 0,
            masteryPercentage: 0,
            topics: [
              { id: 'eng-2-8-t1', title: 'Contextual Meaning & Board Vocabulary list', estimatedHours: 3, isCompleted: false }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'ict',
    name: 'তথ্য ও যোগাযোগ প্রযুক্তি (ICT)',
    code: '275',
    isCompulsory: true,
    color: '#eab308',
    completedChapters: 0,
    totalChapters: 6,
    papers: [
      {
        id: 'ict-1',
        paperNumber: 1,
        title: 'তথ্য ও যোগাযোগ প্রযুক্তি (পূর্ণাঙ্গ)',
        chapters: [
          {
            id: 'ict-1-1',
            chapterNumber: 1,
            title: 'বিশ্ব ও বাংলাদেশ প্রেক্ষিত',
            englishTitle: 'World & Bangladesh Perspective',
            difficulty: 'Easy',
            importance: 'Important',
            totalTopics: 4,
            status: 'not_started',
            cqSolvedCount: 0,
            mcqSolvedCount: 0,
            masteryPercentage: 0,
            topics: [
              { id: 'ict-1-1-t1', title: 'ভার্চুয়াল রিয়েলিটি, কৃত্রিম বুদ্ধিমত্তা ও রোবোটিক্স', estimatedHours: 2, isCompleted: false },
              { id: 'ict-1-1-t2', title: 'বায়োমেট্রিক্স, বায়োইনফরমেটিক্স ও জেনেটিক ইঞ্জিনিয়ারিং', estimatedHours: 2.5, isCompleted: false }
            ]
          },
          {
            id: 'ict-1-2',
            chapterNumber: 2,
            title: 'কমিউনিকেশন সিস্টেমস ও নেটওয়ার্কিং',
            englishTitle: 'Communication Systems & Networking',
            difficulty: 'Medium',
            importance: 'Important',
            totalTopics: 5,
            status: 'not_started',
            cqSolvedCount: 0,
            mcqSolvedCount: 0,
            masteryPercentage: 0,
            topics: [
              { id: 'ict-1-2-t1', title: 'ডেটা ট্রান্সমিশন মোড ও মাধ্যম (অপটিক্যাল ফাইবার, মাইক্রোওয়েভ)', estimatedHours: 2.5, isCompleted: false },
              { id: 'ict-1-2-t2', title: 'ওয়্যারলেস কমিউনিকেশন (Bluetooth, Wi-Fi, WiMAX) ও নেটওয়ার্ক টপোলজি', estimatedHours: 3, isCompleted: false }
            ]
          },
          {
            id: 'ict-1-3',
            chapterNumber: 3,
            title: 'সংখ্যা পদ্ধতি ও ডিজিটাল ডিভাইস',
            englishTitle: 'Number Systems & Digital Devices',
            difficulty: 'Hard',
            importance: 'Most Important (3-Star)',
            totalTopics: 7,
            status: 'not_started',
            cqSolvedCount: 0,
            mcqSolvedCount: 0,
            masteryPercentage: 0,
            topics: [
              { id: 'ict-1-3-t1', title: 'বাইনারি, অক্টাল, দশমিক ও হেক্সাডেসিমেল রূপান্তর', estimatedHours: 3.5, isCompleted: false },
              { id: 'ict-1-3-t2', title: '২-এর পরিপূরক (2\'s Complement) যোগ ও বিয়োগ', estimatedHours: 3.5, isCompleted: false },
              { id: 'ict-1-3-t3', title: 'বুলিয়ান অ্যালজেবরা ও ডিমরগ্যানের সূত্র', estimatedHours: 3, isCompleted: false },
              { id: 'ict-1-3-t4', title: 'লজিক গেট (মৌলিক ও সার্বজনীন গেট NOR/NAND বাস্তবায়ন)', estimatedHours: 4, isCompleted: false },
              { id: 'ict-1-3-t5', title: 'এনকোডার, ডিকোডার, অ্যাডার ও ফ্লিপ-ফ্লপ', estimatedHours: 3.5, isCompleted: false }
            ]
          },
          {
            id: 'ict-1-4',
            chapterNumber: 4,
            title: 'ওয়েব ডিজাইন পরিচিতি এবং HTML',
            englishTitle: 'Web Design & HTML',
            difficulty: 'Medium',
            importance: 'Most Important (3-Star)',
            totalTopics: 5,
            status: 'not_started',
            cqSolvedCount: 0,
            mcqSolvedCount: 0,
            masteryPercentage: 0,
            topics: [
              { id: 'ict-1-4-t1', title: 'ওয়েবসাইটের কাঠামো (লিনিয়ার, হায়ারার্কিকাল, নেটওয়ার্ক)', estimatedHours: 2, isCompleted: false },
              { id: 'ict-1-4-t2', title: 'HTML মৌলিক ট্যাগ, টেক্সট ফরম্যাটিং ও লিংক (Hyperlink)', estimatedHours: 2.5, isCompleted: false },
              { id: 'ict-1-4-t3', title: 'HTML টেবিল তৈরি (colspan, rowspan) ও ইমেজ যুক্তকরণ', estimatedHours: 3.5, isCompleted: false }
            ]
          },
          {
            id: 'ict-1-5',
            chapterNumber: 5,
            title: 'প্রোগ্রামিং ভাষা (C Programming)',
            englishTitle: 'Programming in C',
            difficulty: 'Hard',
            importance: 'Most Important (3-Star)',
            totalTopics: 7,
            status: 'not_started',
            cqSolvedCount: 0,
            mcqSolvedCount: 0,
            masteryPercentage: 0,
            topics: [
              { id: 'ict-1-5-t1', title: 'অ্যালগরিদম ও ফ্লোচার্ট অঙ্কন', estimatedHours: 3, isCompleted: false },
              { id: 'ict-1-5-t2', title: 'ডেটা টাইপ, ইনপুট-আউটপুট (scanf, printf)', estimatedHours: 2.5, isCompleted: false },
              { id: 'ict-1-5-t3', title: 'কন্ডিশনাল স্টেটমেন্ট (if, else if, switch)', estimatedHours: 3.5, isCompleted: false },
              { id: 'ict-1-5-t4', title: 'লুপ স্টেটমেন্ট (for, while, do-while)', estimatedHours: 4, isCompleted: false },
              { id: 'ict-1-5-t5', title: 'অ্যারে (Array) ও ফাংশন', estimatedHours: 3.5, isCompleted: false }
            ]
          },
          {
            id: 'ict-1-6',
            chapterNumber: 6,
            title: 'ডেটাবেজ ম্যানেজমেন্ট সিস্টেম (DBMS)',
            englishTitle: 'Database Management System',
            difficulty: 'Medium',
            importance: 'Important',
            totalTopics: 5,
            status: 'not_started',
            cqSolvedCount: 0,
            mcqSolvedCount: 0,
            masteryPercentage: 0,
            topics: [
              { id: 'ict-1-6-t1', title: 'ফিল্ড, রেকর্ড, প্রাইমারি কি ও ফরেন কি', estimatedHours: 2.5, isCompleted: false },
              { id: 'ict-1-6-t2', title: 'ডেটাবেজ রিলেশনশিপ (1:1, 1:N, N:M)', estimatedHours: 2.5, isCompleted: false },
              { id: 'ict-1-6-t3', title: 'SQL কোয়েরি (SELECT, INSERT, UPDATE, DELETE)', estimatedHours: 3.5, isCompleted: false }
            ]
          }
        ]
      }
    ]
  }
];

export const humanitiesSubjects: Subject[] = [
  {
    id: 'civics',
    name: 'পৌরনীতি ও সুশাসন (Civics & Good Governance)',
    code: '269',
    isCompulsory: false,
    color: '#06b6d4',
    completedChapters: 0,
    totalChapters: 20,
    papers: [
      {
        id: 'civ-1',
        paperNumber: 1,
        title: 'পৌরনীতি ও সুশাসন ১ম পত্র',
        chapters: [
          {
            id: 'civ-1-1',
            chapterNumber: 1,
            title: 'পৌরনীতি ও সুশাসন পরিচিতি',
            difficulty: 'Easy',
            importance: 'Important',
            totalTopics: 3,
            status: 'not_started',
            cqSolvedCount: 0,
            mcqSolvedCount: 0,
            masteryPercentage: 0,
            topics: [{ id: 'civ-1-1-t1', title: 'পৌরনীতির ধারণা ও পরিধি', estimatedHours: 2, isCompleted: false }]
          }
        ]
      }
    ]
  },
  {
    id: 'econ',
    name: 'অর্থনীতি (Economics)',
    code: '109',
    isCompulsory: false,
    color: '#f59e0b',
    completedChapters: 0,
    totalChapters: 20,
    papers: [
      {
        id: 'econ-1',
        paperNumber: 1,
        title: 'অর্থনীতি ১ম পত্র',
        chapters: [
          {
            id: 'econ-1-1',
            chapterNumber: 1,
            title: 'মৌলিক অর্থনৈতিক সমস্যা এবং সমাধান',
            difficulty: 'Medium',
            importance: 'Most Important (3-Star)',
            totalTopics: 4,
            status: 'not_started',
            cqSolvedCount: 0,
            mcqSolvedCount: 0,
            masteryPercentage: 0,
            topics: [{ id: 'econ-1-1-t1', title: 'দুষ্প্রাপ্যতা ও অসীম অভাব', estimatedHours: 2, isCompleted: false }]
          }
        ]
      }
    ]
  }
];

export const businessSubjects: Subject[] = [
  {
    id: 'acc',
    name: 'হিসাববিজ্ঞান (Accounting)',
    code: '253',
    isCompulsory: false,
    color: '#10b981',
    completedChapters: 0,
    totalChapters: 18,
    papers: [
      {
        id: 'acc-1',
        paperNumber: 1,
        title: 'হিসাববিজ্ঞান ১ম পত্র',
        chapters: [
          {
            id: 'acc-1-1',
            chapterNumber: 1,
            title: 'হিসাববিজ্ঞান পরিচিতি ও হিসাব সমীকরণ',
            difficulty: 'Medium',
            importance: 'Most Important (3-Star)',
            totalTopics: 4,
            status: 'not_started',
            cqSolvedCount: 0,
            mcqSolvedCount: 0,
            masteryPercentage: 0,
            topics: [{ id: 'acc-1-1-t1', title: 'লেনদেন চিহ্নিতকরণ ও A=L+OE প্রভাব', estimatedHours: 3, isCompleted: false }]
          }
        ]
      }
    ]
  },
  {
    id: 'mgmt',
    name: 'ব্যবসায় সংগঠন ও ব্যবস্থাপনা (Business Org & Mgmt)',
    code: '277',
    isCompulsory: false,
    color: '#6366f1',
    completedChapters: 0,
    totalChapters: 24,
    papers: [
      {
        id: 'mgmt-1',
        paperNumber: 1,
        title: 'ব্যবসায় সংগঠন ১ম পত্র',
        chapters: [
          {
            id: 'mgmt-1-1',
            chapterNumber: 1,
            title: 'ব্যবসায়ের মৌলিক ধারণা',
            difficulty: 'Easy',
            importance: 'Important',
            totalTopics: 3,
            status: 'not_started',
            cqSolvedCount: 0,
            mcqSolvedCount: 0,
            masteryPercentage: 0,
            topics: [{ id: 'mgmt-1-1-t1', title: 'ব্যবসায়ের বৈশিষ্ট্য ও আওতা', estimatedHours: 2, isCompleted: false }]
          }
        ]
      }
    ]
  }
];

export const getSubjectsByGroup = (group: HSCGroup): Subject[] => {
  const common = scienceSubjects.filter(s => s.isCompulsory); // Bangla, English, ICT
  if (group === 'Science') {
    return scienceSubjects;
  } else if (group === 'Humanities') {
    return [...common, ...humanitiesSubjects];
  } else {
    return [...common, ...businessSubjects];
  }
};
