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
    const TouristSpots = await api
      .get(`/TouristSpot/${id}`)
      .then((response) => {
        return response.data as TouristSpotEntity;
      })
      .catch((error) => {
        console.log(error);
      });
    return TouristSpots as TouristSpotEntity;
  }

  async addTouristSpot(touristSpot: TouristSpotEntity): Promise<void> {
    api
      .post('/TouristSpot', touristSpot)
      .then(() => console.log('Tourist Spot successfully added'))
      .catch((error) => {
        console.log(error);
      });
  }

  async updateTouristSpot(touristSpot: TouristSpotEntity, id: number): Promise<void> {
    api
      .put(`/TouristSpot/${id}`, touristSpot)
      .then(() => console.log('Tourist Spot successfully updated'))
      .catch((error) => {
        console.log(error);
      });
  }

  async deleteTouristSpot(id: number): Promise<void> {
    api
      .delete(`/TouristSpot/${id}`)
      .then(() => console.log('Tourist spot successfully deleted'))
      .catch((error) => {
        console.log(error);
      });
  }
}
