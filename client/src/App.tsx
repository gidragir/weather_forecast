import WeatherCard from "./components/weatherCard"
import {useQuery, gql} from "@apollo/client"
import {Forecast} from "./models"
import "./scss/_app.scss"

function App() {
  const HourFields = gql`
    fragment HourFields on Forecast {
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
  const ForecastFields = gql`
    ${HourFields}
    fragment ForecastFields on Forecast {
      Day
      info: forecastGroupBy{
        Day
        max: _max{
          Temp
          Feels_like
        }
        min: _min{
          Temp
          Feels_like
        }
        avg: _avg{
          Prec_strength
        }
      }
      Hours{
        ...HourFields
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

  if (loading)
    return (
      <>
      <div
        className="inline-flex h-20 w-20 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
        role="status"
      >
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
          Loading...
        </span>
      </div>
      </>
    )
  if (error) return <p>Error : {error.message}</p>

  const details: Forecast[] = data.forecast.Details as Forecast[]

  return (
    <>
      <WeatherCard forecast={data.forecast} />
      <br />
      <div className="p-5 flex flex-row flex-wrap justify-between">
        {details.map((info, index) => {
          return <WeatherCard key={index} forecast={info} />
        })}
      </div>
    </>
  )
}

export default App
