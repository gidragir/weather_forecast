import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ForecastCreateNestedManyWithoutCityInput } from "../inputs/ForecastCreateNestedManyWithoutCityInput";

@TypeGraphQL.InputType("CityCreateInput", {
  isAbstract: true
})
export class CityCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  Name!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: false
  })
  Lat!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: false
  })
  Long!: number;

  @TypeGraphQL.Field(_type => ForecastCreateNestedManyWithoutCityInput, {
    nullable: true
  })
  Forecasts?: ForecastCreateNestedManyWithoutCityInput | undefined;
}
