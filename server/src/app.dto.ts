import { InputType, Field } from '@nestjs/graphql';
@InputType()
export class City {
  @Field(() => String) name: string;
}
