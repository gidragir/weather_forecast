import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { WeatherConditionUpdateInput } from "../../../inputs/WeatherConditionUpdateInput";
import { WeatherConditionWhereUniqueInput } from "../../../inputs/WeatherConditionWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneWeatherConditionArgs {
  @TypeGraphQL.Field(_type => WeatherConditionUpdateInput, {
    nullable: false
  })
  data!: WeatherConditionUpdateInput;

  @TypeGraphQL.Field(_type => WeatherConditionWhereUniqueInput, {
    nullable: false
  })
  where!: WeatherConditionWhereUniqueInput;
}
