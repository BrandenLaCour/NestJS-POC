// item.e2e-spec.ts

import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Test, TestingModule } from '@nestjs/testing';
import { Item } from '../../src/items/dto/item.entity';
import { CreateItemDto } from 'src/items/dto/item.dto';
import { ItemService } from '../../src/items/item.service';

describe('ItemService', () => {
  let module: TestingModule;
  let itemService: ItemService;

  beforeAll(async () => {
    module = await Test.createTestingModule({
      imports: [
        MikroOrmModule.forRootAsync({
          useFactory: () => ({
            ...require('../../src/database/mikro-orm.config.test').default,
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

    // Act: Retrieve the item by its ID
    const retrievedItem: Item = await itemService.getItemById(newItem.id);

    // Assert: Check if the retrieved item matches the created item
    expect(retrievedItem).toBeDefined();
    expect(retrievedItem!.id).toBe(newItem.id);
    expect(retrievedItem!.name).toBe('Test Item');
  });

  afterAll(async () => {
    await module.close();
  });
});
