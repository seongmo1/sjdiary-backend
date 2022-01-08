import { Field, InputType, Int } from '@nestjs/graphql';
import { MaxLength, Min, MinLength } from 'class-validator';

@InputType()
export class UpdateTodoInput {
  @Field(() => String, { nullable: true })
  @MinLength(1, {
    message: 'contents is too short',
  })
  @MaxLength(23, {
    message: 'contents is too long',
  })
  contents?: string;

  @Field(() => Int, { nullable: true })
  @Min(1)
  startedAt?: number;

  @Field(() => Int, { nullable: true })
  @Min(1)
  finishedAt?: number;

  @Field(() => Int, { nullable: true })
  completedAt?: number;
}