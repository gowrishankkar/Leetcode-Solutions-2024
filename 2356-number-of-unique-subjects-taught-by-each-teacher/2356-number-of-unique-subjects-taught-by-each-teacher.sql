# Write your MySQL query statement below
# select teacher_id, count(distinct(subject_id)) as cnt
# from Teacher
# group by teacher_id
# order by cnt desc;



select teacher_id, count(distinct(subject_id)) as cnt
from Teacher
group by teacher_id
order by teacher_id;