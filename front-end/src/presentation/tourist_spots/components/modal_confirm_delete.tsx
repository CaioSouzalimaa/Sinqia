import {SiteButton} from "../../shared/components/site_button.tsx";

interface ModalConfirmDeleteProps {
  openModal: boolean;
  onDelete: () => void;
  onCancel: () => void;
}

export const ModalConfirmDelete = (props: ModalConfirmDeleteProps) => {
  return(
    <div className={`bg-black bg-opacity-50 ${props.openModal ? "flex" : "hidden"} items-center justify-center absolute h-full w-full top-0 left-0 z-40`}>
      <div className={"flex flex-col bg-white rounded w-98 h-40 p-8 justify-between"}>
        <h1 className={"font-bold text-xl text-dark-blue"}>Deseja excluir este ponto turistico?</h1>
        <div className={"flex justify-between gap-4"}>
          <SiteButton text={"Cancelar"} onClick={props.onCancel}/>
          <SiteButton text={"Excluir"} onClick={props.onDelete} className={"bg-red-700"}/>
        </div>
      </div>
    </div>
  )
}
