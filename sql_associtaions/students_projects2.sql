-- We will select first_name, last_name from students table
-- and we will select title from projects table
-- we will join these two tables on foregin key student_id in projects tabel
-- and order it by project tile
-- and limit result to only 100 rows
SELECT first_name, last_name, title FROM students INNER JOIN projects ON students.id = projects.student_id ORDER BY title LIMIT 100;