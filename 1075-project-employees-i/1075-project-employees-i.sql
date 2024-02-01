# Write your MySQL query statement below


select p.project_id  , IFNULL(ROUND(SUM(experience_years)/COUNT(experience_years),2),0) average_years 
from Project p
left join Employee e on p.employee_id = e.employee_id 
group by p.project_id


# WITH CTE AS (
# SELECT p.product_id, IFNULL(ROUND(SUM(experience_years)/COUNT(experience_years ),2),0) average_price

# FROM Prices p
# LEFT JOIN UnitsSold us ON us.product_id=p.product_id AND purchase_date BETWEEN start_date AND end_date 
# GROUP BY p.product_id

# )
# SELECT product_id, average_price FROM CTE