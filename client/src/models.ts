export class InfoModel {
  "cloudness": number
  "condition": string
  "feels_like": number
  "daytime": string
  "temp": number
  "prec_strength": number


  constructor(cloudness = 0, 
    condition = '', 
    feels_like = 0, 
    daytime = '', 
    temp = 0,
    prec_strength = 0) {
    
    this.cloudness = cloudness
    this.condition = condition
    this.feels_like = feels_like
    this.daytime = daytime
    this.temp = temp
    this.prec_strength = prec_strength
  }
}
