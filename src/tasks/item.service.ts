import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { ItemStatus } from './dto/item-status.enum';
import { v4 as uuid } from 'uuid';
import { CreateItemDto } from './dto/item.dto';
import { Item } from './dto/item.entity';
import { EntityManager } from '@mikro-orm/mysql';

@Injectable()
export class ItemService {
  constructor(private em: EntityManager) {}

  async getAllItems(): Promise<Item> {
    return this.em.find(Item, {});
  }

  async createItem(createItemDto: CreateItemDto): Promise<Item> {
    const { name, price } = createItemDto;
    const item = new Item(name, price);
    await this.em.persistAndFlush(item);
    return item;

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
