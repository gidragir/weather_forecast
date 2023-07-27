import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CityCreateNestedOneWithoutForecastsInput } from "../inputs/CityCreateNestedOneWithoutForecastsInput";

@TypeGraphQL.InputType("ForecastCreateWithoutConditionInput", {
  isAbstract: true
})
export class ForecastCreateWithoutConditionInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  Day!: Date;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  Hour!: number;

  @TypeGraphQL.Field(_type => CityCreateNestedOneWithoutForecastsInput, {
    nullable: false
  })
  City!: CityCreateNestedOneWithoutForecastsInput;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: false
  })
  Temp!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: false
  })
  Feels_like!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: false
  })
  Cloudness!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  Daytime!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: false
  })
  Prec_strength!: number;
}
