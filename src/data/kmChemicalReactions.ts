import { ChemicalEquationItem } from '../types';

export const kmChemicalReactionsList: ChemicalEquationItem[] = [
  {
    id: 'rxn-org-1',
    paperNumber: 2,
    chapterId: 'chem-2-2',
    title: 'বেনজিনের নাইট্রেশন বিক্রিয়া (Nitration of Benzene)',
    balancedEquation: 'C6H6 + HNO3 --(গাঢ় H2SO4, 50°-60°C)--> C6H5NO2 + H2O',
    reactants: ['C6H6 (Benzene)', 'HNO3 (গাঢ় নাইট্রিক এসিড)'],
    products: ['C6H5NO2 (Nitrobenzene)', 'H2O (পানি)'],
    reactionConditions: 'গাঢ় H2SO4 প্রভাবক, তাপমাত্রা 50°C - 60°C',
    observations: 'হলুদ বর্ণের তৈলাক্ত তরল নাইট্রোবেনজিন (বাদামের ন্যায় গন্ধযুক্ত) উৎপন্ন হয়।',
    explanation: 'ইলেকট্রোফিলিক অ্যারোমেটিক প্রতিস্থাপন (SE) বিক্রিয়া। গাঢ় সালফিউরিক এসিড নাইট্রিক এসিড থেকে সক্রিয় ইলেকট্রোফাইল নাইট্রোনিয়াম আয়ন (+NO2) তৈরি করে।',
    type: 'Organic'
  },
  {
    id: 'rxn-org-2',
    paperNumber: 2,
    chapterId: 'chem-2-2',
    title: 'টলেন বিকারক পরীক্ষা (Tollens\' Silver Mirror Test)',
    balancedEquation: 'R-CHO + 2[Ag(NH3)2]+ + 3OH- --(Heat)--> R-COO- + 2Ag↓ + 4NH3 + 2H2O',
    reactants: ['R-CHO (Aliphatic or Aromatic Aldehyde)', '[Ag(NH3)2]OH (অ্যামোনিয়াক্যাল সিলভার নাইট্রেট দ্রবণ)'],
    products: ['R-COO- (কার্বক্সিলেট আয়ন)', 'Ag↓ (চকচকে রূপালী দর্পণ)'],
    reactionConditions: 'হালকা গরম পানির বাষ্প বা ওয়াটার বাথ (50°-60°C)',
    observations: 'টেস্টটিউবের ভেতরের গায়ে চকচকে খাঁটি রূপার প্রলেপ (সিলভার মিরর) পড়ে।',
    explanation: 'অ্যালডিহাইড একটি মৃদু বিজারক যা সিলভার আয়নকে (Ag+) ধাতব সিলভারে (Ag0) বিজারিত করে। কিটোন এই বিক্রিয়া দেয় না, ফলে এটি অ্যালডিহাইড ও কিটোনের প্রধান পার্থক্যকারী পরীক্ষা।',
    type: 'Organic'
  },
  {
    id: 'rxn-org-3',
    paperNumber: 2,
    chapterId: 'chem-2-2',
    title: 'কার্বিল অ্যামিন পরীক্ষা (Carbylamine Test)',
    balancedEquation: 'R-NH2 + CHCl3 + 3KOH(alc) --(Heat)--> R-NC + 3KCl + 3H2O',
    reactants: ['R-NH2 (১° প্রাইমারি অ্যামিন / অ্যানিলিন)', 'CHCl3 (ক্লোরোফর্ম)', 'KOH (অ্যালকোহলীয় পটাশিয়াম হাইড্রক্সাইড)'],
    products: ['R-NC (অ্যালকাইল বা ফিনাইল আইসোসায়ানাইড / কার্বিল অ্যামিন)', 'KCl', 'H2O'],
    reactionConditions: 'তাপমাত্রা 60°C - 70°C, অ্যালকোহলীয় মাধ্যম',
    observations: 'তীব্র অসহ্য উগ্র ও বিষাক্ত দুর্গন্ধযুক্ত আইসোসায়ানাইড বাষ্প নির্গত হয়।',
    explanation: 'শুধুমাত্র প্রাইমারি অ্যামিন (১°) এবং অ্যানিলিন এই বিক্রিয়া প্রদর্শন করে। সেকেন্ডারি ও টারশিয়ারি অ্যামিন সাড়া দেয় না। ক্লোরোফর্ম ও প্রাইমারি অ্যামিন শনাক্তকরণের নির্ভরযোগ্য পদ্ধতি।',
    type: 'Organic'
  },
  {
    id: 'rxn-redox-1',
    paperNumber: 2,
    chapterId: 'chem-2-3',
    title: 'অম্লীয় পটাশিয়াম পারম্যাঙ্গানেট দ্বারা ফেরাস সালফেট জারণ',
    balancedEquation: '2KMnO4 + 10FeSO4 + 8H2SO4 ---> K2SO4 + 2MnSO4 + 5Fe2(SO4)3 + 8H2O',
    reactants: ['KMnO4 (পটাশিয়াম পারম্যাঙ্গানেট)', 'FeSO4 (ফেরাস সালফেট)', 'H2SO4 (সালফিউরিক এসিড)'],
    products: ['MnSO4', 'Fe2(SO4)3 (ফেরিক সালফেট)', 'K2SO4', 'H2O'],
    reactionConditions: 'অম্লীয় মাধ্যম (গাঢ় H2SO4 মিশ্রিত)',
    observations: 'KMnO4 এর তীব্র গাঢ় গোলাপী/বেগুনী বর্ণ প্রশমিত হয়ে বর্ণহীন/হালকা হলুদ দ্রবণে পরিণত হয়।',
    explanation: 'জারণ-বিজারণ টাইট্রেশন। Mn(+7) থেকে Mn(+2) তে বিজারিত হয় (৫টি ইলেকট্রন গ্রহণ) এবং Fe(+2) থেকে Fe(+3) তে জারিত হয় (১টি ইলেকট্রন ত্যাগ)। KMnO4 এখানে সেলফ-ইন্ডিকেটর হিসেবে কাজ করে।',
    type: 'Redox'
  }
];
