import { Module } from '@nestjs/common'
import { WeatherConditionsService } from './weatherconditions.service'
import { WeatherConditionsResolver } from './weatherconditions.resolver'
import { PrismaService } from '../prisma.service'
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path'


@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      buildSchemaOptions: { dateScalarMode: 'timestamp' },
    }),
  ],
  providers: [WeatherConditionsResolver, WeatherConditionsService, PrismaService]
})
export class WeatherConditionsModule {}
