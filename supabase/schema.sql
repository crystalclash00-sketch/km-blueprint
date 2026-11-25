-- =========================================================================
-- K&M BLUEPRINT — PRODUCTION DATABASE SCHEMA WITH ROW LEVEL SECURITY (RLS)
-- Tagline: Bangladesh's First All-in-One HSC Learning Platform
-- Target: Free-tier Supabase PostgreSQL
-- =========================================================================

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. PROFILES & ACCOUNTS
CREATE TABLE IF NOT EXISTS public.profiles (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    username TEXT UNIQUE NOT NULL,
    display_name TEXT NOT NULL,
    role TEXT NOT NULL CHECK (role IN ('owner', 'student')),
    avatar TEXT,
    group_name TEXT DEFAULT 'Science',
    target_exam_year INT DEFAULT 2026,
    optional_subject_id TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- Profiles Policies
CREATE POLICY "Public profiles are viewable by authenticated users"
ON public.profiles FOR SELECT
TO authenticated
USING (true);

CREATE POLICY "Users can update only their own profile"
ON public.profiles FOR UPDATE
TO authenticated
USING (auth.uid() = id);

-- 2. GLOBAL CURRICULUM: SUBJECTS, PAPERS, CHAPTERS & TOPICS
CREATE TABLE IF NOT EXISTS public.curriculum_subjects (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    english_name TEXT NOT NULL,
    code TEXT NOT NULL,
    is_compulsory BOOLEAN DEFAULT true,
    color TEXT DEFAULT '#3b82f6',
    icon_name TEXT DEFAULT 'book',
    created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.curriculum_papers (
    id TEXT PRIMARY KEY,
    subject_id TEXT REFERENCES public.curriculum_subjects(id) ON DELETE CASCADE,
    paper_number INT NOT NULL CHECK (paper_number IN (1, 2)),
    title TEXT NOT NULL,
    english_title TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS public.curriculum_chapters (
    id TEXT PRIMARY KEY,
    paper_id TEXT REFERENCES public.curriculum_papers(id) ON DELETE CASCADE,
    chapter_number INT NOT NULL,
    title TEXT NOT NULL,
    english_title TEXT NOT NULL,
    difficulty TEXT DEFAULT 'Medium',
    importance TEXT DEFAULT 'Standard',
    overview TEXT,
    learning_objectives JSONB DEFAULT '[]'::jsonb,
    lesson_content TEXT,
    definitions JSONB DEFAULT '[]'::jsonb,
    key_concepts JSONB DEFAULT '[]'::jsonb,
    solved_examples JSONB DEFAULT '[]'::jsonb,
    numerical_problems JSONB DEFAULT '[]'::jsonb,
    board_questions JSONB DEFAULT '[]'::jsonb,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.curriculum_topics (
    id TEXT PRIMARY KEY,
    chapter_id TEXT REFERENCES public.curriculum_chapters(id) ON DELETE CASCADE,
    title TEXT NOT NULL,
    english_title TEXT,
    priority_category TEXT DEFAULT 'Important',
    importance_reason TEXT,
    estimated_minutes INT DEFAULT 45,
    order_index INT DEFAULT 0
);

-- RLS: Curriculum is readable by all students, but editable ONLY by Owner
ALTER TABLE public.curriculum_subjects ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.curriculum_papers ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.curriculum_chapters ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.curriculum_topics ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone authenticated can read curriculum subjects"
ON public.curriculum_subjects FOR SELECT TO authenticated USING (true);

CREATE POLICY "Anyone authenticated can read curriculum papers"
ON public.curriculum_papers FOR SELECT TO authenticated USING (true);

CREATE POLICY "Anyone authenticated can read curriculum chapters"
ON public.curriculum_chapters FOR SELECT TO authenticated USING (true);

CREATE POLICY "Anyone authenticated can read curriculum topics"
ON public.curriculum_topics FOR SELECT TO authenticated USING (true);

CREATE POLICY "Only owner can insert or update curriculum"
ON public.curriculum_chapters FOR ALL TO authenticated
USING (
    EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role = 'owner')
);

-- 3. QUESTION BANK
CREATE TABLE IF NOT EXISTS public.question_bank (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    subject_id TEXT NOT NULL,
    paper_number INT NOT NULL,
    chapter_id TEXT NOT NULL,
    topic_id TEXT,
    type TEXT NOT NULL CHECK (type IN ('MCQ', 'CQ', 'Short', 'Numerical', 'Board')),
    question_text TEXT NOT NULL,
    options JSONB,
    correct_option_index INT,
    correct_answer_text TEXT,
    explanation TEXT NOT NULL,
    why_incorrect JSONB,
    difficulty TEXT DEFAULT 'Medium',
    origin TEXT DEFAULT 'Original K&M Practice',
    board_info JSONB,
    verification_status TEXT DEFAULT 'Verified',
    step_by_step_solution JSONB,
    relevant_formula_id TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE public.question_bank ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Authenticated users can read question bank"
ON public.question_bank FOR SELECT TO authenticated USING (true);

CREATE POLICY "Only owner can manage question bank"
ON public.question_bank FOR ALL TO authenticated
USING (
    EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role = 'owner')
);

-- 4. STUDENT PROGRESS & TOPIC STATUS (Strictly isolated per student)
CREATE TABLE IF NOT EXISTS public.student_topic_progress (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
    topic_id TEXT NOT NULL,
    chapter_id TEXT NOT NULL,
    subject_id TEXT NOT NULL,
    status TEXT NOT NULL DEFAULT 'not_started' CHECK (status IN ('not_started', 'reading', 'learning', 'practising', 'understood', 'revision_needed', 'completed')),
    is_confirmed_completed BOOLEAN DEFAULT false,
    confirmed_at TIMESTAMPTZ,
    last_studied_at TIMESTAMPTZ DEFAULT NOW(),
    personal_notes TEXT,
    UNIQUE(user_id, topic_id)
);

ALTER TABLE public.student_topic_progress ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Students can only select their own topic progress"
ON public.student_topic_progress FOR SELECT TO authenticated
USING (auth.uid() = user_id);

CREATE POLICY "Students can insert/update their own topic progress"
ON public.student_topic_progress FOR ALL TO authenticated
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);

-- 5. STUDENT STUDY SUBMISSIONS ("What I Studied Today")
CREATE TABLE IF NOT EXISTS public.study_submissions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
    date DATE NOT NULL DEFAULT CURRENT_DATE,
    subject_id TEXT NOT NULL,
    paper_number INT NOT NULL,
    chapter_id TEXT NOT NULL,
    topic_ids JSONB DEFAULT '[]'::jsonb,
    natural_language_note TEXT NOT NULL,
    what_read TEXT,
    what_studied TEXT,
    what_understood TEXT,
    what_practised TEXT,
    mcqs_attempted_count INT DEFAULT 0,
    cqs_attempted_count INT DEFAULT 0,
    numerical_problems_count INT DEFAULT 0,
    formulas_revised JSONB DEFAULT '[]'::jsonb,
    time_spent_minutes INT DEFAULT 0,
    difficulties TEXT,
    suggested_updates JSONB,
    is_confirmed_by_student BOOLEAN DEFAULT false,
    confirmed_at TIMESTAMPTZ,
    student_edit_notes TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE public.study_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Students can only access their own study submissions"
ON public.study_submissions FOR ALL TO authenticated
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);

-- 6. EXAMINATION ATTEMPTS & MISTAKE RECORDS (Immutable after submission)
CREATE TABLE IF NOT EXISTS public.exam_attempts (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
    subject_id TEXT NOT NULL,
    paper_number INT NOT NULL,
    chapter_ids JSONB NOT NULL,
    exam_title TEXT NOT NULL,
    total_questions INT NOT NULL,
    duration_minutes INT NOT NULL,
    started_at TIMESTAMPTZ NOT NULL,
    deadline TIMESTAMPTZ NOT NULL,
    submitted_at TIMESTAMPTZ,
    is_auto_submitted BOOLEAN DEFAULT false,
    status TEXT NOT NULL DEFAULT 'in_progress' CHECK (status IN ('in_progress', 'completed', 'expired')),
    questions_snapshot JSONB NOT NULL,
    total_score NUMERIC(5,2) DEFAULT 0,
    max_score NUMERIC(5,2) NOT NULL,
    percentage NUMERIC(5,2) DEFAULT 0,
    correct_count INT DEFAULT 0,
    incorrect_count INT DEFAULT 0,
    unanswered_count INT DEFAULT 0,
    weak_topic_ids JSONB DEFAULT '[]'::jsonb,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE public.exam_attempts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Students can only view and manage their own exam attempts"
ON public.exam_attempts FOR ALL TO authenticated
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);

-- 7. HSC DATE MONITOR & COUNTDOWN CONFIGURATION
CREATE TABLE IF NOT EXISTS public.hsc_exam_config (
    id INT PRIMARY KEY DEFAULT 1,
    target_exam_year INT NOT NULL DEFAULT 2026,
    official_start_date DATE,
    start_time TIME DEFAULT '10:00:00',
    time_zone TEXT DEFAULT 'Asia/Dhaka',
    is_officially_announced BOOLEAN DEFAULT false,
    status TEXT DEFAULT 'Not Announced',
    last_checked_at TIMESTAMPTZ DEFAULT NOW(),
    automatic_publish_enabled BOOLEAN DEFAULT false,
    audit_log JSONB DEFAULT '[]'::jsonb
);

CREATE TABLE IF NOT EXISTS public.hsc_date_notices (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title TEXT NOT NULL,
    source_name TEXT NOT NULL,
    source_url TEXT NOT NULL,
    discovered_at TIMESTAMPTZ DEFAULT NOW(),
    publication_date DATE NOT NULL,
    target_exam_year INT NOT NULL,
    announced_start_date DATE,
    verification_status TEXT NOT NULL,
    is_verified_by_owner BOOLEAN DEFAULT false,
    owner_notes TEXT,
    raw_snippet TEXT
);

ALTER TABLE public.hsc_exam_config ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.hsc_date_notices ENABLE ROW LEVEL SECURITY;

CREATE POLICY "All authenticated users can read official HSC date config"
ON public.hsc_exam_config FOR SELECT TO authenticated USING (true);

CREATE POLICY "Only owner can update HSC exam config"
ON public.hsc_exam_config FOR ALL TO authenticated
USING (
    EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role = 'owner')
);

CREATE POLICY "All authenticated users can read discovered HSC notices"
ON public.hsc_date_notices FOR SELECT TO authenticated USING (true);

CREATE POLICY "Only owner can modify discovered notices"
ON public.hsc_date_notices FOR ALL TO authenticated
USING (
    EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role = 'owner')
);

-- 8. PRINT THE BLUEPRINT AI RESEARCH SYSTEM
CREATE TABLE IF NOT EXISTS public.blueprint_research (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    subject_id TEXT NOT NULL,
    paper_number INT NOT NULL,
    chapter_id TEXT NOT NULL,
    topic_title TEXT NOT NULL,
    bangla_lesson TEXT,
    definitions JSONB,
    formulas JSONB,
    examples JSONB,
    mcqs JSONB,
    source_references JSONB,
    status TEXT NOT NULL DEFAULT 'Needs Verification' CHECK (status IN ('Researching', 'Draft Generated', 'Needs Verification', 'Verified', 'Published', 'Needs Update', 'Rejected')),
    created_at TIMESTAMPTZ DEFAULT NOW(),
    reviewed_by_owner_at TIMESTAMPTZ,
    owner_feedback TEXT
);

ALTER TABLE public.blueprint_research ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Authenticated users can read published research"
ON public.blueprint_research FOR SELECT TO authenticated
USING (status = 'Published' OR EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role = 'owner'));

CREATE POLICY "Only owner can update or publish research"
ON public.blueprint_research FOR ALL TO authenticated
USING (
    EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role = 'owner')
);

-- 9. MISSIONS, ROUTINES, FLASHCARDS & TIMER SESSIONS (Private to student)
CREATE TABLE IF NOT EXISTS public.student_missions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
    date DATE NOT NULL,
    title TEXT NOT NULL,
    subject_id TEXT NOT NULL,
    paper_number INT NOT NULL,
    chapter_id TEXT,
    topic_title TEXT,
    duration_minutes INT DEFAULT 45,
    priority TEXT DEFAULT 'Normal',
    difficulty TEXT DEFAULT 'Medium',
    status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'completed', 'partial', 'skipped')),
    skip_reason TEXT,
    notes TEXT,
    xp_reward INT DEFAULT 50,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.student_flashcards (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
    subject_id TEXT NOT NULL,
    paper_number INT NOT NULL,
    chapter_id TEXT NOT NULL,
    front TEXT NOT NULL,
    back TEXT NOT NULL,
    category TEXT DEFAULT 'Formula',
    next_review_date DATE DEFAULT CURRENT_DATE,
    interval_days INT DEFAULT 1,
    ease_factor NUMERIC(3,2) DEFAULT 2.5,
    repetitions INT DEFAULT 0
);

CREATE TABLE IF NOT EXISTS public.student_timer_sessions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
    subject_id TEXT NOT NULL,
    mode TEXT NOT NULL CHECK (mode IN ('pomodoro', 'stopwatch', 'countdown')),
    duration_minutes INT NOT NULL,
    completed_at TIMESTAMPTZ DEFAULT NOW(),
    mission_id UUID REFERENCES public.student_missions(id) ON DELETE SET NULL
);

ALTER TABLE public.student_missions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.student_flashcards ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.student_timer_sessions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Students isolate their own missions"
ON public.student_missions FOR ALL TO authenticated
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Students isolate their own flashcards"
ON public.student_flashcards FOR ALL TO authenticated
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Students isolate their own timer sessions"
ON public.student_timer_sessions FOR ALL TO authenticated
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);
