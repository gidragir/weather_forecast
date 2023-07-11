import { Injectable } from '@nestjs/common'
import { PrismaService } from './prisma.service'
import { WeatherConditionInput } from './app.model'

@Injectable()
export class AppService {
  constructor(private prisma: PrismaService) { }

  getHello(): string {
    return 'Hello World!';
  }

  async AddWeatherCondition(input: WeatherConditionInput) {
    return this.prisma.weatherConditions.create({data: input});
  }
}
