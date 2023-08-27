import {useNavigate} from "react-router-dom";
import Logo from "../../assets/logo.png";

export const HeaderNavBar = () => {
  const navigate = useNavigate();

  return (
    <nav className={"flex flex-row gap-10 px-40 py-3 w-full bg-dark-blue items-center"}>
      <img src={Logo} alt={"Logo"}/>
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
