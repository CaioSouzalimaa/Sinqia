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
import {Loading} from "../shared/components/loading.tsx";

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
      }, 2000);
    } else if (state.error) {
      setTimeout(() => {
        addTouristSpotContext.clearError();
      }, 2000);
    }
    state.touristSpot.createdAt = new Date();
  }, [state.success, state.error]);

  return (
    <>
      <div className={"flex flex-col px-8 sm:px-40 py-8 2xl:px-80 grow gap-4"}>
        {state.loading ? <Loading/> :
          <>
            <SiteInput
              placeholder={"Digite um nome"}
              defaultValue={state.touristSpot.name}
              type={"text"}
              title={"Nome"}
              required
              disabled={!!state.success}
              onChange={(e) => addTouristSpotContext.onNameChange(e.target.value)}
            />

            <SiteInput
              placeholder={"Digite uma descrição"}
              defaultValue={state.touristSpot.description}
              type={"text"}
              title={"Descrição"}
              required
              maxLength={100}
              onChange={(e) => addTouristSpotContext.onDescriptionChange(e.target.value)}
              disabled={!!state.success}
            />

            <div className={"flex w-full items-center gap-4"}>
              <SelectState
                defaultValue={state.touristSpot.state.toUpperCase()}
                onChange={(e) => addTouristSpotContext.onStateChange(e.target.value)}
                disabled={!!state.success}
              />

              <SiteInput
                placeholder={"Digite o nome de uma cidade"}
                defaultValue={state.touristSpot.city}
                type={"text"}
                title={"Cidade"}
                required
                onChange={(e) => addTouristSpotContext.onCityChange(e.target.value)}
                disabled={!!state.success}
              />

            </div>

            <SiteInput
              placeholder={"Digite uma referência"}
              defaultValue={state.touristSpot.location}
              type={"text"}
              title={"Referência"}
              onChange={(e) => addTouristSpotContext.onLocationChange(e.target.value)}
              disabled={!!state.success}
            />


            <div className={"flex w-full justify-between gap-2"}>
              <SiteButton className={"bg-red-700"} disabled={!!state.success} onClick={() => navigate("/")} text={"Voltar"}/>
              <SiteButton className={"bg-green-500"} disabled={!!state.success} onClick={() => addTouristSpotContext.onSave()} text={"Salvar"}/>
            </div>
          </>
        }

        <Snackbar
          type={"success"}
          open={!!state.success}
          message={state.success}
        />

        <Snackbar
          type={"error"}
          open={!!state.error}
          message={state.error}
        />
      </div>
    </>
  )
}
