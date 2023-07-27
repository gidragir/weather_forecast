import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("WeatherConditionCreateWithoutForecastsInput", {
  isAbstract: true
})
export class WeatherConditionCreateWithoutForecastsInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  Name!: string;
}
