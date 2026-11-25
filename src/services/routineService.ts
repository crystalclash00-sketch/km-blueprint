import { CustomStudyPlanItem } from '../data/kmRoutineModel';

// Simple Bangla & English Natural Language Parser for Study Plan
export const parseNaturalStudyPlan = (text: string): Partial<CustomStudyPlanItem> => {
  const normalized = text.toLowerCase();
  const result: Partial<CustomStudyPlanItem> = {
    rawText: text
  };

  // Identify Subject
  if (normalized.includes('পদার্থ') || normalized.includes('physics') || normalized.includes('ফিজি')) {
    result.parsedSubject = 'Physics';
  } else if (normalized.includes('রসায়ন') || normalized.includes('chemistry') || normalized.includes('কেমি')) {
    result.parsedSubject = 'Chemistry';
  } else if (normalized.includes('গণিত') || normalized.includes('math') || normalized.includes('ম্যাথ')) {
    result.parsedSubject = 'Higher Math';
  } else if (normalized.includes('জীব') || normalized.includes('biology') || normalized.includes('বায়ো')) {
    result.parsedSubject = 'Biology';
  } else if (normalized.includes('বাংলা') || normalized.includes('bangla')) {
    result.parsedSubject = 'Bangla';
  } else if (normalized.includes('ইংরেজি') || normalized.includes('english') || normalized.includes('ইংরেজি')) {
    result.parsedSubject = 'English';
  } else if (normalized.includes('আইসিটি') || normalized.includes('ict')) {
    result.parsedSubject = 'ICT';
  }

  // Identify Paper
  if (normalized.includes('১ম') || normalized.includes('1st') || normalized.includes('first')) {
    result.parsedPaper = 1;
  } else if (normalized.includes('২য়') || normalized.includes('2nd') || normalized.includes('second')) {
    result.parsedPaper = 2;
  }

  // Identify MCQs or CQs
  const mcqMatch = text.match(/(\d+)\s*(টি)?\s*(mcq|এমসিকিউ)/i);
  if (mcqMatch) {
    result.mcqCount = parseInt(mcqMatch[1], 10);
  }

  const cqMatch = text.match(/(\d+)\s*(টি)?\s*(cq|সিকিউ|সৃজনশীল)/i);
  if (cqMatch) {
    result.cqCount = parseInt(cqMatch[1], 10);
  }

  // Identify Chapter or Topic keywords
  const chapterMatch = text.match(/(অধ্যায়|chapter)\s*([০-৯0-9]+)/i);
  if (chapterMatch) {
    result.parsedChapter = `Chapter ${chapterMatch[2]}`;
  }

  // Identify Pages
  const pageMatch = text.match(/(পৃষ্ঠা|page|pages)\s*([০-৯0-9\-\–]+)/i);
  if (pageMatch) {
    result.pages = pageMatch[2];
  }

  return result;
};
