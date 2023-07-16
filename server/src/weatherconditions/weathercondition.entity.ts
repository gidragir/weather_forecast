import { ObjectType, InputType, ArgsType, PartialType, Field, ID } from '@nestjs/graphql'

@ObjectType()
export class WeatherCondition {
  @Field(() => ID)
  Id: number

  @Field()
  Name: string
}

@InputType()
export class CreateWeatherCondition {
  @Field()
  Name: string
}

@InputType()
export class UpdateWeatherCondition extends PartialType(WeatherCondition, InputType) {}

@ArgsType()
export class ArgsWeatherCondition extends PartialType(WeatherCondition, ArgsType) {}