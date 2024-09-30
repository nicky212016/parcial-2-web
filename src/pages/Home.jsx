import React from "react";
import Title from "../components/Title";
import Education from "../components/Education";
import Languages from "../components/Languages";
import Skills from "../components/Skills";
import Projects from "../components/Projects";

const Home = () => {
  return (
    <main>
      <Title />
      <div className="container">
        <div className="column left-column">
          <p>
            Soy un estudiante universitario altamente motivado, en búsqueda de
            autonomía y con disposición para el aprendizaje y el desarrollo de
            nuevas competencias dentro del mundo laboral. Tengo experiencia en
            la ideación, creación y desarrollo de aplicaciones móviles, así como
            habilidades destacadas en la comunicación oral y escrita, promoción
            y venta de productos digitales y el liderazgo de equipos de trabajo.
            Soy una persona creativa, analítica y orientada a los detalles,
            capaz de adaptarme rápidamente a entornos cambiantes y trabajar bajo
            presión. <br />
            <br />
            Durante mi bachiller logré adquirir conocimientos sobre cómo
            identificar una problemática dentro de la sociedad con base a los
            Objetivos de Desarrollo Sostenible (ODS), para así proponer una
            posible solución a la misma mediante una aplicación móvil, creada
            por medio de la programación/codificación de bloques y así venderla
            como un producto, tanto en inglés como en español.
          </p>
          <hr />
          <Education />
          <hr />
          <Languages />
        </div>
        <div className="divider"></div>
        <div className="column right-column">
          <Skills />
          <br />
          <hr />
          <Projects />
        </div>
      </div>
    </main>
  );
};

export default Home;
