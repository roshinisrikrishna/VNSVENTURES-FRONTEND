import React from "react";
import { Container, Row, Col, Card } from "reactstrap";
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';


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
  const navigate = useNavigate();

  return (
    <div className="main-approach" style={{ }}>
    <Row style={{ letterSpacing: "1px"}}>
      
    <Col lg={6} style={{ backgroundColor: "#fcfcfc",padding:"6%", justifyContent: "center", textAlign: "center", lineHeight: "1.2em"}}>
    <h1 className="approach-h1" style={{fontFamily: "Futura LT W01 Medium, sans-serif", fontSize: "180%", fontWeight: 500, margin: "0", padding: "0"}}>Our Approach</h1>
  
<p className="approach-p" style={{ fontSize: "80%", fontWeight: 100, margin: "30px 0", lineHeight: "1.5em", letterSpacing: "0px",fontFamily: "Avenir LT Pro 35 Light, sans-serif" }}>
At VNS , we believe in a collaborative approach to our work. We work closely with our clients to understand 
their unique needs and vision, and then use our expertise to create a product that exceeds their expectations.</p>
<p className="approach-pr" style={{
  fontSize: "80%",
  fontWeight: 500,
  margin: "20px 0",
  textDecoration:"underline",
  textUnderlineOffset: "8px", // Increase the distance between the text and the underline
  cursor:"pointer",
  fontFamily: "Avenir LT Pro 35 Light, sans-serif",
  ':hover': {
    cursor: 'pointer'
  }
}} onClick={() => navigate('/my-approach')}>
  Read More
</p>
        </Col>
       
        <Col lg={3} style={{ backgroundColor: "#FFF", padding: "0", justifyContent: "center", textAlign: "center", lineHeight: "1.2em" }}>
  <img className="approach-img"
    alt="..."
    src={require("assets/img/ezgif.com-resize (3).webp")}
    style={{ width: "100%", height: "100%" }} 
  ></img>
</Col>

        <Col className="approach-col" lg={3} style={{backgroundColor:"#CCC6C6",padding:"5.5% 3% 0% 3%",justifyContent: "center", textAlign: "center", lineHeight: "1.2em"}}>
        <h1 className="approach-h2" style={{fontFamily: "Futura LT W01 Medium, sans-serif", fontSize: "180%", fontWeight: 500, margin: "0", padding: "0"}}>About Me</h1>
  
  <p className="approach-p2" style={{ fontSize: "76.9%", fontWeight: 500, margin: "30px 0", lineHeight: "1.5em", letterSpacing: "0px",fontFamily: "Avenir LT Pro 35 Light, sans-serif" }}>
  Vikram N Subramaniam is a successful professional with a Master's degree in Engineering 
  from Dalhousie University...<br/>   </p>
  <p className="approach-pr" style={{
        fontSize: "80%",
        fontWeight: 500,
        textDecoration:"underline",
        textUnderlineOffset: "8px", // Increase the distance between the text and the underline
        cursor:"pointer",
        fontFamily: "Avenir LT Pro 35 Light, sans-serif",
        ':hover': {
          cursor: 'pointer'
        }

      }} onClick={() => navigate('/about-me')}>
        Read More
      </p>
       



        </Col>
        </Row>

       
    
      <style>
        {`
          
      /* CSS for screen width 280px to 540px */
      @media only screen and (min-width: 280px) and (max-width: 766px) {
        .main-approach{
          max-width: 96% !important;
        }
          .approach-h1{
            font-size: 23px !important;
          }
          .approach-p{
            font-size: 18px !important;
            
          }
          .approach-pr{
            font-size: 18px !important;
          }
          .approach-img{
            width: 100% !important;
            
          }
          .approach-h2{
            padding-top: 5% !important;
            font-size: 26px !important;
          }
          .approach-p2{
            font-size: 18px !important;
            max-width: 90% !important;
            text-align: center !important;
          }
          .approach-col{
            display: flex;
          flex-direction: column;
            align-items: center !important;
            text-align: center !important;

            justify-content: center !important;
          }
                 
           }
      @media only screen and (min-width: 767px) and (max-width: 912px) {
        .main-approach{
          max-width: 98% !important;
        }
        .approach-h1{
          font-size: 46px !important;
        }
        .approach-p{
          font-size: 36px !important;
          
        }
        .approach-pr{
          padding-top: 5% !important;
          font-size: 36px !important;
        }
        .approach-img{
          width: 100% !important;
          text-align: center;
          
        }
        .approach-h2{
          padding-top: 5% !important;
          font-size: 48px !important;
        }
        .approach-p2{
          font-size: 36px !important;
          max-width: 90% !important;
          text-align: center !important;
        }
        .approach-col{
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        
         
            }
      @media only screen and (min-width: 1024px) {
        .approach-img{
          width: 100% !important;
          height: auto !important;
          
        }
              
            }
      
        `}
      </style>
    </div>
  );
}

export default Typography;