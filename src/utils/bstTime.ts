// Bangladesh Standard Time (GMT+6) Utilities

export const getBSTDate = (): Date => {
  const now = new Date();
  // UTC time + 6 hours
  const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
  return new Date(utc + (3600000 * 6));
};

export const formatBSTDate = (dateString?: string): string => {
  const d = dateString ? new Date(dateString) : getBSTDate();
  return d.toLocaleDateString('bn-BD', {
    timeZone: 'Asia/Dhaka',
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

export const getRemainingExamTime = (examDateStr: string) => {
  const now = getBSTDate();
  const exam = new Date(examDateStr);
  const diffMs = exam.getTime() - now.getTime();

  if (diffMs <= 0) {
    return { days: 0, hours: 0, minutes: 0, isPassed: true, totalDays: 0 };
  }

  const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diffMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));

  return { days, hours, minutes, isPassed: false, totalDays: days };
};

// Request Browser Notifications
export const requestNotificationPermission = async (): Promise<boolean> => {
  if (!('Notification' in window)) {
    return false;
  }
  if (Notification.permission === 'granted') {
    return true;
  }
  const result = await Notification.requestPermission();
  return result === 'granted';
};

export const sendLocalNotification = (title: string, body: string) => {
  if (typeof window !== 'undefined' && 'Notification' in window && Notification.permission === 'granted') {
    new Notification(`🦉 HSC QUEST: ${title}`, {
      body,
      icon: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">🦉</text></svg>'
    });
  }
};
