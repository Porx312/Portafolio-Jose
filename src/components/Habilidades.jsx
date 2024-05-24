/* eslint-disable react-hooks/exhaustive-deps */
import reactI from "../assets/skills/atom.png"
import htmlI from  "../assets/skills/html-5.png"
import cssI  from "../assets/skills/css-3.png"
import JsI  from "../assets/skills/js.png"
import Tsi  from "../assets/skills/typescript.png"
import git  from "../assets/skills/git.png"
import github  from "../assets/skills/GitHubs.png"
import Jest  from  "../assets/skills/Jest.png"
import metamask  from  "../assets/skills/metamask.png"
import sass  from  "../assets/skills/sass.png"
import node  from  "../assets/skills/node.png"
import mongod  from  "../assets/skills/mongod.png"
import express  from  "../assets/skills/express.png"
import bost   from "../assets/skills/bost.png"
import binance  from  "../assets/skills/binance.png"
import material  from  "../assets/skills/MaterialUI.png"
import vite  from  "../assets/skills/Vite.js.png" 
import "./habilidades.css"
import {  useState } from "react"
const Habilidades = () => {
const [skill, setSkill] = useState()
return (
    <section id="habilidades" className="habilidades-tecnicas">
    <h2>{skill? skill : "Habilidades"}</h2>
    <menu className="menu-habilidades" >
        <ul>
            <li onMouseEnter={(e)=> setSkill(e.target.id)} onMouseLeave={()=> setSkill()}  id="Habilidades">Habilidades</li>
            <li onMouseEnter={(e)=> setSkill(e.target.id)} onMouseLeave={()=> setSkill()}   id="Aprendiendo">Aprendiendo</li>
            <li onMouseEnter={(e)=> setSkill(e.target.id)} onMouseLeave={()=> setSkill()}  id="Herramientas">Herramientas</li>
            <li onMouseEnter={(e)=> setSkill(e.target.id)} onMouseLeave={()=> setSkill()}  id="Extras">Extras</li>
        </ul>
    </menu>
    <article className="card-skills">
        <div className={skill? `cuboActive ${skill}`: "cubo"}>
            <div  className="front" >
                <div className="cubo-card-skills-content">
                <h2>habilidades</h2>
                <article>
          
                    <picture>
                        <img src={htmlI} alt="html" />
                    </picture>
                    <picture>
                        <img src={cssI} alt="css" />
                    </picture>
                    <picture>
                        <img src={JsI} alt="js" />
                    </picture>
                    <picture>
                        <img src={reactI} alt="react" />
                    </picture>
                    <picture>
                        <img src={git} alt="git" />
                    </picture>
                    <picture>
                        <img src={Jest} alt="jest" />
                    </picture>
                    <picture>
                        <img src={sass} alt="sass" />
                    </picture>
                </article>
                </div>
            </div>
            <div className="back" >
              
                <div className="cubo-card-skills-content">
                <h2>Aprendiendo</h2>
                <article>
                    <picture>
                        <img src={Tsi} alt="typescrit" />
                    </picture>
                    <picture>
                        <img src={node} alt="node" />
                    </picture>
                    <picture>
                        <img src={express} alt="node" />
                    </picture>
                    <picture>
                        <img src={mongod} alt="mongod" />
                    </picture>
                    
                    <picture>
                        <img src={bost} alt="bostrap" />
                    </picture>
                    <picture>
                        <img src={material} alt="material" />
                    </picture>
                </article>
                </div>
            </div>
            <div className="left">
              
                <div className="cubo-card-skills-content">
                <h2>Herramientas</h2>
                <article>
                    <picture>
                        <img src={vite} alt="vite" />
                    </picture>
                    <picture>
                        <img src={github} alt="github" />
                    </picture>
            
                </article>
                </div>
            </div>
            <div className="right">

                <div className="cubo-card-skills-content">
                <h2>Extras</h2>
                <article>
                    <picture>
                        <img src={binance} alt="binance" />
                    </picture>
                    <picture>
                        <img src={metamask} alt="metamask" />
                    </picture>
             
                </article>
                </div>
            </div>
            <div className="up">
            </div>
            <div className="down">
            </div>
        </div>
    </article>
</section>
  )
}

export default Habilidades
