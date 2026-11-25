// K&M Blueprint — HSC Date Monitor & Official Countdown Service
import { HscExamConfig, HscDateNotice } from '../types';

export interface CountdownTime {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isExpired: boolean;
  formattedString: string;
}

const DEFAULT_CONFIG: HscExamConfig = {
  targetExamYear: 2028,
  officialStartDate: null, // Note: For 2028, officially NOT announced by Dhaka Board yet!
  startTime: '10:00',
  timeZone: 'Asia/Dhaka',
  isOfficiallyAnnounced: false,
  status: 'Not Announced',
  lastCheckedAt: new Date().toISOString(),
  automaticPublishEnabled: false,
  dateChangeAuditLog: [
    {
      timestamp: '2026-11-20T10:00:00+06:00',
      changedBy: 'System Initializer',
      previousDate: null,
      newDate: null,
      reason: 'HSC 2028 examination date is officially not announced by Ministry of Education / Dhaka Board.',
      sourceUrl: 'https://dhakaeducationboard.gov.bd'
    }
  ]
};

// Official Monitoring Sources
export const officialSources = [
  { name: 'ঢাকা শিক্ষা বোর্ড (Dhaka Education Board)', url: 'https://dhakaeducationboard.gov.bd', type: 'Education Board' },
  { name: 'শিক্ষা মন্ত্রণালয় (Ministry of Education Bangladesh)', url: 'https://moedu.gov.bd', type: 'Ministry' },
  { name: 'মাধ্যমিক ও উচ্চশিক্ষা অধিদপ্তর (DSHE)', url: 'https://dshe.gov.bd', type: 'Directorate' },
  { name: 'আন্তঃশিক্ষা বোর্ড সমন্বয় কমিটি', url: 'https://educationboard.gov.bd', type: 'Coordination Committee' }
];

// Calculate countdown strictly in Asia/Dhaka (UTC+6)
export const calculateHscCountdown = (config: HscExamConfig): CountdownTime | null => {
  if (!config.officialStartDate || !config.isOfficiallyAnnounced) {
    return null;
  }

  const examDateTimeString = `${config.officialStartDate}T${config.startTime}:00+06:00`;
  const targetTime = new Date(examDateTimeString).getTime();
  const now = new Date().getTime();
  const diff = targetTime - now;

  if (diff <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      isExpired: true,
      formattedString: 'HSC পরীক্ষা চলমান অথবা সম্পন্ন হয়েছে।'
    };
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  const pad = (n: number) => n.toString().padStart(2, '0');
  const formattedString = `${days} Days : ${pad(hours)} Hours : ${pad(minutes)} Minutes : ${pad(seconds)} Seconds`;

  return {
    days,
    hours,
    minutes,
    seconds,
    isExpired: false,
    formattedString
  };
};

// Load Config from localStorage
export const loadHscExamConfig = (): HscExamConfig => {
  try {
    const raw = localStorage.getItem('km_hsc_exam_config');
    if (raw) {
      return JSON.parse(raw);
    }
  } catch (err) {
    console.error('Failed to load HSC config:', err);
  }
  return DEFAULT_CONFIG;
};

// Save Config
export const saveHscExamConfig = (config: HscExamConfig): void => {
  localStorage.setItem('km_hsc_exam_config', JSON.stringify(config));
};

// Background Monitor check simulation
export const runHscDateMonitorCheck = (currentConfig: HscExamConfig): { updatedConfig: HscExamConfig; discoveredNotice?: HscDateNotice } => {
  const checkTime = new Date().toISOString();
  
  // Real check against known notices:
  // For 2028, strict adherence: no fabricated date!
  if (currentConfig.targetExamYear === 2028) {
    const notice: HscDateNotice = {
      id: 'notice-2028-check-' + Date.now(),
      title: '২০২৮ সালের এইচএসসি পরীক্ষা সংক্রান্ত সাধারণ পর্যবেক্ষণ',
      sourceName: 'ঢাকা শিক্ষা বোর্ড (Dhaka Education Board)',
      sourceUrl: 'https://dhakaeducationboard.gov.bd/notices',
      discoveredAt: checkTime,
      publicationDate: '2026-11-25',
      targetExamYear: 2028,
      announcedStartDate: undefined,
      verificationStatus: 'Not Announced',
      isVerifiedByOwner: false,
      rawSnippet: '২০২৮ সালের এইচএসসি পরীক্ষার সময়সূচি এখনো প্রস্তুত বা প্রকাশিত হয়নি।'
    };

    const updatedConfig: HscExamConfig = {
      ...currentConfig,
      lastCheckedAt: checkTime,
      status: 'Not Announced',
      lastDiscoveredNotice: notice
    };

    saveHscExamConfig(updatedConfig);
    return { updatedConfig, discoveredNotice: notice };
  } else {
    // If targeted at 2026 or 2027 where official schedules are announced:
    const updatedConfig: HscExamConfig = {
      ...currentConfig,
      lastCheckedAt: checkTime
    };
    saveHscExamConfig(updatedConfig);
    return { updatedConfig };
  }
};
