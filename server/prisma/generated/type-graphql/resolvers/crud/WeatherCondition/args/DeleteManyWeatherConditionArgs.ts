import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { WeatherConditionWhereInput } from "../../../inputs/WeatherConditionWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyWeatherConditionArgs {
  @TypeGraphQL.Field(_type => WeatherConditionWhereInput, {
    nullable: true
  })
  where?: WeatherConditionWhereInput | undefined;
}
