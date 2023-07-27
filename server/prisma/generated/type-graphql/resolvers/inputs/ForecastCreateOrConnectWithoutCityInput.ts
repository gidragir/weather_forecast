import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ForecastCreateWithoutCityInput } from "../inputs/ForecastCreateWithoutCityInput";
import { ForecastWhereUniqueInput } from "../inputs/ForecastWhereUniqueInput";

@TypeGraphQL.InputType("ForecastCreateOrConnectWithoutCityInput", {
  isAbstract: true
})
export class ForecastCreateOrConnectWithoutCityInput {
  @TypeGraphQL.Field(_type => ForecastWhereUniqueInput, {
    nullable: false
  })
  where!: ForecastWhereUniqueInput;

  @TypeGraphQL.Field(_type => ForecastCreateWithoutCityInput, {
    nullable: false
  })
  create!: ForecastCreateWithoutCityInput;
}
