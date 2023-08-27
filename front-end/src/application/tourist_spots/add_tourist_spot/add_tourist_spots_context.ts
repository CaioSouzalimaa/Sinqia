import {createContext} from "react";
import {TouristSpotEntity} from "../../../domain/tourist_spots/tourist_spots_entity.ts";
import {ContextInterface} from "../../util/context_interface.ts";

interface AddTouristSpotsActions {
  onNameChange: (name: string) => void;
  onDescriptionChange: (description: string) => void;
  onLocationChange: (location: string) => void;
  onCityChange: (city: string) => void;
  onStateChange: (state: string) => void;

  onSave: () => void;
  clearError: () => void;
  clearSuccess: () => void;
}

interface AddTouristSpotsState {
  touristSpot: TouristSpotEntity;
  loading: boolean;
  error?: string;
  success?: string;
}

export const initialState: AddTouristSpotsState = {
  touristSpot: {
    id: '',
    name: '',
    description: '',
    location: '',
    city: '',
    state: '',
    createdAt: new Date(),
  },
  loading: false,
  error: undefined,
  success: undefined,
}

export type AddTouristSpotsContextInterface = ContextInterface<AddTouristSpotsActions, AddTouristSpotsState>;
export const AddTouristSpotsContext = createContext<AddTouristSpotsContextInterface | null>(null);
