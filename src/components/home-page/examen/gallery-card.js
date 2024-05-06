import React from "react";

import { Card } from "react-bootstrap";

const GalleryCard = ({ image, title }) => {

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
          <span>Voir par Année</span>
        </Card.Body>
      </Card>
    </>
  );
};

export default GalleryCard;
