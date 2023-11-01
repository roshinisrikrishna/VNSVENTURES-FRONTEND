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
    <Container className="sales-main mt-5 pt-5" style={{ paddingBottom:"20%",maxWidth:"100%",backgroundColor:"#F0EDED",justifyContent: "center", alignItems: "center", textAlign: "center" }}>
      <h1 className="sales-h1" style={{ fontFamily: "Futura LT W01 Medium, sans-serif", fontSize: "200%", fontWeight: 600 }}>Portfolio
<br/>
<span style={{fontWeight:500}}>Salesforce</span>
</h1>
<Container className="sales-container mt-5 pt-3" style={{ maxWidth: "66%", lineHeight: "1.5em" }}>
  <h1 className="sales-h2" style={{ fontFamily: "Avenir LT Pro 35 Light, sans-serif", fontSize: "85%", textAlign: "left",lineHeight: "1.5em" }}>
  At  SkilledCohort, we bring the power of Salesforce to life in transformative ways tailored to 
  specific customers and industries. We are known for our expertise in robust integration 
  projects and improving the ROI of your Salesforce implementation. Our team of certified
   Admins, developers, and architects act as strategic advisors to provide a roadmap and 
   architect end-user-focused Salesforce solutions. We begin with an audit, identify gaps, 
   and build customized solutions and training for your organization.  </h1>
 </Container>

            
      <style>
        {`
          
      /* CSS for screen width 280px to 540px */
      @media only screen and (min-width: 280px) and (max-width: 766px) {
        .sales-h1{
          font-size: 26px !important;
          line-height: 2em !important;

        }
        .sales-container{
          margin-top: -5% !important;
          max-width: 100% !important;
  
        }
        .sales-h2{
          font-size: 17px !important;
        letter-spacing: 0.4px !important;
        color: black !important;

        }
      
        
           }
      @media only screen and (min-width: 767px) and (max-width: 912px) {

        .sales-h1{
          font-size: 48px !important;
          padding-top: 5% !important;
          line-height: 1.8em !important;
  
        }
        .sales-container{
          max-width: 100% !important;
  
        }
        .sales-h2{
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