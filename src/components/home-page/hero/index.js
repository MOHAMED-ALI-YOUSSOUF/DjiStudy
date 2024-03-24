import React from "react";
import { Container } from "react-bootstrap";

const Hero = () => {
  const series = [
    {
      index: 1,
      title: "Términale S",
    },
    {
      index: 2,
      title: "Términale ES",
    },
    {
      index: 3,
      title: "Términale L",
    },
    {
      index: 4,
      title: "Términale STG",
    },
    {
      index: 5,
      title: "Fiche Cours",
    },
    {
      index: 6,
      title: "le bon conseil",
    },
  ];

  return (
    <Container className="hero d-flex">
      <div className="flex-3">
        <div>
          Avec <span>DjibStudy</span> <br /> Réviser pour votre bac
          Gratuitement.
        </div>
        <div>
          {series.map((serie) => (
            <div key={serie.index} className="d-flex  align-items-center mb-3">
              <a href="#" className="btn btn-outline-primary">
                {serie.title}
              </a>
            </div>
          ))}
        </div>
      </div>
      <div className="flex-3">
        <img src="/images/hero/hero.jpg" alt="study" />
      </div>
    </Container>
  );
};

export default Hero;
