export class InfoModel {
  "Day": string
  "Cloudness": number
  "Condition": string
  "Feels_like": number
  "Daytime": string
  "Temp": number
  "Prec_strength": number

  constructor(
    Day = "",
    Cloudness = 0,
    Condition = "",
    Feels_like = 0,
    Daytime = "",
    Temp = 0,
    Prec_strength = 0
  ) {
    this.Day = Day
    this.Cloudness = Cloudness
    this.Condition = Condition
    this.Feels_like = Feels_like
    this.Daytime = Daytime
    this.Temp = Temp
    this.Prec_strength = Prec_strength
  }
}
