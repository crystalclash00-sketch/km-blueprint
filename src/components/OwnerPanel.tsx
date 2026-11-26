import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { exportFullDatabaseJson } from '../services/storage';
import { nctb13SubjectMasterCatalog } from '../data/kmAll13CurriculumCatalog';
import {
  Shield,
  Download,
  Users,
  Settings,
  BookOpen,
  HelpCircle,
  Clock,
  Sparkles,
  CheckCircle,
  FileCode,
  HardDrive,
  KeyRound,
  AlertTriangle,
  RefreshCw,
  Plus,
  Trash2,
  Lock,
  Layers,
  Search
} from 'lucide-react';

export const OwnerPanel: React.FC = () => {
  const {
    currentUser,
    curriculum,
    accounts,
    hscConfig,
    researchItems,
    publishResearch,
    registrationMode,
    setRegistrationMode,
    invitations,
    generateNewInviteCode,
    deleteStudentAccount
  } = useApp();

  const [activeTab, setActiveTab] = useState<'content' | 'curriculum13' | 'students' | 'invitations' | 'hsc' | 'backup' | 'quotas'>('content');
  const [newInviteRole, setNewInviteRole] = useState<'student' | 'owner'>('student');
  const [newInviteTargetYear, setNewInviteTargetYear] = useState<number>(2026);
  const [inviteLabel, setInviteLabel] = useState<string>('');
  const [selectedSubjectFilter, setSelectedSubjectFilter] = useState<string>('all');

  // Hard security guard: If not owner, immediately block render
  if (currentUser.role !== 'owner') {
    return (
      <div className="p-12 text-center bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-4">
        <div className="w-16 h-16 rounded-full bg-rose-50 dark:bg-rose-950/50 text-rose-600 dark:text-rose-400 flex items-center justify-center mx-auto">
          <Lock className="w-8 h-8" />
        </div>
        <h3 className="text-xl font-black text-slate-900 dark:text-white">
          প্রবেশাধিকার সংরক্ষিত (Restricted to Sole Owner)
        </h3>
        <p className="text-xs text-slate-500 max-w-md mx-auto leading-relaxed">
          এই নিয়ন্ত্রণ প্যানেল শুধুমাত্র প্ল্যাটফর্মের প্রধান স্বত্ত্বাধিকারী (Platform Creator & Sole Owner)-এর জন্য বরাদ্দকৃত। শিক্ষার্থীরা এই প্যানেলে প্রবেশাধিকার পান না।
        </p>
      </div>
    );
  }

  const handleExportJson = () => {
    const jsonStr = exportFullDatabaseJson();
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `km-blueprint-backup-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleCreateInvite = () => {
    generateNewInviteCode({
      role: newInviteRole,
      targetYear: newInviteTargetYear,
      label: inviteLabel.trim() || 'Student Access Key'
    });
    setInviteLabel('');
    alert('নতুন সিকিউর ইনভাইটেশন কোড সফলভাবে জেনারেট হয়েছে!');
  };

  return (
    <div className="space-y-6 pb-12 animate-fade-in">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 mb-1">
          <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300 flex items-center gap-1">
            <Shield className="w-3.5 h-3.5" /> Sole Owner Administration
          </span>
          <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300">
            K&M Blueprint Core v2.0
          </span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
          মাস্টার কন্ট্রোল প্যানেল (Owner Control Panel)
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
          ১৩টি বিষয়, প্রশ্ন ব্যাংক, এআই গবেষণা অনুমোদন, শিক্ষার্থী সেলফ-রেজিস্ট্রেশন ও ক্লাউড ডাটাবেস নিরাপত্তা
        </p>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
        <button
          onClick={() => setActiveTab('content')}
          className={`px-4 py-2 text-xs font-bold rounded-2xl transition shrink-0 ${
            activeTab === 'content'
              ? 'bg-blue-600 text-white shadow-sm'
              : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800'
          }`}
        >
          এআই গবেষণা অনুমোদন ({researchItems.filter(r => r.status !== 'Published').length})
        </button>
        <button
          onClick={() => setActiveTab('curriculum13')}
          className={`px-4 py-2 text-xs font-bold rounded-2xl transition shrink-0 ${
            activeTab === 'curriculum13'
              ? 'bg-blue-600 text-white shadow-sm'
              : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800'
          }`}
        >
          ১৩টি বিষয়ের পাঠ্যক্রম ক্যাটালগ
        </button>
        <button
          onClick={() => setActiveTab('students')}
          className={`px-4 py-2 text-xs font-bold rounded-2xl transition shrink-0 ${
            activeTab === 'students'
              ? 'bg-blue-600 text-white shadow-sm'
              : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800'
          }`}
        >
          শিক্ষার্থী ব্যবস্থাপনা ({accounts.filter(a => a.role !== 'owner').length})
        </button>
        <button
          onClick={() => setActiveTab('invitations')}
          className={`px-4 py-2 text-xs font-bold rounded-2xl transition shrink-0 ${
            activeTab === 'invitations'
              ? 'bg-blue-600 text-white shadow-sm'
              : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800'
          }`}
        >
          রেজিস্ট্রেশন মোড ও ইনভাইটেশন
        </button>
        <button
          onClick={() => setActiveTab('backup')}
          className={`px-4 py-2 text-xs font-bold rounded-2xl transition shrink-0 ${
            activeTab === 'backup'
              ? 'bg-blue-600 text-white shadow-sm'
              : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800'
          }`}
        >
          ডাটাবেস ব্যাকআপ ও এক্সপোর্ট
        </button>
        <button
          onClick={() => setActiveTab('quotas')}
          className={`px-4 py-2 text-xs font-bold rounded-2xl transition shrink-0 ${
            activeTab === 'quotas'
              ? 'bg-blue-600 text-white shadow-sm'
              : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800'
          }`}
        >
          ক্লাউড আর্কিটেকচার ও সিস্টেম কোটা
        </button>
      </div>

      {/* TAB 1: AI Content Approval */}
      {activeTab === 'content' && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              পর্যালোচনা ও প্রকাশের জন্য অপেক্ষমান এআই লেকচারসমূহ
            </h3>
            <span className="text-xs text-slate-500 font-mono">
              মোট: {researchItems.length} টি ড্রাফট
            </span>
          </div>

          <div className="space-y-3">
            {researchItems.map(item => (
              <div
                key={item.id}
                className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs"
              >
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-bold text-slate-800 dark:text-slate-200 text-sm">{item.topicTitle}</span>
                    <span className="px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 font-mono text-[10px]">
                      {item.status}
                    </span>
                  </div>
                  <div className="text-slate-500 line-clamp-1">{item.generatedBanglaLesson}</div>
                </div>

                {item.status !== 'Published' && (
                  <button
                    onClick={() => {
                      publishResearch(item.id);
                      alert('কনটেন্টটি ভেরিফাইড হিসেবে সফলভাবে শিক্ষার্থীদের জন্য প্রকাশিত হয়েছে!');
                    }}
                    className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 shadow-sm shrink-0"
                  >
                    অনুমোদন দিন (Publish)
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 2: All 13 HSC Subjects Curriculum Catalog */}
      {activeTab === 'curriculum13' && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                বাংলাদেশ জাতীয় শিক্ষাক্রম (NCTB) ১৩টি বিষয়ের পূর্ণাঙ্গ তালিকা
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                সবগুলো পত্রের সরকারি অনুমোদিত অধ্যায় ও মূল ধারণার অডিট ক্যাটালগ
              </p>
            </div>
            {/* Filter */}
            <select
              value={selectedSubjectFilter}
              onChange={e => setSelectedSubjectFilter(e.target.value)}
              className="px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs font-bold text-slate-800 dark:text-slate-200"
            >
              <option value="all">সব বিষয় (All 13 Papers)</option>
              <option value="ban">বাংলা (Bangla)</option>
              <option value="eng">English</option>
              <option value="ict">ICT</option>
              <option value="phy">পদার্থবিজ্ঞান (Physics)</option>
              <option value="chem">রসায়ন (Chemistry)</option>
              <option value="bio">জীববিজ্ঞান (Biology)</option>
              <option value="hmath">উচ্চতর গণিত (Higher Math)</option>
            </select>
          </div>

          <div className="space-y-4">
            {nctb13SubjectMasterCatalog
              .filter(p => selectedSubjectFilter === 'all' || p.subjectId === selectedSubjectFilter)
              .map(paper => (
                <div key={paper.paperTitle} className="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/20 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300 font-mono">
                        Code: {paper.code}
                      </span>
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                        {paper.paperTitle}
                      </h4>
                    </div>
                    <span className="text-xs font-bold text-slate-500">
                      {paper.officialChapters.length} টি অধ্যায়
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                    {paper.officialChapters.map(chap => (
                      <div key={chap.chapterNumber} className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 text-xs space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-blue-600 dark:text-blue-400 font-mono text-[11px]">
                            Ch {chap.chapterNumber}
                          </span>
                          <span className="text-[9px] font-bold px-1.5 py-0.2 rounded bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300">
                            {chap.importance}
                          </span>
                        </div>
                        <div className="font-bold text-slate-800 dark:text-slate-200 line-clamp-1">
                          {chap.title}
                        </div>
                        <div className="text-[10px] text-slate-500 line-clamp-1">
                          {chap.coreConcepts.join(' • ')}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}

      {/* TAB 3: Student Self-Registered Management */}
      {activeTab === 'students' && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                নিবন্ধিত শিক্ষার্থীদের তালিকা (Registered Students)
              </h3>
              <p className="text-xs text-slate-500">
                শিক্ষার্থীরা নিজস্ব নাম ও ইমেইল দিয়ে নিজে রেজিস্ট্রেশন করবে এবং ক্লাউড ডাটাবেসে সেভ হবে
              </p>
            </div>
          </div>

          <div className="space-y-3">
            {accounts.map(acc => (
              <div
                key={acc.id}
                className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs"
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{acc.avatar}</span>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-slate-900 dark:text-white text-sm">{acc.displayName}</span>
                      <span className="font-mono text-slate-400 text-xs">(@{acc.username})</span>
                      {acc.role === 'owner' ? (
                        <span className="px-2 py-0.5 rounded-full text-[9px] font-bold bg-purple-100 text-purple-700 dark:bg-purple-950 dark:text-purple-300">
                          Sole Owner
                        </span>
                      ) : (
                        <span className="px-2 py-0.5 rounded-full text-[9px] font-bold bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300">
                          Student
                        </span>
                      )}
                    </div>
                    <div className="text-slate-500 mt-0.5">
                      {acc.email || 'Email not provided'} • টার্গেট: HSC {acc.targetExamYear}
                    </div>
                  </div>
                </div>

                {acc.role !== 'owner' && (
                  <button
                    onClick={() => {
                      if (confirm(`${acc.displayName} এর অ্যাকাউন্ট মুছে ফেলতে চান?`)) {
                        deleteStudentAccount(acc.id);
                      }
                    }}
                    className="p-2 text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/40 rounded-xl transition"
                    title="Delete Account"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                )}
              </div>
            ))}
          </div>

          <div className="p-4 rounded-2xl bg-blue-50/50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900/40 text-xs text-blue-900 dark:text-blue-300">
            🔒 <strong>গোপনীয়তা নীতি:</strong> স্বত্ত্বাধিকারী হিসেবেও আপনি শিক্ষার্থীদের ব্যক্তিগত স্টাডি নোট বা পাসওয়ার্ড ইন্টারসেপ্ট করতে পারবেন না। ডাটাবেস RLS দ্বারা এটি সুরক্ষিত।
          </div>
        </div>
      )}

      {/* TAB 4: Registration Mode & Invitations */}
      {activeTab === 'invitations' && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
          {/* Mode Selector */}
          <div className="space-y-3">
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              শিক্ষার্থী রেজিস্ট্রেশন মোড কনফিগারেশন (Student Registration Mode)
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div
                onClick={() => setRegistrationMode('open')}
                className={`p-4 rounded-2xl border cursor-pointer transition ${
                  registrationMode === 'open'
                    ? 'border-blue-500 bg-blue-50/50 dark:bg-blue-950/30'
                    : 'border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/40'
                }`}
              >
                <div className="text-sm font-bold text-slate-900 dark:text-white">১. উন্মুক্ত (Open)</div>
                <div className="text-xs text-slate-500 mt-1">লিংক পাওয়া যে কোনো শিক্ষার্থী নিজে একাউন্ট তৈরি করতে পারবে।</div>
              </div>

              <div
                onClick={() => setRegistrationMode('invite_only')}
                className={`p-4 rounded-2xl border cursor-pointer transition ${
                  registrationMode === 'invite_only'
                    ? 'border-blue-500 bg-blue-50/50 dark:bg-blue-950/30'
                    : 'border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/40'
                }`}
              >
                <div className="text-sm font-bold text-slate-900 dark:text-white">২. ইনভাইটেশন আবশ্যক (Invite Only)</div>
                <div className="text-xs text-slate-500 mt-1">রেজিস্ট্রেশনের সময় আপনার দেওয়া ইনভাইট কোড বাধ্যতামূলক।</div>
              </div>

              <div
                onClick={() => setRegistrationMode('disabled')}
                className={`p-4 rounded-2xl border cursor-pointer transition ${
                  registrationMode === 'disabled'
                    ? 'border-blue-500 bg-blue-50/50 dark:bg-blue-950/30'
                    : 'border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/40'
                }`}
              >
                <div className="text-sm font-bold text-slate-900 dark:text-white">৩. রেজিস্ট্রেশন বন্ধ (Disabled)</div>
                <div className="text-xs text-slate-500 mt-1">নতুন কোনো শিক্ষার্থী একাউন্ট খুলতে পারবে না, শুধু বর্তমানরা লগইন করবে।</div>
              </div>
            </div>
          </div>

          {/* Invitation Generator */}
          <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 space-y-4">
            <h4 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
              <KeyRound className="w-4 h-4 text-blue-600" />
              নতুন ইনভাইটেশন কোড তৈরি করুন
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <input
                type="text"
                value={inviteLabel}
                onChange={e => setInviteLabel(e.target.value)}
                placeholder="লেবেল (যেমন: তানভীরের কোড)"
                className="px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs"
              />
              <select
                value={newInviteTargetYear}
                onChange={e => setNewInviteTargetYear(Number(e.target.value))}
                className="px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs"
              >
                <option value={2026}>HSC 2026 Batch</option>
                <option value={2027}>HSC 2027 Batch</option>
                <option value={2028}>HSC 2028 Batch</option>
              </select>
              <button
                onClick={handleCreateInvite}
                className="px-4 py-2 rounded-xl font-bold text-xs text-white bg-blue-600 hover:bg-blue-700 transition flex items-center justify-center gap-1.5 shadow-sm"
              >
                <Plus className="w-4 h-4" />
                কোড জেনারেট করুন
              </button>
            </div>

            {/* List of active codes */}
            <div className="space-y-2 pt-2">
              <div className="text-xs font-bold text-slate-700 dark:text-slate-300">সক্রিয় ইনভাইট কোডসমূহ:</div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {invitations.map(inv => (
                  <div key={inv.code} className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700/60 flex items-center justify-between text-xs">
                    <div>
                      <div className="font-mono font-bold text-blue-600 dark:text-blue-400">{inv.code}</div>
                      <div className="text-[10px] text-slate-500">{inv.label} • HSC {inv.targetYear}</div>
                    </div>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-bold">
                      {inv.isUsed ? 'Used' : 'Available'}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 5: Backup & Export */}
      {activeTab === 'backup' && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
          <h3 className="text-base font-bold text-slate-900 dark:text-white">
            ডাটাবেস ব্যাকআপ, স্ন্যাপশট ও রপ্তানি (Export)
          </h3>
          <p className="text-xs text-slate-500">
            সম্পূর্ণ কারিকুলাম, প্রশ্ন ব্যাংক, শিক্ষার্থীর সার্বিক প্রগ্রেস ও সিস্টেম কনফিগারেশন JSON ফরম্যাটে ডাউনলোড করুন।
          </p>

          <div className="pt-2">
            <button
              onClick={handleExportJson}
              className="px-5 py-3 rounded-2xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-md shadow-blue-500/20 flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              <span>সম্পূর্ণ ডাটাবেস ব্যাকআপ ডাউনলোড করুন (JSON Snapshot)</span>
            </button>
          </div>
        </div>
      )}

      {/* TAB 6: Cloud Architecture & Quota Documentation */}
      {activeTab === 'quotas' && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
          <h3 className="text-base font-bold text-slate-900 dark:text-white">
            ক্লাউড স্থাপত্য ও অনুমোদিত সিস্টেম কোটা (Cloud Architecture & Quotas)
          </h3>

          <div className="space-y-3 text-xs">
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 space-y-1">
              <div className="font-bold text-slate-800 dark:text-slate-200">১. ক্লাউডফ্লেয়ার পেজেস (Cloudflare Pages):</div>
              <div className="text-slate-600 dark:text-slate-400">
                আনলিমিটেড স্ট্যাটিক ব্যান্ডউইথ, প্রতি মাসে ৫০০টি বিল্ড, এবং গ্লোবাল এজ সিডিএন ক্যাশিং।
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 space-y-1">
              <div className="font-bold text-slate-800 dark:text-slate-200">২. সুপারবেস ডাটাবেস (Supabase Cloud Database):</div>
              <div className="text-slate-600 dark:text-slate-400">
                ৫০০ MB ডাটাবেস স্টোরেজ, ১ GB ফাইল স্টোরেজ, ৫০,০০০ মাসিক সক্রিয় ব্যবহারকারী, যা প্ল্যাটফর্মের জন্য স্থায়ীভাবে সক্রিয়।
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 space-y-1">
              <div className="font-bold text-slate-800 dark:text-slate-200">৩. গুগল জেমিনি এআই (Google Gemini API):</div>
              <div className="text-slate-600 dark:text-slate-400">
                প্রতি মিনিটে ১৫টি রিকোয়েস্ট (15 RPM) এবং প্রতিদিন ১,৫০০টি গবেষণা রিকোয়েস্ট বরাদ্দ।
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
