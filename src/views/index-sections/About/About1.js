import React from "react";
import { Container, Row, Col, Card } from "reactstrap";
import { motion } from "framer-motion";
import Avatar from '@mui/material/Avatar'; // Import the Avatar component
import { deepOrange, deepPurple } from '@mui/material/colors'; // Import MUI colors

// Animation variants for fading in elements
const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * index,
      duration: 1,
      ease: "easeInOut",
    },
  }),
};

function Typography() {
  return (
    <Container className="about-main mt-5 pt-5" style={{ paddingBottom:"7%",maxWidth:"100%",backgroundColor:"#F0EDED",justifyContent: "center", alignItems: "center", textAlign: "center" }}>
      <h1 className="about-h1" style={{ fontFamily: "Futura LT W01 Medium, sans-serif", fontSize: "210%", fontWeight: 600 }}>About Vikram</h1>
        <Container fluid className="about-cont mt-5 pt-3" style={{justifyContent:"center",textAlign:"center",alignContent:"center"}}>
        <h1 className="about-h2" style={{ fontFamily: "Avenir LT Pro 35 Light, sans-serif", fontSize: "80%", justifyContent: "center", alignItems: "center", textAlign: "center" }}>
        Vikram N Subramaniam is a successful professional with a Master's degree in Engineering from Dalhousie University, Canada. He is the chairman of VNS group of companies, an Indian multinational group that operates across the globe. As a Software Architect by profession, he has achieved great success in his career. In addition to his professional achievements, he is a keen investor with excellent business acumen. He has a philanthropic side and is known for his charitable work.        </h1>
        </Container>
        <Container className="about-ul" style={{ maxWidth:"65%",justifyContent: "center", alignItems: "center", textAlign: "center" }}>
  <Row style={{ maxWidth: "100%", justifyContent: "center", alignItems: "center", textAlign: "center" }}>
    <Col lg={6} style={{ marginRight: "-5%", padding: "3%", justifyContent: "center", textAlign: "left" }}>
      <ul className="about-h3" style={{ textAlign: "left", fontFamily: "Avenir LT Pro 35 Light, sans-serif", fontSize: "15px", fontWeight: 400, margin: "0", paddingLeft: "20px" }}>
        <li>
          From the C-suite to the front line, we partner with clients to help them innovate more sustainably, achieve lasting gains in performance, and build workforces that will thrive for this generation and the next.
        </li>
      </ul>
    </Col>

    <Col lg={6} style={{  marginTop:"30%",padding: "3%", justifyContent: "center", textAlign: "center", lineHeight: "1.2em" }}>
      <img className="about-img"
        alt="..."
        src={require("assets/img/Vikram Passport Photo_edited.webp")}
        style={{ width: "100%", height: "auto" }}
      ></img>
    </Col>
  </Row>
</Container>

      
      <style>
        {`
          
      /* CSS for screen width 280px to 540px */
      @media only screen and (min-width: 280px) and (max-width: 766px) {
        
        .about-h1{
          font-size: 26px !important;
        }
        .about-h2{
          font-size: 18px !important;
          letter-spacing: 0.6px !important;
           line-height: 1.5em !important;
           max-width: 100% !important;

        }
        .about-cont{
          width: 100% !important;
        }
        .about-ul{
          max-width: 100% !important;
        }
        .about-main{
          max-width: 100% !important;
        }
        .about-h3{
          font-size: 20px !important;
          line-height: 1em !important;
          width: 100% !important;

        }
        .about-img{
          width: 100% !important;
          margin-top: -25% !important;
        }
       
        
           }
      @media only screen and (min-width: 767px) and (max-width: 912px) {

         
        .about-h1{
          padding-top: 10% !important;
          font-size: 52px !important;
        }
        .about-h2{
          font-size: 34px !important;
          letter-spacing: 0.6px !important;
           line-height: 1.5em !important;
           max-width: 100% !important;

        }
        .about-cont{
          width: 100% !important;
        }
        .about-ul{
          max-width: 100% !important;
        }
        .about-main{
          max-width: 100% !important;
        }
        .about-h3{
          font-size: 38px !important;
          line-height: 1em !important;
          width: 100% !important;

        }
        .about-img{
          width: 100% !important;
          margin-top: -25% !important;
        }
       
        
            }
      @media only screen and (min-width: 1024px) {
        .about-cont{
          max-width: 66% !important;

        }
        .about-h2{
          font-size: 15px !important;
          letter-spacing: 0.3px !important;
           line-height: 1.5em !important;
           max-width: 100% !important;

        }
        
            }
      
        `}
      </style>
    </Container>
  );
}

export default Typography;