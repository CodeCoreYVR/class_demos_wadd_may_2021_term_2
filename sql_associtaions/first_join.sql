-- we are selcting first_name from students table
-- and title from our projets table
-- and we are using inner join
-- on students.id = projects.student_id
-- projects.student_id is foregin key to primary key in our students table
-- after we join these two tables we can also use order by
-- and we can use referece to some column
SELECT students.first_name as name, projects.title as poject_tile FROM students INNER JOIN projects ON students.id = projects.student_id ORDER BY students.first_name limit 100;