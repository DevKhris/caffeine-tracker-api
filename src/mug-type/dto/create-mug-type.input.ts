import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateMugTypeInput {
  @Field()
  name: string;

  @Field()
  caffeine: number;
}
