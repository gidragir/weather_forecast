import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ForecastCreateManyCityInputEnvelope } from "../inputs/ForecastCreateManyCityInputEnvelope";
import { ForecastCreateOrConnectWithoutCityInput } from "../inputs/ForecastCreateOrConnectWithoutCityInput";
import { ForecastCreateWithoutCityInput } from "../inputs/ForecastCreateWithoutCityInput";
import { ForecastScalarWhereInput } from "../inputs/ForecastScalarWhereInput";
import { ForecastUpdateManyWithWhereWithoutCityInput } from "../inputs/ForecastUpdateManyWithWhereWithoutCityInput";
import { ForecastUpdateWithWhereUniqueWithoutCityInput } from "../inputs/ForecastUpdateWithWhereUniqueWithoutCityInput";
import { ForecastUpsertWithWhereUniqueWithoutCityInput } from "../inputs/ForecastUpsertWithWhereUniqueWithoutCityInput";
import { ForecastWhereUniqueInput } from "../inputs/ForecastWhereUniqueInput";

@TypeGraphQL.InputType("ForecastUpdateManyWithoutCityNestedInput", {
  isAbstract: true
})
export class ForecastUpdateManyWithoutCityNestedInput {
  @TypeGraphQL.Field(_type => [ForecastCreateWithoutCityInput], {
    nullable: true
  })
  create?: ForecastCreateWithoutCityInput[] | undefined;

  @TypeGraphQL.Field(_type => [ForecastCreateOrConnectWithoutCityInput], {
    nullable: true
  })
  connectOrCreate?: ForecastCreateOrConnectWithoutCityInput[] | undefined;

  @TypeGraphQL.Field(_type => [ForecastUpsertWithWhereUniqueWithoutCityInput], {
    nullable: true
  })
  upsert?: ForecastUpsertWithWhereUniqueWithoutCityInput[] | undefined;

  @TypeGraphQL.Field(_type => ForecastCreateManyCityInputEnvelope, {
    nullable: true
  })
  createMany?: ForecastCreateManyCityInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ForecastWhereUniqueInput], {
    nullable: true
  })
  set?: ForecastWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ForecastWhereUniqueInput], {
    nullable: true
  })
  disconnect?: ForecastWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ForecastWhereUniqueInput], {
    nullable: true
  })
  delete?: ForecastWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ForecastWhereUniqueInput], {
    nullable: true
  })
  connect?: ForecastWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ForecastUpdateWithWhereUniqueWithoutCityInput], {
    nullable: true
  })
  update?: ForecastUpdateWithWhereUniqueWithoutCityInput[] | undefined;

  @TypeGraphQL.Field(_type => [ForecastUpdateManyWithWhereWithoutCityInput], {
    nullable: true
  })
  updateMany?: ForecastUpdateManyWithWhereWithoutCityInput[] | undefined;

  @TypeGraphQL.Field(_type => [ForecastScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ForecastScalarWhereInput[] | undefined;
}
