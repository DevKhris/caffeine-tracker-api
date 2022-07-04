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
    return this.mugTypeRepository.create(createMugTypeInput);
  }

  findAll() {
    return this.mugTypeRepository.findBy({});
  }

  findOne(id: number) {
    return this.mugTypeRepository.findOneByOrFail({ id: id });
  }

  update(id: number, updateMugTypeInput: UpdateMugTypeInput) {
    return this.mugTypeRepository.update(id, updateMugTypeInput);
  }

  remove(id: number) {
    return this.mugTypeRepository.delete(id);
  }
}
