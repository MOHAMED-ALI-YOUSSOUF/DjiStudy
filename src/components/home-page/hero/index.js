import React from "react";
import { Container } from "react-bootstrap";
import "./hero.scss"
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
  ];

  return (
    <Container className="hero ">
      <div className="row">
        <div className="col">
          <div >
            <div className="text-center mb-1 fs-5">
              Avec <span>DjibStudy</span> 
              <p> Réviser pour votre Bac
              <span className="text-secondary"> Gratuitement.</span></p>
            </div>
            <div className="col image d-sm-none mb-3">
          {" "}
          <img src="/images/hero/hero.jpg" alt="study" />
        </div>
            <div className="d-flex flex-wrap justify-content-center ">
              {series.map((serie) => (
                <div
                  key={serie.index}
                  className="d-flex  align-items-center mb-3 "
                >
                  <a href="#about" className="btn btn-outline-secondary    text-dark me-3">
                    {serie.title}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="col image d-none d-sm-block">
          {" "}
          <img src="/images/hero/hero.jpg" alt="study" width={600} />
        </div>
      </div>

   
    </Container>
  );
};

export default Hero;
