import { ObjectType, InputType, ArgsType, PartialType, Field, Float, Int } from '@nestjs/graphql'
import { City, CityConnect } from '../cities/city.entity'
import { WeatherCondition, WeatherConditionConnect } from '../weatherconditions/weathercondition.entity'

@ObjectType()
export class Forecast {
  @Field(() => Int)
  Id: number

  @Field()
  Day: Date

  @Field()
  Hour: number

  City?: City

  @Field(() => Int)
  CityId: number

  @Field(() => Float)
  Temp: number

  @Field(() => Float)
  Feels_like: number

  @Field(() => Float)
  Cloudness: number

  Condition: WeatherCondition

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
  
  @Field(() => CityConnect)
  City: CityConnect

  @Field(() => Float)
  Temp: number

  @Field(() => Float)
  Feels_like: number

  @Field(() => Float)
  Cloudness: number
  
  @Field(() => WeatherConditionConnect)
  Condition: WeatherConditionConnect

  @Field() 
  Daytime: string

  @Field(() => Float)
  Prec_strength: number
}

@InputType()
export class UpdateForecast {
  @Field({nullable: true})
  Day?: Date
}

@ArgsType()
export class ArgsForecast {
  @Field(() => Int, {nullable: true})
  Id?: number

  @Field({nullable: true})
  Day?: Date

  @Field({nullable: true})
  Hour?: number

  @Field(() => Float, {nullable: true})
  Temp?: number

  @Field(() => Float, {nullable: true})
  Feels_like?: number

  @Field(() => Float, {nullable: true})
  Cloudness?: number

  @Field(() => Int, {nullable: true})
  ConditionId?: number

  @Field({nullable: true}) 
  Daytime?: string

  @Field(() => Float, {nullable: true})
  Prec_strength?: number
}