import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CityUpdateManyMutationInput } from "../../../inputs/CityUpdateManyMutationInput";
import { CityWhereInput } from "../../../inputs/CityWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyCityArgs {
  @TypeGraphQL.Field(_type => CityUpdateManyMutationInput, {
    nullable: false
  })
  data!: CityUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => CityWhereInput, {
    nullable: true
  })
  where?: CityWhereInput | undefined;
}
