import React from "react";
import { Container } from "react-bootstrap";

const Subject = ({ pdfURL }) => {
  return (
    <Container className="d-flex justify-content-center">
      {" "}
      <div className="w-50 d-flex justify-content-center">
        <iframe
          src={pdfURL}
          title="PDF Viewer"
          width="100%"
          height="600px"
        ></iframe>
      </div>
      ;
    </Container>
  );
};

export default Subject;
