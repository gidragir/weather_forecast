export function restuctData (rawData: any) : any{
  const object = {}
  const properties = Object.getOwnPropertyNames(rawData)
  properties.forEach((property) => {
    if (property.includes('Id') && property != 'Id') {
      object[property.replace('Id', '')] = {
        connect: {
          Id: rawData[property],
        },
      }
    } else {
      object[property] = rawData[property] 
    }
  })
  return object
}