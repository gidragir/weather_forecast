import React, {Component} from "react"
import {InfoModel} from "../models"
import "../css/weatherCard.css"
import sunny from "../assets/sunny.svg"
import moon from "../assets/moon.svg"
import cloudy_little from "../assets/cloudy_little.svg"
import cloudy_small from "../assets/cloudy_small.svg"
import cloudy_high from "../assets/cloudy_high.svg"
import thunder from "../assets/thunder.svg"
import rain_little from "../assets/rain_little.svg"
import rain_small from "../assets/rain_small.svg"
import rain_medium from "../assets/rain_medium.svg"
import rain_high from "../assets/rain_high.svg"

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
      case 'd':
        daytimeSrc = sunny
        break

      case 'n':
        daytimeSrc = moon
        break

      default:
        daytimeSrc = ""
        break
    }
    return daytimeSrc
  }

  render() {
    return (
      <div className="card">
        <div className="flex space-x-2">
          <img
            src={this.getDaytime(this.props.info.Daytime)}
            className="animate-pulse-slow h-28 w-28"
          />

          <div className="flex flex-col place-content-around">
            <h4 className="text-3xl font-bold">
              Температура {this.props.info.Temp}
            </h4>
            <h4 className="text-2xl">Ощущается как {this.props.info.Feels_like}</h4>
          </div>
        </div>
        <div className="flex place-content-evenly">
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
