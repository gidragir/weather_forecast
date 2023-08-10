import React, {Component} from "react"
import {InfoModel} from "../models"
import "../css/weatherCard.css"
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
export class WeatherCard extends Component<{info: InfoModel}> {
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
    switch (cloudness) {
      case 0:
        cloudnessSrc = sunny
        break

      case 0.25:
        cloudnessSrc = cloudy_little
        break

      case 0.5:
        cloudnessSrc = cloudy_small
        break

      case 0.75:
        cloudnessSrc = cloudy_small
        break

      case 1:
        cloudnessSrc = cloudy_high
        break

      default:
        cloudnessSrc = ""
        break
    }
    return cloudnessSrc
  }

  getDaytime(daytime: string): string {
    let daytimeSrc: string
    switch (daytime) {
      case "d":
        daytimeSrc = sunny
        break

      case "n":
        daytimeSrc = moon
        break

      default:
        daytimeSrc = ""
        break
    }
    return daytimeSrc
  }

  render() {
    let day: Date = new Date(this.props.info.Day)

    return (
      <div className="card">
        <h4 className="text-2xl font-bold">{days[day.getDay()]}</h4>

        <div className="flex space-x-2">
          <img
            src={this.getDaytime(this.props.info.Daytime)}
            className="animate-pulse-slow h-28 w-28"
          />

          <div className="flex flex-col place-content-around">
            <h4 className="text-3xl">
              Температура {this.props.info.Temp}
            </h4>
            <h4 className="text-2xl">
              Ощущается как {this.props.info.Feels_like}
            </h4>
          </div>
        </div>
        <hr className="h-px mt-4 mb-1 bg-gray-200" />

        <div className="grid grid-cols-3 gap-4 justify-items-center items-center">
          <h5 className="text-lg font-bold">Облачность</h5>
          <h5 className="text-lg font-bold">Дождливость</h5>
          <h5 className="text-lg font-bold">Погодные условия</h5>

          <img
            src={this.getCloudness(this.props.info.Cloudness)}
            className="animate-bounce-slow h-20 w-20"
          />

          <img
            src={this.getPrec(this.props.info.Prec_strength)}
            className="animate-bounce-slow h-20 w-20"
          />

          <img
            src={this.getCondition(this.props.info.Condition)}
            className="animate-bounce-slow h-20 w-20"
          />
        </div>
      </div>
    )
  }
}

export default WeatherCard

// <h4 className="text-2xl">{days[day.getDay()]}</h4>

// <div className="flex flex-row place-content-around items-start">
//   <div className="inline-flex flex-col items-start place-content-between">
//     <img
//       src={this.getDaytime(this.props.info.Daytime)}
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
