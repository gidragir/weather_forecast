import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WeatherConditionAvgAggregate } from "../outputs/WeatherConditionAvgAggregate";
import { WeatherConditionCountAggregate } from "../outputs/WeatherConditionCountAggregate";
import { WeatherConditionMaxAggregate } from "../outputs/WeatherConditionMaxAggregate";
import { WeatherConditionMinAggregate } from "../outputs/WeatherConditionMinAggregate";
import { WeatherConditionSumAggregate } from "../outputs/WeatherConditionSumAggregate";

@TypeGraphQL.ObjectType("AggregateWeatherCondition", {
  isAbstract: true
})
export class AggregateWeatherCondition {
  @TypeGraphQL.Field(_type => WeatherConditionCountAggregate, {
    nullable: true
  })
  _count!: WeatherConditionCountAggregate | null;

  @TypeGraphQL.Field(_type => WeatherConditionAvgAggregate, {
    nullable: true
  })
  _avg!: WeatherConditionAvgAggregate | null;

  @TypeGraphQL.Field(_type => WeatherConditionSumAggregate, {
    nullable: true
  })
  _sum!: WeatherConditionSumAggregate | null;

  @TypeGraphQL.Field(_type => WeatherConditionMinAggregate, {
    nullable: true
  })
  _min!: WeatherConditionMinAggregate | null;

  @TypeGraphQL.Field(_type => WeatherConditionMaxAggregate, {
    nullable: true
  })
  _max!: WeatherConditionMaxAggregate | null;
}
