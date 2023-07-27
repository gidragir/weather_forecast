import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ForecastUpdateManyMutationInput } from "../../../inputs/ForecastUpdateManyMutationInput";
import { ForecastWhereInput } from "../../../inputs/ForecastWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyForecastArgs {
  @TypeGraphQL.Field(_type => ForecastUpdateManyMutationInput, {
    nullable: false
  })
  data!: ForecastUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => ForecastWhereInput, {
    nullable: true
  })
  where?: ForecastWhereInput | undefined;
}
