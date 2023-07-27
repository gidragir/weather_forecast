import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ForecastCreateManyConditionInputEnvelope } from "../inputs/ForecastCreateManyConditionInputEnvelope";
import { ForecastCreateOrConnectWithoutConditionInput } from "../inputs/ForecastCreateOrConnectWithoutConditionInput";
import { ForecastCreateWithoutConditionInput } from "../inputs/ForecastCreateWithoutConditionInput";
import { ForecastScalarWhereInput } from "../inputs/ForecastScalarWhereInput";
import { ForecastUpdateManyWithWhereWithoutConditionInput } from "../inputs/ForecastUpdateManyWithWhereWithoutConditionInput";
import { ForecastUpdateWithWhereUniqueWithoutConditionInput } from "../inputs/ForecastUpdateWithWhereUniqueWithoutConditionInput";
import { ForecastUpsertWithWhereUniqueWithoutConditionInput } from "../inputs/ForecastUpsertWithWhereUniqueWithoutConditionInput";
import { ForecastWhereUniqueInput } from "../inputs/ForecastWhereUniqueInput";

@TypeGraphQL.InputType("ForecastUpdateManyWithoutConditionNestedInput", {
  isAbstract: true
})
export class ForecastUpdateManyWithoutConditionNestedInput {
  @TypeGraphQL.Field(_type => [ForecastCreateWithoutConditionInput], {
    nullable: true
  })
  create?: ForecastCreateWithoutConditionInput[] | undefined;

  @TypeGraphQL.Field(_type => [ForecastCreateOrConnectWithoutConditionInput], {
    nullable: true
  })
  connectOrCreate?: ForecastCreateOrConnectWithoutConditionInput[] | undefined;

  @TypeGraphQL.Field(_type => [ForecastUpsertWithWhereUniqueWithoutConditionInput], {
    nullable: true
  })
  upsert?: ForecastUpsertWithWhereUniqueWithoutConditionInput[] | undefined;

  @TypeGraphQL.Field(_type => ForecastCreateManyConditionInputEnvelope, {
    nullable: true
  })
  createMany?: ForecastCreateManyConditionInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [ForecastUpdateWithWhereUniqueWithoutConditionInput], {
    nullable: true
  })
  update?: ForecastUpdateWithWhereUniqueWithoutConditionInput[] | undefined;

  @TypeGraphQL.Field(_type => [ForecastUpdateManyWithWhereWithoutConditionInput], {
    nullable: true
  })
  updateMany?: ForecastUpdateManyWithWhereWithoutConditionInput[] | undefined;

  @TypeGraphQL.Field(_type => [ForecastScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ForecastScalarWhereInput[] | undefined;
}
