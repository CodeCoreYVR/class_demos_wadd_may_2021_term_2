-- Right join is same as left join but it will keep leftovers only right left table
SELECT first_name, last_name, title FROM students
RIGHT JOIN projects
ON students.id = projects.student_id;