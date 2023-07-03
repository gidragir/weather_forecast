import { Field, ObjectType } from '@nestjs/graphql';
@ObjectType()
export class city {
  @Field()
  id: string;
  @Field()
  name: string;
}
