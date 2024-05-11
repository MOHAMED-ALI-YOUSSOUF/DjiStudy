import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import yearsg from "../../../helpers/data/year-sg.json";
// import { useParams } from "react-router-dom";
import SerieCard from "./serie-card";
import Subject from "./subject";
import { useRef } from "react";

const SerieSg = () => {
  const [filteredSeries, setFilteredSeries] = useState([]);
  const [selectedSerie, setSelectedSerie] = useState(null);
  const pdfRef = useRef(null);
  // const { slug } = useParams();

  const filterSeries = (title) => {
    const filtered = yearsg.filter((serie) => serie.year === title);
    setFilteredSeries(filtered);
  };

  const handleSerieClick = (serie) => {
    setSelectedSerie(serie);
    pdfRef.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    // Filtrer la première série par défaut
    filterSeries("202");
  }, []);

  const buttonsData = [
    { title: "2020", filter: "2020" },
    { title: "2021", filter: "2021" },
    { title: "2022", filter: "2022" },
    { title: "2023", filter: "2023" },
  ];

  return (
    <Container>
      <h1 className="text-center fw-bold mb- fs-lg-1 ">
        Série
        <span className="text-secondary"> SG - Math</span>
      </h1>
      <hr />
      <div>
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
              <div
                onClick={() => handleSerieClick(serie)}
                className="serie-card-button"
              >
                <SerieCard {...serie} />
              </div>
            </Col>
          ))}
      </Row>
      <div ref={pdfRef}>
        {selectedSerie && <Subject pdfURL={selectedSerie.pdfURL} />}
      </div>
    </Container>
  );
};

export default SerieSg;
