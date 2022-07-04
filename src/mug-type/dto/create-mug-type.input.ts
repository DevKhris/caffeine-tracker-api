import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateMugTypeInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
