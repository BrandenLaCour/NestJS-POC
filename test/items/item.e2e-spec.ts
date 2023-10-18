// item.e2e-spec.ts

import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Test, TestingModule } from '@nestjs/testing';
import { Item } from '../../src/items/dto/item.entity';
import { CreateItemDto } from 'src/items/dto/item.dto';
import { ItemService } from '../../src/items/item.service';
import config from '../../src/database/mikro-orm.config.test';
import { execSync } from 'child_process';

describe('ItemService', () => {
  let module: TestingModule;
  let itemService: ItemService;

  beforeAll(async () => {
    // Possibly call script to seed/sync db here

    module = await Test.createTestingModule({
      imports: [
        MikroOrmModule.forRootAsync({
          useFactory: () => ({
            ...config,
            entities: [Item],
          }),
        }),
        MikroOrmModule.forFeature([Item]),
      ],
      providers: [ItemService],
    }).compile();

    itemService = module.get<ItemService>(ItemService);
  });

  it('should get all items', async () => {
    const retrievedItems = await itemService.getAllItems();
    expect(retrievedItems.length).toBeGreaterThan(0);
  });

  it('should create and retrieve an item', async () => {
    // Arrange: Create a new item
    const newItemData: CreateItemDto = {
      name: 'Test Item',
      price: 10.99,
    };

    const newItem: Item = await itemService.createItem(newItemData);
    const retrievedItem: Item = await itemService.getItemById(newItem.id);

    expect(retrievedItem).toBeDefined();
    expect(retrievedItem!.id).toBe(newItem.id);
    expect(retrievedItem!.name).toBe('Test Item');
  });

  afterAll(async () => {
    // possibly call script to reset db here.
    await module.close();
  });
});
