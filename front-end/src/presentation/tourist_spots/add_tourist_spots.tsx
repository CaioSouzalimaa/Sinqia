import {useParams} from "react-router-dom";
import {AddTouristSpotsProvider} from "../../application/tourist_spots/add_tourist_spot/add_tourist_spots_provider.tsx";

export const AddTouristSpot = () => {
  const {id} = useParams();
  return (
    <AddTouristSpotsProvider id={id}>
      <_AddTouristSpot/>
    </AddTouristSpotsProvider>
  );
};


const _AddTouristSpot = () => {
  return (
    <>
      <h1>Adicionando/Editando Ponto turistico</h1>
    </>
  )
}

