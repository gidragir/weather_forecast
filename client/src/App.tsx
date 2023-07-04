import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import WeatherCard from './components/weatherCard'
import {InfoModel} from './models'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [info, setInfo] = useState<InfoModel>()

  useEffect(() => { 
    fetch('/api/weather?city=Almaty')
      .then((res) => res.json())
      .then((json) => setInfo(json)) 
    })

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <WeatherCard info={info!} />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
