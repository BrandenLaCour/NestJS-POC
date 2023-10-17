#!/bin/bash
source db-config.sh

# Create the database with provided or default values
psql -U "$DB_USER" -h "$DB_HOST" -p "$DB_PORT" -c "CREATE DATABASE $DB_NAME;"

# Seed some sample data into the "item" table
psql -U $DB_USER -d $DB_NAME << EOF
CREATE TABLE item (
  id VARCHAR(255) PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  price NUMERIC(10, 2) NOT NULL,
  status VARCHAR(255) NOT NULL
);
INSERT INTO item (id, name, price, status)
VALUES
  ('1', 'Item 1', 10.99, 'READY'),
  ('2', 'Item 2', 19.99, 'ON_RENT'),
  ('3', 'Item 3', 5.99, 'READY');
EOF

echo "Test DB '$DB_NAME' Created"
