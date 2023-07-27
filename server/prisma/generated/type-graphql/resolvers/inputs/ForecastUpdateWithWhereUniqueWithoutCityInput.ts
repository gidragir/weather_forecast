import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ForecastUpdateWithoutCityInput } from "../inputs/ForecastUpdateWithoutCityInput";
import { ForecastWhereUniqueInput } from "../inputs/ForecastWhereUniqueInput";

@TypeGraphQL.InputType("ForecastUpdateWithWhereUniqueWithoutCityInput", {
  isAbstract: true
})
export class ForecastUpdateWithWhereUniqueWithoutCityInput {
  @TypeGraphQL.Field(_type => ForecastWhereUniqueInput, {
    nullable: false
  })
  where!: ForecastWhereUniqueInput;

  @TypeGraphQL.Field(_type => ForecastUpdateWithoutCityInput, {
    nullable: false
  })
  data!: ForecastUpdateWithoutCityInput;
}
