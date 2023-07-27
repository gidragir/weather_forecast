import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { WeatherConditionOrderByWithRelationInput } from "../../../inputs/WeatherConditionOrderByWithRelationInput";
import { WeatherConditionWhereInput } from "../../../inputs/WeatherConditionWhereInput";
import { WeatherConditionWhereUniqueInput } from "../../../inputs/WeatherConditionWhereUniqueInput";
import { WeatherConditionScalarFieldEnum } from "../../../../enums/WeatherConditionScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstWeatherConditionArgs {
  @TypeGraphQL.Field(_type => WeatherConditionWhereInput, {
    nullable: true
  })
  where?: WeatherConditionWhereInput | undefined;

  @TypeGraphQL.Field(_type => [WeatherConditionOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: WeatherConditionOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => WeatherConditionWhereUniqueInput, {
    nullable: true
  })
  cursor?: WeatherConditionWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [WeatherConditionScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"Id" | "Name"> | undefined;
}
