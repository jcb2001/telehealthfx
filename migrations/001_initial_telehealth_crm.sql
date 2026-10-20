-- Migration: 001_initial_telehealth_crm.sql
-- Database: telehealth-crm-db (c03e2f93-1491-493f-a39d-8e4f41e71239)
-- Purpose: Unified CRM, webinar registration, watch-time telemetry & email lifecycle for Telehealth FX, Losing Weight RX, and Get Skinny Online

-- 1. Master Webinar Registrations & Telemetry
CREATE TABLE IF NOT EXISTS webinar_registrations (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  brand_id TEXT NOT NULL DEFAULT 'telehealthfx', -- 'telehealthfx', 'losingweightrx', 'getskinnyonline'
  webinar_slug TEXT NOT NULL,
  vsl_video_name TEXT NOT NULL,
  vsl_angle TEXT NOT NULL,
  vsl_duration_sec INTEGER DEFAULT 420,
  first_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  starting_weight REAL,
  goal_weight REAL,
  schedule_type TEXT DEFAULT 'just_in_time',
  scheduled_for_ms INTEGER,
  entered_waiting_room_at TEXT,
  entered_broadcast_room_at TEXT,
  unmuted_audio_at TEXT,
  skipped_bumper_at TEXT,
  max_watch_seconds REAL DEFAULT 0,
  watch_percent REAL DEFAULT 0,
  attendance_segment TEXT DEFAULT 'registered', -- 'registered', 'missed_session', 'early_dropoff_under_25', 'mid_dropoff_25_to_74', 'watched_75_plus', 'clicked_cta'
  clicked_cta_at TEXT,
  cta_click_type TEXT,
  clicked_final_intake_at TEXT,
  unsubscribed_at TEXT,
  ip_country TEXT,
  user_agent TEXT,
  source_form TEXT DEFAULT 'modal_popup',
  created_at TEXT DEFAULT (datetime('now')),
  updated_at TEXT DEFAULT (datetime('now'))
);

-- 2. Medical Pre-Qualification Screener Submissions
CREATE TABLE IF NOT EXISTS qualification_submissions (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  registration_id INTEGER REFERENCES webinar_registrations(id),
  brand_id TEXT NOT NULL DEFAULT 'telehealthfx',
  email TEXT NOT NULL,
  calculated_bmi REAL,
  has_prior_glp1 INTEGER DEFAULT 0,
  preferred_format TEXT DEFAULT 'injectable', -- 'injectable', 'sublingual_tablet'
  contraindication_flag INTEGER DEFAULT 0, -- MEN2 / MTC / Pancreatitis
  qualified INTEGER DEFAULT 1,
  matched_offer_id INTEGER DEFAULT 1548, -- 1548 Embody, 1325 Willow, 1344 Peter MD
  answers_json TEXT,
  created_at TEXT DEFAULT (datetime('now'))
);

-- 3. Behavioral Email Dispatch & Audit Logs
CREATE TABLE IF NOT EXISTS webinar_email_logs (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  registration_id INTEGER REFERENCES webinar_registrations(id),
  email_to TEXT NOT NULL,
  brand_id TEXT NOT NULL DEFAULT 'telehealthfx',
  template_key TEXT NOT NULL,
  subject TEXT NOT NULL,
  status TEXT DEFAULT 'sent', -- 'sent', 'suppressed', 'error'
  provider_response TEXT,
  sent_at TEXT DEFAULT (datetime('now'))
);

-- 4. Global CAN-SPAM Unsubscribe Suppression List (15 U.S.C. § 7704)
CREATE TABLE IF NOT EXISTS email_unsubscribes (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  email TEXT NOT NULL UNIQUE,
  reason TEXT,
  unsubscribed_at TEXT DEFAULT (datetime('now'))
);

-- Indexes for ultra-low-latency edge lookups
CREATE INDEX IF NOT EXISTS idx_reg_email ON webinar_registrations(email);
CREATE INDEX IF NOT EXISTS idx_reg_brand ON webinar_registrations(brand_id);
CREATE INDEX IF NOT EXISTS idx_reg_segment ON webinar_registrations(attendance_segment);
CREATE INDEX IF NOT EXISTS idx_unsub_email ON email_unsubscribes(email);
