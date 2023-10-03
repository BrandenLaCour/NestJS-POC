import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';
import { taskProviders } from './tasks.provider';

@Module({
  controllers: [TasksController],
  providers: [TasksService, ...taskProviders],
})
export class TasksModule {}
