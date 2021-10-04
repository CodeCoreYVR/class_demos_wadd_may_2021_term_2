-- we are trying to get list of classes
-- where class has more than 4 students
SELECT *
FROM (SELECT courses.title, COUNT(*) AS student_count
FROM courses INNER JOIN enrolments ON courses.id = enrolments.course_id
GROUP BY courses.id
ORDER BY student_count DESC
)
AS student_count
WHERE student_count >= 5;