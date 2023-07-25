import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { Forecast, CreateForecast, UpdateForecast } from './forecast.entity'
import { ForecastWhereInput } from '../etc/inputs'
import { PrismaService } from '../prisma.service'
import { restructData } from '../misc'

@Resolver(() => Forecast)
export class ForecastsResolver {
  constructor(private readonly prismaService: PrismaService) {}

  @Mutation(() => Forecast)
  async createForecast(@Args('createForecast') createForecast: CreateForecast): Promise<any> {
    return this.prismaService.forecast.create({
      data: restructData(createForecast),
    });
  }

  @Query(() => [Forecast], { name: 'forecasts' })
  async findAll(): Promise<any[]> {
    return this.prismaService.forecast.findMany();
  }

  @Query(() => Forecast, { name: 'forecast' })
  async findOne(@Args('args') args: ForecastWhereInput): Promise<any> {
    return this.prismaService.forecast.findFirst({
      where: args,
    });
  }

  @Mutation(() => Forecast)
  async updateForecast(@Args('updateForecast') updateForecast: UpdateForecast): Promise<any> {
    return this.prismaService.forecast.update({
      ...restructData(updateForecast.data)
    });
  }

  @Mutation(() => Forecast)
  async removeForecast(@Args('args') args: ForecastWhereInput): Promise<any> {
    return this.prismaService.forecast.delete({ where: restructData(args) });
  }
}
