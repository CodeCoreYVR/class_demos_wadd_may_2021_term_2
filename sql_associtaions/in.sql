-- IN is same as if we would use multiple or statements after each other
-- So following two queries are doing the same thing
SELECT id, first_name, last_name 
FROM students 
WHERE id IN (1,2,3,4,5)
LIMIT 100;

SELECT id, first_name, last_name 
FROM students 
WHERE id = 1 OR
 id = 2 OR
 id = 3 OR
 id = 4 OR
 id = 5
LIMIT 100;
