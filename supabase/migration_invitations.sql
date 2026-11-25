-- =========================================================================
-- K&M BLUEPRINT — INVITATIONS & DATABASE INDEXES FOR HIGH-SPEED QUERYING
-- =========================================================================

-- Invitations Table for Restricted Admin-Controlled Registration
CREATE TABLE IF NOT EXISTS public.invitations (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    pin_code TEXT NOT NULL UNIQUE,
    assigned_role TEXT NOT NULL DEFAULT 'student' CHECK (assigned_role IN ('owner', 'student')),
    assigned_display_name TEXT,
    target_year INT DEFAULT 2026,
    is_used BOOLEAN DEFAULT false,
    used_by UUID REFERENCES auth.users(id),
    used_at TIMESTAMPTZ,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE public.invitations ENABLE ROW LEVEL SECURITY;

-- Allow public read of un-used invitation codes to validate registration pin
CREATE POLICY "Public can check valid invite pins"
ON public.invitations FOR SELECT
TO anon, authenticated
USING (true);

-- Only owner can generate/manage invitations
CREATE POLICY "Only owner can manage invitations"
ON public.invitations FOR ALL
TO authenticated
USING (
    EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role = 'owner')
);

-- Seed initial invitation keys (Replace with your own secure random codes in production)
INSERT INTO public.invitations (pin_code, assigned_role, assigned_display_name, target_year)
VALUES 
    ('KM-OWNER-2026', 'owner', 'Platform Owner', 2026),
    ('KM-STUDENT-A', 'student', 'Student 1 (Science)', 2026),
    ('KM-STUDENT-B', 'student', 'Student 2 (Science)', 2026)
ON CONFLICT (pin_code) DO NOTHING;

-- Performance Indexes for Real-time Multi-Device Sync
CREATE INDEX IF NOT EXISTS idx_student_topic_progress_user ON public.student_topic_progress(user_id);
CREATE INDEX IF NOT EXISTS idx_student_topic_progress_chapter ON public.student_topic_progress(user_id, chapter_id);
CREATE INDEX IF NOT EXISTS idx_study_submissions_user_date ON public.study_submissions(user_id, date DESC);
CREATE INDEX IF NOT EXISTS idx_exam_attempts_user ON public.exam_attempts(user_id, started_at DESC);
CREATE INDEX IF NOT EXISTS idx_student_missions_user ON public.student_missions(user_id, date);
CREATE INDEX IF NOT EXISTS idx_student_flashcards_user ON public.student_flashcards(user_id, next_review_date);
CREATE INDEX IF NOT EXISTS idx_question_bank_subject_chapter ON public.question_bank(subject_id, chapter_id);
