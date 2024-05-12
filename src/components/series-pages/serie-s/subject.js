import React from "react";
import { Container } from "react-bootstrap";
import "./subject.scss"
const Subject = ({ pdfURL }) => {
  return (
    <Container className="d-flex justify-content-center subject">
      {" "}
      <div className="w-100 d-flex justify-content-center">
        <iframe
          src={pdfURL}
          title="PDF Viewer"
          width="100%"
          height="600px"
        ></iframe>
      </div>
       <a href={pdfURL}><button className="btn btn-secondary text-white position-absolute top-50 start-50 translate-middle">
       Télécharger
        
        </button></a>
      ;
    </Container>
  );
};

export default Subject;
