import React, { Component } from 'react'
import {InfoModel} from '../models'

export class WeatherCard extends Component<{info: InfoModel}> {
  render() {
    return (
      <div>
        <h4>Цена {this.props.info.temp}</h4>
        <h4>Цена {this.props.info.temp}</h4>
        <h4>Цена {this.props.info.temp}</h4>
      </div>
    )
  }
}

export default WeatherCard