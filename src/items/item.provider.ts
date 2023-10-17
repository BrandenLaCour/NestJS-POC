import { Item } from './dto/item.entity';

export const taskProviders = [
  {
    provide: 'ITEM_REPOSITORY',
    useValue: Item,
  },
];
