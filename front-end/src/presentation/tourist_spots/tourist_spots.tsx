import {TouristSpotsProvider} from "../../application/tourist_spots/tourist_spots_provider.tsx";

export const TouristSpots = () => {
  return (
    <TouristSpotsProvider>
      <_TouristSpots/>
    </TouristSpotsProvider>
  )
}

  const _TouristSpots = () => {
  return (
    <>
      <div>
        <button>Adicionar Ponto Turistico</button>
      </div>

      <div>
        <input type="text" placeholder="Nome do ponto turistico"/>
        <button>Buscar</button>
      </div>

      <div>
        <div>
          nome
          descrição
          localização
        </div>
      </div>
    </>
  )
}
