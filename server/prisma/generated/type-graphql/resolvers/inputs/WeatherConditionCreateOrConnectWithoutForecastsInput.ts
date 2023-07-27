import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WeatherConditionCreateWithoutForecastsInput } from "../inputs/WeatherConditionCreateWithoutForecastsInput";
import { WeatherConditionWhereUniqueInput } from "../inputs/WeatherConditionWhereUniqueInput";

@TypeGraphQL.InputType("WeatherConditionCreateOrConnectWithoutForecastsInput", {
  isAbstract: true
})
export class WeatherConditionCreateOrConnectWithoutForecastsInput {
  @TypeGraphQL.Field(_type => WeatherConditionWhereUniqueInput, {
    nullable: false
  })
  where!: WeatherConditionWhereUniqueInput;

  @TypeGraphQL.Field(_type => WeatherConditionCreateWithoutForecastsInput, {
    nullable: false
  })
  create!: WeatherConditionCreateWithoutForecastsInput;
}
