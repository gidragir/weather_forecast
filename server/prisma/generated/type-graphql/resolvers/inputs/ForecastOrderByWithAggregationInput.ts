import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ForecastAvgOrderByAggregateInput } from "../inputs/ForecastAvgOrderByAggregateInput";
import { ForecastCountOrderByAggregateInput } from "../inputs/ForecastCountOrderByAggregateInput";
import { ForecastMaxOrderByAggregateInput } from "../inputs/ForecastMaxOrderByAggregateInput";
import { ForecastMinOrderByAggregateInput } from "../inputs/ForecastMinOrderByAggregateInput";
import { ForecastSumOrderByAggregateInput } from "../inputs/ForecastSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ForecastOrderByWithAggregationInput", {
  isAbstract: true
})
export class ForecastOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  Id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  Day?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  Hour?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  CityId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  Temp?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  Feels_like?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  Cloudness?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  ConditionId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  Daytime?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  Prec_strength?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ForecastCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: ForecastCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ForecastAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: ForecastAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ForecastMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: ForecastMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ForecastMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: ForecastMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ForecastSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: ForecastSumOrderByAggregateInput | undefined;
}
