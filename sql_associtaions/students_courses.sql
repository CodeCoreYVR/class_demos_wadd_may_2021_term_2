-- we stated by selecting data from students table
-- then we joined our data to table enrolments
-- becouse there is many to many relation between studetns and courses
-- and enrolments is our link table
-- and then we joined this result to table courses
-- and now we can use data from columns in table students, enrolments, and courses
-- if the name of column is unique across the tables
-- we can just ust the name of the column
-- otherwise we should use following syntax
-- nameOfTheTable.column 
-- for example we should do courses.title
-- we are limiting output to 100 rows

SELECT first_name, last_name, score, courses.title, courses.id 
FROM students 
INNER JOIN enrolments ON students.id = enrolments.student_id
INNER JOIN courses ON enrolments.course_id = courses.id
WHERE courses.title LIKE '%hybrid matrix%'
LIMIT 10;