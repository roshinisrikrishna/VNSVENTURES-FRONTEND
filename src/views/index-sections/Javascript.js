import React from "react";
// react plugins that creates an input with a date picker
import Datetime from "react-datetime";
// reactstrap components
import {
  Button,
  FormGroup,
  Container,
  Modal,
  ModalBody,
  Row,
  Col,
  Card,
  UncontrolledTooltip,
  PopoverBody,
  PopoverHeader,
  UncontrolledPopover,
} from "reactstrap";
import {motion} from "framer-motion";

import js1Img from "../../assets/img/JS1.webp";
import js2Img from "../../assets/img/JS2.jpg";
import js3Img from "../../assets/img/JS3.jpg";

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

function Javascript() {
  const [modal1, setModal1] = React.useState(false);
  const [modal2, setModal2] = React.useState(false);
  return (
    <>
     
     <div className="mt-5" style={{ backgroundColor: "#242f40", color: "#FFFFFF",  paddingTop: "10px", paddingBottom: "1px" }}>
     <div
  style={{
    display: "flex",
    flexDirection: "column", // Display items in a column
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "30px",
    marginTop: "130px",
    marginBottom: "130px",
    maxWidth: "1280px", // Adjust this value to match the screen width
  }}
>
<motion.h2 
style={{ fontSize: "48px", textAlign: "center", fontWeight: 600, fontFamily: "Museo Sans Rounded, sans-serif" }}
variants={fadeInAnimationVariants}
initial="initial"
whileInView="animate"
viewport={{once: true,}}
custom={1}>
  See how great organizations<br />are transforming their workforces with AI.
</motion.h2>


 

<div style={{ width: "1200px", display: "flex", flexDirection: "row", marginTop: "40px", justifyContent: "center", alignItems: "center" }}>
<motion.Card style={{ 
  borderBottom: "1px solid transparent", 
  borderRight: "1px solid transparent", 
  borderLeft: "1px solid transparent", 
  backgroundColor: "#242f40", 
  color: "#FFFFFF", 
  height: "450px", 
  maxWidth: "380px", 
  flex: 1, 
  display: "flex", 
  flexDirection: "column", 
  alignItems: "flex-start", 
  margin: "0 10px", 
  borderRadius: "10px", 
  boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)", // Adding a subtle shadow
  borderImage: "linear-gradient(to right, #a90bde, #002aeb) 1", // Gradient border
}}
variants={fadeInAnimationVariants}
initial="initial"
whileInView="animate"
viewport={{once: true,}}
custom={2}>
    <img src={js1Img} alt="Logo" 
  style={{ width: "450px", height: "200px" }} 
  />
    <h4 style={{ fontWeight: 700, maxWidth: "320px", 
    fontFamily: "Museo Sans Rounded, sans-serif", fontSize: "20px",
    paddingLeft: "20px", paddingRight: "20px" }}>
      Talent acquisition & talent management improvements at Vodafone
    </h4>
    

    <p style={{  paddingLeft: "20px",fontWeight: 400, fontSize: "16px", maxWidth: "330px", paddingRight: "20px" }}>
      Vodafone has created a system that makes learning personal and purposeful. 
    </p>
    <p style={{  paddingLeft: "20px",fontSize: "16px", fontWeight: 500, paddingRight: "20px" }}>Read customer story</p>
</motion.Card>


<motion.Card style={{ 
  borderBottom: "1px solid transparent", 
  borderRight: "1px solid transparent", 
  borderLeft: "1px solid transparent", 
  backgroundColor: "#242f40", 
  color: "#FFFFFF", 
  height: "450px", 
  maxWidth: "380px", 
  flex: 1, 
  display: "flex", 
  flexDirection: "column", 
  alignItems: "flex-start", 
  margin: "0 10px", 
  borderRadius: "10px", 
  boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)", // Adding a subtle shadow
  borderImage: "linear-gradient(to right, #a90bde, #002aeb) 1", // Gradient border
}}
variants={fadeInAnimationVariants}
initial="initial"
whileInView="animate"
viewport={{once: true,}}
custom={3}>
    <img src={js2Img} alt="Logo" 
  style={{ width: "450px", height: "200px" }} 
  />
    <h4 style={{ fontWeight: 700, maxWidth: "320px", 
    fontFamily: "Museo Sans Rounded, sans-serif", fontSize: "20px", 
    paddingLeft: "20px", paddingRight: "20px" }}>
      A new way to find talent at Chevron
    </h4>
    

    <p style={{  paddingLeft: "20px",fontWeight: 400, fontSize: "16px", maxWidth: "330px", paddingRight: "20px" }}>
    How Chevron drilled into its HR data to tap into new talent.
    </p>
    <p style={{  paddingLeft: "20px",fontSize: "16px", fontWeight: 500, paddingRight: "20px" }}>Read customer story</p>
</motion.Card>

<motion.Card style={{ 
  borderBottom: "1px solid transparent", 
  borderRight: "1px solid transparent", 
  borderLeft: "1px solid transparent", 
  backgroundColor: "#242f40", 
  color: "#FFFFFF", 
  height: "450px", 
  maxWidth: "380px", 
  flex: 1, 
  display: "flex", 
  flexDirection: "column", 
  alignItems: "flex-start", 
  margin: "0 10px", 
  borderRadius: "10px", 
  boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)", // Adding a subtle shadow
  borderImage: "linear-gradient(to right, #a90bde, #002aeb) 1", // Gradient border
}}
variants={fadeInAnimationVariants}
initial="initial"
whileInView="animate"
viewport={{once: true,}}
custom={4}>
    <img src={js3Img} alt="Logo" 
  style={{ width: "450px", height: "200px" }} 
  />
    <h4 style={{  paddingLeft: "20px",fontWeight: 700, maxWidth: "320px", 
    fontFamily: "Museo Sans Rounded, sans-serif", fontSize: "20px", 
    paddingRight: "20px" }}>
      Transforming talent at scale at Bayer
    </h4>
    

    <p style={{  paddingLeft: "20px",fontWeight: 400, fontSize: "16px", maxWidth: "330px", paddingRight: "20px" }}>
      How Eightfold helped Bayerto deliver its technology ambitions from a talent perspective
      at scale.
          </p>
    <p style={{  paddingLeft: "20px",fontSize: "16px", fontWeight: 500, paddingRight: "20px" }}>View customer story</p>
</motion.Card>
</div>

<p style={{ fontSize: "17px", fontWeight: 500,  
     paddingTop: "80px" }}>See more customer stories</p>

</div>

      </div>
    </>
  );
}

export default Javascript;
