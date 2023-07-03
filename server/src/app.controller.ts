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
      const apiKey = 'e1c14a8d-6445-4241-b433-1b4b6acd2642'
      const url = `https://api.weather.yandex.ru/v2/forecast?lat=43.26&lon=76.92`
      const response = await fetch(url, {
        headers: {
          'X-Yandex-API-Key': apiKey,
        }
      })
      const data = await response.json()

      const result = {
        'temp': data.fact.temp
      }

      return result 
    }
}
