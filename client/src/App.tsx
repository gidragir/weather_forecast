import { useState, useEffect } from "react"
import WeatherCard from "./components/weatherCard"
import { InfoModel } from "./models"
import "./App.css"

function App() {
  const [mainInfo, setMainInfo] = useState<InfoModel>(new InfoModel())
  const [detailsInfo, setDetails] = useState<InfoModel[]>([])

  useEffect(() => {
    const abortController = new AbortController()
    const fetchData = async () => {
      fetch("/api/weather?city=Almaty", {
        signal: abortController.signal,
      })
        .then((res) => res.json())
        .then((json) => {
          setMainInfo(json.main)
          setDetails(json.details)
        })
    }

    fetchData()
    return () => abortController.abort()
  }, [])

  return (
    <>
      <WeatherCard info={mainInfo} />
      <br />
      <div className="p-5 flex flex-row flex-wrap justify-between">
        {detailsInfo.map((info, index) => {
          return <WeatherCard key={index} info={info} />
        })}
      </div>
    </>
  )
}

export default App
