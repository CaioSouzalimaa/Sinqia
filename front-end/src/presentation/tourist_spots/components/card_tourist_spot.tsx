import {useNavigate} from "react-router-dom";
import {AppRoutes} from "../../app/constants.ts";

interface CardTouristSpotProps {
  id: number;
  name: string;
  description: string;
  location: string;
  city: string;
  state: string;
}

export const CardTouristSpot = (props: CardTouristSpotProps) => {
  const navigate = useNavigate();
  return (
    <div key={props.id} className={"flex flex-col w-full gap-1"}>
      <h1 className={"font-bold text-xl text-dark-blue"}>{props.name}</h1>
      <p>{props.description}</p>
      <div className={"flex flex-col gap-4"}>
        <p>{props.state} - {props.city}</p>
        <p>
          <span className={'font-medium text-dark-blue'}>Referência: </span>
          {props.location}
        </p>
      </div>
      <button className={"w-28 text-white bg-dark-blue rounded"} onClick={() => navigate(`${AppRoutes.addTouristSpot}/${props.id}`)}>
        Detalhes
      </button>
    </div>
  )
}
