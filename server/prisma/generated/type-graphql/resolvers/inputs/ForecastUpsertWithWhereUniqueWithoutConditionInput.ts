import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ForecastCreateWithoutConditionInput } from "../inputs/ForecastCreateWithoutConditionInput";
import { ForecastUpdateWithoutConditionInput } from "../inputs/ForecastUpdateWithoutConditionInput";
import { ForecastWhereUniqueInput } from "../inputs/ForecastWhereUniqueInput";

@TypeGraphQL.InputType("ForecastUpsertWithWhereUniqueWithoutConditionInput", {
  isAbstract: true
})
export class ForecastUpsertWithWhereUniqueWithoutConditionInput {
  @TypeGraphQL.Field(_type => ForecastWhereUniqueInput, {
    nullable: false
  })
  where!: ForecastWhereUniqueInput;

  @TypeGraphQL.Field(_type => ForecastUpdateWithoutConditionInput, {
    nullable: false
  })
  update!: ForecastUpdateWithoutConditionInput;

  @TypeGraphQL.Field(_type => ForecastCreateWithoutConditionInput, {
    nullable: false
  })
  create!: ForecastCreateWithoutConditionInput;
}
