# Title: Dates

TIMESTAMP - 'YYYY-MM-DD HH:MM:SS'. A timestamp is a data type that represents a specific point in time, including the date and time. It is often used to record when an event occurred or when a record was created or modified.

TIMESTAMPZ - 'YYYY-MM-DD HH:MM:SSZ'. A timestamp with time zone.

PostgreSQL function `NOW()` returns the current date and time in the format 'YYYY-MM-DD HH:MM:SS'. It is often used to get the current timestamp for logging or auditing purposes.

Good practice is to use UTC for timestamps to avoid issues with time zones. This is especially important for applications that may be used in multiple time zones or that need to maintain consistent timestamps across different systems.

## Date Casting

```sql
SELECT CAST('2025-01-01' AS DATE);
SELECT CAST('2025-01-01 12:00:00' AS TIMESTAMP);
SELECT CAST(NOW() AS DATE);
SELECT CAST(NOW() AS TIME);
SELECT NOW()::DATE;
```

## Date Interval

An `INTERVAL` is PostgreSQL feature to peform date arithmetic. It allows you to add or subtract a specific amount of time from a date or timestamp. The syntax for using an interval is as follows:

```sql
SELECT NOW() + INTERVAL '1 day';
SELECT NOW() - INTERVAL '2 days';
SELECT NOW() - INTERVAL '1 hour';
SELECT NOW() + INTERVAL '1 month';
```

## date_trunc

```sql
SELECT date_trunc('day', NOW());
SELECT date_trunc('month', NOW());
SELECT date_trunc('year', NOW());
SELECT date_trunc('hour', NOW());
SELECT date_trunc('minute', NOW());
SELECT date_trunc('second', NOW());
```
