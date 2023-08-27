import {Container} from "inversify";
import {TouristSpotsImpl} from "./infrastructure/tourist_spots/tourist_spots_service.ts";
import {TouristSpotsService} from "./domain/tourist_spots/tourist_spots_service.ts";
import "reflect-metadata";

const getIt = new Container();

getIt.bind<TouristSpotsService>(TouristSpotsService).to(TouristSpotsImpl).inSingletonScope();

export {getIt};
