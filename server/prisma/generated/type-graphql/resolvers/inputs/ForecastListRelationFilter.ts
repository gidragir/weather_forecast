import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ForecastWhereInput } from "../inputs/ForecastWhereInput";

@TypeGraphQL.InputType("ForecastListRelationFilter", {
  isAbstract: true
})
export class ForecastListRelationFilter {
  @TypeGraphQL.Field(_type => ForecastWhereInput, {
    nullable: true
  })
  every?: ForecastWhereInput | undefined;

  @TypeGraphQL.Field(_type => ForecastWhereInput, {
    nullable: true
  })
  some?: ForecastWhereInput | undefined;

  @TypeGraphQL.Field(_type => ForecastWhereInput, {
    nullable: true
  })
  none?: ForecastWhereInput | undefined;
}
