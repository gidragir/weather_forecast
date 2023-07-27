import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ForecastCreateNestedManyWithoutConditionInput } from "../inputs/ForecastCreateNestedManyWithoutConditionInput";

@TypeGraphQL.InputType("WeatherConditionCreateInput", {
  isAbstract: true
})
export class WeatherConditionCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  Name!: string;

  @TypeGraphQL.Field(_type => ForecastCreateNestedManyWithoutConditionInput, {
    nullable: true
  })
  Forecasts?: ForecastCreateNestedManyWithoutConditionInput | undefined;
}
