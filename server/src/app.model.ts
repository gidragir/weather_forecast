import { Field, Int, Float, ObjectType, InputType } from '@nestjs/graphql';

@ObjectType()
export class City {
  @Field(type => Int)
  Id: number

  @Field()
  Name: string

  @Field(type => Float)
  Lat: number

  @Field(type => Float)
  Long: number
}
@ObjectType()
export class WeatherCondition {
  @Field(type => Int)
  Id: number

  @Field()
  Name: string
}
@ObjectType()
export class Forecast {
  @Field(type => Int)
  Id: number

  @Field()
  Day: Date

  @Field()
  Hour: number

  @Field(type => City)
  City: City

  @Field(type => Float)
  Temp: number

  @Field(type => Float)
  Feels_like: number

  @Field(type => Float)
  Cloudness: number

  @Field(type => WeatherCondition)
  Condition: WeatherCondition

  @Field() 
  Daytime: string

  @Field(type => Float)
  Prec_strength: number
}

@InputType()
export class WeatherConditionInput {
  @Field()
  Name: string
}