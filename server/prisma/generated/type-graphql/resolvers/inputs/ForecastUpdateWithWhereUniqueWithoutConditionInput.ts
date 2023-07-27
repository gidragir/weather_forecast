import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ForecastUpdateWithoutConditionInput } from "../inputs/ForecastUpdateWithoutConditionInput";
import { ForecastWhereUniqueInput } from "../inputs/ForecastWhereUniqueInput";

@TypeGraphQL.InputType("ForecastUpdateWithWhereUniqueWithoutConditionInput", {
  isAbstract: true
})
export class ForecastUpdateWithWhereUniqueWithoutConditionInput {
  @TypeGraphQL.Field(_type => ForecastWhereUniqueInput, {
    nullable: false
  })
  where!: ForecastWhereUniqueInput;

  @TypeGraphQL.Field(_type => ForecastUpdateWithoutConditionInput, {
    nullable: false
  })
  data!: ForecastUpdateWithoutConditionInput;
}
