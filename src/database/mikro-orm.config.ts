// mikro-orm.config.ts

import { Options } from '@mikro-orm/core';
import { SqlHighlighter } from '@mikro-orm/sql-highlighter';
import { Task } from '../tasks/dto/task.entity'; // Update with the correct path

const config: Options = {
  type: 'postgresql', // Use 'postgresql' for PostgreSQL
  dbName: 'task-management', // Your PostgreSQL database name
  user: 'postgres', // Your PostgreSQL username
  password: 'postgres', // Your PostgreSQL password
  host: 'localhost', // Your PostgreSQL host (e.g., 'localhost' or IP address)
  port: 5432, // Your PostgreSQL port (default is 5432)
  entities: [Task], // Add other entity classes here
  highlighter: new SqlHighlighter(),
  debug: true, // Set to true for development
};

export default config;
