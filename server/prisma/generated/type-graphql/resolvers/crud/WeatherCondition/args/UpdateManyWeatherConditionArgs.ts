import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { WeatherConditionUpdateManyMutationInput } from "../../../inputs/WeatherConditionUpdateManyMutationInput";
import { WeatherConditionWhereInput } from "../../../inputs/WeatherConditionWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyWeatherConditionArgs {
  @TypeGraphQL.Field(_type => WeatherConditionUpdateManyMutationInput, {
    nullable: false
  })
  data!: WeatherConditionUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => WeatherConditionWhereInput, {
    nullable: true
  })
  where?: WeatherConditionWhereInput | undefined;
}
