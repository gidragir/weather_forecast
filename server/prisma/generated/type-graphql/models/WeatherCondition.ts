import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Forecast } from "../models/Forecast";
import { WeatherConditionCount } from "../resolvers/outputs/WeatherConditionCount";

@TypeGraphQL.ObjectType("WeatherCondition", {
  isAbstract: true
})
export class WeatherCondition {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  Id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  Name!: string;

  Forecasts?: Forecast[];

  @TypeGraphQL.Field(_type => WeatherConditionCount, {
    nullable: true
  })
  _count?: WeatherConditionCount | null;
}
