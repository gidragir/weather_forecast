import { Injectable } from '@nestjs/common'
import { CreateCity, UpdateCity, ArgsCity } from './city.entity'
import { PrismaService } from '../prisma.service'

@Injectable()
export class CitiesService {
  constructor(private readonly prismaService: PrismaService) { }

  create(createCity: CreateCity) {
    return this.prismaService.cities.create({data: createCity })
  }

  findAll() {
    return this.prismaService.cities.findMany()
  }

  findOne(args: ArgsCity) {
    return this.prismaService.cities.findUnique({where: args})
  }

  update(Id: number, updateCity: UpdateCity) {
    return this.prismaService.cities.update({
      where: { Id : Id },
      data: updateCity,
    });
  }

  remove(args: ArgsCity) {
    return this.prismaService.cities.delete({ where: args })
  }
}
