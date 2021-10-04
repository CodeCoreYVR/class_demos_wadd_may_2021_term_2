-- Left join is same as right join but it will keep left overs only from left table
SELECT first_name, last_name, title FROM students
LEFT JOIN projects
ON students.id = projects.student_id;