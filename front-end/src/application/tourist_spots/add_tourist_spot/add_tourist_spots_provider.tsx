import {ReactNode, useEffect, useState} from "react";
import {getIt} from "../../../injection.ts";
import {AddTouristSpotsContext, initialState} from "./add_tourist_spots_context.ts";
import {TouristSpotsService} from "../../../domain/tourist_spots/tourist_spots_service.ts";

export const AddTouristSpotsProvider = ({children, id} : {children: ReactNode, id?: number}) => {
  const [state, setState] = useState({...initialState, isEditMode: !!id}); // Set the initial state
  const touristSpotsService = getIt.get<TouristSpotsService>(TouristSpotsService); // Get the service from the container
  const isEditMode = !!id; // Verify if page has an id, if it has, it's in edit mode

  useEffect(() => { // When the component is mounted, if it's in edit mode, get the tourist spot
    if (isEditMode) {
      getTouristSpot();
    }
  }, []);

  const getTouristSpot = async () => {
    setState(state => ({...state, loading: true}));
    const touristSpot = await touristSpotsService.getTouristSpot(id as number);
    setState(state => ({...state, touristSpot, loading: false}));
  }

  // Functions to change the state
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

  // Function to save the tourist spot
  const onSave = async () => {
    setState(state => ({...state, loading: true}));
    if (isEditMode) {
      const createdAt = new Date();
      setState(state => ({...state, touristSpot: {...state.touristSpot, createdAt}}));
      await touristSpotsService.updateTouristSpot(state.touristSpot, id as number);
    } else {
      await touristSpotsService.addTouristSpot(state.touristSpot);
    }
    setState(state => ({...state, loading: false, success: 'Ponto turistico adicionado!'}));
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
