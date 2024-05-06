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
    { title: "Terminale SG", filter: "sg" },
    { title: "Terminale L", filter: "l" },
  ];

  return (
    <Container>
     <h1 className="text-center fw-bold mb- fs-lg-1 ">
        Découvrez une{" "}
        <span className="text-secondary">MULTITUDE DE SUJETS MATHÉMATIQUES</span> <br /> pour
        toutes les séries
      </h1>
      <hr />
      <div className="d-flex justify-content-center serie">
        <div className="d-flex gap-3  flex-wrap justify-content-center">
          {buttonsData.map((button, index) => (
            <Button
              key={index}
              variant="outline-success"
              onClick={() => filterSeries(button.filter)}
              className="mx-2 btn-lg "
            >
              {button.title}
            </Button>
          ))}
        </div>
      
      </div>

      <Row className="row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-5 m-2 d-flex justify-content-center">
        {filteredSeries.length > 0 &&
          filteredSeries.map((serie) => (
            <Col sm={6} key={serie.id} className="shadow text-center d-flex justify-content-center">
              <Link to={`/series/${serie.title}`}>
                <GalleryCard {...serie} />
              </Link>
            </Col>
          ))}
      </Row>
    </Container>
  );
};

export default Series;
