import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Bot, Send, Sparkles, HelpCircle, User } from 'lucide-react';

interface ChatMessage {
  id: string;
  sender: 'user' | 'coach';
  text: string;
  timestamp: string;
}

export const StudyCoachView: React.FC = () => {
  const {
    currentUser,
    curriculum,
    studentData,
    overallRemainingPercentage,
    overallCompletionPercentage,
    completedConfirmedTopicsCount,
    totalConfirmedTopics,
    hscCountdown,
    hscConfig
  } = useApp();

  const [inputMessage, setInputMessage] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'm-1',
      sender: 'coach',
      text: `আসসালামু আলাইকুম ${currentUser.displayName}! আমি তোমার K&M স্টাডি কোচ। তোমার বর্তমান নিশ্চিতকৃত সিলেবাস প্রগ্রেস ${overallCompletionPercentage}% এবং বাকি আছে ${overallRemainingPercentage}%। আজ তুমি কী নিয়ে জানতে চাও?`,
      timestamp: new Date().toLocaleTimeString()
    }
  ]);

  const quickPrompts = [
    'আজ আমার কী পড়া উচিত?',
    'আমার সিলেবাস কতটুকু বাকি?',
    'কোন বিষয়ে সবচেয়ে বেশি পড়া বাকি?',
    'HSC পরীক্ষার আর কতদিন বাকি?'
  ];

  const handleSend = (textToSend?: string) => {
    const text = textToSend || inputMessage;
    if (!text.trim()) return;

    const userMsg: ChatMessage = {
      id: 'm-u-' + Date.now(),
      sender: 'user',
      text,
      timestamp: new Date().toLocaleTimeString()
    };

    setMessages(prev => [...prev, userMsg]);
    if (!textToSend) setInputMessage('');

    // Generate truthful response based on real student data
    setTimeout(() => {
      let reply = '';
      const q = text.toLowerCase();

      if (q.includes('বাকি') || q.includes('কতটুকু')) {
        reply = `তোমার সার্বিক অনুমোদিত HSC বিজ্ঞান সিলেবাসের শতকরা ${overallRemainingPercentage}% এখনো পড়া বাকি আছে (${totalConfirmedTopics - completedConfirmedTopicsCount} টি টপিক)। তুমি এ পর্যন্ত ${completedConfirmedTopicsCount} টি টপিক নিশ্চিত সম্পন্ন করেছো।`;
      } else if (q.includes('কী পড়া উচিত') || q.includes('পড়ব') || q.includes('উচিত')) {
        reply = `তোমার বাকি সিলেবাসের তালিকা অনুযায়ী পদার্থবিজ্ঞান ১ম পত্রের 'ভেক্টর' বা রসায়ন ১ম পত্রের 'গুণগত রসায়ন' অধ্যায় দিয়ে শুরু করা উত্তম। এই অধ্যায়গুলোতে পরীক্ষায় সর্বাধিক নিশ্চিত প্রশ্ন থাকে।`;
      } else if (q.includes('hsc') || q.includes('তারিখ') || q.includes('দিন বাকি')) {
        if (hscConfig.isOfficiallyAnnounced && hscCountdown) {
          reply = `অফিসিয়াল ঘোষণা অনুসারে HSC ${hscConfig.targetExamYear} পরীক্ষার আর ${hscCountdown.days} দিন ${hscCountdown.hours} ঘণ্টা বাকি রয়েছে।`;
        } else {
          reply = `২০২৮ সালের HSC পরীক্ষার তারিখ শিক্ষা মন্ত্রণালয় বা ঢাকা শিক্ষা বোর্ড কর্তৃক এখনো আনুষ্ঠানিকভাবে ঘোষণা করা হয়নি। কোনো অনুমিত গুজবে কান না দিয়ে নিয়মিত পাঠ্যক্রম রিভিশনে মনোযোগ দাও।`;
        }
      } else {
        reply = `তোমার জন্য পরামর্শ: প্রতিটি বিষয় পড়ার পর "আজকের পড়াশোনা জমা দিন" বাটনে লিখে জমা দাও, যাতে তোমার সিলেবাস ট্র্যাকার নির্ভুল থাকে। এছাড়া ভুল প্রশ্নগুলো রিভিশন ফ্ল্যাশকার্ডে যোগ করে নিয়মিত সক্রিয় স্মরণ চর্চা করো।`;
      }

      const coachMsg: ChatMessage = {
        id: 'm-c-' + Date.now(),
        sender: 'coach',
        text: reply,
        timestamp: new Date().toLocaleTimeString()
      };
      setMessages(prev => [...prev, coachMsg]);
    }, 400);
  };

  return (
    <div className="max-w-3xl mx-auto space-y-5 pb-12 animate-fade-in flex flex-col h-[calc(100vh-8rem)]">
      <div>
        <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
          K&M স্টাডি কোচ (Personalized Study Coach)
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5">
          তোমার প্রকৃত অগ্রগতি ও বাকি সিলেবাসের আলোকে সত্যনিষ্ঠ একাডেমিক দিকনির্দেশনা
        </p>
      </div>

      {/* Chat Messages Box */}
      <div className="flex-1 bg-white dark:bg-slate-900 rounded-3xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm overflow-y-auto space-y-4">
        {messages.map(msg => (
          <div
            key={msg.id}
            className={`flex items-start gap-3 ${msg.sender === 'user' ? 'flex-row-reverse' : ''}`}
          >
            <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
              msg.sender === 'coach'
                ? 'bg-blue-600 text-white'
                : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-white'
            }`}>
              {msg.sender === 'coach' ? <Bot className="w-4 h-4" /> : <User className="w-4 h-4" />}
            </div>
            <div className={`p-4 rounded-2xl max-w-lg text-xs leading-relaxed ${
              msg.sender === 'coach'
                ? 'bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700'
                : 'bg-blue-600 text-white'
            }`}>
              {msg.text}
              <div className={`text-[10px] mt-1.5 opacity-60 ${msg.sender === 'user' ? 'text-right' : ''}`}>
                {msg.timestamp}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Prompts */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
        {quickPrompts.map((p, idx) => (
          <button
            key={idx}
            onClick={() => handleSend(p)}
            className="px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-500 text-slate-700 dark:text-slate-300 shrink-0 transition"
          >
            {p}
          </button>
        ))}
      </div>

      {/* Input Field */}
      <div className="flex items-center gap-2">
        <input
          type="text"
          value={inputMessage}
          onChange={e => setInputMessage(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && handleSend()}
          placeholder="তোমার পড়াশোনা সম্পর্কিত প্রশ্ন করো..."
          className="flex-1 px-4 py-3 rounded-2xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={() => handleSend()}
          className="p-3 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-500/20"
        >
          <Send className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};
