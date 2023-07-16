import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { CitiesService } from './cities.service'
import { City, CreateCity, UpdateCity, ArgsCity } from './city.entity'

@Resolver(() => City)
export class CitiesResolver {
  constructor(private readonly citiesService: CitiesService) {}

  @Mutation(() => City)
  createCity(@Args('createCity') createCity: CreateCity) {
    return this.citiesService.create(createCity);
  }

  @Query(() => [City], { name: 'cities' })
  findAll() {
    return this.citiesService.findAll();
  }

  @Query(() => City, { name: 'city' })
  findOne(@Args() args: ArgsCity) {
    return this.citiesService.findOne(args);
  }

  @Mutation(() => City)
  updateCity(
    @Args('Id') Id: number,
    @Args('updateCity') updateCity: UpdateCity,
  ) {
    return this.citiesService.update(Id, updateCity);
  }

  @Mutation(() => City)
  removeCity(@Args() args: ArgsCity) {
    return this.citiesService.remove(args);
  }
}
