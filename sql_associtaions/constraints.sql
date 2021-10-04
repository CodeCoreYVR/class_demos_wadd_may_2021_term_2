-- DROP table cars;

-- When we are creating new table we can add contraintes to our columns
-- CREATE TABLE cars (
--     id SERIAL,
--     make VARCHAR(50) CONSTRAINT must_exist NOT NULL,
--     model VARCHAR(100) CONSTRAINT must_exist NOT NULL
-- )

-- INSERT INTO cars (make, model) values ('Ford', 'Focus');

-- this will add new contraint to students table
-- all emails now has to be unique
-- ALTER TABLE students 
-- ADD CONSTRAINT unique_email
-- UNIQUE (email)

-- INSERT INTO students () values ()

-- This will add new contraint to our cars table
-- all car models has to be unique now
-- ALTER TABLE cars 
-- ADD CONSTRAINT unique_model
-- UNIQUE (model)

-- This will give us an eror if we have car with model Focus already in our database
INSERT INTO cars (make, model) values ('Ford', 'Focus');
