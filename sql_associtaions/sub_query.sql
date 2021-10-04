-- in our queries we can also use sub-query
-- that means one query can get values from multiple queries
SELECT first_name, 
(SELECT title from projects WHERE projects.student_id = students.id ORDER BY created_at LIMIT 1 ) as next_query
FROM students
LIMIT 10;