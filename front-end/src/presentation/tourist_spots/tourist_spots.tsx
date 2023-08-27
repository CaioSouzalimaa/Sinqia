import {TouristSpotsProvider} from "../../application/tourist_spots/tourist_spots_provider.tsx";
import {SiteInput} from "../shared/components/site_input.tsx";
import {CardTouristSpot} from "./components/card_tourist_spot.tsx";
import {Pagination} from "./components/pagination.tsx";

export const TouristSpots = () => {
  return (
    <TouristSpotsProvider>
      <_TouristSpots/>
    </TouristSpotsProvider>
  )
}

const arrayTeste = [
  {
    id: "1",
    name: "Praia do Forte",
    description: "Praia do Forte uma praia localizada no município de Mata de São João, no estado da Bahia, no Brasil.",
    location: "Praia do Forte",
    city: "Mata de São João",
    state: "BA"
  },
  {
    id: "2",
    name: "Praia do Forte",
    description: "Praia do Forte uma praia localizada no município de Mata de São João, no estado da Bahia, no Brasil.",
    location: "Praia do Forte",
    city: "Mata de São João",
    state: "BA"
  },
  {
    id: "3",
    name: "Praia do Forte",
    description: "Praia do Forte uma praia localizada no município de Mata de São João, no estado da Bahia, no Brasil.",
    location: "Praia do Forte",
    city: "Mata de São João",
    state: "BA"
  }]


const _TouristSpots = () => {
  return (
    <div className={"flex flex-col px-40 py-8 2xl:px-80"}>
      <div className={"flex w-full gap-6 justify-between"}>
        <SiteInput placeholder={"Pesquisar..."} type={"text"} onChange={(e) => console.log(e.target.value)}/>
        <button className={"bg-dark-blue rounded p-2 text-white hover:opacity-80"}>Buscar</button>
      </div>


      <div className={"flex flex-col pt-6 gap-10"}>
        {arrayTeste.map((touristSpot) => (
          <CardTouristSpot
            id={touristSpot.id}
            name={touristSpot.name}
            description={touristSpot.description}
            location={touristSpot.location}
            city={touristSpot.city}
            state={touristSpot.state}
          />
        ))}
      </div>

      <Pagination/>
    </div>
  )
}
