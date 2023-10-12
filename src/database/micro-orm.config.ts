// mikro-orm.config.ts

import { Options } from '@mikro-orm/core';
import { SqlHighlighter } from '@mikro-orm/sql-highlighter';
import { Task } from '../tasks/dto/task.entity'; // Update with the correct path

const config: Options = {
  type: 'sqlite',
  dbName: 'task-management.sqlite', // You can change the database name
  entities: [Task], // Add other entity classes here
  highlighter: new SqlHighlighter(),
  debug: true, // Set to true for development
};

export default config;
