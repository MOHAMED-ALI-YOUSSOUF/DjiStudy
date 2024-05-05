import React from "react";

import { Card } from "react-bootstrap";

const SerieCard = ({  image, content, title }) => {

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
          <Card.Title>{content}</Card.Title>
        </Card.Body>
      </Card>
    </>
  );
};

export default SerieCard;
