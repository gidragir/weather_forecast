import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ForecastCreateWithoutConditionInput } from "../inputs/ForecastCreateWithoutConditionInput";
import { ForecastWhereUniqueInput } from "../inputs/ForecastWhereUniqueInput";

@TypeGraphQL.InputType("ForecastCreateOrConnectWithoutConditionInput", {
  isAbstract: true
})
export class ForecastCreateOrConnectWithoutConditionInput {
  @TypeGraphQL.Field(_type => ForecastWhereUniqueInput, {
    nullable: false
  })
  where!: ForecastWhereUniqueInput;

  @TypeGraphQL.Field(_type => ForecastCreateWithoutConditionInput, {
    nullable: false
  })
  create!: ForecastCreateWithoutConditionInput;
}
