import { useState, useEffect } from 'react'
import WeatherCard from './components/weatherCard'
import {InfoModel} from './models'
import './App.css'

function App() {
  const [mainInfo, setMainInfo] = useState<InfoModel>(new InfoModel())
  const [detailsInfo, setDetails] = useState<InfoModel[]>([])

  useEffect(() => { 
    fetch('/api/weather?city=Almaty')
      .then((res) => res.json())
      .then((json) => {
        setMainInfo(json.main)
        setDetails(json.details)
      }) 
    })

  return (
    <>
      <WeatherCard info={mainInfo} />
      <br/>
      <div className='p-5 flex flex-row flex-wrap justify-between'>
        {detailsInfo.map((info, index) => {
          return <WeatherCard key={index} info={info} />
        })}
      </div>
    </>
  )
}

export default App
