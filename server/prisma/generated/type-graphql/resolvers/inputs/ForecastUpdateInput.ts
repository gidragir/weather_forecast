import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CityUpdateOneRequiredWithoutForecastsNestedInput } from "../inputs/CityUpdateOneRequiredWithoutForecastsNestedInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { FloatFieldUpdateOperationsInput } from "../inputs/FloatFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { WeatherConditionUpdateOneRequiredWithoutForecastsNestedInput } from "../inputs/WeatherConditionUpdateOneRequiredWithoutForecastsNestedInput";

@TypeGraphQL.InputType("ForecastUpdateInput", {
  isAbstract: true
})
export class ForecastUpdateInput {
  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  Day?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  Hour?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => CityUpdateOneRequiredWithoutForecastsNestedInput, {
    nullable: true
  })
  City?: CityUpdateOneRequiredWithoutForecastsNestedInput | undefined;

  @TypeGraphQL.Field(_type => FloatFieldUpdateOperationsInput, {
    nullable: true
  })
  Temp?: FloatFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => FloatFieldUpdateOperationsInput, {
    nullable: true
  })
  Feels_like?: FloatFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => FloatFieldUpdateOperationsInput, {
    nullable: true
  })
  Cloudness?: FloatFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => WeatherConditionUpdateOneRequiredWithoutForecastsNestedInput, {
    nullable: true
  })
  Condition?: WeatherConditionUpdateOneRequiredWithoutForecastsNestedInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  Daytime?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => FloatFieldUpdateOperationsInput, {
    nullable: true
  })
  Prec_strength?: FloatFieldUpdateOperationsInput | undefined;
}
