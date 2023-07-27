import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("WeatherConditionWhereUniqueInput", {
  isAbstract: true
})
export class WeatherConditionWhereUniqueInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  Id?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  Name?: string | undefined;
}
