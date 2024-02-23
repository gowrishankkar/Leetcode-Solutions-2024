# Write your MySQL query statement below

# select customer_id from Customer
# group by customer_id
# having count(distinct product_key ) = (select count(product_key ) from Product);

SELECT customer_id
FROM Customer 
GROUP BY customer_id
HAVING count(DISTINCT(product_key)) = (SELECT count(*) FROM product);