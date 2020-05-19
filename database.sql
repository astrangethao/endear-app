CREATE TABLE "user_account"
(
    "id" SERIAL PRIMARY KEY,
    "username" varchar(128),
    "password" varchar(1000),
    "first_name" varchar(64),
    "last_name" varchar(64),
    "gender_id" int,
    "details" text,
    "phone_number" bigint,
    "dob" date
);

CREATE TABLE "interested_in_gender"
(
    "id" SERIAL PRIMARY KEY,
    "user_account_id" int,
    "gender_id" int
);

CREATE TABLE "gender"
(
    "id" SERIAL PRIMARY KEY,
    "name" varchar(32)
);

CREATE TABLE "user_photo"
(
    "id" SERIAL PRIMARY KEY,
    "user_account_id" int,
    "link" text
);

CREATE TABLE "audio_clip"
(
    "id" SERIAL PRIMARY KEY,
    "audio" text,
    "user_account_id" int
);

CREATE TABLE "matches"
(
    "id" SERIAL PRIMARY KEY,
    "user_1_id" int,
    "user_2_id" int,
    "match_user_1" boolean,
    "match_user_2" boolean
);

CREATE TABLE "location"
(
    "id" SERIAL PRIMARY KEY,
    "city" varchar(128),
    "zipcode" int,
    "user_account_id" int
);