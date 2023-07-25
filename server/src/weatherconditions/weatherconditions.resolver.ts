import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { WeatherCondition, CreateWeatherCondition, UpdateWeatherCondition, ArgsWeatherCondition } from './weathercondition.entity'
import { PrismaService } from '../prisma.service'

@Resolver(() => WeatherCondition)
export class WeatherConditionsResolver {
  constructor(private readonly prismaService: PrismaService) {}

  @Mutation(() => WeatherCondition)
  createWeatherCondition(@Args('createWeatherCondition') createWeatherCondition: CreateWeatherCondition) {
    return this.prismaService.weatherCondition.create({data: createWeatherCondition })
  }

  @Query(() => [WeatherCondition], { name: 'weatherConditions' })
  findAll() {
    return this.prismaService.weatherCondition.findMany()
  }

  // @Query(() => WeatherCondition, { name: 'weatherCondition' })
  // findOne(@Args() args: ArgsWeatherCondition) {
  //   return this.prismaService.weatherCondition.findUnique({where: args})
  // }

  // @Mutation(() => WeatherCondition)
  // updateWeatherCondition(@Args('Id') Id: number, @Args('updateWeatherCondition') updateWeatherCondition: UpdateWeatherCondition) {
  //   return this.prismaService.weatherCondition.update({
  //     where: { Id: Id },
  //     data: updateWeatherCondition
  //   })
  // }

  // @Mutation(() => WeatherCondition)
  // removeWeatherCondition(@Args() args: ArgsWeatherCondition) {
  //   return this.prismaService.weatherCondition.delete({ where: args })
  // }
}
