import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ForecastCreateInput } from "../../../inputs/ForecastCreateInput";
import { ForecastUpdateInput } from "../../../inputs/ForecastUpdateInput";
import { ForecastWhereUniqueInput } from "../../../inputs/ForecastWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneForecastArgs {
  @TypeGraphQL.Field(_type => ForecastWhereUniqueInput, {
    nullable: false
  })
  where!: ForecastWhereUniqueInput;

  @TypeGraphQL.Field(_type => ForecastCreateInput, {
    nullable: false
  })
  create!: ForecastCreateInput;

  @TypeGraphQL.Field(_type => ForecastUpdateInput, {
    nullable: false
  })
  update!: ForecastUpdateInput;
}
