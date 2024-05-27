import { useState, useEffect, useContext } from "react";
import "./menu.css";
import sun from "../assets/lightdark/contrast.png"
import moon from "../assets/lightdark/moon.png"
import iconblack from "../assets/lightdark/iconblack.svg"
import iconlight from "../assets/lightdark/iconlight.svg"
import { isDarkOrLight } from "../DarkModeContext";
import { MeteorDemo } from "./magicui/MeteorDemo";
const Menu = () => {
  const [scrolled, setScrolled] = useState(false);
  const { isLight, setIsLight } = useContext(isDarkOrLight);
  const [btnisopen, setBtnIsOpen] = useState(false)

  useEffect(() => {
    // Función para manejar el evento de scroll
    const handleScroll = () => {
      // Calcula la posición actual de desplazamiento
      const scrollPosition = window.scrollY;

      // Cambia la clase del elemento basado en la posición de desplazamiento
      if (scrollPosition > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      
    };
    // Agrega el evento de scroll al montar el componente
    window.addEventListener('scroll', handleScroll);

    // Limpia el evento de scroll al desmontar el componente
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const handleSmoothScroll = (event, targetId, offset = 180) => {
    event.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };
 
  return (
    <header className={scrolled ? (btnisopen ? "scrolled menu menuopen" : "scrolled menu menuclose") : (btnisopen ? "menu menuopen" : "menu menuclose")}>
      <MeteorDemo>

       <nav>
       <button onClick={() => setBtnIsOpen(!btnisopen)} className="btn-hamburguer">
  {isLight ? <img src={iconblack} alt="iconblack"/> :  <img src={iconlight} alt="iconlight" /> }
</button>
                <ul>
          <li onClick={()=> setBtnIsOpen(false)}>
            <a href="#inicio" onClick={(e) => handleSmoothScroll(e, "inicio")}>
              Inicio
            </a>
          </li>
          <li onClick={()=> setBtnIsOpen(false)}>
            <a href="#proyectos" onClick={(e) => handleSmoothScroll(e, "proyectos")}>
              Proyectos
            </a>
          </li>
          <li onClick={()=> setBtnIsOpen(false)}>
            <a href="#experiencia" onClick={(e) => handleSmoothScroll(e, "experiencia")}>
              Experiencia
            </a>
          </li>
          <li onClick={()=> setBtnIsOpen(false)} >
            <a href="#habilidades" onClick={(e) => handleSmoothScroll(e, "habilidades")}>
              Habilidades
            </a>
          </li>
          <li onClick={()=> setBtnIsOpen(false)}>
            <a href="#sobremi" onClick={(e) => handleSmoothScroll(e, "sobremi")}>
              Sobre mi
            </a>
          </li>
          
          <li onClick={()=> setBtnIsOpen(false)}>
            <a href="#contacto" onClick={(e) => handleSmoothScroll(e, "contacto")}>
              Contacto
            </a>
          </li>
          <li onClick={()=> setBtnIsOpen(false)}>
          <button onClick={() => setIsLight(!isLight)} className="btn-sun">
  {isLight ? <img src={moon} alt="moon"/> :  <img src={sun} alt="sun" /> }
</button>
          </li>
        </ul>
      

      </nav>
      </MeteorDemo>
    </header>
  );
};

export default Menu;