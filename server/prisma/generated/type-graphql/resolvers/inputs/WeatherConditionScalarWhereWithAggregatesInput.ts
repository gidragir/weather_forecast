import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("WeatherConditionScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class WeatherConditionScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [WeatherConditionScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: WeatherConditionScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [WeatherConditionScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: WeatherConditionScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [WeatherConditionScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: WeatherConditionScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  Id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  Name?: StringWithAggregatesFilter | undefined;
}
