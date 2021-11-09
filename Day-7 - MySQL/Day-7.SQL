create database UST;
create table employee(id int primary key auto_increment, name varchar(25) not null, age int); 
insert into employee (name, age) values ('Bijin', 30);
truncate table employee;
drop table employee;


create table employee (id int primary key auto_increment, emp_name varchar(25) not null, designation varchar(25), salary int not null);
alter table employee add city varchar(25);

insert into employee (emp_name, designation, salary, city) values ("Anjali", "Software Engineer", 30, "Banglore");

select * from employee;
select * from employee where city = "Pune";
select * from employee where designation = "Software Engineer";
select * from employee where salary > 30;
select * from employee where salary between 30 and 60;
select salary from employee  order by salary asc;
select designation from employee order by designation asc;


ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'mysqladmin';

Flush privileges;

desc employee;

select * from employee;