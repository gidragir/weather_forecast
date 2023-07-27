import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CityRelationFilter } from "../inputs/CityRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { FloatFilter } from "../inputs/FloatFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
import { WeatherConditionRelationFilter } from "../inputs/WeatherConditionRelationFilter";

@TypeGraphQL.InputType("ForecastWhereInput", {
  isAbstract: true
})
export class ForecastWhereInput {
  @TypeGraphQL.Field(_type => [ForecastWhereInput], {
    nullable: true
  })
  AND?: ForecastWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ForecastWhereInput], {
    nullable: true
  })
  OR?: ForecastWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ForecastWhereInput], {
    nullable: true
  })
  NOT?: ForecastWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  Id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  Day?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  Hour?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => CityRelationFilter, {
    nullable: true
  })
  City?: CityRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  CityId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => FloatFilter, {
    nullable: true
  })
  Temp?: FloatFilter | undefined;

  @TypeGraphQL.Field(_type => FloatFilter, {
    nullable: true
  })
  Feels_like?: FloatFilter | undefined;

  @TypeGraphQL.Field(_type => FloatFilter, {
    nullable: true
  })
  Cloudness?: FloatFilter | undefined;

  @TypeGraphQL.Field(_type => WeatherConditionRelationFilter, {
    nullable: true
  })
  Condition?: WeatherConditionRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  ConditionId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  Daytime?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => FloatFilter, {
    nullable: true
  })
  Prec_strength?: FloatFilter | undefined;
}
