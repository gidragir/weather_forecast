import * as TypeGraphQL from "type-graphql";

export enum ForecastScalarFieldEnum {
  Id = "Id",
  Day = "Day",
  Hour = "Hour",
  CityId = "CityId",
  Temp = "Temp",
  Feels_like = "Feels_like",
  Cloudness = "Cloudness",
  ConditionId = "ConditionId",
  Daytime = "Daytime",
  Prec_strength = "Prec_strength"
}
TypeGraphQL.registerEnumType(ForecastScalarFieldEnum, {
  name: "ForecastScalarFieldEnum",
  description: undefined,
});
