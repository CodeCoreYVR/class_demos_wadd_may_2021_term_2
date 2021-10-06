-- if we want to remove column from our table 
-- we can use the alter table keyword as well
-- followed by name of table
-- and if we want to drop column we can use DROP keyword
-- followed by the name of the column
alter table books
    DROP createAt,
    DROP updatedAt