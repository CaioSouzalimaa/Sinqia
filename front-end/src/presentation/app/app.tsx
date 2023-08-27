import {AppRouter} from "./util/routes.tsx";
import {HeaderNavBar} from "./header_nav_bar.tsx";

function App() {
  return (
    <>
      <HeaderNavBar/>
      <AppRouter/>
    </>
  )
}

export default App
