-- Don't forget to add your create table SQL 
-- It is also helpful to include some test data

CREATE TABLE "cart" (
"id" SERIAL PRIMARY KEY,
"item" VARCHAR (80) NOT NULL,
"quantity" INTEGER
);

INSERT INTO "cart" ("item", "quantity") VALUES
('Apples', '5'),
('Oatmilk', '2'),
('Avocados', '4'),
('Cereal', '1'),
('Bread', '2')