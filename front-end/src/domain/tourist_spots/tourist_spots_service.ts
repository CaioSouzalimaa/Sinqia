import {TouristSpotEntity} from "./tourist_spots_entity.ts";

export interface TouristSpotsService {
  getTouristSpots(): Promise<TouristSpotEntity[]>;

  getTouristSpot(id: number): Promise<TouristSpotEntity>;

  addTouristSpot(touristSpot: TouristSpotEntity): Promise<void>;

  updateTouristSpot(touristSpot: TouristSpotEntity, id: number): Promise<void>;

  deleteTouristSpot(id: number): Promise<void>;
}

export const TouristSpotsService = Symbol.for("TouristSpotsService");
