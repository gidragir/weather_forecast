import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WeatherConditionCreateWithoutForecastsInput } from "../inputs/WeatherConditionCreateWithoutForecastsInput";
import { WeatherConditionUpdateWithoutForecastsInput } from "../inputs/WeatherConditionUpdateWithoutForecastsInput";

@TypeGraphQL.InputType("WeatherConditionUpsertWithoutForecastsInput", {
  isAbstract: true
})
export class WeatherConditionUpsertWithoutForecastsInput {
  @TypeGraphQL.Field(_type => WeatherConditionUpdateWithoutForecastsInput, {
    nullable: false
  })
  update!: WeatherConditionUpdateWithoutForecastsInput;

  @TypeGraphQL.Field(_type => WeatherConditionCreateWithoutForecastsInput, {
    nullable: false
  })
  create!: WeatherConditionCreateWithoutForecastsInput;
}
