import React from "react";
import { Container, Row, Col, Card } from "reactstrap";
import { motion } from "framer-motion";
import Avatar from '@mui/material/Avatar'; // Import the Avatar component
import { deepOrange, deepPurple } from '@mui/material/colors'; // Import MUI colors
import FileUploadTable from "./FileUpload";


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

    <Container className="read-main mt-5 pt-5" style={{ maxWidth: "100%",paddingBottom:"30%",maxWidth:"100%",backgroundColor:"#FFF",justifyContent: "center", alignItems: "center", textAlign: "center" }}>
      <h1 className="read-h1" style={{ fontFamily: "Futura LT W01 Medium, sans-serif", fontSize: "180%", fontWeight: 600 }}>Reading Materials
</h1>
<Container className="read-container mt-5 pt-3" style={{ maxWidth: "60%", lineHeight: "1.5em" }}>
  <h1 className="read-h2" style={{ fontFamily: "Avenir LT Pro 35 Light, sans-serif", fontSize: "80%", textAlign: "left",lineHeight: "1.5em" }}>
  Use this area to upload files you wish to share with your users. You can manage who has 
  access to your files and what they can do, such as view & download, upload items and more. </h1>

 </Container>
 {/* <Auth0ProviderWithNavigate> */}
 <FileUploadTable />


{/* </Auth0ProviderWithNavigate> */}
         
      <style>
        {`
          
      /* CSS for screen width 280px to 540px */
      @media only screen and (min-width: 280px) and (max-width: 766px) {
        .read-main{
          padding-bottom: -10% !important;
        }
        .read-h1{
          font-size: 26px !important;
          line-height: 2em !important;

        }
        .read-container{
          margin-top: -5% !important;
          max-width: 100% !important;
  
        }
        .read-h2{
          font-size: 16.7px !important;
        letter-spacing: 0.1px !important;
        color: black !important;


        }
      
       
        
           }
      @media only screen and (min-width: 767px) and (max-width: 912px) {

        .read-h1{
          font-size: 48px !important;
          padding-top: 5% !important;
          line-height: 1.8em !important;
  
        }
        .read-container{
          max-width: 100% !important;
  
        }
        .read-h2{
          font-size: 37px !important;
          letter-spacing: 0.4px !important;
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