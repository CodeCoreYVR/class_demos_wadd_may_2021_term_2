-- this will return all columns for all my rows
-- select * from products;

-- if i want to select only few rows. I can specify only
-- the columns that I want to get

-- this will only get price, name and sale_price 
-- for all of my rows
-- select name, price, sale_price from products;

-- how we can filter data
-- this query will select all products where price is over 80
-- select name, price, sale_price from products where price > 80;

-- the conditions can be following
-- < for less then something 
-- <= for less or equal to something
-- > for more then something
-- >= less or equal to something
-- = for equal to something
-- != for not equal to something
-- is for equal
-- is not for non equal
-- between if value is between two values

-- to get all products where price is between 10 and 50
-- select price, name, sale_price from products where price between 10 and 50;

-- agregate function
-- avg
-- count
-- min 
-- max

-- to get minmal price of some product
-- select min(price) from products;

-- to get maximal price of same product
-- select max(price) from products;

-- to get average price 
-- select avg(price) from products;

-- to count how many products we have 
-- select count(*) from products;

-- how to use alias
-- if we dont like name of our column we can use alis to change the name
-- in order to use alias we have to use the keyword as 
-- followed by the alias name 
-- select price as product_price from products; 

-- using like and ilike
-- ilike is same as like but case insenstive
-- this will look for prducts whare name is equal to  name
-- this is not as usefull without wild card character %
-- select name from products where name like 'name';

-- if we are looking for products that starts with a
-- name has to start with a and can follow with more characters on none as well
-- select name from products where name ilike 'a%';

-- if we are looking for products endig with e
-- so we are looking for name that will end with e
-- select name from products where name ilike '%e';

-- in will filter all results that are in the in list
-- we can also change it to not in
-- select id, name, price, sale_price from products where id in (1,2,3,4,5,6);

-- this will return all products wich they are not in the list of ids
-- so in is very similiar to combinig multiple or statemtns
-- select id, name, price, sale_price from products where id not in (1,2,3,4,5,6);


-- how to connnect more conditions
-- we can use 
-- OR
-- AND
-- if we use or one ore both conditions must be true
-- if we use and both conditions must be true

-- so in this example
-- we are looking only for records with id less then 300
-- and name must contain chair
-- select id, name, price, sale_price 
-- from products where 
-- id < 300
-- AND
-- name ilike '%chair%';

-- This will return lot of data
-- becuse on of the conditions must be true
-- so we will get all products with id less then 300
-- or products that cointain chair
-- select id, name, price, sale_price 
-- from products where 
-- id < 300
-- OR
-- name ilike '%chair%';

-- how to order data
-- we can order in ASC or DESC order
-- default order is ASC
-- if we want order our data we have to use the order by keyword
-- following with the order so ASC/DESC
-- select id, name, price, sale_price 
-- from products where
-- id < 10
-- order by price;

-- select id, name, price, sale_price 
-- from products where
-- id < 10
-- order by price DESC;

-- you can also sort by multiple columns
-- so if first sort will have the same value if will sort them by 
-- second sort setting

-- this will sort by name in ASC order and the by price in DESC order
-- select id, name, price, sale_price
-- from products where
-- price between 10 and 100
-- order by name, price DESC;

--limit 
-- we can limit number of results
-- this will get all products where price is between 10 and 100
-- then we will sort them by price
-- and limit them to 10
-- so this will return 10 most expensive products in price between 10 and 100
-- select id, name, price, sale_price 
-- from products where 
-- price between 10 and 100
-- order by price DESC
-- limit 10;

-- in comination with limit we often use offest as well
-- to get for example third set of ten item of products
-- select id, name, price, sale_price 
-- from products
-- order by id
-- limit 10
-- offset 20;





