import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindManyWeatherConditionArgs } from "./args/FindManyWeatherConditionArgs";
import { WeatherCondition } from "../../../models/WeatherCondition";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => WeatherCondition)
export class FindManyWeatherConditionResolver {
  @TypeGraphQL.Query(_returns => [WeatherCondition], {
    nullable: false
  })
  async weatherConditions(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyWeatherConditionArgs): Promise<WeatherCondition[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).weatherCondition.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
