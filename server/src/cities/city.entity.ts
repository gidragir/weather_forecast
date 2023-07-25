import { ObjectType, InputType, ArgsType, Field, Int, Float } from '@nestjs/graphql'
import { Forecast } from '../forecasts/forecast.entity'
import {
  CityWhereInput,
  CityWhereUniqueInput,
  CityUpdateInput,
} from '../etc/inputs';
import { CityOrderByWithRelationInput } from '../etc/orders';
import { CityScalarFieldEnum } from '../etc/fieldEnums';

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
export class UpdateCity {
  @Field(() => CityUpdateInput, {
    nullable: false,
  })
  data!: CityUpdateInput;

  @Field(() => CityWhereUniqueInput, {
    nullable: false,
  })
  where!: CityWhereUniqueInput;
}


@ArgsType()
export class ArgsCity {
  @Field(() => CityWhereInput, {
    nullable: true,
  })
  where?: CityWhereInput | undefined;

  @Field(() => [CityOrderByWithRelationInput], {
    nullable: true,
  })
  orderBy?: CityOrderByWithRelationInput[] | undefined;

  @Field(() => CityWhereUniqueInput, {
    nullable: true,
  })
  cursor?: CityWhereUniqueInput | undefined;

  @Field(() => Int, {
    nullable: true,
  })
  take?: number | undefined;

  @Field(() => Int, {
    nullable: true,
  })
  skip?: number | undefined;

  @Field(() => [CityScalarFieldEnum], {
    nullable: true,
  })
  distinct?: Array<'Id' | 'Name' | 'Lat' | 'Long'> | undefined;
}

@InputType()
export class CityConnect {
  @Field(() => CityWhereUniqueInput)
  connect?: CityWhereUniqueInput | undefined
}

