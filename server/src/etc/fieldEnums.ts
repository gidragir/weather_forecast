import * as GraphQl from '@nestjs/graphql';
import { QueryMode, NestedStringFilter, NestedIntFilter, NestedFloatFilter, NestedDateTimeFilter,
  NestedStringWithAggregatesFilter, NestedIntWithAggregatesFilter, NestedFloatWithAggregatesFilter, NestedDateTimeWithAggregatesFilter } from '../etc/filters'

export enum ForecastScalarFieldEnum {
  Id = 'Id',
  Day = 'Day',
  Hour = 'Hour',
  CityId = 'CityId',
  Temp = 'Temp',
  Feels_like = 'Feels_like',
  Cloudness = 'Cloudness',
  ConditionId = 'ConditionId',
  Daytime = 'Daytime',
  Prec_strength = 'Prec_strength',
}
GraphQl.registerEnumType(ForecastScalarFieldEnum, {
  name: 'ForecastScalarFieldEnum',
  description: undefined,
});

export enum WeatherConditionScalarFieldEnum {
  Id = 'Id',
  Name = 'Name',
}
GraphQl.registerEnumType(WeatherConditionScalarFieldEnum, {
  name: 'WeatherConditionScalarFieldEnum',
  description: undefined,
});

export enum CityScalarFieldEnum {
  Id = 'Id',
  Name = 'Name',
  Lat = 'Lat',
  Long = 'Long',
}
GraphQl.registerEnumType(CityScalarFieldEnum, {
  name: 'CityScalarFieldEnum',
  description: undefined,
});


//#region UpdateFields
@GraphQl.InputType('DateTimeFieldUpdateOperationsInput', {
  isAbstract: true,
})
export class DateTimeFieldUpdateOperationsInput {
  @GraphQl.Field(() => Date, {
    nullable: true,
  })
  set?: Date | undefined;
}

@GraphQl.InputType('IntFieldUpdateOperationsInput', {
  isAbstract: true,
})
export class IntFieldUpdateOperationsInput {
  @GraphQl.Field(() => GraphQl.Int, {
    nullable: true,
  })
  set?: number | undefined;

  @GraphQl.Field(() => GraphQl.Int, {
    nullable: true,
  })
  increment?: number | undefined;

  @GraphQl.Field(() => GraphQl.Int, {
    nullable: true,
  })
  decrement?: number | undefined;

  @GraphQl.Field(() => GraphQl.Int, {
    nullable: true,
  })
  multiply?: number | undefined;

  @GraphQl.Field(() => GraphQl.Int, {
    nullable: true,
  })
  divide?: number | undefined;
}

@GraphQl.InputType('FloatFieldUpdateOperationsInput', {
  isAbstract: true,
})
export class FloatFieldUpdateOperationsInput {
  @GraphQl.Field(() => GraphQl.Float, {
    nullable: true,
  })
  set?: number | undefined;

  @GraphQl.Field(() => GraphQl.Float, {
    nullable: true,
  })
  increment?: number | undefined;

  @GraphQl.Field(() => GraphQl.Float, {
    nullable: true,
  })
  decrement?: number | undefined;

  @GraphQl.Field(() => GraphQl.Float, {
    nullable: true,
  })
  multiply?: number | undefined;

  @GraphQl.Field(() => GraphQl.Float, {
    nullable: true,
  })
  divide?: number | undefined;
}

@GraphQl.InputType('StringFieldUpdateOperationsInput', {
  isAbstract: true,
})
export class StringFieldUpdateOperationsInput {
  @GraphQl.Field(() => String, {
    nullable: true,
  })
  set?: string | undefined;
}
//#endregion

//#region Aggregates
@GraphQl.InputType("DateTimeWithAggregatesFilter", {
  isAbstract: true
})
export class DateTimeWithAggregatesFilter {
  @GraphQl.Field(() => Date, {
    nullable: true
  })
  equals?: Date | undefined;

  @GraphQl.Field(() => [Date], {
    nullable: true
  })
  in?: Date[] | undefined;

  @GraphQl.Field(() => [Date], {
    nullable: true
  })
  notIn?: Date[] | undefined;

  @GraphQl.Field(() => Date, {
    nullable: true
  })
  lt?: Date | undefined;

  @GraphQl.Field(() => Date, {
    nullable: true
  })
  lte?: Date | undefined;

  @GraphQl.Field(() => Date, {
    nullable: true
  })
  gt?: Date | undefined;

  @GraphQl.Field(() => Date, {
    nullable: true
  })
  gte?: Date | undefined;

  @GraphQl.Field(() => NestedDateTimeWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedDateTimeWithAggregatesFilter | undefined;

  @GraphQl.Field(() => NestedIntFilter, {
    nullable: true
  })
  _count?: NestedIntFilter | undefined;

  @GraphQl.Field(() => NestedDateTimeFilter, {
    nullable: true
  })
  _min?: NestedDateTimeFilter | undefined;

  @GraphQl.Field(() => NestedDateTimeFilter, {
    nullable: true
  })
  _max?: NestedDateTimeFilter | undefined;
}

@GraphQl.InputType("FloatWithAggregatesFilter", {
  isAbstract: true
})
export class FloatWithAggregatesFilter {
  @GraphQl.Field(() => GraphQl.Float, {
    nullable: true
  })
  equals?: number | undefined;

  @GraphQl.Field(() => [GraphQl.Float], {
    nullable: true
  })
  in?: number[] | undefined;

  @GraphQl.Field(() => [GraphQl.Float], {
    nullable: true
  })
  notIn?: number[] | undefined;

  @GraphQl.Field(() => GraphQl.Float, {
    nullable: true
  })
  lt?: number | undefined;

  @GraphQl.Field(() => GraphQl.Float, {
    nullable: true
  })
  lte?: number | undefined;

  @GraphQl.Field(() => GraphQl.Float, {
    nullable: true
  })
  gt?: number | undefined;

  @GraphQl.Field(() => GraphQl.Float, {
    nullable: true
  })
  gte?: number | undefined;

  @GraphQl.Field(() => NestedFloatWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedFloatWithAggregatesFilter | undefined;

  @GraphQl.Field(() => NestedIntFilter, {
    nullable: true
  })
  _count?: NestedIntFilter | undefined;

  @GraphQl.Field(() => NestedFloatFilter, {
    nullable: true
  })
  _avg?: NestedFloatFilter | undefined;

  @GraphQl.Field(() => NestedFloatFilter, {
    nullable: true
  })
  _sum?: NestedFloatFilter | undefined;

  @GraphQl.Field(() => NestedFloatFilter, {
    nullable: true
  })
  _min?: NestedFloatFilter | undefined;

  @GraphQl.Field(() => NestedFloatFilter, {
    nullable: true
  })
  _max?: NestedFloatFilter | undefined;
}

@GraphQl.InputType("IntWithAggregatesFilter", {
  isAbstract: true
})
export class IntWithAggregatesFilter {
  @GraphQl.Field(() => GraphQl.Int, {
    nullable: true
  })
  equals?: number | undefined;

  @GraphQl.Field(() => [GraphQl.Int], {
    nullable: true
  })
  in?: number[] | undefined;

  @GraphQl.Field(() => [GraphQl.Int], {
    nullable: true
  })
  notIn?: number[] | undefined;

  @GraphQl.Field(() => GraphQl.Int, {
    nullable: true
  })
  lt?: number | undefined;

  @GraphQl.Field(() => GraphQl.Int, {
    nullable: true
  })
  lte?: number | undefined;

  @GraphQl.Field(() => GraphQl.Int, {
    nullable: true
  })
  gt?: number | undefined;

  @GraphQl.Field(() => GraphQl.Int, {
    nullable: true
  })
  gte?: number | undefined;

  @GraphQl.Field(() => NestedIntWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedIntWithAggregatesFilter | undefined;

  @GraphQl.Field(() => NestedIntFilter, {
    nullable: true
  })
  _count?: NestedIntFilter | undefined;

  @GraphQl.Field(() => NestedFloatFilter, {
    nullable: true
  })
  _avg?: NestedFloatFilter | undefined;

  @GraphQl.Field(() => NestedIntFilter, {
    nullable: true
  })
  _sum?: NestedIntFilter | undefined;

  @GraphQl.Field(() => NestedIntFilter, {
    nullable: true
  })
  _min?: NestedIntFilter | undefined;

  @GraphQl.Field(() => NestedIntFilter, {
    nullable: true
  })
  _max?: NestedIntFilter | undefined;
}

@GraphQl.InputType("StringWithAggregatesFilter", {
  isAbstract: true
})
export class StringWithAggregatesFilter {
  @GraphQl.Field(() => String, {
    nullable: true
  })
  equals?: string | undefined;

  @GraphQl.Field(() => [String], {
    nullable: true
  })
  in?: string[] | undefined;

  @GraphQl.Field(() => [String], {
    nullable: true
  })
  notIn?: string[] | undefined;

  @GraphQl.Field(() => String, {
    nullable: true
  })
  lt?: string | undefined;

  @GraphQl.Field(() => String, {
    nullable: true
  })
  lte?: string | undefined;

  @GraphQl.Field(() => String, {
    nullable: true
  })
  gt?: string | undefined;

  @GraphQl.Field(() => String, {
    nullable: true
  })
  gte?: string | undefined;

  @GraphQl.Field(() => String, {
    nullable: true
  })
  contains?: string | undefined;

  @GraphQl.Field(() => String, {
    nullable: true
  })
  startsWith?: string | undefined;

  @GraphQl.Field(() => String, {
    nullable: true
  })
  endsWith?: string | undefined;

  @GraphQl.Field(() => QueryMode, {
    nullable: true
  })
  mode?: "default" | "insensitive" | undefined;

  @GraphQl.Field(() => NestedStringWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedStringWithAggregatesFilter | undefined;

  @GraphQl.Field(() => NestedIntFilter, {
    nullable: true
  })
  _count?: NestedIntFilter | undefined;

  @GraphQl.Field(() => NestedStringFilter, {
    nullable: true
  })
  _min?: NestedStringFilter | undefined;

  @GraphQl.Field(() => NestedStringFilter, {
    nullable: true
  })
  _max?: NestedStringFilter | undefined;
}
//#endregion