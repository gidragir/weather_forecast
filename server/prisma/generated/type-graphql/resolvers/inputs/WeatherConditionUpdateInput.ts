import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ForecastUpdateManyWithoutConditionNestedInput } from "../inputs/ForecastUpdateManyWithoutConditionNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("WeatherConditionUpdateInput", {
  isAbstract: true
})
export class WeatherConditionUpdateInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  Name?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => ForecastUpdateManyWithoutConditionNestedInput, {
    nullable: true
  })
  Forecasts?: ForecastUpdateManyWithoutConditionNestedInput | undefined;
}
