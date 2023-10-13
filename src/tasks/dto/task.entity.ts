import { Entity, PrimaryKey, Property } from '@mikro-orm/core';
import { v4 as uuidv4 } from 'uuid';
import { TaskStatus } from './task-status.enum';

@Entity()
export class Task {
  @PrimaryKey()
  id: string = this.generateUuid();

  @Property()
  title!: string;

  @Property()
  description!: string;

  @Property()
  status: TaskStatus = TaskStatus.OPEN;

  constructor(title: string, description: string) {
    this.title = title;
    this.description = description;
  }

  private generateUuid(): string {
    return uuidv4();
  }
}
