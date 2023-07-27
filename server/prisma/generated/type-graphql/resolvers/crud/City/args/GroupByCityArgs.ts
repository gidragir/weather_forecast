import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CityOrderByWithAggregationInput } from "../../../inputs/CityOrderByWithAggregationInput";
import { CityScalarWhereWithAggregatesInput } from "../../../inputs/CityScalarWhereWithAggregatesInput";
import { CityWhereInput } from "../../../inputs/CityWhereInput";
import { CityScalarFieldEnum } from "../../../../enums/CityScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByCityArgs {
  @TypeGraphQL.Field(_type => CityWhereInput, {
    nullable: true
  })
  where?: CityWhereInput | undefined;

  @TypeGraphQL.Field(_type => [CityOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: CityOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [CityScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"Id" | "Name" | "Lat" | "Long">;

  @TypeGraphQL.Field(_type => CityScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: CityScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
