import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateCityArgs } from "./args/AggregateCityArgs";
import { City } from "../../../models/City";
import { AggregateCity } from "../../outputs/AggregateCity";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => City)
export class AggregateCityResolver {
  @TypeGraphQL.Query(_returns => AggregateCity, {
    nullable: false
  })
  async aggregateCity(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateCityArgs): Promise<AggregateCity> {
    return getPrismaFromContext(ctx).city.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
