import React, { useEffect, useState } from 'react'
import { Container, Image, Nav, Navbar, Offcanvas } from 'react-bootstrap'
import { config } from '../../helpers/config'
import { FiHome, FiAperture, FiCalendar, FiAward, FiHeadphones } from "react-icons/fi"
import { Link } from 'react-router-dom'


const Menubar = () => {
  const [mode, setMode] = useState("white");


  const handleScroll = () => { 
    const scrollYPosition = window.scrollY;
    if(scrollYPosition > 250){
      setMode("dark");
    }
    else{
      setMode("white")
    }
   }

   useEffect(() => {
     window.addEventListener("scroll", handleScroll);
   
     return () => {
      window.removeEventListener("scroll", handleScroll);
     }
   }, [])
   


  


  return (
    <Container >
      <div className='d-flex justify-content-between align-items-center mt-2'>
      <div className='mt-'>
      <Link to={"/"}>
        <img src="/images/logo/logo.png" alt="logo"  width={100} height={80}/>
       </Link>
       </div>
      <div>
        <Link to={"signup"}>
        <button className='btn btn-light mx-3'>
          inscris-toi
        </button></Link>
        <Link to={"login"}>
        <button className='btn btn-secondary'>
          connecter
        </button></Link>
      </div>
      </div>

    </Container>
  )
}

export default Menubar