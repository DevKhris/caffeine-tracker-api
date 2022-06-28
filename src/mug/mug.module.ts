import { DatabaseModule } from './../database/database.module';
import { Module } from '@nestjs/common';
import { MugService } from './mug.service';
import { MugResolver } from './mug.resolver';
import { mugProviders } from './mug.providers';

@Module({
  imports: [DatabaseModule],
  providers: [MugResolver, ...mugProviders, MugService],
})
export class MugModule {}
