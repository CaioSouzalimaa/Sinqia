import {TouristSpotsService} from "../../domain/tourist_spots/tourist_spots_service.ts";
import {TouristSpotEntity} from "../../domain/tourist_spots/tourist_spots_entity.ts";
import {injectable} from "inversify";
import axios from "axios";

const api = axios.create({
  baseURL: 'https://localhost:7270/api',
});

@injectable()
export class TouristSpotsImpl implements TouristSpotsService {
  async getTouristSpots(): Promise<TouristSpotEntity[]> {
    const TouristSpots = await api
      .get('/TouristSpot')
      .then((response) => {
        return response.data as TouristSpotEntity[];
      })
      .catch((error) => {
        console.log(error);
      });
    return TouristSpots as TouristSpotEntity[];
  }

  async getTouristSpot(id: number): Promise<TouristSpotEntity> {
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

  async deleteTouristSpot(id: number): Promise<void> {
    console.log('deleteTouristSpot', id)
  }
}
