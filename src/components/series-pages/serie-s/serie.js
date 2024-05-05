import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import year from "../../../helpers/data/year.json";
import { useParams } from "react-router-dom";
import SerieCard from "./serie-card";

const Serie = ({ serieType }) => {
  const [filteredSeries, setFilteredSeries] = useState([]);


  const { slug } = useParams();
  const filterSeries = (title) => {
    const filtered = year.filter((serie) => serie.title === title);
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
        Serie
        <span className="text-secondary">{`{${slug.toUpperCase()}}`}</span>
      </h1>
      <hr />
      <div >
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
            <Col sm={6} key={serie.id} className="shadow text-center">
              <SerieCard {...serie} />
            </Col>
          ))}
      </Row>
    </Container>
  );
};

export default Serie;
