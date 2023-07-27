import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WeatherConditionCreateOrConnectWithoutForecastsInput } from "../inputs/WeatherConditionCreateOrConnectWithoutForecastsInput";
import { WeatherConditionCreateWithoutForecastsInput } from "../inputs/WeatherConditionCreateWithoutForecastsInput";
import { WeatherConditionUpdateWithoutForecastsInput } from "../inputs/WeatherConditionUpdateWithoutForecastsInput";
import { WeatherConditionUpsertWithoutForecastsInput } from "../inputs/WeatherConditionUpsertWithoutForecastsInput";
import { WeatherConditionWhereUniqueInput } from "../inputs/WeatherConditionWhereUniqueInput";

@TypeGraphQL.InputType("WeatherConditionUpdateOneRequiredWithoutForecastsNestedInput", {
  isAbstract: true
})
export class WeatherConditionUpdateOneRequiredWithoutForecastsNestedInput {
  @TypeGraphQL.Field(_type => WeatherConditionCreateWithoutForecastsInput, {
    nullable: true
  })
  create?: WeatherConditionCreateWithoutForecastsInput | undefined;

  @TypeGraphQL.Field(_type => WeatherConditionCreateOrConnectWithoutForecastsInput, {
    nullable: true
  })
  connectOrCreate?: WeatherConditionCreateOrConnectWithoutForecastsInput | undefined;

  @TypeGraphQL.Field(_type => WeatherConditionUpsertWithoutForecastsInput, {
    nullable: true
  })
  upsert?: WeatherConditionUpsertWithoutForecastsInput | undefined;

  @TypeGraphQL.Field(_type => WeatherConditionWhereUniqueInput, {
    nullable: true
  })
  connect?: WeatherConditionWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => WeatherConditionUpdateWithoutForecastsInput, {
    nullable: true
  })
  update?: WeatherConditionUpdateWithoutForecastsInput | undefined;
}
