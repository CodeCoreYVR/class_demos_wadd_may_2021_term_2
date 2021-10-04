-- Query to get average score for all courses
SELECT title,AVG(enrolments.score) as average_score
FROM courses
INNER JOIN enrolments
ON courses.id = enrolments.course_id
GROUP BY title
ORDER BY average_score DESC;