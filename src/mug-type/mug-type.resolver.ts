import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { MugTypeService } from './mug-type.service';
import { MugType } from './entities/mug-type.entity';
import { CreateMugTypeInput } from './dto/create-mug-type.input';
import { UpdateMugTypeInput } from './dto/update-mug-type.input';

@Resolver(() => MugType)
export class MugTypeResolver {
  constructor(private readonly mugTypeService: MugTypeService) {}

  @Mutation(() => MugType)
  createMugType(@Args('createMugTypeInput') createMugTypeInput: CreateMugTypeInput) {
    return this.mugTypeService.create(createMugTypeInput);
  }

  @Query(() => [MugType], { name: 'mugType' })
  findAll() {
    return this.mugTypeService.findAll();
  }

  @Query(() => MugType, { name: 'mugType' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.mugTypeService.findOne(id);
  }

  @Mutation(() => MugType)
  updateMugType(@Args('updateMugTypeInput') updateMugTypeInput: UpdateMugTypeInput) {
    return this.mugTypeService.update(updateMugTypeInput.id, updateMugTypeInput);
  }

  @Mutation(() => MugType)
  removeMugType(@Args('id', { type: () => Int }) id: number) {
    return this.mugTypeService.remove(id);
  }
}
