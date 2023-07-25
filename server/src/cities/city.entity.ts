import { ObjectType, InputType, ArgsType, PartialType, Field, Int, Float } from '@nestjs/graphql'
import { Forecast } from '../forecasts/forecast.entity'

@ObjectType()
export class City {
  @Field(() => Int)
  Id: number

  @Field()
  Name: string

  @Field(() => Float)
  Lat: number

  @Field(() => Float)
  Long: number

  Forecasts?: Forecast[]
}

@InputType()
export class CreateCity {
  @Field()
  Name: string

  @Field(() => Float)
  Lat: number

  @Field(() => Float)
  Long: number
}

@InputType()
export class UpdateCity extends PartialType(City, InputType) {}

@ArgsType()
export class ArgsCity extends PartialType(City, ArgsType) {}


@InputType()
export class CityWhereUniqueInput {
  @Field(() => Int, { nullable: true })
  Id?: number | undefined

  @Field({ nullable: true })
  Name?: string | undefined
}
@InputType()
export class CityConnect {
  @Field(() => CityWhereUniqueInput)
  connect?: CityWhereUniqueInput | undefined
}

