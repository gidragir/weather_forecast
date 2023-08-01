import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { City, CreateCity } from './city.entity'
import { CityWhereInput, CityUpdateInput, CityWhereUniqueInput } from '../etc/inputs';
import { CityOrderByWithAggregationInput } from '../etc/orders'
import { PrismaService } from '../prisma.service'
import {
  assembleStruct,
} from '../misc';

@Resolver(() => City)
export class CitiesResolver {
  constructor(private readonly prismaService: PrismaService) {}

  @Mutation(() => City)
  async createCity(@Args('data') data: CreateCity): Promise<City> {
    const args = assembleStruct(data, undefined, undefined)
    return this.prismaService.city.create({ ...args });
  }

  @Query(() => [City], { name: 'cities' })
  async findAll(@Args("orderBy", { nullable: true }) orderBy: CityOrderByWithAggregationInput): Promise<City[]> {
    const args = assembleStruct(undefined, undefined, orderBy)
    return this.prismaService.city.findMany({ ...args });
  }

  @Query(() => City, { name: 'city' })
  async findWithCondition(@Args('where') where: CityWhereInput, @Args("orderBy", { nullable: true }) orderBy: CityOrderByWithAggregationInput): Promise<City> {
    const args = assembleStruct(undefined, where, orderBy)
    return this.prismaService.city.findFirst({ ...args });
  }

  @Mutation(() => City)
  async updateCity(@Args('data') data: CityUpdateInput, @Args('where') where: CityWhereUniqueInput): Promise<City> {
    const args = assembleStruct(data, where, undefined)
    return this.prismaService.city.update({ ...args });
  }

  @Mutation(() => City)
  async removeCity(@Args('where') where: CityWhereUniqueInput): Promise<City> {
    const args = assembleStruct(undefined, where, undefined)
    return this.prismaService.city.delete({ ...args });
  }
}
