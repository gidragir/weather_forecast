import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { WeatherCondition, CreateWeatherCondition, UpdateWeatherCondition } from './weathercondition.entity'
import { WeatherConditionWhereInput } from '../etc/inputs';
import { PrismaService } from '../prisma.service'
import { restructData } from '../misc';

@Resolver(() => WeatherCondition)
export class WeatherConditionsResolver {
  constructor(private readonly prismaService: PrismaService) {}

  @Mutation(() => WeatherCondition)
  async createWeatherCondition(@Args('createWeatherCondition') createWeatherCondition: CreateWeatherCondition): Promise<WeatherCondition> {
    return this.prismaService.weatherCondition.create({
      data: createWeatherCondition,
    });
  }

  @Query(() => [WeatherCondition], { name: 'weatherConditions' })
  async findAll(): Promise<WeatherCondition[]> {
    return this.prismaService.weatherCondition.findMany();
  }

  @Query(() => WeatherCondition, { name: 'weatherCondition' })
  async findOne(@Args('args') args: WeatherConditionWhereInput): Promise<WeatherCondition> {
    return this.prismaService.weatherCondition.findFirst({ where: args });
  }

  @Mutation(() => WeatherCondition)
  async updateWeatherCondition(@Args('updateWeatherCondition') updateWeatherCondition: UpdateWeatherCondition): Promise<WeatherCondition> {
    return this.prismaService.weatherCondition.update({
      ...restructData(updateWeatherCondition.where),
    });
  }

  @Mutation(() => WeatherCondition)
  async removeWeatherCondition( @Args('args') args: WeatherConditionWhereInput): Promise<WeatherCondition> {
    return this.prismaService.weatherCondition.delete({
      where: restructData(args),
    });
  }
}
