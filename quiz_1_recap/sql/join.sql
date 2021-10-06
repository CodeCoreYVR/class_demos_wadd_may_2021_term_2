-- cross join
-- cross join will join every row from table a to every row from table b
-- select * from products cross join line_items;

-- inner join
-- will join each row from table a with row in table b
-- but only on some columns 
-- select products.name, line_items.price, line_items.quantity 
-- from products 
-- inner join line_items 
-- on products.id = line_items.product_id;

-- how to get average price for each product

-- select products.name, avg(line_items.price) as avg_price
-- from products 
-- inner join line_items 
-- on products.id = line_items.product_id
-- group by products.name
-- order by avg_price DESC
-- limit 10;

--left and right join
-- it's very simillar to iner join but this join will also 
-- keep leftover from left or right table based on what type
-- of join we will use
-- select product_id, name, line_items.price, line_items.created_at 
-- from line_items
-- right join products 
-- on product_id = products.id
-- where name is null
-- limit 100;

-- full outer join
-- this is combination of left and right join
-- so it will keep leftovers from both tables

select product_id, name, line_items.price, line_items.created_at 
from line_items
full outer join products 
on product_id = products.id
where name is null
or  
quantity is null
limit 100;