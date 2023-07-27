import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppGateway } from './app/app.gateway';
import { PrismaService } from './prisma.service';
import { TypeGraphQLModule  } from 'typegraphql-nestjs';
import { ApolloDriver } from '@nestjs/apollo';
import { CitiesResolver } from './cities/cities.resolver';
import { WeatherConditionsResolver } from './weatherCondition/weatherCondition.resolver';
import { ForecastsResolver } from './forecast/forecast.resolver';
import { resolve } from 'path'
@Module({
  imports: [
    TypeGraphQLModule.forRoot({
      driver: ApolloDriver,
      path: "/",
      emitSchemaFile: resolve(__dirname, "./generated-schema.graphql"),
      validate: false,
    }),
    AppModule
  ],
  controllers: [AppController],
  providers: [PrismaService, AppGateway, CitiesResolver, WeatherConditionsResolver, ForecastsResolver],
})
export class AppModule {}