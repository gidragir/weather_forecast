import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneForecastArgs } from "./args/UpdateOneForecastArgs";
import { Forecast } from "../../../models/Forecast";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Forecast)
export class UpdateOneForecastResolver {
  @TypeGraphQL.Mutation(_returns => Forecast, {
    nullable: true
  })
  async updateOneForecast(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneForecastArgs): Promise<Forecast | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).forecast.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
