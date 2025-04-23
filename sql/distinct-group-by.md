# Title: Distinct and Group By

## Distincts

Distinct is used to return only the unique values from a column. It is often used in conjunction with the `SELECT` statement to filter out duplicate records from the result set.

```sql
SELECT DISTINCT column_name
FROM table_name;
```

## Group By

Group By is used to group rows that have the same values in specified columns into summarised rows. It is often used with aggregate functions like `COUNT`, `SUM`, `AVG`, etc.

```sql
SELECT column_name, COUNT(*)
FROM table_name
GROUP BY column_name;
```

## Having Clause

The `HAVING` clause is used to filter records that work on summarized `GROUP BY` results. It is similar to the `WHERE` clause but is used for aggregate functions.

```sql
SELECT column_name, COUNT(*)
FROM table_name
GROUP BY column_name
HAVING COUNT(*) > 1;
```
