.open server.db

.mode box

DROP TABLE IF EXISTS user;
DROP TABLE IF EXISTS lecture;
DROP TABLE IF EXISTS work;
DROP TABLE IF EXISTS lecturelist;
DROP TABLE IF EXISTS survey;

CREATE TABLE user (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL,
    name TEXT NOT NULL,
    university TEXT,
    intro TEXT,
    lesson TEXT,
    rank INTEGER,
    xp INTEGER
);


CREATE TABLE lecture (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    lesson TEXT,
	day TEXT,
	period INTEGER
);

CREATE TABLE work (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
	user_id INTEGER,
    lesson TEXT,
    name TEXT,
	term DATE,
	level INTEGER
);

CREATE TABLE lecturelist (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
	user_id INTEGER,
    lesson TEXT,
	day TEXT,
	period INTEGER,
    attend INTEGER,
    count INTEGER
);

CREATE TABLE survey (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER,
    lesson TEXT,
    attend BOOLEAN,
    understand INT CHECK(understand >= 0 AND understand <= 9),
    iswork BOOLEAN,
    num INTEGER
);

INSERT INTO user (username, password, name, university, intro, lesson, rank, xp)
VALUES 
('user1', 'password1', '蔵原りょう', 'University of Tokyo', 'I am a first-year student studying economics.', 'Economics, Law', 5, 1200),
('user2', 'password2', 'Bob', 'Kyoto University', 'I am interested in computer science and mathematics.', 'Programming, Math', 7, 1800),
('user3', 'password3', 'Charlie', 'Osaka University', 'My focus is on literature and history.', 'Literature, History', 4, 950);


INSERT INTO work (user_id, lesson, name, term, level) VALUES (1, '経済学入門', 'レポート', '2024-09-30', 4);
INSERT INTO work (user_id, lesson, name, term, level) VALUES (1, '経済政策', 'レポート', '2024-10-30', 4);
INSERT INTO work (user_id, lesson, name, term, level) VALUES (1, '英文法', '単語テスト', '2024-9-29', 4);
INSERT INTO work (user_id, lesson, name, term, level) VALUES (1, 'マクロ経済学', '授業プリント', '2024-10-15', 2);


-- 経済学関連の授業
INSERT INTO lecture (lesson, day, period) VALUES ('経済学入門', 'Monday', 1);
INSERT INTO lecture (lesson, day, period) VALUES ('マクロ経済学', 'Tuesday', 2);
INSERT INTO lecture (lesson, day, period) VALUES ('ミクロ経済学', 'Wednesday', 3);
INSERT INTO lecture (lesson, day, period) VALUES ('経済政策', 'Thursday', 4);
INSERT INTO lecture (lesson, day, period) VALUES ('国際経済学', 'Friday', 5);

-- 民法関連の授業
INSERT INTO lecture (lesson, day, period) VALUES ('民法総則', 'Monday', 2);
INSERT INTO lecture (lesson, day, period) VALUES ('物権法', 'Tuesday', 3);
INSERT INTO lecture (lesson, day, period) VALUES ('債権法', 'Wednesday', 4);
INSERT INTO lecture (lesson, day, period) VALUES ('家族法', 'Thursday', 5);
INSERT INTO lecture (lesson, day, period) VALUES ('相続法', 'Friday', 1);

-- 英語関連の授業
INSERT INTO lecture (lesson, day, period) VALUES ('英会話基礎', 'Monday', 3);
INSERT INTO lecture (lesson, day, period) VALUES ('英文法', 'Tuesday', 4);
INSERT INTO lecture (lesson, day, period) VALUES ('ビジネス英語', 'Wednesday', 5);
INSERT INTO lecture (lesson, day, period) VALUES ('英語文学', 'Thursday', 1);
INSERT INTO lecture (lesson, day, period) VALUES ('英語発音', 'Friday', 2);

-- 微積分学関連の授業
INSERT INTO lecture (lesson, day, period) VALUES ('微積分学入門', 'Monday', 4);
INSERT INTO lecture (lesson, day, period) VALUES ('微分法', 'Tuesday', 5);
INSERT INTO lecture (lesson, day, period) VALUES ('積分法', 'Wednesday', 1);
INSERT INTO lecture (lesson, day, period) VALUES ('多変数関数', 'Thursday', 2);
INSERT INTO lecture (lesson, day, period) VALUES ('応用微積分', 'Friday', 3);

-- 日本文学関連の授業
INSERT INTO lecture (lesson, day, period) VALUES ('古典文学', 'Monday', 5);
INSERT INTO lecture (lesson, day, period) VALUES ('近代文学', 'Tuesday', 1);
INSERT INTO lecture (lesson, day, period) VALUES ('現代文学', 'Wednesday', 2);
INSERT INTO lecture (lesson, day, period) VALUES ('日本詩歌', 'Thursday', 3);
INSERT INTO lecture (lesson, day, period) VALUES ('文学理論', 'Friday', 4);

-- 経済学関連の授業
INSERT INTO lecturelist (user_id, lesson, day, period, attend, count) VALUES (1, '経済学入門', 'Monday', 1, 5, 5);
INSERT INTO lecturelist (user_id, lesson, day, period, attend, count) VALUES (1, 'マクロ経済学', 'Tuesday', 2, 5, 5);
INSERT INTO lecturelist (user_id, lesson, day, period, attend, count) VALUES (1, 'ミクロ経済学', 'Wednesday', 3, 5, 5);
INSERT INTO lecturelist (user_id, lesson, day, period, attend, count) VALUES (1, '経済政策', 'Thursday', 4, 5, 5);
INSERT INTO lecturelist (user_id, lesson, day, period, attend, count) VALUES (1, '国際経済学', 'Friday', 5, 5, 5);

-- 民法関連の授業
INSERT INTO lecturelist (user_id, lesson, day, period, attend, count) VALUES (2, '民法総則', 'Monday', 2, 5, 5);
INSERT INTO lecturelist (user_id, lesson, day, period, attend, count) VALUES (2, '物権法', 'Tuesday', 3, 5, 5);
INSERT INTO lecturelist (user_id, lesson, day, period, attend, count) VALUES (2, '債権法', 'Wednesday', 4, 5, 5);
INSERT INTO lecturelist (user_id, lesson, day, period, attend, count) VALUES (2, '家族法', 'Thursday', 5, 5, 5);
INSERT INTO lecturelist (user_id, lesson, day, period, attend, count) VALUES (2, '相続法', 'Friday', 1, 5, 5);

-- 英語関連の授業
INSERT INTO lecturelist (user_id, lesson, day, period, attend, count) VALUES (3, '英会話基礎', 'Monday', 3, 5, 5);
INSERT INTO lecturelist (user_id, lesson, day, period, attend, count) VALUES (3, '英文法', 'Tuesday', 4, 5, 5);
INSERT INTO lecturelist (user_id, lesson, day, period, attend, count) VALUES (3, 'ビジネス英語', 'Wednesday', 5, 5, 5);
INSERT INTO lecturelist (user_id, lesson, day, period, attend, count) VALUES (3, '英語文学', 'Thursday', 1, 5, 5);
INSERT INTO lecturelist (user_id, lesson, day, period, attend, count) VALUES (3, '英語発音', 'Friday', 2, 5, 5);

INSERT INTO survey (user_id, lesson, attend, understand, iswork, num)
VALUES 
(1, '経済学入門', 1, 7, 1, 1),
(1, '経済学入門', 1, 8, 1, 2),
(1, '経済学入門', 1, 1, 1, 3),
(1, '経済学入門', 0, 1, 0, 4);

SELECT * FROM work;