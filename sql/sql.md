### SQL Notes
This is my personal notes to better understand and learn sql

- RDBMS is a relational database management system. For example(MySQL, PostgreSQL)
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

- <> is an alternative form of != on SQL
- Various types of constraint we can use to control what data is added:
    DEFAULT values
    
    NOT NULL constraints
    
    UNIQUE constraints
    
    CHECK constraints


#### INSERT Cheatsheet
<table>
  <tbody><tr>
    <th>Command</th>
    <th>Notes</th>
  </tr>
  <tr>
    <td>INSERT INTO table_name (column1_name, column2_name, ...) VALUES (data_for_column1, data_for_column2, ...);</td>
    <td>creates a new record in <em>table_name</em> with the specified columns and their associated values.</td>
  </tr>
  <tr>
    <td>ALTER TABLE table_name ADD UNIQUE (column_name);</td>
    <td>Adds a constraint to <code>table_name</code> that prevent non-unique values from being added to the table for <code>column_name</code>
</td>
  </tr>
  <tr>
    <td>ALTER TABLE table_name ADD CHECK (expression);</td>
    <td>Adds a constraint to <code>table_name</code> that prevents new rows from being added if they don't pass a *check* based on a specified expression.</td>
  </tr>
</tbody></table>

#### SELECT statement

```
SELECT [*, (column_name1, column_name2, ...)]
FROM table_name WHERE (condition);
```

`Order By`

```
SELECT [*, (column_name1, column_name2, ...)]
FROM table_name WHERE (condition)
ORDER BY column_name;
```
- When ordering by boolean values, false comes before true in ascending order 

`Operators`

- Three types of operators are available
    
    1. Comparison
    
    2. Logical
    
    3. String Matching

- This can not be done `WHERE column_name = NULL`, have to use `IS NULL` `IS NOT NULL` comparioson pradicates

`Logical Operators`
- There are three logicial operators
    1. And
    2. Or
    3. Not(less used)

`String Matching Operators`
- LIKE(Formats: `%String, String%, _C, C_`)

#### SELECT Cheatsheet
<table>
  <tbody><tr>
    <th>SELECT Clause</th>
    <th>Notes</th>
  </tr>
  <tr>
    <td>ORDER BY column_name [ASC, DESC]</td>
    <td>Orders the data selected by a column name within the associated table. Data can be ordered in descending or ascending order; if neither are specified, the query defaults to ascending order.</td>
  </tr>
  <tr>
    <td>WHERE column_name [&gt;,=, &lt;=, =, &lt;&gt;] value</td>
    <td>Filters a query result based on some comparison between a column's value and a specified literal value. There are several comparison operators available for use, from "greater than" to "not equal to".</td>
  </tr>
  <tr>
    <td>WHERE expression1 [AND, OR] expression2</td>
    <td>Filters a query result based whether one expression is true [and,or] another expression is true.
  </td>
</tr>
<tr>
    <td>WHERE string_column LIKE '%substring'</td>
    <td>Filters a query result based on whether a substring is contained within string_column's data and has any number of characters before that substring. Those characters are matched using the wildcard <code>%</code>. <code>%</code> doesn't have to come before a substring, you can also put it after one as well, matching the substring first and then any number of characters after that substring.</td>
  </tr>
</tbody></table>

- The process of splitting up data into multiple tables to remove duplication and improve data integrity is known as normalization.

<table>
<thead>
<tr>
<th>Relationship</th>
<th style="text-align: center">Example</th>
</tr>
</thead>
<tbody>
<tr>
<td>One-to-One</td>
<td style="text-align: center">
<strong>A</strong> User has <strong>ONE</strong> address</td>
</tr>
<tr>
<td>One-to-Many</td>
<td style="text-align: center">
<strong>A</strong> Book has <strong>MANY</strong> reviews</td>
</tr>
<tr>
<td>Many-to-Many</td>
<td style="text-align: center">
<strong>A</strong> user has <strong>MANY</strong> books and a book has <strong>MANY</strong> users</td>
</tr>
</tbody>
</table>

-PostgreSQL provides a number of expressions that can be used specifically with sub-queries, such as IN, NOT IN, ANY, SOME, and ALL. These all work slightly differently, but essentially they all compare values to the results of a subquery.

- Types of JOIN
<table>
<thead>
<tr>
<th>Join Type</th>
<th style="text-align: center">Notes</th>
</tr>
</thead>
<tbody>
<tr>
<td>INNER</td>
<td style="text-align: center">Combines rows from two tables whenever the join condition is met.</td>
</tr>
<tr>
<td>LEFT</td>
<td style="text-align: center">Same as an inner join, except rows from the first table are added to the join table, regardless of the evaluation of the join condition.</td>
</tr>
<tr>
<td>RIGHT</td>
<td style="text-align: center">Same as an inner join, except rows from the second table are added to the join table, regardless of the evaluation of the join condition.</td>
</tr>
<tr>
<td>FULL</td>
<td style="text-align: center">A combination of left join and right join.</td>
</tr>
<tr>
<td>CROSS</td>
<td style="text-align: center">Doesn't use a join condition. The join table is the result of matching every row from the first table with the second table, the cross product of all rows across both tables.</td>
</tr>
</tbody>
</table>