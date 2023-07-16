import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { WeatherConditionsService } from './weatherconditions.service'
import { WeatherCondition, CreateWeatherCondition, UpdateWeatherCondition, ArgsWeatherCondition } from './weathercondition.entity'

@Resolver(() => WeatherCondition)
export class WeatherConditionsResolver {
  constructor(private readonly weatherConditionsService: WeatherConditionsService) {}

  @Mutation(() => WeatherCondition)
  createWeatherCondition(@Args('createWeatherCondition') createWeatherCondition: CreateWeatherCondition) {
    return this.weatherConditionsService.create(createWeatherCondition)
  }

  @Query(() => [WeatherCondition], { name: 'weatherConditions' })
  findAll() {
    return this.weatherConditionsService.findAll()
  }

  @Query(() => WeatherCondition, { name: 'weatherCondition' })
  findOne(@Args() args: ArgsWeatherCondition) {
    return this.weatherConditionsService.findOne(args)
  }

  @Mutation(() => WeatherCondition)
  updateWeatherCondition(@Args('Id') Id: number, @Args('updateWeatherCondition') updateWeatherCondition: UpdateWeatherCondition) {
    return this.weatherConditionsService.update(Id, updateWeatherCondition)
  }

  @Mutation(() => WeatherCondition)
  removeWeatherCondition(@Args() args: ArgsWeatherCondition) {
    return this.weatherConditionsService.remove(args)
  }
}
