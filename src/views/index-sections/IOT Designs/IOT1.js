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
    <Container className="iot-main mt-5 pt-5" style={{ paddingBottom:"30%",maxWidth:"100%",backgroundColor:"#CCC6C6",justifyContent: "center", alignItems: "center", textAlign: "center" }}>
      <h1 className="iot-h1" style={{ fontFamily: "Futura LT W01 Medium, sans-serif", fontSize: "200%", fontWeight: 600 }}>1.<br/>
<span style={{fontWeight:500}}>Portfolio Showcase</span>
</h1>
<Container className="iot-container mt-5 pt-3" style={{ maxWidth: "63%", lineHeight: "1.5em" }}>
  <h1 className="iot-h2" style={{ fontFamily: "Avenir LT Pro 35 Light, sans-serif", fontSize: "85%", textAlign: "left",lineHeight: "1.5em" }}>
  At RFLABS, our portfolio includes numerous IOT projects we have completed for clients 
  across Mining, Healtchcare and logistics sector. We are committed to providing 
  high-quality work that meets our clients' needs. If you'd like to benefit from our 
  professional design services, head to our Contact page to get in touch with us. We're 
  passionate about helping businesses stand out with eye-catching designs that make an 
  impact.  </h1>
 </Container>

            
      <style>
        {`
          
      /* CSS for screen width 280px to 540px */
      @media only screen and (min-width: 280px) and (max-width: 766px) {
        
      .iot-h1{
        font-size: 24px !important;
        padding-top: 5% !important;
        line-height: 1.8em !important;

      }
      .iot-container{
        margin-top: -5% !important;
        max-width: 100% !important;

      }
      .iot-h2{
        font-size: 17px !important;
        letter-spacing: 0px !important;
        color: black !important;

        

      }
        
           }
      @media only screen and (min-width: 767px) and (max-width: 912px) {
        .iot-h1{
          font-size: 48px !important;
          padding-top: 5% !important;
          line-height: 1.8em !important;
  
        }
        .iot-container{
          max-width: 100% !important;
  
        }
        .iot-h2{
          font-size: 36px !important;
          letter-spacing: 0.5px !important;
          line-height: 1.6em !important;

          color: black !important;
  
          
  
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