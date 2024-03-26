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
    <Container className='d-flex justify-content-between align-items-center'>
      <div className='mt-5'>
        <img src="/images/logo/logo.jpg" alt="logo"  width={100} height={100}/>
      </div>
      <div>
        <button className='btn btn-primary mx-3'>
          inscris-toi
        </button>
        <button className='btn btn-primary'>
          connecter
        </button>
      </div>

    </Container>
  )
}

export default Menubar