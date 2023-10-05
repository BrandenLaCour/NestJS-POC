import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { TaskStatus } from './dto/task-status.enum';
import { v4 as uuid } from 'uuid';
import { CreateTaskDto } from './dto/task.dto';
import { Task } from './dto/task.entity';

@Injectable()
export class TasksService {
  //Inject task repositor via sequelize here from tasks.provider
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

  async updateTaskStatus(id: string, status: TaskStatus): Promise<Task> {
    //Supports Transaction
    const transaction = await this.taskRepository.sequelize.transaction();

    try {
      const task: Task = await this.taskRepository.findByPk(id, {
        transaction,
      });
      if (!task) {
        throw new NotFoundException(`Task with ID "${id}" not found`);
      }
      task.status = status;

      await task.save({ transaction });
      await transaction.commit();
      return task;

    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  }

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

