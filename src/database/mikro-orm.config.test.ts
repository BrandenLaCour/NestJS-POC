// mikro-orm.config.ts

import { Options } from '@mikro-orm/core';
import { SqlHighlighter } from '@mikro-orm/sql-highlighter';
import { Item } from '../items/dto/item.entity';

const config: Options = {
  type: 'postgresql',
  dbName: 'item_prices_test', //psql didnt like my dashes
  user: 'postgres',
  password: 'postgres',
  host: 'localhost',
  port: 5432,
  entities: [Item],
  highlighter: new SqlHighlighter(),
  debug: true,
};

export default config;
