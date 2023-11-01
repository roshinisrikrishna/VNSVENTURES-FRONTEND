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
    <div className="career-main">
    <Row style={{ letterSpacing: "1px"}}>
      
    <Col lg={3} className="career-col" style={{ backgroundColor: "#CCC6C6",padding:"3%", justifyContent: "center", textAlign: "center", lineHeight: "1.2em"}}>
    <h1 className="career-h1" style={{ fontFamily: "Futura LT W01 Medium, sans-serif",fontSize: "180%", fontWeight: 800, margin: "20px 0", padding: "0" }}>1.</h1>
    <h1 className="career-h1" style={{ fontFamily: "Futura LT W01 Medium, sans-serif",fontSize: "180%", fontWeight: 500, margin: "0", padding: "0" }}>RFLABS</h1>
    <p className="career-p" style={{ fontFamily: "Futura LT W01 Medium, sans-serif",fontSize: "80%", fontWeight: 600, margin: "50px 0 0 0", lineHeight: "1", letterSpacing: "-0.2px" }}>
  CEO, rflabs.in
</p>
<p className="career-p2" style={{fontFamily: "Avenir LT Pro 35 Light, sans-serif",color:"#4a4949", fontSize: "80%", fontWeight: "lighter", margin: "10px 0", lineHeight: "1", letterSpacing: "0px" }}>
  We develop innovative IOT solutions which save time and money for any organization
</p>

<p className="career-p2" style={{
  fontSize: "80%",
  fontWeight: 500,
  margin: "20px 0",
  borderBottom: "2px solid black",
  display: "inline-block",
  borderSpacing: "50px 0", // Adjust the spacing as needed
  borderCollapse: "separate",
  textDecoration:"underline",
  fontFamily: "Avenir LT Pro 35 Light, sans-serif"
}}>
  Read More
</p>
        </Col>
        <Col lg={3} className="career-col" style={{backgroundColor:"#F0EDED",padding:"3%",justifyContent: "center", textAlign: "center", lineHeight: "1.2em"}}>
         <h1 className="career-h1" style={{fontFamily: "Futura LT W01 Medium, sans-serif",fontSize: "180%", fontWeight: 800, margin: "20px 0", padding: "0" }}>2.</h1>
          <h1 className="career-h1" style={{fontFamily: "Futura LT W01 Medium, sans-serif",fontSize: "180%", fontWeight: 500, margin: "0", padding: "0" }}>Skilled Cohort</h1>
          <p className="career-p" style={{fontFamily: "Futura LT W01 Medium, sans-serif",fontSize: "80%", fontWeight: 600, margin: "50px 0 0 0", lineHeight: "1", letterSpacing: "-0.2px" }}>CTO, skilledcohort.com</p>
          <p className="career-p2" style={{  fontFamily: "Avenir LT Pro 35 Light, sans-serif",fontSize: "80%", fontWeight: 400, margin: "10px 0", lineHeight: "1", letterSpacing: "-0.2px" }}> We make salesforce work for you.We are offcial salesforce partners and specialize in revops and security</p>
<p className="career-p2" style={{
   fontSize: "80%",
   fontWeight: 500,
   margin: "20px 0",
   borderBottom: "2px solid black",
   display: "inline-block",
   borderSpacing: "50px 0", // Adjust the spacing as needed
   borderCollapse: "separate",
   textDecoration:"underline",
   fontFamily: "Avenir LT Pro 35 Light, sans-serif"

}}>
  Read More
</p>

        </Col>
        <Col lg={3} className="career-col" style={{backgroundColor:"#FADCD6",padding:"3%",justifyContent: "center", textAlign: "center", lineHeight: "1.2em"}}>
         <h1 className="career-h1" style={{fontFamily: "Futura LT W01 Medium, sans-serif",fontSize: "180%", fontWeight: 800, margin: "20px 0", padding: "0" }}>3.</h1>
          <h1 className="career-h1" style={{fontFamily: "Futura LT W01 Medium, sans-serif",fontSize: "180%", fontWeight: 500, margin: "0", padding: "0" }}>VNS Ventures</h1>
          <p className="career-p" style={{fontFamily: "Futura LT W01 Medium, sans-serif",fontSize: "80%", fontWeight: 600, margin: "50px 0 0 0", lineHeight: "1", letterSpacing: "-0.2px" }}>CEO, vnsventures.com</p>
          <p className="career-p2" style={{  fontFamily: "Avenir LT Pro 35 Light, sans-serif",fontSize: "80%", fontWeight: 400, margin: "10px 0", lineHeight: "1", letterSpacing: "-0.2px" }}> Dreams to Reality</p>
<p className="career-p2" style={{
  fontSize: "80%",
  fontWeight: 500,
  margin: "20px 0",
  textDecoration:"underline",
  fontFamily: "Avenir LT Pro 35 Light, sans-serif"

}}>
  Read More
</p>

        </Col>
        <Col lg={3} className="career-col" style={{backgroundColor:"#E5C7B5",padding:"3%",justifyContent: "center", textAlign: "center", lineHeight: "1.2em"}}>
         <h1 className="career-h1" style={{fontFamily: "Futura LT W01 Medium, sans-serif",fontSize: "180%", fontWeight: 800, margin: "20px 0", padding: "0" }}>4.</h1>
          <h1 className="career-h1" style={{fontFamily: "Futura LT W01 Medium, sans-serif",fontSize: "180%", fontWeight: 500, margin: "0", padding: "0" }}>Jay & Dhiv Charity</h1>
          <p className="career-p" style={{fontFamily: "Futura LT W01 Medium, sans-serif",fontSize: "80%", fontWeight: 600, margin: "20px 0 0 0", lineHeight: "1", letterSpacing: "-0.2px" }}>Cochair,board member</p>
          <p className="career-p2" style={{fontFamily: "Avenir LT Pro 35 Light, sans-serif",fontSize: "80%", fontWeight: 400, margin: "10px 0", lineHeight: "1", letterSpacing: "-0.2px" }}> Enhance people lives</p>
          <p className="career-p2" style={{
  fontSize: "80%",
  fontWeight: 500,
  margin: "20px 0",
  textDecoration:"underline",
  fontFamily: "Avenir LT Pro 35 Light, sans-serif"
}}>
  Read More
</p>



        </Col>
        </Row>

       
    
      <style>
        {`
          
      /* CSS for screen width 280px to 540px */
      @media only screen and (min-width: 280px) and (max-width: 766px) {
        .career-main{
          max-width: 96% !important;
        }
        .career-h1{
          font-size: 25px !important;
        }
        .career-p{
          margin-top: 4% !important;
          font-size: 18px !important;
          font-weight: 600 !important;
        }
        .career-p2{
          font-size: 17px !important;
          font-weight: 500 !important;
          max-width: 80% !important;
          
        }
        .career-col{
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
      
           }
      @media only screen and (min-width: 767px) and (max-width: 912px) {
        .career-main{
          max-width: 98% !important;
        }
        .career-h1{
          font-size: 48px !important;
        }
        .career-p{
          // margin-top: 4% !important;
          font-size: 41px !important;
          font-weight: 500 !important;
        }
        .career-p2{
          font-size: 36px !important;
          font-weight: 500 !important;
          max-width: 80% !important;
          
        }
        .career-col{
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
      
           }
      @media only screen and (min-width: 1024px) {
        
              
            }
      
        `}
      </style>
    </div>
  );
}

export default Typography;