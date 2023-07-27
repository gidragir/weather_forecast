import * as TypeGraphQL from "type-graphql";

export enum CityScalarFieldEnum {
  Id = "Id",
  Name = "Name",
  Lat = "Lat",
  Long = "Long"
}
TypeGraphQL.registerEnumType(CityScalarFieldEnum, {
  name: "CityScalarFieldEnum",
  description: undefined,
});
