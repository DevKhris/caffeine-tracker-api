import { Mug } from './entities/mug.entity';
import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateMugInput } from './dto/create-mug.input';
import { UpdateMugInput } from './dto/update-mug.input';

@Injectable()
export class MugService {
  constructor(
    @Inject('MUG_REPOSITORY')
    private mugRepository: Repository<Mug>,
  ) {}

  create(createMugInput: CreateMugInput) {
    return 'This action adds a new mug';
  }

  findAll() {
    return `This action returns all mug`;
  }

  findOne(id: number) {
    return `This action returns a #${id} mug`;
  }

  update(id: number, updateMugInput: UpdateMugInput) {
    return `This action updates a #${id} mug`;
  }

  remove(id: number) {
    return `This action removes a #${id} mug`;
  }
}
