
import { useContext } from "react"
import Contacto from "./components/Contacto"
import Experiencia from "./components/Experiencia"
import Footer from "./components/Footer"
import Habilidades from "./components/Habilidades"
import Inicio from "./components/Inicio"
import Menu from "./components/Menu"
import Proyectos from "./components/Proyectos"
import SobreMi from "./components/SobreMi"
import { isDarkOrLight } from "./DarkModeContext"
import "./tailwind/output.css"
import { MeteorDemo } from "./components/magicui/MeteorDemo"

function App() {
  const {isLight} = useContext(isDarkOrLight)
  
  return (
     
      <MeteorDemo>
    <main className={isLight ? "content lightmode" : "content"}>
   <Menu/>
     <Inicio/>
     <Proyectos/>
     <Experiencia/>
     <Habilidades/>
     <SobreMi/>
     <Contacto/>
     <Footer/>
    </main>

    </MeteorDemo>

  )
}

export default App