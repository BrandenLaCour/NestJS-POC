## Description

Testing setup with Mikro ORM and Nest

## Installation

brew install postgresql

Setup and teardown Info:

psql -U postgres -c 'create database testItemPrices;' (create db)
psql -U postgres -c 'drop database testItemPrices;' (teardown db)

Install jest:

yarn add --dev jest @nestjs/jest

Make sure to update package .json jest config to look for test files properly depending on test file naming convention:
"testRegex": ".\*\\.e2e-spec\\.ts$",

Also make sure to specify where to find the tests:
"rootDir": "test",

Give executable permissions to shell scripts
chmod +x init-db.sh
chmod +x teardown-db.sh

run ./init-db.sh or ./teardown-db.sh to create/seed or drop test db.
