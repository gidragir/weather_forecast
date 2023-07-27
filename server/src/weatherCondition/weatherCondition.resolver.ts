import { Resolver, Query, Mutation, Arg } from 'type-graphql';
import * as generated from '../../prisma/generated/type-graphql';
import { PrismaService } from '../prisma.service';

@Resolver(() => generated.WeatherCondition)
export class WeatherConditionsResolver {
  constructor(private readonly prismaService: PrismaService) {}

  @Mutation(() => generated.WeatherCondition)
  createWeatherCondition(
    @Arg('createWeatherCondition')
    createWeatherCondition: generated.WeatherConditionCreateInput,
  ) {
    return this.prismaService.weatherCondition.create({
      data: createWeatherCondition,
    });
  }

  @Query(() => [generated.WeatherCondition], { name: 'weatherconditions' })
  findAll() {
    return this.prismaService.weatherCondition.findMany();
  }

  @Query(() => generated.WeatherCondition, { name: 'weathercondition' })
  findOne(@Arg('Id') Id: number) {
    return this.prismaService.weatherCondition.findUnique({
      where: { Id: Id },
    });
  }

  @Mutation(() => generated.WeatherCondition)
  updateWeatherCondition(
    @Arg('Id') Id: number,
    @Arg('updateWeatherCondition')
    updateWeatherCondition: generated.WeatherConditionUpdateInput,
  ) {
    return this.prismaService.weatherCondition.update({
      where: { Id: Id },
      data: updateWeatherCondition,
    });
  }

  @Mutation(() => generated.WeatherCondition)
  removeWeatherCondition(@Arg('Id') Id: number) {
    return this.prismaService.weatherCondition.delete({ where: { Id: Id } });
  }
}
