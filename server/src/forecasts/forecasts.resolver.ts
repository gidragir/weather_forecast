import { Resolver, ResolveField, Root, Query, Mutation, Args, Info } from '@nestjs/graphql'
import { Forecast, CreateForecast, City, WeatherCondition, ForecastGroupBy } from './forecast.entity'
import { ForecastWhereInput, ForecastUpdateInput, ForecastWhereUniqueInput } from '../etc/inputs'
import { ForecastOrderByWithAggregationInput } from '../etc/orders'
import { ForecastScalarFieldEnum } from '../etc/fieldEnums'
import { PrismaService } from '../prisma.service'
import { assembleStruct } from '../misc'
import type { GraphQLResolveInfo } from "graphql"
import graphqlFields = require('graphql-fields')

@Resolver(() => Forecast)
export class ForecastsResolver {
  constructor(private readonly prismaService: PrismaService) {}

  //#region Query
  @Query(() => [Forecast], { name: 'forecasts' })
  async findAll(@Args("orderBy", { nullable: true }) orderBy: ForecastOrderByWithAggregationInput): Promise<Forecast[]> {
    const args = assembleStruct(undefined, undefined, orderBy)
    return await this.prismaService.forecast.findMany({ ...args }) as Forecast[]
  }

  @Query(() => Forecast, { name: 'forecast' })
  async findWithCondition(@Args('where') where: ForecastWhereInput, @Args("orderBy", { nullable: true }) orderBy: ForecastOrderByWithAggregationInput): Promise<Forecast> {
    const args = assembleStruct(undefined, where, orderBy)
    return await this.prismaService.forecast.findFirst({ ...args }) as Forecast
  }
  //#endregion

  //#region Mutation
  @Mutation(() => Forecast)
  async createForecast(@Args('data') data: CreateForecast): Promise<Forecast> {
    const args = assembleStruct(data, undefined, undefined)
    return await this.prismaService.forecast.create({ ...args }) as Forecast
  }

  @Mutation(() => Forecast)
  async updateForecast(@Args('data') data: ForecastUpdateInput, @Args('where') where: ForecastWhereUniqueInput): Promise<Forecast> {
    const args = assembleStruct(data, where, undefined)
    return await this.prismaService.forecast.update({ ...args }) as Forecast
  }

  @Mutation(() => [Forecast])
  async updateManyForecast(@Args('data') data: ForecastUpdateInput, @Args('where') where: ForecastWhereUniqueInput): Promise<Forecast[]> {
    const args = assembleStruct(data, where, undefined)
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return await this.prismaService.forecast.update({ ...args }) as Forecast[]
  }

  @Mutation(() => Forecast)
  async removeForecast(@Args('where') where: ForecastWhereUniqueInput): Promise<Forecast> {
    const args = assembleStruct(undefined, where, undefined)
    return await this.prismaService.forecast.delete({ ...args }) as Forecast
  }

  //#endregion

  //#region ResolveField
  @ResolveField(() => City, { nullable: true })
  async City(@Root() forecast: Forecast) {
    return await this.prismaService.forecast.findUnique({where:{ Id: forecast.Id}}).City()
  }
  
  @ResolveField(() => WeatherCondition, { nullable: true })
  async Condition(@Root() forecast: Forecast) {
    return await this.prismaService.forecast.findUnique({where:{ Id: forecast.Id}}).Condition()
  }

  
  @ResolveField(() => [ForecastGroupBy])
  async forecastGroupBy(@Root() forecast: Forecast, @Info() info: GraphQLResolveInfo): Promise<ForecastGroupBy[]> {
    
    const fields: Record<string, any> = graphqlFields(
      info as any,
      {},
      {
        excludedFields: ['__typename'],
        processArguments: true,
      }
    )
    const { _count, _avg, _sum, _min, _max } = transformFields(fields)
    const keys: string[] = Object.keys(fields)
    const by: Array<ForecastScalarFieldEnum> = new Array<ForecastScalarFieldEnum>
    keys.forEach(element => {
      if (element in ForecastScalarFieldEnum)
        by.push(ForecastScalarFieldEnum[element])  
    })

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return await this.prismaService.forecast.groupBy({
      by: by, where:{ Day: forecast.Day},
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      )
    }) as ForecastGroupBy[]   
  }


  @ResolveField(() => [Forecast], { nullable: true })
  async Hours(@Root() forecast: Forecast): Promise<Forecast[]> {
    return await this.prismaService.forecast.findMany({ where:{ Day: forecast.Day }, orderBy:{ Hour:"asc" } }) as Forecast[]
  }

  @ResolveField(() => [Forecast], { nullable: true })
  async Details(
    @Args('where') where: ForecastWhereInput, 
    @Args("orderBy", { nullable: true }) orderBy: ForecastOrderByWithAggregationInput
  ): Promise<Forecast[]> {
    const args = assembleStruct(undefined, where, orderBy)
    return await this.prismaService.forecast.findMany({ ...args }) as Forecast[]
  }
  //#endregion
}

function transformFields(fields: Record<string, any>): Record<string, any> {
  return Object.fromEntries(
    Object.entries(fields)
      .map<[string, any]>(([key, value]) => {
        if (Object.keys(value).length === 0) {
          return [key, true];
        }
        if ("__arguments" in value) {
          return [key, Object.fromEntries(
            value.__arguments.map((argument: object) => {
              const [[key, { value }]] = Object.entries(argument);
              return [key, value];
            })
          )];
        }
        return [key, transformFields(value)];
      }),
  );
}