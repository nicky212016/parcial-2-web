import React from "react";
import foto from "../assets/imgs/foto_portafolio.jpg";

const Title = () => {
  return (
    <div className="title">
      <h1>Nicolás Cortés Restrepo</h1>
      <h2>Estudiante universitario</h2>
      <img id="img" src= {foto} alt="yo" />
    </div>
  );
};

export default Title;
