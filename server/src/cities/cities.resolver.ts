import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { City, CreateCity, UpdateCity } from './city.entity'
import { CityWhereInput, CityWhereUniqueInput } from '../etc/inputs';
import { PrismaService } from '../prisma.service'
import {
  restructData,
} from '../misc';

@Resolver(() => City)
export class CitiesResolver {
  constructor(private readonly prismaService: PrismaService) {}

  @Mutation(() => City)
  async createCity(@Args('createCity') createCity: CreateCity): Promise<City> {
    return this.prismaService.city.create({ data: createCity });
  }

  @Query(() => [City], { name: 'cities' })
  async findAll(): Promise<City[]> {
    return this.prismaService.city.findMany();
  }

  @Query(() => City, { name: 'city' })
  async findOne(@Args('args') args: CityWhereInput): Promise<City> {
    return this.prismaService.city.findFirst({ where: args });
  }

  @Mutation(() => City)
  async updateCity(@Args('updateCity') updateCity: UpdateCity): Promise<City> {
    return this.prismaService.city.update({
      ...restructData(updateCity),
    });
  }

  @Mutation(() => City)
  async removeCity(@Args('args') args: CityWhereUniqueInput): Promise<City> {
    return this.prismaService.city.delete({ where: restructData(args) });
  }
}
