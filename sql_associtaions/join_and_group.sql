-- We can combine multiple operations like order by, group by aggreagate join ...
SELECT ARRAY_AGG(first_name), age, COUNT(*) as age_count
FROM students 
GROUP BY age
ORDER BY age_count;