import { useState } from "react";
import "./contacto.css"
const Contacto = () => {
  const [copied, setCopied] = useState(false);

  // Función para copiar texto al portapapeles
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        // Éxito al copiar
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
        }, 1000); // Reinicia el estado después de 2 segundos
      })
      .catch((error) => {
        console.error('Error al copiar al portapapeles:', error);
      });
  };
  return (
    <section id="contacto" className="contact">
    <h2>Contacto</h2>
    <div className="contact-card">
        <a className={copied? "" : "contact-btn"}  href="mailto:joseblancodev@gmail.com?Subject=he%20mirado%20tu%20portfolio%20">  {copied ? "¡Texto copiado al portapapeles!" : "joseblancodev@gmail.com"}</a>
        <button onClick={()=> copyToClipboard("joseblancodev@gmail.com")} >  <i className="fa-regular fa-copy" style={{color:"white"}} ></i></button>
      
    </div>
</section>
  )
}

export default Contacto
