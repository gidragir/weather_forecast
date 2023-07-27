import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FloatFilter } from "../inputs/FloatFilter";
import { ForecastListRelationFilter } from "../inputs/ForecastListRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("CityWhereInput", {
  isAbstract: true
})
export class CityWhereInput {
  @TypeGraphQL.Field(_type => [CityWhereInput], {
    nullable: true
  })
  AND?: CityWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CityWhereInput], {
    nullable: true
  })
  OR?: CityWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CityWhereInput], {
    nullable: true
  })
  NOT?: CityWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  Id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  Name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => FloatFilter, {
    nullable: true
  })
  Lat?: FloatFilter | undefined;

  @TypeGraphQL.Field(_type => FloatFilter, {
    nullable: true
  })
  Long?: FloatFilter | undefined;

  @TypeGraphQL.Field(_type => ForecastListRelationFilter, {
    nullable: true
  })
  Forecasts?: ForecastListRelationFilter | undefined;
}
