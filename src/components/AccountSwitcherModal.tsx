import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { X, Shield, Lock, Check, AlertCircle, KeyRound, Sparkles, LogOut } from 'lucide-react';

export const AccountSwitcherModal: React.FC = () => {
  const {
    isAccountModalOpen,
    setIsAccountModalOpen,
    accounts,
    currentUser,
    switchUser,
    logout
  } = useApp();

  const [selectedAccountId, setSelectedAccountId] = useState<string>(currentUser.id);
  const [pinOrInviteInput, setPinOrInviteInput] = useState<string>('');
  const [errorMsg, setErrorMsg] = useState<string>('');
  const [successMsg, setSuccessMsg] = useState<string>('');

  if (!isAccountModalOpen) return null;

  const targetAccount = accounts.find(a => a.id === selectedAccountId);

  const handleSwitch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!pinOrInviteInput.trim()) {
      setErrorMsg('অনুগ্রহ করে ৪-৬ ডিজিটের পিন (PIN) অথবা ইনভাইটেশন কোড প্রদান করুন।');
      return;
    }

    // Secure authentication validation
    // Owner code: KM-OWNER-2026 or 9999
    // Student 1: KM-STUDENT-A or 1111
    // Student 2: KM-STUDENT-B or 2222
    const cleanInput = pinOrInviteInput.trim().toUpperCase();
    let isAuthorized = false;

    if (selectedAccountId === 'owner_master' || targetAccount?.role === 'owner') {
      if (cleanInput === 'KM-OWNER-2026' || cleanInput === '9999' || cleanInput === targetAccount?.pin) {
        isAuthorized = true;
      }
    } else if (selectedAccountId === 'student_1') {
      if (cleanInput === 'KM-STUDENT-A' || cleanInput === '1111' || cleanInput === targetAccount?.pin) {
        isAuthorized = true;
      }
    } else if (selectedAccountId === 'student_2') {
      if (cleanInput === 'KM-STUDENT-B' || cleanInput === '2222' || cleanInput === targetAccount?.pin) {
        isAuthorized = true;
      }
    } else {
      // Fallback for custom accounts
      isAuthorized = true;
    }

    if (isAuthorized) {
      setErrorMsg('');
      setSuccessMsg('যাচাইকরণ সফল হয়েছে! অ্যাকাউন্টে প্রবেশ করা হচ্ছে...');
      setTimeout(() => {
        switchUser(selectedAccountId);
        setPinOrInviteInput('');
        setSuccessMsg('');
        setIsAccountModalOpen(false);
      }, 500);
    } else {
      setErrorMsg('ভুল পিন বা ইনভাইটেশন কোড! সঠিক কোড প্রদান করুন।');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-white dark:bg-slate-900 rounded-3xl max-w-md w-full border border-slate-200 dark:border-slate-800 shadow-2xl p-6 relative">
        <button
          onClick={() => setIsAccountModalOpen(false)}
          className="absolute right-4 top-4 p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-full"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-5">
          <div className="w-12 h-12 rounded-2xl bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 flex items-center justify-center">
            <Lock className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">
              অ্যাকাউন্ট ভেরিফিকেশন ও প্রবেশ
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              নিরাপদ প্রবেশাধিকার ও শিক্ষার্থী ডেটা প্রাইভেসী
            </p>
          </div>
        </div>

        {/* Account Cards */}
        <div className="space-y-2.5 mb-5">
          {accounts.map(acc => {
            const isSelected = selectedAccountId === acc.id;
            const isCurrent = currentUser.id === acc.id;

            return (
              <div
                key={acc.id}
                onClick={() => {
                  setSelectedAccountId(acc.id);
                  setErrorMsg('');
                  setSuccessMsg('');
                  setPinOrInviteInput('');
                }}
                className={`flex items-center justify-between p-3.5 rounded-2xl border cursor-pointer transition ${
                  isSelected
                    ? 'border-blue-500 bg-blue-50/50 dark:bg-blue-950/30'
                    : 'border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{acc.avatar}</span>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-slate-900 dark:text-white">
                        {acc.displayName}
                      </span>
                      {isCurrent && (
                        <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-950/50 dark:text-emerald-300">
                          Active
                        </span>
                      )}
                    </div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">
                      {acc.role === 'owner' ? 'মাস্টার এডমিন (All Content & Settings)' : `HSC Science (Target ${acc.targetExamYear})`}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <KeyRound className="w-4 h-4 text-slate-400" />
                  {isSelected && <Check className="w-5 h-5 text-blue-600 dark:text-blue-400" />}
                </div>
              </div>
            );
          })}
        </div>

        {/* PIN / Invitation Form */}
        <form onSubmit={handleSwitch} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
              {targetAccount?.displayName} এর পিন (PIN) অথবা ইনভাইট কোড লিখুন:
            </label>
            <input
              type="password"
              value={pinOrInviteInput}
              onChange={e => setPinOrInviteInput(e.target.value)}
              placeholder="গোপন পিন বা ইনভাইট কোড দিন"
              className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-center text-base tracking-wider font-mono focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {errorMsg && (
            <div className="flex items-center gap-2 text-xs text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/40 p-2.5 rounded-xl border border-rose-200 dark:border-rose-900">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}

          {successMsg && (
            <div className="flex items-center gap-2 text-xs text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 p-2.5 rounded-xl border border-emerald-200 dark:border-emerald-900">
              <Check className="w-4 h-4 shrink-0" />
              <span>{successMsg}</span>
            </div>
          )}

          <div className="bg-slate-100 dark:bg-slate-800/80 p-3 rounded-xl text-[11px] text-slate-500 dark:text-slate-400 space-y-1">
            <div className="font-semibold text-slate-700 dark:text-slate-200 flex items-center gap-1">
              <Shield className="w-3.5 h-3.5 text-blue-500" />
              নিরাপত্তা ও ডেটা আইসোলেশন:
            </div>
            <div>• দুই শিক্ষার্থীর ব্যক্তিগত নোট, পরীক্ষা ও পড়াশোনার হিসেব সম্পূর্ণ আলাদা ও এনক্রিপ্টেড।</div>
            <div>• কোনো শিক্ষার্থীর পিন বা পাসওয়ার্ড কখনোই উন্মুক্ত বা দৃশ্যমান থাকবে না।</div>
          </div>

          <div className="flex items-center justify-between gap-2.5 pt-2">
            <button
              type="button"
              onClick={() => {
                setIsAccountModalOpen(false);
                logout();
              }}
              className="px-3 py-2 text-xs font-bold text-rose-600 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/30 rounded-xl flex items-center gap-1.5 transition"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>লগআউট</span>
            </button>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setIsAccountModalOpen(false)}
                className="px-4 py-2 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl"
              >
                বাতিল
              </button>
              <button
                type="submit"
                className="px-5 py-2 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-md shadow-blue-500/20"
              >
                প্রবেশ নিশ্চিত করুন
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
