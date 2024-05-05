import React from "react";

import { Card } from "react-bootstrap";

const GalleryCard = ({ image, year, title }) => {

  return (
    <>
      <Card className="border-0" >
        <Card.Img
          variant="to"
          src={`/images/courses/${image}`}
          alt={title}
          className="img-fluid"
        />
        <Card.Body>
          <Card.Title>Voir par Année</Card.Title>
        </Card.Body>
      </Card>
    </>
  );
};

export default GalleryCard;
