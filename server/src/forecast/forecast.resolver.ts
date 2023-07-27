import { Resolver, Query, Mutation, Arg } from 'type-graphql';
import * as generated from '../../prisma/generated/type-graphql';
import { PrismaService } from '../prisma.service';

@Resolver(() => generated.Forecast)
export class ForecastsResolver {
  constructor(private readonly prismaService: PrismaService) {}

  @Mutation(() => generated.Forecast)
  createForecast(
    @Arg('createForecast')
    createForecast: generated.ForecastCreateInput,
  ) {
    return this.prismaService.forecast.create({data: createForecast });
  }

  @Query(() => [generated.Forecast], { name: 'forecasts' })
  findAll() {
    return this.prismaService.forecast.findMany();
  }

  @Query(() => generated.Forecast, { name: 'forecast' })
  findOne(@Arg('Id') Id: number) {
    return this.prismaService.forecast.findUnique({
      where: { Id: Id },
    });
  }

  @Mutation(() => generated.Forecast)
  updateForecast(
    @Arg('Id') Id: number,
    @Arg('updateForecast')
    updateForecast: generated.ForecastUpdateInput,
  ) {
    return this.prismaService.forecast.update({
      where: { Id: Id },
      data: updateForecast,
    });
  }

  @Mutation(() => generated.Forecast)
  removeForecast(@Arg('Id') Id: number) {
    return this.prismaService.forecast.delete({ where: { Id: Id } });
  }
}
