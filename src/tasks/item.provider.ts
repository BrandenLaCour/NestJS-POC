import { Task } from './dto/item.entity';

export const taskProviders = [
  {
    provide: 'TASK_REPOSITORY',
    useValue: Task,
  },
];
