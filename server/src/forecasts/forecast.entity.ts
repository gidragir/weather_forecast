import { ObjectType, InputType, ArgsType, Field, Float, Int } from '@nestjs/graphql'
import { City, CityConnect } from '../cities/city.entity'
import { WeatherCondition, WeatherConditionConnect } from '../weatherconditions/weathercondition.entity'
import {
  ForecastWhereInput,
  ForecastWhereUniqueInput,
  ForecastUpdateInput,
} from '../etc/inputs'
import { ForecastOrderByWithRelationInput } from '../etc/orders'
import { ForecastScalarFieldEnum } from '../etc/fieldEnums'

export * from '../cities/city.entity'
export * from '../weatherconditions/weathercondition.entity'

@ObjectType()
export class Forecast {
  @Field(() => Int)
  Id: number

  @Field(() => Date)
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

@ObjectType()
export class ForecastAggregate {

  @Field(() => Float, {
    nullable: true
  })
  Temp: number | null;

  @Field(() => Float, {
    nullable: true
  })
  Feels_like: number | null;

  @Field(() => Float, {
    nullable: true
  })
  Cloudness: number | null;

  @Field(() => Float, {
    nullable: true
  })
  Prec_strength: number | null;
}

@ObjectType()
export class ForecastGroupBy {

  @Field(() => Date, {
    nullable: true
  })
  Day: Date

  @Field({
    nullable: true
  })
  Hour: number

  City?: City

  @Field(() => Int, {
    nullable: true
  })
  CityId: number

  @Field({
    nullable: true
  }) 
  Daytime: string

  @Field(() => ForecastAggregate, {
    nullable: true
  })
  _max: ForecastAggregate | null;

  @Field(() => ForecastAggregate, {
    nullable: true
  })
  _min: ForecastAggregate | null;

  @Field(() => ForecastAggregate, {
    nullable: true
  })
  _avg: ForecastAggregate | null;

}

@InputType()
export class CreateForecast {
  @Field(() => Date)
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
  @Field(() => ForecastUpdateInput, {
    nullable: false,
  })
  data!: ForecastUpdateInput

  @Field(() => ForecastWhereUniqueInput, {
    nullable: false,
  })
  where!: ForecastWhereUniqueInput
}

@ArgsType()
export class ArgsForecast {
  @Field(() => ForecastWhereInput, {
    nullable: true,
  })
  where?: ForecastWhereInput | undefined

  @Field(() => [ForecastOrderByWithRelationInput], {
    nullable: true,
  })
  orderBy?: ForecastOrderByWithRelationInput[] | undefined

  @Field(() => ForecastWhereUniqueInput, {
    nullable: true,
  })
  cursor?: ForecastWhereUniqueInput | undefined

  @Field(() => Int, {
    nullable: true,
  })
  take?: number | undefined

  @Field(() => Int, {
    nullable: true,
  })
  skip?: number | undefined

  @Field(() => [ForecastScalarFieldEnum], {
    nullable: true,
  })
  distinct?:
    | Array<
        | 'Id'
        | 'Day'
        | 'Hour'
        | 'CityId'
        | 'Temp'
        | 'Feels_like'
        | 'Cloudness'
        | 'ConditionId'
        | 'Daytime'
        | 'Prec_strength'
      >
    | undefined
}