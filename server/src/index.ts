import { CitiesResolver } from './cities/cities.resolver'
import { WeatherConditionsResolver } from './weatherconditions/weatherconditions.resolver'
import { ForecastsResolver } from './forecasts/forecasts.resolver'
import { AppGateway } from './app/app.gateway';
import { PrismaService } from './prisma.service';


export const resolvers = [AppGateway, PrismaService, WeatherConditionsResolver, ForecastsResolver, CitiesResolver]