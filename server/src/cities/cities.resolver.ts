import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { City, CreateCity, UpdateCity, ArgsCity } from './city.entity'
import { PrismaService } from '../prisma.service'

@Resolver(() => City)
export class CitiesResolver {
  constructor(private readonly prismaService: PrismaService) {}

  @Mutation(() => City)
  createCity(@Args('createCity') createCity: CreateCity) {
    return this.prismaService.city.create({data: createCity })
  }

  @Query(() => [City], { name: 'cities' })
  findAll() {
    return this.prismaService.city.findMany()
  }

  // @Query(() => City, { name: 'city' })
  // findOne(@Args() args: ArgsCity) {
  //   return this.prismaService.city.findUnique({where: args})
  // }

  // @Mutation(() => City)
  // updateCity(
  //   @Args('Id') Id: number,
  //   @Args('updateCity') updateCity: UpdateCity,
  // ) {
  //   return this.prismaService.city.update({
  //     where: { Id : Id },
  //     data: updateCity,
  //   });
  // }

  // @Mutation(() => City)
  // removeCity(@Args() args: ArgsCity) {
  //   return this.prismaService.city.delete({ where: args })
  // }
}
