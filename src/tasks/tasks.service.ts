import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { TaskStatus } from './dto/task-status.enum';
import { v4 as uuid } from 'uuid';
import { CreateTaskDto } from './dto/create-task.dto';
import { Task } from './dto/task.entity';

@Injectable()
export class TasksService {
  constructor(@Inject('TASK_REPOSITORY') private taskRepository: typeof Task) {}

  async getAllTasks(): Promise<Task[]> {
    return this.taskRepository.findAll();
  }

  async createTask(createTaskDto: CreateTaskDto): Promise<Task> {
    const { title, description } = createTaskDto;
    const task: Task = await this.taskRepository.create({
      id: uuid(),
      title,
      description,
      status: TaskStatus.OPEN,
    });
    return task;
  }

  async getTaskById(id: string): Promise<Task | null> {
    const task: Task = await this.taskRepository.findOne({ where: { id } });
    if (!task) {
      throw new NotFoundException(`Task with ID "${id}" not found`);
    }
    return task;
  }

  // deleteTaskById(id: string): void {
  //   const index: number = this.tasks.findIndex((task) => task.id === id);
  //   this.tasks.splice(index, 1);
  // }

  async updateTaskStatus(id: string, status: TaskStatus): Promise<Task> {
    const task: Task = await this.taskRepository.findByPk(id);
    if (!task) {
      throw new NotFoundException(`Task with ID "${id}" not found`);
    }
    task.status = status;

    await task.save();

    return task;
  }
}
