import * as TypeGraphQL from "type-graphql";
import { City } from "../../../models/City";
import { Forecast } from "../../../models/Forecast";
import { WeatherCondition } from "../../../models/WeatherCondition";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Forecast)
export class ForecastRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => City, {
    nullable: false
  })
  async City(@TypeGraphQL.Root() forecast: Forecast, @TypeGraphQL.Ctx() ctx: any): Promise<City> {
    return getPrismaFromContext(ctx).forecast.findUnique({
      where: {
        Id: forecast.Id,
      },
    }).City({});
  }

  @TypeGraphQL.FieldResolver(_type => WeatherCondition, {
    nullable: false
  })
  async Condition(@TypeGraphQL.Root() forecast: Forecast, @TypeGraphQL.Ctx() ctx: any): Promise<WeatherCondition> {
    return getPrismaFromContext(ctx).forecast.findUnique({
      where: {
        Id: forecast.Id,
      },
    }).Condition({});
  }
}
