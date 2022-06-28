import { CreateMugInput } from './create-mug.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateMugInput extends PartialType(CreateMugInput) {
  @Field(() => Int)
  id: number;
}
