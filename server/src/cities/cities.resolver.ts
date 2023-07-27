import { Resolver, Query, Mutation, Arg } from 'type-graphql'
import * as generated from '../../prisma/generated/type-graphql'
import { PrismaService } from '../prisma.service'
import { assembleStruct } from '../misc'

@Resolver(() => generated.City)
export class CitiesResolver {
  constructor(private readonly prismaService: PrismaService) { }

  @Mutation(() => generated.City)
  createCity(@Arg('data') data: generated.CityCreateInput) {
    const args = assembleStruct(data, undefined, undefined)
    return this.prismaService.city.create({...args});
  }

  @Query(() => [generated.City], { name: 'cities' })
  findAll(
    @Arg("where") where: generated.CityWhereInput, 
    @Arg("orderBy", { nullable: true }) orderBy: generated.CityOrderByWithAggregationInput) {
    const args = assembleStruct(undefined, where, orderBy)
    
    return this.prismaService.city.findMany({...args});
  }

  @Query(() => generated.City, { name: 'city' })
  findOne(@Arg("where") where: generated.CityWhereInput ) {
    const args = assembleStruct(undefined, where, undefined)
    return this.prismaService.city.findFirst({...args})
  }

  @Mutation(() => generated.City)
  updateCity(
    @Arg('data') data: generated.CityUpdateInput,
    @Arg('where') where: generated.CityWhereUniqueInput
  ) {
    const args = assembleStruct(data, where, undefined)
    return this.prismaService.city.update({...args});
  }

  @Mutation(() => generated.City)
  removeCity(@Arg("Id") Id: number) {
    return this.prismaService.city.delete({ where: { Id: Id }});
  }
}
