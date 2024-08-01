# tuner-app-2-backend


Welcome to the Tuner App! This is a full-stack application for managing a list of songs. The backend is built with Express and PostgreSQL, while the frontend is designed with React.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Database Schema](#database-schema)
- [Validations](#validations)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/kbodur/tuner-app-2-backend.gitt
   cd tuner-app-backend
2. **Install server dependencies**
   npm install
3. **Set up environment variables**
   Create a .env file in the root directory and add the following variables
   PORT=3345
   PG_HOST=localhost
   PG_PORT=5432
   PG_DATABASE=tuner
   PG_USER=postgres

4. **Set up the database**   
   Ensure PostgreSQL is running and then run the following commands to create and populate the database
   DROP DATABASE IF EXISTS tuner;
   CREATE DATABASE tuner;

\c tuner_dev

-- Insert data into the playlists table
INSERT INTO playlists (name, description, is_favorite) VALUES
('Turkish Pop', 'Popular Turkish pop songs', true),
('Turkish Slow', 'Popular Turkish slow songs', false),
('Turkish Rock', 'Popular Turkish rock songs', true);

-- Insert data into the albums table
INSERT INTO albums (title, artist, release_date, playlist_id) VALUES
('Adini Kalbime Yaz', 'Tarkan', '2010-07-29', 1),
('Gulpembe', 'Baris Manço', '1999-01-01', 1),
('Hosgor Sen', 'Ajda Pekkan', '1989-05-25', 1),
('Ask Kirintilari', 'Sezen Aksu', '2003-01-01', 2),
('Seni Seviyorum', 'Özdemir Erdoğan', '1974-01-01', 2),
('Seni Sevmeyen Olsun', 'Ibrahim Tatlises', '1980-01-01', 2),
('Aska Turulu Seyler', 'Mor ve Otesi', '1996-01-01', 3),
('Sahip', 'MaNga', '2010-01-01', 3),
('Gul Kendine', 'Duman', '1999-01-01', 3);

INSERT INTO songs (name, artist, album, time, is_favorite, album_id) VALUES
('Kedi Gibi', 'Tarkan', 'Adini Kalbime Yaz', '3:58', true, 1),
('Gul Pembe', 'Baris Manço', 'Mancoloji', '4:34', true, 2),
('Eglen Guzelim', 'Ajda Pekkan', 'Hosgor Sen', '3:45', true, 3),
('Ask Kirintilari', 'Sezen Aksu', 'Ask Kirintilari', '5:20', true, 4),
('Kucugum', 'Sezen Aksu', 'Ask Kirintilari', '4:45', true, 4),
('Seni Seviyorum', 'Ozemir Erdogan', 'Seni Seviyorum', '3:40', true, 5),
('Baharda Kuslar Gibi', 'Ozemir Erdogan', 'Seni Seviyorum', '4:15', true, 5),
('Seni Sevmeyen Olsun', 'Ibrahim Tatlises', 'Seni Sevmeyen Olsun', '6:05', true, 6),
('Bir Kulunu Cok Sevdim', 'Ibrahim Tatlises', 'Seni Sevmeyen Olsun', '4:50', true, 6),
('Bir Duste', 'Mor ve Otesi', 'Aska Turulu Seyler', '4:00', true, 7),
('Geri Don', 'Mor ve Otesi', 'Aska Turulu Seyler', '3:45', true, 7),
('Kapat', 'MaNga', 'Sahip', '4:15', true, 8),
('Golge', 'MaNga', 'Sahip', '4:00', true, 8),
('Gul Kendine', 'Duman', 'Gul Kendine', '5:30', true, 9),
('Senden Daha Guzel', 'Duman', 'Gul Kendine', '4:20', true, 9);

5. **Run the server**
  npm start

  
