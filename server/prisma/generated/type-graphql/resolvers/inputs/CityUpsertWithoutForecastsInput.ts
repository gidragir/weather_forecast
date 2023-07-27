import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CityCreateWithoutForecastsInput } from "../inputs/CityCreateWithoutForecastsInput";
import { CityUpdateWithoutForecastsInput } from "../inputs/CityUpdateWithoutForecastsInput";

@TypeGraphQL.InputType("CityUpsertWithoutForecastsInput", {
  isAbstract: true
})
export class CityUpsertWithoutForecastsInput {
  @TypeGraphQL.Field(_type => CityUpdateWithoutForecastsInput, {
    nullable: false
  })
  update!: CityUpdateWithoutForecastsInput;

  @TypeGraphQL.Field(_type => CityCreateWithoutForecastsInput, {
    nullable: false
  })
  create!: CityCreateWithoutForecastsInput;
}
