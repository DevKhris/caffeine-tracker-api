import { MugType } from './entities/mug-type.entity';
import { Repository } from 'typeorm';
import { Inject, Injectable } from '@nestjs/common';
import { CreateMugTypeInput } from './dto/create-mug-type.input';
import { UpdateMugTypeInput } from './dto/update-mug-type.input';

@Injectable()
export class MugTypeService {
  constructor(
    @Inject('MUG_TYPE_REPOSITORY')
    private mugTypeRepository: Repository<MugType>,
  ) {}
  create(createMugTypeInput: CreateMugTypeInput) {
    return 'This action adds a new mugType';
  }

  findAll() {
    return this.mugTypeRepository.findBy({});
  }

  findOne(id: number) {
    return `This action returns a #${id} mugType`;
  }

  update(id: number, updateMugTypeInput: UpdateMugTypeInput) {
    return `This action updates a #${id} mugType`;
  }

  remove(id: number) {
    return `This action removes a #${id} mugType`;
  }
}
