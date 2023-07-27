import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WeatherConditionWhereInput } from "../inputs/WeatherConditionWhereInput";

@TypeGraphQL.InputType("WeatherConditionRelationFilter", {
  isAbstract: true
})
export class WeatherConditionRelationFilter {
  @TypeGraphQL.Field(_type => WeatherConditionWhereInput, {
    nullable: true
  })
  is?: WeatherConditionWhereInput | undefined;

  @TypeGraphQL.Field(_type => WeatherConditionWhereInput, {
    nullable: true
  })
  isNot?: WeatherConditionWhereInput | undefined;
}
