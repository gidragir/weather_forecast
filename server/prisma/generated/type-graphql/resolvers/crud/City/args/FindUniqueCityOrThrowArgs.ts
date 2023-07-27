import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CityWhereUniqueInput } from "../../../inputs/CityWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueCityOrThrowArgs {
  @TypeGraphQL.Field(_type => CityWhereUniqueInput, {
    nullable: false
  })
  where!: CityWhereUniqueInput;
}
