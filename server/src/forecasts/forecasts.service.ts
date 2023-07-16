import { Injectable } from '@nestjs/common'
import { CreateForecast, UpdateForecast, ArgsForecast } from './forecast.entity'
import { PrismaService } from '../prisma.service'
import { restuctData } from '../misc'

@Injectable()
export class ForecastsService {
  constructor(private readonly prismaService: PrismaService) { }
  
  create(createForecast: CreateForecast) {
    return this.prismaService.forecasts.create({
      data: restuctData(createForecast)
    })
  }

  findAll() {
    return this.prismaService.forecasts.findMany()
  }

  findOne(args: ArgsForecast) {
    return this.prismaService.forecasts.findUnique({where: args})
  }

  update(Id: number, updateForecast: UpdateForecast) {
    return this.prismaService.forecasts.update({
      where: { Id: Id },
      data: restuctData(updateForecast),
    });
  }

  remove(args: ArgsForecast) {
    return this.prismaService.forecasts.delete({ where: args })
  }
}
