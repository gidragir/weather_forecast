import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CityOrderByWithRelationInput } from "../../../inputs/CityOrderByWithRelationInput";
import { CityWhereInput } from "../../../inputs/CityWhereInput";
import { CityWhereUniqueInput } from "../../../inputs/CityWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateCityArgs {
  @TypeGraphQL.Field(_type => CityWhereInput, {
    nullable: true
  })
  where?: CityWhereInput | undefined;

  @TypeGraphQL.Field(_type => [CityOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: CityOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => CityWhereUniqueInput, {
    nullable: true
  })
  cursor?: CityWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
