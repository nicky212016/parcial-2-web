import React from "react";

// Datos de las habilidades duras y blandas
const hardSkillsData = [
  "Modelado 3D",
  "Manejo de Unity",
  "Adobe After Effects",
  "Adobe Premiere Pro",
  "Nivel B2 de Inglés",
  "Manejo de Pro Tools",
];

const softSkillsData = [
  "Creatividad",
  "Resiliencia",
  "Liderazgo",
  "Trabajo en equipo",
  "Comunicación asertiva",
];

const Skills = () => {
  return (
    <div className="containerSkills">
      <div className="hardSkills">
        <h2 id="subtitle"><strong>Habilidades Duras</strong></h2>
        <ul>
          {hardSkillsData.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>

      <div className="softSkills">
        <h2 id="subtitle"><strong>Habilidades Blandas</strong></h2>
        <ul>
          {softSkillsData.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Skills;
