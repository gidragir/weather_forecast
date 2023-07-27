import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ForecastCreateWithoutCityInput } from "../inputs/ForecastCreateWithoutCityInput";
import { ForecastUpdateWithoutCityInput } from "../inputs/ForecastUpdateWithoutCityInput";
import { ForecastWhereUniqueInput } from "../inputs/ForecastWhereUniqueInput";

@TypeGraphQL.InputType("ForecastUpsertWithWhereUniqueWithoutCityInput", {
  isAbstract: true
})
export class ForecastUpsertWithWhereUniqueWithoutCityInput {
  @TypeGraphQL.Field(_type => ForecastWhereUniqueInput, {
    nullable: false
  })
  where!: ForecastWhereUniqueInput;

  @TypeGraphQL.Field(_type => ForecastUpdateWithoutCityInput, {
    nullable: false
  })
  update!: ForecastUpdateWithoutCityInput;

  @TypeGraphQL.Field(_type => ForecastCreateWithoutCityInput, {
    nullable: false
  })
  create!: ForecastCreateWithoutCityInput;
}
