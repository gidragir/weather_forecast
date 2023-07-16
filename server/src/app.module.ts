import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppGateway } from './app/app.gateway';
import { PrismaService } from './prisma.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { CitiesModule } from './cities/cities.module';
import { WeatherConditionsModule } from './weatherconditions/weatherconditions.module';
import { ForecastsModule } from './forecasts/forecasts.module';
@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      installSubscriptionHandlers: true,
      autoSchemaFile: 'schema.graphql',
      sortSchema: true,
    }),
    AppModule,
    CitiesModule,
    WeatherConditionsModule,
    ForecastsModule,
  ],
  controllers: [AppController],
  providers: [PrismaService, AppGateway],
})
export class AppModule {}