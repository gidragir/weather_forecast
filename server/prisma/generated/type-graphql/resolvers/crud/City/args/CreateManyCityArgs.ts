import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CityCreateManyInput } from "../../../inputs/CityCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyCityArgs {
  @TypeGraphQL.Field(_type => [CityCreateManyInput], {
    nullable: false
  })
  data!: CityCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
