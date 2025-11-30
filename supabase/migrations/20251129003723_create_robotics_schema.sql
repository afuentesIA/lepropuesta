/*
  # Robotics Website Database Schema
  
  1. New Tables
    - `products`
      - `id` (uuid, primary key)
      - `name_en` (text) - Product name in English
      - `name_es` (text) - Product name in Spanish
      - `name_pt` (text) - Product name in Portuguese
      - `description_en` (text) - Description in English
      - `description_es` (text) - Description in Spanish
      - `description_pt` (text) - Description in Portuguese
      - `image_url` (text) - Product image URL
      - `video_url` (text, nullable) - Product video URL
      - `price` (numeric) - Product price
      - `features_en` (jsonb) - Features array in English
      - `features_es` (jsonb) - Features array in Spanish
      - `features_pt` (jsonb) - Features array in Portuguese
      - `category` (text) - Product category (ai_camera, robot, accessory)
      - `display_order` (integer) - Display order
      - `created_at` (timestamp)
      - `updated_at` (timestamp)
    
    - `resources`
      - `id` (uuid, primary key)
      - `title_en` (text) - Resource title in English
      - `title_es` (text) - Resource title in Spanish
      - `title_pt` (text) - Resource title in Portuguese
      - `content_en` (text) - Content in English
      - `content_es` (text) - Content in Spanish
      - `content_pt` (text) - Content in Portuguese
      - `type` (text) - Resource type (documentation, tutorial, guide, video)
      - `image_url` (text, nullable)
      - `url` (text, nullable) - External URL
      - `display_order` (integer)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)
    
    - `news`
      - `id` (uuid, primary key)
      - `title_en` (text) - News title in English
      - `title_es` (text) - News title in Spanish
      - `title_pt` (text) - News title in Portuguese
      - `content_en` (text) - Content in English
      - `content_es` (text) - Content in Spanish
      - `content_pt` (text) - Content in Portuguese
      - `excerpt_en` (text) - Excerpt in English
      - `excerpt_es` (text) - Excerpt in Spanish
      - `excerpt_pt` (text) - Excerpt in Portuguese
      - `image_url` (text)
      - `published_date` (timestamp)
      - `author` (text)
      - `category` (text)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)
    
    - `contact_submissions`
      - `id` (uuid, primary key)
      - `name` (text)
      - `email` (text)
      - `company` (text, nullable)
      - `message` (text)
      - `language` (text) - Language of submission
      - `created_at` (timestamp)
  
  2. Security
    - Enable RLS on all tables
    - Add policies for public read access on products, resources, and news
    - Add policy for contact submissions (insert only)
*/

-- Products table
CREATE TABLE IF NOT EXISTS products (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name_en text NOT NULL,
  name_es text NOT NULL,
  name_pt text NOT NULL,
  description_en text NOT NULL,
  description_es text NOT NULL,
  description_pt text NOT NULL,
  image_url text NOT NULL,
  video_url text,
  price numeric NOT NULL DEFAULT 0,
  features_en jsonb DEFAULT '[]'::jsonb,
  features_es jsonb DEFAULT '[]'::jsonb,
  features_pt jsonb DEFAULT '[]'::jsonb,
  category text NOT NULL DEFAULT 'ai_camera',
  display_order integer NOT NULL DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE products ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view products"
  ON products FOR SELECT
  TO public
  USING (true);

-- Resources table
CREATE TABLE IF NOT EXISTS resources (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title_en text NOT NULL,
  title_es text NOT NULL,
  title_pt text NOT NULL,
  content_en text NOT NULL,
  content_es text NOT NULL,
  content_pt text NOT NULL,
  type text NOT NULL DEFAULT 'documentation',
  image_url text,
  url text,
  display_order integer NOT NULL DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE resources ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view resources"
  ON resources FOR SELECT
  TO public
  USING (true);

-- News table
CREATE TABLE IF NOT EXISTS news (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title_en text NOT NULL,
  title_es text NOT NULL,
  title_pt text NOT NULL,
  content_en text NOT NULL,
  content_es text NOT NULL,
  content_pt text NOT NULL,
  excerpt_en text NOT NULL,
  excerpt_es text NOT NULL,
  excerpt_pt text NOT NULL,
  image_url text NOT NULL,
  published_date timestamptz DEFAULT now(),
  author text NOT NULL,
  category text NOT NULL DEFAULT 'general',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE news ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view published news"
  ON news FOR SELECT
  TO public
  USING (published_date <= now());

-- Contact submissions table
CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  company text,
  message text NOT NULL,
  language text NOT NULL DEFAULT 'en',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit contact form"
  ON contact_submissions FOR INSERT
  TO public
  WITH CHECK (true);

-- Indexes for better performance
CREATE INDEX IF NOT EXISTS idx_products_category ON products(category);
CREATE INDEX IF NOT EXISTS idx_products_display_order ON products(display_order);
CREATE INDEX IF NOT EXISTS idx_resources_type ON resources(type);
CREATE INDEX IF NOT EXISTS idx_resources_display_order ON resources(display_order);
CREATE INDEX IF NOT EXISTS idx_news_published_date ON news(published_date);
CREATE INDEX IF NOT EXISTS idx_news_category ON news(category);