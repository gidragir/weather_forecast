import * as TypeGraphQL from "type-graphql";
import { Forecast } from "../../../models/Forecast";
import { WeatherCondition } from "../../../models/WeatherCondition";
import { WeatherConditionForecastsArgs } from "./args/WeatherConditionForecastsArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => WeatherCondition)
export class WeatherConditionRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Forecast], {
    nullable: false
  })
  async Forecasts(@TypeGraphQL.Root() weatherCondition: WeatherCondition, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: WeatherConditionForecastsArgs): Promise<Forecast[]> {
    return getPrismaFromContext(ctx).weatherCondition.findUnique({
      where: {
        Id: weatherCondition.Id,
      },
    }).Forecasts(args);
  }
}
