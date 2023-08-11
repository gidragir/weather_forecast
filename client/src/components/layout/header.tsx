import {useState, useEffect} from "react"
import {useQuery, gql} from "@apollo/client"
import "../../scss/_header.scss"

export default function header() {
  const {loading, error, data} = useQuery(
    gql`
      {
        cities(orderBy: {Name: desc}) {
          Id
          Name
        }
      }
    `
  )

  const [cityId, setCityId] = useState("")

  const scrollDirection = useScrollDirection()

  if (loading)
    return (
      <header
        className={
          `${scrollDirection === "down" ? "-top-10 hover:top-0" : "top-0"} 
          header`
        }
      >
        <nav>
          <select
            title="Город"
            className="font-['segoe_print'] rounded-md w-56 mt-1 ml-2"
          >
            <option>Loading...</option>
          </select>
        </nav>
      </header>
    )

  const cities: any[] = data.cities
  return (
    <header
      className={
        `${scrollDirection === "down" ? "-top-10 hover:top-0" : "top-0"} 
        header`
      }
    >
      <nav>
        <select
          defaultValue=""
          title="Город"
          className="font-['segoe_print'] rounded-md w-56 mt-1 ml-2"
          onChange={(e) => setCityId(e.target.value)}
        >
          <option hidden value="">
            Выбрать город
          </option>
          {cities.map((item, index) => {
            return (
              <option
                className="font-['segoe_print']"
                key={index}
                value={item.Id}
              >
                {item.Name}
              </option>
            )
          })}
        </select>
      </nav>
    </header>
  )
}

function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState("")

  useEffect(() => {
    let lastScrollY = window.scrollY

    const updateScrollDirection = () => {
      const scrollY = window.scrollY
      const direction = scrollY > lastScrollY ? "down" : "up"
      // if (
      //   direction !== scrollDirection &&
      //   (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)
      // ) {
      setScrollDirection(direction)
      // }
      lastScrollY = scrollY == 0 ? scrollY : 0
    }
    window.addEventListener("scroll", updateScrollDirection)
    return () => {
      window.removeEventListener("scroll", updateScrollDirection)
    }
  }, [scrollDirection])

  return scrollDirection
}
