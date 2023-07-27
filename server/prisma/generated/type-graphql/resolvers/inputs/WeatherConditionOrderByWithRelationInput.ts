import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ForecastOrderByRelationAggregateInput } from "../inputs/ForecastOrderByRelationAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("WeatherConditionOrderByWithRelationInput", {
  isAbstract: true
})
export class WeatherConditionOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  Id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  Name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ForecastOrderByRelationAggregateInput, {
    nullable: true
  })
  Forecasts?: ForecastOrderByRelationAggregateInput | undefined;
}
