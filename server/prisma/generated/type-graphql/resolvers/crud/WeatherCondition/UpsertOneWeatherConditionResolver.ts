import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneWeatherConditionArgs } from "./args/UpsertOneWeatherConditionArgs";
import { WeatherCondition } from "../../../models/WeatherCondition";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => WeatherCondition)
export class UpsertOneWeatherConditionResolver {
  @TypeGraphQL.Mutation(_returns => WeatherCondition, {
    nullable: false
  })
  async upsertOneWeatherCondition(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneWeatherConditionArgs): Promise<WeatherCondition> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).weatherCondition.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
