import { Resolver, ResolveField, Root, Query, Mutation, Args } from '@nestjs/graphql'
import { Forecast, CreateForecast, City, WeatherCondition } from './forecast.entity'
import { ForecastWhereInput, ForecastUpdateInput, ForecastWhereUniqueInput } from '../etc/inputs'
import { ForecastOrderByWithAggregationInput } from '../etc/orders'
import { PrismaService } from '../prisma.service'
import { assembleStruct } from '../misc'

@Resolver(() => Forecast)
export class ForecastsResolver {
  constructor(private readonly prismaService: PrismaService) {}

  @Mutation(() => Forecast)
  async createForecast(@Args('data') data: CreateForecast): Promise<any> {
    const args = assembleStruct(data, undefined, undefined)
    return this.prismaService.forecast.create({ ...args })
  }

  @Query(() => [Forecast], { name: 'forecasts' })
  async findAll(@Args("orderBy", { nullable: true }) orderBy: ForecastOrderByWithAggregationInput): Promise<any[]> {
    const args = assembleStruct(undefined, undefined, orderBy)
    return this.prismaService.forecast.findMany({ ...args })
  }

  @Query(() => Forecast, { name: 'forecast' })
  async findWithCondition(@Args('where') where: ForecastWhereInput, @Args("orderBy", { nullable: true }) orderBy: ForecastOrderByWithAggregationInput): Promise<any> {
    const args = assembleStruct(undefined, where, orderBy)
    return this.prismaService.forecast.findFirst({ ...args })
  }

  @Mutation(() => Forecast)
  async updateForecast(@Args('data') data: ForecastUpdateInput, @Args('where') where: ForecastWhereUniqueInput): Promise<any> {
    const args = assembleStruct(data, where, undefined)
    return this.prismaService.forecast.update({ ...args })
  }

  @Mutation(() => [Forecast])
  async updateManyForecast(@Args('data') data: ForecastUpdateInput, @Args('where') where: ForecastWhereUniqueInput): Promise<any> {
    const args = assembleStruct(data, where, undefined)
    return this.prismaService.forecast.update({ ...args })
  }



  @Mutation(() => Forecast)
  async removeForecast(@Args('where') where: ForecastWhereUniqueInput): Promise<any> {
    const args = assembleStruct(undefined, where, undefined)
    return this.prismaService.forecast.delete({ ...args })
  }

  @ResolveField(() => City, { nullable: true })
  City(@Root() forecast: Forecast) {
    return this.prismaService.forecast.findUnique({where:{ Id: forecast.Id}}).City()
  }
  
  @ResolveField(() => WeatherCondition, { nullable: true })
  Condition(@Root() forecast: Forecast) {
    return this.prismaService.forecast.findUnique({where:{ Id: forecast.Id}}).Condition()
  }
  

  @ResolveField(() => [Forecast], { nullable: true })
  async Details(
    @Args('where') where: ForecastWhereInput, 
    @Args("orderBy", { nullable: true }) orderBy: ForecastOrderByWithAggregationInput
  ): Promise<any[]> {
    const args = assembleStruct(undefined, where, orderBy)
    return this.prismaService.forecast.findMany({ ...args })
  }
}
