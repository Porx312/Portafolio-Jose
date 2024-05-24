import { useContext } from "react";
import aboutmeimg from "../assets/sobremiPIcture.jpg";
import "./sobremi.css";
import { isDarkOrLight } from "../DarkModeContext";

const SobreMi = () => {
  const { isLight } = useContext(isDarkOrLight);
  return (
    <section
      id="sobremi"
      className={isLight ? "about-me lightmode" : "about-me"}
    >
      <h2 className="about-me-text">Sobre Mi</h2>
      <article className="card-about-me">
        <div className="card-aboutmetext">
          <p>
          
          ¡Hola! Soy   <span id="meB">Jose Blanco,</span> {" "}
            <span>
              un apasionado desarrollador web con más de un año y medio de
              experiencia en el mundo de la programación
            </span>
            . Actualmente, trabajo en Subway, pero mi verdadera pasión se
            encuentra en el desarrollo web, donde paso mis momentos libres
            explorando documentación, participando en cursos y resolviendo
            desafiantes ejercicios de programación.
          </p>
          <p>
        
       
              Mi enfoque principal ha sido construir bases sólidas en
              <span id="js">  JavaScript</span>,  <span id="html">HTML </span> y <span id="css">CSS</span> 
       
            . Aunque aún estoy perfeccionando mis habilidades, encuentro
            fascinante ver cómo cobra vida cada proyecto. React también es parte
            fundamental de mi arsenal, ya que me encanta trabajar con esta
            biblioteca.
          </p>

          <p>
            {" "}
            <span>
            Actualmente estoy aprendiendo a
              usar el MERN stack </span> (<span id="md">MongoDB</span>, <span id="ex"> Express.js</span>, <span id="react"> React</span> y <span id="node"> Node.js</span>).
            . . Creo que esta pila tecnológica me permitirá llevar mis
            habilidades de desarrollo web al siguiente nivel y construir
            aplicaciones web modernas y dinámicas.
          </p>

          <p>
           <span>
           ¡Gracias por visitar mi portfolio!
            </span> Estoy emocionado por lo que el
            futuro tiene reservado y por las oportunidades que me permitirán
            seguir creciendo como desarrollador.
          </p>
        </div>
        <div className="aboutme-picture">
          <img src={aboutmeimg} alt="jose" />
        </div>
      </article>
    </section>
  );
};

export default SobreMi;
