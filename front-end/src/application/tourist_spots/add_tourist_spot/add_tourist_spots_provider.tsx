import {ReactNode, useEffect, useState} from "react";
import {getIt} from "../../../injection.ts";
import {AddTouristSpotsContext, initialState} from "./add_tourist_spots_context.ts";
import {TouristSpotsService} from "../../../domain/tourist_spots/tourist_spots_service.ts";

export const AddTouristSpotsProvider = ({children, id} : {children: ReactNode, id?: number}) => {
  const [state, setState] = useState({...initialState, isEditMode: !!id});
  const touristSpotsService = getIt.get<TouristSpotsService>(TouristSpotsService);
  const isEditMode = !!id;

  useEffect(() => {
    if (isEditMode) {
      getTouristSpot();
    }
  }, []);

  const getTouristSpot = async () => {
    setState(state => ({...state, loading: true}));
    const touristSpot = await touristSpotsService.getTouristSpot(id as number);
    setState(state => ({...state, touristSpot, loading: false}));
  }

  const onNameChange = (name: string) => {
    setState(state => ({...state, touristSpot: {...state.touristSpot, name}}));
  }
  const onDescriptionChange = (description: string) => {
    setState(state => ({...state, touristSpot: {...state.touristSpot, description}}));
  }
  const onLocationChange = (location: string) => {
    setState(state => ({...state, touristSpot: {...state.touristSpot, location}}));
  }
  const onCityChange = (city: string) => {
    setState(state => ({...state, touristSpot: {...state.touristSpot, city}}));
  }
  const onStateChange = (value: string) => {
    setState(state => ({...state, touristSpot: {...state.touristSpot, state: value}}));
  }

  const onSave = async () => {
    console.log(state);
  }
  const clearError = () => {
    setState(state => ({...state, error: undefined}));
  }
  const clearSuccess = () => {
    setState(state => ({...state, success: undefined}));
  }

  return (
    <AddTouristSpotsContext.Provider value={{
      state,
      onNameChange,
      onDescriptionChange,
      onLocationChange,
      onCityChange,
      onStateChange,
      onSave,
      clearError,
      clearSuccess
    }}
    >
      {children}
    </AddTouristSpotsContext.Provider>
  );
};
