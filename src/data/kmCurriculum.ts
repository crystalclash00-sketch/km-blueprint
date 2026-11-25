import { Subject } from '../types';

export const kmDefaultSubjects: Subject[] = [
  // 1 & 2: বাংলা ১ম ও ২য় পত্র
  {
    id: 'ban',
    name: 'বাংলা',
    englishName: 'Bangla',
    code: '101/102',
    isCompulsory: true,
    color: '#059669', // Emerald
    iconName: 'book-open',
    papers: [
      {
        id: 'ban-1',
        paperNumber: 1,
        title: 'বাংলা ১ম পত্র (সাহিত্য পাঠ ও সহপাঠ)',
        englishTitle: 'Bangla 1st Paper',
        chapters: [
          {
            id: 'ban-1-1',
            chapterNumber: 1,
            title: 'অপরিচিতা — রবীন্দ্রনাথ ঠাকুর',
            englishTitle: 'Oporichita',
            difficulty: 'Medium',
            importance: 'Most Important (3-Star)',
            totalTopics: 4,
            status: 'not_started',
            cqSolvedCount: 0,
            mcqSolvedCount: 0,
            masteryPercentage: 0,
            overview: 'যৌতুকপ্রথার বিরুদ্ধে এক বলিষ্ঠ নারী কল্যাণীর প্রতিবাদী মনোভাব ও আত্মমর্যাদার প্রতীকী গল্প।',
            learningObjectives: [
              'অনুপমের ব্যক্তিত্বহীনতা ও তৎকালীন মানসিকতা বিশ্লেষণ',
              'শম্ভুনাথ সেনের আত্মমর্যাদাবোধ ও প্রতিবাদী চরিত্র',
              'কল্যাণীর আত্মত্যাগ ও দেশমাতৃকার সেবায় ব্রত গ্রহণ'
            ],
            topics: [
              {
                id: 'ban-1-1-t1',
                title: 'লেখক পরিচিতি ও পটভূমি',
                priorityCategory: 'High Priority',
                importanceReason: 'বোর্ড পরীক্ষায় প্রতিবছরই রবীন্দ্রনাথ ঠাকুরের জন্ম-মৃত্যু ও সাহিত্যকর্ম থেকে MCQ থাকে।',
                estimatedMinutes: 30,
                status: 'not_started',
                isConfirmedCompleted: false
              },
              {
                id: 'ban-1-1-t2',
                title: 'অনুপম ও শম্ভুনাথ সেনের চরিত্র বিশ্লেষণ',
                priorityCategory: 'Essential Concept',
                importanceReason: 'সৃজনশীল প্রশ্নের ‘গ’ ও ‘ঘ’ নম্বরে অনুধাবন ও উচ্চতর দক্ষতায় চরিত্র বৈসাদৃশ্য আসে।',
                estimatedMinutes: 45,
                status: 'not_started',
                isConfirmedCompleted: false
              },
              {
                id: 'ban-1-1-t3',
                title: 'শব্দার্থ, টীকা ও তাৎপর্যপূর্ণ উক্তি',
                priorityCategory: 'Important',
                importanceReason: '‘মাকাল ফল’, ‘গজানন’, ‘অন্নপূর্ণার কোল’ ইত্যাদির অর্থ জানা আবশ্যক।',
                estimatedMinutes: 30,
                status: 'not_started',
                isConfirmedCompleted: false
              },
              {
                id: 'ban-1-1-t4',
                title: 'যৌতুকবিরোধী চেতনা ও সৃজনশীল অনুশীলন',
                priorityCategory: 'High Priority',
                importanceReason: 'বোর্ড উদ্দীপকের মূল ভাববস্তুর সাথে সরাসরি সম্পর্কযুক্ত।',
                estimatedMinutes: 45,
                status: 'not_started',
                isConfirmedCompleted: false
              }
            ],
            definitions: [
              {
                term: 'মাকাল ফল',
                englishTerm: 'Trichosanthes tricuspidata',
                banglaMeaning: 'দেখতে সুন্দর কিন্তু ভেতরে অপদার্থ',
                definition: 'অনুপম নিজেকে ব্যঙ্গ করে বলেছে যে বাইরে ভদ্র কিন্তু কাজের বেলায় অপদার্থ।'
              },
              {
                term: 'গজানন',
                englishTerm: 'Lord Ganesha metaphor',
                banglaMeaning: 'গণেশ (মায়ের কোলে ব্যক্তিত্বহীন সন্তান)',
                definition: 'অনুপম মায়ের কোলে বড় হওয়া ব্যক্তিত্বহীন অলস পুত্র।'
              }
            ]
          },
          {
            id: 'ban-1-2',
            chapterNumber: 2,
            title: 'বিলাসী — শরৎচন্দ্র চট্টোপাধ্যায়',
            englishTitle: 'Bilashi',
            difficulty: 'Medium',
            importance: 'Most Important (3-Star)',
            totalTopics: 3,
            status: 'not_started',
            cqSolvedCount: 0,
            mcqSolvedCount: 0,
            masteryPercentage: 0,
            overview: 'ধর্মান্ধ সমাজের অমানবিকতা ও মৃত্যুপণ ভালোবাসার অবিনাশী উপাখ্যান।',
            learningObjectives: [
              'মৃত্যুঞ্জয়ের জাতপাতের শৃঙ্খল ভাঙার সাহস',
              'বিলাসীর সেবা ও আত্মাহুতি',
              'তৎকালীন গ্রামীণ সমাজের নিষ্ঠুরতার স্বরূপ'
            ],
            topics: [
              {
                id: 'ban-1-2-t1',
                title: 'উৎস ও লেখক পরিচিতি',
                priorityCategory: 'Important',
                importanceReason: '‘ভারতী’ পত্রিকায় প্রথম প্রকাশিত এবং শরৎচন্দ্রের অন্যতম অমর সৃষ্টি।',
                estimatedMinutes: 30,
                status: 'not_started',
                isConfirmedCompleted: false
              },
              {
                id: 'ban-1-2-t2',
                title: 'সমাজ বনাম অকৃত্রিম মানবপ্রেমের দ্বন্দ্ব',
                priorityCategory: 'Essential Concept',
                importanceReason: 'সৃজনশীল প্রশ্নের উদ্দীপকে প্রায়শই অসাম্প্রদায়িক মানবতাবোধ আসে।',
                estimatedMinutes: 45,
                status: 'not_started',
                isConfirmedCompleted: false
              },
              {
                id: 'ban-1-2-t3',
                title: 'সাপুড়ে জীবন ও বিলাসীর ট্র্যাজেডি',
                priorityCategory: 'High Priority',
                importanceReason: 'গল্পের চরম ক্লাইম্যাক্স ও বিলাসীর বিষপানে মৃত্যুর ট্র্যাজিক সমাপ্তি।',
                estimatedMinutes: 35,
                status: 'not_started',
                isConfirmedCompleted: false
              }
            ]
          },
          {
            id: 'ban-1-3',
            chapterNumber: 3,
            title: 'বিদ্রোহী — কাজী নজরুল ইসলাম',
            englishTitle: 'Bidrohi',
            difficulty: 'Hard',
            importance: 'Most Important (3-Star)',
            totalTopics: 4,
            status: 'not_started',
            cqSolvedCount: 0,
            mcqSolvedCount: 0,
            masteryPercentage: 0,
            overview: 'পরাধীনতার শৃঙ্খল চূর্ণ করার অগ্নিময় মন্ত্র ও মানবমুক্তির মহামানবীয় ঘোষণা।',
            learningObjectives: [
              'নজরুলের বিদ্রোহী সত্তার বহুমাত্রিক রূপ',
              'পৌরাণিক অনুষঙ্গ ও উপমার বিশ্লেষণ',
              'চির উন্নত শির এবং সাম্যবাদী দর্শন'
            ],
            topics: [
              {
                id: 'ban-1-3-t1',
                title: 'কবিতার ঐতিহাসিক প্রেক্ষাপট ও কাব্যগ্রন্থ',
                priorityCategory: 'High Priority',
                importanceReason: '‘অগ্নিবীণা’ কাব্যগ্রন্থের দ্বিতীয় কবিতা (১৯২১)।',
                estimatedMinutes: 30,
                status: 'not_started',
                isConfirmedCompleted: false
              },
              {
                id: 'ban-1-3-t2',
                title: 'পৌরাণিক চরিত্রের রূপক ও প্রতীক',
                priorityCategory: 'Essential Concept',
                importanceReason: 'ভৃগু, বলরাম, নটরাজ, পরশুরাম ইত্যাদি রূপকের ব্যাখ্যা পরীক্ষায় নিশ্চিত আসে।',
                estimatedMinutes: 50,
                status: 'not_started',
                isConfirmedCompleted: false
              },
              {
                id: 'ban-1-3-t3',
                title: 'কোমল ও রুদ্র রূপের দ্বৈত প্রকাশ',
                priorityCategory: 'Important',
                importanceReason: 'একাধারে তিনি ‘ধুর্যটি’ আবার ‘হৃদয়-উচ্ছল কবি’।',
                estimatedMinutes: 40,
                status: 'not_started',
                isConfirmedCompleted: false
              },
              {
                id: 'ban-1-3-t4',
                title: 'অনুধাবনমূলক ও সৃজনশীল প্রস্তুতি',
                priorityCategory: 'High Priority',
                importanceReason: 'বোর্ড প্রশ্নের বহুনির্বাচনী ও প্রয়োগ-উচ্চতর দক্ষতা।',
                estimatedMinutes: 40,
                status: 'not_started',
                isConfirmedCompleted: false
              }
            ]
          }
        ]
      },
      {
        id: 'ban-2',
        paperNumber: 2,
        title: 'বাংলা ২য় পত্র (ব্যাকরণ ও নির্মিতি)',
        englishTitle: 'Bangla 2nd Paper',
        chapters: [
          {
            id: 'ban-2-1',
            chapterNumber: 1,
            title: 'বাংলা উচ্চারণের নিয়ম',
            englishTitle: 'Bangla Pronunciation Rules',
            difficulty: 'Medium',
            importance: 'Most Important (3-Star)',
            totalTopics: 3,
            status: 'not_started',
            cqSolvedCount: 0,
            mcqSolvedCount: 0,
            masteryPercentage: 0,
            overview: 'অ-ধ্বনি, এ-ধ্বনি এবং ব-ফলা ও ম-ফলার প্রমিত বাংলা উচ্চারণ রীতি।',
            learningObjectives: [
              'আদ্য ‘অ’ সংবৃত ও বিবৃত উচ্চারণের পাঁচটি নিয়ম',
              'ব-ফলা ও য-ফলার প্রমিত উচ্চারণ',
              'বোর্ডে আগত শব্দের শুদ্ধ উচ্চারণ রূপ লিখন'
            ],
            topics: [
              {
                id: 'ban-2-1-t1',
                title: 'আদ্য ‘অ’ ও অন্ত্য ‘অ’ উচ্চারণের নিয়ম',
                priorityCategory: 'Essential Concept',
                importanceReason: 'বোর্ডের ১(ক) প্রশ্নে ৫ নম্বরের জন্য সরাসরি নিয়ম আসে।',
                estimatedMinutes: 45,
                status: 'not_started',
                isConfirmedCompleted: false
              },
              {
                id: 'ban-2-1-t2',
                title: 'ব-ফলা, ম-ফলা ও য-ফলা উচ্চারণের নিয়ম',
                priorityCategory: 'High Priority',
                importanceReason: 'যুক্তবর্ণের উচ্চারণ ভুলের আশঙ্কা সবচেয়ে বেশি।',
                estimatedMinutes: 40,
                status: 'not_started',
                isConfirmedCompleted: false
              },
              {
                id: 'ban-2-1-t3',
                title: 'শব্দভিত্তিক উচ্চারণ চর্চা (বিগত বোর্ডসমূহ)',
                priorityCategory: 'Essential Concept',
                importanceReason: '১(খ) তে ৮টি থেকে ৫টি শব্দের উচ্চারণ লিখনে ১০০% নম্বর পাওয়া যায়।',
                estimatedMinutes: 50,
                status: 'not_started',
                isConfirmedCompleted: false
              }
            ]
          },
          {
            id: 'ban-2-2',
            chapterNumber: 2,
            title: 'বাংলা বানানের নিয়ম (বাংলা একাডেমি)',
            englishTitle: 'Bangla Spelling Rules',
            difficulty: 'Medium',
            importance: 'Most Important (3-Star)',
            totalTopics: 3,
            status: 'not_started',
            cqSolvedCount: 0,
            mcqSolvedCount: 0,
            masteryPercentage: 0,
            overview: 'প্রমিত বাংলা একাডেমি বানানের নিয়মাবলী ও বহুল প্রচলিত ভুল বানানের শুদ্ধ রূপ।',
            learningObjectives: [
              'তৎসম ও অতৎসম শব্দের বানানের ৫টি নিয়ম',
              'ণ-ত্ব ও ষ-ত্ব বিধানের প্রয়োগ',
              'ভুল বানান শুদ্ধিকরণ'
            ],
            topics: [
              {
                id: 'ban-2-2-t1',
                title: 'বাংলা একাডেমি প্রমিত বানানের নিয়ম (অতৎসম শব্দ)',
                priorityCategory: 'Essential Concept',
                importanceReason: '২(ক) প্রশ্নে সরাসরি আসে।',
                estimatedMinutes: 40,
                status: 'not_started',
                isConfirmedCompleted: false
              },
              {
                id: 'ban-2-2-t2',
                title: 'ণ-ত্ব ও ষ-ত্ব বিধানের নিয়ম ও ব্যতিক্রম',
                priorityCategory: 'High Priority',
                importanceReason: 'পরীক্ষায় নিয়ম ও অশুদ্ধ শব্দ শুদ্ধিকরণে আসে।',
                estimatedMinutes: 45,
                status: 'not_started',
                isConfirmedCompleted: false
              },
              {
                id: 'ban-2-2-t3',
                title: 'বোর্ড অশুদ্ধ বাক্য ও শব্দ শুদ্ধিকরণ',
                priorityCategory: 'Essential Concept',
                importanceReason: '২(খ) অপশনে শতভাগ নম্বর নিশ্চিত করার উপায়।',
                estimatedMinutes: 50,
                status: 'not_started',
                isConfirmedCompleted: false
              }
            ]
          }
        ]
      }
    ]
  },

  // 3 & 4: English 1st Paper & 2nd Paper
  {
    id: 'eng',
    name: 'English',
    englishName: 'English',
    code: '107/108',
    isCompulsory: true,
    color: '#2563eb', // Blue
    iconName: 'languages',
    papers: [
      {
        id: 'eng-1',
        paperNumber: 1,
        title: 'English 1st Paper',
        englishTitle: 'English 1st Paper',
        chapters: [
          {
            id: 'eng-1-1',
            chapterNumber: 1,
            title: 'The Unforgettable History (Nelson Mandela & Bangabandhu)',
            englishTitle: 'The Unforgettable History',
            difficulty: 'Medium',
            importance: 'Most Important (3-Star)',
            totalTopics: 3,
            status: 'not_started',
            cqSolvedCount: 0,
            mcqSolvedCount: 0,
            masteryPercentage: 0,
            overview: 'Nelson Mandela: From Apartheid Fighter to President and Bangabandhu 7th March speech analysis.',
            learningObjectives: [
              'Understand key themes of freedom, emancipation and reconciliation',
              'Master context-based vocabulary and synonyms/antonyms',
              'Flowchart, summary writing and theme identification'
            ],
            topics: [
              {
                id: 'eng-1-1-t1',
                title: 'Passage Comprehension & Key Vocabulary',
                priorityCategory: 'Essential Concept',
                importanceReason: 'Direct questions on emancipation, apartheid, reconciliation.',
                estimatedMinutes: 45,
                status: 'not_started',
                isConfirmedCompleted: false
              },
              {
                id: 'eng-1-1-t2',
                title: 'Synonyms, Antonyms & Word Classes',
                priorityCategory: 'High Priority',
                importanceReason: 'Multiple choice vocabulary questions testing nuance.',
                estimatedMinutes: 40,
                status: 'not_started',
                isConfirmedCompleted: false
              },
              {
                id: 'eng-1-1-t3',
                title: 'Summary Writing & Theme Construction',
                priorityCategory: 'Essential Concept',
                importanceReason: '10 marks in question 2/3 for concise academic summarization.',
                estimatedMinutes: 45,
                status: 'not_started',
                isConfirmedCompleted: false
              }
            ]
          },
          {
            id: 'eng-1-2',
            chapterNumber: 2,
            title: 'Dreams (Langston Hughes & D.H. Lawrence)',
            englishTitle: 'Dreams Poem',
            difficulty: 'Easy',
            importance: 'Important',
            totalTopics: 2,
            status: 'not_started',
            cqSolvedCount: 0,
            mcqSolvedCount: 0,
            masteryPercentage: 0,
            overview: 'Philosophical analysis of dreams: "Hold fast to dreams for if dreams die, life is a broken-winged bird that cannot fly".',
            learningObjectives: [
              'Metaphorical interpretation of dreams',
              'Theme writing and literary device identification'
            ],
            topics: [
              {
                id: 'eng-1-2-t1',
                title: 'Poetic Devices & Stanza Explanations',
                priorityCategory: 'High Priority',
                importanceReason: 'Metaphors of barren field and broken-winged bird.',
                estimatedMinutes: 35,
                status: 'not_started',
                isConfirmedCompleted: false
              },
              {
                id: 'eng-1-2-t2',
                title: 'Theme Writing for Board Exams',
                priorityCategory: 'Essential Concept',
                importanceReason: 'Standard theme format scoring full 8 marks.',
                estimatedMinutes: 35,
                status: 'not_started',
                isConfirmedCompleted: false
              }
            ]
          }
        ]
      },
      {
        id: 'eng-2',
        paperNumber: 2,
        title: 'English 2nd Paper (Grammar & Composition)',
        englishTitle: 'English 2nd Paper',
        chapters: [
          {
            id: 'eng-2-1',
            chapterNumber: 1,
            title: 'Modifiers (Pre-modifiers & Post-modifiers)',
            englishTitle: 'Modifiers',
            difficulty: 'Medium',
            importance: 'Most Important (3-Star)',
            totalTopics: 3,
            status: 'not_started',
            cqSolvedCount: 0,
            mcqSolvedCount: 0,
            masteryPercentage: 0,
            overview: 'Rules of noun adjective, present/past participles, infinitives, appositives, quantifiers.',
            learningObjectives: [
              'Differentiate pre-modifiers and post-modifiers',
              'Correctly apply infinitive phrases and participles',
              'Solve board question passages with 10 blanks'
            ],
            topics: [
              {
                id: 'eng-2-1-t1',
                title: 'Pre-modifier Rules & Examples',
                priorityCategory: 'Essential Concept',
                importanceReason: 'Covers noun adjectives, intensifiers, participles.',
                estimatedMinutes: 45,
                status: 'not_started',
                isConfirmedCompleted: false
              },
              {
                id: 'eng-2-1-t2',
                title: 'Post-modifier Rules & Appositives',
                priorityCategory: 'Essential Concept',
                importanceReason: 'Frequent traps around infinitive phrases and prepositional phrases.',
                estimatedMinutes: 45,
                status: 'not_started',
                isConfirmedCompleted: false
              },
              {
                id: 'eng-2-1-t3',
                title: 'Previous Board Questions Practice',
                priorityCategory: 'High Priority',
                importanceReason: '10/10 marks guaranteed through systematic pattern practice.',
                estimatedMinutes: 50,
                status: 'not_started',
                isConfirmedCompleted: false
              }
            ]
          },
          {
            id: 'eng-2-2',
            chapterNumber: 2,
            title: 'Right Form of Verbs',
            englishTitle: 'Right Form of Verbs',
            difficulty: 'Hard',
            importance: 'Most Important (3-Star)',
            totalTopics: 3,
            status: 'not_started',
            cqSolvedCount: 0,
            mcqSolvedCount: 0,
            masteryPercentage: 0,
            overview: 'Subject-verb agreement, subjunctive mood, conditionals, passive voice structures.',
            learningObjectives: [
              'Master all 25 core rules for HSC',
              'Identify passive clues in narrative passages',
              'Eliminate common tense shift errors'
            ],
            topics: [
              {
                id: 'eng-2-2-t1',
                title: 'Subject-Verb Agreement & Special Words',
                priorityCategory: 'Essential Concept',
                importanceReason: 'As well as, with, neither...nor, along with rules.',
                estimatedMinutes: 45,
                status: 'not_started',
                isConfirmedCompleted: false
              },
              {
                id: 'eng-2-2-t2',
                title: 'Conditionals, As if/As though & Wish',
                priorityCategory: 'High Priority',
                importanceReason: 'Past subjunctive and had + V3 structures.',
                estimatedMinutes: 45,
                status: 'not_started',
                isConfirmedCompleted: false
              },
              {
                id: 'eng-2-2-t3',
                title: 'Passive Structures in HSC Passages',
                priorityCategory: 'Essential Concept',
                importanceReason: 'Half the errors occur due to failing to spot passive meaning.',
                estimatedMinutes: 50,
                status: 'not_started',
                isConfirmedCompleted: false
              }
            ]
          }
        ]
      }
    ]
  },

  // 5: ICT
  {
    id: 'ict',
    name: 'তথ্য ও যোগাযোগ প্রযুক্তি (ICT)',
    englishName: 'ICT',
    code: '275',
    isCompulsory: true,
    color: '#0891b2', // Cyan
    iconName: 'cpu',
    papers: [
      {
        id: 'ict-1',
        paperNumber: 1,
        title: 'তথ্য ও যোগাযোগ প্রযুক্তি',
        englishTitle: 'Information & Communication Technology',
        chapters: [
          {
            id: 'ict-1-3',
            chapterNumber: 3,
            title: 'সংখ্যা পদ্ধতি ও ডিজিটাল লজিক',
            englishTitle: 'Number Systems & Digital Logic',
            difficulty: 'Hard',
            importance: 'Most Important (3-Star)',
            totalTopics: 4,
            status: 'not_started',
            cqSolvedCount: 0,
            mcqSolvedCount: 0,
            masteryPercentage: 0,
            overview: 'বাইনারি, ডেসিমাল, অক্টাল, হেক্সাডেসিমাল রূপান্তর, ২-এর পরিপূরক যোগ, লজিক গেট ও ডিমরগ্যান উপপাদ্য।',
            learningObjectives: [
              'যে কোনো সংখ্যা পদ্ধতির পারস্পরিক রূপান্তর',
              '২-এর পরিপূরক পদ্ধতিতে যোগের মাধ্যমে বিয়োগ',
              'মৌলিক ও যৌগিক লজিক গেট এবং সত্যক সারণি বাস্তবায়ন'
            ],
            topics: [
              {
                id: 'ict-1-3-t1',
                title: 'সংখ্যা পদ্ধতির রূপান্তর (Decimal, Binary, Octal, Hex)',
                priorityCategory: 'Essential Concept',
                importanceReason: 'সৃজনশীল ‘গ’ এবং MCQ-তে রূপান্তর থেকে বাধ্যতামূলক প্রশ্ন থাকে।',
                estimatedMinutes: 50,
                status: 'not_started',
                isConfirmedCompleted: false
              },
              {
                id: 'ict-1-3-t2',
                title: '২-এর পরিপূরক পদ্ধতি (2\'s Complement)',
                priorityCategory: 'Essential Concept',
                importanceReason: 'সৃজনশীল ‘ঘ’ তে দুজনের নম্বরের পার্থক্য নির্ণয় সর্বদা আসে।',
                estimatedMinutes: 50,
                status: 'not_started',
                isConfirmedCompleted: false
              },
              {
                id: 'ict-1-3-t3',
                title: 'লজিক গেট (AND, OR, NOT, NAND, NOR, XOR, XNOR)',
                priorityCategory: 'Essential Concept',
                importanceReason: 'সার্বজনীন গেট দ্বারা মৌলিক গেট বাস্তবায়ন বোর্ড স্ট্যান্ডার্ড।',
                estimatedMinutes: 60,
                status: 'not_started',
                isConfirmedCompleted: false
              },
              {
                id: 'ict-1-3-t4',
                title: 'এনকোডার, ডিকোডার ও হাফ/ফুল অ্যাডার',
                priorityCategory: 'High Priority',
                importanceReason: 'ডিজিটাল বর্তনীর প্রয়োগমূলক সৃজনশীল প্রশ্ন।',
                estimatedMinutes: 50,
                status: 'not_started',
                isConfirmedCompleted: false
              }
            ]
          },
          {
            id: 'ict-1-5',
            chapterNumber: 5,
            title: 'প্রোগ্রামিং ভাষা (C Programming)',
            englishTitle: 'Programming Language (C)',
            difficulty: 'Hard',
            importance: 'Most Important (3-Star)',
            totalTopics: 4,
            status: 'not_started',
            cqSolvedCount: 0,
            mcqSolvedCount: 0,
            masteryPercentage: 0,
            overview: 'অ্যালগরিদম, ফ্লোচার্ট, ডাটা টাইপ, শর্তযুক্ত বিবৃতি, লুপ (for, while, do-while), ও অ্যারে।',
            learningObjectives: [
              'ফ্লোচার্ট ও অ্যালগরিদম ডিজাইন',
              'কন্ডিশনাল স্টেটমেন্ট (if-else) এবং লুপ স্ট্রাকচার',
              'ধারা ও মৌলিক সংখ্যা নির্ণয়ের C প্রোগ্রাম রচনা'
            ],
            topics: [
              {
                id: 'ict-1-5-t1',
                title: 'অ্যালগরিদম ও ফ্লোচার্ট',
                priorityCategory: 'Essential Concept',
                importanceReason: 'সৃজনশীলের উদ্দীপক বা ‘গ’ তে ফ্লোচার্ট অঙ্কন আবশ্যক।',
                estimatedMinutes: 40,
                status: 'not_started',
                isConfirmedCompleted: false
              },
              {
                id: 'ict-1-5-t2',
                title: 'কন্ডিশনাল স্টেটমেন্ট (if, if-else, switch)',
                priorityCategory: 'Essential Concept',
                importanceReason: 'লিপ ইয়ার, ৩ সংখ্যার মধ্যে বৃহত্তম সংখ্যা নির্ণয়।',
                estimatedMinutes: 45,
                status: 'not_started',
                isConfirmedCompleted: false
              },
              {
                id: 'ict-1-5-t3',
                title: 'লুপ কন্ট্রোল স্টেটমেন্ট (for, while, do-while)',
                priorityCategory: 'Essential Concept',
                importanceReason: 'ধারার যোগফল ও সিরিজ সমাধানের জন্য অপরিহার্য।',
                estimatedMinutes: 50,
                status: 'not_started',
                isConfirmedCompleted: false
              },
              {
                id: 'ict-1-5-t4',
                title: '১ম মাত্রিক অ্যারে ও ফাংশন',
                priorityCategory: 'High Priority',
                importanceReason: 'উচ্চতর দক্ষতামূলক প্রয়োগ।',
                estimatedMinutes: 45,
                status: 'not_started',
                isConfirmedCompleted: false
              }
            ]
          }
        ]
      }
    ]
  },

  // 6 & 7: Physics 1st Paper & 2nd Paper
  {
    id: 'phy',
    name: 'পদার্থবিজ্ঞান (Physics)',
    englishName: 'Physics',
    code: '174/175',
    isCompulsory: false,
    color: '#7c3aed', // Purple
    iconName: 'atom',
    papers: [
      {
        id: 'phy-1',
        paperNumber: 1,
        title: 'পদার্থবিজ্ঞান ১ম পত্র',
        englishTitle: 'Physics 1st Paper',
        chapters: [
          {
            id: 'phy-1-2',
            chapterNumber: 2,
            title: 'ভেক্টর',
            englishTitle: 'Vectors',
            difficulty: 'Medium',
            importance: 'Most Important (3-Star)',
            totalTopics: 4,
            status: 'not_started',
            cqSolvedCount: 0,
            mcqSolvedCount: 0,
            masteryPercentage: 0,
            overview: 'ভেক্টরের সামান্তরিক সূত্র, ডট ও ক্রস গুণন, নদী-নৌকার বেগ, বৃষ্টির আপেক্ষিক বেগ এবং ভেক্টর ক্যালকুলাস।',
            learningObjectives: [
              'সামান্তরিক সূত্রে লব্ধির মান ও দিক নির্ণয়',
              'নদী পারাপারের ন্যূনতম সময় ও ন্যূনতম দূরত্বের শর্ত',
              'ডট ও ক্রস গুণনের মাধ্যমে সমান্তরাল ও লম্ব ভেক্টর প্রমাণ',
              'গ্রেডিয়েন্ট, ডাইভারজেন্স ও কার্ল এর ভৌত তাৎপর্য'
            ],
            topics: [
              {
                id: 'phy-1-2-t1',
                title: 'ভেক্টরের যোগ, বিয়োগ ও সামান্তরিক সূত্র',
                priorityCategory: 'Essential Concept',
                importanceReason: 'R = √(P² + Q² + 2PQ cosα) সূত্র ভিত্তিপ্রস্তর।',
                estimatedMinutes: 45,
                status: 'not_started',
                isConfirmedCompleted: false
              },
              {
                id: 'phy-1-2-t2',
                title: 'নদী-নৌকা ও বৃষ্টির আপেক্ষিক বেগ',
                priorityCategory: 'Essential Concept',
                importanceReason: 'বোর্ড পরীক্ষায় প্রতিবছরই এই টপিক থেকে সৃজনশীল ‘গ’ ও ‘ঘ’ আসে।',
                estimatedMinutes: 60,
                status: 'not_started',
                isConfirmedCompleted: false
              },
              {
                id: 'phy-1-2-t3',
                title: 'স্কেলার ও ভেক্টর গুণন (Dot & Cross Product)',
                priorityCategory: 'Essential Concept',
                importanceReason: 'লম্ব হওয়ার শর্ত A·B = 0 এবং সমান্তরাল হওয়ার শর্ত A × B = 0।',
                estimatedMinutes: 50,
                status: 'not_started',
                isConfirmedCompleted: false
              },
              {
                id: 'phy-1-2-t4',
                title: 'গ্রেডিয়েন্ট, ডাইভারজেন্স ও কার্ল',
                priorityCategory: 'High Priority',
                importanceReason: 'সোলেনয়েডাল (div = 0) এবং অঘূর্ণনশীল (curl = 0) শর্ত প্রমাণ।',
                estimatedMinutes: 40,
                status: 'not_started',
                isConfirmedCompleted: false
              }
            ]
          },
          {
            id: 'phy-1-4',
            chapterNumber: 4,
            title: 'নিউটনিয়ান বলবিদ্যা',
            englishTitle: 'Newtonian Mechanics',
            difficulty: 'Hard',
            importance: 'Most Important (3-Star)',
            totalTopics: 4,
            status: 'not_started',
            cqSolvedCount: 0,
            mcqSolvedCount: 0,
            masteryPercentage: 0,
            overview: 'ভরবেগের নিত্যতা, সংঘর্ষ, বলের ঘাত, রাস্তার ব্যাংকিং, কেন্দ্রমুখী বল, জড়তার ভ্রামক ও টর্ক।',
            learningObjectives: [
              'ভরবেগ ও গতিশক্তি সংরক্ষণ সূত্রের গাণিতিক সমাধান',
              'রাস্তার নিরাপদ ব্যাংকিং কোণ নির্ণয়',
              'জড়তার ভ্রামক ও চক্রগতির ব্যাসার্ধ নির্ণয়',
              'কৌণিক ভরবেগের সংরক্ষণশীলতা নীতি'
            ],
            topics: [
              {
                id: 'phy-1-4-t1',
                title: 'ভরবেগের নিত্যতা ও রকেট প্রপালশন',
                priorityCategory: 'Essential Concept',
                importanceReason: 'রকেটের ত্বরণ a = (v_r/m)(dm/dt) - g এবং বন্দুকের পশ্চাৎবেগ।',
                estimatedMinutes: 50,
                status: 'not_started',
                isConfirmedCompleted: false
              },
              {
                id: 'phy-1-4-t2',
                title: 'রাস্তার ব্যাংকিং ও কেন্দ্রমুখী বল',
                priorityCategory: 'Essential Concept',
                importanceReason: 'tan θ = v² / (rg) এবং উচ্চতা h = (v² d)/(rg) সূত্র সর্বাধিক গুরুত্বপূর্ণ।',
                estimatedMinutes: 55,
                status: 'not_started',
                isConfirmedCompleted: false
              },
              {
                id: 'phy-1-4-t3',
                title: 'জড়তার ভ্রামক ও চক্রগতির ব্যাসার্ধ',
                priorityCategory: 'High Priority',
                importanceReason: 'দণ্ড, গোলক ও চাকতির অক্ষের সাপেক্ষে জড়তার ভ্রামক নির্ণয়।',
                estimatedMinutes: 50,
                status: 'not_started',
                isConfirmedCompleted: false
              },
              {
                id: 'phy-1-4-t4',
                title: 'টর্ক ও কৌণিক ভরবেগ সংরক্ষণ',
                priorityCategory: 'Important',
                importanceReason: 'τ = Iα এবং L = Iω সংরক্ষণ নীতি।',
                estimatedMinutes: 40,
                status: 'not_started',
                isConfirmedCompleted: false
              }
            ]
          }
        ]
      },
      {
        id: 'phy-2',
        paperNumber: 2,
        title: 'পদার্থবিজ্ঞান ২য় পত্র',
        englishTitle: 'Physics 2nd Paper',
        chapters: [
          {
            id: 'phy-2-1',
            chapterNumber: 1,
            title: 'তাপগতিবিদ্যা',
            englishTitle: 'Thermodynamics',
            difficulty: 'Medium',
            importance: 'Most Important (3-Star)',
            totalTopics: 4,
            status: 'not_started',
            cqSolvedCount: 0,
            mcqSolvedCount: 0,
            masteryPercentage: 0,
            overview: 'তাপগতিবিদ্যার শূন্যতম, ১ম ও ২য় সূত্র, সমোষ্ণ ও রুদ্ধতাপীয় প্রক্রিয়া, কার্নো ইঞ্জিন এবং এন্ট্রপি।',
            learningObjectives: [
              'dQ = dU + dW সূত্রের প্রয়োগ',
              'সমোষ্ণ ও রুদ্ধতাপীয় প্রক্রিয়ায় কৃতকাজ নির্ণয়',
              'কার্নো চক্রের দক্ষতা ও উৎসের তাপমাত্রা হিসাব',
              'এন্ট্রপির পরিবর্তন ও বিশৃঙ্খলা অনুধাবন'
            ],
            topics: [
              {
                id: 'phy-2-1-t1',
                title: 'তাপগতিবিদ্যার ১ম সূত্র ও মোলার আপেক্ষিক তাপ (Cp, Cv)',
                priorityCategory: 'Essential Concept',
                importanceReason: 'Cp - Cv = R এবং γ = Cp / Cv এর ব্যবহার।',
                estimatedMinutes: 45,
                status: 'not_started',
                isConfirmedCompleted: false
              },
              {
                id: 'phy-2-1-t2',
                title: 'সমোষ্ণ ও রুদ্ধতাপীয় প্রক্রিয়া (Work Done)',
                priorityCategory: 'Essential Concept',
                importanceReason: 'PV^γ = Constant এবং রুদ্ধতাপীয় রেখা সমোষ্ণ রেখা অপেক্ষা γ গুণ খাড়া।',
                estimatedMinutes: 55,
                status: 'not_started',
                isConfirmedCompleted: false
              },
              {
                id: 'phy-2-1-t3',
                title: 'কার্নো ইঞ্জিন ও এর কর্মদক্ষতা (Carnot Cycle)',
                priorityCategory: 'Essential Concept',
                importanceReason: 'η = 1 - T2/T1 = 1 - Q2/Q1 ইঞ্জিন দক্ষতা বৃদ্ধির শর্ত।',
                estimatedMinutes: 50,
                status: 'not_started',
                isConfirmedCompleted: false
              },
              {
                id: 'phy-2-1-t4',
                title: 'এন্ট্রপি ও মহাবিশ্বের তাপীয় মৃত্যু',
                priorityCategory: 'High Priority',
                importanceReason: 'dS = dQ/T এবং অপ্রত্যাবর্তী প্রক্রিয়ায় এন্ট্রপির বৃদ্ধি।',
                estimatedMinutes: 45,
                status: 'not_started',
                isConfirmedCompleted: false
              }
            ]
          },
          {
            id: 'phy-2-3',
            chapterNumber: 3,
            title: 'চল তড়িৎ',
            englishTitle: 'Current Electricity',
            difficulty: 'Hard',
            importance: 'Most Important (3-Star)',
            totalTopics: 4,
            status: 'not_started',
            cqSolvedCount: 0,
            mcqSolvedCount: 0,
            masteryPercentage: 0,
            overview: 'ওহমের সূত্র, রোদের সূত্র ও রোধের উষ্ণতা সহগ, কার্শফের সূত্র, হুইটস্টোন ব্রিজ ও মিটার ব্রিজ।',
            learningObjectives: [
              'রোধের সমবায় ও তুল্য রোধ গণনা',
              'কার্শফের ১ম ও ২য় সূত্রের মাধ্যমে জটিল বর্তনী সমাধান',
              'হুইটস্টোন ব্রিজের সাম্যাবস্থার শর্ত প্রয়োগ'
            ],
            topics: [
              {
                id: 'phy-2-3-t1',
                title: 'রোধের উষ্ণতা সহগ ও অভ্যন্তরীণ রোধ',
                priorityCategory: 'Essential Concept',
                importanceReason: 'R_t = R_0(1 + αΔθ) এবং কোষের প্রান্তীয় বিভব V = E - Ir।',
                estimatedMinutes: 45,
                status: 'not_started',
                isConfirmedCompleted: false
              },
              {
                id: 'phy-2-3-t2',
                title: 'কার্শফের সূত্রাবলী (KCL ও KVL)',
                priorityCategory: 'Essential Concept',
                importanceReason: 'সৃজনশীলে জটিল একাধিক লুপযুক্ত বর্তনীতে তড়িৎপ্রবাহ নির্ণয়।',
                estimatedMinutes: 60,
                status: 'not_started',
                isConfirmedCompleted: false
              },
              {
                id: 'phy-2-3-t3',
                title: 'হুইটস্টোন ব্রিজ নীতি ও মিটার ব্রিজ',
                priorityCategory: 'Essential Concept',
                importanceReason: 'P/Q = R/S ভারসাম্যের শর্ত এবং অজ্ঞাত রোধ নির্ণয়।',
                estimatedMinutes: 50,
                status: 'not_started',
                isConfirmedCompleted: false
              },
              {
                id: 'phy-2-3-t4',
                title: 'শান্ট ও গ্যালভানোমিটারের রূপান্তর',
                priorityCategory: 'High Priority',
                importanceReason: 'অ্যামিটার ও ভোল্টমিটারের পাল্লা বৃদ্ধির হিসাব।',
                estimatedMinutes: 40,
                status: 'not_started',
                isConfirmedCompleted: false
              }
            ]
          }
        ]
      }
    ]
  },

  // 8 & 9: Chemistry 1st Paper & 2nd Paper
  {
    id: 'chem',
    name: 'রসায়ন (Chemistry)',
    englishName: 'Chemistry',
    code: '176/177',
    isCompulsory: false,
    color: '#e11d48', // Rose
    iconName: 'flask-conical',
    papers: [
      {
        id: 'chem-1',
        paperNumber: 1,
        title: 'রসায়ন ১ম পত্র',
        englishTitle: 'Chemistry 1st Paper',
        chapters: [
          {
            id: 'chem-1-2',
            chapterNumber: 2,
            title: 'গুণগত রসায়ন',
            englishTitle: 'Qualitative Chemistry',
            difficulty: 'Hard',
            importance: 'Most Important (3-Star)',
            totalTopics: 4,
            status: 'not_started',
            cqSolvedCount: 0,
            mcqSolvedCount: 0,
            masteryPercentage: 0,
            overview: 'পরমাণুর মডেল (বোর মডেল), কোয়ান্টাম সংখ্যা, বর্ণালী (রিডবার্গ সমীকরণ), দ্রাব্যতা ও দ্রাব্যতা গুণফল (Ksp & Kip)।',
            learningObjectives: [
              'চারটি কোয়ান্টাম সংখ্যার মান নির্ণয় ও ইলেক্ট্রন বিন্যাস',
              'হাইড্রোজেন পারমাণবিক বর্ণালীর সিরিজ ও তরঙ্গদৈর্ঘ্য নির্ণয়',
              'Kip ও Ksp তুলনার মাধ্যমে অধঃক্ষেপ পড়ার শর্ত যাচাই'
            ],
            topics: [
              {
                id: 'chem-1-2-t1',
                title: 'বোর পরমাণু মডেল ও কোয়ান্টাম সংখ্যা (n, l, m, s)',
                priorityCategory: 'Essential Concept',
                importanceReason: 'আউফবাউ নীতি, হুন্ডের নীতি ও পাউলির বর্জন নীতি।',
                estimatedMinutes: 50,
                status: 'not_started',
                isConfirmedCompleted: false
              },
              {
                id: 'chem-1-2-t2',
                title: 'হাইড্রোজেন বর্ণালী ও রিডবার্গ সমীকরণ',
                priorityCategory: 'Essential Concept',
                importanceReason: 'লাইমেন, বামার, প্যাসচেন সিরিজের তরঙ্গদৈর্ঘ্য ও ফোটন শক্তি নির্ণয়।',
                estimatedMinutes: 50,
                status: 'not_started',
                isConfirmedCompleted: false
              },
              {
                id: 'chem-1-2-t3',
                title: 'দ্রাব্যতা ও দ্রাব্যতা গুণফল (Ksp vs Kip)',
                priorityCategory: 'Essential Concept',
                importanceReason: 'সৃজনশীল ‘গ’ ও ‘ঘ’ তে নিশ্চিতভাবে অধঃক্ষেপ পড়বে কি না নির্ণয় আসে।',
                estimatedMinutes: 60,
                status: 'not_started',
                isConfirmedCompleted: false
              },
              {
                id: 'chem-1-2-t4',
                title: 'সম-আয়ন প্রভাব ও আয়ন শনাক্তকরণ',
                priorityCategory: 'High Priority',
                importanceReason: 'দ্রাব্যতা হ্রাস ও ক্যাটায়ন-অ্যানায়ন শনাক্তকারী বিকারক।',
                estimatedMinutes: 45,
                status: 'not_started',
                isConfirmedCompleted: false
              }
            ]
          },
          {
            id: 'chem-1-4',
            chapterNumber: 4,
            title: 'রাসায়নিক পরিবর্তন',
            englishTitle: 'Chemical Changes',
            difficulty: 'Hard',
            importance: 'Most Important (3-Star)',
            totalTopics: 4,
            status: 'not_started',
            cqSolvedCount: 0,
            mcqSolvedCount: 0,
            masteryPercentage: 0,
            overview: 'লা-শাতেলিয়ার নীতি, ভরক্রিয়া সূত্র, Kp ও Kc এর সমীকরণ, অম্ল-ক্ষারক তত্ত্ব, বাফার দ্রবণ ও pH গণনা।',
            learningObjectives: [
              'লা-শাতেলিয়ার নীতির আলোকে বিক্রিয়ার সাম্যাবস্থার শিফট ব্যাখ্যা',
              'Kp ও Kc এর মধ্যে সম্পর্ক প্রতিপাদন ও গাণিতিক সমাধান',
              'হেন্ডারসন-হ্যাসেলবাল্ক সমীকরণ প্রয়োগ করে বাফার দ্রবণের pH নির্ণয়'
            ],
            topics: [
              {
                id: 'chem-1-4-t1',
                title: 'লা-শাতেলিয়ার নীতি ও প্রভাবকসমূহ',
                priorityCategory: 'Essential Concept',
                importanceReason: 'তাপমাত্রা, চাপ ও ঘনমাত্রার প্রভাব প্রয়োগ।',
                estimatedMinutes: 45,
                status: 'not_started',
                isConfirmedCompleted: false
              },
              {
                id: 'chem-1-4-t2',
                title: 'Kp ও Kc এর গাণিতিক রাশিমালা',
                priorityCategory: 'Essential Concept',
                importanceReason: 'Kp = Kc(RT)^Δn সমীকরণ ও বিয়োজন মাত্রার অংক।',
                estimatedMinutes: 55,
                status: 'not_started',
                isConfirmedCompleted: false
              },
              {
                id: 'chem-1-4-t3',
                title: 'pH স্কেল ও দুর্বল এসিড/ক্ষারের বিয়োজন ধ্রুবক',
                priorityCategory: 'Essential Concept',
                importanceReason: 'pH = -log[H+] এবং Ka, Kb সম্পর্কিত গাণিতিক সমস্যা।',
                estimatedMinutes: 45,
                status: 'not_started',
                isConfirmedCompleted: false
              },
              {
                id: 'chem-1-4-t4',
                title: 'বাফার দ্রবণ ও রক্তের বাফার ক্রিয়া',
                priorityCategory: 'Essential Concept',
                importanceReason: 'pH = pKa + log([লবণ]/[এসিড]) প্রয়োগ ও রক্তে pH নিয়ন্ত্রণের মেকানিজম।',
                estimatedMinutes: 55,
                status: 'not_started',
                isConfirmedCompleted: false
              }
            ]
          }
        ]
      },
      {
        id: 'chem-2',
        paperNumber: 2,
        title: 'রসায়ন ২য় পত্র',
        englishTitle: 'Chemistry 2nd Paper',
        chapters: [
          {
            id: 'chem-2-2',
            chapterNumber: 2,
            title: 'জৈব রসায়ন',
            englishTitle: 'Organic Chemistry',
            difficulty: 'Hard',
            importance: 'Most Important (3-Star)',
            totalTopics: 5,
            status: 'not_started',
            cqSolvedCount: 0,
            mcqSolvedCount: 0,
            masteryPercentage: 0,
            overview: 'জৈব যৌগের নামকরণ, সমাণুতা (জ্যামিতিক ও আলোক সমাণুতা), ইলেকট্রোফিলিক ও নিউক্লিওফিলিক প্রতিস্থাপন বিক্রিয়া, বেনজিন ও অ্যারোমেটিসিটি, অ্যালকোহল, অ্যালডিহাইড ও কিটোন।',
            learningObjectives: [
              'IUPAC নামকরণ ও সমাণুতার শ্রেণিবিভাগ',
              'হাকেল নীতি দ্বারা অ্যারোমেটিসিটি যাচাই',
              'বেনজিনের অর্থো-প্যারা ও মেটা নির্দেশক মূলকের প্রভাব',
              'Sn1, Sn2 মেকানিজম ও টলেন বিকারক/ফেহলিং দ্রবণ টেস্ট'
            ],
            topics: [
              {
                id: 'chem-2-2-t1',
                title: 'সমাণুতা (গাঠনিক, জ্যামিতিক ও আলোক সমাণুতা)',
                priorityCategory: 'Essential Concept',
                importanceReason: 'সিস-ট্রান্স এবং কাইরাল কার্বন ও এনানশিওমার সম্পর্কিত প্রশ্ন।',
                estimatedMinutes: 50,
                status: 'not_started',
                isConfirmedCompleted: false
              },
              {
                id: 'chem-2-2-t2',
                title: 'বেনজিন ও অ্যারোমেটিসিটি (হাকেল নীতি)',
                priorityCategory: 'Essential Concept',
                importanceReason: '(4n+2)π ইলেকট্রন শর্ত ও ইলেকট্রোফিলিক প্রতিস্থাপন (নাইট্রেশন, হ্যালোজেনেশন)।',
                estimatedMinutes: 55,
                status: 'not_started',
                isConfirmedCompleted: false
              },
              {
                id: 'chem-2-2-t3',
                title: 'অ্যালকাইল হ্যালাইড ও Sn1 / Sn2 বিক্রিয়া কৌশল',
                priorityCategory: 'Essential Concept',
                importanceReason: '১°, ২°, ৩° অ্যালকাইল হ্যালাইডের সক্রিয়তার ক্রম।',
                estimatedMinutes: 50,
                status: 'not_started',
                isConfirmedCompleted: false
              },
              {
                id: 'chem-2-2-t4',
                title: 'অ্যালডিহাইড ও কিটোনের পার্থক্যকরণ পরীক্ষা',
                priorityCategory: 'Essential Concept',
                importanceReason: 'টলেন বিকারক (সিলভার দর্পণ) ও ফেহলিং দ্রবণ টেস্ট।',
                estimatedMinutes: 45,
                status: 'not_started',
                isConfirmedCompleted: false
              },
              {
                id: 'chem-2-2-t5',
                title: 'জৈব যৌগের রূপান্তর ও শনাক্তকারী পরীক্ষা',
                priorityCategory: 'High Priority',
                importanceReason: 'কার্বিল অ্যামিন পরীক্ষা, লুকাস বিকারক পরীক্ষা ইত্যাদি।',
                estimatedMinutes: 50,
                status: 'not_started',
                isConfirmedCompleted: false
              }
            ]
          },
          {
            id: 'chem-2-3',
            chapterNumber: 3,
            title: 'পরিমাণগত রসায়ন',
            englishTitle: 'Quantitative Chemistry',
            difficulty: 'Medium',
            importance: 'Most Important (3-Star)',
            totalTopics: 3,
            status: 'not_started',
            cqSolvedCount: 0,
            mcqSolvedCount: 0,
            masteryPercentage: 0,
            overview: 'মোলারিটি, মোলালিটি, পিপিএম, জারণ-বিজারণ সমতাকরণ ও টাইট্রেশন গাণিতিক সমস্যা।',
            learningObjectives: [
              'ঘনমাত্রার বিভিন্ন এককের রূপান্তর (M, %w/v, ppm)',
              'আয়ন-ইলেকট্রন পদ্ধতিতে জারণ-বিজারণ সমতাকরণ',
              'V1S1e1 = V2S2e2 সূত্রের সাহায্যে অম্ল-ক্ষার ও রেডক্স টাইট্রেশন'
            ],
            topics: [
              {
                id: 'chem-2-3-t1',
                title: 'ঘনমাত্রার বিভিন্ন একক ও দ্রবণ প্রস্তুতি',
                priorityCategory: 'Essential Concept',
                importanceReason: 'S = (1000 * w) / (M * V) এবং ppm গণনা।',
                estimatedMinutes: 45,
                status: 'not_started',
                isConfirmedCompleted: false
              },
              {
                id: 'chem-2-3-t2',
                title: 'আয়ন-ইলেকট্রন পদ্ধতিতে সমতাকরণ',
                priorityCategory: 'Essential Concept',
                importanceReason: 'KMnO4 এবং K2Cr2O7 এর সাথে FeSO4 / অক্সালিক এসিডের সমতাকরণ।',
                estimatedMinutes: 60,
                status: 'not_started',
                isConfirmedCompleted: false
              },
              {
                id: 'chem-2-3-t3',
                title: 'টাইট্রেশন ও মিশ্রণের প্রকৃতি নির্ণয়',
                priorityCategory: 'Essential Concept',
                importanceReason: 'মিশ্রণটি অম্লীয়, ক্ষারীয় না প্রশম হবে এবং অতিরিক্ত উপাদানের পরিমাণ।',
                estimatedMinutes: 55,
                status: 'not_started',
                isConfirmedCompleted: false
              }
            ]
          }
        ]
      }
    ]
  },

  // 10 & 11: Biology 1st Paper & 2nd Paper
  {
    id: 'bio',
    name: 'জীববিজ্ঞান (Biology)',
    englishName: 'Biology',
    code: '178/179',
    isCompulsory: false,
    color: '#16a34a', // Green
    iconName: 'dna',
    papers: [
      {
        id: 'bio-1',
        paperNumber: 1,
        title: 'জীববিজ্ঞান ১ম পত্র (উদ্ভিদবিজ্ঞান)',
        englishTitle: 'Biology 1st Paper (Botany)',
        chapters: [
          {
            id: 'bio-1-1',
            chapterNumber: 1,
            title: 'কোষ ও এর গঠন',
            englishTitle: 'Cell and its Structure',
            difficulty: 'Medium',
            importance: 'Most Important (3-Star)',
            totalTopics: 4,
            status: 'not_started',
            cqSolvedCount: 0,
            mcqSolvedCount: 0,
            masteryPercentage: 0,
            overview: 'কোষ প্রাচীর, প্লাজমামেমব্রেনের ফ্লুইড মোজাইক মডেল, মাইটোকন্ড্রিয়া, ক্লোরোপ্লাস্ট, ডিএনএ ভৌত ও রাসায়নিক গঠন ও ট্রান্সক্রিপশন।',
            learningObjectives: [
              'ফ্লুইড মোজাইক মডেলের চিহ্নিত চিত্র ও বর্ণনা',
              'ক্লোরোপ্লাস্ট ও মাইটোকন্ড্রিয়ার গঠনগত তুলনা',
              'ওয়াটসন-ক্রিক ডিএনএ ডাবল হেলিক্স মডেল',
              'ডিএনএ অনুলিপন ও প্রোটিন সংশ্লেষণ'
            ],
            topics: [
              {
                id: 'bio-1-1-t1',
                title: 'প্লাজমামেমব্রেন ও ফ্লুইড মোজাইক মডেল',
                priorityCategory: 'Essential Concept',
                importanceReason: 'সিঙ্গার ও নিকলসন কর্তৃক প্রস্তাবিত মডেলের চিহ্নিত চিত্র সৃজনশীলে নিশ্চিত।',
                estimatedMinutes: 45,
                status: 'not_started',
                isConfirmedCompleted: false
              },
              {
                id: 'bio-1-1-t2',
                title: 'ক্লোরোপ্লাস্ট ও মাইটোকন্ড্রিয়ার গঠন',
                priorityCategory: 'Essential Concept',
                importanceReason: 'কোষের রান্নাঘর ও শক্তিঘরের গঠনগত তুলনা পরীক্ষায় আসে।',
                estimatedMinutes: 45,
                status: 'not_started',
                isConfirmedCompleted: false
              },
              {
                id: 'bio-1-1-t3',
                title: 'ডিএনএ-র ভৌত গঠন (ওয়াটসন ও ক্রিক মডেল)',
                priorityCategory: 'Essential Concept',
                importanceReason: 'ডাবল হেলিক্সের ব্যাস, পেঁচের দৈর্ঘ্য ও হাইড্রোজেন বন্ড সংখ্যা।',
                estimatedMinutes: 45,
                status: 'not_started',
                isConfirmedCompleted: false
              },
              {
                id: 'bio-1-1-t4',
                title: 'রেপ্লিকেশন, ট্রান্সক্রিপশন ও ট্রান্সলেশন',
                priorityCategory: 'High Priority',
                importanceReason: 'সেন্ট্রাল ডগমা ও প্রোটিন সংশ্লেষণের ধাপসমূহ।',
                estimatedMinutes: 50,
                status: 'not_started',
                isConfirmedCompleted: false
              }
            ]
          },
          {
            id: 'bio-1-9',
            chapterNumber: 9,
            title: 'উদ্ভিদ শারীরতত্ত্ব',
            englishTitle: 'Plant Physiology',
            difficulty: 'Hard',
            importance: 'Most Important (3-Star)',
            totalTopics: 3,
            status: 'not_started',
            cqSolvedCount: 0,
            mcqSolvedCount: 0,
            masteryPercentage: 0,
            overview: 'খনিজ লবণ পরিশোষণ, সালোকসংশ্লেষণ (C3 ও C4 চক্র) এবং শ্বসন (গ্লাইকোলাইসিস ও ক্রেবস চক্র)।',
            learningObjectives: [
              'লুনডেগড় মতবাদ ও সক্রিয় খনিজ লবণ পরিশোষণ',
              'কেলভিন চক্র (C3) ও হ্যাচ-স্ল্যাক চক্রের (C4) পার্থক্য',
              'ক্রেবস চক্রের ধাপ ও মোট এটিপি (ATP) হিসাব'
            ],
            topics: [
              {
                id: 'bio-1-9-t1',
                title: 'খনিজ লবণ পরিশোষণ মতবাদ',
                priorityCategory: 'Important',
                importanceReason: 'সাইটোক্রোম পাম্প মতবাদ ও ডোনান সাম্যাবস্থা।',
                estimatedMinutes: 40,
                status: 'not_started',
                isConfirmedCompleted: false
              },
              {
                id: 'bio-1-9-t2',
                title: 'সালোকসংশ্লেষণ (আলোক ও অন্ধকার পর্যায় - C3 ও C4)',
                priorityCategory: 'Essential Concept',
                importanceReason: 'ক্র্যাঞ্জ এনাটমি ও C3 বনাম C4 উদ্ভিদের তুলনামূলক প্রশ্ন।',
                estimatedMinutes: 55,
                status: 'not_started',
                isConfirmedCompleted: false
              },
              {
                id: 'bio-1-9-t3',
                title: 'শ্বসন (গ্লাইকোলাইসিস ও ক্রেবস চক্র)',
                priorityCategory: 'Essential Concept',
                importanceReason: '১ অণু গ্লুকোজ জারণে উৎপাদিত ৩০টি/৩২টি এটিপি এর ব্যালেন্স শিট।',
                estimatedMinutes: 55,
                status: 'not_started',
                isConfirmedCompleted: false
              }
            ]
          }
        ]
      },
      {
        id: 'bio-2',
        paperNumber: 2,
        title: 'জীববিজ্ঞান ২য় পত্র (প্রাণিবিজ্ঞান)',
        englishTitle: 'Biology 2nd Paper (Zoology)',
        chapters: [
          {
            id: 'bio-2-1',
            chapterNumber: 1,
            title: 'প্রাণীর বিভিন্নতা ও শ্রেণিবিন্যাস',
            englishTitle: 'Animal Diversity & Classification',
            difficulty: 'Medium',
            importance: 'Most Important (3-Star)',
            totalTopics: 3,
            status: 'not_started',
            cqSolvedCount: 0,
            mcqSolvedCount: 0,
            masteryPercentage: 0,
            overview: 'শ্রেণিবিন্যাসের ভিত্তি (প্রতিসাম্য, সিলোম, খণ্ডকায়ন) এবং প্রধান ৯টি পর্বের বৈশিষ্ট্য ও উদাহরণ।',
            learningObjectives: [
              'প্রতিসাম্যতা ও সিলোমের ভিত্তিতে পর্বসমূহের বিভাজন',
              'Cnidaria, Platyhelminthes, Annelida, Arthropoda, Mollusca পর্বের অনন্য বৈশিষ্ট্য',
              'Chordata পর্বের উপপর্ব ও শ্রেণির বৈশিষ্ট্য'
            ],
            topics: [
              {
                id: 'bio-2-1-t1',
                title: 'শ্রেণিবিন্যাসের ভিত্তিসমূহ (সিলোম, প্রতিসাম্য, নটোকর্ড)',
                priorityCategory: 'Essential Concept',
                importanceReason: 'অ্যাসিলোমেট, সিউডোসিলোমেট ও ইউসিলোমেটের উদাহরণ MCQ তে আসে।',
                estimatedMinutes: 45,
                status: 'not_started',
                isConfirmedCompleted: false
              },
              {
                id: 'bio-2-1-t2',
                title: 'নন-কর্ডাটা পর্বসমূহের শনাক্তকারী বৈশিষ্ট্য',
                priorityCategory: 'Essential Concept',
                importanceReason: 'সৃজনশীল ‘গ’ তে নির্দিষ্ট পর্বের ৩টি বৈশিষ্ট্য ও বৈজ্ঞানিক নাম আসে।',
                estimatedMinutes: 50,
                status: 'not_started',
                isConfirmedCompleted: false
              },
              {
                id: 'bio-2-1-t3',
                title: 'কর্ডাটা পর্বের উপপর্ব ও শ্রেণিবিভাগ',
                priorityCategory: 'High Priority',
                importanceReason: 'Chondrichthyes vs Osteichthyes এর পার্থক্য।',
                estimatedMinutes: 45,
                status: 'not_started',
                isConfirmedCompleted: false
              }
            ]
          },
          {
            id: 'bio-2-4',
            chapterNumber: 4,
            title: 'মানব শারীরতত্ত্ব: রক্ত ও সংবহন',
            englishTitle: 'Human Physiology: Blood & Circulation',
            difficulty: 'Hard',
            importance: 'Most Important (3-Star)',
            totalTopics: 4,
            status: 'not_started',
            cqSolvedCount: 0,
            mcqSolvedCount: 0,
            masteryPercentage: 0,
            overview: 'রক্তরস ও রক্তকণিকা, রক্ত তঞ্চন প্রক্রিয়া, হৃদপিণ্ডের গঠন, রক্ত সংবহন চক্র, মায়োজেনিক নিয়ন্ত্রণ ও হৃদরোগ।',
            learningObjectives: [
              'রক্ত তঞ্চনের ১৩টি ফ্যাক্টর ও তঞ্চন ধাপসমূহ',
              'হৃদপিণ্ডের লম্বচ্ছেদের চিহ্নিত চিত্র ও দ্বৈত সংবহন',
              'জাংশনাল টিস্যু (SA Node, AV Node, Purkinje Fiber) ও মায়োজেনিক স্পন্দন'
            ],
            topics: [
              {
                id: 'bio-2-4-t1',
                title: 'রক্তের উপাদান ও রক্ত তঞ্চন ক্রিয়া',
                priorityCategory: 'Essential Concept',
                importanceReason: 'প্রোথ্রম্বিন থেকে থ্রম্বিন এবং ফাইব্রিন জালক সৃষ্টির ধাপ।',
                estimatedMinutes: 45,
                status: 'not_started',
                isConfirmedCompleted: false
              },
              {
                id: 'bio-2-4-t2',
                title: 'হৃদপিণ্ডের গঠন ও কার্ডিয়াক চক্র (Systole & Diastole)',
                priorityCategory: 'Essential Concept',
                importanceReason: 'অলিন্দ ও নিলয়ের ডায়াস্টোল-সিস্টোলের সময়কাল (০.৮ সেকেন্ড)।',
                estimatedMinutes: 50,
                status: 'not_started',
                isConfirmedCompleted: false
              },
              {
                id: 'bio-2-4-t3',
                title: 'মায়োজেনিক নিয়ন্ত্রণ ও পেসমেকার (SA Node)',
                priorityCategory: 'Essential Concept',
                importanceReason: 'SA নোডকে কেন প্রাকৃতিক পেসমেকার বলা হয় ব্যাখ্যা।',
                estimatedMinutes: 45,
                status: 'not_started',
                isConfirmedCompleted: false
              },
              {
                id: 'bio-2-4-t4',
                title: 'হৃদরোগের কারণ ও প্রতিকার (Angioplasty & Bypass)',
                priorityCategory: 'High Priority',
                importanceReason: 'স্টেন্টিং ও ওপেন হার্ট সার্জারির তুলনামূলক বিশ্লেষণ।',
                estimatedMinutes: 40,
                status: 'not_started',
                isConfirmedCompleted: false
              }
            ]
          }
        ]
      }
    ]
  },

  // 12 & 13: Higher Mathematics 1st Paper & 2nd Paper
  {
    id: 'hmath',
    name: 'উচ্চতর গণিত (Higher Mathematics)',
    englishName: 'Higher Mathematics',
    code: '265/266',
    isCompulsory: false,
    color: '#d97706', // Amber
    iconName: 'calculator',
    papers: [
      {
        id: 'hmath-1',
        paperNumber: 1,
        title: 'উচ্চতর গণিত ১ম পত্র',
        englishTitle: 'Higher Mathematics 1st Paper',
        chapters: [
          {
            id: 'hmath-1-1',
            chapterNumber: 1,
            title: 'ম্যাট্রিক্স ও নির্ণায়ক',
            englishTitle: 'Matrices and Determinants',
            difficulty: 'Medium',
            importance: 'Most Important (3-Star)',
            totalTopics: 3,
            status: 'not_started',
            cqSolvedCount: 0,
            mcqSolvedCount: 0,
            masteryPercentage: 0,
            overview: 'ম্যাট্রিক্সের গুণন, নির্ণায়কের ধর্মাবলী, ব্যতিক্রমী ম্যাট্রিক্স, বিপরীত ম্যাট্রিক্স (Inverse Matrix) ও ক্রেমারের নিয়ম।',
            learningObjectives: [
              'দুটি ম্যাট্রিক্সের গুণনের শর্ত ও গুণফল নির্ণয়',
              'নির্ণায়কের সারী ও কলামের গুণাবলী প্রয়োগ করে প্রমাণ',
              'Adjoint ম্যাট্রিক্সের সাহায্যে Inverse ম্যাট্রিক্স ও ক্রেমার পদ্ধতিতে সমাধান'
            ],
            topics: [
              {
                id: 'hmath-1-1-t1',
                title: 'ম্যাট্রিক্সের প্রকারভেদ ও গুণন',
                priorityCategory: 'Essential Concept',
                importanceReason: 'AB সংজ্ঞায়িত হওয়ার শর্ত ও প্রতিসম/বিপ্রতিসম ম্যাট্রিক্স।',
                estimatedMinutes: 40,
                status: 'not_started',
                isConfirmedCompleted: false
              },
              {
                id: 'hmath-1-1-t2',
                title: 'নির্ণায়কের ধর্মাবলী ও প্রমাণসমূহ',
                priorityCategory: 'Essential Concept',
                importanceReason: 'সৃজনশীল ‘গ’ তে বিস্তার না করে নির্ণায়কের মান প্রমাণ বাধ্যতামূলক।',
                estimatedMinutes: 55,
                status: 'not_started',
                isConfirmedCompleted: false
              },
              {
                id: 'hmath-1-1-t3',
                title: 'বিপরীত ম্যাট্রিক্স ও ক্রেমারের নিয়ম (Cramer\'s Rule)',
                priorityCategory: 'Essential Concept',
                importanceReason: 'A^-1 = adj(A)/|A| দ্বারা ৩টি রৈখিক সমীকরণ জোটের সমাধান।',
                estimatedMinutes: 55,
                status: 'not_started',
                isConfirmedCompleted: false
              }
            ]
          },
          {
            id: 'hmath-1-9',
            chapterNumber: 9,
            title: 'অন্তরীকরণ (Differentiation)',
            englishTitle: 'Differentiation',
            difficulty: 'Hard',
            importance: 'Most Important (3-Star)',
            totalTopics: 4,
            status: 'not_started',
            cqSolvedCount: 0,
            mcqSolvedCount: 0,
            masteryPercentage: 0,
            overview: 'সীমা (Limit), মূল নিয়মে অন্তরজ নির্ণয়, পর্যায়ক্রমিক অন্তরীকরণ এবং গুরুমান ও লঘুমান।',
            learningObjectives: [
              '0/0 বা ∞/∞ আকারে এল-হসপিটাল (L\'Hôpital) রুল ও সীমার মান নির্ণয়',
              'sin x, cos x, e^x, ln x ইত্যাদির মূল নিয়মে অন্তরজ',
              'পর্যায়ক্রমিক অন্তরীকরণ (Leibnitz theorem প্রয়োগ)',
              'dy/dx = 0 এবং d²y/dx² এর চিহ্নের মাধ্যমে চরম মান নির্ণয়'
            ],
            topics: [
              {
                id: 'hmath-1-9-t1',
                title: 'ফাংশনের লিমিট ও এল-হসপিটাল নিয়ম',
                priorityCategory: 'Essential Concept',
                importanceReason: 'lim(x→0) sinx/x = 1 এবং অবিরত ফাংশনের শর্ত।',
                estimatedMinutes: 45,
                status: 'not_started',
                isConfirmedCompleted: false
              },
              {
                id: 'hmath-1-9-t2',
                title: 'মূল নিয়মে অন্তরজ নির্ণয়',
                priorityCategory: 'Essential Concept',
                importanceReason: 'বোর্ড পরীক্ষায় ২(ক) বা সৃজনশীল ‘গ’ তে নিশ্চিত প্রশ্ন।',
                estimatedMinutes: 50,
                status: 'not_started',
                isConfirmedCompleted: false
              },
              {
                id: 'hmath-1-9-t3',
                title: 'পর্যায়ক্রমিক অন্তরীকরণ (Successive Differentiation)',
                priorityCategory: 'Essential Concept',
                importanceReason: 'y_n নির্ণয় এবং সমীকরণ প্রমাণ (যেমন: (1-x²)y₂ - xy₁ + m²y = 0)।',
                estimatedMinutes: 60,
                status: 'not_started',
                isConfirmedCompleted: false
              },
              {
                id: 'hmath-1-9-t4',
                title: 'ফাংশনের গুরুমান ও লঘুমান (Maxima & Minima)',
                priorityCategory: 'Essential Concept',
                importanceReason: 'সৃজনশীল ‘ঘ’ তে সর্বোচ্চ/সর্বনিম্ন মান নির্ণয়।',
                estimatedMinutes: 55,
                status: 'not_started',
                isConfirmedCompleted: false
              }
            ]
          }
        ]
      },
      {
        id: 'hmath-2',
        paperNumber: 2,
        title: 'উচ্চতর গণিত ২য় পত্র',
        englishTitle: 'Higher Mathematics 2nd Paper',
        chapters: [
          {
            id: 'hmath-2-4',
            chapterNumber: 4,
            title: 'বহুপদী ও বহুপদী সমীকরণ',
            englishTitle: 'Polynomials & Polynomial Equations',
            difficulty: 'Medium',
            importance: 'Most Important (3-Star)',
            totalTopics: 3,
            status: 'not_started',
            cqSolvedCount: 0,
            mcqSolvedCount: 0,
            masteryPercentage: 0,
            overview: 'দ্বিঘাত সমীকরণের মূল ও সহগের সম্পর্ক, মূলের প্রকৃতি (নিশ্চায়ক), সাধারণ মূলের শর্ত ও ত্রিঘাত সমীকরণ।',
            learningObjectives: [
              'নিশ্চায়ক D = b² - 4ac এর ভিত্তিতে মূলের বাস্তব, অবাস্তব ও সমান হওয়ার শর্ত',
              'α, β মূলবিশিষ্ট সমীকরণ গঠন ও সাধারণ মূল থাকার শর্ত',
              'ত্রিঘাত ও চতুর্ঘাত সমীকরণের মূলের সম্পর্ক'
            ],
            topics: [
              {
                id: 'hmath-2-4-t1',
                title: 'দ্বিঘাত সমীকরণ ও মূলের প্রকৃতি (Discriminant)',
                priorityCategory: 'Essential Concept',
                importanceReason: 'D > 0, D = 0, D < 0 এবং পূর্ণবর্গ হওয়ার প্রভাব।',
                estimatedMinutes: 40,
                status: 'not_started',
                isConfirmedCompleted: false
              },
              {
                id: 'hmath-2-4-t2',
                title: 'মূল ও সহগের সম্পর্ক এবং নতুন সমীকরণ গঠন',
                priorityCategory: 'Essential Concept',
                importanceReason: 'α + β = -b/a, αβ = c/a এবং 1/α, 1/β মূল বিশিষ্ট সমীকরণ।',
                estimatedMinutes: 50,
                status: 'not_started',
                isConfirmedCompleted: false
              },
              {
                id: 'hmath-2-4-t3',
                title: 'একটি সাধারণ মূল থাকার শর্ত ও ত্রিঘাত সমীকরণ',
                priorityCategory: 'Essential Concept',
                importanceReason: 'বজ্রগুণন পদ্ধতিতে সাধারণ মূলের শর্ত প্রতিষ্ঠা।',
                estimatedMinutes: 55,
                status: 'not_started',
                isConfirmedCompleted: false
              }
            ]
          },
          {
            id: 'hmath-2-6',
            chapterNumber: 6,
            title: 'কণিক (Conics)',
            englishTitle: 'Conics (Parabola, Ellipse, Hyperbola)',
            difficulty: 'Hard',
            importance: 'Most Important (3-Star)',
            totalTopics: 3,
            status: 'not_started',
            cqSolvedCount: 0,
            mcqSolvedCount: 0,
            masteryPercentage: 0,
            overview: 'উপকেন্দ্রিকতা (e), পরাবৃত্ত (e=1), উপবৃত্ত (e<1) ও অধিবৃত্ত (e>1) এর সমীকরণ, শীর্ষবিন্দু, ফোকাস, দিকাক্ষ ও উপকেন্দ্রিক লম্বের দৈর্ঘ্য।',
            learningObjectives: [
              'SP = e·PM সূত্রের মাধ্যমে যে কোনো কণিকের সমীকরণ গঠন',
              'পরাবৃত্তের y² = 4ax আদর্শ রূপ ও স্থানান্তরিত পরাবৃত্তের বৈশিষ্ট্য নির্ণয়',
              'উপবৃত্ত ও অধিবৃত্তের সমীকরণ থেকে উৎকেন্দ্রিকতা, ফোকাস ও দিকাক্ষ সমীকরণ'
            ],
            topics: [
              {
                id: 'hmath-2-6-t1',
                title: 'পরাবৃত্ত (Parabola) — y² = 4ax ও x² = 4ay',
                priorityCategory: 'Essential Concept',
                importanceReason: 'শীর্ষ, ফোকাস, দিকাক্ষ সমীকরণ ও উপকেন্দ্রিক লম্ব 4a।',
                estimatedMinutes: 50,
                status: 'not_started',
                isConfirmedCompleted: false
              },
              {
                id: 'hmath-2-6-t2',
                title: 'উপবৃত্ত (Ellipse) — x²/a² + y²/b² = 1',
                priorityCategory: 'Essential Concept',
                importanceReason: 'উৎকেন্দ্রিকতা e = √(1 - b²/a²) এবং ফোকাস (±ae, 0)।',
                estimatedMinutes: 55,
                status: 'not_started',
                isConfirmedCompleted: false
              },
              {
                id: 'hmath-2-6-t3',
                title: 'অধিবৃত্ত (Hyperbola) ও স্পর্শকের শর্ত',
                priorityCategory: 'High Priority',
                importanceReason: 'e = √(1 + b²/a²) এবং অসীমতটের সমীকরণ।',
                estimatedMinutes: 50,
                status: 'not_started',
                isConfirmedCompleted: false
              }
            ]
          }
        ]
      }
    ]
  }
];

// Helper to count total confirmed syllabus topics
export const getTotalSyllabusTopicsCount = (subjects: Subject[]): number => {
  let count = 0;
  for (const subject of subjects) {
    for (const paper of subject.papers) {
      for (const chapter of paper.chapters) {
        count += chapter.topics.length;
      }
    }
  }
  return count;
};
