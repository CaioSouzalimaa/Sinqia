import {TouristSpotsProvider} from "../../application/tourist_spots/tourist_spots_provider.tsx";
import {SiteInput} from "../shared/components/site_input.tsx";
import {CardTouristSpot} from "./components/card_tourist_spot.tsx";
import {Pagination} from "./components/pagination.tsx";
import {
  TouristSpotsContext,
  TouristSpotsContextInterface
} from "../../application/tourist_spots/tourist_spots_context.ts";
import {useContext, useEffect} from "react";

export const TouristSpots = () => {
  return (
    <TouristSpotsProvider>
      <_TouristSpots/>
    </TouristSpotsProvider>
  )
}

const _TouristSpots = () => {
  const touristSpotsContext = useContext(TouristSpotsContext) as TouristSpotsContextInterface;
  const state = touristSpotsContext.state;

  useEffect(() => {
    touristSpotsContext.getTouristSpots();
  }, []);

  return (
    <div className={"flex flex-col px-40 py-8 2xl:px-80"}>
      <div className={"flex w-full gap-6 justify-between"}>
        <SiteInput placeholder={"Pesquisar..."} type={"text"} onChange={(e) => console.log(e.target.value)}/>
        <button className={"bg-dark-blue rounded p-2 text-white hover:opacity-80"}>Buscar</button>
      </div>


      <div className={"flex flex-col pt-6 gap-10"}>
        {state.loading ?
          <div>Carregando...</div>
          :
          state.touristSpots.map((touristSpot) => (
            <CardTouristSpot
              id={touristSpot.id as number}
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
