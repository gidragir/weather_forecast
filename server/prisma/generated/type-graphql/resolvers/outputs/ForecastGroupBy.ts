import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ForecastAvgAggregate } from "../outputs/ForecastAvgAggregate";
import { ForecastCountAggregate } from "../outputs/ForecastCountAggregate";
import { ForecastMaxAggregate } from "../outputs/ForecastMaxAggregate";
import { ForecastMinAggregate } from "../outputs/ForecastMinAggregate";
import { ForecastSumAggregate } from "../outputs/ForecastSumAggregate";

@TypeGraphQL.ObjectType("ForecastGroupBy", {
  isAbstract: true
})
export class ForecastGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  Id!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  Day!: Date;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  Hour!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  CityId!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: false
  })
  Temp!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: false
  })
  Feels_like!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: false
  })
  Cloudness!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  ConditionId!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  Daytime!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: false
  })
  Prec_strength!: number;

  @TypeGraphQL.Field(_type => ForecastCountAggregate, {
    nullable: true
  })
  _count!: ForecastCountAggregate | null;

  @TypeGraphQL.Field(_type => ForecastAvgAggregate, {
    nullable: true
  })
  _avg!: ForecastAvgAggregate | null;

  @TypeGraphQL.Field(_type => ForecastSumAggregate, {
    nullable: true
  })
  _sum!: ForecastSumAggregate | null;

  @TypeGraphQL.Field(_type => ForecastMinAggregate, {
    nullable: true
  })
  _min!: ForecastMinAggregate | null;

  @TypeGraphQL.Field(_type => ForecastMaxAggregate, {
    nullable: true
  })
  _max!: ForecastMaxAggregate | null;
}
