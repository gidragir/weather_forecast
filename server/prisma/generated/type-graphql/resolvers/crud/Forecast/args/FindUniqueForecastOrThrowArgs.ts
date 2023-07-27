import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ForecastWhereUniqueInput } from "../../../inputs/ForecastWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueForecastOrThrowArgs {
  @TypeGraphQL.Field(_type => ForecastWhereUniqueInput, {
    nullable: false
  })
  where!: ForecastWhereUniqueInput;
}
