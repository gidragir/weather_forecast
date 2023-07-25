import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { Forecast, CreateForecast, UpdateForecast, ArgsForecast } from './forecast.entity'
import { PrismaService } from '../prisma.service'
import { restuctData } from '../misc'

@Resolver(() => Forecast)
export class ForecastsResolver {
  constructor(private readonly prismaService: PrismaService) {}

  @Mutation(() => Forecast)
  createForecast(@Args('createForecast') createForecast: CreateForecast) {
    return this.prismaService.forecast.create({
      data: restuctData(createForecast)
    })
  }

  @Query(() => [Forecast], { name: 'forecasts' })
  findAll() {
    return this.prismaService.forecast.findMany()
  }

  // @Query(() => Forecast, { name: 'forecast' })
  // findOne(@Args() args: ArgsForecast) {
  //   return this.prismaService.forecast.findUnique({where: args})
  // }

  // @Mutation(() => Forecast)
  // updateForecast(
  //   @Args('Id') Id: number,
  //   @Args('updateForecast') updateForecast: UpdateForecast,
  // ) {
  //   return this.prismaService.forecast.update({
  //     where: { Id: Id },
  //     data: updateForecast,
  //   });
  // }

  // @Mutation(() => Forecast)
  // removeForecast(@Args() args: ArgsForecast) {
  //   return this.prismaService.forecast.delete({ where: args })
  // }
}
