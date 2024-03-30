connect with the database

** Create tables in sql **

CREATE TABLE <table_name> (
<column_name_1> constraints,
<column_name_2> constraints,
);

there are many type of constraints

** Inserts in table **
INSERT INTO <table_name> (<column_name_1>, <column_name_2>, <column_name_3>)
VALUES (value1, value2, value3);

** UPDATE in table **
UPDATE <table_name>
SET <column_name> = <VALUE>,
<column_name_2> = <VALUE>
WHERE <column_name_1> = <VALUE>;

** GET data from table **
SELECT all FROM <table_name> // return all => "\*" column and values
SELECT <column_name>, <c_name_2> FROM <table_name>

** DELETE data from table **
DELETE FROM <table_name> WHERE <column_name> = <value>;

** DROP TABLE **
DROP TABLE <table_name>

** FORIGN KEY **

** JOINS **
