import React from "react";

import { Card } from "react-bootstrap";

const GalleryCard = ({ image, title }) => {
  return (
    <>
      <Card className="activity-card">
        <div className="image">
          
          <Card.Img
            variant="top"
            src={`/images/courses/${image}`}
            alt={title}
            className="img-fluid"
          />
        </div>
      </Card>
    </>
  );
};

export default GalleryCard;
