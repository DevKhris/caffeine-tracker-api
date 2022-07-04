import { DatabaseModule } from './../database/database.module';
import { Module } from '@nestjs/common';
import { MugService } from './mug.service';
import { MugResolver } from './mug.resolver';
import { mugProviders } from './mug.providers';
import { MugController } from './mug.controller';

@Module({
  imports: [DatabaseModule],
  providers: [MugResolver, ...mugProviders, MugService],
  controllers: [MugController],
})
export class MugModule {}
