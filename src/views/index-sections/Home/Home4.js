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
    <Container className="mt-5 pt-5 pb-5 goal-main" style={{ justifyContent: "center", alignItems: "center", textAlign: "center" }}>
      <h1 className="goal-h1" style={{ fontFamily: "Futura LT W01 Medium, sans-serif", fontSize: "210%", fontWeight: 600 }}>Getting Started</h1>
      <Container className="goal-h2-container"  style={{ maxWidth: "50%" }}>
        <h1 className="goal-h2" style={{ fontFamily: "Avenir LT Pro 35 Light, sans-serif", fontSize: "80%", justifyContent: "center", alignItems: "center", textAlign: "center" }}>
          Ready to take your business to the next level? Contact us today to schedule a consultation and learn more about how we can help you achieve your goals.
        </h1>
      </Container>
      <Container className="goal-avatar-container" style={{justifyContent: "center", alignItems:"center", textAlign:"center"}}>
      <Row className="goal-row" style={{ letterSpacing: "1px", maxWidth: "100%",justifyContent: "center", alignItems:"center", textAlign:"center" }}>

      <Col className="goal-col" lg={2} sm={12} style={{  marginRight:"-2%",padding: "3%", justifyContent: "center", textAlign: "center", lineHeight: "1.2em" }}>
          <Avatar className="goal-avatar" sx={{ bgcolor: "#CCC6C6",fontFamily: "Futura LT W01 Medium, sans-serif", fontSize: "180%",color:"black",padding:"25% 25% 25% 32%" }}>1.</Avatar> {/* Use the MUI Avatar component */}
         <p className="goal-p" style={{ textAlign:"left", fontFamily: "Avenir LT Pro 35 Light, sans-serif", fontSize: "70%", fontWeight: 400, margin: "10px 0", lineHeight: "1", letterSpacing: "-0.2px" }}> Why Choose US</p>
         
        </Col>
        
        <Col className="goal-col" lg={2} sm={12} style={{  marginRight:"-2%",padding: "3%", justifyContent: "center", textAlign: "center", lineHeight: "1.2em" }}>
          <Avatar className="goal-avatar" sx={{ bgcolor: "#FADCD6",fontFamily: "Futura LT W01 Medium, sans-serif", fontSize: "180%",color:"black",padding:"25% 25% 25% 32%" }}>2.</Avatar> {/* Use the MUI Avatar component */}
          <p className="goal-p" style={{ textAlign:"left", fontFamily: "Avenir LT Pro 35 Light, sans-serif", fontSize: "70%", fontWeight: 400, margin: "10px 0", lineHeight: "1", letterSpacing: "-0.2px" }}> Our Process</p>
          
        </Col>
        <Col className="goal-col" lg={2} sm={12} style={{marginTop:"2%",marginRight:"-2%", padding: "3%", justifyContent: "center", textAlign: "center", lineHeight: "1.2em" }}>
          <Avatar className="goal-avatar" sx={{ bgcolor: "#E5C7B5",fontFamily: "Futura LT W01 Medium, sans-serif", fontSize: "180%",color:"black",padding:"25% 25% 25% 32%" }}>3.</Avatar> {/* Use the MUI Avatar component */}
          <p className="goal-p" style={{ textAlign:"left", fontFamily: "Avenir LT Pro 35 Light, sans-serif", fontSize: "70%", fontWeight: 400, margin: "10px 0", lineHeight: "1", letterSpacing: "-0.2px" }}> Frequently Asked Questions</p>
          
        </Col>
        <Col className="goal-col" lg={2} sm={12} style={{  marginRight:"-2%",padding: "3%", justifyContent: "center", textAlign: "center", lineHeight: "1.2em" }}>
          <Avatar className="goal-avatar" sx={{ bgcolor: "#9fbac2",fontFamily: "Futura LT W01 Medium, sans-serif", fontSize: "180%",color:"black",padding:"25% 25% 25% 32%" }}>4.</Avatar> {/* Use the MUI Avatar component */}
         
          <p className="goal-p" style={{ textAlign:"left", fontFamily: "Avenir LT Pro 35 Light, sans-serif", fontSize: "70%", fontWeight: 400, margin: "10px 0", lineHeight: "1", letterSpacing: "-0.2px" }}> Testimonials</p>
         
        </Col>
        <Col className="goal-col" lg={2} sm={12} style={{  padding: "3%", justifyContent: "center", textAlign: "center", lineHeight: "1.2em" }}>
          <Avatar className="goal-avatar" sx={{ bgcolor: "#e9f4f7",fontFamily: "Futura LT W01 Medium, sans-serif", fontSize: "180%",color:"black",padding:"25% 25% 25% 32%" }}>5.</Avatar> {/* Use the MUI Avatar component */}
         
          <p className="goal-p" style={{ textAlign:"left", fontFamily: "Avenir LT Pro 35 Light, sans-serif", fontSize: "70%", fontWeight: 400, margin: "10px 0", lineHeight: "1", letterSpacing: "-0.2px" }}> Contact Us</p>
         
        </Col>
      </Row>
      </Container>
      <p className="goal-pr" style={{
   fontSize: "80%",
   fontWeight: 500,
   margin: "20px 0",
   textDecoration:"underline",
   fontFamily: "Avenir LT Pro 35 Light, sans-serif"

}}>
  More Resources
</p>
      <style>
        {`
          
      /* CSS for screen width 280px to 540px */
      @media only screen and (min-width: 280px) and (max-width: 766px) {
        
        
        .goal-h1{
          font-size: 26px !important;
        }
        .goal-h2{
          font-size: 17px !important;
          letter-spacing: 1.5px !important;
           line-height: 1.2em !important;
          max-width: 100% !important;
        }
        .goal-h2-container{
          max-width: 100% !important;
          // background: red;
        }
        .goal-avatar{
          padding: 15% 15% !important;
          font-size: 26px !important;
        }
        .goal-col {
          display: flex;
          flex-direction: column;
          align-items: center;
          /* other styles... */
        }
        .goal-row {
          flex-direction: column;
          align-items: center;
          // align-items: center !important;
          justify-content: center !important;
          text-align: center !important;
          max-width: 100% !important;
        }
        .goal-avatar-container{
          align-items: center !important;
          justify-content: center !important;
          text-align: center !important;
          max-width: 100% !important;
        }
        .goal-p{
          text-align: center !important;
          font-size: 17px !important;


        }
       
           }
      @media only screen and (min-width: 767px) and (max-width: 912px) {

        
        .goal-h1{
          font-size: 50px !important;
        }
        .goal-h2{
          font-size: 34px !important;
          letter-spacing: 1.5px !important;
           line-height: 1.4em !important;
          max-width: 100% !important;
        }
        .goal-h2-container{
          max-width: 100% !important;
          // background: red;
        }
        .goal-avatar{
          padding: 13% 13% !important;
          font-size: 54px !important;
        }
        .goal-col {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .goal-row {
          flex-direction: column;
          align-items: center;
          // align-items: center !important;
          justify-content: center !important;
          text-align: center !important;
          max-width: 100% !important;
        }
        .goal-avatar-container{
          align-items: center !important;
          justify-content: center !important;
          text-align: center !important;
          max-width: 100% !important;
        }
        .goal-p{
          text-align: center !important;
          font-size: 36px !important;


        }
        .goal-pr{
          text-align: center !important;
          font-size: 36px !important;


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