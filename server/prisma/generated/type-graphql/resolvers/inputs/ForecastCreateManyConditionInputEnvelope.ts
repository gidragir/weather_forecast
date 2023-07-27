import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ForecastCreateManyConditionInput } from "../inputs/ForecastCreateManyConditionInput";

@TypeGraphQL.InputType("ForecastCreateManyConditionInputEnvelope", {
  isAbstract: true
})
export class ForecastCreateManyConditionInputEnvelope {
  @TypeGraphQL.Field(_type => [ForecastCreateManyConditionInput], {
    nullable: false
  })
  data!: ForecastCreateManyConditionInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
