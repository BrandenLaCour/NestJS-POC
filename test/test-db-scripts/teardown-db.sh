#!/bin/bash

source db-config.sh

psql -U $DB_USER -c "drop database $DB_NAME;"
