import React from "react";
import "./about.scss";
import { Container } from "react-bootstrap";

const About = () => {
  return (
    <Container className="about " id="about">
      <div className="container text-center">
        <h1 className="mb-3">
        Bienvenue sur <br /> Djib<span>Study</span>
        </h1>
        <p>
          la plateforme qui rend la révision pour le bac <br />
          <span className="text-secondary fw-bold">
          AGRÉABLE ET PASSIONNANTE!
          </span>
        </p>
        <hr />
      </div>
      <div className="p-3">
        <p>
        <span className="text-secondary fw-bold">DjibStudy </span> , la plateforme de révision conçue par des
          Djiboutiens, spécialement pour les étudiants djiboutiens en terminale,
          quelle que soit votre série. Nous comprenons que cette année peut être
          source de stress et d'incertitudes, c'est pourquoi nous avons créé 
           <span className="text-secondary fw-bold"> DjibStudy</span> pour vous aider à vous préparer de manière efficace et
          confiante.
        </p>
        <p>
        <span className="text-secondary fw-bold">DjibStudy</span> rassemble une multitude de sujets Mathématiques provenant
          des années précédentes à Djibouti. Que vous soyez en série
         <span>  scientifique, littéraire, économique</span> ou autre, nous disposons des
          ressources dont vous avez besoin pour réussir votre terminale.
        </p>
        <p>
          Affrontez les défis de la terminale avec sincérité et assurance grâce
          à  <span className="text-secondary fw-bold">DjibStudy</span>.{" "}
        </p>
        {/* <p>
          Rejoignez-nous dès aujourd'hui pour une préparation optimale et une
          réussite garantie !
        </p> */}
      </div>
    </Container>
  );
};

export default About;
