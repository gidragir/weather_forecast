import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WeatherConditionCreateOrConnectWithoutForecastsInput } from "../inputs/WeatherConditionCreateOrConnectWithoutForecastsInput";
import { WeatherConditionCreateWithoutForecastsInput } from "../inputs/WeatherConditionCreateWithoutForecastsInput";
import { WeatherConditionWhereUniqueInput } from "../inputs/WeatherConditionWhereUniqueInput";

@TypeGraphQL.InputType("WeatherConditionCreateNestedOneWithoutForecastsInput", {
  isAbstract: true
})
export class WeatherConditionCreateNestedOneWithoutForecastsInput {
  @TypeGraphQL.Field(_type => WeatherConditionCreateWithoutForecastsInput, {
    nullable: true
  })
  create?: WeatherConditionCreateWithoutForecastsInput | undefined;

  @TypeGraphQL.Field(_type => WeatherConditionCreateOrConnectWithoutForecastsInput, {
    nullable: true
  })
  connectOrCreate?: WeatherConditionCreateOrConnectWithoutForecastsInput | undefined;

  @TypeGraphQL.Field(_type => WeatherConditionWhereUniqueInput, {
    nullable: true
  })
  connect?: WeatherConditionWhereUniqueInput | undefined;
}
