import { Permissions } from '../decorators/permissions.decorator';
import { PermissionsGuard } from '../guards/permissions.guard';
import { MugType } from './entities/mug-type.entity';
import { AuthGuard } from '@nestjs/passport';
import { MugTypeService } from './mug-type.service';
import {
  Controller,
  UseGuards,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';

@Controller('mug-type')
export class MugTypeController {
  constructor(private readonly mugTypeService: MugTypeService) {}

  @UseGuards(AuthGuard('jwt'), PermissionsGuard)
  @Permissions('read:mug-types')
  @Get()
  async findAll(): Promise<MugType[]> {
    return this.mugTypeService.findAll();
  }

  @UseGuards(AuthGuard('jwt'), PermissionsGuard)
  @Permissions('read:mug-types')
  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.mugTypeService.findOne(id);
  }

  @UseGuards(AuthGuard('jwt'), PermissionsGuard)
  @Post()
  @Permissions('write:mug-types')
  async create(@Body('mug-type') mugType: MugType) {
    return this.mugTypeService.create(mugType);
  }

  @UseGuards(AuthGuard('jwt'), PermissionsGuard)
  @Put(':id')
  @Permissions('update:mug-types')
  async update(@Param('id') id: number, @Body('mug-type') mugType: MugType) {
    return this.mugTypeService.update(id, mugType);
  }

  @UseGuards(AuthGuard('jwt'), PermissionsGuard)
  @Delete(':id')
  @Permissions('delete:mug-types')
  async delete(@Param('id') id: number) {
    return this.mugTypeService.remove(id);
  }
}
