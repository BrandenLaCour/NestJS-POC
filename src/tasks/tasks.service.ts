import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { TaskStatus } from './dto/task-status.enum';
import { v4 as uuid } from 'uuid';
import { CreateTaskDto } from './dto/task.dto';
import { Task } from './dto/task.entity';
import { EntityManager } from '@mikro-orm/mysql';

@Injectable()
export class TasksService {
  constructor(private em: EntityManager) {}

  async getAllTasks(): Promise<Task[]> {
    return this.em.find(Task, {});
  }

  async createTask(createTaskDto: CreateTaskDto): Promise<Task> {
    const { title, description } = createTaskDto;
    const task = new Task(title, description);
    await this.em.persistAndFlush(task);
    return task;
  }

  // async getTaskById(id: string): Promise<Task | null> {
  //   const task: Task = await this.taskRepository.findOne({ where: { id } });
  //   if (!task) {
  //     throw new NotFoundException(`Task with ID "${id}" not found`);
  //   }
  //   return task;
  // }

  // async updateTaskStatus(id: string, status: TaskStatus): Promise<Task> {
  //   //Supports Transaction
  //   const transaction = await this.taskRepository.sequelize.transaction();

  //   try {
  //     const task: Task = await this.taskRepository.findByPk(id, {
  //       transaction,
  //     });
  //     if (!task) {
  //       throw new NotFoundException(`Task with ID "${id}" not found`);
  //     }
  //     task.status = status;

  //     await task.save({ transaction });
  //     await transaction.commit();
  //     return task;
  //   } catch (error) {
  //     await transaction.rollback();
  //     throw error;
  //   }
  // }

  // async updateTaskStatus(id: string, status: TaskStatus): Promise<Task> {
  //   //Supports active record
  //   const task: Task = await this.taskRepository.findByPk(id);
  //   if (!task) {
  //     throw new NotFoundException(`Task with ID "${id}" not found`);
  //   }
  //   task.status = status;

  //   await task.save();

  //   return task;
  // }
}
