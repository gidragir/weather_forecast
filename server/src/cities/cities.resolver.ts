import { Resolver, Query, Mutation, Arg } from 'type-graphql'
import * as generated from '../../prisma/generated/type-graphql'
import { PrismaService } from '../prisma.service'

@Resolver(() => generated.City)
export class CitiesResolver {
  constructor(private readonly prismaService: PrismaService) { }

  @Mutation(() => generated.City)
  createCity(@Arg('createCity') createCity: generated.CityCreateInput) {
    return this.prismaService.city.create({data: createCity });
  }

  @Query(() => [generated.City], { name: 'cities' })
  findAll(
    @Arg("where") where: generated.CityWhereInput, 
    @Arg("orderBy", { nullable: true }) orderBy?: generated.CityOrderByWithAggregationInput) {
    const args = {
      where: where,
      orderBy: orderBy
    }
    
    return this.prismaService.city.findMany({...args});
  }

  @Query(() => generated.City, { name: 'city' })
  findOne(@Arg("where") where: generated.CityWhereInput ) {
    return this.prismaService.city.findFirst({where: where})
  }

  @Mutation(() => generated.City)
  updateCity(
    @Arg('Id') Id: number,
    @Arg('updateCity') updateCity: generated.CityUpdateInput,
  ) {
    return this.prismaService.city.update({
      where: { Id: Id },
      data: updateCity,
    });
  }

  @Mutation(() => generated.City)
  removeCity(@Arg("Id") Id: number) {
    return this.prismaService.city.delete({ where: { Id: Id }});
  }
}
