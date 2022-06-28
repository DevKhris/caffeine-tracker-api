import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateMugInput {
  @Field(() => String, { description: 'Mug Type field' })
  type: string;
}
