import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { ForecastsService } from './forecasts.service'
import { Forecast, CreateForecast, UpdateForecast, ArgsForecast } from './forecast.entity'

@Resolver(() => Forecast)
export class ForecastsResolver {
  constructor(private readonly forecastsService: ForecastsService) {}

  @Mutation(() => Forecast)
  createForecast(@Args('createForecast') createForecast: CreateForecast) {
    return this.forecastsService.create(createForecast);
  }

  @Query(() => [Forecast], { name: 'forecasts' })
  findAll() {
    return this.forecastsService.findAll();
  }

  @Query(() => Forecast, { name: 'forecast' })
  findOne(@Args() args: ArgsForecast) {
    return this.forecastsService.findOne(args);
  }

  @Mutation(() => Forecast)
  updateForecast(
    @Args('Id') Id: number,
    @Args('updateForecast') updateForecast: UpdateForecast,
  ) {
    return this.forecastsService.update(Id, updateForecast);
  }

  @Mutation(() => Forecast)
  removeForecast(@Args() args: ArgsForecast) {
    return this.forecastsService.remove(args);
  }
}
