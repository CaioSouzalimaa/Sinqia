import {useNavigate, useParams} from "react-router-dom";
import {AddTouristSpotsProvider} from "../../application/tourist_spots/add_tourist_spot/add_tourist_spots_provider.tsx";
import {SiteInput} from "../shared/components/site_input.tsx";
import {SelectState} from "./components/select_state.tsx";
import {useContext, useEffect} from "react";
import {
  AddTouristSpotsContext,
  AddTouristSpotsContextInterface
} from "../../application/tourist_spots/add_tourist_spot/add_tourist_spots_context.ts";
import {SiteButton} from "../shared/components/site_button.tsx";
import {Snackbar} from "../shared/components/snackbar.tsx";

export const AddTouristSpot = () => {
  const {id} = useParams();
  return (
    <AddTouristSpotsProvider id={Number(id)}>
      <_AddTouristSpot/>
    </AddTouristSpotsProvider>
  );
};


const _AddTouristSpot = () => {
  const addTouristSpotContext = useContext(AddTouristSpotsContext) as AddTouristSpotsContextInterface
  const state = addTouristSpotContext.state;
  const navigate = useNavigate();

  useEffect(() => {
    if (state.success) {
      setTimeout(() => {
        addTouristSpotContext.clearSuccess();
        navigate("/");
      }, 3000);
    }
  }, [state.success]);

  return (
    <div className={"flex flex-col px-40 py-8 2xl:px-80 text-dark-blue gap-4"}>
      <div className={"flex flex-col gap-2"}>
        <p className={"font-medium"}>Nome</p>
        <SiteInput placeholder={"Digite um nome"} defaultValue={state.touristSpot.name} type={"text"}
                   onChange={(e) => addTouristSpotContext.onNameChange(e.target.value)}/>
      </div>
      <div>
        <p className={"font-medium"}>Descrição</p>
        <SiteInput placeholder={"Digite uma descrição"} defaultValue={state.touristSpot.description} type={"text"}
                   onChange={(e) => addTouristSpotContext.onDescriptionChange(e.target.value)}/>
      </div>
      <div className={"flex w-full items-center gap-4"}>
        <SelectState defaultValue={state.touristSpot.state.toUpperCase()}
                     onChange={(e) => addTouristSpotContext.onStateChange(e.target.value)}/>
        <div className={"w-full"}>
          <p className="font-medium">Cidade</p>
          <SiteInput placeholder={"Digite uma cidade"} defaultValue={state.touristSpot.city} type={"text"}
                     onChange={(e) => addTouristSpotContext.onCityChange(e.target.value)}/>
        </div>
      </div>
      <div>
        <p className={"font-medium"}>Referência</p>
        <SiteInput placeholder={"Digite uma referência"} defaultValue={state.touristSpot.location} type={"text"}
                   onChange={(e) => addTouristSpotContext.onLocationChange(e.target.value)}/>
      </div>

      <div className={"flex w-full justify-between gap-2"}>
        <SiteButton onClick={() => navigate("/")} text={"Voltar"}/>
        <SiteButton onClick={() => addTouristSpotContext.onSave()} text={"Salvar"}/>
      </div>

      <Snackbar
        type={"success"}
        open={!!state.success}
        message={state.success}
      />
    </div>
  )
}
