import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ForecastCreateInput } from "../../../inputs/ForecastCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneForecastArgs {
  @TypeGraphQL.Field(_type => ForecastCreateInput, {
    nullable: false
  })
  data!: ForecastCreateInput;
}
