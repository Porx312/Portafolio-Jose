import githubima from "../assets/xd.png"
import linkimg from "../assets/link.png"
import proyectimg from "../assets/project1.png"
import project2 from "../assets/project2.png"
import atom from "../assets/skills/atom.png"
import node from "../assets/skills/node.png"
import express from "../assets/skills/express.png"
import "./proyectos.css"
const Proyectos = () => {
  return (
    <section id="proyectos" className="projects">
    <h2 className="projects-text">Proyectos</h2>
    <section className="proyect-content">
    <article className="projects-card">
       <div className="img">
        <img className="img-project" src={proyectimg} alt="colorproject"/>
       </div>
       <div className="content-project-card">
       <div className="tegnologias"><img src={atom } alt="react" /></div>
        <h2 className="name-proyect">RoadmapFull Stack</h2>
        <div className="tegnology"></div>
        <p className="description-project">RoadmapFull Stack: Tu guía completa para dominar el desarrollo Full Stack. Desde los conceptos básicos hasta las tecnologías avanzadas, te llevamos paso a paso hacia el éxito en la creación de aplicaciones web</p>
       
        <div className="container-btn-projects">
            <a target="_blank" href="https://github.com/Porx312/RoadmapFullStack" className="btn-proyects" rel="noreferrer"> <img src={githubima} alt="github"/> Code</a>
            <a href="https://roadmapfullstack.netlify.app/" target="_blank" className="btn-proyects" rel="noreferrer"> <img src={linkimg} alt="link"/> Preview</a>
        </div>
       </div>
       
    </article>
    <article className="projects-card">
       <div className="img">
        <img className="img-project" src={project2} alt="colorproject"/>
       </div>
       <div className="content-project-card">
       <div className="tegnologias"><img src={atom } alt="react" /> <img src={node} alt="node" /> <img src={express} alt="express" /></div>
        <h2 className="name-proyect">Resources Web</h2>
        <div className="tegnology"></div>
        <p className="description-project">Descubre nuestra colección especializada de herramientas para el desarrollo web. Desde editores de código hasta generadores de diseño, tenemos todo lo que necesitas para crear sitios web impresionantes y funcionales. Explora nuestras páginas cuidadosamente seleccionadas y lleva tu proyecto al siguiente nivel</p>
       
        <div className="container-btn-projects">
            <a target="_blank" href="https://github.com/Porx312/WebResourceHub/" className="btn-proyects"> <img src={githubima} alt="github"/> Code</a>
            <a href="https://webresourcehub.netlify.app/" target="_blank" className="btn-proyects"> <img src={linkimg} alt="link"/> Preview</a>
        </div>
       </div>
       
    </article>
    </section>
    <button className="more-project">Mas Proyectos..</button>
</section>
  )}

export default Proyectos
