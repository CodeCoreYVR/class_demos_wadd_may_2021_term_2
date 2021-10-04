-- this will return list of students
-- and their projects
-- this will also include list of users
-- without any project

-- SELECT first_name, last_name, title 
-- FROM students
-- LEFT JOIN projects
-- ON students.id = projects.student_id;

-- students wihout project
SELECT first_name, last_name, title 
FROM students
LEFT JOIN projects
ON students.id = projects.student_id
WHERE title IS NULL;