import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CityCreateInput } from "../../../inputs/CityCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneCityArgs {
  @TypeGraphQL.Field(_type => CityCreateInput, {
    nullable: false
  })
  data!: CityCreateInput;
}
