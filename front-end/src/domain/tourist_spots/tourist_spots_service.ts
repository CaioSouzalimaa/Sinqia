import {TouristSpotEntity} from "./tourist_spots_entity.ts";

export interface TouristSpotsService {
  getTouristSpots(): Promise<TouristSpotEntity[]>;

  getTouristSpot(id: string): Promise<TouristSpotEntity>;

  addTouristSpot(touristSpot: TouristSpotEntity): Promise<void>;

  updateTouristSpot(touristSpot: TouristSpotEntity): Promise<void>;

  deleteTouristSpot(id: string): Promise<void>;
}

export const TouristSpotsService = Symbol.for("TouristSpotsService");
