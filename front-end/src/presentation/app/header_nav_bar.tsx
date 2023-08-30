import {useNavigate} from "react-router-dom";
import Logo from "../../assets/logo.png";

export const HeaderNavBar = () => {
  const navigate = useNavigate();

  return (
    <nav className={"flex flex-row gap-10 px-40 2xl:px-80 py-3 w-full bg-dark-blue items-center sticky top-0 z-50 justify-between"}>
      <img src={Logo} alt={"Logo"} onClick={() => navigate("/")}/>
      <ul className={"flex flex-row gap-10 text-sm text-white"}>
        <li className={`hover:cursor-pointer hover:text-gray-500`} onClick={() => navigate("/")}>
          PONTOS TURÍSTICOS
        </li>
        <li className={"hover:cursor-pointer hover:text-gray-500"} onClick={() => navigate("/pontos-turisticos/adicionar")}>
          CADASTRAR PONTO TURÍSTICO
        </li>
      </ul>
    </nav>
  )
}
