import {useNavigate} from "react-router-dom";
import {Logo} from "../../assets/logo.tsx";


export const HeaderNavBar = () => {
  const navigate = useNavigate();
  const isAddPage = location.pathname === "/pontos-turisticos/adicionar" || location.pathname.startsWith("/pontos-turisticos/adicionar/");
  const isHome = location.pathname === "/";
  return (
    <nav className={"flex flex-row sm:gap-10 px-8 md:px-40 2xl:px-80 py-3 w-full bg-secondary items-center sticky top-0 z-50 justify-between"}>
      <div>
        <Logo/>
      </div>
      <div>
        <ul className={"flex flex-row w-full gap-2 sm:gap-10 text-[8px] sm:text-sm text-white"}>
          <li className={`${isHome ? "text-gray-500" : "text-white"} hover:cursor-pointer hover:text-gray-500`}>
            <button disabled={isHome} onClick={() => navigate("/")}>
              PONTOS TURÍSTICOS
            </button>
          </li>
          <li className={`${isAddPage ? "text-gray-500" : "text-white"} hover:cursor-pointer hover:text-gray-500`}>
            <button disabled={isAddPage} onClick={() => navigate("/pontos-turisticos/adicionar")}>
              CADASTRAR PONTO TURÍSTICO
            </button>
          </li>
        </ul>
      </div>
    </nav>
  )
}
