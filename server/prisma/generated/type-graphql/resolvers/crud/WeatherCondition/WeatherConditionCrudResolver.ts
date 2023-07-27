import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateWeatherConditionArgs } from "./args/AggregateWeatherConditionArgs";
import { CreateManyWeatherConditionArgs } from "./args/CreateManyWeatherConditionArgs";
import { CreateOneWeatherConditionArgs } from "./args/CreateOneWeatherConditionArgs";
import { DeleteManyWeatherConditionArgs } from "./args/DeleteManyWeatherConditionArgs";
import { DeleteOneWeatherConditionArgs } from "./args/DeleteOneWeatherConditionArgs";
import { FindFirstWeatherConditionArgs } from "./args/FindFirstWeatherConditionArgs";
import { FindFirstWeatherConditionOrThrowArgs } from "./args/FindFirstWeatherConditionOrThrowArgs";
import { FindManyWeatherConditionArgs } from "./args/FindManyWeatherConditionArgs";
import { FindUniqueWeatherConditionArgs } from "./args/FindUniqueWeatherConditionArgs";
import { FindUniqueWeatherConditionOrThrowArgs } from "./args/FindUniqueWeatherConditionOrThrowArgs";
import { GroupByWeatherConditionArgs } from "./args/GroupByWeatherConditionArgs";
import { UpdateManyWeatherConditionArgs } from "./args/UpdateManyWeatherConditionArgs";
import { UpdateOneWeatherConditionArgs } from "./args/UpdateOneWeatherConditionArgs";
import { UpsertOneWeatherConditionArgs } from "./args/UpsertOneWeatherConditionArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { WeatherCondition } from "../../../models/WeatherCondition";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateWeatherCondition } from "../../outputs/AggregateWeatherCondition";
import { WeatherConditionGroupBy } from "../../outputs/WeatherConditionGroupBy";

@TypeGraphQL.Resolver(_of => WeatherCondition)
export class WeatherConditionCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateWeatherCondition, {
    nullable: false
  })
  async aggregateWeatherCondition(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateWeatherConditionArgs): Promise<AggregateWeatherCondition> {
    return getPrismaFromContext(ctx).weatherCondition.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyWeatherCondition(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyWeatherConditionArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).weatherCondition.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => WeatherCondition, {
    nullable: false
  })
  async createOneWeatherCondition(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneWeatherConditionArgs): Promise<WeatherCondition> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).weatherCondition.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyWeatherCondition(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyWeatherConditionArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).weatherCondition.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => WeatherCondition, {
    nullable: true
  })
  async deleteOneWeatherCondition(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneWeatherConditionArgs): Promise<WeatherCondition | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).weatherCondition.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => WeatherCondition, {
    nullable: true
  })
  async findFirstWeatherCondition(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstWeatherConditionArgs): Promise<WeatherCondition | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).weatherCondition.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => WeatherCondition, {
    nullable: true
  })
  async findFirstWeatherConditionOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstWeatherConditionOrThrowArgs): Promise<WeatherCondition | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).weatherCondition.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

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

  @TypeGraphQL.Query(_returns => WeatherCondition, {
    nullable: true
  })
  async weatherCondition(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueWeatherConditionArgs): Promise<WeatherCondition | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).weatherCondition.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => WeatherCondition, {
    nullable: true
  })
  async getWeatherCondition(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueWeatherConditionOrThrowArgs): Promise<WeatherCondition | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).weatherCondition.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

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

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyWeatherCondition(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyWeatherConditionArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).weatherCondition.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => WeatherCondition, {
    nullable: true
  })
  async updateOneWeatherCondition(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneWeatherConditionArgs): Promise<WeatherCondition | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).weatherCondition.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

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
