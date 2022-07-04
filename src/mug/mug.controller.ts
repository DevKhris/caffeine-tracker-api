import { Mug } from './entities/mug.entity';
import { MugService } from './mug.service';
import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('mug')
export class MugController {
  constructor(private readonly mugService: MugService) {}

  @UseGuards(AuthGuard('jwt'))
  @Get()
  async findAll(): Promise<Mug[]> {
    return this.mugService.findAll(1);
  }
}
