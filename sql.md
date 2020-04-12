### SQL Notes
This is my personal notes to better understand and learn sql

- RDBMS is a relational database management system.
- On PostgreSQL command line client(psql) you can run meta command using the `\command` format
    for example `\q` quits the interactive shell;
- SQL statements must end with a semi colon;

- CREATE DATABASE DBNAME (To create database)
- DROP DATABASE DBNAME (To drop database)
- SQL commands are mainly categorized into four categories as:

    DDL – Data Definition Language
    DQl – Data Query Language
    DML – Data Manipulation Language
    DCL – Data Control Language
- On PostgreSQL for setting decimal limit we have to use `order_total decimal(4,2)` this sets the maximum value for order_total to 99.99.

- ALTER table_name ALTER column_name (ACTION)[TYPE varchar(50)]
- ALTER TABLE table_name ALTER COLUMN column_name SET constraint clause
#### ALTER TABLE Cheatsheet
<table class="table small-font">

<tbody>

<tr>

<th>Action</th>

<th>Command</th>

<th>Notes</th>

</tr>

<tr>

<td>Add a column to a table</td>

<td>ALTER TABLE table_name ADD COLUMN column_name data_type CONSTRAINTS;</td>

<td>Alters a table by adding a column with a specified data type and optional constraints.</td>

</tr>

<tr>

<td>Alter a column's data type</td>

<td>ALTER TABLE table_name ALTER COLUMN column_name TYPE data_type;</td>

<td>Alters the table by changing the datatype of column.</td>

</tr>

<tr>

<td>Rename a table</td>

<td>ALTER TABLE table_name RENAME TO new_table_name;</td>

<td>Changes the name of a table in the currently connected to database.</td>

</tr>

<tr>

<td>Rename a column within a table</td>

<td>ALTER TABLE table_name RENAME COLUMN column_name TO new_column_name;</td>

<td>Renames a column of the specified table.</td>

</tr>

<tr>

<td>Add column constraint</td>

<td>ALTER TABLE table_name ALTER COLUMN column_name SET constraint clause;</td>

<td>Adds a specified constraint to the specified table column.</td>

</tr>

<tr>

<td>Add table constraint</td>

<td>ALTER TABLE table_name ADD CONSTRAINT constraint_name constraint clause;</td>

<td>Adds a specified constraint to the specified table.</td>

</tr>

<tr>

<td>Remove a column constraint</td>

<td>ALTER TABLE table_name ALTER COLUMN column_name DROP CONSTRAINT;</td>

<td>Removes a constraint from the specified table.</td>

</tr>

<tr>

<td>Remove a table constraint</td>

<td>ALTER TABLE table_name DROP CONSTRAINT constraint_name;</td>

<td>Removes a constraint from the specified table.</td>

</tr>

<tr>

<td>Remove a column from a table</td>

<td>ALTER TABLE table_name DROP COLUMN column_name</td>

<td>Removes a column from the specified table.</td>

</tr>

<tr>

<td>Delete a table from the database</td>

<td>DROP TABLE table_name;</td>

<td>Permanently deletes the specified table from its database.</td>

</tr>

</tbody>

</table>