import React from "react";

import { Card } from "react-bootstrap";

const GalleryCard = ({ image, title, course }) => {
  return (
    <>
      <Card >
          
          <Card.Img
            variant="t"
            src={`/images/courses/${image}`}
            alt={title}
            className="img-fluid"
          />
          <Card.Footer><h1>{course}</h1></Card.Footer>

      </Card>
    </>
  );
};

export default GalleryCard;
