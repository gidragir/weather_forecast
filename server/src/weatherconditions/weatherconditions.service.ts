import { Injectable } from '@nestjs/common'
import { CreateWeatherCondition, UpdateWeatherCondition, ArgsWeatherCondition } from './weathercondition.entity'
import { PrismaService } from '../prisma.service'

@Injectable()
export class WeatherConditionsService {
  constructor(private readonly prismaService: PrismaService) { }
  
  create(createWeathercondition: CreateWeatherCondition) {
    return this.prismaService.weatherConditions.create({data: createWeathercondition })
  }

  findAll() {
    return this.prismaService.weatherConditions.findMany()
  }

  findOne(args: ArgsWeatherCondition) {
    return this.prismaService.weatherConditions.findUnique({where: args})
  }

  update(Id: number, updateWeatherCondition: UpdateWeatherCondition) {
    return this.prismaService.weatherConditions.update({
      where: { Id: Id },
      data: updateWeatherCondition
    })
  }

  remove(args: ArgsWeatherCondition) {
    return this.prismaService.weatherConditions.delete({ where: args })
  }
}
