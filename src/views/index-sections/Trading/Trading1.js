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
    <Container className="trade-main mt-5 pt-5" style={{ paddingBottom:"30%",maxWidth:"100%",backgroundColor:"#E5C7B5",justifyContent: "center", alignItems: "center", textAlign: "center" }}>
      <h1 className="trade-h1" style={{ fontFamily: "Futura LT W01 Medium, sans-serif", fontSize: "210%", fontWeight: 600 }}>Portfolio
<br/>
<span style={{fontWeight:500}}>VNS Ventures</span>
</h1>
<Container className="trade-container mt-5 pt-3" style={{ maxWidth: "66%", lineHeight: "1.5em" }}>
  <h1 className="trade-h2" style={{ fontFamily: "Avenir LT Pro 35 Light, sans-serif", fontSize: "85%", textAlign: "left",lineHeight: "1.5em" }}>
  From the C-suite to the front line, we partner with clients to help them innovate more 
  sustainably, achieve lasting gains in performance, and build workforces that will thrive 
  for this generation and the next. </h1>
 </Container>

            
      <style>
        {`
          
      /* CSS for screen width 280px to 540px */
      @media only screen and (min-width: 280px) and (max-width: 766px) {
      
        .trade-main{
          padding-bottom: -10% !important;
        }
        .trade-h1{
          font-size: 26px !important;
          line-height: 2em !important;

        }
        .trade-container{
          margin-top: -5% !important;
          max-width: 100% !important;
  
        }
        .trade-h2{
          font-size: 16.7px !important;
        letter-spacing: 0.1px !important;
        color: black !important;
        margin-bottom: -15% !important;


        }
      
        
           }
      @media only screen and (min-width: 767px) and (max-width: 912px) {
        .trade-h1{
          font-size: 48px !important;
          padding-top: 5% !important;
          line-height: 1.8em !important;
  
        }
        .trade-container{
          max-width: 100% !important;
  
        }
        .trade-h2{
          font-size: 37px !important;
          letter-spacing: 0.4px !important;
          line-height: 1.6em !important;
          margin-bottom: -15% !important;

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