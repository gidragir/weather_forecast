export interface Forecast {
  Day: string
  info: {
    Day: string
    max:{
      Temp: number  
      Feels_like: number
    }
    min:{
      Temp: number  
      Feels_like: number
    }
    avg:{
      Prec_strength: number
    }
  }[]
  Hours:{
    Hour: number
    Temp: number
    Feels_like: number
    Prec_strength: number
    Daytime: string
    Cloudness: number
    Condition: string
  }[]
}

export interface City {
  Name: string
  Lat: Float32Array
  Long: Float32Array
}