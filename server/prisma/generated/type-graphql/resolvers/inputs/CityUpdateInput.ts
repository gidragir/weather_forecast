import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FloatFieldUpdateOperationsInput } from "../inputs/FloatFieldUpdateOperationsInput";
import { ForecastUpdateManyWithoutCityNestedInput } from "../inputs/ForecastUpdateManyWithoutCityNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("CityUpdateInput", {
  isAbstract: true
})
export class CityUpdateInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  Name?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => FloatFieldUpdateOperationsInput, {
    nullable: true
  })
  Lat?: FloatFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => FloatFieldUpdateOperationsInput, {
    nullable: true
  })
  Long?: FloatFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => ForecastUpdateManyWithoutCityNestedInput, {
    nullable: true
  })
  Forecasts?: ForecastUpdateManyWithoutCityNestedInput | undefined;
}
