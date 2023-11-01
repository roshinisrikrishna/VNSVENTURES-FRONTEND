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
    <Container className="approach-main mt-5 pt-5" style={{ paddingBottom:"30%",maxWidth:"100%",backgroundColor:"#F0EDED",justifyContent: "center", alignItems: "center", textAlign: "center" }}>
      <h1 className="approach-h1" style={{ fontFamily: "Futura LT W01 Medium, sans-serif", fontSize: "200%", fontWeight: 600 }}>Our Portfolio Approach
</h1>
<Container className="approach-container mt-5 pt-3" style={{ maxWidth: "60%", lineHeight: "1.5em" }}>
  <h1 className="approach-h2" style={{ fontFamily: "Avenir LT Pro 35 Light, sans-serif", fontSize: "80%", textAlign: "left", margin: "20px 0" }}>
    We help enterprises drive revenue with the Salesforce and Google ecosystems.
  </h1>
  <h1 className="approach-h2" style={{ fontFamily: "Avenir LT Pro 35 Light, sans-serif", fontSize: "80%", textAlign: "left", margin: "20px 0" }}>
    We specialize in helping organizations meet their financial targets by leveraging our expertise in the Salesforce ecosystem.
  </h1>
  <h1 className="approach-h2" style={{ fontFamily: "Avenir LT Pro 35 Light, sans-serif", fontSize: "80%", textAlign: "left", margin: "20px 0" }}>
    Our Mastery in Salesforce’s best-in-class technology allows us to help companies address their most urgent business challenges and drive sustainable, inclusive growth.
  </h1>
</Container>

            
      <style>
        {`
          
      /* CSS for screen width 280px to 540px */
      @media only screen and (min-width: 280px) and (max-width: 766px) {
        
        .approach-h1{
          padding-top: 5% !important;
          font-size: 26px !important;
        }
        .approach-container{
          max-width: 100% !important;
        }
        .approach-h2{
          font-size: 17px !important;
          letter-spacing: 0.2px !important;
           line-height: 1.4em !important;
        }
    
           }
      @media only screen and (min-width: 767px) and (max-width: 912px) {
        .approach-h1{
          padding-top: 10% !important;
          font-size: 50px !important;
        }
        .approach-container{
          max-width: 100% !important;
        }
        .approach-h2{
          font-size: 36px !important;
          letter-spacing: 0.5px !important;
           line-height: 1.4em !important;
           color: black !important;
           padding-bottom: 4% !important;

        }
    
       
            }
      @media only screen and (min-width: 1024px) {
        
     
         
            }
      
        `}
      </style>
    </Container>
  );
}

export default Typography;