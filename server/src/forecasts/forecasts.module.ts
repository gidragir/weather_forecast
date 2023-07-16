import { Module } from '@nestjs/common'
import { ForecastsService } from './forecasts.service'
import { ForecastsResolver } from './forecasts.resolver'
import { PrismaService } from '../prisma.service'

@Module({
  providers: [ForecastsResolver, ForecastsService, PrismaService]
})
export class ForecastsModule {}
