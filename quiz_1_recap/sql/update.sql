-- to update our record in db
-- we have to use the update keyword
-- followed by name of table
-- followed by set statment
-- followed by condition which rows we want to edit
update books
set 
    title = 'New title'
where 
    id = 1