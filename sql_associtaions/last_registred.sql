-- For each course we will get max value of enrolment 
-- And then we will order our result base on that value
SELECT courses.id, title, MAX(enrolments.created_at) as recent
FROM courses
INNER JOIN enrolments
ON courses.id = enrolments.course_id
GROUP BY courses.id
ORDER BY recent DESC;