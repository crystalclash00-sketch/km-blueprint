import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Lock, Mail, User, Shield, AlertCircle, CheckCircle2, ArrowRight, Eye, EyeOff, KeyRound } from 'lucide-react';

export const AuthView: React.FC = () => {
  const { isOwner, currentUser, accounts, loginWithPin, loginWithCredentials, registerStudent, setActivePage, registrationMode } = useApp();
  const [isRegisterMode, setIsRegisterMode] = useState(false);
  
  // Login Form
  const [loginEmailOrUsername, setLoginEmailOrUsername] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [showLoginPassword, setShowLoginPassword] = useState(false);
  
  // Register Form
  const [regFullName, setRegFullName] = useState('');
  const [regDisplayName, setRegDisplayName] = useState('');
  const [regUsername, setRegUsername] = useState('');
  const [regEmail, setRegEmail] = useState('');
  const [regPassword, setRegPassword] = useState('');
  const [regConfirmPassword, setRegConfirmPassword] = useState('');
  const [regInviteCode, setRegInviteCode] = useState('');
  const [showRegPassword, setShowRegPassword] = useState(false);

  // Status
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    setSuccessMsg('');
    if (!loginEmailOrUsername.trim() || !loginPassword) {
      setErrorMsg('ইমেইল বা ইউজারনেম এবং পাসওয়ার্ড প্রদান করুন।');
      return;
    }

    setIsLoading(true);
    const res = await loginWithCredentials(loginEmailOrUsername.trim(), loginPassword);
    setIsLoading(false);

    if (res.success) {
      setSuccessMsg('লগইন সফল হয়েছে! ড্যাশবোর্ডে প্রবেশ করা হচ্ছে...');
      setTimeout(() => {
        setActivePage('dashboard');
      }, 500);
    } else {
      setErrorMsg(res.error || 'লগইন ব্যর্থ হয়েছে। তথ্য যাচাই করুন।');
    }
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    setSuccessMsg('');

    if (registrationMode === 'disabled') {
      setErrorMsg('দুঃখিত, বর্তমানে নতুন শিক্ষার্থী রেজিস্ট্রেশন বন্ধ আছে।');
      return;
    }

    if (!regFullName.trim() || !regDisplayName.trim() || !regUsername.trim() || !regEmail.trim()) {
      setErrorMsg('সবগুলো আবশ্যক ফিল্ড পূরণ করুন।');
      return;
    }

    if (regPassword.length < 6) {
      setErrorMsg('পাসওয়ার্ড ন্যূনতম ৬ অক্ষরের হতে হবে।');
      return;
    }

    if (regPassword !== regConfirmPassword) {
      setErrorMsg('পাসওয়ার্ড দুটি মেলেনি। একই পাসওয়ার্ড দিন।');
      return;
    }

    if (registrationMode === 'invite_only' && !regInviteCode.trim()) {
      setErrorMsg('ইনভাইটেশন কোড প্রদান করা আবশ্যক।');
      return;
    }

    setIsLoading(true);
    const res = await registerStudent({
      fullName: regFullName.trim(),
      displayName: regDisplayName.trim(),
      username: regUsername.trim().toLowerCase(),
      email: regEmail.trim().toLowerCase(),
      password: regPassword,
      inviteCode: regInviteCode.trim()
    });
    setIsLoading(false);

    if (res.success) {
      setSuccessMsg('অ্যাকাউন্ট সফলভাবে তৈরি হয়েছে! ড্যাশবোর্ডে স্বাগতম...');
      setTimeout(() => {
        setActivePage('dashboard');
      }, 700);
    } else {
      setErrorMsg(res.error || 'রেজিস্ট্রেশন ব্যর্থ হয়েছে।');
    }
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-slate-50 via-slate-100 to-slate-200 dark:from-[#090d16] dark:via-[#0c1220] dark:to-[#0f172a] flex items-center justify-center p-4">
      <div className="max-w-md w-full my-8 p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl space-y-6 animate-fade-in">
        {/* Brand Header */}
        <div className="text-center space-y-2">
          <div className="inline-flex p-3 rounded-2xl bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 mb-1">
            <Shield className="w-8 h-8" />
          </div>
          <h2 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">
            K&M BLUEPRINT
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            {isRegisterMode ? 'নতুন শিক্ষার্থী অ্যাকাউন্ট রেজিস্ট্রেশন' : 'সুরক্ষিত লগইন ও শিক্ষা পোর্টাল'}
          </p>
        </div>

      {/* Mode Switcher Pills */}
      <div className="flex p-1 bg-slate-100 dark:bg-slate-800 rounded-2xl">
        <button
          type="button"
          onClick={() => { setIsRegisterMode(false); setErrorMsg(''); setSuccessMsg(''); }}
          className={`flex-1 py-2 text-xs font-bold rounded-xl transition ${
            !isRegisterMode
              ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm'
              : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
          }`}
        >
          লগইন (Login)
        </button>
        <button
          type="button"
          onClick={() => { setIsRegisterMode(true); setErrorMsg(''); setSuccessMsg(''); }}
          className={`flex-1 py-2 text-xs font-bold rounded-xl transition ${
            isRegisterMode
              ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm'
              : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
          }`}
        >
          রেজিস্ট্রেশন (Register)
        </button>
      </div>

      {/* Status Messages */}
      {errorMsg && (
        <div className="p-3.5 rounded-2xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900 text-xs text-rose-700 dark:text-rose-300 flex items-center gap-2">
          <AlertCircle className="w-4 h-4 shrink-0 text-rose-600" />
          <span>{errorMsg}</span>
        </div>
      )}

      {successMsg && (
        <div className="p-3.5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900 text-xs text-emerald-700 dark:text-emerald-300 flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-600" />
          <span>{successMsg}</span>
        </div>
      )}

      {/* LOGIN FORM */}
      {!isRegisterMode && (
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
              ইমেইল বা ইউজারনেম (Email or Username)
            </label>
            <div className="relative">
              <input
                type="text"
                required
                value={loginEmailOrUsername}
                onChange={e => setLoginEmailOrUsername(e.target.value)}
                placeholder="e.g. student@kmblueprint.bd বা username"
                className="w-full px-4 py-2.5 pl-10 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <User className="w-4 h-4 absolute left-3.5 top-3 text-slate-400" />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
              পাসওয়ার্ড (Password)
            </label>
            <div className="relative">
              <input
                type={showLoginPassword ? 'text' : 'password'}
                required
                value={loginPassword}
                onChange={e => setLoginPassword(e.target.value)}
                placeholder="আপনার পাসওয়ার্ড লিখুন"
                className="w-full px-4 py-2.5 pl-10 pr-10 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Lock className="w-4 h-4 absolute left-3.5 top-3 text-slate-400" />
              <button
                type="button"
                onClick={() => setShowLoginPassword(!showLoginPassword)}
                className="absolute right-3 top-2.5 text-slate-400 hover:text-slate-600"
              >
                {showLoginPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3 rounded-xl font-bold text-xs text-white bg-blue-600 hover:bg-blue-700 transition shadow-lg shadow-blue-500/20 disabled:opacity-50 flex items-center justify-center gap-2 mt-2"
          >
            {isLoading ? 'যাচাই করা হচ্ছে...' : 'লগইন করুন'}
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>
      )}

      {/* REGISTRATION FORM */}
      {isRegisterMode && (
        <form onSubmit={handleRegister} className="space-y-3.5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1">
                পূর্ণ নাম (Full Name) *
              </label>
              <input
                type="text"
                required
                value={regFullName}
                onChange={e => setRegFullName(e.target.value)}
                placeholder="আপনার পূর্ণ নাম"
                className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1">
                ডাকনাম (Display Name) *
              </label>
              <input
                type="text"
                required
                value={regDisplayName}
                onChange={e => setRegDisplayName(e.target.value)}
                placeholder="প্রোফাইলে যা দেখাবে"
                className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1">
                ইউজারনেম (Username) *
              </label>
              <input
                type="text"
                required
                value={regUsername}
                onChange={e => setRegUsername(e.target.value)}
                placeholder="e.g. rafi28"
                className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1">
                ইমেইল ঠিকানা (Email) *
              </label>
              <input
                type="email"
                required
                value={regEmail}
                onChange={e => setRegEmail(e.target.value)}
                placeholder="student@example.com"
                className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1">
                পাসওয়ার্ড (Password) *
              </label>
              <div className="relative">
                <input
                  type={showRegPassword ? 'text' : 'password'}
                  required
                  value={regPassword}
                  onChange={e => setRegPassword(e.target.value)}
                  placeholder="কমপক্ষে ৬ অক্ষর"
                  className="w-full px-3 py-2 pr-8 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="button"
                  onClick={() => setShowRegPassword(!showRegPassword)}
                  className="absolute right-2.5 top-2 text-slate-400"
                >
                  {showRegPassword ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>
            <div>
              <label className="block text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1">
                নিশ্চিত পাসওয়ার্ড *
              </label>
              <input
                type="password"
                required
                value={regConfirmPassword}
                onChange={e => setRegConfirmPassword(e.target.value)}
                placeholder="পুনরায় পাসওয়ার্ড লিখুন"
                className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {registrationMode === 'invite_only' && (
            <div>
              <label className="block text-[11px] font-bold text-blue-600 dark:text-blue-400 mb-1 flex items-center gap-1">
                <KeyRound className="w-3.5 h-3.5" />
                অ্যাডমিন ইনভাইটেশন কোড (Invitation Code) *
              </label>
              <input
                type="text"
                required
                value={regInviteCode}
                onChange={e => setRegInviteCode(e.target.value)}
                placeholder="এডমিনের দেওয়া ইনভাইট কোড লিখুন"
                className="w-full px-3 py-2 rounded-xl border border-blue-300 dark:border-blue-700 bg-blue-50/50 dark:bg-blue-950/30 text-xs font-mono text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500"
              />
            </div>
          )}

          <div className="p-3 rounded-2xl bg-slate-100 dark:bg-slate-800 text-[10px] text-slate-500 dark:text-slate-400 space-y-1">
            <div>• অ্যাকাউন্ট তৈরির সাথে সাথেই আপনার ব্যক্তিগত ক্লাউড প্রোফাইল সক্রিয় হবে।</div>
            <div>• আপনার সিলেবাস প্রগ্রেস ও পরীক্ষার ফলাফল সম্পূর্ণ সুরক্ষিত ও ব্যক্তিগত থাকবে।</div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3 rounded-xl font-bold text-xs text-white bg-emerald-600 hover:bg-emerald-700 transition shadow-lg shadow-emerald-500/20 disabled:opacity-50 flex items-center justify-center gap-2"
          >
            {isLoading ? 'অ্যাকাউন্ট তৈরি হচ্ছে...' : 'নতুন অ্যাকাউন্ট তৈরি করুন'}
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>
      )}
      </div>
    </div>
  );
};
