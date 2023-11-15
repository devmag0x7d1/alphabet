CREATE TABLE IF NOT EXISTS profiles (
  id       SERIAL       PRIMARY KEY,
  nickname VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  role     VARCHAR(255) NOT NULL DEFAULT 'USER'
);

-- CREATE TABLE IF NOT EXISTS books (
--   id          SERIAL         PRIMARY KEY,
--   title       VARCHAR(255)   NOT NULL,
--   description VARCHAR(255),
--   authors     VARCHAR(255)[] NOT NULL,
--   genres      VARCHAR(255)[] NOT NULL,
--   file        VARCHAR(255),
--   creator     INTEGER        NOT NULL,
--   FOREIGN KEY (creator) REFERENCES profiles (id)
-- );
