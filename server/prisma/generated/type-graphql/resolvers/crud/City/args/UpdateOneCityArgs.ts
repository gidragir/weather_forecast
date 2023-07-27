import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CityUpdateInput } from "../../../inputs/CityUpdateInput";
import { CityWhereUniqueInput } from "../../../inputs/CityWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneCityArgs {
  @TypeGraphQL.Field(_type => CityUpdateInput, {
    nullable: false
  })
  data!: CityUpdateInput;

  @TypeGraphQL.Field(_type => CityWhereUniqueInput, {
    nullable: false
  })
  where!: CityWhereUniqueInput;
}
