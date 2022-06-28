import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { MugService } from './mug.service';
import { Mug } from './entities/mug.entity';
import { CreateMugInput } from './dto/create-mug.input';
import { UpdateMugInput } from './dto/update-mug.input';

@Resolver(() => Mug)
export class MugResolver {
  constructor(private readonly mugService: MugService) {}

  @Mutation(() => Mug)
  createMug(@Args('createMugInput') createMugInput: CreateMugInput) {
    return this.mugService.create(createMugInput);
  }

  @Query(() => [Mug], { name: 'mug' })
  findAll() {
    return this.mugService.findAll();
  }

  @Query(() => Mug, { name: 'mug' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.mugService.findOne(id);
  }

  @Mutation(() => Mug)
  updateMug(@Args('updateMugInput') updateMugInput: UpdateMugInput) {
    return this.mugService.update(updateMugInput.id, updateMugInput);
  }

  @Mutation(() => Mug)
  removeMug(@Args('id', { type: () => Int }) id: number) {
    return this.mugService.remove(id);
  }
}
