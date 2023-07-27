import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { WeatherConditionCreateManyInput } from "../../../inputs/WeatherConditionCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyWeatherConditionArgs {
  @TypeGraphQL.Field(_type => [WeatherConditionCreateManyInput], {
    nullable: false
  })
  data!: WeatherConditionCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
