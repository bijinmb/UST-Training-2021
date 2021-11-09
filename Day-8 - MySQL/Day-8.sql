/*
	Create a department table with id,deptname, location columns. 
	Create a myEmployee table with empid, empname,jobrole,city, dept_id columns . dept_id column should reference deptid column of department table.
	Insert data into department table and myemployee tables.
	Select data from both tables independetly.
	Create a join to fetch empname,jobrole,deptname,location from two tables.
*/
 
create table department
(
	dept_id int auto_increment primary key,
	dept_name varchar(25),
	location varchar(25)
);
drop table department;
create table myemployee
(
	emp_id int auto_increment primary key,
    emp_name varchar(25),
    job_role varchar(25),
    city varchar(25),
    dept_id int,
    foreign key (dept_id) references department(dept_id)
);

insert into department (dept_name, location) values ("REFM", "Mumbai");

select * from department;

insert into myemployee (emp_name, job_role, city, dept_id) values ("Alex", "Store", "Chennai", 18);

select * from myemployee;

select e.emp_name, d.dept_name, e.job_role, d.location, e.city from department as d join myemployee as e on d.dept_id=e.dept_id;

