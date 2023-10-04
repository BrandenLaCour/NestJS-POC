import { TaskStatus } from './task-status.enum';
import { IsNotEmpty, IsString, IsEnum, IsBoolean } from 'class-validator';

export class TaskDto {
  @IsString()
  id: string;
  @IsString()
  title: string;
  @IsString()
  description: string;
  @IsBoolean()
  isImportant: boolean;
  @IsNotEmpty()
  status: TaskStatus;
}

export class CreateTaskDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  description: string;
}
