import {useNavigate} from "react-router-dom";
import Logo from "../../assets/logo.png";

export const HeaderNavBar = () => {
  const navigate = useNavigate();

  return (
    <nav className={"flex flex-row sm:gap-10 px-8 md:px-40 2xl:px-80 py-3 w-full bg-dark-blue items-center sticky top-0 z-50 justify-between"}>
      <div>
        <img className={"w-20 md:w-auto"} src={Logo} alt={"Logo"} onClick={() => navigate("/")}/>
      </div>
      <div>
        <ul className={"flex flex-row w-full gap-2 sm:gap-10 text-[8px] sm:text-sm text-white"}>
          <li className={`hover:cursor-pointer hover:text-gray-500`} onClick={() => navigate("/")}>
            PONTOS TURÍSTICOS
          </li>
          <li className={"hover:cursor-pointer hover:text-gray-500"} onClick={() => navigate("/pontos-turisticos/adicionar")}>
            CADASTRAR PONTO TURÍSTICO
          </li>
        </ul>
      </div>
    </nav>
  )
}
