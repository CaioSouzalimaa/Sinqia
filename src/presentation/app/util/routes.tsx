import {Route, Routes} from "react-router-dom";
import {AddTouristSpot} from "../../tourist_spots/add_tourist_spots.tsx";
import {TouristSpots} from "../../tourist_spots/tourist_spots.tsx";
import {AppRoutes} from "../constants.ts";


export const AppRouter = () => {
  return (
    <Routes>
      <Route path={AppRoutes.touristSpots} element={<TouristSpots/>}/>
      <Route path={AppRoutes.addTouristSpot} element={<AddTouristSpot/>}/>
      <Route path={`${AppRoutes.addTouristSpot}/:id`} element={<AddTouristSpot/>}/>
    </Routes>
  )
}
