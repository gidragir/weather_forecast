import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ForecastCreateManyCityInputEnvelope } from "../inputs/ForecastCreateManyCityInputEnvelope";
import { ForecastCreateOrConnectWithoutCityInput } from "../inputs/ForecastCreateOrConnectWithoutCityInput";
import { ForecastCreateWithoutCityInput } from "../inputs/ForecastCreateWithoutCityInput";
import { ForecastWhereUniqueInput } from "../inputs/ForecastWhereUniqueInput";

@TypeGraphQL.InputType("ForecastCreateNestedManyWithoutCityInput", {
  isAbstract: true
})
export class ForecastCreateNestedManyWithoutCityInput {
  @TypeGraphQL.Field(_type => [ForecastCreateWithoutCityInput], {
    nullable: true
  })
  create?: ForecastCreateWithoutCityInput[] | undefined;

  @TypeGraphQL.Field(_type => [ForecastCreateOrConnectWithoutCityInput], {
    nullable: true
  })
  connectOrCreate?: ForecastCreateOrConnectWithoutCityInput[] | undefined;

  @TypeGraphQL.Field(_type => ForecastCreateManyCityInputEnvelope, {
    nullable: true
  })
  createMany?: ForecastCreateManyCityInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ForecastWhereUniqueInput], {
    nullable: true
  })
  connect?: ForecastWhereUniqueInput[] | undefined;
}
