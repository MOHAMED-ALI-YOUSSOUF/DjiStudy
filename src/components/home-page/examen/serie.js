import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import seriesData from "../../../helpers/data/seriesData.json";
import GalleryCard from "./gallery-card";

const Series = () => {
  const [filteredSeries, setFilteredSeries] = useState([]);

  const filterSeries = (title) => {
    const filtered = seriesData.filter((serie) => serie.title === title);
    setFilteredSeries(filtered);
  };

  return (
    <Container>
      <div className="d-flex flex-wrap justify-content-evenly gap-md-5 gap-2 ">
        <Button variant="success"  onClick={() => filterSeries("s")}>
          Terminale S
        </Button>
        <Button variant="success"  onClick={() => filterSeries("es")}>
          Terminale ES
        </Button>
        <Button variant="success"  onClick={() => filterSeries("stg")}>
          Terminale STG
        </Button>
        <Button variant="success"  onClick={() => filterSeries("l")}>
          Terminale L
        </Button>
        <Button variant="success"  onClick={() => filterSeries("fiche")}>
          Fiche de cours
        </Button>
        <Button variant="success"  onClick={() => filterSeries("advice")}>
          Le bon Conseil
        </Button>
      </div>

      <Row className="row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-5 mt-2">
        {filteredSeries.length > 0 &&
          filteredSeries.map((serie) => (
            <Col key={serie.id}>
              <GalleryCard {...serie} />
            </Col>
          ))}
      </Row>
    </Container>
  );
};

export default Series;
