import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { WeatherCondition, CreateWeatherCondition } from './weathercondition.entity'
import { WeatherConditionWhereInput, WeatherConditionUpdateInput, WeatherConditionWhereUniqueInput } from '../etc/inputs'
import { WeatherConditionOrderByWithAggregationInput } from '../etc/orders'
import { PrismaService } from '../prisma.service'
import { assembleStruct } from '../misc'

@Resolver(() => WeatherCondition)
export class WeatherConditionsResolver {
  constructor(private readonly prismaService: PrismaService) {}

  @Mutation(() => WeatherCondition)
  async createWeatherCondition(@Args('data') data: CreateWeatherCondition): Promise<WeatherCondition> {
    const args = assembleStruct(data, undefined, undefined)
    return this.prismaService.weatherCondition.create({ ...args })
  }

  @Query(() => [WeatherCondition], { name: 'weatherConditions' })
  async findAll(@Args("orderBy", { nullable: true }) orderBy: WeatherConditionOrderByWithAggregationInput): Promise<WeatherCondition[]> {
    const args = assembleStruct(undefined, undefined, orderBy)
    return this.prismaService.weatherCondition.findMany({ ...args })
  }

  @Query(() => WeatherCondition, { name: 'weatherCondition' })
  async findWithCondition(@Args('where') where: WeatherConditionWhereInput, @Args("orderBy", { nullable: true }) orderBy: WeatherConditionOrderByWithAggregationInput): Promise<WeatherCondition> {
    const args = assembleStruct(undefined, where, orderBy)
    return this.prismaService.weatherCondition.findFirst({ ...args })
  }

  @Mutation(() => WeatherCondition)
  async updateWeatherCondition(@Args('data') data: WeatherConditionUpdateInput, @Args('where') where: WeatherConditionWhereUniqueInput): Promise<WeatherCondition> {
    const args = assembleStruct(data, where, undefined)
    return this.prismaService.weatherCondition.update({ ...args })
  }

  @Mutation(() => WeatherCondition)
  async removeWeatherCondition( @Args('where') where: WeatherConditionWhereUniqueInput): Promise<WeatherCondition> {
    const args = assembleStruct(undefined, where, undefined)
    return this.prismaService.weatherCondition.delete({ ...args })
  }
}
