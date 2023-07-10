import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { request } from 'http';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('weather')
  async getWeather(@Query('city') city) {
      // const apiKey = 'e1c14a8d-6445-4241-b433-1b4b6acd2642'
      // const url = `https://api.weather.yandex.ru/v2/informers?lat=43.26&lon=76.92`
      // const response = await fetch(url, {
      //   headers: {
      //     'X-Yandex-API-Key': apiKey,
      //   }
      // })
      // const data = await response.json()

      // const result = {
      //   main: {
      //     'cloudness': data.fact.cloudness,
      //     'condition': data.fact.condition,
      //     'feels_like': data.fact.feels_like,
      //     'daytime': data.fact.daytime,
      //     'prec_strength': data.fact.prec_strength,
      //     'temp': data.fact.temp
      //   },
      //   details: []
      // }

      // data.forecast.parts.forEach(info => {
      //   result.details.push(
      //     {
      //       'cloudness': info.cloudness,
      //       'condition': info.condition,
      //       'feels_like': info.feels_like,
      //       'daytime': info.daytime,
      //       'prec_strength': info.prec_strength,
      //       'temp': info.temp
      //       }
      //   )  
      // })
      const result = {
        main: {
          'cloudness': 0.5,
          'condition': 'cloudy',
          'feels_like': 28,
          'daytime': 'd',
          'temp': 28,
          'prec_strength': 0.75
        },
        details: [
          {
            'cloudness': 0,
            'condition': 'thunderstorm',
            'feels_like': 31,
            'daytime': 'n',
            'temp': 31,
            'prec_strength': 0
    
          }
        ] 
      }

      return result 
    }
}

// INSERT INTO "WeatherConditions" (name) 
// VALUES ('clear'), ('cloudy'), ('thunderstorm'), ('showers')