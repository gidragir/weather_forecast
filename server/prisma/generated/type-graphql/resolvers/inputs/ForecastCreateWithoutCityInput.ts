import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WeatherConditionCreateNestedOneWithoutForecastsInput } from "../inputs/WeatherConditionCreateNestedOneWithoutForecastsInput";

@TypeGraphQL.InputType("ForecastCreateWithoutCityInput", {
  isAbstract: true
})
export class ForecastCreateWithoutCityInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  Day!: Date;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  Hour!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: false
  })
  Temp!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: false
  })
  Feels_like!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: false
  })
  Cloudness!: number;

  @TypeGraphQL.Field(_type => WeatherConditionCreateNestedOneWithoutForecastsInput, {
    nullable: false
  })
  Condition!: WeatherConditionCreateNestedOneWithoutForecastsInput;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  Daytime!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: false
  })
  Prec_strength!: number;
}
