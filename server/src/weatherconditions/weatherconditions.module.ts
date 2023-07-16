import { Module } from '@nestjs/common'
import { WeatherConditionsService } from './weatherconditions.service'
import { WeatherConditionsResolver } from './weatherconditions.resolver'
import { PrismaService } from '../prisma.service'

@Module({
  providers: [WeatherConditionsResolver, WeatherConditionsService, PrismaService]
})
export class WeatherConditionsModule {}
