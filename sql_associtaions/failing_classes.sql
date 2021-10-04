-- this query will return list all al classes where average score is under 60
SELECT * FROM
(
    SELECT courses.id, courses.title, ROUND(AVG(
        enrolments.score
    ), 2) as score_average,
    COUNT(*) as students_count
    FROM courses
    INNER JOIN enrolments ON enrolments.course_id = courses.id
    GROUP BY courses.id
) as stats
WHERE score_average < 60
ORDER BY score_average DESC