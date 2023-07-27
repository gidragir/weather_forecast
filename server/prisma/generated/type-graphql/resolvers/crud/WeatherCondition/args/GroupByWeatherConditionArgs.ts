import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { WeatherConditionOrderByWithAggregationInput } from "../../../inputs/WeatherConditionOrderByWithAggregationInput";
import { WeatherConditionScalarWhereWithAggregatesInput } from "../../../inputs/WeatherConditionScalarWhereWithAggregatesInput";
import { WeatherConditionWhereInput } from "../../../inputs/WeatherConditionWhereInput";
import { WeatherConditionScalarFieldEnum } from "../../../../enums/WeatherConditionScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByWeatherConditionArgs {
  @TypeGraphQL.Field(_type => WeatherConditionWhereInput, {
    nullable: true
  })
  where?: WeatherConditionWhereInput | undefined;

  @TypeGraphQL.Field(_type => [WeatherConditionOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: WeatherConditionOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [WeatherConditionScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"Id" | "Name">;

  @TypeGraphQL.Field(_type => WeatherConditionScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: WeatherConditionScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
