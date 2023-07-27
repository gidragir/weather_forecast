import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Forecast } from "../models/Forecast";
import { CityCount } from "../resolvers/outputs/CityCount";

@TypeGraphQL.ObjectType("City", {
  isAbstract: true
})
export class City {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  Id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  Name!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: false
  })
  Lat!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: false
  })
  Long!: number;

  Forecasts?: Forecast[];

  @TypeGraphQL.Field(_type => CityCount, {
    nullable: true
  })
  _count?: CityCount | null;
}
