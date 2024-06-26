import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Menubar = () => {
  const [mode, setMode] = useState("white");

  const handleScroll = () => {
    const scrollYPosition = window.scrollY;
    if (scrollYPosition > 250) {
      setMode("dark");
    } else {
      setMode("white");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Container>
      <div className="">
        <div className="d-sm-block d-flex justify-content-center  m-3 ">
          <Link to={"/"}>
            <img
              src="/images/logo/logo.png"
              alt="logo"
              width={100}
              height={80}
              className="shadow p-2 "
            />
          </Link>
        </div>
        {/* <div>
        <Link to={"signup"}>
        <button className='btn btn-light mx-3'>
          inscris-toi
        </button></Link>
        <Link to={"login"}>
        <button className='btn btn-secondary'>
          connecter
        </button></Link>
      </div> */}
      </div>
    </Container>
  );
};

export default Menubar;
