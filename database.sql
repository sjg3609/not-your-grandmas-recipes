
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "recipes" (
	"id" SERIAL PRIMARY KEY,
	"user_id" INT references "user",
	"category_id" INT references "categories",
	"recipe_name" varchar (200) NOT NULL,
	"ingredients" varchar (8000) NOT NULL,
	"instructions" varchar (8000) NOT NULL
);

CREATE TABLE "notes" (
	"id" SERIAL PRIMARY KEY,
	"user_id" INT references "user",
	"recipe_id" INT references "recipes" ON DELETE CASCADE,
	"notes" VARCHAR (10000)
);

CREATE TABLE "categories" (
	"id" SERIAL PRIMARY KEY,
	"user_id" INT REFERENCES "user",
	"description" varchar (1000) NOT NULL
);

CREATE TABLE "share_recipe" (
	"user_id" INT REFERENCES "user",
	"recipe_id" INT REFERENCES "recipes" ON DELETE CASCADE,
	"access_level" integer NOT NULL
);

INSERT INTO "categories" ("description")
VALUES ('Appetizers'), ('Breakfast'), ('Entrees'), ('Desserts'), ('Casseroles'), ('Meats');