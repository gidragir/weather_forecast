import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CityCreateOrConnectWithoutForecastsInput } from "../inputs/CityCreateOrConnectWithoutForecastsInput";
import { CityCreateWithoutForecastsInput } from "../inputs/CityCreateWithoutForecastsInput";
import { CityWhereUniqueInput } from "../inputs/CityWhereUniqueInput";

@TypeGraphQL.InputType("CityCreateNestedOneWithoutForecastsInput", {
  isAbstract: true
})
export class CityCreateNestedOneWithoutForecastsInput {
  @TypeGraphQL.Field(_type => CityCreateWithoutForecastsInput, {
    nullable: true
  })
  create?: CityCreateWithoutForecastsInput | undefined;

  @TypeGraphQL.Field(_type => CityCreateOrConnectWithoutForecastsInput, {
    nullable: true
  })
  connectOrCreate?: CityCreateOrConnectWithoutForecastsInput | undefined;

  @TypeGraphQL.Field(_type => CityWhereUniqueInput, {
    nullable: true
  })
  connect?: CityWhereUniqueInput | undefined;
}
