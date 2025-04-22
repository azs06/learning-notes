# Title: Many to Many Relationship in SQL

 A many to many relationship is a type of relationship between two tables where one record in the first table can be associated with multiple records in the second table and vice versa. This is generally implemented using a junction table.

## Example

```sql
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);
CREATE TABLE courses (
    id SERIAL PRIMARY KEY,
    course_name VARCHAR(100) NOT NULL
);
CREATE TABLE member (
    user_id INT NOT NULL,
    course_id INT NOT NULL,
    PRIMARY KEY (user_id, course_id),
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (course_id) REFERENCES courses(id)
);
```

## Explanation

In this example, the `users` table contains information about users, the `courses` table contains information about courses, and the `member` table is a junction table that establishes a many-to-many relationship between users and courses. Each `user` can enroll in multiple courses, and each course can have multiple `user` enrolled.

## Querying Many to Many Relationships

```sql
SELECT users.name, member.`role`, course.title
FROM users 
JOIN member
JOIN course
ON
member.course_id = course.course_id
AND
users.user_id = member.user_id
ORDER BY
course.title;
```
