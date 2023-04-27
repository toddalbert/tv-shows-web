import { useEffect } from "react"

export default function Home({ shows, setShows }) {

  useEffect(() => {
    fetch('https://tv-shows-api-c10.web.app/shows')
      .then(resp => resp.json())
      .then(setShows)
      .catch(alert)
  }, [])

  return (
    <>
      {!shows ? "Loading..." : shows.map(show => (
        <div key={show.id}>
          <img src={show.poster} alt="" />
          <h2>{show.title}</h2>
          <p>Seasons: {show.seasons}</p>
        </div>
      ))}
    </>
  )
}