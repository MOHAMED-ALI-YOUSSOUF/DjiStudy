import React from "react";
import { Col, Container } from "react-bootstrap";
import "./hero.scss";
import { Link } from "react-router-dom";
const Hero = () => {
  const series = [
    {
      index: 1,
      title: "Términale S",
      serie: "S",
    },
    {
      index: 2,
      title: "Términale ES",
      serie: "ES",
    },
    {
      index: 3,
      title: "Términale L",
      serie: "L",
    },
    {
      index: 4,
      title: "Términale STG",
      serie: "STG",
    },
  ];

  return (
    <Container className="hero ">
      <div className="row">
        <div className="col">
          <div>
            <div className="text-center mb-1  ">
              Avec <span>DjibStudy</span>
              <p>
                {" "}
                Réviser pour votre Bac
                <span className="text-secondary"> Gratuitement.</span>
              </p>
            </div>
            <div className="col image d-sm-none mb-3">
              {" "}
              <img src="/images/hero/hero.jpg" alt="study" />
            </div>
            <div className="d-flex flex-wrap justify-content-center ">
              {series.map((serie) => (
                <Link to={`/series/${serie.serie}`}>
                  <div
                    key={serie.index}
                    className="d-flex  align-items-center mb-3 "
                  >
                    <button className="btn btn-outline-secondary    text-dark me-3">
                      {serie.title}
                    </button>
                  </div>
                </Link>
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
