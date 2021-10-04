-- Outer join is same as left or right join but it will keep leftovers from left and right table
SELECT students.id, first_name, last_name, student_id, title FROM students 
FULL OUTER JOIN projects
on students.id = projects.student_id
WHERE student_id IS NULL
ORDER BY students.id;