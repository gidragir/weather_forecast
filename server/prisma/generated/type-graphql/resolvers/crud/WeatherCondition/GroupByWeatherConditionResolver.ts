import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByWeatherConditionArgs } from "./args/GroupByWeatherConditionArgs";
import { WeatherCondition } from "../../../models/WeatherCondition";
import { WeatherConditionGroupBy } from "../../outputs/WeatherConditionGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => WeatherCondition)
export class GroupByWeatherConditionResolver {
  @TypeGraphQL.Query(_returns => [WeatherConditionGroupBy], {
    nullable: false
  })
  async groupByWeatherCondition(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByWeatherConditionArgs): Promise<WeatherConditionGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).weatherCondition.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
