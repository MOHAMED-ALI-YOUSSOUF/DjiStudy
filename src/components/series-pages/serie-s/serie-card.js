import React from "react";

import { Card } from "react-bootstrap";

const SerieCard = ({ pdfURL, image, year, title }) => {
  const handleClick = () => {
    // Construire l'URL du fichier PDF à partir du nom de fichier
    const pdfURLs = `/pdfs/${pdfURL}`;
    // Ouvrir le PDF lors du clic
    window.open(pdfURLs, "_blank");
  };
  return (
    <>
      <Card className="border-0" onClick={handleClick}>
        <Card.Img
          variant="to"
          src={`/images/courses/${image}`}
          alt={title}
          className="img-fluid"
        />
        <Card.Body>
          <Card.Title>{year}</Card.Title>
        </Card.Body>
      </Card>
    </>
  );
};

export default SerieCard;
