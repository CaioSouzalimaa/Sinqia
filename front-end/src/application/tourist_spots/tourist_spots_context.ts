import {TouristSpotEntity} from "../../domain/tourist_spots/tourist_spots_entity.ts";
import {ContextInterface} from '../util/context_interface';
import {createContext} from "react";

interface TouristSpotsActions {
  getTouristSpots: () => void;
  deleteTouristSpot: (id: number) => void;
  clearError: () => void;
  clearSuccess: () => void;
}

interface TouristSpotsState {
  touristSpots: TouristSpotEntity[];
  loading: boolean;
  error?: string;
  success?: string;
}

export const initialState: TouristSpotsState = {
  touristSpots: [],
  loading: false,
  error: undefined,
  success: undefined,
}

export type TouristSpotsContextInterface = ContextInterface<TouristSpotsActions, TouristSpotsState>;
export const TouristSpotsContext = createContext<TouristSpotsContextInterface | null>(null);
