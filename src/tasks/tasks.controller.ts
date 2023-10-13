import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Patch,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TaskStatus } from './dto/task-status.enum';
import { TaskDto, CreateTaskDto } from './dto/task.dto';

@Controller('tasks')
export class TasksController {
  //inject the task service via constructor here
  constructor(private tasksService: TasksService) {}

  @Get('/')
  getAllTasks(): Promise<TaskDto[]> {
    return this.tasksService.getAllTasks();
  }

  // @Get('/:Id')
  // getTaskById(@Param('Id') Id: string): Promise<TaskDto> {
  //   return this.tasksService.getTaskById(Id);
  // }

  @Post('/')
  createTask(@Body() createTaskDto: CreateTaskDto): Promise<TaskDto> {
    return this.tasksService.createTask(createTaskDto);
  }

  // @Patch('/:id/status')
  // UpdateTaskStatus(
  //   @Param('id') id: string,
  //   @Body('status') status: TaskStatus,
  // ): Promise<TaskDto> {
  //   return this.tasksService.updateTaskStatus(id, status);
  // }
}
