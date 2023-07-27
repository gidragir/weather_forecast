import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { WeatherConditionCreateInput } from "../../../inputs/WeatherConditionCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneWeatherConditionArgs {
  @TypeGraphQL.Field(_type => WeatherConditionCreateInput, {
    nullable: false
  })
  data!: WeatherConditionCreateInput;
}
