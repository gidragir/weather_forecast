import { ObjectType, InputType, ArgsType, Field, Float, Int } from '@nestjs/graphql'
import { City, CityConnect } from '../cities/city.entity'
import { WeatherCondition, WeatherConditionConnect } from '../weatherconditions/weathercondition.entity'
import {
  ForecastWhereInput,
  ForecastWhereUniqueInput,
  ForecastUpdateInput,
} from '../etc/inputs';
import { ForecastOrderByWithRelationInput } from '../etc/orders';
import { ForecastScalarFieldEnum } from '../etc/fieldEnums';

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
  @Field(() => ForecastUpdateInput, {
    nullable: false,
  })
  data!: ForecastUpdateInput;

  @Field(() => ForecastWhereUniqueInput, {
    nullable: false,
  })
  where!: ForecastWhereUniqueInput;
}

@ArgsType()
export class ArgsForecast {
  @Field(() => ForecastWhereInput, {
    nullable: true,
  })
  where?: ForecastWhereInput | undefined;

  @Field(() => [ForecastOrderByWithRelationInput], {
    nullable: true,
  })
  orderBy?: ForecastOrderByWithRelationInput[] | undefined;

  @Field(() => ForecastWhereUniqueInput, {
    nullable: true,
  })
  cursor?: ForecastWhereUniqueInput | undefined;

  @Field(() => Int, {
    nullable: true,
  })
  take?: number | undefined;

  @Field(() => Int, {
    nullable: true,
  })
  skip?: number | undefined;

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
    | undefined;
}