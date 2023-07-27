import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ForecastOrderByWithRelationInput } from "../../../inputs/ForecastOrderByWithRelationInput";
import { ForecastWhereInput } from "../../../inputs/ForecastWhereInput";
import { ForecastWhereUniqueInput } from "../../../inputs/ForecastWhereUniqueInput";
import { ForecastScalarFieldEnum } from "../../../../enums/ForecastScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstForecastOrThrowArgs {
  @TypeGraphQL.Field(_type => ForecastWhereInput, {
    nullable: true
  })
  where?: ForecastWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ForecastOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: ForecastOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => ForecastWhereUniqueInput, {
    nullable: true
  })
  cursor?: ForecastWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [ForecastScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"Id" | "Day" | "Hour" | "CityId" | "Temp" | "Feels_like" | "Cloudness" | "ConditionId" | "Daytime" | "Prec_strength"> | undefined;
}
