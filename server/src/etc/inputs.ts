import * as GraphQl from '@nestjs/graphql';
import {
  DateTimeFilter,
  FloatFilter,
  IntFilter,
  StringFilter,
  CityRelationFilter,
  WeatherConditionRelationFilter,
} from './filters';
import {
  DateTimeFieldUpdateOperationsInput,
  FloatFieldUpdateOperationsInput,
  IntFieldUpdateOperationsInput,
  StringFieldUpdateOperationsInput,
} from './fieldEnums';
import { SortOrder } from '../etc/orders'
import { CreateCity, UpdateCity } from '../cities/city.entity';
import { CreateWeatherCondition, UpdateWeatherCondition } from '../weatherconditions/weathercondition.entity';

//#region WhereInputs
@GraphQl.InputType('ForecastWhereInput', {
  isAbstract: true,
})
export class ForecastWhereInput {
  @GraphQl.Field(() => [ForecastWhereInput], {
    nullable: true,
  })
  AND?: ForecastWhereInput[] | undefined;

  @GraphQl.Field(() => [ForecastWhereInput], {
    nullable: true,
  })
  OR?: ForecastWhereInput[] | undefined;

  @GraphQl.Field(() => [ForecastWhereInput], {
    nullable: true,
  })
  NOT?: ForecastWhereInput[] | undefined;

  @GraphQl.Field(() => IntFilter, {
    nullable: true,
  })
  Id?: IntFilter | undefined;

  @GraphQl.Field(() => DateTimeFilter, {
    nullable: true,
  })
  Day?: DateTimeFilter | undefined;

  @GraphQl.Field(() => IntFilter, {
    nullable: true,
  })
  Hour?: IntFilter | undefined;

  @GraphQl.Field(() => CityRelationFilter, {
    nullable: true,
  })
  City?: CityRelationFilter | undefined;

  @GraphQl.Field(() => IntFilter, {
    nullable: true,
  })
  CityId?: IntFilter | undefined;

  @GraphQl.Field(() => FloatFilter, {
    nullable: true,
  })
  Temp?: FloatFilter | undefined;

  @GraphQl.Field(() => FloatFilter, {
    nullable: true,
  })
  Feels_like?: FloatFilter | undefined;

  @GraphQl.Field(() => FloatFilter, {
    nullable: true,
  })
  Cloudness?: FloatFilter | undefined;

  @GraphQl.Field(() => WeatherConditionRelationFilter, {
    nullable: true,
  })
  Condition?: WeatherConditionRelationFilter | undefined;

  @GraphQl.Field(() => IntFilter, {
    nullable: true,
  })
  ConditionId?: IntFilter | undefined;

  @GraphQl.Field(() => StringFilter, {
    nullable: true,
  })
  Daytime?: StringFilter | undefined;

  @GraphQl.Field(() => FloatFilter, {
    nullable: true,
  })
  Prec_strength?: FloatFilter | undefined;
}

@GraphQl.InputType('CityWhereInput', {
  isAbstract: true,
})
export class CityWhereInput {
  @GraphQl.Field(() => [CityWhereInput], {
    nullable: true,
  })
  AND?: CityWhereInput[] | undefined;

  @GraphQl.Field(() => [CityWhereInput], {
    nullable: true,
  })
  OR?: CityWhereInput[] | undefined;

  @GraphQl.Field(() => [CityWhereInput], {
    nullable: true,
  })
  NOT?: CityWhereInput[] | undefined;

  @GraphQl.Field(() => IntFilter, {
    nullable: true,
  })
  Id?: IntFilter | undefined;

  @GraphQl.Field(() => StringFilter, {
    nullable: true,
  })
  Name?: StringFilter | undefined;

  @GraphQl.Field(() => FloatFilter, {
    nullable: true,
  })
  Lat?: FloatFilter | undefined;

  @GraphQl.Field(() => FloatFilter, {
    nullable: true,
  })
  Long?: FloatFilter | undefined;
}

@GraphQl.InputType('WeatherConditionWhereInput', {
  isAbstract: true,
})
export class WeatherConditionWhereInput {
  @GraphQl.Field(() => [WeatherConditionWhereInput], {
    nullable: true,
  })
  AND?: WeatherConditionWhereInput[] | undefined;

  @GraphQl.Field(() => [WeatherConditionWhereInput], {
    nullable: true,
  })
  OR?: WeatherConditionWhereInput[] | undefined;

  @GraphQl.Field(() => [WeatherConditionWhereInput], {
    nullable: true,
  })
  NOT?: WeatherConditionWhereInput[] | undefined;

  @GraphQl.Field(() => IntFilter, {
    nullable: true,
  })
  Id?: IntFilter | undefined;

  @GraphQl.Field(() => StringFilter, {
    nullable: true,
  })
  Name?: StringFilter | undefined;
}


@GraphQl.InputType('ForecastWhereUniqueInput', {
  isAbstract: true,
})
export class ForecastWhereUniqueInput {
  @GraphQl.Field(() => GraphQl.Int, {
    nullable: true,
  })
  Id?: number | undefined;
}

@GraphQl.InputType('CityWhereUniqueInput', {
  isAbstract: true,
})
export class CityWhereUniqueInput {
  @GraphQl.Field(() => GraphQl.Int, {
    nullable: true,
  })
  Id?: number | undefined;

  @GraphQl.Field(() => String, {
    nullable: true,
  })
  Name?: string | undefined;
}

@GraphQl.InputType('WeatherConditionWhereUniqueInput', {
  isAbstract: true,
})
export class WeatherConditionWhereUniqueInput {
  @GraphQl.Field(() => GraphQl.Int, {
    nullable: true,
  })
  Id?: number | undefined;

  @GraphQl.Field(() => String, {
    nullable: true,
  })
  Name?: string | undefined;
}
//#endregion

//#region CreateOrConnect
@GraphQl.InputType('WeatherConditionCreateOrConnectWithoutForecastsInput', {
  isAbstract: true,
})
export class WeatherConditionCreateOrConnectWithoutForecastsInput {
  @GraphQl.Field(() => WeatherConditionWhereUniqueInput, {
    nullable: false,
  })
  where!: WeatherConditionWhereUniqueInput;

  @GraphQl.Field(() => CreateCity, {
    nullable: false,
  })
  create!: CreateCity;
}

@GraphQl.InputType('CityCreateOrConnectWithoutForecastsInput', {
  isAbstract: true,
})
export class CityCreateOrConnectWithoutForecastsInput {
  @GraphQl.Field(() => CityWhereUniqueInput, {
    nullable: false,
  })
  where!: CityWhereUniqueInput;

  @GraphQl.Field(() => CreateWeatherCondition, {
    nullable: false,
  })
  create!: CreateWeatherCondition;
}
//#endregion

//#region NestedInput
@GraphQl.InputType(
  'WeatherConditionUpdateOneRequiredWithoutForecastsNestedInput',
  {
    isAbstract: true,
  }
)
export class WeatherConditionUpdateOneRequiredWithoutForecastsNestedInput {
  @GraphQl.Field(() => CreateWeatherCondition, {
    nullable: true,
  })
  create?: CreateWeatherCondition | undefined;

  @GraphQl.Field(() => WeatherConditionCreateOrConnectWithoutForecastsInput, {
    nullable: true,
  })
  connectOrCreate?:
    | WeatherConditionCreateOrConnectWithoutForecastsInput
    | undefined;

  @GraphQl.Field(() => WeatherConditionWhereUniqueInput, {
    nullable: true,
  })
  connect?: WeatherConditionWhereUniqueInput | undefined;

  @GraphQl.Field(() => UpdateWeatherCondition, {
    nullable: true,
  })
  update?: UpdateWeatherCondition | undefined;
}

@GraphQl.InputType('CityUpdateOneRequiredWithoutForecastsNestedInput', {
  isAbstract: true,
})
export class CityUpdateOneRequiredWithoutForecastsNestedInput {
  @GraphQl.Field(() => CreateCity, {
    nullable: true,
  })
  create?: CreateCity | undefined;

  @GraphQl.Field(() => CityCreateOrConnectWithoutForecastsInput, {
    nullable: true,
  })
  connectOrCreate?: CityCreateOrConnectWithoutForecastsInput | undefined;

  @GraphQl.Field(() => CityWhereUniqueInput, {
    nullable: true,
  })
  connect?: CityWhereUniqueInput | undefined;

  @GraphQl.Field(() => UpdateCity, {
    nullable: true,
  })
  update?: UpdateCity | undefined;
}
//#endregion

//#region UpdateInputs
@GraphQl.InputType('ForecastUpdateInput', {
  isAbstract: true,
})
export class ForecastUpdateInput {
  @GraphQl.Field(() => DateTimeFieldUpdateOperationsInput, {
    nullable: true,
  })
  Day?: DateTimeFieldUpdateOperationsInput | undefined;

  @GraphQl.Field(() => IntFieldUpdateOperationsInput, {
    nullable: true,
  })
  Hour?: IntFieldUpdateOperationsInput | undefined;

  @GraphQl.Field(
    () => CityUpdateOneRequiredWithoutForecastsNestedInput,
    {
      nullable: true,
    }
  )
  City?: CityUpdateOneRequiredWithoutForecastsNestedInput | undefined;

  @GraphQl.Field(() => FloatFieldUpdateOperationsInput, {
    nullable: true,
  })
  Temp?: FloatFieldUpdateOperationsInput | undefined;

  @GraphQl.Field(() => FloatFieldUpdateOperationsInput, {
    nullable: true,
  })
  Feels_like?: FloatFieldUpdateOperationsInput | undefined;

  @GraphQl.Field(() => FloatFieldUpdateOperationsInput, {
    nullable: true,
  })
  Cloudness?: FloatFieldUpdateOperationsInput | undefined;

  @GraphQl.Field(
    () => WeatherConditionUpdateOneRequiredWithoutForecastsNestedInput,
    {
      nullable: true,
    }
  )
  Condition?:
    | WeatherConditionUpdateOneRequiredWithoutForecastsNestedInput
    | undefined;

  @GraphQl.Field(() => StringFieldUpdateOperationsInput, {
    nullable: true,
  })
  Daytime?: StringFieldUpdateOperationsInput | undefined;

  @GraphQl.Field(() => FloatFieldUpdateOperationsInput, {
    nullable: true,
  })
  Prec_strength?: FloatFieldUpdateOperationsInput | undefined;
}

@GraphQl.InputType('CityUpdateInput', {
  isAbstract: true,
})
export class CityUpdateInput {
  @GraphQl.Field(() => StringFieldUpdateOperationsInput, {
    nullable: true,
  })
  Name?: StringFieldUpdateOperationsInput | undefined;

  @GraphQl.Field(() => FloatFieldUpdateOperationsInput, {
    nullable: true,
  })
  Lat?: FloatFieldUpdateOperationsInput | undefined;

  @GraphQl.Field(() => FloatFieldUpdateOperationsInput, {
    nullable: true,
  })
  Long?: FloatFieldUpdateOperationsInput | undefined;
}

@GraphQl.InputType('WeatherConditionUpdateInput', {
  isAbstract: true,
})
export class WeatherConditionUpdateInput {
  @GraphQl.Field(() => StringFieldUpdateOperationsInput, {
    nullable: true,
  })
  Name?: StringFieldUpdateOperationsInput | undefined;
}
//#endregion

//#region OrderByAggregateInputs
//#region City
@GraphQl.InputType("CityCountOrderByAggregateInput", {
  isAbstract: true
})
export class CityCountOrderByAggregateInput {
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
}

@GraphQl.InputType("CityAvgOrderByAggregateInput", {
  isAbstract: true
})
export class CityAvgOrderByAggregateInput {
  @GraphQl.Field(() => SortOrder, {
    nullable: true
  })
  Id?: "asc" | "desc" | undefined;

  @GraphQl.Field(() => SortOrder, {
    nullable: true
  })
  Lat?: "asc" | "desc" | undefined;

  @GraphQl.Field(() => SortOrder, {
    nullable: true
  })
  Long?: "asc" | "desc" | undefined;
}

@GraphQl.InputType("CityMaxOrderByAggregateInput", {
  isAbstract: true
})
export class CityMaxOrderByAggregateInput {
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
}

@GraphQl.InputType("CityMinOrderByAggregateInput", {
  isAbstract: true
})
export class CityMinOrderByAggregateInput {
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
}

@GraphQl.InputType("CitySumOrderByAggregateInput", {
  isAbstract: true
})
export class CitySumOrderByAggregateInput {
  @GraphQl.Field(() => SortOrder, {
    nullable: true
  })
  Id?: "asc" | "desc" | undefined;

  @GraphQl.Field(() => SortOrder, {
    nullable: true
  })
  Lat?: "asc" | "desc" | undefined;

  @GraphQl.Field(() => SortOrder, {
    nullable: true
  })
  Long?: "asc" | "desc" | undefined;
}

//#endregion

//#region WeatherCondition
@GraphQl.InputType("WeatherConditionAvgOrderByAggregateInput", {
  isAbstract: true
})
export class WeatherConditionAvgOrderByAggregateInput {
  @GraphQl.Field(() => SortOrder, {
    nullable: true
  })
  Id?: "asc" | "desc" | undefined;
}

@GraphQl.InputType("WeatherConditionCountOrderByAggregateInput", {
  isAbstract: true
})
export class WeatherConditionCountOrderByAggregateInput {
  @GraphQl.Field(() => SortOrder, {
    nullable: true
  })
  Id?: "asc" | "desc" | undefined;

  @GraphQl.Field(() => SortOrder, {
    nullable: true
  })
  Name?: "asc" | "desc" | undefined;
}

@GraphQl.InputType("WeatherConditionMaxOrderByAggregateInput", {
  isAbstract: true
})
export class WeatherConditionMaxOrderByAggregateInput {
  @GraphQl.Field(() => SortOrder, {
    nullable: true
  })
  Id?: "asc" | "desc" | undefined;

  @GraphQl.Field(() => SortOrder, {
    nullable: true
  })
  Name?: "asc" | "desc" | undefined;
}

@GraphQl.InputType("WeatherConditionMinOrderByAggregateInput", {
  isAbstract: true
})
export class WeatherConditionMinOrderByAggregateInput {
  @GraphQl.Field(() => SortOrder, {
    nullable: true
  })
  Id?: "asc" | "desc" | undefined;

  @GraphQl.Field(() => SortOrder, {
    nullable: true
  })
  Name?: "asc" | "desc" | undefined;
}

@GraphQl.InputType("WeatherConditionSumOrderByAggregateInput", {
  isAbstract: true
})
export class WeatherConditionSumOrderByAggregateInput {
  @GraphQl.Field(() => SortOrder, {
    nullable: true
  })
  Id?: "asc" | "desc" | undefined;
}
//#endregion

//#region Forecast
@GraphQl.InputType("ForecastAvgOrderByAggregateInput", {
  isAbstract: true
})
export class ForecastAvgOrderByAggregateInput {
  @GraphQl.Field(() => SortOrder, {
    nullable: true
  })
  Id?: "asc" | "desc" | undefined;

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
  Prec_strength?: "asc" | "desc" | undefined;
}

@GraphQl.InputType("ForecastCountOrderByAggregateInput", {
  isAbstract: true
})
export class ForecastCountOrderByAggregateInput {
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
}

@GraphQl.InputType("ForecastMaxOrderByAggregateInput", {
  isAbstract: true
})
export class ForecastMaxOrderByAggregateInput {
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
}

@GraphQl.InputType("ForecastMinOrderByAggregateInput", {
  isAbstract: true
})
export class ForecastMinOrderByAggregateInput {
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
}

@GraphQl.InputType("ForecastSumOrderByAggregateInput", {
  isAbstract: true
})
export class ForecastSumOrderByAggregateInput {
  @GraphQl.Field(() => SortOrder, {
    nullable: true
  })
  Id?: "asc" | "desc" | undefined;

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
  Prec_strength?: "asc" | "desc" | undefined;
}
//#endregion
//#endregion