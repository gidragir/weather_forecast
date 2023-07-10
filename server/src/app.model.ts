import { Field, ObjectType } from '@nestjs/graphql';
@ObjectType()
export class City {
  @Field()
  Id: number
  @Field()
  Name: string!
  @Field()
  Lat: number
  @Field()
  Long: number
}

@ObjectType()
export class Forecasts {
  @Field()
  Id: number
  @Field()
  Day: Date
  @Field()
  Hour: number
  @Field()
  // City Cities @relation(fields: [CityId], references: [Id])
  @Field()
  Temp: number
  @Field()
  Feels_like: number
  @Field()
  Cloudness: number
  @Field()
  Condition WeatherConditions @relation(fields: [ConditionId], references: [Id])
  @Field() 
  Daytime: string
  @Field()
  Prec_strength: number
}