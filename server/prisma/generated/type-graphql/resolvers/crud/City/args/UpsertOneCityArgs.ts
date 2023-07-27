import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CityCreateInput } from "../../../inputs/CityCreateInput";
import { CityUpdateInput } from "../../../inputs/CityUpdateInput";
import { CityWhereUniqueInput } from "../../../inputs/CityWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneCityArgs {
  @TypeGraphQL.Field(_type => CityWhereUniqueInput, {
    nullable: false
  })
  where!: CityWhereUniqueInput;

  @TypeGraphQL.Field(_type => CityCreateInput, {
    nullable: false
  })
  create!: CityCreateInput;

  @TypeGraphQL.Field(_type => CityUpdateInput, {
    nullable: false
  })
  update!: CityUpdateInput;
}
