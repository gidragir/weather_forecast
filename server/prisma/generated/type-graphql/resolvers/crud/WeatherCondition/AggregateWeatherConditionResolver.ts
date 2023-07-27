import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateWeatherConditionArgs } from "./args/AggregateWeatherConditionArgs";
import { WeatherCondition } from "../../../models/WeatherCondition";
import { AggregateWeatherCondition } from "../../outputs/AggregateWeatherCondition";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => WeatherCondition)
export class AggregateWeatherConditionResolver {
  @TypeGraphQL.Query(_returns => AggregateWeatherCondition, {
    nullable: false
  })
  async aggregateWeatherCondition(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateWeatherConditionArgs): Promise<AggregateWeatherCondition> {
    return getPrismaFromContext(ctx).weatherCondition.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
