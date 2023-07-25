import { ObjectType, InputType, ArgsType, Field, Int } from '@nestjs/graphql'
import { Forecast } from '../forecasts/forecast.entity'
import {
  WeatherConditionWhereInput,
  WeatherConditionWhereUniqueInput,
  WeatherConditionUpdateInput,
} from '../etc/inputs';
import { WeatherConditionOrderByWithRelationInput } from '../etc/orders';
import { WeatherConditionScalarFieldEnum } from '../etc/fieldEnums';


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
export class UpdateWeatherCondition {
  @Field(() => WeatherConditionUpdateInput, {
    nullable: false,
  })
  data!: WeatherConditionUpdateInput;

  @Field(() => WeatherConditionWhereUniqueInput, {
    nullable: false,
  })
  where!: WeatherConditionWhereUniqueInput;
}

@ArgsType()
export class ArgsWeatherCondition {
  @Field(() => WeatherConditionWhereInput, {
    nullable: true,
  })
  where?: WeatherConditionWhereInput | undefined;

  @Field(() => [WeatherConditionOrderByWithRelationInput], {
    nullable: true,
  })
  orderBy?: WeatherConditionOrderByWithRelationInput[] | undefined;

  @Field(() => WeatherConditionWhereUniqueInput, {
    nullable: true,
  })
  cursor?: WeatherConditionWhereUniqueInput | undefined;

  @Field(() => Int, {
    nullable: true,
  })
  take?: number | undefined;

  @Field(() => Int, {
    nullable: true,
  })
  skip?: number | undefined;

  @Field(() => [WeatherConditionScalarFieldEnum], {
    nullable: true,
  })
  distinct?: Array<'Id' | 'Name' > | undefined;
}


@InputType()
export class WeatherConditionConnect {
  @Field(() => WeatherConditionWhereUniqueInput)
  connect?: WeatherConditionWhereUniqueInput | undefined
}