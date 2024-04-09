-- Don't forget to add your create table SQL 
-- It is also helpful to include some test data

CREATE TABLE "cart" (
"id" SERIAL PRIMARY KEY,
"item" VARCHAR (80) NOT NULL,
"quantity" INTEGER,
"unit" VARCHAR (20)
);

INSERT INTO "cart" ("item", "quantity", "unit") VALUES
('Apples', '5', 'lbs'),
('Oatmilk', '2', 'gal'),
('Avocados', '4', 'lbs'),
('Cereal', '1', 'box'),
('Bread', '2', 'loaf')