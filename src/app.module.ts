import { Module } from '@nestjs/common';
import { ItemsModule } from './items/item.module';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import mikroOrmConfig from './database/mikro-orm.config';
import { Item } from './items/dto/item.entity';

@Module({
  imports: [
    ItemsModule,
    MikroOrmModule.forRoot(mikroOrmConfig),
    MikroOrmModule.forFeature({ entities: [Item] }),
  ],
})
export class AppModule {}
