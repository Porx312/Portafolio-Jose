import { useEffect, useState } from "react";
import linkedin from "../assets/linke.png";
import correo from "../assets/correo.png";
import github from "../assets/xd.png";
import "./inicio.css";

const Inicio = () => {
  const [data, setData] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://api.github.com/users/porx312")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch GitHub data");
        }
        return response.json();
      })
      .then((data) => setData(data))
      .catch((error) => setError(error.message));
  }, []);

  return (
    <section id="inicio" className="about-presentation">
      <div className="presentation-text">
        <h2 className="presentation-h2">Soy <span>Jose Blanco</span></h2>
        <h1 id="dsweb">Desarrollador Web</h1>
        {error && <p>Error: {error}</p>}
        <h2 className="location">{data.location}</h2>
        <div className="presentation-btn-container">
          <a className="btn-presentation" href={`mailto:joseblancodev@gmail.com?Subject=he%20mirado%20tu%20portfolio`} target="_blank" rel="noopener noreferrer">
            <img src={linkedin} alt="linkedin"/>
          </a>
          <a className="btn-presentation" href="https://www.linkedin.com/in/jos%C3%A9-blanco-83a12a254/" target="_blank" rel="noopener noreferrer">
            <img src={correo} alt="contacto"/>
          </a>
          <a className="btn-presentation" href={data.html_url} target="_blank" rel="noopener noreferrer">
            <img src={github} alt="github"/>
          </a>
        </div>
      </div>
      <div className="presentation-picture">
        <img src={data.avatar_url} alt="jose blanc"/>
      </div>
    </section>
  );
};

export default Inicio;

