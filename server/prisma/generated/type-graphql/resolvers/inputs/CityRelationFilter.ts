import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CityWhereInput } from "../inputs/CityWhereInput";

@TypeGraphQL.InputType("CityRelationFilter", {
  isAbstract: true
})
export class CityRelationFilter {
  @TypeGraphQL.Field(_type => CityWhereInput, {
    nullable: true
  })
  is?: CityWhereInput | undefined;

  @TypeGraphQL.Field(_type => CityWhereInput, {
    nullable: true
  })
  isNot?: CityWhereInput | undefined;
}
