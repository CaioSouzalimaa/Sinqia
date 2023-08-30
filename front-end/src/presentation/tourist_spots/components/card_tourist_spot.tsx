import {useNavigate} from "react-router-dom";
import {AppRoutes} from "../../app/constants.ts";
import {SiteButton} from "../../shared/components/site_button.tsx";

interface CardTouristSpotProps {
  id: number;
  name: string;
  description: string;
  location: string;
  city: string;
  state: string;
  onDelete: () => void;
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
          <span className={"font-medium text-dark-blue"}>Referência: </span>
          {props.location}
        </p>
      </div>
      <div className={"flex gap-4"}>
        <SiteButton text={"Detalhes"} onClick={() => navigate(`${AppRoutes.addTouristSpot}/${props.id}`)} className={"w-28 p-0"}/>
        <SiteButton onClick={props.onDelete} text={"Excluir"} className={"w-28 p-0 bg-red-700"}/>
      </div>
    </div>
  )
}
