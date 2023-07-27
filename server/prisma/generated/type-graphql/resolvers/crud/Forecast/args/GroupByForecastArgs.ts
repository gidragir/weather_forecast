import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ForecastOrderByWithAggregationInput } from "../../../inputs/ForecastOrderByWithAggregationInput";
import { ForecastScalarWhereWithAggregatesInput } from "../../../inputs/ForecastScalarWhereWithAggregatesInput";
import { ForecastWhereInput } from "../../../inputs/ForecastWhereInput";
import { ForecastScalarFieldEnum } from "../../../../enums/ForecastScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByForecastArgs {
  @TypeGraphQL.Field(_type => ForecastWhereInput, {
    nullable: true
  })
  where?: ForecastWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ForecastOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: ForecastOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [ForecastScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"Id" | "Day" | "Hour" | "CityId" | "Temp" | "Feels_like" | "Cloudness" | "ConditionId" | "Daytime" | "Prec_strength">;

  @TypeGraphQL.Field(_type => ForecastScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: ForecastScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
