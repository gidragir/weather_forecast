import { Resolver, Args, Query, Mutation } from '@nestjs/graphql'
import { AppService } from './app.service'
import { WeatherCondition, WeatherConditionInput } from './app.model'

@Resolver((of) => WeatherCondition)
export class ForecastResolver {
  constructor(private readonly appService: AppService) {}
  @Query(() => String)
  async foo(): Promise<string> {
    return '';
  }

  @Mutation(returns => WeatherCondition)
  async Create(@Args('input') args: WeatherConditionInput): Promise<WeatherCondition> {
    return this.appService.AddWeatherCondition(args)  
  }
}