import React from "react";
import { Button, Container, Row, Col } from "reactstrap";
import intImg from "../../assets/img/interface.webp";
import {motion} from "framer-motion";

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
      duration: 1, // Duration set to 1000ms (1 second)
      ease: "easeInOut", // Use a valid easing function here
    },
  }),
};

function NucleoIcons() {
  return (
    <>
      <div style={{ background: "linear-gradient(to right, #328afa, #a903fc)", color: "#FFFFFF", paddingTop: "100px", position: "relative" }}>
        <img
          alt="..."
          className="n-logo"
          src={require("assets/img/dotted_waves.png")}
          style={{ width: "600px", height: "auto", position: "absolute", top: "0", left: "0" }}
        />
        <Container style={{ paddingBottom: "50px" }}>
          
          <Row>
            <Col md="5" className="ml-auto mt-5">
              <Container className="mt-2" style={{width:"500px" ,marginLeft:"-40px", marginRight: "-10px"}}>
                <Row>
                  <Col>
   
       
                    <motion.h2 style={{ fontWeight: 600, 
                      fontFamily: "Museo Sans Rounded, sans-serif", fontSize: "46px" }}
                      variants={fadeInAnimationVariants}
                      initial="initial"
                      whileInView="animate"
                      viewport={{once: true,}}
                      custom={2}>
                        Ready for greatness? Transform your talent process with AI.
                        </motion.h2>
                    
                    <motion.button
  className="hover-white-button"
   style={{
    borderRadius: "60px",
    backgroundColor: "#fff",
    color: "#026df5",
    border: "none",
    cursor: "pointer",
    marginTop: "10px",
    fontWeight: "bolder",
    fontSize: "17px",
    width: "230px",
    padding: "12px",
    fontFamily: "Museo Sans Rounded, sans-serif"
  }}
  variants={fadeInAnimationVariants}
  initial="initial"
  whileInView="animate"
  viewport={{once: true,}}
  custom={3}
>
  Request demo
</motion.button>
                

                    </Col>
                </Row>
              </Container>
            </Col>
            <Col md="7" >
              <motion.img
                src={intImg}
                alt="Eightfold.ai Logo"
                className="navbar-logo"
                style={{ width: "1080px", height: "auto" }} 
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                viewport={{once: true,}}
                custom={1}
              />
            </Col>
          </Row>
        </Container>
        <img
      alt="..."
      className="n-logo"
      src={require("assets/img/dotted_waves_reversed-modified.png")}
      style={{ width: "600px", height: "auto", position: "absolute", bottom: 0, right: "5px" }}
    />
      </div>
    </>
  );
}

export default NucleoIcons;
