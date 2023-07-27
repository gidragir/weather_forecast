import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WeatherConditionAvgOrderByAggregateInput } from "../inputs/WeatherConditionAvgOrderByAggregateInput";
import { WeatherConditionCountOrderByAggregateInput } from "../inputs/WeatherConditionCountOrderByAggregateInput";
import { WeatherConditionMaxOrderByAggregateInput } from "../inputs/WeatherConditionMaxOrderByAggregateInput";
import { WeatherConditionMinOrderByAggregateInput } from "../inputs/WeatherConditionMinOrderByAggregateInput";
import { WeatherConditionSumOrderByAggregateInput } from "../inputs/WeatherConditionSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("WeatherConditionOrderByWithAggregationInput", {
  isAbstract: true
})
export class WeatherConditionOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  Id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  Name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => WeatherConditionCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: WeatherConditionCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => WeatherConditionAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: WeatherConditionAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => WeatherConditionMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: WeatherConditionMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => WeatherConditionMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: WeatherConditionMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => WeatherConditionSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: WeatherConditionSumOrderByAggregateInput | undefined;
}
