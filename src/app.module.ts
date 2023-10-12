import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import mikroOrmConfig from './database/micro-orm.config';
import { DatabaseModule } from './database/database.module';
import { Task } from './tasks/dto/task.entity';

@Module({
  imports: [
    TasksModule,
    MikroOrmModule.forRoot(mikroOrmConfig),
    MikroOrmModule.forFeature({ entities: [Task] }),
  ],
})
export class AppModule {}
