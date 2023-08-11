export interface Forecast {
  Day: string
  Cloudness: number
  Condition: string
  Feels_like: number
  Daytime: string
  Temp: number
  Prec_strength: number
}

export interface City {
  Name: string
  Lat: Float32Array
  Long: Float32Array
}