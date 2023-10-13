import { Migration } from '@mikro-orm/migrations';

export class Migration20231013171036 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "task" ("id" varchar(255) not null, "title" varchar(255) not null, "description" varchar(255) not null, "status" varchar(255) not null default \'OPEN\', constraint "task_pkey" primary key ("id"));');

    this.addSql('drop table if exists "SequelizeMeta" cascade;');

    this.addSql('drop table if exists "Tasks" cascade;');
  }

  async down(): Promise<void> {
    this.addSql('create table "SequelizeMeta" ("name" varchar not null default null, constraint "SequelizeMeta_pkey" primary key ("name"));');

    this.addSql('create table "Tasks" ("id" varchar not null default null, "title" varchar null default null, "description" varchar null default null, "status" varchar null default null, "createdAt" timestamptz not null default null, "updatedAt" timestamptz not null default null, "isImportant" bool null default false, constraint "Tasks_pkey" primary key ("id"));');

    this.addSql('drop table if exists "task" cascade;');
  }

}
