import { Entity, PrimaryKey, Property } from '@mikro-orm/core';
import { v4 as uuidv4 } from 'uuid';
import { ItemStatus } from './item-status.enum';

@Entity()
export class Item {
  @PrimaryKey()
  id: string = this.generateUuid();

  @Property()
  name!: string;

  @Property()
  price!: number;

  @Property()
  status: ItemStatus = ItemStatus.READY;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }

  private generateUuid(): string {
    return uuidv4();
  }
}
