import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ForecastWhereInput } from "../../../inputs/ForecastWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyForecastArgs {
  @TypeGraphQL.Field(_type => ForecastWhereInput, {
    nullable: true
  })
  where?: ForecastWhereInput | undefined;
}
