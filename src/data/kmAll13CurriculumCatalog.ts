// K&M Blueprint — Official NCTB Bangladesh HSC 13-Subject Curriculum Catalog
// Covering all 13 core papers for HSC Science group

export interface OfficialCurriculumPaperInfo {
  subjectId: string;
  subjectName: string;
  englishSubjectName: string;
  code: string;
  paperNumber: 1 | 2;
  paperTitle: string;
  totalOfficialChapters: number;
  officialChapters: {
    chapterNumber: number;
    title: string;
    englishTitle: string;
    coreConcepts: string[];
    importance: 'Most Important (3-Star)' | 'High Priority' | 'Standard';
  }[];
}

export const nctb13SubjectMasterCatalog: OfficialCurriculumPaperInfo[] = [
  // 1. বাংলা ১ম পত্র (Code: 101)
  {
    subjectId: 'ban',
    subjectName: 'বাংলা',
    englishSubjectName: 'Bangla',
    code: '101',
    paperNumber: 1,
    paperTitle: 'বাংলা ১ম পত্র (সাহিত্য পাঠ ও সহপাঠ)',
    totalOfficialChapters: 24,
    officialChapters: [
      // গদ্য (১২টি)
      { chapterNumber: 1, title: 'বাঙ্গালার নব্য লেখকদিগের প্রতি নিবেদন — বঙ্কিমচন্দ্র চট্টোপাধ্যায়', englishTitle: 'Banglar Nobyo Lekhokder Proti Nibedon', coreConcepts: ['সত্যের উপাসনা', 'নিষ্কাম সাহিত্যসাধনা', 'অলংকার বর্জন'], importance: 'High Priority' },
      { chapterNumber: 2, title: 'অপরিচিতা — রবীন্দ্রনাথ ঠাকুর', englishTitle: 'Oporichita', coreConcepts: ['যৌতুকবিরোধী চেতনা', 'কল্যাণীর ব্যক্তিত্ব', 'অনুপমের মনস্তত্ত্ব'], importance: 'Most Important (3-Star)' },
      { chapterNumber: 3, title: 'বিলাসী — শরৎচন্দ্র চট্টোপাধ্যায়', englishTitle: 'Bilashi', coreConcepts: ['বর্ণবৈষম্য', 'অকৃত্রিম মানবপ্রেম', 'বিলাসীর আত্মোৎসর্গ'], importance: 'Most Important (3-Star)' },
      { chapterNumber: 4, title: 'গৃহ — রোকেয়া সাখাওয়াত হোসেন', englishTitle: 'Griho', coreConcepts: ['নারীর গৃহহীনতা', 'অধিকার প্রতিষ্ঠা', 'স্বাবলম্বিতা'], importance: 'High Priority' },
      { chapterNumber: 5, title: 'আহ্বান — বিভূতিভূষণ বন্দ্যোপাধ্যায়', englishTitle: 'Ahoban', coreConcepts: ['অনাবিল মাতৃস্নেহ', 'অসাম্প্রদায়িক চেতনা', 'মানবিক সম্পর্ক'], importance: 'High Priority' },
      { chapterNumber: 6, title: 'আমার পথ — কাজী নজরুল ইসলাম', englishTitle: 'Amar Poth', coreConcepts: ['আত্মবিশ্বাস', 'সত্যের স্বরূপ', 'ভণ্ডামিবিরোধিতা'], importance: 'Most Important (3-Star)' },
      { chapterNumber: 7, title: 'মানব-কল্যাণ — আবুল ফজল', englishTitle: 'Manob Kalyan', coreConcepts: ['প্রকৃত মানবকল্যাণ', 'আত্মমর্যাদা', 'মানবসম্ভাবনার বিকাশ'], importance: 'High Priority' },
      { chapterNumber: 8, title: 'মাসি-পিসি — মানিক বন্দ্যোপাধ্যায়', englishTitle: 'Mashi-Pishi', coreConcepts: ['নারীর যৌথ প্রতিরোধ', 'দারিদ্র্যের বিরুদ্ধে সংগ্রাম', 'পিতৃতন্ত্রের প্রতিঘাত'], importance: 'Most Important (3-Star)' },
      { chapterNumber: 9, title: 'বায়ান্নর দিনগুলো — শেখ মুজিবুর রহমান', englishTitle: 'Bayannor Dingulo', coreConcepts: ['ভাষা আন্দোলন', 'অনশন ধর্মঘট', 'বঙ্গবন্ধুর রাজনৈতিক ত্যাগ'], importance: 'Most Important (3-Star)' },
      { chapterNumber: 10, title: 'রেইনকোট — আখতারুজ্জামান ইলিয়াস', englishTitle: 'Raincoat', coreConcepts: ['মুক্তিযুদ্ধের চেতনা', 'নুরুল হুদার মানসিক রূপান্তর', 'গেরিলা যুদ্ধ'], importance: 'Most Important (3-Star)' },
      { chapterNumber: 11, title: 'মহাজাগতিক কিউরেটর — মুহম্মদ জাফর ইকবাল', englishTitle: 'Mohajagotik Curator', coreConcepts: ['পরিবেশ চেতনা', 'মানুষের আত্মঘাতী রূপ', 'পিঁপড়ার সুশৃঙ্খল সমাজ'], importance: 'High Priority' },
      { chapterNumber: 12, title: 'নেকলেস — গী দ্য মোপাসাঁ', englishTitle: 'The Necklace', coreConcepts: ['অবাস্তব মোহ ও অহমিকা', 'দশ বছরের আত্মত্যাগ', 'মর্মান্তিক ট্র্যাজেডি'], importance: 'Most Important (3-Star)' },

      // পদ্য (১২টি)
      { chapterNumber: 13, title: 'বিভীষণের প্রতি মেঘনাদ — মাইকেল মধুসূদন দত্ত', englishTitle: 'Bibhishoner Proti Meghnad', coreConcepts: ['স্বদেশপ্রেম', 'বিশ্বাসঘাতকতার ধিক্কার', 'বীররস ও অমিত্রাক্ষর ছন্দ'], importance: 'Most Important (3-Star)' },
      { chapterNumber: 14, title: 'সোনার তরী — রবীন্দ্রনাথ ঠাকুর', englishTitle: 'Sonar Tori', coreConcepts: ['সৃষ্টির অবিনশ্বরতা', 'মহাকালের দর্শন', 'স্রষ্টার নশ্বরতা'], importance: 'Most Important (3-Star)' },
      { chapterNumber: 15, title: 'বিদ্রোহী — কাজী নজরুল ইসলাম', englishTitle: 'Bidrohi', coreConcepts: ['পরাধীনতার শৃঙ্খল ভাঙা', 'পৌরাণিক রূপক', 'চির উন্নত শির'], importance: 'Most Important (3-Star)' },
      { chapterNumber: 16, title: 'প্রতিদান — জসীমউদ্দীন', englishTitle: 'Protidan', coreConcepts: ['ক্ষমা ও অহিংসা', 'শত্রুর প্রতি ভালোবাসা', 'পরোপকার'], importance: 'High Priority' },
      { chapterNumber: 17, title: 'সুচেতনা — জীবনানন্দ দাশ', englishTitle: 'Suchetana', coreConcepts: ['ইতিহাস-চেতনা', 'সুচেতনার পৃথিবী', 'যুদ্ধোত্তর সংকটের উত্তরণ'], importance: 'High Priority' },
      { chapterNumber: 18, title: 'তাহারেই পড়ে মনে — সুফিয়া কামাল', englishTitle: 'Taharei Pore Mone', coreConcepts: ['বসন্ত বন্দনা', 'ব্যক্তিগত বিষাদ', 'নাট্যধর্মী সংলাপ'], importance: 'Most Important (3-Star)' },
      { chapterNumber: 19, title: 'পদ্মা — ফররুখ আহমদ', englishTitle: 'Padma', coreConcepts: ['বিধ্বংসী রূপ বনাম প্রাণসঞ্চার', 'সংগ্রামী চেতনা', 'বাংলার জীবনধারা'], importance: 'High Priority' },
      { chapterNumber: 20, title: 'আঠারো বছর বয়স — সুকান্ত ভট্টাচার্য', englishTitle: 'Atharo Bochor Boyosh', coreConcepts: ['তারুণ্যের অদম্য সাহস', 'বিপ্লবের স্পর্ধা', 'আত্মোৎসর্গ'], importance: 'Most Important (3-Star)' },
      { chapterNumber: 21, title: 'ফেব্রুয়ারি ১৯৬৯ — শামসুর রাহমান', englishTitle: 'February 1969', coreConcepts: ['গণঅভ্যুত্থান', 'একুশের অবিনাশী চেতনা', 'আসাদের রক্তমাখা শার্ট'], importance: 'Most Important (3-Star)' },
      { chapterNumber: 22, title: 'আমি কিংবদন্তির কথা বলছি — আবু জাফর ওবায়দুল্লাহ', englishTitle: 'Ami Kingbodontir Kotha Bolchi', coreConcepts: ['পূর্বপুরুষের লড়াই', 'শ্রম ও ঐতিহ্য', 'মুক্তির কবিতা'], importance: 'High Priority' },
      { chapterNumber: 23, title: 'নূরলদীনের কথা মনে পড়ে যায় — সৈয়দ শামসুল হক', englishTitle: 'Nuruldeener Kotha Mone Pore Jay', coreConcepts: ['কৃষক বিদ্রোহ', 'জাগো বাহে স্লোগান', 'মুক্তিযুদ্ধ ও প্রতিরোধ'], importance: 'Most Important (3-Star)' },
      { chapterNumber: 24, title: 'ছবি — আবু হেনা মোস্তফা কামাল', englishTitle: 'Chhobi', coreConcepts: ['শহীদের রক্তঋণ', 'স্বাধীনতার প্রকৃত মূল্য', 'সুবিধাবাদের বিরুদ্ধে শ্লেষ'], importance: 'High Priority' }
    ]
  },

  // 2. বাংলা ২য় পত্র (Code: 102)
  {
    subjectId: 'ban',
    subjectName: 'বাংলা',
    englishSubjectName: 'Bangla',
    code: '102',
    paperNumber: 2,
    paperTitle: 'বাংলা ২য় পত্র (ব্যাকরণ ও নির্মিতি)',
    totalOfficialChapters: 6,
    officialChapters: [
      { chapterNumber: 1, title: 'বাংলা উচ্চারণের নিয়মাবলী', englishTitle: 'Pronunciation Rules', coreConcepts: ['আদ্য-অ, অন্ত্য-অ', 'ব-ফলা ও য-ফলা', 'প্রমিত উচ্চারণ লিখন'], importance: 'Most Important (3-Star)' },
      { chapterNumber: 2, title: 'বাংলা বানানের নিয়ম (বাংলা একাডেমি)', englishTitle: 'Spelling Rules', coreConcepts: ['ণ-ত্ব ও ষ-ত্ব বিধান', 'অতৎসম শব্দের বানান', 'অশুদ্ধি সংশোধন'], importance: 'Most Important (3-Star)' },
      { chapterNumber: 3, title: 'ব্যাকরণিক শব্দশ্রেণি', englishTitle: 'Grammatical Word Classes', coreConcepts: ['বিশেষ্য, বিশেষণ, সর্বনাম', 'ক্রিয়া ও যোজক', 'শ্রেণি বিভাজন'], importance: 'Most Important (3-Star)' },
      { chapterNumber: 4, title: 'শব্দ গঠন: উপসর্গ, প্রত্যয় ও সমাস', englishTitle: 'Word Formation', coreConcepts: ['উপসর্গের অর্থবাচকতা', 'কৃৎ ও তদ্ধিত প্রত্যয়', 'সমাসের ব্যাসবাক্য'], importance: 'Most Important (3-Star)' },
      { chapterNumber: 5, title: 'বাক্যতত্ত্ব ও বাক্য রূপান্তর', englishTitle: 'Sentence Theory & Transformation', coreConcepts: ['গঠনগত ও অর্থগত বাক্য', 'সরল, জটিল, যৌগিক রূপান্তর'], importance: 'Most Important (3-Star)' },
      { chapterNumber: 6, title: 'নির্মিতি: পারিভাষিক শব্দ, প্রতিবেদন ও ভাবসম্প্রসারণ', englishTitle: 'Composition', coreConcepts: ['পারিভাষিক শব্দাবলী', 'প্রতিবেদন প্রণয়ন', 'আবেদনপত্র ও রচনা'], importance: 'High Priority' }
    ]
  },

  // 3. English 1st Paper (Code: 107)
  {
    subjectId: 'eng',
    subjectName: 'English',
    englishSubjectName: 'English',
    code: '107',
    paperNumber: 1,
    paperTitle: 'English 1st Paper (English For Today)',
    totalOfficialChapters: 8,
    officialChapters: [
      { chapterNumber: 1, title: 'People or Institutions Making History (Mandela & 7th March)', englishTitle: 'Making History', coreConcepts: ['Apartheid struggle', 'Historical 7th March Speech', 'Emancipation'], importance: 'Most Important (3-Star)' },
      { chapterNumber: 2, title: 'Dreams (Poems & Analysis)', englishTitle: 'Dreams', coreConcepts: ['Langston Hughes poem', 'Metaphorical interpretation', 'Themes'], importance: 'High Priority' },
      { chapterNumber: 3, title: 'Lifestyle & Health', englishTitle: 'Lifestyle and Health', coreConcepts: ['Adolescence challenges', 'Physical fitness', 'Mental health'], importance: 'High Priority' },
      { chapterNumber: 4, title: 'Human Relationships', englishTitle: 'Relationships', coreConcepts: ['Love and empathy', 'Family warmth', 'A Mother in Mannville'], importance: 'Most Important (3-Star)' },
      { chapterNumber: 5, title: 'Youth and Education', englishTitle: 'Youth & Education', coreConcepts: ['Civic engagement', 'Higher learning ideals', 'Critical thinking'], importance: 'High Priority' },
      { chapterNumber: 6, title: 'Art and Music', englishTitle: 'Art and Music', coreConcepts: ['Folk music heritage', 'Visual arts', 'Cultural identity'], importance: 'Standard' },
      { chapterNumber: 7, title: 'Environment and Nature', englishTitle: 'Environment', coreConcepts: ['Ecological balance', 'River erosion and conservation', 'Deforestation'], importance: 'High Priority' },
      { chapterNumber: 8, title: 'Tours and Travels', englishTitle: 'Tours & Travels', coreConcepts: ['Kuakata Daughter of Sea', 'Sundarbans', 'Eco-tourism'], importance: 'High Priority' }
    ]
  },

  // 4. English 2nd Paper (Code: 108)
  {
    subjectId: 'eng',
    subjectName: 'English',
    englishSubjectName: 'English',
    code: '108',
    paperNumber: 2,
    paperTitle: 'English 2nd Paper (Grammar & Composition)',
    totalOfficialChapters: 8,
    officialChapters: [
      { chapterNumber: 1, title: 'Modifiers (Pre-modifiers & Post-modifiers)', englishTitle: 'Modifiers', coreConcepts: ['Appositives', 'Participles', 'Infinitive phrases', 'Intensifiers'], importance: 'Most Important (3-Star)' },
      { chapterNumber: 2, title: 'Right Form of Verbs', englishTitle: 'Right Form of Verbs', coreConcepts: ['Subject-Verb Agreement', 'Conditionals', 'Passive forms', 'Subjunctive'], importance: 'Most Important (3-Star)' },
      { chapterNumber: 3, title: 'Use of Special Clues / Words', englishTitle: 'Special Words', coreConcepts: ['Was born', 'Have to', 'Would rather', 'As soon as', 'What if'], importance: 'Most Important (3-Star)' },
      { chapterNumber: 4, title: 'Completing Sentences with Clauses/Phrases', englishTitle: 'Completing Sentences', coreConcepts: ['Lest', 'So that', 'Provided that', 'It is high time'], importance: 'Most Important (3-Star)' },
      { chapterNumber: 5, title: 'Narration (Passage Speech)', englishTitle: 'Passage Narration', coreConcepts: ['Direct to Indirect conversion', 'Reporting dialogue', 'Tense shifts'], importance: 'Most Important (3-Star)' },
      { chapterNumber: 6, title: 'Sentence Connectors', englishTitle: 'Connectors', coreConcepts: ['Logical connectors', 'Addition, contrast, cause-effect'], importance: 'Most Important (3-Star)' },
      { chapterNumber: 7, title: 'Synonyms and Antonyms', englishTitle: 'Synonyms & Antonyms', coreConcepts: ['Contextual nuance', 'Prefix/suffix shifts', 'Vocabulary depth'], importance: 'High Priority' },
      { chapterNumber: 8, title: 'Punctuation & Capitalization', englishTitle: 'Punctuation', coreConcepts: ['Quotation marks in dialogue', 'Apostrophe', 'Comma rules'], importance: 'High Priority' }
    ]
  },

  // 5. ICT (Code: 275)
  {
    subjectId: 'ict',
    subjectName: 'তথ্য ও যোগাযোগ প্রযুক্তি',
    englishSubjectName: 'ICT',
    code: '275',
    paperNumber: 1,
    paperTitle: 'তথ্য ও যোগাযোগ প্রযুক্তি (ICT)',
    totalOfficialChapters: 6,
    officialChapters: [
      { chapterNumber: 1, title: 'তথ্য ও যোগাযোগ প্রযুক্তি: বিশ্ব ও বাংলাদেশ প্রেক্ষিত', englishTitle: 'World & Bangladesh Perspective', coreConcepts: ['ভার্চুয়াল রিয়েলিটি', 'আর্টিফিশিয়াল ইন্টেলিজেন্স', 'ক্রায়োসার্জারি', 'বায়োমেট্রিক্স'], importance: 'High Priority' },
      { chapterNumber: 2, title: 'কমিউনিকেশন সিস্টেমস ও নেটওয়ার্কিং', englishTitle: 'Communication Systems & Networking', coreConcepts: ['ওয়াই-ফাই, ব্লুটুথ, ওয়াইম্যাক্স', 'নেটওয়ার্ক টপোলজি (Star, Mesh, Ring)', 'ক্লাউড কম্পিউটিং'], importance: 'Most Important (3-Star)' },
      { chapterNumber: 3, title: 'সংখ্যা পদ্ধতি ও ডিজিটাল ডিভাইস', englishTitle: 'Number Systems & Digital Logic', coreConcepts: ['বাইনারি-ডেসিমাল-হেক্সা রূপান্তর', '২-এর পরিপূরক বিয়োগ', 'লজিক গেট ও ডিমরগ্যান', 'অ্যাডার, এনকোডার'], importance: 'Most Important (3-Star)' },
      { chapterNumber: 4, title: 'ওয়েব ডিজাইন পরিচিতি ও HTML', englishTitle: 'Web Design & HTML', coreConcepts: ['ওয়েবসাইটের কাঠামো', 'HTML টেবিল ও ইমেজ ট্যাগ', 'হাইপারলিংক ও ফর্ম'], importance: 'Most Important (3-Star)' },
      { chapterNumber: 5, title: 'প্রোগ্রামিং ভাষা (C Programming)', englishTitle: 'Programming Language (C)', coreConcepts: ['ফ্লোচার্ট ও অ্যালগরিদম', 'if-else ও switch', 'for, while লুপ', 'অ্যারে ও ফাংশন'], importance: 'Most Important (3-Star)' },
      { chapterNumber: 6, title: 'ডাটাবেজ ম্যানেজমেন্ট সিস্টেম (DBMS)', englishTitle: 'Database Management System', coreConcepts: ['রিলেশনাল ডাটাবেজ (RDBMS)', 'প্রাইমারি ও ফরেন কি', 'SQL কুয়েরি (SELECT, INSERT)'], importance: 'High Priority' }
    ]
  },

  // 6. পদার্থবিজ্ঞান ১ম পত্র (Code: 174)
  {
    subjectId: 'phy',
    subjectName: 'পদার্থবিজ্ঞান',
    englishSubjectName: 'Physics',
    code: '174',
    paperNumber: 1,
    paperTitle: 'পদার্থবিজ্ঞান ১ম পত্র',
    totalOfficialChapters: 10,
    officialChapters: [
      { chapterNumber: 1, title: 'ভৌত জগত ও পরিমাপ', englishTitle: 'Physical World and Measurement', coreConcepts: ['মৌলিক রাশি ও মাত্রা সমীকরণ', 'ভার্নিয়ার ক্যালিপার্স ও স্ক্রু গজ ত্রুটি'], importance: 'Standard' },
      { chapterNumber: 2, title: 'ভেক্টর', englishTitle: 'Vectors', coreConcepts: ['সামান্তরিক সূত্র', 'নদী-নৌকার বেগ', 'ডট ও ক্রস গুণন', 'ডাইভারজেন্স ও কার্ল'], importance: 'Most Important (3-Star)' },
      { chapterNumber: 3, title: 'গতিবিদ্যা', englishTitle: 'Dynamics & Kinematics', coreConcepts: ['প্রাসের গতি ও সমীকরণ', 'সর্বোচ্চ উচ্চতা ও পাল্লা', 'গতির সমীকরণমালা'], importance: 'High Priority' },
      { chapterNumber: 4, title: 'নিউটনিয়ান বলবিদ্যা', englishTitle: 'Newtonian Mechanics', coreConcepts: ['ভরবেগের সংরক্ষণ', 'রাস্তার ব্যাংকিং', 'জড়তার ভ্রামক ও চক্রগতির ব্যাসার্ধ', 'টর্ক'], importance: 'Most Important (3-Star)' },
      { chapterNumber: 5, title: 'কাজ, শক্তি ও ক্ষমতা', englishTitle: 'Work, Energy & Power', coreConcepts: ['পরিবর্তনশীল বলের দ্বারা কাজ', 'গতিশক্তি ও বিভবশক্তি রূপান্তর', 'কর্মদক্ষতা'], importance: 'Most Important (3-Star)' },
      { chapterNumber: 6, title: 'মহাকর্ষ ও অভিকর্ষ', englishTitle: 'Gravitation & Gravity', coreConcepts: ['কেপলারের সূত্র', 'উচ্চতা ও গভীরতায় g এর পরিবর্তন', 'মুক্তিবেগ', 'উপগ্রহের কক্ষপথ'], importance: 'Most Important (3-Star)' },
      { chapterNumber: 7, title: 'পদার্থের গাঠনিক ধর্ম', englishTitle: 'Structural Properties of Matter', coreConcepts: ['ইয়ংয়ের গুণাঙ্ক (Y)', 'পৃষ্ঠটান ও সান্দ্রতা', 'পয়সনের অনুপাত'], importance: 'High Priority' },
      { chapterNumber: 8, title: 'পর্যাবৃত্ত গতি', englishTitle: 'Periodic Motion', coreConcepts: ['সরল ছন্দিত স্পন্দন (SHM)', 'সরল দোলকের সূত্র ও কার্যকর দৈর্ঘ্য', 'স্প্রিং-এর পর্যায়কাল'], importance: 'Most Important (3-Star)' },
      { chapterNumber: 9, title: 'তরঙ্গ', englishTitle: 'Waves', coreConcepts: ['অগ্রগামী ও স্থির তরঙ্গ', 'শব্দের তীব্রতা ও বেল/ডেসিবল', 'বীট ও ডপলার ক্রিয়া'], importance: 'High Priority' },
      { chapterNumber: 10, title: 'আদর্শ গ্যাস ও গ্যাসের গতিতত্ত্ব', englishTitle: 'Ideal Gas & Kinetic Theory', coreConcepts: ['বয়েল ও চার্লসের সূত্র', 'PV = nRT', 'RMS বেগ', 'আপেক্ষিক আর্দ্রতা ও শিশিরাঙ্ক'], importance: 'Most Important (3-Star)' }
    ]
  },

  // 7. পদার্থবিজ্ঞান ২য় পত্র (Code: 175)
  {
    subjectId: 'phy',
    subjectName: 'পদার্থবিজ্ঞান',
    englishSubjectName: 'Physics',
    code: '175',
    paperNumber: 2,
    paperTitle: 'পদার্থবিজ্ঞান ২য় পত্র',
    totalOfficialChapters: 11,
    officialChapters: [
      { chapterNumber: 1, title: 'তাপগতিবিদ্যা', englishTitle: 'Thermodynamics', coreConcepts: ['তাপগতিবিদ্যার ১ম ও ২য় সূত্র', 'সমোষ্ণ ও রুদ্ধতাপীয় প্রক্রিয়া', 'কার্নো চক্র ও দক্ষতা', 'এনট্রপি'], importance: 'Most Important (3-Star)' },
      { chapterNumber: 2, title: 'স্থির তড়িৎ', englishTitle: 'Electrostatics', coreConcepts: ['কুলম্বের সূত্র', 'তড়িৎ প্রাবল্য ও বিভব', 'ধারক ও সমান্তরাল পাত ধারকের সঞ্চিত শক্তি'], importance: 'Most Important (3-Star)' },
      { chapterNumber: 3, title: 'চল তড়িৎ', englishTitle: 'Current Electricity', coreConcepts: ['ওহমের সূত্র ও আপেক্ষিক রোধ', 'কার্শফের সূত্রাবলী', 'হুইটস্টোন ব্রিজ ও পোটেনশিওমিটার'], importance: 'Most Important (3-Star)' },
      { chapterNumber: 4, title: 'তড়িৎ প্রবাহের চৌম্বক ক্রিয়া ও চুম্বকত্ব', englishTitle: 'Magnetic Effect of Current', coreConcepts: ['বায়ো-সাভার্ট সূত্র', 'অ্যাম্পিয়ারের সূত্র', 'লরেঞ্জ বল ও সাইক্লোট্রন'], importance: 'High Priority' },
      { chapterNumber: 5, title: 'তাড়িতচৌম্বক আবেশ ও পরিবর্তী প্রবাহ', englishTitle: 'Electromagnetic Induction & AC', coreConcepts: ['ফ্যারাডের সূত্র ও লেঞ্জের সূত্র', 'স্বকীয় ও পারস্পরিক আবেশ', 'ট্রান্সফরমার সমীকরণ'], importance: 'High Priority' },
      { chapterNumber: 6, title: 'জ্যামিতিক আলোকবিজ্ঞান', englishTitle: 'Geometrical Optics', coreConcepts: ['প্রতিসরণ ও লেন্স প্রস্তুতকারকের সূত্র', 'প্রিজমে ন্যূনতম বিচ্যুতি কোণ', 'অণুবীক্ষণ ও দূরবীক্ষণ'], importance: 'Most Important (3-Star)' },
      { chapterNumber: 7, title: 'ভৌত আলোকবিজ্ঞান', englishTitle: 'Physical Optics', coreConcepts: ['হাইগেনসের নীতি', 'ইয়াংয়ের দ্বি-চির ব্যতিচার', 'অপবর্তন ও গ্রেটিং সমীকরণ'], importance: 'Most Important (3-Star)' },
      { chapterNumber: 8, title: 'আধুনিক পদার্থবিজ্ঞানের সূচনা', englishTitle: 'Modern Physics', coreConcepts: ['আইনস্টাইনের আপেক্ষিকতা (দৈর্ঘ্য সংকোচন, কাল দীর্ঘায়ন)', 'আলোকতড়িৎ ক্রিয়া ও ফোটন'], importance: 'Most Important (3-Star)' },
      { chapterNumber: 9, title: 'পরমাণুর মডেল ও নিউক্লিয়ার পদার্থবিজ্ঞান', englishTitle: 'Atomic Models & Nuclear Physics', coreConcepts: ['বোর মডেল ও হাইড্রোজেন বর্ণালী', 'তেজস্ক্রিয় ক্ষয় সূত্র ও অর্ধায়ু', 'ভর ত্রুটি ও বন্ধন শক্তি'], importance: 'Most Important (3-Star)' },
      { chapterNumber: 10, title: 'সেমিকন্ডাক্টর ও ইলেকট্রনিক্স', englishTitle: 'Semiconductors & Electronics', coreConcepts: ['p-n জংশন ডায়োড ও রেকটিফায়ার', 'ট্রানজিস্টর সুইচ ও বিবর্ধক', 'বাইনারি লজিক গেইট'], importance: 'Most Important (3-Star)' },
      { chapterNumber: 11, title: 'জ্যোতির্বিজ্ঞান', englishTitle: 'Astronomy', coreConcepts: ['মহাবিশ্বের সৃষ্টি ও বিগ ব্যাং', 'হাবলের সূত্র', 'ব্ল্যাক হোল ও নক্ষত্রের বিবর্তন'], importance: 'Standard' }
    ]
  },

  // 8. রসায়ন ১ম পত্র (Code: 176)
  {
    subjectId: 'chem',
    subjectName: 'রসায়ন',
    englishSubjectName: 'Chemistry',
    code: '176',
    paperNumber: 1,
    paperTitle: 'রসায়ন ১ম পত্র',
    totalOfficialChapters: 5,
    officialChapters: [
      { chapterNumber: 1, title: 'ল্যাবরেটরির নিরাপদ ব্যবহার', englishTitle: 'Safe Use of Laboratory', coreConcepts: ['ব্যক্তিগত নিরাপত্তা সামগ্রী (PPE)', 'হ্যাজার্ড প্রতীক ও বিষাক্ততা', 'ফার্স্ট এইড'], importance: 'Standard' },
      { chapterNumber: 2, title: 'গুণগত রসায়ন', englishTitle: 'Qualitative Chemistry', coreConcepts: ['রাদারফোর্ড ও বোর মডেল', 'কোয়ান্টাম সংখ্যা ও পলির নীতি', 'দ্রাব্যতা ও দ্রাব্যতা গুণফল (Ksp)', 'শিখা পরীক্ষা'], importance: 'Most Important (3-Star)' },
      { chapterNumber: 3, title: 'মৌলের পর্যায়বৃত্ত ধর্ম ও রাসায়নিক বন্ধন', englishTitle: 'Periodic Properties & Chemical Bonding', coreConcepts: ['আয়নিকরণ শক্তি ও তড়িৎ ঋণাত্মকতা', 'অরবিটাল সংকরণ (sp, sp2, sp3)', 'হাইড্রোজেন বন্ধন ও আকৃতি'], importance: 'Most Important (3-Star)' },
      { chapterNumber: 4, title: 'রাসায়নিক পরিবর্তন', englishTitle: 'Chemical Changes', coreConcepts: ['লা শাতেলিয়ারের নীতি', 'ভরক্রিয়া সূত্র ও সাম্যধ্রুবক (Kp, Kc)', 'pH ও বাফার দ্রবণ', 'অসওয়াল্ডের লঘুকরণ'], importance: 'Most Important (3-Star)' },
      { chapterNumber: 5, title: 'কর্মমুখী রসায়ন', englishTitle: 'Applied Chemistry', coreConcepts: ['খাদ্য সংরক্ষক (ভিনেগার, সোডিয়াম বেনজয়েট)', 'টয়লেট্রিজ ও প্রসাধন সামগ্রী প্রস্তুতি', 'দুধের প্রক্রিয়াজাতকরণ'], importance: 'High Priority' }
    ]
  },

  // 9. রসায়ন ২য় পত্র (Code: 177)
  {
    subjectId: 'chem',
    subjectName: 'রসায়ন',
    englishSubjectName: 'Chemistry',
    code: '177',
    paperNumber: 2,
    paperTitle: 'রসায়ন ২য় পত্র',
    totalOfficialChapters: 5,
    officialChapters: [
      { chapterNumber: 1, title: 'পরিবেশ রসায়ন', englishTitle: 'Environmental Chemistry', coreConcepts: ['বয়েল-চার্লস-ডাল্টন সূত্র', 'গ্রিনহাউস গ্যাস ও এসিড বৃষ্টি', 'লুইস এসিড-ক্ষার তত্ত্ব', 'BOD, COD, DO'], importance: 'Most Important (3-Star)' },
      { chapterNumber: 2, title: 'জৈব রসায়ন', englishTitle: 'Organic Chemistry', coreConcepts: ['জৈব যৌগের নামকরণ ও সমাণুতা', 'বেনজিনের ইলেকট্রোফিলিক প্রতিস্থাপন', 'অ্যালকোহল, অ্যালডিহাইড, কিটোন', 'পলিমার ও অ্যামিন'], importance: 'Most Important (3-Star)' },
      { chapterNumber: 3, title: 'পরিমাণগত রসায়ন', englishTitle: 'Quantitative Chemistry', coreConcepts: ['মোলারিটি, শতকরা মাত্রা ও ppm', 'জারণ-বিজারণ সমতাকরণ (আয়ন-ইলেকট্রন)', 'টাইট্রেশন ও এসিড-ক্ষার হিসাব'], importance: 'Most Important (3-Star)' },
      { chapterNumber: 4, title: 'তড়িৎ রসায়ন', englishTitle: 'Electrochemistry', coreConcepts: ['ফ্যারাডের তড়িৎ বিশ্লেষণ সূত্র', 'গ্যালভানিক কোষ ও তড়িৎদ্বার বিভব', 'নার্নস্ট সমীকরণ', 'ফুয়েল সেল ও ব্যাটারি'], importance: 'Most Important (3-Star)' },
      { chapterNumber: 5, title: 'অর্থনৈতিক রসায়ন', englishTitle: 'Economic Chemistry', coreConcepts: ['ইউরিয়া সার উৎপাদন', 'সিমেন্ট ও কাচ কারখানা', 'চামড়া প্রক্রিয়াজাতকরণ ও পরিবেশ প্রভাব'], importance: 'High Priority' }
    ]
  },

  // 10. জীববিজ্ঞান ১ম পত্র (উদ্ভিদবিজ্ঞান) (Code: 178)
  {
    subjectId: 'bio',
    subjectName: 'জীববিজ্ঞান',
    englishSubjectName: 'Biology',
    code: '178',
    paperNumber: 1,
    paperTitle: 'জীববিজ্ঞান ১ম পত্র (উদ্ভিদবিজ্ঞান)',
    totalOfficialChapters: 12,
    officialChapters: [
      { chapterNumber: 1, title: 'কোষ ও এর গঠন', englishTitle: 'Cell & Its Structure', coreConcepts: ['ফ্লুইড মোজাইক মডেল', 'মাইটোকন্ড্রিয়া ও প্লাস্টিড', 'DNA ডাবল হেলিক্স ও প্রতিলিপন'], importance: 'Most Important (3-Star)' },
      { chapterNumber: 2, title: 'কোষ বিভাজন', englishTitle: 'Cell Division', coreConcepts: ['মাইটোসিসের পর্যায়সমূহ', 'মায়োসিস-১ ও ক্রসিং ওভারের গুরুত্ব'], importance: 'Most Important (3-Star)' },
      { chapterNumber: 3, title: 'কোষ রসায়ন', englishTitle: 'Cell Chemistry', coreConcepts: ['কার্বোহাইড্রেট, প্রোটিন, লিপিড', 'এনজাইম ক্রিয়ার কৌশল'], importance: 'High Priority' },
      { chapterNumber: 4, title: 'অণুজীব', englishTitle: 'Microorganisms', coreConcepts: ['ভাইরাস (T2 ও HIV)', 'ব্যাকটেরিয়ার গঠন', 'ম্যালেরিয়া পরজীবী (Plasmodium) জীবনচক্র'], importance: 'Most Important (3-Star)' },
      { chapterNumber: 5, title: 'শৈবাল ও ছত্রাক', englishTitle: 'Algae & Fungi', coreConcepts: ['Ulothrix শৈবালের গঠন', 'Agaricus এর গঠন ও জনন', 'দাদ রোগ'], importance: 'High Priority' },
      { chapterNumber: 6, title: 'ব্রায়োফাইটা ও টেরিডোফাইটা', englishTitle: 'Bryophyta & Pteridophyta', coreConcepts: ['Riccia এর গ্যামেটোফাইট ও স্পোরোফাইট', 'Pteris এর ফার্ন প্রোথ্যালাস'], importance: 'High Priority' },
      { chapterNumber: 7, title: 'নগ্নবীজী ও আবৃতবীজী উদ্ভিদ', englishTitle: 'Gymnosperms & Angiosperms', coreConcepts: ['Cycas এর বৈশিষ্ট্য', 'Poaceae ও Malvaceae গোত্রের শনাক্তকারী বৈশিষ্ট্য'], importance: 'Most Important (3-Star)' },
      { chapterNumber: 8, title: 'টিস্যু ও টিস্যুতন্ত্র', englishTitle: 'Tissue & Tissue System', coreConcepts: ['ভাজক টিস্যু', 'ভাস্কুলার বান্ডলের প্রকারভেদ', 'একবীজপত্রী কাণ্ড ও মূলের অন্তর্গঠন'], importance: 'Most Important (3-Star)' },
      { chapterNumber: 9, title: 'উদ্ভিদ শারীরতত্ত্ব', englishTitle: 'Plant Physiology', coreConcepts: ['প্রস্বেদন ও পত্ররন্ধ্র খোলা-বন্ধ', 'সালোকসংশ্লেষণ (C3 ও C4 চক্র)', 'শ্বসন ও ক্রেবস চক্র'], importance: 'Most Important (3-Star)' },
      { chapterNumber: 10, title: 'উদ্ভিদ প্রজনন', englishTitle: 'Plant Reproduction', coreConcepts: ['পুং ও স্ত্রী গ্যামেটোফাইটের উৎপত্তি', 'নিষেক ও কৃত্রিম প্রজনন'], importance: 'High Priority' },
      { chapterNumber: 11, title: 'জীবপ্রযুক্তি', englishTitle: 'Biotechnology', coreConcepts: ['টিস্যু কালচার প্রযুক্তি', 'রিকম্বিনেন্ট DNA প্রযুক্তি ও প্লাজমিড', 'GMO উদ্ভাবন'], importance: 'Most Important (3-Star)' },
      { chapterNumber: 12, title: 'জীবের পরিবেশ, বিস্তার ও সংরক্ষণ', englishTitle: 'Environment & Conservation', coreConcepts: ['বাস্তুতন্ত্র ও খাদ্যজাল', 'ইন-সিটু ও এক্স-সিটু সংরক্ষণ', 'সুন্দরবনের জীববৈচিত্র্য'], importance: 'Standard' }
    ]
  },

  // 11. জীববিজ্ঞান ২য় পত্র (প্রাণিবিজ্ঞান) (Code: 179)
  {
    subjectId: 'bio',
    subjectName: 'জীববিজ্ঞান',
    englishSubjectName: 'Biology',
    code: '179',
    paperNumber: 2,
    paperTitle: 'জীববিজ্ঞান ২য় পত্র (প্রাণিবিজ্ঞান)',
    totalOfficialChapters: 12,
    officialChapters: [
      { chapterNumber: 1, title: 'প্রাণীর বিভিন্নতা ও শ্রেণিবিন্যাস', englishTitle: 'Animal Diversity & Classification', coreConcepts: ['শ্রেণিবিন্যাসের ভিত্তি (সিলম, ক্লিভেজ)', 'নয়টি প্রধান পর্বের শনাক্তকারী বৈশিষ্ট্য'], importance: 'Most Important (3-Star)' },
      { chapterNumber: 2, title: 'প্রাণীর পরিচিতি (হাইড্রা, ঘাসফড়িং, রুই মাছ)', englishTitle: 'Animal Types (Hydra, Grasshopper, Rohu)', coreConcepts: ['হাইড্রার নেমাটোসিস্ট ও চলন', 'ঘাসফড়িংয়ের পুঞ্জাক্ষি ও রূপান্তর', 'রুই মাছের রক্ত সংবহন'], importance: 'Most Important (3-Star)' },
      { chapterNumber: 3, title: 'মানব শারীরতত্ত্ব: পরিপাক ও শোষণ', englishTitle: 'Digestion & Absorption', coreConcepts: ['মুখবিবর, পাকস্থলী ও অন্ত্রে পরিপাক', 'যকৃতের সঞ্চয়ী ও বিপাকীয় ভূমিকা', 'স্থূলতা'], importance: 'Most Important (3-Star)' },
      { chapterNumber: 4, title: 'মানব শারীরতত্ত্ব: রক্ত ও সংবহন', englishTitle: 'Blood & Circulation', coreConcepts: ['রক্তকণিকা ও রক্ততঞ্চন', 'হৃদপিণ্ডের গঠন ও কার্ডিয়াক চক্র', 'পেসমেকার, অ্যানজিওপ্লাস্টি ও বাইপাস'], importance: 'Most Important (3-Star)' },
      { chapterNumber: 5, title: 'মানব শারীরতত্ত্ব: শ্বাসক্রিয়া ও শ্বসন', englishTitle: 'Respiration & Breathing', coreConcepts: ['ফুসফুসের অ্যালভিওলাই ও গ্যাসীয় বিনিময়', 'অক্সিজেন ও কার্বন ডাই-অক্সাইড পরিবহন'], importance: 'High Priority' },
      { chapterNumber: 6, title: 'মানব শারীরতত্ত্ব: বর্জ্য ও নিষ্কাশন', englishTitle: 'Excretion & Osmoregulation', coreConcepts: ['নেফ্রনের সূক্ষ্ম গঠন ও মূত্র সৃষ্টি', 'অসমোরেগুলেশনে বৃক্কের ভূমিকা', 'ডায়ালাইসিস'], importance: 'High Priority' },
      { chapterNumber: 7, title: 'মানব শারীরতত্ত্ব: চলন ও অঙ্গচালনা', englishTitle: 'Locomotion & Skeletal System', coreConcepts: ['অস্থিকঙ্কাল তন্ত্র ও অস্থিসন্ধি', 'পেশি সংকোচনের স্লাইডিং ফিলামেন্ট তত্ত্ব'], importance: 'High Priority' },
      { chapterNumber: 8, title: 'মানব শারীরতত্ত্ব: সমন্বয় ও নিয়ন্ত্রণ', englishTitle: 'Coordination & Control', coreConcepts: ['মস্তিষ্কের বিভিন্ন অংশ ও কাজ', 'চোখ ও কানের গঠন ও কার্যপদ্ধতি', 'হরমোন ক্ষরণ'], importance: 'Most Important (3-Star)' },
      { chapterNumber: 9, title: 'মানবজীবনের ধারাবাহিকতা', englishTitle: 'Continuity of Human Life', coreConcepts: ['শুক্রাণু ও ডিম্বাণু জনন', 'ভ্রূণের বিকাশ ও অমরা', 'যৌনবাহিত রোগ'], importance: 'Most Important (3-Star)' },
      { chapterNumber: 10, title: 'মানবদেহের প্রতিরক্ষা (অনাক্রম্যতা)', englishTitle: 'Human Defense & Immunity', coreConcepts: ['প্রথম, দ্বিতীয় ও তৃতীয় প্রতিরক্ষা স্তর', 'অ্যান্টিবডি ও এর প্রকারভেদ', 'টিকার কার্যপদ্ধতি'], importance: 'High Priority' },
      { chapterNumber: 11, title: 'জিনতত্ত্ব ও বিবর্তন', englishTitle: 'Genetics & Evolution', coreConcepts: ['মেন্ডেলের ১ম ও ২য় সূত্র এবং ব্যতিক্রম', 'সেক্স-লিংকড ডিসঅর্ডার (হিমোফিলিয়া, বর্ণান্ধতা)', 'ডারউইনবাদ'], importance: 'Most Important (3-Star)' },
      { chapterNumber: 12, title: 'প্রাণীর আচরণ', englishTitle: 'Animal Behavior', coreConcepts: ['সহজাত আচরণ (ট্যাক্সিস ও প্রতিবর্ত ক্রিয়া)', 'শিক্ষালব্ধ আচরণ', 'মৌমাছির সামাজিক আচরণ'], importance: 'Standard' }
    ]
  },

  // 12. উচ্চতর গণিত ১ম পত্র (Code: 265)
  {
    subjectId: 'hmath',
    subjectName: 'উচ্চতর গণিত',
    englishSubjectName: 'Higher Mathematics',
    code: '265',
    paperNumber: 1,
    paperTitle: 'উচ্চতর গণিত ১ম পত্র',
    totalOfficialChapters: 10,
    officialChapters: [
      { chapterNumber: 1, title: 'ম্যাট্রিক্স ও নির্ণায়ক', englishTitle: 'Matrices & Determinants', coreConcepts: ['ম্যাট্রিক্সের গুণন ও ইনভার্স', 'নির্ণায়কের ধর্মাবলী', 'ক্র্যামারের নিয়মে সমীকরণ সমাধান'], importance: 'Most Important (3-Star)' },
      { chapterNumber: 2, title: 'ভেক্টর', englishTitle: 'Vectors', coreConcepts: ['ভেক্টরের দিক কোসাইন', 'স্কেলার ও ভেক্টর গুণনের গাণিতিক প্রয়োগ', 'একরেখীয় ও একতলীয় ভেক্টর'], importance: 'High Priority' },
      { chapterNumber: 3, title: 'সরলরেখা', englishTitle: 'Straight Lines', coreConcepts: ['বিভাজন বিন্দু ও ক্ষেত্রফল', 'ঢাল ও বিভিন্ন আকারের সমীকরণ', 'লম্ব ও সমান্তরাল রেখা', 'দূরত্ব'], importance: 'Most Important (3-Star)' },
      { chapterNumber: 4, title: 'বৃত্ত', englishTitle: 'Circles', coreConcepts: ['বৃত্তের প্রমিত সমীকরণ', 'স্পর্শক ও স্পর্শবিন্দু', 'অক্ষকে স্পর্শ করার শর্ত', 'সাধারণ জ্যা'], importance: 'Most Important (3-Star)' },
      { chapterNumber: 5, title: 'বিন্যাস ও সমাবেশ', englishTitle: 'Permutations & Combinations', coreConcepts: ['nPr ও nCr এর প্রমাণ ও সম্পর্ক', 'শব্দ গঠন ও সংখ্যা গঠন', 'কমিটি গঠন'], importance: 'Most Important (3-Star)' },
      { chapterNumber: 6, title: 'ত্রিকোণমিতিক অনুপাত', englishTitle: 'Trigonometric Ratios', coreConcepts: ['কোণ পরিমাপ (রেডিয়ান)', 'ত্রিকোণমিতিক অনুপাতের চিহ্ন', 'সংযুক্ত কোণ'], importance: 'High Priority' },
      { chapterNumber: 7, title: 'সংযুক্ত কোণের ত্রিকোণমিতিক অনুপাত', englishTitle: 'Compound & Multiple Angles', coreConcepts: ['sin(A±B), cos(A±B)', 'গুণিতক ও উপগুণিতক কোণ', 'ত্রিভুজের কোণ ও বাহুর সম্পর্ক'], importance: 'Most Important (3-Star)' },
      { chapterNumber: 8, title: 'ফাংশন ও ফাংশনের লেখচিত্র', englishTitle: 'Functions & Graphs', coreConcepts: ['ডোমেন ও রেঞ্জ নির্ণয়', 'এক-এক ও সার্বিক ফাংশন', 'ইনভার্স ফাংশন ও লেখচিত্র'], importance: 'High Priority' },
      { chapterNumber: 9, title: 'অন্তরীকরণ (Differentiation)', englishTitle: 'Calculus: Differentiation', coreConcepts: ['সীমা (Limit) ও মূল নিয়মে অন্তরজ', 'ইউ-ভি ও ভাগ সূত্র', 'পর্যায়ক্রমিক অন্তরীকরণ', 'গুরুমান ও লঘুমান'], importance: 'Most Important (3-Star)' },
      { chapterNumber: 10, title: 'যোগজীকরণ (Integration)', englishTitle: 'Calculus: Integration', coreConcepts: ['অনির্দিষ্ট যোগজ ও প্রতিস্থাপন', 'খণ্ডশ যোগজীকরণ (u.v)', 'নির্দিষ্ট যোগজ ও আবদ্ধ ক্ষেত্রফল'], importance: 'Most Important (3-Star)' }
    ]
  },

  // 13. উচ্চতর গণিত ২য় পত্র (Code: 266)
  {
    subjectId: 'hmath',
    subjectName: 'উচ্চতর গণিত',
    englishSubjectName: 'Higher Mathematics',
    code: '266',
    paperNumber: 2,
    paperTitle: 'উচ্চতর গণিত ২য় পত্র',
    totalOfficialChapters: 10,
    officialChapters: [
      { chapterNumber: 1, title: 'বাস্তব সংখ্যা ও অসমতা', englishTitle: 'Real Numbers & Inequalities', coreConcepts: ['পরমমান চিহ্নের সমাধান', 'বাস্তব সংখ্যার স্বতঃসিদ্ধ ও সুপ্রিমাম-ইনফিমাম'], importance: 'High Priority' },
      { chapterNumber: 2, title: 'যোগাশ্রয়ী প্রোগ্রাম (Linear Programming)', englishTitle: 'Linear Programming', coreConcepts: ['লেখচিত্রের সাহায্যে শর্তভিত্তিক সমীকরণ সমাধান', 'সর্বোচ্চ ও সর্বনিম্ন মান নির্ণয়'], importance: 'High Priority' },
      { chapterNumber: 3, title: 'জটিল সংখ্যা', englishTitle: 'Complex Numbers', coreConcepts: ['মডুলাস ও আর্গুমেন্ট', 'পোলার রূপ ও অয়লারের সূত্র', 'এককের ঘনমূল (ω) এর ধর্মাবলী'], importance: 'Most Important (3-Star)' },
      { chapterNumber: 4, title: 'বহুপদী ও বহুপদী সমীকরণ', englishTitle: 'Polynomials & Equations', coreConcepts: ['দ্বিঘাত সমীকরণের মূল ও সহগের সম্পর্ক', 'নিশ্চায়ক ও মূলের প্রকৃতি', 'সাধারণ মূলের শর্ত'], importance: 'Most Important (3-Star)' },
      { chapterNumber: 5, title: 'দ্বিপদী বিস্তৃতি', englishTitle: 'Binomial Expansion', coreConcepts: ['দ্বিপদী উপপাদ্য ও সাধারণ পদ (r+1 তম পদ)', 'মধ্যপদ ও x-বর্জিত পদ নির্ণয়'], importance: 'High Priority' },
      { chapterNumber: 6, title: 'কণিক (Conics)', englishTitle: 'Conics', coreConcepts: ['পরাবৃত্ত (y²=4ax), উপবৃত্ত ও অধিবৃত্ত', 'ফোকাস, দিকাক্ষ ও উপকেন্দ্রিক লম্বের দৈর্ঘ্য'], importance: 'Most Important (3-Star)' },
      { chapterNumber: 7, title: 'বিপরীত ত্রিকোণমিতিক ফাংশন ও সমীকরণ', englishTitle: 'Inverse Trigonometry & Equations', coreConcepts: ['tan⁻¹x + tan⁻¹y সূত্রাবলী', 'ত্রিকোণমিতিক সমীকরণের সাধারণ সমাধান'], importance: 'Most Important (3-Star)' },
      { chapterNumber: 8, title: 'স্থিতিবিদ্যা (Statics)', englishTitle: 'Statics', coreConcepts: ['বলের সামান্তরিক সূত্র', 'লামির উপপাদ্য', 'সদৃশ ও বিসদৃশ সমান্তরাল বল ও যুগল'], importance: 'Most Important (3-Star)' },
      { chapterNumber: 9, title: 'সমতলে বস্তুকণার গতি (Dynamics)', englishTitle: 'Plane Dynamics', coreConcepts: ['প্রাসের সমীকরণ ও পাল্লা', 'উল্লম্ব তলে গতি ও সংঘর্ষ', 'আপেক্ষিক বেগ'], importance: 'Most Important (3-Star)' },
      { chapterNumber: 10, title: 'বিস্তার পরিমাপ ও সম্ভাবনা', englishTitle: 'Measures of Dispersion & Probability', coreConcepts: ['গড় ব্যবধান ও পরিমিত ব্যবধান', 'স্বাধীন ও বর্জনশীল ঘটনার সম্ভাবনা'], importance: 'High Priority' }
    ]
  }
];
