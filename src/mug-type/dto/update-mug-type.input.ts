import { CreateMugTypeInput } from './create-mug-type.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateMugTypeInput extends PartialType(CreateMugTypeInput) {
  @Field(() => Int)
  id: number;
}
