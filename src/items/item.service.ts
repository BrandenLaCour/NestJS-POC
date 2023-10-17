import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { ItemStatus } from './dto/item-status.enum';
import { v4 as uuid } from 'uuid';
import { CreateItemDto } from './dto/item.dto';
import { Item } from './dto/item.entity';
import { EntityManager } from '@mikro-orm/mysql';

@Injectable()
export class ItemService {
  constructor(private em: EntityManager) {}

  async getAllItems(): Promise<Item[]> {
    const em = this.em.fork();
    return em.find(Item, {});
  }

  async createItem(createItemDto: CreateItemDto): Promise<Item> {
    const { name, price } = createItemDto;
    const em = this.em.fork();
    const item: Item = new Item(name, price);
    await em.persistAndFlush(item);
    return item;
  }
  async getItemById(id: string): Promise<Item | null> {
    const em = this.em.fork();
    const item: Item = await em.findOne(Item, { id });
    if (!item) {
      throw new NotFoundException(`Item with ID "${id}" not found`);
    }
    return item;
  }

  async updateItemStatus(id: string, status: ItemStatus): Promise<Item> {
    const em = this.em.fork();
    const item: Item = await em.findOne(Item, { id });
    if (!item) {
      throw new NotFoundException(`item with ID "${id}" not found`);
    }
    item.status = status;

    await this.em.flush();

    return item;
  }
}
