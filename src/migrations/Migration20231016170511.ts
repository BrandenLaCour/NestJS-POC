import { Migration } from '@mikro-orm/migrations';

export class Migration20231016170511 extends Migration {
  async up(): Promise<void> {
    this.addSql(
      'create table "items" ("id" varchar(255) not null, "name" varchar(255) not null, "price" int not null, "status" varchar(255) not null default \'READY\', constraint "item_pkey" primary key ("id"));',
    );

    this.addSql('drop table if exists "item" cascade;');
  }

  async down(): Promise<void> {
    this.addSql('drop table if exists "items" cascade;');
  }
}
