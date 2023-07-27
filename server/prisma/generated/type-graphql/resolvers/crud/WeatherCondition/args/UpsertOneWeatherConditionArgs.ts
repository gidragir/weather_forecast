import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { WeatherConditionCreateInput } from "../../../inputs/WeatherConditionCreateInput";
import { WeatherConditionUpdateInput } from "../../../inputs/WeatherConditionUpdateInput";
import { WeatherConditionWhereUniqueInput } from "../../../inputs/WeatherConditionWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneWeatherConditionArgs {
  @TypeGraphQL.Field(_type => WeatherConditionWhereUniqueInput, {
    nullable: false
  })
  where!: WeatherConditionWhereUniqueInput;

  @TypeGraphQL.Field(_type => WeatherConditionCreateInput, {
    nullable: false
  })
  create!: WeatherConditionCreateInput;

  @TypeGraphQL.Field(_type => WeatherConditionUpdateInput, {
    nullable: false
  })
  update!: WeatherConditionUpdateInput;
}
