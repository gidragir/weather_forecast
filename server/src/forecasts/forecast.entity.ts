import { ObjectType, InputType, ArgsType, PartialType, Field, Float, Int } from '@nestjs/graphql'

@ObjectType()
export class Forecast {
  @Field(() => Int)
  Id: number

  @Field()
  Day: Date

  @Field()
  Hour: number

  @Field(() => Int)
  CityId: number

  @Field(() => Float)
  Temp: number

  @Field(() => Float)
  Feels_like: number

  @Field(() => Float)
  Cloudness: number

  @Field(() => Int)
  ConditionId: number

  @Field() 
  Daytime: string

  @Field(() => Float)
  Prec_strength: number
}

@InputType()
export class CreateForecast {
  @Field()
  Day: Date

  @Field()
  Hour: number
  
  @Field(() => Int)
  CityId: number

  @Field(() => Float)
  Temp: number

  @Field(() => Float)
  Feels_like: number

  @Field(() => Float)
  Cloudness: number
  
  @Field(() => Int)
  ConditionId: number

  @Field() 
  Daytime: string

  @Field(() => Float)
  Prec_strength: number
}

@InputType()
export class UpdateForecast extends PartialType(Forecast, InputType) {}

@ArgsType()
export class ArgsForecast extends PartialType(Forecast, ArgsType) {}