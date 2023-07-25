import { ObjectType, InputType, ArgsType, PartialType, Field, Int } from '@nestjs/graphql'
import { Forecast } from '../forecasts/forecast.entity'

@ObjectType()
export class WeatherCondition {
  @Field(() => Int)
  Id: number

  @Field()
  Name: string

  Forecasts?: Forecast[]
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


@InputType()
export class WeatherConditionWhereUniqueInpu {
  @Field(() => Int, { nullable: true })
  Id?: number | undefined

  @Field({ nullable: true })
  Name?: string | undefined
}
@InputType()
export class WeatherConditionConnect {
  @Field(() => WeatherConditionWhereUniqueInpu)
  connect?: WeatherConditionWhereUniqueInpu | undefined
}