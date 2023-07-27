import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ForecastCreateManyConditionInputEnvelope } from "../inputs/ForecastCreateManyConditionInputEnvelope";
import { ForecastCreateOrConnectWithoutConditionInput } from "../inputs/ForecastCreateOrConnectWithoutConditionInput";
import { ForecastCreateWithoutConditionInput } from "../inputs/ForecastCreateWithoutConditionInput";
import { ForecastWhereUniqueInput } from "../inputs/ForecastWhereUniqueInput";

@TypeGraphQL.InputType("ForecastCreateNestedManyWithoutConditionInput", {
  isAbstract: true
})
export class ForecastCreateNestedManyWithoutConditionInput {
  @TypeGraphQL.Field(_type => [ForecastCreateWithoutConditionInput], {
    nullable: true
  })
  create?: ForecastCreateWithoutConditionInput[] | undefined;

  @TypeGraphQL.Field(_type => [ForecastCreateOrConnectWithoutConditionInput], {
    nullable: true
  })
  connectOrCreate?: ForecastCreateOrConnectWithoutConditionInput[] | undefined;

  @TypeGraphQL.Field(_type => ForecastCreateManyConditionInputEnvelope, {
    nullable: true
  })
  createMany?: ForecastCreateManyConditionInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ForecastWhereUniqueInput], {
    nullable: true
  })
  connect?: ForecastWhereUniqueInput[] | undefined;
}
