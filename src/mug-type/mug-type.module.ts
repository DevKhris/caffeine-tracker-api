import { DatabaseModule } from './../database/database.module';
import { mugTypeProviders } from './mug-type.providers';
import { Module } from '@nestjs/common';
import { MugTypeService } from './mug-type.service';
import { MugTypeResolver } from './mug-type.resolver';
import { MugTypeController } from './mug-type.controller';

@Module({
  imports: [DatabaseModule],
  providers: [MugTypeResolver, ...mugTypeProviders, MugTypeService],
  controllers: [MugTypeController],
})
export class MugTypeModule {}
