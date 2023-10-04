import { Table, Column, Model, Unique, PrimaryKey } from 'sequelize-typescript';
import { TaskStatus } from './task-status.enum';

@Table
export class Task extends Model {
  @PrimaryKey
  @Column
  id: string;

  @Column
  title: string;

  @Column
  description: string;

  @Column
  isImportant: boolean;

  @Column
  status: TaskStatus;
}
