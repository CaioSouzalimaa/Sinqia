import {TouristSpotsProvider} from "../../application/tourist_spots/tourist_spots_provider.tsx";
import {SiteInput} from "../shared/components/site_input.tsx";
import {CardTouristSpot} from "./components/card_tourist_spot.tsx";
import {Pagination} from "./components/pagination.tsx";
import {
  TouristSpotsContext,
  TouristSpotsContextInterface
} from "../../application/tourist_spots/tourist_spots_context.ts";
import {useContext, useEffect, useState} from "react";
import {ModalConfirmDelete} from "./components/modal_confirm_delete.tsx";
import {SiteButton} from "../shared/components/site_button.tsx";
import {Snackbar} from "../shared/components/snackbar.tsx";
import {Loading} from "../shared/components/loading.tsx";

export const TouristSpots = () => {
  return (
    <TouristSpotsProvider>
      <_TouristSpots/>
    </TouristSpotsProvider>
  )
}

const _TouristSpots = () => {
  const touristSpotsContext = useContext(TouristSpotsContext) as TouristSpotsContextInterface;
  const state = touristSpotsContext.state;
  const [currentPage, setCurrentPage] = useState<number>(1);
  const filteredTouristSpots = state.touristSpots.slice((currentPage - 1) * 5, (currentPage * 5));

  const [openModal, setOpenModal] = useState<{ isOpen: boolean, id: number | undefined }>({
    isOpen: false,
    id: undefined
  });

  const handleConfirmDelete = () => {
    const id = openModal.id;
    setOpenModal({isOpen: false, id: undefined})
    if (id) {
      touristSpotsContext.deleteTouristSpot(id);
    }
  }
  const handleCancelDelete = () => {
    setOpenModal({isOpen: false, id: undefined})
  }

  useEffect(() => {
    touristSpotsContext.getTouristSpots();
  }, []);

  useEffect(() => {
    if (openModal.isOpen) {
      setTimeout(() => {
        touristSpotsContext.clearSuccess();
      }, 3000);
    }
  }, [openModal]);

  return (
    <>
      <div className={"flex flex-col justify-between relative grow px-40 py-8 2xl:px-80"}>
        <div className={"flex w-full gap-6 justify-between"}>
          <SiteInput placeholder={"Pesquisar..."} type={"text"} onChange={(e) => console.log(e.target.value)}/>
          <SiteButton text={"Buscar"} onClick={() => console.log("Buscar")}/>
        </div>
        <div className={"h-full"}>
          <div className={"flex flex-col h-full pt-6 gap-10"}>
            {state.loading ?
              <Loading/>
              :
              filteredTouristSpots.map((touristSpot) => (
                <CardTouristSpot
                  onDelete={() => setOpenModal({isOpen: true, id: touristSpot.id})}
                  id={touristSpot.id as number}
                  name={touristSpot.name}
                  description={touristSpot.description}
                  location={touristSpot.location}
                  city={touristSpot.city}
                  state={touristSpot.state}
                />
              ))}

            {!filteredTouristSpots.length ?
              <div className={"flex items-center justify-center"}>
                <h1 className={"text-dark-blue font-bold"}>Nenhum ponto turístico encontrado</h1>
              </div>
              : null
            }
          </div>
        </div>

        <Pagination
          arrayLength={state.touristSpots.length}
          currentPage={currentPage}
          pageSize={5}
          onNextPage={() => setCurrentPage(currentPage + 1)}
          onPreviousPage={() => setCurrentPage(currentPage - 1)}
        />


        {openModal &&
            <ModalConfirmDelete
                openModal={openModal.isOpen}
                onDelete={handleConfirmDelete}
                onCancel={handleCancelDelete}
            />
        }
      </div>
      <Snackbar
        type={"success"}
        message={state.success}
        open={!!state.success}
      />
    </>
  )
}
