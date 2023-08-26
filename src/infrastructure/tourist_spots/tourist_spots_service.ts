import {TouristSpotsService} from "../../domain/tourist_spots/tourist_spots_service.ts";
import {TouristSpotEntity} from "../../domain/tourist_spots/tourist_spots_entity.ts";
import {injectable} from "inversify";

@injectable()
export class TouristSpotsImpl implements TouristSpotsService {

  async getTouristSpots(): Promise<TouristSpotEntity[]> {
    return [];
  }

  async getTouristSpot(id: string): Promise<TouristSpotEntity> {
    console.log('getTouristSpot', id)
    return {
      id: id,
      name: 'name',
      description: 'description',
      location: 'location',
      city: 'city',
      state: 'state',
      createdAt: new Date()
    };
  }

  async addTouristSpot(touristSpot: TouristSpotEntity): Promise<void> {
    console.log('addTouristSpot', touristSpot)
  }

  async updateTouristSpot(touristSpot: TouristSpotEntity): Promise<void> {
    console.log('updateTouristSpot', touristSpot)
  }

  async deleteTouristSpot(id: string): Promise<void> {
    console.log('deleteTouristSpot', id)
  }
}
