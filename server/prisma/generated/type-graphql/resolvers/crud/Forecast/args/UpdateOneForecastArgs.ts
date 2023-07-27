import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ForecastUpdateInput } from "../../../inputs/ForecastUpdateInput";
import { ForecastWhereUniqueInput } from "../../../inputs/ForecastWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneForecastArgs {
  @TypeGraphQL.Field(_type => ForecastUpdateInput, {
    nullable: false
  })
  data!: ForecastUpdateInput;

  @TypeGraphQL.Field(_type => ForecastWhereUniqueInput, {
    nullable: false
  })
  where!: ForecastWhereUniqueInput;
}
