# Title: Keys and Indexes

AUTO_INCREMENT is SERIAL in Postgres
id(PRIMARY KEY) is a primary key
email(UNIQUE) is a logical key

```sql
CREATE TABLE table_name (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    age INT NOT NULL,
    email VARCHAR(100) UNIQUE,
);
```

Indexing methods
B-Tree

- B-Tree is the default index type in PostgreSQL.

A B-tree is a tree data structure that keeps data sorted and allows searches, sequential access, insertions, and deletions in logarithmic amortized time. The B-tree is optimized for systems that read and write large blocks of data. It is commonly used in databases and file systems.
