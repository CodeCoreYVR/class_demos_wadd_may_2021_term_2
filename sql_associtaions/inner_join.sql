-- Inner join will only keep values that can be joined no leftovers from left or right table
SELECT first_name, title FROM students INNER JOIN projects ON students.id = projects.student_id