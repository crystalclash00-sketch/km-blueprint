import { EnglishVocabularyItem } from '../types';

export const kmEnglishVocabularyList: EnglishVocabularyItem[] = [
  {
    id: 'vocab-1',
    word: 'Emancipation',
    banglaMeaning: 'মুক্তি / দাসত্বমোচন',
    englishDefinition: 'The process of giving people social or political freedom and rights.',
    partOfSpeech: 'Noun',
    synonyms: ['Liberation', 'Freedom', 'Deliverance', 'Release'],
    antonyms: ['Enslavement', 'Subjugation', 'Captivity', 'Bondage'],
    exampleSentence: 'Nelson Mandela fought relentlessly for the emancipation of his people from apartheid.',
    passageRef: 'Nelson Mandela: Guided South Africa from the shackles of apartheid'
  },
  {
    id: 'vocab-2',
    word: 'Apartheid',
    banglaMeaning: 'জাতিবিদ্বেষ / বর্ণবৈষম্য নীতি',
    englishDefinition: 'A former political system in South Africa in which people of different races were separated.',
    partOfSpeech: 'Noun',
    synonyms: ['Racial segregation', 'Discrimination', 'Prejudice'],
    antonyms: ['Integration', 'Equality', 'Harmony'],
    exampleSentence: 'Mandela spent 27 years in prison for his opposition to apartheid.',
    passageRef: 'Unit 1: People or Personalities'
  },
  {
    id: 'vocab-3',
    word: 'Reconciliation',
    banglaMeaning: 'মীমাংসা / সম্প্রীতি স্থাপন',
    englishDefinition: 'The restoration of friendly relations or the action of making one view or belief compatible with another.',
    partOfSpeech: 'Noun',
    synonyms: ['Harmonization', 'Pacification', 'Agreement', 'Compromise'],
    antonyms: ['Alienation', 'Estrangement', 'Conflict', 'Hostility'],
    exampleSentence: 'Mandela was hailed globally as an icon of peace and national reconciliation.',
    passageRef: 'Unit 1: The Unforgettable History'
  },
  {
    id: 'vocab-4',
    word: 'Barren',
    banglaMeaning: 'অনূর্বর / বন্ধ্যা',
    englishDefinition: 'Land too poor to produce much or any vegetation; bleak and lifeless.',
    partOfSpeech: 'Adjective',
    synonyms: ['Infertile', 'Arid', 'Desolate', 'Sterile'],
    antonyms: ['Fertile', 'Productive', 'Fruitful', 'Lush'],
    exampleSentence: 'For if dreams go, life is a barren field frozen with snow.',
    passageRef: 'Poem: Dreams by Langston Hughes'
  }
];

export interface GrammarRuleItem {
  id: string;
  topic: 'Modifiers' | 'Right Form of Verbs' | 'Narration' | 'Completing Sentences' | 'Connectors';
  title: string;
  ruleBangla: string;
  formulaOrPattern: string;
  examples: Array<{ incorrect?: string; correct: string; explanation: string }>;
  commonBoardTrap: string;
}

export const kmEnglishGrammarRules: GrammarRuleItem[] = [
  {
    id: 'gram-mod-1',
    topic: 'Modifiers',
    title: 'Pre-modify the noun with a noun-adjective',
    ruleBangla: 'যখন একটি noun অন্য একটি noun এর পূর্বে বসে তার গুণ বা ধরন প্রকাশ করে, তখন প্রথম noun-টি noun-adjective হিসেবে কাজ করে।',
    formulaOrPattern: 'Subject + Verb + [Noun acting as Adjective] + Main Noun',
    examples: [
      {
        correct: 'He bought a train ticket yesterday.',
        explanation: 'এখানে "train" একটি noun কিন্তু "ticket" noun-কে pre-modify করায় এটি noun-adjective।'
      },
      {
        correct: 'We enjoyed a football match on television.',
        explanation: '"football" শব্দটি "match"-কে pre-modify করেছে।'
      }
    ],
    commonBoardTrap: 'Noun adjective চাইলে অনেকেই সাধারণ adjective (যেমন "big", "good") লিখে ফেলে, যা ভুল। অবশ্যই আরেকটি Noun লিখতে হবে।'
  },
  {
    id: 'gram-rfv-1',
    topic: 'Right Form of Verbs',
    title: 'As well as / Along with / Together with এর Subject-Verb Agreement',
    ruleBangla: 'দুটি subject যদি as well as, along with, together with, accompanied by, in addition to দ্বারা যুক্ত থাকে, তবে verb সর্বদা প্রথম subject অনুযায়ী বসে।',
    formulaOrPattern: 'Subject 1 + as well as/with + Subject 2 + Verb (according to Subject 1)',
    examples: [
      {
        incorrect: 'The teacher as well as the students were present.',
        correct: 'The teacher as well as the students was present.',
        explanation: 'যেহেতু প্রথম Subject "The teacher" একবচন (singular), তাই verb "was" হবে।'
      }
    ],
    commonBoardTrap: 'ছাত্রছাত্রীরা verb-এর ঠিক পূর্বে বহুবচন "students" দেখে "were" বসিয়ে ভুল করে।'
  }
];
