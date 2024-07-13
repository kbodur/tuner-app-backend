# tuner-app-backend
# Tuner App

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
   git clone https://github.com/kbodur/tuner-app-backend.gitt
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

\c tuner;

CREATE TABLE songs (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  artist TEXT NOT NULL,
  album TEXT,
  time TEXT,
  is_favorite BOOLEAN
);

INSERT INTO songs (name, artist, album, time, is_favorite) VALUES
('Fame', 'David Bowie', 'Young Americans', '4:12', true),
('Once in a Lifetime', 'Talking Heads', 'Remain in Light', '4:19', true),
('The Great Curve', 'Talking Heads', 'Sand in the Vaseline', '5:39', true),
('(Nothing But) Flowers', 'Talking Heads', 'Remain in Light', '6:28', false),
('Books about UFOs', 'Hüsker Dü', 'New Day Rising', '2:49', true),
('Mr. Startup', 'Wolf Parade', 'Thin Mind', '3:31', true),
('We Got the World', 'Icona Pop', 'This is...', '3:17', false);

5. **Run the server**
  npm start

  
