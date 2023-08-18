import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
async function main() {
  await prisma.city.create({
    data:{
      Name: 'Almaty',
      Lat: 20,
      Long: 20
    }  
  })
  await prisma.weatherCondition.createMany({
    data:[
      { Name: 'clear'},
      { Name: 'showers'},
      { Name: 'thunderstorm'},
      { Name: 'cloudy'}
    ]  
  })
  await prisma.forecast.createMany({
    data:[
      { Day: "2023-08-01T00:00:00.000Z", Hour: 0, CityId: 1, Temp: 20, Feels_like: 21, Cloudness: 0, ConditionId: 1, Daytime: "n", Prec_strength: 0.25 },
      { Day: "2023-08-01T00:00:00.000Z", Hour: 1, CityId: 1, Temp: 21, Feels_like: 22, Cloudness: 0.25, ConditionId: 2, Daytime: "n", Prec_strength: 0.5 },
      { Day: "2023-08-01T00:00:00.000Z", Hour: 2, CityId: 1, Temp: 22, Feels_like: 23, Cloudness: 0.5, ConditionId: 3, Daytime: "n", Prec_strength: 0.75 },
      { Day: "2023-08-01T00:00:00.000Z", Hour: 3, CityId: 1, Temp: 23, Feels_like: 24, Cloudness: 0.75, ConditionId: 4, Daytime: "n", Prec_strength: 1 },
      { Day: "2023-08-01T00:00:00.000Z", Hour: 4, CityId: 1, Temp: 24, Feels_like: 25, Cloudness: 1, ConditionId: 1, Daytime: "n", Prec_strength: 1 },
      { Day: "2023-08-01T00:00:00.000Z", Hour: 5, CityId: 1, Temp: 25, Feels_like: 26, Cloudness: 0.75, ConditionId: 2, Daytime: "n", Prec_strength: 1 },
      { Day: "2023-08-01T00:00:00.000Z", Hour: 6, CityId: 1, Temp: 26, Feels_like: 27, Cloudness: 0.5, ConditionId: 3, Daytime: "n", Prec_strength: 0.25 },
      { Day: "2023-08-01T00:00:00.000Z", Hour: 7, CityId: 1, Temp: 27, Feels_like: 28, Cloudness: 0.25, ConditionId: 1, Daytime: "n", Prec_strength: 0.5 },
      { Day: "2023-08-01T00:00:00.000Z", Hour: 8, CityId: 1, Temp: 28, Feels_like: 29, Cloudness: 0, ConditionId: 4, Daytime: "n", Prec_strength: 0.75 },
      { Day: "2023-08-01T00:00:00.000Z", Hour: 9, CityId: 1, Temp: 29, Feels_like: 30, Cloudness: 0.25, ConditionId: 2, Daytime: "n", Prec_strength: 0.25 },
      { Day: "2023-08-01T00:00:00.000Z", Hour: 10, CityId: 1, Temp: 30, Feels_like: 31, Cloudness: 0.5, ConditionId: 3, Daytime: "d", Prec_strength: 0 },
      { Day: "2023-08-01T00:00:00.000Z", Hour: 11, CityId: 1, Temp: 31, Feels_like: 32, Cloudness: 0.75, ConditionId: 2, Daytime: "d", Prec_strength: 1 },
      { Day: "2023-08-01T00:00:00.000Z", Hour: 12, CityId: 1, Temp: 32, Feels_like: 33, Cloudness: 1, ConditionId: 4, Daytime: "d", Prec_strength: 0.5 },
      { Day: "2023-08-01T00:00:00.000Z", Hour: 13, CityId: 1, Temp: 33, Feels_like: 34, Cloudness: 0.75, ConditionId: 3, Daytime: "d", Prec_strength: 0.25 },
      { Day: "2023-08-01T00:00:00.000Z", Hour: 14, CityId: 1, Temp: 34, Feels_like: 35, Cloudness: 0.5, ConditionId: 1, Daytime: "d", Prec_strength: 0.75 },
      { Day: "2023-08-01T00:00:00.000Z", Hour: 15, CityId: 1, Temp: 35, Feels_like: 36, Cloudness: 0.25, ConditionId: 2, Daytime: "d", Prec_strength: 0.25 },
      { Day: "2023-08-01T00:00:00.000Z", Hour: 16, CityId: 1, Temp: 36, Feels_like: 37, Cloudness: 0, ConditionId: 3, Daytime: "d", Prec_strength: 1 },
      { Day: "2023-08-01T00:00:00.000Z", Hour: 17, CityId: 1, Temp: 37, Feels_like: 38, Cloudness: 0.25, ConditionId: 2, Daytime: "d", Prec_strength: 0.5 },
      { Day: "2023-08-01T00:00:00.000Z", Hour: 18, CityId: 1, Temp: 38, Feels_like: 39, Cloudness: 0.5, ConditionId: 4, Daytime: "d", Prec_strength: 0 },
      { Day: "2023-08-01T00:00:00.000Z", Hour: 19, CityId: 1, Temp: 39, Feels_like: 40, Cloudness: 0.75, ConditionId: 4, Daytime: "d", Prec_strength: 0 },
      { Day: "2023-08-01T00:00:00.000Z", Hour: 20, CityId: 1, Temp: 39, Feels_like: 38, Cloudness: 0.75, ConditionId: 1, Daytime: "d", Prec_strength: 1 },
      { Day: "2023-08-01T00:00:00.000Z", Hour: 21, CityId: 1, Temp: 38, Feels_like: 37, Cloudness: 0.5, ConditionId: 1, Daytime: "n", Prec_strength: 0 },
      { Day: "2023-08-01T00:00:00.000Z", Hour: 22, CityId: 1, Temp: 37, Feels_like: 36, Cloudness: 0.25, ConditionId: 1, Daytime: "n", Prec_strength: 0 },
      { Day: "2023-08-01T00:00:00.000Z", Hour: 23, CityId: 1, Temp: 36, Feels_like: 35, Cloudness: 0, ConditionId: 1, Daytime: "n", Prec_strength: 0.25 },
      { Day: "2023-08-01T00:00:00.000Z", Hour: 24, CityId: 1, Temp: 35, Feels_like: 34, Cloudness: 0, ConditionId: 1, Daytime: "n", Prec_strength: 0.25 },

      { Day: "2023-08-02T00:00:00.000Z", Hour: 0, CityId: 1, Temp: 20, Feels_like: 21, Cloudness: 0, ConditionId: 1, Daytime: "n", Prec_strength: 0.25 },
      { Day: "2023-08-02T00:00:00.000Z", Hour: 1, CityId: 1, Temp: 21, Feels_like: 22, Cloudness: 0.25, ConditionId: 2, Daytime: "n", Prec_strength: 0.5 },
      { Day: "2023-08-02T00:00:00.000Z", Hour: 2, CityId: 1, Temp: 22, Feels_like: 23, Cloudness: 0.5, ConditionId: 3, Daytime: "n", Prec_strength: 0.75 },
      { Day: "2023-08-02T00:00:00.000Z", Hour: 3, CityId: 1, Temp: 23, Feels_like: 24, Cloudness: 0.75, ConditionId: 4, Daytime: "n", Prec_strength: 1 },
      { Day: "2023-08-02T00:00:00.000Z", Hour: 4, CityId: 1, Temp: 24, Feels_like: 25, Cloudness: 1, ConditionId: 1, Daytime: "n", Prec_strength: 1 },
      { Day: "2023-08-02T00:00:00.000Z", Hour: 5, CityId: 1, Temp: 25, Feels_like: 26, Cloudness: 0.75, ConditionId: 2, Daytime: "n", Prec_strength: 1 },
      { Day: "2023-08-02T00:00:00.000Z", Hour: 6, CityId: 1, Temp: 26, Feels_like: 27, Cloudness: 0.5, ConditionId: 3, Daytime: "n", Prec_strength: 0.25 },
      { Day: "2023-08-02T00:00:00.000Z", Hour: 7, CityId: 1, Temp: 27, Feels_like: 28, Cloudness: 0.25, ConditionId: 1, Daytime: "n", Prec_strength: 0.5 },
      { Day: "2023-08-02T00:00:00.000Z", Hour: 8, CityId: 1, Temp: 28, Feels_like: 29, Cloudness: 0, ConditionId: 4, Daytime: "n", Prec_strength: 0.75 },
      { Day: "2023-08-02T00:00:00.000Z", Hour: 9, CityId: 1, Temp: 29, Feels_like: 30, Cloudness: 0.25, ConditionId: 2, Daytime: "n", Prec_strength: 0.25 },
      { Day: "2023-08-02T00:00:00.000Z", Hour: 10, CityId: 1, Temp: 30, Feels_like: 31, Cloudness: 0.5, ConditionId: 3, Daytime: "d", Prec_strength: 0 },
      { Day: "2023-08-02T00:00:00.000Z", Hour: 11, CityId: 1, Temp: 31, Feels_like: 32, Cloudness: 0.75, ConditionId: 2, Daytime: "d", Prec_strength: 1 },
      { Day: "2023-08-02T00:00:00.000Z", Hour: 12, CityId: 1, Temp: 32, Feels_like: 33, Cloudness: 1, ConditionId: 4, Daytime: "d", Prec_strength: 0.5 },
      { Day: "2023-08-02T00:00:00.000Z", Hour: 13, CityId: 1, Temp: 33, Feels_like: 34, Cloudness: 0.75, ConditionId: 3, Daytime: "d", Prec_strength: 0.25 },
      { Day: "2023-08-02T00:00:00.000Z", Hour: 14, CityId: 1, Temp: 34, Feels_like: 35, Cloudness: 0.5, ConditionId: 1, Daytime: "d", Prec_strength: 0.75 },
      { Day: "2023-08-02T00:00:00.000Z", Hour: 15, CityId: 1, Temp: 35, Feels_like: 36, Cloudness: 0.25, ConditionId: 2, Daytime: "d", Prec_strength: 0.25 },
      { Day: "2023-08-02T00:00:00.000Z", Hour: 16, CityId: 1, Temp: 36, Feels_like: 37, Cloudness: 0, ConditionId: 3, Daytime: "d", Prec_strength: 1 },
      { Day: "2023-08-02T00:00:00.000Z", Hour: 17, CityId: 1, Temp: 37, Feels_like: 38, Cloudness: 0.25, ConditionId: 2, Daytime: "d", Prec_strength: 0.5 },
      { Day: "2023-08-02T00:00:00.000Z", Hour: 18, CityId: 1, Temp: 38, Feels_like: 39, Cloudness: 0.5, ConditionId: 4, Daytime: "d", Prec_strength: 0 },
      { Day: "2023-08-02T00:00:00.000Z", Hour: 19, CityId: 1, Temp: 39, Feels_like: 40, Cloudness: 0.75, ConditionId: 4, Daytime: "d", Prec_strength: 0 },
      { Day: "2023-08-02T00:00:00.000Z", Hour: 20, CityId: 1, Temp: 39, Feels_like: 38, Cloudness: 0.75, ConditionId: 1, Daytime: "d", Prec_strength: 1 },
      { Day: "2023-08-02T00:00:00.000Z", Hour: 21, CityId: 1, Temp: 38, Feels_like: 37, Cloudness: 0.5, ConditionId: 1, Daytime: "n", Prec_strength: 0 },
      { Day: "2023-08-02T00:00:00.000Z", Hour: 22, CityId: 1, Temp: 37, Feels_like: 36, Cloudness: 0.25, ConditionId: 1, Daytime: "n", Prec_strength: 0 },
      { Day: "2023-08-02T00:00:00.000Z", Hour: 23, CityId: 1, Temp: 36, Feels_like: 35, Cloudness: 0, ConditionId: 1, Daytime: "n", Prec_strength: 0.25 },
      { Day: "2023-08-02T00:00:00.000Z", Hour: 24, CityId: 1, Temp: 35, Feels_like: 34, Cloudness: 0, ConditionId: 1, Daytime: "n", Prec_strength: 0.25 },
    ]
  })
  console.log('Added product data')
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })