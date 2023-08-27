import {TouristSpotsProvider} from "../../application/tourist_spots/tourist_spots_provider.tsx";

export const TouristSpots = () => {
  return (
    <TouristSpotsProvider>
      <_TouristSpots/>
    </TouristSpotsProvider>
  )
}

  const _TouristSpots = () => {
  return (
    <>
      <h1>Pontos turisticos</h1>
    </>
  )
}
