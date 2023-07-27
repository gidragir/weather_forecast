import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ForecastListRelationFilter } from "../inputs/ForecastListRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("WeatherConditionWhereInput", {
  isAbstract: true
})
export class WeatherConditionWhereInput {
  @TypeGraphQL.Field(_type => [WeatherConditionWhereInput], {
    nullable: true
  })
  AND?: WeatherConditionWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [WeatherConditionWhereInput], {
    nullable: true
  })
  OR?: WeatherConditionWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [WeatherConditionWhereInput], {
    nullable: true
  })
  NOT?: WeatherConditionWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  Id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  Name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => ForecastListRelationFilter, {
    nullable: true
  })
  Forecasts?: ForecastListRelationFilter | undefined;
}
