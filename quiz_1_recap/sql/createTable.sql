-- if we want to crate new table
-- we have to use the create table keywords
-- followed by the name of our table
-- and definition of our columns
create table books (
    id SERIAL,
    author VARCHAR(255),
    text TEXT,
    createAt DATE,
    updatedAt DATE
)