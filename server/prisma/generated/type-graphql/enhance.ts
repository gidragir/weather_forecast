import { ClassType } from "type-graphql";
import * as tslib from "tslib";
import * as crudResolvers from "./resolvers/crud/resolvers-crud.index";
import * as argsTypes from "./resolvers/crud/args.index";
import * as actionResolvers from "./resolvers/crud/resolvers-actions.index";
import * as relationResolvers from "./resolvers/relations/resolvers.index";
import * as models from "./models";
import * as outputTypes from "./resolvers/outputs";
import * as inputTypes from "./resolvers/inputs";

const crudResolversMap = {
  City: crudResolvers.CityCrudResolver,
  WeatherCondition: crudResolvers.WeatherConditionCrudResolver,
  Forecast: crudResolvers.ForecastCrudResolver
};
const actionResolversMap = {
  City: {
    aggregateCity: actionResolvers.AggregateCityResolver,
    createManyCity: actionResolvers.CreateManyCityResolver,
    createOneCity: actionResolvers.CreateOneCityResolver,
    deleteManyCity: actionResolvers.DeleteManyCityResolver,
    deleteOneCity: actionResolvers.DeleteOneCityResolver,
    findFirstCity: actionResolvers.FindFirstCityResolver,
    findFirstCityOrThrow: actionResolvers.FindFirstCityOrThrowResolver,
    cities: actionResolvers.FindManyCityResolver,
    city: actionResolvers.FindUniqueCityResolver,
    getCity: actionResolvers.FindUniqueCityOrThrowResolver,
    groupByCity: actionResolvers.GroupByCityResolver,
    updateManyCity: actionResolvers.UpdateManyCityResolver,
    updateOneCity: actionResolvers.UpdateOneCityResolver,
    upsertOneCity: actionResolvers.UpsertOneCityResolver
  },
  WeatherCondition: {
    aggregateWeatherCondition: actionResolvers.AggregateWeatherConditionResolver,
    createManyWeatherCondition: actionResolvers.CreateManyWeatherConditionResolver,
    createOneWeatherCondition: actionResolvers.CreateOneWeatherConditionResolver,
    deleteManyWeatherCondition: actionResolvers.DeleteManyWeatherConditionResolver,
    deleteOneWeatherCondition: actionResolvers.DeleteOneWeatherConditionResolver,
    findFirstWeatherCondition: actionResolvers.FindFirstWeatherConditionResolver,
    findFirstWeatherConditionOrThrow: actionResolvers.FindFirstWeatherConditionOrThrowResolver,
    weatherConditions: actionResolvers.FindManyWeatherConditionResolver,
    weatherCondition: actionResolvers.FindUniqueWeatherConditionResolver,
    getWeatherCondition: actionResolvers.FindUniqueWeatherConditionOrThrowResolver,
    groupByWeatherCondition: actionResolvers.GroupByWeatherConditionResolver,
    updateManyWeatherCondition: actionResolvers.UpdateManyWeatherConditionResolver,
    updateOneWeatherCondition: actionResolvers.UpdateOneWeatherConditionResolver,
    upsertOneWeatherCondition: actionResolvers.UpsertOneWeatherConditionResolver
  },
  Forecast: {
    aggregateForecast: actionResolvers.AggregateForecastResolver,
    createManyForecast: actionResolvers.CreateManyForecastResolver,
    createOneForecast: actionResolvers.CreateOneForecastResolver,
    deleteManyForecast: actionResolvers.DeleteManyForecastResolver,
    deleteOneForecast: actionResolvers.DeleteOneForecastResolver,
    findFirstForecast: actionResolvers.FindFirstForecastResolver,
    findFirstForecastOrThrow: actionResolvers.FindFirstForecastOrThrowResolver,
    forecasts: actionResolvers.FindManyForecastResolver,
    forecast: actionResolvers.FindUniqueForecastResolver,
    getForecast: actionResolvers.FindUniqueForecastOrThrowResolver,
    groupByForecast: actionResolvers.GroupByForecastResolver,
    updateManyForecast: actionResolvers.UpdateManyForecastResolver,
    updateOneForecast: actionResolvers.UpdateOneForecastResolver,
    upsertOneForecast: actionResolvers.UpsertOneForecastResolver
  }
};
const crudResolversInfo = {
  City: ["aggregateCity", "createManyCity", "createOneCity", "deleteManyCity", "deleteOneCity", "findFirstCity", "findFirstCityOrThrow", "cities", "city", "getCity", "groupByCity", "updateManyCity", "updateOneCity", "upsertOneCity"],
  WeatherCondition: ["aggregateWeatherCondition", "createManyWeatherCondition", "createOneWeatherCondition", "deleteManyWeatherCondition", "deleteOneWeatherCondition", "findFirstWeatherCondition", "findFirstWeatherConditionOrThrow", "weatherConditions", "weatherCondition", "getWeatherCondition", "groupByWeatherCondition", "updateManyWeatherCondition", "updateOneWeatherCondition", "upsertOneWeatherCondition"],
  Forecast: ["aggregateForecast", "createManyForecast", "createOneForecast", "deleteManyForecast", "deleteOneForecast", "findFirstForecast", "findFirstForecastOrThrow", "forecasts", "forecast", "getForecast", "groupByForecast", "updateManyForecast", "updateOneForecast", "upsertOneForecast"]
};
const argsInfo = {
  AggregateCityArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyCityArgs: ["data", "skipDuplicates"],
  CreateOneCityArgs: ["data"],
  DeleteManyCityArgs: ["where"],
  DeleteOneCityArgs: ["where"],
  FindFirstCityArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstCityOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyCityArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueCityArgs: ["where"],
  FindUniqueCityOrThrowArgs: ["where"],
  GroupByCityArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyCityArgs: ["data", "where"],
  UpdateOneCityArgs: ["data", "where"],
  UpsertOneCityArgs: ["where", "create", "update"],
  AggregateWeatherConditionArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyWeatherConditionArgs: ["data", "skipDuplicates"],
  CreateOneWeatherConditionArgs: ["data"],
  DeleteManyWeatherConditionArgs: ["where"],
  DeleteOneWeatherConditionArgs: ["where"],
  FindFirstWeatherConditionArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstWeatherConditionOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyWeatherConditionArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueWeatherConditionArgs: ["where"],
  FindUniqueWeatherConditionOrThrowArgs: ["where"],
  GroupByWeatherConditionArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyWeatherConditionArgs: ["data", "where"],
  UpdateOneWeatherConditionArgs: ["data", "where"],
  UpsertOneWeatherConditionArgs: ["where", "create", "update"],
  AggregateForecastArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyForecastArgs: ["data", "skipDuplicates"],
  CreateOneForecastArgs: ["data"],
  DeleteManyForecastArgs: ["where"],
  DeleteOneForecastArgs: ["where"],
  FindFirstForecastArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstForecastOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyForecastArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueForecastArgs: ["where"],
  FindUniqueForecastOrThrowArgs: ["where"],
  GroupByForecastArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyForecastArgs: ["data", "where"],
  UpdateOneForecastArgs: ["data", "where"],
  UpsertOneForecastArgs: ["where", "create", "update"]
};

type ResolverModelNames = keyof typeof crudResolversMap;

type ModelResolverActionNames<
  TModel extends ResolverModelNames
> = keyof typeof crudResolversMap[TModel]["prototype"];

export type ResolverActionsConfig<
  TModel extends ResolverModelNames
> = Partial<Record<ModelResolverActionNames<TModel> | "_all", MethodDecorator[]>>;

export type ResolversEnhanceMap = {
  [TModel in ResolverModelNames]?: ResolverActionsConfig<TModel>;
};

export function applyResolversEnhanceMap(
  resolversEnhanceMap: ResolversEnhanceMap,
) {
  for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
    const modelName = resolversEnhanceMapKey as keyof typeof resolversEnhanceMap;
    const crudTarget = crudResolversMap[modelName].prototype;
    const resolverActionsConfig = resolversEnhanceMap[modelName]!;
    const actionResolversConfig = actionResolversMap[modelName];
    if (resolverActionsConfig._all) {
      const allActionsDecorators = resolverActionsConfig._all;
      const resolverActionNames = crudResolversInfo[modelName as keyof typeof crudResolversInfo];
      for (const resolverActionName of resolverActionNames) {
        const actionTarget = (actionResolversConfig[
          resolverActionName as keyof typeof actionResolversConfig
        ] as Function).prototype;
        tslib.__decorate(allActionsDecorators, crudTarget, resolverActionName, null);
        tslib.__decorate(allActionsDecorators, actionTarget, resolverActionName, null);
      }
    }
    const resolverActionsToApply = Object.keys(resolverActionsConfig).filter(
      it => it !== "_all"
    );
    for (const resolverActionName of resolverActionsToApply) {
      const decorators = resolverActionsConfig[
        resolverActionName as keyof typeof resolverActionsConfig
      ] as MethodDecorator[];
      const actionTarget = (actionResolversConfig[
        resolverActionName as keyof typeof actionResolversConfig
      ] as Function).prototype;
      tslib.__decorate(decorators, crudTarget, resolverActionName, null);
      tslib.__decorate(decorators, actionTarget, resolverActionName, null);
    }
  }
}

type ArgsTypesNames = keyof typeof argsTypes;

type ArgFieldNames<TArgsType extends ArgsTypesNames> = Exclude<
  keyof typeof argsTypes[TArgsType]["prototype"],
  number | symbol
>;

type ArgFieldsConfig<
  TArgsType extends ArgsTypesNames
> = FieldsConfig<ArgFieldNames<TArgsType>>;

export type ArgConfig<TArgsType extends ArgsTypesNames> = {
  class?: ClassDecorator[];
  fields?: ArgFieldsConfig<TArgsType>;
};

export type ArgsTypesEnhanceMap = {
  [TArgsType in ArgsTypesNames]?: ArgConfig<TArgsType>;
};

export function applyArgsTypesEnhanceMap(
  argsTypesEnhanceMap: ArgsTypesEnhanceMap,
) {
  for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
    const argsTypeName = argsTypesEnhanceMapKey as keyof typeof argsTypesEnhanceMap;
    const typeConfig = argsTypesEnhanceMap[argsTypeName]!;
    const typeClass = argsTypes[argsTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      argsInfo[argsTypeName as keyof typeof argsInfo],
    );
  }
}

const relationResolversMap = {
  City: relationResolvers.CityRelationsResolver,
  WeatherCondition: relationResolvers.WeatherConditionRelationsResolver,
  Forecast: relationResolvers.ForecastRelationsResolver
};
const relationResolversInfo = {
  City: ["Forecasts"],
  WeatherCondition: ["Forecasts"],
  Forecast: ["City", "Condition"]
};

type RelationResolverModelNames = keyof typeof relationResolversMap;

type RelationResolverActionNames<
  TModel extends RelationResolverModelNames
> = keyof typeof relationResolversMap[TModel]["prototype"];

export type RelationResolverActionsConfig<TModel extends RelationResolverModelNames>
  = Partial<Record<RelationResolverActionNames<TModel> | "_all", MethodDecorator[]>>;

export type RelationResolversEnhanceMap = {
  [TModel in RelationResolverModelNames]?: RelationResolverActionsConfig<TModel>;
};

export function applyRelationResolversEnhanceMap(
  relationResolversEnhanceMap: RelationResolversEnhanceMap,
) {
  for (const relationResolversEnhanceMapKey of Object.keys(relationResolversEnhanceMap)) {
    const modelName = relationResolversEnhanceMapKey as keyof typeof relationResolversEnhanceMap;
    const relationResolverTarget = relationResolversMap[modelName].prototype;
    const relationResolverActionsConfig = relationResolversEnhanceMap[modelName]!;
    if (relationResolverActionsConfig._all) {
      const allActionsDecorators = relationResolverActionsConfig._all;
      const relationResolverActionNames = relationResolversInfo[modelName as keyof typeof relationResolversInfo];
      for (const relationResolverActionName of relationResolverActionNames) {
        tslib.__decorate(allActionsDecorators, relationResolverTarget, relationResolverActionName, null);
      }
    }
    const relationResolverActionsToApply = Object.keys(relationResolverActionsConfig).filter(
      it => it !== "_all"
    );
    for (const relationResolverActionName of relationResolverActionsToApply) {
      const decorators = relationResolverActionsConfig[
        relationResolverActionName as keyof typeof relationResolverActionsConfig
      ] as MethodDecorator[];
      tslib.__decorate(decorators, relationResolverTarget, relationResolverActionName, null);
    }
  }
}

type TypeConfig = {
  class?: ClassDecorator[];
  fields?: FieldsConfig;
};

type FieldsConfig<TTypeKeys extends string = string> = Partial<
  Record<TTypeKeys | "_all", PropertyDecorator[]>
>;

function applyTypeClassEnhanceConfig<
  TEnhanceConfig extends TypeConfig,
  TType extends object
>(
  enhanceConfig: TEnhanceConfig,
  typeClass: ClassType<TType>,
  typePrototype: TType,
  typeFieldNames: string[]
) {
  if (enhanceConfig.class) {
    tslib.__decorate(enhanceConfig.class, typeClass);
  }
  if (enhanceConfig.fields) {
    if (enhanceConfig.fields._all) {
      const allFieldsDecorators = enhanceConfig.fields._all;
      for (const typeFieldName of typeFieldNames) {
        tslib.__decorate(allFieldsDecorators, typePrototype, typeFieldName, void 0);
      }
    }
    const configFieldsToApply = Object.keys(enhanceConfig.fields).filter(
      it => it !== "_all"
    );
    for (const typeFieldName of configFieldsToApply) {
      const fieldDecorators = enhanceConfig.fields[typeFieldName]!;
      tslib.__decorate(fieldDecorators, typePrototype, typeFieldName, void 0);
    }
  }
}

const modelsInfo = {
  City: ["Id", "Name", "Lat", "Long"],
  WeatherCondition: ["Id", "Name"],
  Forecast: ["Id", "Day", "Hour", "CityId", "Temp", "Feels_like", "Cloudness", "ConditionId", "Daytime", "Prec_strength"]
};

type ModelNames = keyof typeof models;

type ModelFieldNames<TModel extends ModelNames> = Exclude<
  keyof typeof models[TModel]["prototype"],
  number | symbol
>;

type ModelFieldsConfig<TModel extends ModelNames> = FieldsConfig<
  ModelFieldNames<TModel>
>;

export type ModelConfig<TModel extends ModelNames> = {
  class?: ClassDecorator[];
  fields?: ModelFieldsConfig<TModel>;
};

export type ModelsEnhanceMap = {
  [TModel in ModelNames]?: ModelConfig<TModel>;
};

export function applyModelsEnhanceMap(modelsEnhanceMap: ModelsEnhanceMap) {
  for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
    const modelName = modelsEnhanceMapKey as keyof typeof modelsEnhanceMap;
    const modelConfig = modelsEnhanceMap[modelName]!;
    const modelClass = models[modelName];
    const modelTarget = modelClass.prototype;
    applyTypeClassEnhanceConfig(
      modelConfig,
      modelClass,
      modelTarget,
      modelsInfo[modelName as keyof typeof modelsInfo],
    );
  }
}

const outputsInfo = {
  AggregateCity: ["_count", "_avg", "_sum", "_min", "_max"],
  CityGroupBy: ["Id", "Name", "Lat", "Long", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateWeatherCondition: ["_count", "_avg", "_sum", "_min", "_max"],
  WeatherConditionGroupBy: ["Id", "Name", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateForecast: ["_count", "_avg", "_sum", "_min", "_max"],
  ForecastGroupBy: ["Id", "Day", "Hour", "CityId", "Temp", "Feels_like", "Cloudness", "ConditionId", "Daytime", "Prec_strength", "_count", "_avg", "_sum", "_min", "_max"],
  AffectedRowsOutput: ["count"],
  CityCount: ["Forecasts"],
  CityCountAggregate: ["Id", "Name", "Lat", "Long", "_all"],
  CityAvgAggregate: ["Id", "Lat", "Long"],
  CitySumAggregate: ["Id", "Lat", "Long"],
  CityMinAggregate: ["Id", "Name", "Lat", "Long"],
  CityMaxAggregate: ["Id", "Name", "Lat", "Long"],
  WeatherConditionCount: ["Forecasts"],
  WeatherConditionCountAggregate: ["Id", "Name", "_all"],
  WeatherConditionAvgAggregate: ["Id"],
  WeatherConditionSumAggregate: ["Id"],
  WeatherConditionMinAggregate: ["Id", "Name"],
  WeatherConditionMaxAggregate: ["Id", "Name"],
  ForecastCountAggregate: ["Id", "Day", "Hour", "CityId", "Temp", "Feels_like", "Cloudness", "ConditionId", "Daytime", "Prec_strength", "_all"],
  ForecastAvgAggregate: ["Id", "Hour", "CityId", "Temp", "Feels_like", "Cloudness", "ConditionId", "Prec_strength"],
  ForecastSumAggregate: ["Id", "Hour", "CityId", "Temp", "Feels_like", "Cloudness", "ConditionId", "Prec_strength"],
  ForecastMinAggregate: ["Id", "Day", "Hour", "CityId", "Temp", "Feels_like", "Cloudness", "ConditionId", "Daytime", "Prec_strength"],
  ForecastMaxAggregate: ["Id", "Day", "Hour", "CityId", "Temp", "Feels_like", "Cloudness", "ConditionId", "Daytime", "Prec_strength"]
};

type OutputTypesNames = keyof typeof outputTypes;

type OutputTypeFieldNames<TOutput extends OutputTypesNames> = Exclude<
  keyof typeof outputTypes[TOutput]["prototype"],
  number | symbol
>;

type OutputTypeFieldsConfig<
  TOutput extends OutputTypesNames
> = FieldsConfig<OutputTypeFieldNames<TOutput>>;

export type OutputTypeConfig<TOutput extends OutputTypesNames> = {
  class?: ClassDecorator[];
  fields?: OutputTypeFieldsConfig<TOutput>;
};

export type OutputTypesEnhanceMap = {
  [TOutput in OutputTypesNames]?: OutputTypeConfig<TOutput>;
};

export function applyOutputTypesEnhanceMap(
  outputTypesEnhanceMap: OutputTypesEnhanceMap,
) {
  for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
    const outputTypeName = outputTypeEnhanceMapKey as keyof typeof outputTypesEnhanceMap;
    const typeConfig = outputTypesEnhanceMap[outputTypeName]!;
    const typeClass = outputTypes[outputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      outputsInfo[outputTypeName as keyof typeof outputsInfo],
    );
  }
}

const inputsInfo = {
  CityWhereInput: ["AND", "OR", "NOT", "Id", "Name", "Lat", "Long", "Forecasts"],
  CityOrderByWithRelationInput: ["Id", "Name", "Lat", "Long", "Forecasts"],
  CityWhereUniqueInput: ["Id", "Name"],
  CityOrderByWithAggregationInput: ["Id", "Name", "Lat", "Long", "_count", "_avg", "_max", "_min", "_sum"],
  CityScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "Id", "Name", "Lat", "Long"],
  WeatherConditionWhereInput: ["AND", "OR", "NOT", "Id", "Name", "Forecasts"],
  WeatherConditionOrderByWithRelationInput: ["Id", "Name", "Forecasts"],
  WeatherConditionWhereUniqueInput: ["Id", "Name"],
  WeatherConditionOrderByWithAggregationInput: ["Id", "Name", "_count", "_avg", "_max", "_min", "_sum"],
  WeatherConditionScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "Id", "Name"],
  ForecastWhereInput: ["AND", "OR", "NOT", "Id", "Day", "Hour", "City", "CityId", "Temp", "Feels_like", "Cloudness", "Condition", "ConditionId", "Daytime", "Prec_strength"],
  ForecastOrderByWithRelationInput: ["Id", "Day", "Hour", "City", "CityId", "Temp", "Feels_like", "Cloudness", "Condition", "ConditionId", "Daytime", "Prec_strength"],
  ForecastWhereUniqueInput: ["Id"],
  ForecastOrderByWithAggregationInput: ["Id", "Day", "Hour", "CityId", "Temp", "Feels_like", "Cloudness", "ConditionId", "Daytime", "Prec_strength", "_count", "_avg", "_max", "_min", "_sum"],
  ForecastScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "Id", "Day", "Hour", "CityId", "Temp", "Feels_like", "Cloudness", "ConditionId", "Daytime", "Prec_strength"],
  CityCreateInput: ["Name", "Lat", "Long", "Forecasts"],
  CityUpdateInput: ["Name", "Lat", "Long", "Forecasts"],
  CityCreateManyInput: ["Id", "Name", "Lat", "Long"],
  CityUpdateManyMutationInput: ["Name", "Lat", "Long"],
  WeatherConditionCreateInput: ["Name", "Forecasts"],
  WeatherConditionUpdateInput: ["Name", "Forecasts"],
  WeatherConditionCreateManyInput: ["Id", "Name"],
  WeatherConditionUpdateManyMutationInput: ["Name"],
  ForecastCreateInput: ["Day", "Hour", "City", "Temp", "Feels_like", "Cloudness", "Condition", "Daytime", "Prec_strength"],
  ForecastUpdateInput: ["Day", "Hour", "City", "Temp", "Feels_like", "Cloudness", "Condition", "Daytime", "Prec_strength"],
  ForecastCreateManyInput: ["Id", "Day", "Hour", "CityId", "Temp", "Feels_like", "Cloudness", "ConditionId", "Daytime", "Prec_strength"],
  ForecastUpdateManyMutationInput: ["Day", "Hour", "Temp", "Feels_like", "Cloudness", "Daytime", "Prec_strength"],
  IntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  FloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  ForecastListRelationFilter: ["every", "some", "none"],
  ForecastOrderByRelationAggregateInput: ["_count"],
  CityCountOrderByAggregateInput: ["Id", "Name", "Lat", "Long"],
  CityAvgOrderByAggregateInput: ["Id", "Lat", "Long"],
  CityMaxOrderByAggregateInput: ["Id", "Name", "Lat", "Long"],
  CityMinOrderByAggregateInput: ["Id", "Name", "Lat", "Long"],
  CitySumOrderByAggregateInput: ["Id", "Lat", "Long"],
  IntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
  FloatWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  WeatherConditionCountOrderByAggregateInput: ["Id", "Name"],
  WeatherConditionAvgOrderByAggregateInput: ["Id"],
  WeatherConditionMaxOrderByAggregateInput: ["Id", "Name"],
  WeatherConditionMinOrderByAggregateInput: ["Id", "Name"],
  WeatherConditionSumOrderByAggregateInput: ["Id"],
  DateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  CityRelationFilter: ["is", "isNot"],
  WeatherConditionRelationFilter: ["is", "isNot"],
  ForecastCountOrderByAggregateInput: ["Id", "Day", "Hour", "CityId", "Temp", "Feels_like", "Cloudness", "ConditionId", "Daytime", "Prec_strength"],
  ForecastAvgOrderByAggregateInput: ["Id", "Hour", "CityId", "Temp", "Feels_like", "Cloudness", "ConditionId", "Prec_strength"],
  ForecastMaxOrderByAggregateInput: ["Id", "Day", "Hour", "CityId", "Temp", "Feels_like", "Cloudness", "ConditionId", "Daytime", "Prec_strength"],
  ForecastMinOrderByAggregateInput: ["Id", "Day", "Hour", "CityId", "Temp", "Feels_like", "Cloudness", "ConditionId", "Daytime", "Prec_strength"],
  ForecastSumOrderByAggregateInput: ["Id", "Hour", "CityId", "Temp", "Feels_like", "Cloudness", "ConditionId", "Prec_strength"],
  DateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  ForecastCreateNestedManyWithoutCityInput: ["create", "connectOrCreate", "createMany", "connect"],
  StringFieldUpdateOperationsInput: ["set"],
  FloatFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  ForecastUpdateManyWithoutCityNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  IntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  ForecastCreateNestedManyWithoutConditionInput: ["create", "connectOrCreate", "createMany", "connect"],
  ForecastUpdateManyWithoutConditionNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  CityCreateNestedOneWithoutForecastsInput: ["create", "connectOrCreate", "connect"],
  WeatherConditionCreateNestedOneWithoutForecastsInput: ["create", "connectOrCreate", "connect"],
  DateTimeFieldUpdateOperationsInput: ["set"],
  CityUpdateOneRequiredWithoutForecastsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  WeatherConditionUpdateOneRequiredWithoutForecastsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedFloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedIntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedFloatWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  NestedDateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedDateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  ForecastCreateWithoutCityInput: ["Day", "Hour", "Temp", "Feels_like", "Cloudness", "Condition", "Daytime", "Prec_strength"],
  ForecastCreateOrConnectWithoutCityInput: ["where", "create"],
  ForecastCreateManyCityInputEnvelope: ["data", "skipDuplicates"],
  ForecastUpsertWithWhereUniqueWithoutCityInput: ["where", "update", "create"],
  ForecastUpdateWithWhereUniqueWithoutCityInput: ["where", "data"],
  ForecastUpdateManyWithWhereWithoutCityInput: ["where", "data"],
  ForecastScalarWhereInput: ["AND", "OR", "NOT", "Id", "Day", "Hour", "CityId", "Temp", "Feels_like", "Cloudness", "ConditionId", "Daytime", "Prec_strength"],
  ForecastCreateWithoutConditionInput: ["Day", "Hour", "City", "Temp", "Feels_like", "Cloudness", "Daytime", "Prec_strength"],
  ForecastCreateOrConnectWithoutConditionInput: ["where", "create"],
  ForecastCreateManyConditionInputEnvelope: ["data", "skipDuplicates"],
  ForecastUpsertWithWhereUniqueWithoutConditionInput: ["where", "update", "create"],
  ForecastUpdateWithWhereUniqueWithoutConditionInput: ["where", "data"],
  ForecastUpdateManyWithWhereWithoutConditionInput: ["where", "data"],
  CityCreateWithoutForecastsInput: ["Name", "Lat", "Long"],
  CityCreateOrConnectWithoutForecastsInput: ["where", "create"],
  WeatherConditionCreateWithoutForecastsInput: ["Name"],
  WeatherConditionCreateOrConnectWithoutForecastsInput: ["where", "create"],
  CityUpsertWithoutForecastsInput: ["update", "create"],
  CityUpdateWithoutForecastsInput: ["Name", "Lat", "Long"],
  WeatherConditionUpsertWithoutForecastsInput: ["update", "create"],
  WeatherConditionUpdateWithoutForecastsInput: ["Name"],
  ForecastCreateManyCityInput: ["Id", "Day", "Hour", "Temp", "Feels_like", "Cloudness", "ConditionId", "Daytime", "Prec_strength"],
  ForecastUpdateWithoutCityInput: ["Day", "Hour", "Temp", "Feels_like", "Cloudness", "Condition", "Daytime", "Prec_strength"],
  ForecastCreateManyConditionInput: ["Id", "Day", "Hour", "CityId", "Temp", "Feels_like", "Cloudness", "Daytime", "Prec_strength"],
  ForecastUpdateWithoutConditionInput: ["Day", "Hour", "City", "Temp", "Feels_like", "Cloudness", "Daytime", "Prec_strength"]
};

type InputTypesNames = keyof typeof inputTypes;

type InputTypeFieldNames<TInput extends InputTypesNames> = Exclude<
  keyof typeof inputTypes[TInput]["prototype"],
  number | symbol
>;

type InputTypeFieldsConfig<
  TInput extends InputTypesNames
> = FieldsConfig<InputTypeFieldNames<TInput>>;

export type InputTypeConfig<TInput extends InputTypesNames> = {
  class?: ClassDecorator[];
  fields?: InputTypeFieldsConfig<TInput>;
};

export type InputTypesEnhanceMap = {
  [TInput in InputTypesNames]?: InputTypeConfig<TInput>;
};

export function applyInputTypesEnhanceMap(
  inputTypesEnhanceMap: InputTypesEnhanceMap,
) {
  for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
    const inputTypeName = inputTypeEnhanceMapKey as keyof typeof inputTypesEnhanceMap;
    const typeConfig = inputTypesEnhanceMap[inputTypeName]!;
    const typeClass = inputTypes[inputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      inputsInfo[inputTypeName as keyof typeof inputsInfo],
    );
  }
}

