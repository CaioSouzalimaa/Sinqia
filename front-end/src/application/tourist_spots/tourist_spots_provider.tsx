import {ReactNode, useState} from "react";
import {initialState, TouristSpotsContext} from "./tourist_spots_context.ts";
import {TouristSpotsService} from "../../domain/tourist_spots/tourist_spots_service.ts";
import {getIt} from "../../injection.ts";

export const TouristSpotsProvider = ({children}: { children: ReactNode }) => {
  const [state, setState] = useState({...initialState});
  const touristSpotsService = getIt.get<TouristSpotsService>(TouristSpotsService);

  const getTouristSpots = async () => {
    setState(state => ({...state, loading: true}));
    const touristSpots = await touristSpotsService.getTouristSpots();
    setState(state => ({...state, touristSpots, loading: false}));
  }
  const deleteTouristSpot = async (id: number) => {
    setState(state => ({...state, loading: true}));
    await touristSpotsService.deleteTouristSpot(id);
    setState(state => ({...state, loading: false, success: 'Tourist Spot deleted!'}));
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
