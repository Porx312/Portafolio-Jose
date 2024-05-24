import "./experiencia.css"

const Experiencia = () => {
  return (
    <section id="experiencia" className="experiencia-laboral">
            <h2 className="experience-text">Experiencia Laboral</h2>
          <section className="experience-container"> 
            <article className="experience-card">
                <div className="job">
                <div className="work-active"></div>

                    <div className="job-contain">
                    <h2>Desarrollo Web</h2>
                    <h3>Jose Blanco/</h3>
                    <p>24/12/21- Actualmente</p>

                    </div>

                </div>
                <div className="asignation">
                    <p>Como programador autodidacta, he cultivado un conjunto impresionante de habilidades a través de proyectos personales y práctica intensiva. Desarrollan mi capacidad para resolver problemas, mi creatividad en el desarrollo de soluciones y mi enfoque apasionado hacia la codificación destacan mi capacidad para enfrentar desafíos en el mundo de la programación, a pesar de carecer de experiencia laboral formal.</p>
                </div>
            </article>
            <article className="experience-card">
                <div className="job">
                <div className="work-active"></div>
                    <div className="job-contain">
                    <h2>Sandwich Artist</h2>
                    <h3>Subway</h3>
                    <p>02/01/24 - Actualmente</p>

                    </div>
                </div>
                <div className="asignation">
                    <p>Actualmente trabajo en Subway, donde desempeño diversas tareas que incluyen la atención al cliente, la preparación de alimentos y otras responsabilidades operativas</p>
                </div>
            </article>
            <article className="experience-card">

                <div className="job">
            <div className="work-desactive"></div>
                  
                  <div className="job-contain">
                  <h2>Auxiliar Topografia</h2>
                    <h3>UTE</h3>
                    <p>09/06/23- 28/12/23</p>
                  </div>

                </div>
                <div className="asignation">
                    <p> 
                        Como auxiliar en topografía en la obra del tren R3, colaboré estrechamente con un topógrafo senior para llevar a cabo diversas tareas cruciales en el proyecto. Mis responsabilidades incluían asistir en el levantamiento topográfico del terreno, utilizando equipos especializados como estaciones totales y GPS, para recopilar datos precisos y generar planos.</p>
                </div>
            </article>
          </section>
       
        </section>
  )
}

export default Experiencia
