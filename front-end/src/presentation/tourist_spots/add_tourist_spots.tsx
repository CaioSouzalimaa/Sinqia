import {useNavigate, useParams} from "react-router-dom";
import {AddTouristSpotsProvider} from "../../application/tourist_spots/add_tourist_spot/add_tourist_spots_provider.tsx";
import {SiteInput} from "../shared/components/site_input.tsx";
import {SelectState} from "./components/select_state.tsx";
import {useContext} from "react";
import {
  AddTouristSpotsContext,
  AddTouristSpotsContextInterface
} from "../../application/tourist_spots/add_tourist_spot/add_tourist_spots_context.ts";

export const AddTouristSpot = () => {
  const {id} = useParams();
  return (
    <AddTouristSpotsProvider id={id}>
      <_AddTouristSpot/>
    </AddTouristSpotsProvider>
  );
};


const _AddTouristSpot = () => {
  const addTouristSpotContext = useContext(AddTouristSpotsContext) as AddTouristSpotsContextInterface
  const navigate = useNavigate();
  return (
    <div className={"flex flex-col px-40 py-8 2xl:px-80 text-dark-blue gap-4"}>
      <div className={"flex flex-col gap-2"}>
        <p className={"font-medium"}>Nome</p>
        <SiteInput placeholder={"Digite um nome"} type={"text"} onChange={(e) => addTouristSpotContext.onNameChange(e.target.value)}/>
      </div>
      <div>
        <p className={"font-medium"}>Descrição</p>
        <SiteInput placeholder={"Digite uma descrição"} type={"text"} onChange={(e) => addTouristSpotContext.onDescriptionChange(e.target.value)}/>
      </div>
      <div className={"flex w-full items-center gap-4"}>
        <SelectState defaultValue={"DF"} onChange={(e) => addTouristSpotContext.onStateChange(e.target.value)}/>
        <div className={"w-full"}>
          <p className="font-medium">Cidade</p>
          <SiteInput placeholder={"Digite uma cidade"} type={"text"} onChange={(e) => addTouristSpotContext.onCityChange(e.target.value)}/>
        </div>
      </div>
      <div>
        <p className={"font-medium"}>Referência</p>
        <SiteInput placeholder={"Digite uma referência"} type={"text"} onChange={(e) => addTouristSpotContext.onLocationChange(e.target.value)}/>
      </div>

      <div className={"flex w-full justify-between gap-2"}>
        <button
          className={"bg-dark-blue rounded p-2 text-white hover:opacity-80"}
          onClick={() => navigate("/")}
        >
          Voltar
        </button>
        <button
          className={"bg-dark-blue rounded p-2 text-white hover:opacity-80"}
          onClick={() => addTouristSpotContext.onSave()}
        >
          Salvar
        </button>
      </div>
    </div>
  )
}
