import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { WeatherConditionWhereUniqueInput } from "../../../inputs/WeatherConditionWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueWeatherConditionOrThrowArgs {
  @TypeGraphQL.Field(_type => WeatherConditionWhereUniqueInput, {
    nullable: false
  })
  where!: WeatherConditionWhereUniqueInput;
}
