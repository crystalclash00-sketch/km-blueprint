import React, { useState, useMemo } from 'react';
import { useApp } from '../context/AppContext';
import { QuestionBankItem } from '../types';
import {
  HelpCircle,
  BookOpen,
  Filter,
  CheckCircle,
  XCircle,
  Layers,
  ChevronRight,
  ChevronDown,
  Sparkles,
  ArrowRight,
  Search,
  Award,
  Clock,
  RotateCcw
} from 'lucide-react';
import { startNewExamAttempt } from '../services/examService';

export interface CreativeQuestionItem {
  id: string;
  subjectId: string;
  paperNumber: 1 | 2;
  chapterId: string;
  chapterTitle: string;
  boardOrVarsity: string;
  year: number;
  stimulus: string;
  subQuestions: {
    part: 'ক' | 'খ' | 'গ' | 'ঘ';
    type: 'জ্ঞানমূলক' | 'অনুধাবনমূলক' | 'প্রয়োগমূলক' | 'উচ্চতর দক্ষতামূলক';
    marks: number;
    question: string;
    modelAnswer: string;
  }[];
}

const defaultCreativeQuestions: CreativeQuestionItem[] = [
  // Physics 1st Paper - Vectors
  {
    id: 'cq-phy-1',
    subjectId: 'phy',
    paperNumber: 1,
    chapterId: 'phy-1-2',
    chapterTitle: 'ভেক্টর (Vectors)',
    boardOrVarsity: 'ঢাকা বোর্ড ২০২৩ (Dhaka Board 2023)',
    year: 2023,
    stimulus: 'একটি নদীতে স্রোতের বেগ 4 km/h। একজন সাঁতারুর শান্ত পানিতে সাঁতার কাটার বেগ 8 km/h। নদীর প্রস্থ 1.5 km। তিনি দুইভাবে নদী পার হতে পারেন: (i) সোজাসুজি অপর পাড়ে পৌঁছানো, এবং (ii) ন্যূনতম সময়ে অপর পাড়ে পৌঁছানো।',
    subQuestions: [
      {
        part: 'ক',
        type: 'জ্ঞানমূলক',
        marks: 1,
        question: 'অবস্থান ভেক্টর কাকে বলে?',
        modelAnswer: 'প্রসঙ্গ কাঠামোর মূল বিন্দুর সাপেক্ষে কোনো বিন্দুর অবস্থান নির্দেশকারী ভেক্টরকে অবস্থান ভেক্টর বা ব্যাসার্ধ ভেক্টর (Radius Vector) বলে।'
      },
      {
        part: 'খ',
        type: 'অনুধাবনমূলক',
        marks: 2,
        question: 'দুটি সমান ভেক্টরের লব্ধি কি শূন্য হতে পারে? ব্যাখ্যা করো।',
        modelAnswer: 'হ্যাঁ, দুটি সমান ভেক্টরের লব্ধি শূন্য হতে পারে যদি তাদের মধ্যবর্তী কোণ ১৮০° হয়। সূত্রানুসারে: R = √(P² + P² + 2P² cos 180°) = √(2P² - 2P²) = 0। অর্থাৎ ভেক্টর দুটি পরস্পর বিপরীতমুখী হলে লব্ধি শূন্য হবে।'
      },
      {
        part: 'গ',
        type: 'প্রয়োগমূলক',
        marks: 3,
        question: 'সোজাসুজি অপর পাড়ে পৌঁছাতে হলে সাঁতারুকে স্রোতের সাথে কত কোণে যাত্রা করতে হবে?',
        modelAnswer: 'সোজাসুজি নদী পারাপারের ক্ষেত্রে লব্ধি বেগ স্রোতের সাথে ৯০° কোণ তৈরি করে। সূত্র: cos α = -u / v = -4 / 8 = -0.5। অতএব, α = cos⁻¹(-0.5) = 120°। অর্থাৎ সাঁতারুকে স্রোতের সাথে ১২০° কোণে যাত্রা করতে হবে।'
      },
      {
        part: 'ঘ',
        type: 'উচ্চতর দক্ষতামূলক',
        marks: 4,
        question: 'উদ্দীপকের কোন ক্ষেত্রে নদী পার হতে সময় কম লাগবে? গাণিতিকভাবে বিশ্লেষণ করো।',
        modelAnswer: 'ক্ষেত্র (i) সোজাসুজি পারাপার: লব্ধি বেগ w = √(v² - u²) = √(8² - 4²) = √48 = 6.928 km/h। সময় t₁ = d / w = 1.5 / 6.928 = 0.2165 ঘণ্টা = 13 মিনিট। ক্ষেত্র (ii) ন্যূনতম সময়ে পারাপার: α = 90° কোণে যাত্রা করলে সময় t₂ = d / v = 1.5 / 8 = 0.1875 ঘণ্টা = 11.25 মিনিট। যেহেতু t₂ < t₁, তাই ন্যূনতম সময়ে (α = 90°) যাত্রা করলে সময় কম লাগবে।'
      }
    ]
  },

  // Chemistry 2nd Paper - Organic Chemistry
  {
    id: 'cq-chem-1',
    subjectId: 'chem',
    paperNumber: 2,
    chapterId: 'chem-2-2',
    chapterTitle: 'জৈব রসায়ন (Organic Chemistry)',
    boardOrVarsity: 'বুয়েট ভর্তি পরীক্ষা ও রাজশাহী বোর্ড ২০২২',
    year: 2022,
    stimulus: 'যৌগ ‘A’ (C₆H₆) একটি অ্যারোমেটিক হাইড্রোকার্বন। ৫০°-৬০°C তাপমাত্রায় গাঢ় HNO₃ ও গাঢ় H₂SO₄ এর উপস্থিতিতে ‘A’ বিক্রিয়া করে যৌগ ‘B’ তৈরি করে। পরবর্তীতে Sn ও গাঢ় HCl দ্বারা বিজারিত করলে তীব্র ক্ষারধর্মী যৌগ ‘C’ উৎপন্ন হয়।',
    subQuestions: [
      {
        part: 'ক',
        type: 'জ্ঞানমূলক',
        marks: 1,
        question: 'হাকেল নীতি (Hückel\'s Rule) কী?',
        modelAnswer: 'যেসব সমতলীয় চাক্রিক যৌগে (4n + 2) সংখ্যক সঞ্চারণশীল π-ইলেকট্রন (delocalized pi electrons) বিদ্যমান থাকে, তারা অ্যারোমেটিক বৈশিষ্ট্য প্রদর্শন করে (যেখানে n = 0, 1, 2, ...)।'
      },
      {
        part: 'খ',
        type: 'অনুধাবনমূলক',
        marks: 2,
        question: 'বেনজিনে তিনটি দ্বিবন্ধন থাকা সত্ত্বেও এটি কেন যুত বিক্রিয়া অপেক্ষা প্রতিস্থাপন বিক্রিয়া সহজে দেয়?',
        modelAnswer: 'বেনজিনে ৬টি π-ইলেকট্রন বলয়াকারে সঞ্চারিত হয়ে উচ্চ রেজোন্যান্স স্থায়িত্ব বা অ্যারোমেটিক স্থিতিশীলতা (১৫০.৬ kJ/mol) অর্জন করে। যুত বিক্রিয়ায় এই সুস্থিত বলয় ভেঙে যায়, কিন্তু ইলেকট্রোফিলিক প্রতিস্থাপন বিক্রিয়ায় অ্যারোমেটিসিটি অক্ষুণ্ণ থাকে।'
      },
      {
        part: 'গ',
        type: 'প্রয়োগমূলক',
        marks: 3,
        question: 'উদ্দীপকের ‘A’ থেকে ‘B’ রূপান্তরের কৌশল (ইলেকট্রোফিলিক নাইট্রেশন) সমীকরণসহ দেখাও।',
        modelAnswer: '১ম ধাপ: গাঢ় HNO₃ + 2H₂SO₄ ⇌ NO₂⁺ + H₃O⁺ + 2HSO₄⁻ (ইলেকট্রোফাইল NO₂⁺ সৃষ্টি)। ২য় ধাপ: বেনজিন বলয়ে NO₂⁺ এর আক্রমণে সিগমা জটিল কার্বোক্যাটায়ন তৈরি। ৩য় ধাপ: HSO₄⁻ দ্বারা প্রোটন (H⁺) অপসারণের মাধ্যমে নাইট্রোবেনজিন (B) তৈরি।'
      },
      {
        part: 'ঘ',
        type: 'উচ্চতর দক্ষতামূলক',
        marks: 4,
        question: 'যৌগ ‘C’ (অ্যানিলিন) কি ক্ষারধর্মী? মিথাইল অ্যামিনের সাথে এর ক্ষারকত্বের তুলনা বিশ্লেষণ করো।',
        modelAnswer: 'যৌগ C হলো অ্যানিলিন (C₆H₅NH₂)। নাইট্রোজেনের মুক্তজোড় ইলেকট্রন বেনজিন বলয়ের π-রেজোন্যান্সে অংশ নেওয়ায় প্রোটন গ্রহণের জন্য কম লভ্য হয়। পক্ষান্তরে মিথাইল অ্যামিনে (+I) আবেশীয় প্রভাবের কারণে নাইট্রোজেনের ইলেকট্রন ঘনত্ব বাড়ে। ফলে অ্যানিলিনের ক্ষারকত্ব মিথাইল অ্যামিন অপেক্ষা কম।'
      }
    ]
  },

  // Biology 1st Paper - Cell & Structure
  {
    id: 'cq-bio-1',
    subjectId: 'bio',
    paperNumber: 1,
    chapterId: 'bio-1-1',
    chapterTitle: 'কোষ ও এর গঠন (Cell & Structure)',
    boardOrVarsity: 'চট্টগ্রাম বোর্ড ২০২৩ (Chittagong Board 2023)',
    year: 2023,
    stimulus: 'জীবদেহের গঠন ও কাজের একক হলো কোষ। উদ্ভিদ কোষে এমন একটি দ্বিস্তরী অঙ্গাণু বিদ্যমান যা সৌরশক্তিকে রাসায়নিক শক্তিতে রূপান্তর করে খাদ্য তৈরি করে। অন্য আরেকটি দ্বিত্বত্বীয় অঙ্গাণু ক্রেবস চক্র ও এটিপি সংশ্লেষের মাধ্যমে জৈবনিক শক্তি উৎপাদন করে।',
    subQuestions: [
      {
        part: 'ক',
        type: 'জ্ঞানমূলক',
        marks: 1,
        question: 'কোষের শক্তিঘর (Powerhouse) কাকে বলা হয়?',
        modelAnswer: 'মাইটোকন্ড্রিয়াকে কোষের শক্তিঘর বা Powerhouse of the cell বলা হয়।'
      },
      {
        part: 'খ',
        type: 'অনুধাবনমূলক',
        marks: 2,
        question: 'ক্লোরোপ্লাস্টকে কেন আধা-স্বয়ংক্রিয় (Semi-autonomous) অঙ্গাণু বলা হয়?',
        modelAnswer: 'ক্লোরোপ্লাস্টে নিজস্ব বৃত্তাকার DNA এবং 70S রাইবোসোম থাকায় এটি স্বপ্রজননে সক্ষম এবং নিজস্ব প্রয়োজনীয় অনেক এনজাইম নিজেই সংশ্লেষ করতে পারে। তাই একে আধা-স্বয়ংক্রিয় অঙ্গাণু বলে।'
      },
      {
        part: 'গ',
        type: 'প্রয়োগমূলক',
        marks: 3,
        question: 'উদ্দীপকের খাদ্য তৈরিকারী অঙ্গাণুটির (ক্লোরোপ্লাস্ট) চিহ্নিত চিত্র ও প্রধান অংশগুলোর বর্ণনা দাও।',
        modelAnswer: 'ক্লোরোপ্লাস্টের প্রধান অংশগুলো: (১) দ্বিস্তরী আবরণী ঝিল্লি (বহিঃপর্দা ও অন্তঃপর্দা), (২) প্রোটিনসমৃদ্ধ স্ট্রোমা ম্যাট্রিক্স, (৩) থাইলাকয়েড ও গ্রানাম স্তূপ, (৪) স্ট্রোমা ল্যামেলি, (৫) ক্লোরোপ্লাস্ট DNA ও 70S রাইবোসোম।'
      },
      {
        part: 'ঘ',
        type: 'উচ্চতর দক্ষতামূলক',
        marks: 4,
        question: '“উদ্দীপকে উল্লেখিত অঙ্গাণুদ্বয়ের পারস্পরিক সহযোগিতা ছাড়া প্রাণিজগতের অস্তিত্ব অসম্ভব”—বিশ্লেষণ করো।',
        modelAnswer: 'ক্লোরোপ্লাস্ট সালোকসংশ্লেষণের মাধ্যমে সৌরশক্তিকে গ্লুকোজ শক্তিতে রূপান্তর করে এবং O₂ মুক্ত করে। মাইটোকন্ড্রিয়া এই O₂ ও খাদ্য ব্যবহার করে কোষীয় শ্বসনে ATP উৎপাদন করে। ক্লোরোপ্লাস্ট ছাড়া খাদ্য ও O₂ তৈরি হতো না, আর মাইটোকন্ড্রিয়া ছাড়া শক্তি মোচন হতো না। অতএব উভয়ের সমন্বয়েই জীবজগত টিকে আছে।'
      }
    ]
  },

  // Higher Math 1st Paper - Matrices
  {
    id: 'cq-math-1',
    subjectId: 'hmath',
    paperNumber: 1,
    chapterId: 'hmath-1-1',
    chapterTitle: 'ম্যাট্রিক্স ও নির্ণায়ক (Matrices & Determinants)',
    boardOrVarsity: 'ঢাকা বোর্ড ২০২২ ও বুয়েট ভর্তি পরীক্ষা',
    year: 2022,
    stimulus: 'ধরি, ম্যাট্রিক্স A = [[1, 2, 3], [0, 1, 4], [5, 6, 0]] এবং একটি তিন চলকের সমীকরণ জোট: x + 2y + z = 8, 2x - y + z = 3, x + y - z = 0।',
    subQuestions: [
      {
        part: 'ক',
        type: 'জ্ঞানমূলক',
        marks: 1,
        question: 'ব্যতিক্রমী (Singular) ম্যাট্রিক্স কাকে বলে?',
        modelAnswer: 'যে বর্গ ম্যাট্রিক্সের নির্ণায়কের মান শূন্য (det A = 0), তাকে ব্যতিক্রমী বা সিঙ্গুলার ম্যাট্রিক্স বলে।'
      },
      {
        part: 'খ',
        type: 'অনুধাবনমূলক',
        marks: 2,
        question: 'A এবং B প্রতিসম ম্যাট্রিক্স হলে প্রমাণ করো যে AB + BA একটি প্রতিসম ম্যাট্রিক্স।',
        modelAnswer: '(AB + BA)ᵀ = (AB)ᵀ + (BA)ᵀ = BᵀAᵀ + AᵀBᵀ = BA + AB = AB + BA। যেহেতু ট্রান্সপোজ ম্যাট্রিক্স মূল ম্যাট্রিক্সের সমান, তাই AB + BA প্রতিসম।'
      },
      {
        part: 'গ',
        type: 'প্রয়োগমূলক',
        marks: 3,
        question: 'ক্রেমারের নিয়মে (Cramer\'s Rule) উদ্দীপকের সমীকরণ জোটটি সমাধান করো।',
        modelAnswer: 'D = |[1, 2, 1], [2, -1, 1], [1, 1, -1]| = 1(1-1) - 2(-2-1) + 1(2+1) = 0 + 6 + 3 = 9। Dx = 9, Dy = 18, Dz = 27। অতএব x = Dx/D = 1, y = Dy/D = 2, z = Dz/D = 3।'
      },
      {
        part: 'ঘ',
        type: 'উচ্চতর দক্ষতামূলক',
        marks: 4,
        question: 'A ম্যাট্রিক্সটির বিপরীত ম্যাট্রিক্স (A⁻¹) নির্ণয় করো এবং দেখাও যে A · A⁻¹ = I।',
        modelAnswer: 'det(A) = 1(0 - 24) - 2(0 - 20) + 3(0 - 5) = -24 + 40 - 15 = 1 ≠ 0। সহগুণক ম্যাট্রিক্সের ট্রান্সপোজ করে adj(A) নির্ণয় করে A⁻¹ = adj(A) / det(A) হিসাব করলে A⁻¹ পাওয়া যায় এবং গুণফল একক ম্যাট্রিক্স I₃ গঠন করে।'
      }
    ]
  },

  // Bangla 1st Paper - Oporichita
  {
    id: 'cq-ban-1',
    subjectId: 'ban',
    paperNumber: 1,
    chapterId: 'ban-1-1',
    chapterTitle: 'অপরিচিতা — রবীন্দ্রনাথ ঠাকুর',
    boardOrVarsity: 'যশোর বোর্ড ২০২৩ (Jessore Board 2023)',
    year: 2023,
    stimulus: 'শফিক সাহেব তাঁর একমাত্র কন্যা মেধার বিয়ে ঠিক করলেন এক সম্ভ্রান্ত পরিবারে। বিয়ের আসরে পাত্রের পিতা শর্ত দিলেন যে, পূর্বে প্রতিশ্রুত ১৫ ভরি স্বর্ণালঙ্কারের সাথে আরও নগদ ৫ লাখ টাকা দিতে হবে, অন্যথায় বিয়ে হবে না। মেধা দৃঢ়কণ্ঠে বলে উঠল—"বাবা, যারা আমাকে টাকার অঙ্কে বিচার করে, এমন লোভী পরিবারে আমি কোনোদিন যাব না।"',
    subQuestions: [
      {
        part: 'ক',
        type: 'জ্ঞানমূলক',
        marks: 1,
        question: 'অনুপমের বন্ধুর নাম কী ছিল?',
        modelAnswer: 'অনুপমের বন্ধুর নাম ছিল হরিশ।'
      },
      {
        part: 'খ',
        type: 'অনুধাবনমূলক',
        marks: 2,
        question: '‘তাহাকে কোনো বিষয়েই ভাবিতে হইত না’—অনুপম সম্পর্কে একথা কেন বলা হয়েছে?',
        modelAnswer: 'অনুপমের ব্যক্তিত্বহীনতা ও পরনির্ভরশীলতার কারণে একথা বলা হয়েছে। তার সংসারের যাবতীয় সিদ্ধান্ত নিতেন তার কর্তৃত্বপরায়ণ মামা। ফলে জীবনের কোনো দায়দায়িত্ব অনুপমকে নিজে বহন করতে হয়নি।'
      },
      {
        part: 'গ',
        type: 'প্রয়োগমূলক',
        marks: 3,
        question: 'উদ্দীপকের শফিক সাহেবের সাথে ‘অপরিচিতা’ গল্পের শম্ভুনাথ সেনের মানসিকতার সাদৃশ্য নিরূপণ করো।',
        modelAnswer: 'উদ্দীপকের শফিক সাহেব এবং গল্পের শম্ভুনাথ সেন উভয়েই কন্যার আত্মমর্যাদায় বিশ্বাসী পিতা। শম্ভুনাথ বাবু যেমন যৌতুকের লোভী মামার আচরণে আপস না করে বরযাত্রীদের খাইয়ে বিদায় দিয়েছিলেন, তেমনি শফিক সাহেবও কন্যার প্রতিবাদে সমর্থন জানান।'
      },
      {
        part: 'ঘ',
        type: 'উচ্চতর দক্ষতামূলক',
        marks: 4,
        question: '“উদ্দীপকের মেধা যেন ‘অপরিচিতা’ গল্পের কল্যাণীরই প্রতিচ্ছবি”—মন্তব্যটির যথার্থতা যাচাই করো।',
        modelAnswer: 'মন্তব্যটি যথার্থ। ‘অপরিচিতা’ গল্পে কল্যাণী যৌতুকের অপমানে ভেঙে না পড়ে নারীশিক্ষার ব্রত নিয়ে আজীবন আত্মমর্যাদা নিয়ে চলার পথ বেছে নিয়েছিল। উদ্দীপকের মেধাও তেমনি লোভী পাত্রপক্ষের বিরুদ্ধে বলিষ্ঠ প্রতিবাদ জানিয়ে নিজের সম্মান রক্ষা করেছে।'
      }
    ]
  }
];

export const QuestionBankView: React.FC = () => {
  const {
    curriculum,
    questionBank,
    selectedSubjectId,
    setSelectedSubjectId,
    selectedPaperNumber,
    setSelectedPaperNumber,
    selectedChapterId,
    setSelectedChapterId,
    setActivePage,
    setActiveExamAttempt,
    studentData
  } = useApp();

  const [activeTabMode, setActiveTabMode] = useState<'mcq' | 'cq'>('mcq');
  const [filterSource, setFilterSource] = useState<'all' | 'board' | 'varsity' | 'km'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedSolutions, setExpandedSolutions] = useState<Record<string, boolean>>({});
  const [expandedCqs, setExpandedCqs] = useState<Record<string, boolean>>({ 'cq-phy-1': true });

  // 1. Current Subject
  const currentSubject = curriculum.find(s => s.id === selectedSubjectId) || curriculum[0];

  // 2. Current Paper
  const currentPaper = currentSubject.papers.find(p => p.paperNumber === selectedPaperNumber) || currentSubject.papers[0];

  // 3. Current Chapter
  const currentChapter = currentPaper.chapters.find(c => c.id === selectedChapterId) || currentPaper.chapters[0];

  // Filtered MCQs
  const filteredMcqs = useMemo(() => {
    return questionBank.filter(q => {
      // Subject match
      if (q.subjectId !== currentSubject.id) return false;
      // Paper match
      if (q.paperNumber !== currentPaper.paperNumber) return false;
      // Chapter match
      if (currentChapter && q.chapterId && q.chapterId !== currentChapter.id) {
        // Also allow matching if subject has few questions
        // Keep chapter filter active if matching questions exist
      }

      // Source filter
      if (filterSource === 'board' && q.origin !== 'Official Board Question') return false;
      if (filterSource === 'km' && q.origin !== 'Original K&M Practice') return false;

      // Search query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchQ = q.questionText.toLowerCase().includes(query);
        const matchExp = q.explanation?.toLowerCase().includes(query);
        if (!matchQ && !matchExp) return false;
      }

      return true;
    });
  }, [questionBank, currentSubject.id, currentPaper.paperNumber, currentChapter?.id, filterSource, searchQuery]);

  // Filtered CQs
  const filteredCqs = useMemo(() => {
    return defaultCreativeQuestions.filter(cq => {
      if (cq.subjectId !== currentSubject.id) return false;
      if (cq.paperNumber !== currentPaper.paperNumber) return false;
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        return cq.stimulus.toLowerCase().includes(query) || cq.subQuestions.some(sq => sq.question.toLowerCase().includes(query));
      }
      return true;
    });
  }, [currentSubject.id, currentPaper.paperNumber, searchQuery]);

  const toggleSolution = (id: string) => {
    setExpandedSolutions(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleCq = (id: string) => {
    setExpandedCqs(prev => ({ ...prev, [id]: !prev[id] }));
  };

  // Launch practice exam from current selection
  const handleLaunchPracticeExam = () => {
    const attempt = startNewExamAttempt(
      studentData.userId,
      currentSubject.id,
      currentPaper.paperNumber,
      currentChapter ? [currentChapter.id] : [],
      questionBank,
      15,
      15
    );
    setActiveExamAttempt(attempt);
    setActivePage('exam_runner');
  };

  return (
    <div className="space-y-6 pb-12 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300">
              K&M ভেরিফাইড প্রশ্ন ভাণ্ডার
            </span>
            <span className="text-xs font-mono font-bold text-slate-400">
              ২০১০–২০২৬ এইচএসসি ও ভর্তি
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
            প্রশ্ন ব্যাংক ও বিগত বোর্ড প্রশ্নপত্র (Question Bank)
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
            বিষয়ভিত্তিক, অধ্যায়ভিত্তিক এবং বোর্ড স্ট্যান্ডার্ড বহুনির্বাচনী ও সৃজনশীল প্রশ্নের স্টেপ-বাই-স্টেপ সমাধান
          </p>
        </div>

        <button
          onClick={handleLaunchPracticeExam}
          className="px-4 py-2.5 rounded-2xl text-xs font-bold bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 shadow-md shadow-blue-500/20 flex items-center gap-2 shrink-0"
        >
          <Sparkles className="w-4 h-4" />
          <span>এই অধ্যায়ের লাইভ টেস্ট দিন</span>
        </button>
      </div>

      {/* LEVEL 1: Subject Selector */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-4 sm:p-5 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
        <div className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
          <BookOpen className="w-3.5 h-3.5 text-blue-500" />
          <span>১. বিষয় নির্বাচন করুন (Select Subject):</span>
        </div>
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          {curriculum.map(subject => {
            const isSelected = subject.id === currentSubject.id;
            return (
              <button
                key={subject.id}
                onClick={() => setSelectedSubjectId(subject.id)}
                className={`px-4 py-2.5 rounded-2xl text-xs font-bold shrink-0 transition flex items-center gap-2 ${
                  isSelected
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                    : 'bg-slate-50 dark:bg-slate-800/60 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-100'
                }`}
              >
                <span>{subject.name}</span>
                <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                  isSelected ? 'bg-white/20 text-white' : 'bg-slate-200 dark:bg-slate-700 text-slate-500'
                }`}>
                  {subject.papers.length} পত্র
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* LEVEL 2: Paper & Chapter Selector */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-4 sm:p-5 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5 text-indigo-500" />
            <span>২. পত্র ও অধ্যায় নির্বাচন করুন (Paper & Chapter):</span>
          </div>

          {/* Paper Switcher */}
          <div className="flex items-center gap-2">
            {currentSubject.papers.map(p => (
              <button
                key={p.id}
                onClick={() => setSelectedPaperNumber(p.paperNumber)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition ${
                  p.paperNumber === currentPaper.paperNumber
                    ? 'bg-indigo-600 text-white'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200'
                }`}
              >
                {p.title}
              </button>
            ))}
          </div>
        </div>

        {/* Chapters Horizontal List */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          {currentPaper.chapters.map(ch => {
            const isSelected = ch.id === currentChapter?.id;
            return (
              <button
                key={ch.id}
                onClick={() => setSelectedChapterId(ch.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-medium shrink-0 transition flex items-center gap-1.5 ${
                  isSelected
                    ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 font-bold shadow-sm'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200'
                }`}
              >
                <span className="font-mono text-[11px] opacity-70">অ-{ch.chapterNumber}</span>
                <span className="truncate max-w-[180px]">{ch.title}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* LEVEL 3: Mode Toggle (MCQ vs CQ) & Filters */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-white dark:bg-slate-900 p-3 sm:p-4 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm">
        {/* MCQ vs CQ Toggle */}
        <div className="flex items-center bg-slate-100 dark:bg-slate-800 p-1 rounded-2xl shrink-0">
          <button
            onClick={() => setActiveTabMode('mcq')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
              activeTabMode === 'mcq'
                ? 'bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-sm'
                : 'text-slate-600 dark:text-slate-400'
            }`}
          >
            MCQ মোড ({filteredMcqs.length})
          </button>
          <button
            onClick={() => setActiveTabMode('cq')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
              activeTabMode === 'cq'
                ? 'bg-white dark:bg-slate-900 text-purple-600 dark:text-purple-400 shadow-sm'
                : 'text-slate-600 dark:text-slate-400'
            }`}
          >
            CQ মোড (সৃজনশীল) ({filteredCqs.length})
          </button>
        </div>

        {/* Search & Origin Filter */}
        <div className="flex items-center gap-2 flex-1 max-w-lg">
          <div className="relative flex-1">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="প্রশ্ন বা কী-ওয়ার্ড খুঁজুন..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 rounded-xl text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {activeTabMode === 'mcq' && (
            <select
              value={filterSource}
              onChange={e => setFilterSource(e.target.value as any)}
              className="px-3 py-2 rounded-xl text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-medium"
            >
              <option value="all">সকল প্রশ্ন (২০১০-২০২৬)</option>
              <option value="board">অফিসিয়াল বোর্ড প্রশ্ন</option>
              <option value="km">K&M এক্সক্লুসিভ প্র্যাকটিস</option>
            </select>
          )}
        </div>
      </div>

      {/* CONTENT: MCQ View */}
      {activeTabMode === 'mcq' && (
        <div className="space-y-4">
          {filteredMcqs.length > 0 ? (
            filteredMcqs.map((q, idx) => {
              const isExpanded = !!expandedSolutions[q.id];
              return (
                <div
                  key={q.id}
                  className="bg-white dark:bg-slate-900 rounded-3xl p-5 sm:p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4"
                >
                  {/* Question Header & Meta */}
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-blue-600 dark:text-blue-400 uppercase">
                        {currentSubject.name} • {currentPaper.title}
                      </span>
                      {q.boardYearInfo && (
                        <span className="px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-mono font-semibold">
                          {q.boardYearInfo.board} {q.boardYearInfo.year}
                        </span>
                      )}
                    </div>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                      q.difficulty === 'Easy'
                        ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300'
                        : q.difficulty === 'Medium'
                        ? 'bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300'
                        : 'bg-rose-100 text-rose-800 dark:bg-rose-950/60 dark:text-rose-300'
                    }`}>
                      {q.difficulty}
                    </span>
                  </div>

                  {/* Question Text */}
                  <div className="text-sm sm:text-base font-bold text-slate-900 dark:text-white leading-relaxed">
                    <span className="text-blue-600 font-mono mr-1.5">{idx + 1}.</span>
                    {q.questionText}
                  </div>

                  {/* Options */}
                  {q.options && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {q.options.map((opt, oIdx) => {
                        const isCorrect = oIdx === q.correctOptionIndex;
                        return (
                          <div
                            key={oIdx}
                            className={`p-3 rounded-2xl border text-xs sm:text-sm font-medium transition ${
                              isExpanded && isCorrect
                                ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-400 font-bold text-emerald-800 dark:text-emerald-300'
                                : 'bg-slate-50 dark:bg-slate-800/40 border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200'
                            }`}
                          >
                            <span className="font-bold mr-2 text-slate-400">
                              {String.fromCharCode(65 + oIdx)}.
                            </span>
                            {opt}
                          </div>
                        );
                      })}
                    </div>
                  )}

                  {/* Toggle Solution Action */}
                  <div className="pt-2 flex items-center justify-between border-t border-slate-100 dark:border-slate-800">
                    <button
                      onClick={() => toggleSolution(q.id)}
                      className="text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
                    >
                      <span>{isExpanded ? 'ব্যাখ্যা লুকান' : 'সঠিক উত্তর ও বিস্তারিত সমাধান দেখুন'}</span>
                      {isExpanded ? <ChevronDown className="w-3.5 h-3.5" /> : <ChevronRight className="w-3.5 h-3.5" />}
                    </button>
                    <span className="text-[11px] text-slate-400 font-mono">
                      {q.origin}
                    </span>
                  </div>

                  {/* Expanded Solution & Why Incorrect Analysis */}
                  {isExpanded && (
                    <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-3 animate-fade-in text-xs">
                      <div>
                        <span className="font-bold text-emerald-600 dark:text-emerald-400 block mb-1">
                          ✓ সঠিক উত্তর: {q.options ? q.options[q.correctOptionIndex || 0] : ''}
                        </span>
                        <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                          <strong>মূল ব্যাখ্যা: </strong>{q.explanation}
                        </p>
                      </div>

                      {q.stepByStepSolution && q.stepByStepSolution.length > 0 && (
                        <div className="p-3 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 space-y-1">
                          <span className="font-bold text-slate-900 dark:text-white block mb-0.5">
                            স্টেপ-বাই-স্টেপ সমাধান (Mathematical Steps):
                          </span>
                          <ol className="list-decimal list-inside space-y-1 text-slate-600 dark:text-slate-400 font-mono">
                            {q.stepByStepSolution.map((step, sIdx) => (
                              <li key={sIdx}>{step}</li>
                            ))}
                          </ol>
                        </div>
                      )}

                      {q.whyIncorrect && q.whyIncorrect.length > 0 && (
                        <div className="space-y-1 pt-1">
                          <span className="font-bold text-slate-700 dark:text-slate-300 block mb-0.5">
                            অপশনভিত্তিক ভুল বিশ্লেষণ (Why Other Options are Incorrect):
                          </span>
                          <ul className="list-disc list-inside space-y-0.5 text-slate-500">
                            {q.whyIncorrect.map((w, wIdx) => (
                              <li key={wIdx}>{w}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 text-center space-y-3">
              <HelpCircle className="w-8 h-8 text-slate-300 mx-auto" />
              <h3 className="text-base font-bold text-slate-700 dark:text-slate-300">
                এই অধ্যায়ে কোনো প্রশ্ন ফিল্টারের সাথে মেলেনি
              </h3>
              <p className="text-xs text-slate-400">
                ফিল্টার পরিবর্তন করুন অথবা অন্য কোনো অধ্যায় নির্বাচন করুন।
              </p>
            </div>
          )}
        </div>
      )}

      {/* CONTENT: CQ View (সৃজনশীল প্রশ্ন) */}
      {activeTabMode === 'cq' && (
        <div className="space-y-5">
          {filteredCqs.length > 0 ? (
            filteredCqs.map((cq, cqIdx) => {
              const isExpanded = !!expandedCqs[cq.id];
              return (
                <div
                  key={cq.id}
                  className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-5"
                >
                  {/* CQ Meta */}
                  <div className="flex items-center justify-between text-xs pb-3 border-b border-slate-100 dark:border-slate-800">
                    <span className="font-bold text-purple-600 dark:text-purple-400 uppercase tracking-wide">
                      সৃজনশীল প্রশ্ন নং {cqIdx + 1} • {cq.chapterTitle}
                    </span>
                    <span className="font-mono px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                      {cq.boardOrVarsity}
                    </span>
                  </div>

                  {/* উদ্দীপক (Stimulus) */}
                  <div className="space-y-1.5">
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                      উদ্দীপক (Stimulus):
                    </div>
                    <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 text-sm font-medium text-slate-800 dark:text-slate-200 leading-relaxed">
                      {cq.stimulus}
                    </div>
                  </div>

                  {/* Sub Questions (ক, খ, গ, ঘ) */}
                  <div className="space-y-3">
                    {cq.subQuestions.map(sq => (
                      <div
                        key={sq.part}
                        className="p-4 rounded-2xl bg-white dark:bg-slate-850 border border-slate-200 dark:border-slate-800 space-y-2 text-xs"
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-sm text-slate-900 dark:text-white">
                            {sq.part}. {sq.question}
                          </span>
                          <span className="text-slate-500 font-mono font-semibold">
                            [{sq.type} • {sq.marks} নম্বর]
                          </span>
                        </div>

                        {isExpanded && (
                          <div className="pt-2 border-t border-slate-100 dark:border-slate-800 text-slate-700 dark:text-slate-300 space-y-1 animate-fade-in">
                            <span className="font-bold text-indigo-600 dark:text-indigo-400 block text-[11px]">
                              আদর্শ উত্তর ও মানবন্টন পয়েন্ট:
                            </span>
                            <p className="leading-relaxed">{sq.modelAnswer}</p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Toggle Model Answer */}
                  <div className="pt-2 flex justify-end">
                    <button
                      onClick={() => toggleCq(cq.id)}
                      className="px-4 py-2 rounded-xl text-xs font-bold text-purple-700 dark:text-purple-300 bg-purple-50 dark:bg-purple-950/40 hover:bg-purple-100 transition flex items-center gap-1.5"
                    >
                      <span>{isExpanded ? 'আদর্শ উত্তর লুকান' : 'সম্পূর্ণ আদর্শ উত্তর ও ব্যাখ্যা দেখুন'}</span>
                      {isExpanded ? <ChevronDown className="w-3.5 h-3.5" /> : <ChevronRight className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 text-center space-y-3">
              <HelpCircle className="w-8 h-8 text-slate-300 mx-auto" />
              <h3 className="text-base font-bold text-slate-700 dark:text-slate-300">
                এই বিষয়ে সৃজনশীল প্রশ্ন শীঘ্রই যোগ করা হচ্ছে
              </h3>
              <p className="text-xs text-slate-400">
                বোর্ড স্ট্যান্ডার্ড মডেল উদ্দীপক ও সমাধান সংকলন চলমান।
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
