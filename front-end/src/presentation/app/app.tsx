import {AppRouter} from "./util/routes.tsx";
import {HeaderNavBar} from "./header_nav_bar.tsx";

function App() {
  return (
    <div className={"flex flex-col h-screen"}>
      <HeaderNavBar/>
      <AppRouter/>
    </div>
  )
}

export default App
