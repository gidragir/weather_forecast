import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueForecastOrThrowArgs } from "./args/FindUniqueForecastOrThrowArgs";
import { Forecast } from "../../../models/Forecast";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Forecast)
export class FindUniqueForecastOrThrowResolver {
  @TypeGraphQL.Query(_returns => Forecast, {
    nullable: true
  })
  async getForecast(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueForecastOrThrowArgs): Promise<Forecast | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).forecast.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
