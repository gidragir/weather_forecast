import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FloatWithAggregatesFilter } from "../inputs/FloatWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("CityScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class CityScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [CityScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: CityScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [CityScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: CityScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [CityScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: CityScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  Id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  Name?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => FloatWithAggregatesFilter, {
    nullable: true
  })
  Lat?: FloatWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => FloatWithAggregatesFilter, {
    nullable: true
  })
  Long?: FloatWithAggregatesFilter | undefined;
}
