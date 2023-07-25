import * as GraphQl from '@nestjs/graphql';

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
