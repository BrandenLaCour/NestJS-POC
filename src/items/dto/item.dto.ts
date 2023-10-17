import { ItemStatus } from './item-status.enum';
import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class ItemDto {
  @IsString()
  id: string;
  @IsString()
  name: string;
  @IsNumber()
  price: number;
  // @IsBoolean()
  // isImportant: boolean;
  @IsNotEmpty()
  status: ItemStatus;
}

export class CreateItemDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  price: number;
}
