import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import "./footer.scss";
import { Link } from "react-router-dom";
import { CiFacebook } from "react-icons/ci";
import { BsInstagram, BsWhatsapp } from "react-icons/bs";
import { config } from "../../helpers/config";
const Footer = () => {
  return (
    <footer className="bg-secondary py-5">
      <Container className="footer">
        <div>
        <Row className=" d-flex justify-content-center  align-items-center ">
          <Col col={6}  className="col-5 d-flex flex-column align-items-center ">
           <Link to={"/"}>
            <Image
              src="/images/logo/logo.png"
              alt="logo"
              width={150}
              className="mb-3 shadow p-2"
            />
            </Link>
            <div className="d-flex gap-2">
              {" "}
              <a href={config.contact.socialMedia.facebook}>
              <button className="btn btn-outline-dark text-white">
                <CiFacebook />
                
              </button></a>
              <button className="btn btn-outline-dark text-white" >
                <BsInstagram />
              </button>
              <button className="btn btn-outline-dark text-white">
                <BsWhatsapp className="fs-5"/>
              </button>
            </div>

            <span className="text-center mb-3">info@djibstudy.com</span>
          </Col>

          {/* <Col
            md={6}
            className=" col-6 d-flex flex-column align-items-start justify-content-center "
          >
            <button className="btn btn-warning mb-2">
              S'inscrire gratuitement
            </button>
            <button className="btn btn-outline-light">
              Découvrir les examens
            </button>
          </Col> */}
        </Row>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
