import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Container } from 'reactstrap';
import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';

const TestimonialCarousel = () => {
  return (
    <Container style={{maxWidth:"100%", alignItems: "center", justifyContent: "center", textAlign: "center", backgroundColor: "#FADCD6" }}
    >
    <Carousel
      interval={5000}
      controls={false}
      pause={false}
      fade={true}
    >
   <Carousel.Item 
  style={{ 
    width: "100%", 
    background: "transparent", 
    border: "none", 
    boxShadow: "none", 
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center', 
    textAlign: 'center',
    paddingTop:"10%",
    paddingBottom:"10%"
  }}
>
  <div 
    style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      textAlign: 'center' 
    }}
  >
    <h1 className="carousel-h1" style={{ 
      lineHeight: "1.5em", 
      maxWidth: "72%", 
      display: "flex", 
      textAlign: "center", 
      fontSize: "182%", 
      fontWeight: 500, 
      fontFamily: "Futura LT W01 Medium, sans-serif", 
      fontStyle: "normal" 
    }}>
      <img alt="..." src={require("assets/img/quotes1-fotor-bg-remover-20231021204841.png")} style={{ width: "6%", height: "100%", marginRight: "40px" }}></img>
      <span style={{ flex: 1 }}>
        Working with Vikram was a great experience. Their team was responsive and professional, and the end result exceeded our expectations. I would highly recommend them to anyone looking for creative services.
      </span>
      <img alt="..." src={require("assets/img/quotes-reverse-removebg-preview.png")} style={{ width: "6%", height: "100%", marginLeft: "40px" }}></img>
    </h1>
    <h4 style={{ 
      letterSpacing: "0.3px", 
      textAlign: "center", 
      fontSize: "80%", 
      fontWeight: 300, 
      maxWidth: "20%",
      fontFamily: "Futura LT W01 Medium, sans-serif" 
    }}
    className='carousel-h4'
    >
      Emily .S.  Marketing Director, ABC Corp.
    </h4>
  </div>
</Carousel.Item>


      <Carousel.Item style={{ paddingTop:"10%",
    paddingBottom:"10%",width:"100%", background:"transparent", border:"none",boxShadow:"none", display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
  <div style={{ alignItems: 'center', justifyContent: 'center', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <h1 className="carousel-h1" style={{ lineHeight: "1.5em", maxWidth: "72%", display: "flex", textAlign: "center", fontSize: "182%", fontWeight: 500, fontFamily: "Futura LT W01 Medium, sans-serif", fontStyle: "normal" }}>
      <img alt="..." src={require("assets/img/quotes1-fotor-bg-remover-20231021204841.png")} style={{ width: "6%", height: "100%", marginRight: "40px" }}></img>
      <span style={{ flex: 1 }}>
        Vikram's team worked closely with us to create our product that truly reflected our brand and message. Their attention to detail and creative approach made all the difference.
      </span>
      <img alt="..." src={require("assets/img/quotes-reverse-removebg-preview.png")} style={{ width: "6%", height: "100%", marginLeft: "40px" }}></img>
    </h1>
    
    <h4 className='carousel-h4' style={{  letterSpacing: "0.3px", textAlign: "center", fontSize: "80%", fontWeight: 300, maxWidth: "20%", fontFamily: "Futura LT W01 Medium, sans-serif" }}>
      Ian Peddle, Director, ABM Solutions
    </h4>
  </div>
</Carousel.Item>

    </Carousel>
    <style>
      {`
       /* CSS for screen width 280px to 540px */
       @media only screen and (min-width: 280px) and (max-width: 766px) {
         
              .carousel-h1{
                font-size: 23px !important;
                max-width: 100% !important;
              }  
              .carousel-h4{
                font-size: 17px !important;
                max-width: 100% !important;

              }  

         
            }
       @media only screen and (min-width: 767px) and (max-width: 912px) {
 
        .carousel-h1{
          font-size: 46px !important;
          max-width: 100% !important;
        }  
        .carousel-h4{
          font-size: 38px !important;
          max-width: 100% !important;

        }  
          
             }
       @media only screen and (min-width: 1024px) {
         
      
             }
      
      `}
    </style>
    </Container>
  );
};

export default TestimonialCarousel;
