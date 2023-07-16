import { Module } from '@nestjs/common'
import { CitiesService } from './cities.service'
import { CitiesResolver } from './cities.resolver'
import { PrismaService } from '../prisma.service'

@Module({
  providers: [CitiesResolver, CitiesService, PrismaService]
})
export class CitiesModule {}
