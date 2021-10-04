-- select title of all projects that belongs to user with id 2
-- student_id is a foregin key to students table
-- this is one to many relation
-- one student has many projects
-- but one project belongs only to one user
SELECT title FROM projects WHERE student_id = 2 