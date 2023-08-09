import {useState, useEffect} from "react"
import WeatherCard from "./components/weatherCard"
import {InfoModel} from "./models"
import "./App.css"
import {useQuery, gql} from "@apollo/client"

function App() {
  const ForecastFields = gql`
    fragment ForecastFields on Forecast {
      Day
      Temp
      Feels_like
      Prec_strength
      Daytime
      Cloudness
      Condition {
        Name
      }
    }
  `
  const {loading, error, data} = useQuery(
    gql`
      ${ForecastFields}
      {
        forecast(where: {Day: {equals: "2023-08-01"}}) {
          ...ForecastFields
          Details(where: {Day: {gt: "2023-08-01"}}, orderBy: {Day: asc}) {
            ...ForecastFields
          }
        }
      }
    `
  )

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  const details: InfoModel[] = data.forecast.Details as InfoModel[]

  return (
    <>
      <WeatherCard info={data.forecast} />
      <br />
      <div className="p-5 flex flex-row flex-wrap justify-between">
        {details.map((info, index) => {
          return <WeatherCard key={index} info={info} />
        })}
      </div>
    </>
  )
}

export default App
