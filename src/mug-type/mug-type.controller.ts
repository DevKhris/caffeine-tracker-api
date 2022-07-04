import { MugType } from './entities/mug-type.entity';
import { AuthGuard } from '@nestjs/passport';
import { MugTypeService } from './mug-type.service';
import { Controller, UseGuards, Get } from '@nestjs/common';

@Controller('mug-type')
export class MugTypeController {
  constructor(private readonly mugTypeService: MugTypeService) {}

  @UseGuards(AuthGuard('jwt'))
  @Get()
  async findAll(): Promise<MugType[]> {
    return this.mugTypeService.findAll();
  }
}
