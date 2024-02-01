# Write your MySQL query statement below


select em.unique_id , e.name
from Employees as e
left join EmployeeUNI as em
on e.id = em.id;

# select EmployeeUNI.unique_id, employees.name
# from Employees left join EmployeeUNI 
# on Employees.id=EmployeeUNI.id;