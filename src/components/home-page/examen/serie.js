import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import seriesData from "../../../helpers/data/seriesData.json";
import GalleryCard from "./gallery-card";
import { Link } from "react-router-dom";
import "./serie.scss";
const Series = () => {
  const [filteredSeries, setFilteredSeries] = useState([]);

  const filterSeries = (title) => {
    const filtered = seriesData.filter((serie) => serie.title === title);
    setFilteredSeries(filtered);
  };
  
  useEffect(() => {
    // Filtrer la première série par défaut
    filterSeries("s");
  }, []);

  const buttonsData = [
    { title: "Terminale S", filter: "s" },
    { title: "Terminale ES", filter: "es" },
    { title: "Terminale STG", filter: "stg" },
    { title: "Terminale L", filter: "l" },
    { title: "Fiche de cours", filter: "fiche" },
    { title: "Le bon Conseil", filter: "advice" }
  ];

  return (
    <Container>
      <h1 className="text-center fw-bold mb- fs-lg-5 fs-2">Decouvrez une <span className="text-secondary">MULTITUDE DE SUJETS</span> <br /> pour toutes les series</h1>
      <hr />
      <div className="d-flex flex-column align-items-center justify-content-center gap-md-4 gap-4 serie">
        <div className="flex justify-content-evenly gap-4">
          {buttonsData.slice(0, 3).map((button, index) => (
            <Button key={index} variant="outline-success" onClick={() => filterSeries(button.filter)} className="mx-2 btn-lg ">
              {button.title}
            </Button>
          ))}
        </div>
        <div>
          {buttonsData.slice(3).map((button, index) => (
            <button key={index}  onClick={() => filterSeries(button.filter)} className="mx-2 btn-lg  btn btn-outline-secondary ">
              {button.title}
            </button>
          ))}
        </div>
      </div>

      <Row className="row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-5 m-2">
        {filteredSeries.length > 0 &&
          filteredSeries.map((serie) => (
            <Col sm={6} key={serie.id} className="shadow text-center">
              <Link to={`/series/${serie.course}`}>
                <GalleryCard {...serie} />
              </Link>
            </Col>
          ))}
      </Row>
    </Container>
  );
};

export default Series;
