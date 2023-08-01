import * as GraphQl from '@nestjs/graphql';
import { CityWhereInput, WeatherConditionWhereInput } from './inputs';

export enum QueryMode {
  'default' = 'default',
  insensitive = 'insensitive',
}
GraphQl.registerEnumType(QueryMode, {
  name: 'QueryMode',
  description: undefined,
});


//#region NestedFilters
@GraphQl.InputType('NestedDateTimeFilter', {
  isAbstract: true,
})
export class NestedDateTimeFilter {
  @GraphQl.Field(() => Date, {
    nullable: true,
  })
  equals?: Date | undefined;

  @GraphQl.Field(() => [Date], {
    nullable: true,
  })
  in?: Date[] | undefined;

  @GraphQl.Field(() => [Date], {
    nullable: true,
  })
  notIn?: Date[] | undefined;

  @GraphQl.Field(() => Date, {
    nullable: true,
  })
  lt?: Date | undefined;

  @GraphQl.Field(() => Date, {
    nullable: true,
  })
  lte?: Date | undefined;

  @GraphQl.Field(() => Date, {
    nullable: true,
  })
  gt?: Date | undefined;

  @GraphQl.Field(() => Date, {
    nullable: true,
  })
  gte?: Date | undefined;

  @GraphQl.Field(() => NestedDateTimeFilter, {
    nullable: true,
  })
  not?: NestedDateTimeFilter | undefined;
}

@GraphQl.InputType('NestedFloatFilter', {
  isAbstract: true,
})
export class NestedFloatFilter {
  @GraphQl.Field(() => GraphQl.Float, {
    nullable: true,
  })
  equals?: number | undefined;

  @GraphQl.Field(() => [GraphQl.Float], {
    nullable: true,
  })
  in?: number[] | undefined;

  @GraphQl.Field(() => [GraphQl.Float], {
    nullable: true,
  })
  notIn?: number[] | undefined;

  @GraphQl.Field(() => GraphQl.Float, {
    nullable: true,
  })
  lt?: number | undefined;

  @GraphQl.Field(() => GraphQl.Float, {
    nullable: true,
  })
  lte?: number | undefined;

  @GraphQl.Field(() => GraphQl.Float, {
    nullable: true,
  })
  gt?: number | undefined;

  @GraphQl.Field(() => GraphQl.Float, {
    nullable: true,
  })
  gte?: number | undefined;

  @GraphQl.Field(() => NestedFloatFilter, {
    nullable: true,
  })
  not?: NestedFloatFilter | undefined;
}

@GraphQl.InputType('NestedIntFilter', {
  isAbstract: true,
})
export class NestedIntFilter {
  @GraphQl.Field(() => GraphQl.Int, {
    nullable: true,
  })
  equals?: number | undefined;

  @GraphQl.Field(() => [GraphQl.Int], {
    nullable: true,
  })
  in?: number[] | undefined;

  @GraphQl.Field(() => [GraphQl.Int], {
    nullable: true,
  })
  notIn?: number[] | undefined;

  @GraphQl.Field(() => GraphQl.Int, {
    nullable: true,
  })
  lt?: number | undefined;

  @GraphQl.Field(() => GraphQl.Int, {
    nullable: true,
  })
  lte?: number | undefined;

  @GraphQl.Field(() => GraphQl.Int, {
    nullable: true,
  })
  gt?: number | undefined;

  @GraphQl.Field(() => GraphQl.Int, {
    nullable: true,
  })
  gte?: number | undefined;

  @GraphQl.Field(() => NestedIntFilter, {
    nullable: true,
  })
  not?: NestedIntFilter | undefined;
}

@GraphQl.InputType('NestedStringFilter', {
  isAbstract: true,
})
export class NestedStringFilter {
  @GraphQl.Field(() => String, {
    nullable: true,
  })
  equals?: string | undefined;

  @GraphQl.Field(() => [String], {
    nullable: true,
  })
  in?: string[] | undefined;

  @GraphQl.Field(() => [String], {
    nullable: true,
  })
  notIn?: string[] | undefined;

  @GraphQl.Field(() => String, {
    nullable: true,
  })
  lt?: string | undefined;

  @GraphQl.Field(() => String, {
    nullable: true,
  })
  lte?: string | undefined;

  @GraphQl.Field(() => String, {
    nullable: true,
  })
  gt?: string | undefined;

  @GraphQl.Field(() => String, {
    nullable: true,
  })
  gte?: string | undefined;

  @GraphQl.Field(() => String, {
    nullable: true,
  })
  contains?: string | undefined;

  @GraphQl.Field(() => String, {
    nullable: true,
  })
  startsWith?: string | undefined;

  @GraphQl.Field(() => String, {
    nullable: true,
  })
  endsWith?: string | undefined;

  @GraphQl.Field(() => NestedStringFilter, {
    nullable: true,
  })
  not?: NestedStringFilter | undefined;
}


@GraphQl.InputType("NestedStringWithAggregatesFilter", {
  isAbstract: true
})
export class NestedStringWithAggregatesFilter {
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

@GraphQl.InputType("NestedIntWithAggregatesFilter", {
  isAbstract: true
})
export class NestedIntWithAggregatesFilter {
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

@GraphQl.InputType("NestedFloatWithAggregatesFilter", {
  isAbstract: true
})
export class NestedFloatWithAggregatesFilter {
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

@GraphQl.InputType("NestedDateTimeWithAggregatesFilter", {
  isAbstract: true
})
export class NestedDateTimeWithAggregatesFilter {
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

//#endregion


//#region PrimitiveFilters
@GraphQl.InputType('DateTimeFilter', {
  isAbstract: true,
})
export class DateTimeFilter {
  @GraphQl.Field(() => Date, {
    nullable: true,
  })
  equals?: Date | undefined;

  @GraphQl.Field(() => [Date], {
    nullable: true,
  })
  in?: Date[] | undefined;

  @GraphQl.Field(() => [Date], {
    nullable: true,
  })
  notIn?: Date[] | undefined;

  @GraphQl.Field(() => Date, {
    nullable: true,
  })
  lt?: Date | undefined;

  @GraphQl.Field(() => Date, {
    nullable: true,
  })
  lte?: Date | undefined;

  @GraphQl.Field(() => Date, {
    nullable: true,
  })
  gt?: Date | undefined;

  @GraphQl.Field(() => Date, {
    nullable: true,
  })
  gte?: Date | undefined;

  @GraphQl.Field(() => NestedDateTimeFilter, {
    nullable: true,
  })
  not?: NestedDateTimeFilter | undefined;
}

@GraphQl.InputType('FloatFilter', {
  isAbstract: true,
})
export class FloatFilter {
  @GraphQl.Field(() => GraphQl.Float, {
    nullable: true,
  })
  equals?: number | undefined;

  @GraphQl.Field(() => [GraphQl.Float], {
    nullable: true,
  })
  in?: number[] | undefined;

  @GraphQl.Field(() => [GraphQl.Float], {
    nullable: true,
  })
  notIn?: number[] | undefined;

  @GraphQl.Field(() => GraphQl.Float, {
    nullable: true,
  })
  lt?: number | undefined;

  @GraphQl.Field(() => GraphQl.Float, {
    nullable: true,
  })
  lte?: number | undefined;

  @GraphQl.Field(() => GraphQl.Float, {
    nullable: true,
  })
  gt?: number | undefined;

  @GraphQl.Field(() => GraphQl.Float, {
    nullable: true,
  })
  gte?: number | undefined;

  @GraphQl.Field(() => NestedFloatFilter, {
    nullable: true,
  })
  not?: NestedFloatFilter | undefined;
}

@GraphQl.InputType('IntFilter', {
  isAbstract: true,
})
export class IntFilter {
  @GraphQl.Field(() => GraphQl.Int, {
    nullable: true,
  })
  equals?: number | undefined;

  @GraphQl.Field(() => [GraphQl.Int], {
    nullable: true,
  })
  in?: number[] | undefined;

  @GraphQl.Field(() => [GraphQl.Int], {
    nullable: true,
  })
  notIn?: number[] | undefined;

  @GraphQl.Field(() => GraphQl.Int, {
    nullable: true,
  })
  lt?: number | undefined;

  @GraphQl.Field(() => GraphQl.Int, {
    nullable: true,
  })
  lte?: number | undefined;

  @GraphQl.Field(() => GraphQl.Int, {
    nullable: true,
  })
  gt?: number | undefined;

  @GraphQl.Field(() => GraphQl.Int, {
    nullable: true,
  })
  gte?: number | undefined;

  @GraphQl.Field(() => NestedIntFilter, {
    nullable: true,
  })
  not?: NestedIntFilter | undefined;
}

@GraphQl.InputType('StringFilter', {
  isAbstract: true,
})
export class StringFilter {
  @GraphQl.Field(() => String, {
    nullable: true,
  })
  equals?: string | undefined;

  @GraphQl.Field(() => [String], {
    nullable: true,
  })
  in?: string[] | undefined;

  @GraphQl.Field(() => [String], {
    nullable: true,
  })
  notIn?: string[] | undefined;

  @GraphQl.Field(() => String, {
    nullable: true,
  })
  lt?: string | undefined;

  @GraphQl.Field(() => String, {
    nullable: true,
  })
  lte?: string | undefined;

  @GraphQl.Field(() => String, {
    nullable: true,
  })
  gt?: string | undefined;

  @GraphQl.Field(() => String, {
    nullable: true,
  })
  gte?: string | undefined;

  @GraphQl.Field(() => String, {
    nullable: true,
  })
  contains?: string | undefined;

  @GraphQl.Field(() => String, {
    nullable: true,
  })
  startsWith?: string | undefined;

  @GraphQl.Field(() => String, {
    nullable: true,
  })
  endsWith?: string | undefined;

  @GraphQl.Field(() => QueryMode, {
    nullable: true,
  })
  mode?: 'default' | 'insensitive' | undefined;

  @GraphQl.Field(() => NestedStringFilter, {
    nullable: true,
  })
  not?: NestedStringFilter | undefined;
}
//#endregion


@GraphQl.InputType('CityRelationFilter', {
  isAbstract: true,
})
export class CityRelationFilter {
  @GraphQl.Field(() => CityWhereInput, {
    nullable: true,
  })
  is?: CityWhereInput | undefined;

  @GraphQl.Field(() => CityWhereInput, {
    nullable: true,
  })
  isNot?: CityWhereInput | undefined;
}

@GraphQl.InputType('WeatherConditionRelationFilter', {
  isAbstract: true,
})
export class WeatherConditionRelationFilter {
  @GraphQl.Field(() => WeatherConditionWhereInput, {
    nullable: true,
  })
  is?: WeatherConditionWhereInput | undefined;

  @GraphQl.Field(() => WeatherConditionWhereInput, {
    nullable: true,
  })
  isNot?: WeatherConditionWhereInput | undefined;
}