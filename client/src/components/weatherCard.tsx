import React, {Component} from "react"
import {Forecast} from "../models"
import "../scss/_weatherCard.scss"
import {
  sunny,
  moon,
  cloudy_little,
  cloudy_small,
  cloudy_high,
  thunder,
  rain_little,
  rain_small,
  rain_medium,
  rain_high,
} from "../assets/weather_condition_icons"

let days = [
  "Воскресенье",
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
]
export default class WeatherCard extends Component<{forecast: Forecast}> {
  //#region misc
  getCondition(condition: string): string {
    let weatherSrc: string
    switch (condition) {
      case "clear":
        weatherSrc = sunny
        break

      case "showers":
        weatherSrc = rain_high
        break

      case "thunderstorm":
        weatherSrc = thunder
        break

      case "cloudy":
        weatherSrc = cloudy_little
        break

      default:
        weatherSrc = sunny
        break
    }
    return weatherSrc
  }

  getPrec(prec: number): string {
    let precSrc: string
    switch (prec) {
      case 0:
        precSrc = cloudy_little
        break

      case 0.25:
        precSrc = rain_little
        break

      case 0.5:
        precSrc = rain_small
        break

      case 0.75:
        precSrc = rain_medium
        break

      case 1:
        precSrc = rain_high
        break

      default:
        precSrc = ""
        break
    }
    return precSrc
  }

  getCloudness(cloudness: number): string {
    let cloudnessSrc: string
    if (cloudness > 0 && cloudness <= 0.25) {
      cloudnessSrc = cloudy_small
    } else if (cloudness > 0.25 && cloudness <= 0.5) {
      cloudnessSrc = cloudy_little
    } else if (cloudness > 0.5 && cloudness <= 0.75) {
      cloudnessSrc = cloudy_little
    } else if (cloudness > 0.75) {
      cloudnessSrc = cloudy_high
    } else {
      cloudnessSrc = sunny
    }

    return cloudnessSrc
  }

  getDayTime(dayTime: string): string {
    let dayTimeSrc: string
    switch (dayTime) {
      case 'd':
        dayTimeSrc = sunny
        break

      case 'n':
        dayTimeSrc = moon
        break

      default:
        dayTimeSrc = ""
        break
    }
    return dayTimeSrc
  }

  getMainIcon(prec_strength: number): string {
    let mainIconSrc: string
    if (prec_strength > 0 && prec_strength <= 0.25) {
      mainIconSrc = rain_little
    } else if (prec_strength > 0.25 && prec_strength <= 0.5) {
      mainIconSrc = rain_small
    } else if (prec_strength > 0.5 && prec_strength <= 0.75) {
      mainIconSrc = rain_medium
    } else if (prec_strength > 0.75) {
      mainIconSrc = rain_high
    } else {
      mainIconSrc = sunny
    }
    return mainIconSrc
  }
  //#endregion

  render() {
    let forecast: Forecast = this.props.forecast
    let day: Date = new Date(forecast.Day)
    let info = forecast.info[0]

    return (
      <div className="card">
        <div className="card hover:opacity-0">
          <h4 className="text-2xl font-bold">{days[day.getDay()]}</h4>

          <div className="flex space-x-6 ml-3">
            <img
              src={this.getMainIcon(info.avg.Prec_strength)}
              className="animate-pulse-slow h-28 w-28"
            />

            <div className="flex flex-col place-content-around">
              <h4 className="text-3xl">
                Температура {info.max.Temp}/{info.min.Temp}
              </h4>
              <h4 className="text-2xl">
                Ощущается как {info.max.Feels_like}/{info.min.Feels_like}
              </h4>
            </div>
          </div>
          <hr className="h-px mt-4 mb-1 bg-gray-200" />

          <div className="flex flex-col justify-items-center items-center">
            <h5 className="text-lg font-bold">Облачность</h5>
            {/* <h5 className="text-lg font-bold">Погодные условия</h5> */}

            <img
              src={this.getCloudness(info.avg.Cloudness)}
              className="animate-bounce-slow h-20 w-20"
            />

            {/* <img
            src={this.getCondition(this.props.forecast.Condition)}
            className="animate-bounce-slow h-20 w-20"
          /> */}
          </div>
        </div>
        <div className="sub_card absolute opacity-0 hover:opacity-100">
          {forecast.Hours.map((element, index) => {
            return (
              <div className="flex flex-col items-center 
              border-black border-opacity-30 border-[0.1rem]">
                <h4 key={index}>{element.Hour}</h4>
                <img
                  src={this.getDayTime(element.Daytime)}
                  className="h-14 w-14"
                />
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

// <h4 className="text-2xl">{days[day.getDay()]}</h4>

// <div className="flex flex-row place-content-around items-start">
//   <div className="inline-flex flex-col items-start place-content-between">
//     <img
//       src={this.getMainIcon(this.props.info.Daytime)}
//       className="animate-pulse-slow h-28 w-28"
//     />

//     <h4 className="text-3xl font-bold">
//       Температура {this.props.info.Temp}
//     </h4>
//     <h4 className="text-2xl">
//       Ощущается как {this.props.info.Feels_like}
//     </h4>
//   </div>

//   <div className="card_element">
//     <h5 className="text-lg font-bold">Облачность</h5>

//     <img
//       src={this.getCloudness(this.props.info.Cloudness)}
//       className="animate-bounce-slow h-20 w-20"
//     />

//     <h5 className="text-lg font-bold">Дождливость</h5>
//     <img
//       src={this.getPrec(this.props.info.Prec_strength)}
//       className="animate-bounce-slow h-20 w-20"
//     />

//     <h5 className="text-lg font-bold">Погодные условия</h5>
//     <img
//       src={this.getCondition(this.props.info.Condition)}
//       className="animate-bounce-slow h-20 w-20"
//     />
//   </div>
// </div>
