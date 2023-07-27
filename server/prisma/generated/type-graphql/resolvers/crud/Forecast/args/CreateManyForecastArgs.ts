import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ForecastCreateManyInput } from "../../../inputs/ForecastCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyForecastArgs {
  @TypeGraphQL.Field(_type => [ForecastCreateManyInput], {
    nullable: false
  })
  data!: ForecastCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
