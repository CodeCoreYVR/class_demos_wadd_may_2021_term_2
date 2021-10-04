-- we are selecting first_name, last_name from students
-- score from enrolments
-- title from coures table
-- we will join enrolments table on student_id
-- and we will join courses table on course_id
-- but we only want to get resoults from rows
-- where first name of sutdent starts
-- wit 'Re'
SELECT first_name, last_name, score, title
FROM students
INNER JOIN enrolments
ON students.id = enrolments.student_id
INNER JOIN courses
ON courses.id = enrolments.course_id
WHERE first_name LIKE 'Re%';
