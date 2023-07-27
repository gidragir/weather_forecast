import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CityCreateWithoutForecastsInput } from "../inputs/CityCreateWithoutForecastsInput";
import { CityWhereUniqueInput } from "../inputs/CityWhereUniqueInput";

@TypeGraphQL.InputType("CityCreateOrConnectWithoutForecastsInput", {
  isAbstract: true
})
export class CityCreateOrConnectWithoutForecastsInput {
  @TypeGraphQL.Field(_type => CityWhereUniqueInput, {
    nullable: false
  })
  where!: CityWhereUniqueInput;

  @TypeGraphQL.Field(_type => CityCreateWithoutForecastsInput, {
    nullable: false
  })
  create!: CityCreateWithoutForecastsInput;
}
