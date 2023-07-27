import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ForecastCreateManyCityInput } from "../inputs/ForecastCreateManyCityInput";

@TypeGraphQL.InputType("ForecastCreateManyCityInputEnvelope", {
  isAbstract: true
})
export class ForecastCreateManyCityInputEnvelope {
  @TypeGraphQL.Field(_type => [ForecastCreateManyCityInput], {
    nullable: false
  })
  data!: ForecastCreateManyCityInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
