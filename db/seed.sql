
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
