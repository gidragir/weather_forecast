import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateForecastArgs } from "./args/AggregateForecastArgs";
import { Forecast } from "../../../models/Forecast";
import { AggregateForecast } from "../../outputs/AggregateForecast";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Forecast)
export class AggregateForecastResolver {
  @TypeGraphQL.Query(_returns => AggregateForecast, {
    nullable: false
  })
  async aggregateForecast(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateForecastArgs): Promise<AggregateForecast> {
    return getPrismaFromContext(ctx).forecast.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
