import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CityWhereUniqueInput } from "../../../inputs/CityWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueCityArgs {
  @TypeGraphQL.Field(_type => CityWhereUniqueInput, {
    nullable: false
  })
  where!: CityWhereUniqueInput;
}
