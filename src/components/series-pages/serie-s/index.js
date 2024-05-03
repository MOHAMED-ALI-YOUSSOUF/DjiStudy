import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Series from "../../home-page/examen/serie";
import { Link } from "react-router-dom";
import GalleryCard from "../../home-page/examen/gallery-card";
import seriesData from "../../../helpers/data/seriesData.json";
const SerieS = () => {
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
    { title: "2020", filter: "s" },
    { title: "2021", filter: "es" },
    { title: "2022", filter: "stg" },
    { title: "2023", filter: "l" },
  ];

  return (
    <Container>
      <h1 className="text-center fw-bold mb- fs-lg-1 ">
   Serie{" "}
        <span className="text-secondary">S</span>
      </h1>
      <hr />
      <div className="d-flex justify-content-center serie">
        <div className="d-flex gap-3  flex-wrap">
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

export default SerieS;
