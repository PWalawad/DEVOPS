CREATE TABLE product(id int primary key auto_increment,title varchar(50),desciption varchar(50),price float);
CREATE TABLE category(id int primary key auto_increment,title varchar(50),desciption varchar(50));
CREATE TABLE user(id int primary key auto_increment,name varchar(50),email varchar(50),phone varchar(15));

insert into product(title,desciption,price) values("iphone","apple",12345.5);
insert into product(title,desciption,price) values("iphone7","apple",12346.5);
insert into product(title,desciption,price) values("iphone8","apple",12347.5);

insert into category(title,desciption) values("phone","apple");
insert into category(title,desciption) values("phone","samsung");

insert into user(name,email,phone) values("vpkat","vpkat@123","750757575");
insert into user(name,email,phone) values("vivek","vpkat@123","750757576");





