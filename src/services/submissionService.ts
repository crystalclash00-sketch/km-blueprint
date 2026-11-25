// K&M Blueprint — Student Study Submission Analysis Engine
import { StudySubmissionActivity, TopicStatus, Subject } from '../types';

export interface ParsedSubmissionDraft {
  subjectId: string;
  paperNumber: 1 | 2;
  chapterId: string;
  topicIds: string[];
  whatRead: string;
  whatStudied: string;
  whatUnderstood: string;
  whatPractised: string;
  mcqsAttemptedCount: number;
  cqsAttemptedCount: number;
  numericalProblemsCount: number;
  formulasRevised: string[];
  timeSpentMinutes: number;
  difficulties: string;
  suggestedUpdates: Array<{
    topicId: string;
    topicTitle: string;
    previousStatus: TopicStatus;
    suggestedStatus: TopicStatus;
    reason: string;
  }>;
}

// Intelligent Bangla Natural Language Parser for Study Submissions
export const analyzeStudySubmissionText = (
  text: string,
  subjects: Subject[],
  userTopicStatuses: Record<string, TopicStatus>
): ParsedSubmissionDraft => {
  const lower = text.toLowerCase();

  // 1. Identify Subject
  let detectedSubjectId = 'phy';
  let detectedPaper: 1 | 2 = 1;

  if (lower.includes('physics') || lower.includes('পদার্থ') || lower.includes('বলবিদ্যা') || lower.includes('ভেক্টর')) {
    detectedSubjectId = 'phy';
    if (lower.includes('2nd') || lower.includes('২য়') || lower.includes('তাপগতি') || lower.includes('চল তড়িৎ')) {
      detectedPaper = 2;
    }
  } else if (lower.includes('chem') || lower.includes('রসায়ন') || lower.includes('জৈব') || lower.includes('গুণগত')) {
    detectedSubjectId = 'chem';
    if (lower.includes('2nd') || lower.includes('২য়') || lower.includes('জৈব রসায়ন') || lower.includes('পরিমাণগত')) {
      detectedPaper = 2;
    }
  } else if (lower.includes('math') || lower.includes('গণিত') || lower.includes('ম্যাট্রিক্স') || lower.includes('অন্তরীকরণ') || lower.includes('কণিক')) {
    detectedSubjectId = 'hmath';
    if (lower.includes('2nd') || lower.includes('২য়') || lower.includes('বহুপদী') || lower.includes('কণিক')) {
      detectedPaper = 2;
    }
  } else if (lower.includes('bio') || lower.includes('জীব') || lower.includes('উদ্ভিদ') || lower.includes('প্রাণি') || lower.includes('কোষ') || lower.includes('রক্ত')) {
    detectedSubjectId = 'bio';
    if (lower.includes('2nd') || lower.includes('২য়') || lower.includes('প্রাণি') || lower.includes('রক্ত ও সংবহন')) {
      detectedPaper = 2;
    }
  } else if (lower.includes('ict') || lower.includes('তথ্য') || lower.includes('সংখ্যা পদ্ধতি') || lower.includes('লজিক') || lower.includes('প্রোগ্রাম')) {
    detectedSubjectId = 'ict';
    detectedPaper = 1;
  } else if (lower.includes('বাংলা') || lower.includes('অপরিচিতা') || lower.includes('বিলাসী') || lower.includes('উচ্চারণ') || lower.includes('বানান')) {
    detectedSubjectId = 'ban';
    if (lower.includes('২য়') || lower.includes('উচ্চারণ') || lower.includes('বানান')) {
      detectedPaper = 2;
    }
  } else if (lower.includes('english') || lower.includes('ইংরেজি') || lower.includes('modifier') || lower.includes('verb') || lower.includes('mandela')) {
    detectedSubjectId = 'eng';
    if (lower.includes('2nd') || lower.includes('২য়') || lower.includes('modifier') || lower.includes('verb')) {
      detectedPaper = 2;
    }
  }

  // 2. Identify Matching Chapter & Topics
  const matchedSubject = subjects.find(s => s.id === detectedSubjectId) || subjects[0];
  const matchedPaper = matchedSubject.papers.find(p => p.paperNumber === detectedPaper) || matchedSubject.papers[0];
  
  // Find matching chapter based on keywords
  let matchedChapter = matchedPaper.chapters[0];
  for (const chap of matchedPaper.chapters) {
    if (lower.includes(chap.title.toLowerCase()) || (chap.englishTitle && lower.includes(chap.englishTitle.toLowerCase()))) {
      matchedChapter = chap;
      break;
    }
  }

  // Check matching topics
  const matchedTopicIds: string[] = [];
  const suggestedUpdates: ParsedSubmissionDraft['suggestedUpdates'] = [];

  for (const topic of matchedChapter.topics) {
    const topicWords = topic.title.toLowerCase().split(/\s+/).filter(w => w.length > 2);
    const hasWordMatch = topicWords.some(w => lower.includes(w));
    
    if (hasWordMatch || matchedChapter.topics.length <= 3) {
      matchedTopicIds.push(topic.id);
      const currentStatus = userTopicStatuses[topic.id] || 'not_started';
      
      // Determine suggested status based on student's action words
      let suggested: TopicStatus = 'reading';
      let reason = 'শিক্ষার্থী টপিকটি অধ্যয়নের কথা উল্লেখ করেছে।';

      if (lower.includes('শেষ করেছি') || lower.includes('বুঝেছি') || lower.includes('সম্পন্ন') || lower.includes('কমপ্লিট')) {
        suggested = 'understood';
        reason = 'শিক্ষার্থী বিষয়বস্তু অনুধাবন ও সম্পন্ন করার কথা জানিয়েছে।';
      } else if (lower.includes('mcq') || lower.includes('অনুশীলন') || lower.includes('প্র্যাকটিস') || lower.includes('অংক করেছি')) {
        suggested = 'practising';
        reason = 'শিক্ষার্থী সমস্যা সমাধান ও অনুশীলন সম্পন্ন করেছে।';
      } else if (lower.includes('রিভিশন') || lower.includes('কঠিন') || lower.includes('সমস্যা আছে')) {
        suggested = 'revision_needed';
        reason = 'শিক্ষার্থী রিভিশন বা জটিলতার কথা উল্লেখ করেছে।';
      }

      suggestedUpdates.push({
        topicId: topic.id,
        topicTitle: topic.title,
        previousStatus: currentStatus,
        suggestedStatus: suggested,
        reason
      });
    }
  }

  // 3. Extract Practice Counts
  const mcqMatch = text.match(/(\d+)\s*(টি)?\s*mcq/i) || text.match(/mcq\s*(\d+)/i);
  const mcqsAttemptedCount = mcqMatch ? parseInt(mcqMatch[1], 10) : 0;

  const cqMatch = text.match(/(\d+)\s*(টি)?\s*cq/i) || text.match(/(\d+)\s*সৃজনশীল/i);
  const cqsAttemptedCount = cqMatch ? parseInt(cqMatch[1], 10) : 0;

  const numMatch = text.match(/(\d+)\s*(টি)?\s*(গাণিতিক|সমস্যা|ম্যাথ)/i);
  const numericalProblemsCount = numMatch ? parseInt(numMatch[1], 10) : 0;

  // 4. Extract Time Spent
  const hourMatch = text.match(/(\d+)\s*(ঘণ্টা|ঘন্টা|hour)/i);
  const minMatch = text.match(/(\d+)\s*(মিনিট|min)/i);
  let timeSpentMinutes = 45; // default reasonable study block
  if (hourMatch && minMatch) {
    timeSpentMinutes = parseInt(hourMatch[1], 10) * 60 + parseInt(minMatch[1], 10);
  } else if (hourMatch) {
    timeSpentMinutes = parseInt(hourMatch[1], 10) * 60;
  } else if (minMatch) {
    timeSpentMinutes = parseInt(minMatch[1], 10);
  }

  return {
    subjectId: detectedSubjectId,
    paperNumber: detectedPaper,
    chapterId: matchedChapter.id,
    topicIds: matchedTopicIds.length > 0 ? matchedTopicIds : [matchedChapter.topics[0]?.id || ''],
    whatRead: text.slice(0, 150),
    whatStudied: `অধ্যয়নকৃত অধ্যায়: ${matchedChapter.title}`,
    whatUnderstood: lower.includes('বুঝেছি') ? 'শিক্ষার্থী পাঠ্য বিষয়ের মূল ধারণা বুঝতে পেরেছে বলে রিপোর্ট করেছে।' : 'স্বাভাবিক অধ্যয়ন সম্পন্ন।',
    whatPractised: `${mcqsAttemptedCount} টি MCQ, ${numericalProblemsCount} টি গাণিতিক সমস্যা সমাধান।`,
    mcqsAttemptedCount,
    cqsAttemptedCount,
    numericalProblemsCount,
    formulasRevised: lower.includes('সূত্র') ? ['অধ্যায়ের গুরুত্বপূর্ণ সূত্রাবলি রিভিশন'] : [],
    timeSpentMinutes,
    difficulties: lower.includes('কঠিন') || lower.includes('বুঝিনি') ? 'কিছু জটিল অংশ পুনরায় রিভিশন প্রয়োজন।' : 'কোনো বিশেষ জটিলতা রিপোর্ট করা হয়নি।',
    suggestedUpdates
  };
};
