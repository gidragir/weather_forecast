import * as TypeGraphQL from "type-graphql";
import { City } from "../../../models/City";
import { Forecast } from "../../../models/Forecast";
import { CityForecastsArgs } from "./args/CityForecastsArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => City)
export class CityRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Forecast], {
    nullable: false
  })
  async Forecasts(@TypeGraphQL.Root() city: City, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CityForecastsArgs): Promise<Forecast[]> {
    return getPrismaFromContext(ctx).city.findUnique({
      where: {
        Id: city.Id,
      },
    }).Forecasts(args);
  }
}
