import React from "react";
import { Container, Row, Col, Card } from "reactstrap";
import { motion } from "framer-motion";

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
    <>
      <Container className="what-main"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          // marginLeft: "30px",
          // marginTop: "130px",
          // marginBottom: "130px",
          background: "linear-gradient(to top, #E8EFF1 0%, #E8EFF1 70%, white 30%, white 100%)", // Apply the linear-gradient background
          paddingTop: "5vw",
          maxWidth: "100vw",
          margin: "0 auto", // Center the content horizontally
        }}
      >
        <h1 className="what-h1"
          style={{ textAlign: "center", fontSize: "620%", fontWeight: 600,
        fontFamily: "Futura LT W01 Medium, sans-serif", fontStyle: "normal" }}
          
        >
          Vikram N
        </h1>
        <h1 className="what-h1"
          style={{ textAlign: "center", fontSize: "620%", fontWeight: 600,
        fontFamily: "Futura LT W01 Medium, sans-serif" }}
          
        >
          Subramaniam
        </h1>
        <h4 className="what-h2" style={{ textAlign: "center", fontSize: "200%", fontWeight: 500,
        fontFamily: "Futura LT W01 Medium, sans-serif" }}>Chairman, VNS Group of Companies</h4>
        

       
      </Container>
      <style>
        {`
          
      /* CSS for screen width 280px to 540px */
      @media only screen and (min-width: 280px) and (max-width: 766px) {
        
           .what-main{
            max-width: 100% !important;
            margin-top: 35% !important;
            padding-bottom: 15% !important;
            padding-top: 15% !important;


           }
           .what-h1{
            // padding-top: 5% !important;
            font-size: 46px !important;
            margin-top: -5% !important;
           }
           .what-h2{
            // padding-top: 5% !important;
            font-size: 24px !important;
            margin-top: -5% !important;
           }
       
        
           }
      @media only screen and (min-width: 767px) and (max-width: 912px) {

        .what-main{
          max-width: 100% !important;
          margin-top: 15% !important;
          padding-bottom: 15% !important;
          padding-top: 15% !important;
         }
        
         
            }
      @media only screen and (min-width: 1024px) {
        
           
         
            }
      
        `}
      </style>
    </>
  );
}

export default Typography;