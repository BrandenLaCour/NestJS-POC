import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Patch,
} from '@nestjs/common';
import { ItemService } from './item.service';
import { ItemStatus } from './dto/Item-status.enum';
import { ItemDto, CreateItemDto } from './dto/Item.dto';

@Controller('items')
export class ItemsController {
  //inject the Item service via constructor here
  constructor(private ItemsService: ItemService) {}

  @Get('/')
  getAllItems(): Promise<ItemDto[]> {
    return this.ItemsService.getAllItems();
  }

  @Get('/:Id')
  getItemById(@Param('Id') Id: string): Promise<ItemDto> {
    return this.ItemsService.getItemById(Id);
  }

  @Post('/')
  createItem(@Body() createItemDto: CreateItemDto): Promise<ItemDto> {
    return this.ItemsService.createItem(createItemDto);
  }

  @Patch('/:id/status')
  UpdateItemStatus(
    @Param('id') id: string,
    @Body('status') status: ItemStatus,
  ): Promise<ItemDto> {
    return this.ItemsService.updateItemStatus(id, status);
  }
}
