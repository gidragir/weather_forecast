export function restuctData (rawData: any) : any{
  return rawData
}

export function assembleStruct(
  data?: any,
  where?: any,
  orderBy?: any) : any{
  const result = {
    data: data,
    where: where,
    orderBy: orderBy
  }

  return result
}