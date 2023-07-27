import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ForecastScalarWhereInput } from "../inputs/ForecastScalarWhereInput";
import { ForecastUpdateManyMutationInput } from "../inputs/ForecastUpdateManyMutationInput";

@TypeGraphQL.InputType("ForecastUpdateManyWithWhereWithoutConditionInput", {
  isAbstract: true
})
export class ForecastUpdateManyWithWhereWithoutConditionInput {
  @TypeGraphQL.Field(_type => ForecastScalarWhereInput, {
    nullable: false
  })
  where!: ForecastScalarWhereInput;

  @TypeGraphQL.Field(_type => ForecastUpdateManyMutationInput, {
    nullable: false
  })
  data!: ForecastUpdateManyMutationInput;
}
