import * as GraphQl from '@nestjs/graphql';
import { CityCountOrderByAggregateInput, CityAvgOrderByAggregateInput, CityMaxOrderByAggregateInput, CityMinOrderByAggregateInput, CitySumOrderByAggregateInput,
  WeatherConditionCountOrderByAggregateInput, WeatherConditionAvgOrderByAggregateInput, WeatherConditionMaxOrderByAggregateInput, WeatherConditionMinOrderByAggregateInput, WeatherConditionSumOrderByAggregateInput,
  ForecastCountOrderByAggregateInput, ForecastAvgOrderByAggregateInput, ForecastMaxOrderByAggregateInput, ForecastMinOrderByAggregateInput, ForecastSumOrderByAggregateInput } from '../etc/inputs'


export enum SortOrder {
  asc = 'asc',
  desc = 'desc',
}
GraphQl.registerEnumType(SortOrder, {
  name: 'SortOrder',
  description: undefined,
});

//#region OrderByWithAggregation 
@GraphQl.InputType("CityOrderByWithAggregationInput", {
  isAbstract: true
})
export class CityOrderByWithAggregationInput {
  @GraphQl.Field(() => SortOrder, {
    nullable: true
  })
  Id?: "asc" | "desc" | undefined;

  @GraphQl.Field(() => SortOrder, {
    nullable: true
  })
  Name?: "asc" | "desc" | undefined;

  @GraphQl.Field(() => SortOrder, {
    nullable: true
  })
  Lat?: "asc" | "desc" | undefined;

  @GraphQl.Field(() => SortOrder, {
    nullable: true
  })
  Long?: "asc" | "desc" | undefined;

  @GraphQl.Field(() => CityCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: CityCountOrderByAggregateInput | undefined;

  @GraphQl.Field(() => CityAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: CityAvgOrderByAggregateInput | undefined;

  @GraphQl.Field(() => CityMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: CityMaxOrderByAggregateInput | undefined;

  @GraphQl.Field(() => CityMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: CityMinOrderByAggregateInput | undefined;

  @GraphQl.Field(() => CitySumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: CitySumOrderByAggregateInput | undefined;
}

@GraphQl.InputType("WeatherConditionOrderByWithAggregationInput", {
  isAbstract: true
})
export class WeatherConditionOrderByWithAggregationInput {
  @GraphQl.Field(() => SortOrder, {
    nullable: true
  })
  Id?: "asc" | "desc" | undefined;

  @GraphQl.Field(() => SortOrder, {
    nullable: true
  })
  Name?: "asc" | "desc" | undefined;

  @GraphQl.Field(() => WeatherConditionCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: WeatherConditionCountOrderByAggregateInput | undefined;

  @GraphQl.Field(() => WeatherConditionAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: WeatherConditionAvgOrderByAggregateInput | undefined;

  @GraphQl.Field(() => WeatherConditionMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: WeatherConditionMaxOrderByAggregateInput | undefined;

  @GraphQl.Field(() => WeatherConditionMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: WeatherConditionMinOrderByAggregateInput | undefined;

  @GraphQl.Field(() => WeatherConditionSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: WeatherConditionSumOrderByAggregateInput | undefined;
}

@GraphQl.InputType("ForecastOrderByWithAggregationInput", {
  isAbstract: true
})
export class ForecastOrderByWithAggregationInput {
  @GraphQl.Field(() => SortOrder, {
    nullable: true
  })
  Id?: "asc" | "desc" | undefined;

  @GraphQl.Field(() => SortOrder, {
    nullable: true
  })
  Day?: "asc" | "desc" | undefined;

  @GraphQl.Field(() => SortOrder, {
    nullable: true
  })
  Hour?: "asc" | "desc" | undefined;

  @GraphQl.Field(() => SortOrder, {
    nullable: true
  })
  CityId?: "asc" | "desc" | undefined;

  @GraphQl.Field(() => SortOrder, {
    nullable: true
  })
  Temp?: "asc" | "desc" | undefined;

  @GraphQl.Field(() => SortOrder, {
    nullable: true
  })
  Feels_like?: "asc" | "desc" | undefined;

  @GraphQl.Field(() => SortOrder, {
    nullable: true
  })
  Cloudness?: "asc" | "desc" | undefined;

  @GraphQl.Field(() => SortOrder, {
    nullable: true
  })
  ConditionId?: "asc" | "desc" | undefined;

  @GraphQl.Field(() => SortOrder, {
    nullable: true
  })
  Daytime?: "asc" | "desc" | undefined;

  @GraphQl.Field(() => SortOrder, {
    nullable: true
  })
  Prec_strength?: "asc" | "desc" | undefined;

  @GraphQl.Field(() => ForecastCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: ForecastCountOrderByAggregateInput | undefined;

  @GraphQl.Field(() => ForecastAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: ForecastAvgOrderByAggregateInput | undefined;

  @GraphQl.Field(() => ForecastMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: ForecastMaxOrderByAggregateInput | undefined;

  @GraphQl.Field(() => ForecastMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: ForecastMinOrderByAggregateInput | undefined;

  @GraphQl.Field(() => ForecastSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: ForecastSumOrderByAggregateInput | undefined;
}
//#endregion


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
//#endregion