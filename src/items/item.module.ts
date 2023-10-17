import { Module } from '@nestjs/common';
import { ItemsController } from './item.controller';
import { ItemService } from './item.service';
import { taskProviders } from './item.provider';

@Module({
  controllers: [ItemsController],
  providers: [ItemService, ...taskProviders],
})
export class ItemsModule {}
