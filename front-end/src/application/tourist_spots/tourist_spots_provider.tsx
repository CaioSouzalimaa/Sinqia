import {ReactNode, useState} from "react";
import {initialState, TouristSpotsContext} from "./tourist_spots_context.ts";
import {TouristSpotsService} from "../../domain/tourist_spots/tourist_spots_service.ts";
import {getIt} from "../../injection.ts";

export const TouristSpotsProvider = ({children}: { children: ReactNode }) => {
  const [state, setState] = useState({...initialState});
  const touristSpotsService = getIt.get<TouristSpotsService>(TouristSpotsService);

  const getTouristSpots = async () => {
    try {
      setState(state => ({...state, loading: true}));
      const touristSpots = await touristSpotsService.getTouristSpots();
      setState(state => ({...state, touristSpots, loading: false}));
    } catch (e) {
      setState(state => ({...state, loading: false, error: "Erro ao buscar os pontos turísticos"}));
    }
  }

  const searchTouristSpots = async (search: string) => {
    try {
      setState(state => ({...state, loading: true}));
      const touristSpots = await touristSpotsService.getTouristSpots();
      if (search) {
        console.log("search", touristSpots);
        const filteredTouristSpots = touristSpots.filter((touristSpot) => {
          const result =
            touristSpot.name.toLowerCase().includes(search.toLowerCase()) ? true :
              touristSpot.city.toLowerCase().includes(search.toLowerCase()) ? true :
                touristSpot.state.toLowerCase().includes(search.toLowerCase()) ? true :
                  touristSpot.description.toLowerCase().includes(search.toLowerCase()) ? true :
                    touristSpot.location.toLowerCase().includes(search.toLowerCase());

          return result ? touristSpot : null;
        });
        console.log(filteredTouristSpots);
        setState(state => ({...state, touristSpots: filteredTouristSpots, loading: false}));
      } else {
        setState(state => ({...state, touristSpots, loading: false}));
      }
    } catch (e) {
      setState(state => ({...state, loading: false, error: "Erro ao buscar os pontos turísticos"}));
    }

  }
  const deleteTouristSpot = async (id: number) => {
    try {
      setState(state => ({...state, loading: true}));
      await touristSpotsService.deleteTouristSpot(id);
      await getTouristSpots();
      setState(state => ({...state, success: 'Ponto turistico excluído com sucesso!'}));
    } catch (e) {
      setState(state => ({...state, loading: false, error: "Erro ao excluir o ponto turístico"}));
    }
  }

  const clearError = () => {
    setState(state => ({...state, error: undefined}));
  }
  const clearSuccess = () => {
    setState(state => ({...state, success: undefined}));
  }

  return (
    <TouristSpotsContext.Provider value={{
      state,
      searchTouristSpots,
      getTouristSpots,
      deleteTouristSpot,
      clearError,
      clearSuccess
    }}
    >
      {children}
    </TouristSpotsContext.Provider>
  );
};
