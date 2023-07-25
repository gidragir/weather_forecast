import * as GraphQl from '@nestjs/graphql';


export enum SortOrder {
  asc = 'asc',
  desc = 'desc',
}
GraphQl.registerEnumType(SortOrder, {
  name: 'SortOrder',
  description: undefined,
});

//#region OrderByRelation
@GraphQl.InputType('ForecastOrderByRelationAggregateInput', {
  isAbstract: true,
})
export class ForecastOrderByRelationAggregateInput {
  @GraphQl.Field(() => SortOrder, {
    nullable: true,
  })
  _count?: 'asc' | 'desc' | undefined;
}


@GraphQl.InputType('CityOrderByWithRelationInput', {
  isAbstract: true,
})
export class CityOrderByWithRelationInput {
  @GraphQl.Field(() => SortOrder, {
    nullable: true,
  })
  Id?: 'asc' | 'desc' | undefined;

  @GraphQl.Field(() => SortOrder, {
    nullable: true,
  })
  Name?: 'asc' | 'desc' | undefined;

  @GraphQl.Field(() => SortOrder, {
    nullable: true,
  })
  Lat?: 'asc' | 'desc' | undefined;

  @GraphQl.Field(() => SortOrder, {
    nullable: true,
  })
  Long?: 'asc' | 'desc' | undefined;

  @GraphQl.Field(() => ForecastOrderByRelationAggregateInput, {
    nullable: true,
  })
  Forecasts?: ForecastOrderByRelationAggregateInput | undefined;
}

@GraphQl.InputType('WeatherConditionOrderByWithRelationInput', {
  isAbstract: true,
})
export class WeatherConditionOrderByWithRelationInput {
  @GraphQl.Field(() => SortOrder, {
    nullable: true,
  })
  Id?: 'asc' | 'desc' | undefined;

  @GraphQl.Field(() => SortOrder, {
    nullable: true,
  })
  Name?: 'asc' | 'desc' | undefined;

  @GraphQl.Field(() => ForecastOrderByRelationAggregateInput, {
    nullable: true,
  })
  Forecasts?: ForecastOrderByRelationAggregateInput | undefined;
}
//#endregion


@GraphQl.InputType('ForecastOrderByWithRelationInput', {
  isAbstract: true,
})
export class ForecastOrderByWithRelationInput {
  @GraphQl.Field(() => SortOrder, {
    nullable: true,
  })
  Id?: 'asc' | 'desc' | undefined;

  @GraphQl.Field(() => SortOrder, {
    nullable: true,
  })
  Day?: 'asc' | 'desc' | undefined;

  @GraphQl.Field(() => SortOrder, {
    nullable: true,
  })
  Hour?: 'asc' | 'desc' | undefined;

  @GraphQl.Field(() => CityOrderByWithRelationInput, {
    nullable: true,
  })
  City?: CityOrderByWithRelationInput | undefined;

  @GraphQl.Field(() => SortOrder, {
    nullable: true,
  })
  CityId?: 'asc' | 'desc' | undefined;

  @GraphQl.Field(() => SortOrder, {
    nullable: true,
  })
  Temp?: 'asc' | 'desc' | undefined;

  @GraphQl.Field(() => SortOrder, {
    nullable: true,
  })
  Feels_like?: 'asc' | 'desc' | undefined;

  @GraphQl.Field(() => SortOrder, {
    nullable: true,
  })
  Cloudness?: 'asc' | 'desc' | undefined;

  @GraphQl.Field(() => WeatherConditionOrderByWithRelationInput, {
    nullable: true,
  })
  Condition?: WeatherConditionOrderByWithRelationInput | undefined;

  @GraphQl.Field(() => SortOrder, {
    nullable: true,
  })
  ConditionId?: 'asc' | 'desc' | undefined;

  @GraphQl.Field(() => SortOrder, {
    nullable: true,
  })
  Daytime?: 'asc' | 'desc' | undefined;

  @GraphQl.Field(() => SortOrder, {
    nullable: true,
  })
  Prec_strength?: 'asc' | 'desc' | undefined;
}
