import { useState, useEffect } from "react"

const App = () => {
  const url = "http://api.open-notify.org/iss-now.json"
  const [latitude, setLatitude] = useState("")
  const [longitude, setLongitude] = useState("")
  const [urlMap, setUrlMap] = useState("")

  const getCoordinates = async() => {
    const response = await fetch(url)
    const data = await response.json()
    setLongitude(data.iss_position.longitude)
    setLatitude(data.iss_position.latitude)
    const issLat = data.iss_position.latitude
    const issLong = data.iss_position.longitude
    setUrlMap(`https://en.mapy.cz/zakladni?x=${issLong}&y=${issLat}&z=5`)
  }
  
  useEffect(() => {
    getCoordinates()
  }, [])
  
  return (
    <div>
      <h1>ISS position</h1>
      <h2>Latitude</h2>
      <p>{latitude}</p>
      <h2>Longitude</h2>
      <p>{longitude}</p>
      <a href={urlMap} rel="noreferrer" target="_blank">ISS position live</a>
    </div>
  )
}

export default App
