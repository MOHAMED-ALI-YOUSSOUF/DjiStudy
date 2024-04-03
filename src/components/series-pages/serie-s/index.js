import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import Series from '../../home-page/examen/serie'
import { Link } from 'react-router-dom';
import GalleryCard from '../../home-page/examen/gallery-card';
import seriesData from "../../../helpers/data/annees-bac.json";
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
    { title: "2018", filter: "s" },
    { title: "2019", filter: "es" },
    { title: "2020", filter: "stg" },
    { title: "2021", filter: "l" },
    { title: "2022", filter: "fiche" },
    { title: "2023", filter: "advice" },
  ];
  return (
    <Container>
      <h1 className="text-center fw-bold mt-3 fs-lg-1 ">
        Decouvrez une{" "}
        <span className="text-secondary">MULTITUDE DE SUJETS</span> <br /> 
      </h1>
      <h2 className="text-center mt-5">Serie S <br /> <span className='text-secondary '>Mathematiques</span></h2>
      <hr />
      <div className="d-flex flex-column align-items-center justify-content-center gap-md-4 gap-4 serie">
        <div className="flex justify-content-evenly gap-4">
          {buttonsData.slice(0, 3).map((button, index) => (
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
        <div>
          {buttonsData.slice(3).map((button, index) => (
            <button
              key={index}
              onClick={() => filterSeries(button.filter)}
              className="mx-2 btn-lg  btn btn-outline-secondary "
            >
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
                {/* <GalleryCard {...serie} /> */}
                <li>Cours : {serie.course}</li>
                <a>Niveau : {serie .level}</a>
              </Link>
              <div>
              <a href={`/images/courses/${serie .level}`}>CV</a>
              <a href={`/images/courses/${serie .level}`}>CV</a>
              <a href={`/images/courses/${serie .level}`}>CV</a></div>
            </Col>
          ))}
      </Row>
   
    
      
    </Container>
  )
}

export default SerieS
