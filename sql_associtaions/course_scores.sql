
-- We are trying to get list of users and their socre for course with id 1
-- this is link table between students and courses
-- so student_id references our student
-- course_id is for courses table
-- the score is value which holds score for student in this course
SELECT student_id, score FROM enrolments WHERE course_id = 1;