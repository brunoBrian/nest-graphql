import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateLessonInput {
  @Field()
  description: string;
}
