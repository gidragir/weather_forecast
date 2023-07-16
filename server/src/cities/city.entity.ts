import { ObjectType, InputType, ArgsType, PartialType, Field, ID, Float } from '@nestjs/graphql'

@ObjectType()
export class City {
  @Field(() => ID)
  Id: number

  @Field()
  Name: string

  @Field(() => Float)
  Lat: number

  @Field(() => Float)
  Long: number
}

@InputType()
export class CreateCity {
  @Field()
  Name: string

  @Field(() => Float)
  Lat: number

  @Field(() => Float)
  Long: number
}

@InputType()
export class UpdateCity extends PartialType(City, InputType) {}

@ArgsType()
export class ArgsCity extends PartialType(City, ArgsType) {}