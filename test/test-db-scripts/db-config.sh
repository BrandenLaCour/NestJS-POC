#!/bin/bash

DB_NAME=${DB_NAME:-item_prices_test}  # Default to 'testItemPrices' if not provided
DB_USER=${DB_USER:-postgres}        # Default to 'postgres' if not provided
DB_PASSWORD=${DB_PASSWORD:-postgres}
DB_HOST=${DB_HOST:-localhost}
DB_PORT=${DB_PORT:-5432}