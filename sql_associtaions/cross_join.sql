--  this is example of cross join
-- try to use cross join as little as possible
-- it can be very costly to run on large tables
SELECT first_name, phone_number, title  FROM students CROSS JOIN projects;