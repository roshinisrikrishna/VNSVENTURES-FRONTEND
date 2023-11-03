import React from "react";
import { Container, Row, Col } from "reactstrap";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useRef } from "react";
import emailjs from 'emailjs-com';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Examples() {
  const form = useRef();

  const sendEmail = (e)=>{
    e.preventDefault();

    emailjs.sendForm('service_3n9zoyh', 'template_61ophpq', form.current, '0_YtEx01a1OusTTDW')
      .then((result) => {
        console.log(result.text);
        toast.success("Form submitted successfully");
      }, (error) => {
        console.log(error.text);
        toast.error("Failed to submit form");
      });

    e.target.reset();
  }
  return (
    <div id="contact" style={{  marginBottom:"1.3%",marginTop:"5%", maxWidth:"100%"}}>
      <ToastContainer></ToastContainer>
      <div className="space-50"></div>
      <Container className="mb-5">
        <Row>
          <Col lg="6"  className="address-column">
            <Row>
              <Col lg="6">
                <p className="p-address" style={{ fontSize: "14px", fontFamily: "Avenir LT Pro 35 Light, sans-serif", margin: "0" }}>2247, Trichy Road,</p>
                <p className="p-address" style={{ fontSize: "14px", fontFamily: "Avenir LT Pro 35 Light, sans-serif", margin: "0" }}>Coimbatore - 641005</p>
                <p className="p-address" style={{ fontSize: "14px", fontFamily: "Avenir LT Pro 35 Light, sans-serif" }}>vikram@rflabs.in</p>
                <p className="p-address" style={{ fontSize: "14px", fontFamily: "Avenir LT Pro 35 Light, sans-serif" }}>Tel: {"("}+91{")"} 7259533331</p>
              </Col>
              <Col lg="6">

<p className="p-address" style={{ fontSize: "14px", fontFamily: "Avenir LT Pro 35 Light, sans-serif", margin: "0" }}>Mon - Fri: 9am - 5pm</p>
<p className="p-address" style={{ fontSize: "14px", fontFamily: "Avenir LT Pro 35 Light, sans-serif", margin: "0" }}>Saturday: 9am - 1pm</p>
<p className="p-address" style={{ fontSize: "14px", fontFamily: "Avenir LT Pro 35 Light, sans-serif", margin: "0" }}>Sunday:   9am -  11 am</p>


              </Col>
            </Row>
          </Col>
          <Col lg="6" md="6">

  <form ref={form} onSubmit={sendEmail}>
    <Row>
      <Col lg="6" className="order-sm-1">
        <div className="form-group">
          <label htmlFor="firstName" style={{ fontFamily: "Futura LT W01 Medium, sans-serif", fontSize: "80%",}}>
            First Name
          </label>
          <TextField id="firstName" name="firstName" variant="standard" fullWidth />
        </div>
      </Col>
      <Col lg="6" className="order-sm-2">
        <div className="form-group">
          <label htmlFor="lastName" style={{ fontFamily: "Futura LT W01 Medium, sans-serif", fontSize: "80%",}}>
            Last Name
          </label>
          <TextField id="lastName" name="lastName" variant="standard" fullWidth />
        </div>
      </Col>
      <Col lg="6" className="order-sm-3">
        <div className="form-group">
          <label htmlFor="email" style={{ fontFamily: "Futura LT W01 Medium, sans-serif", fontSize: "80%",}}>
            Email
          </label>
          <TextField id="email" name="email" variant="standard" fullWidth />
        </div>
      </Col>
      <Col lg="6" className="order-sm-4">
        <div className="form-group">
          <label htmlFor="subject" style={{ fontFamily: "Futura LT W01 Medium, sans-serif", fontSize: "80%",}}>
            Subject
          </label>
          <TextField id="subject" name="subject" variant="standard" fullWidth />
        </div>
      </Col>
      <Col sm="12" className="order-sm-5">
        <div className="form-group">
          <label htmlFor="message" style={{ fontFamily: "Futura LT W01 Medium, sans-serif", fontSize: "80%",}}>
            Message
          </label>
          <TextField id="message" name="message" variant="standard" fullWidth />
        </div>
      </Col>
      <Col sm="12" className="order-sm-6">
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Button type="submit" variant="text" style={{ color: 'black' }}>
            Submit
          </Button>
        </div>
      </Col>
    </Row>
  </form>
</Col>

        </Row>
      </Container>
      <div className="space-50"></div>
      <Container className="mt-5 mb-md-2" style={{ background: '#E8EFF1', maxWidth: "100%", paddingTop: '20px', paddingBottom:"20px" }}>
  <div style={{ fontSize: "13px", letterSpacing: "1.5px", fontFamily: "Avenir LT Pro 35 Light, sans-serif", background: '#E8EFF1', color: '#6E6E6D', textAlign: 'center' }}>
    © 2023 by VNS Ventures. Powered and secured by RFLABS
  </div>
</Container>


      <style>
        {`
        /* CSS for screen width 280px to 540px */
        /* CSS for screen width 280px to 540px */
@media only screen and (min-width: 280px) and (max-width: 768px) {
  .mb-md-5 {
    margin-bottom: 0!important; /* adjust as necessary */
  }
  
}

        
        /* CSS for screen width 280px to 540px */
        @media only screen and (min-width: 280px) and (max-width: 766px) {
          
          .address-column{
            text-align: left !important;
            margin-bottom: 15% !important;
            
          }
          .p-address{
            font-size: 20px !important;
          }
          .form-group{
            font-size: 23px !important;

          }
          /* styles.css */
.order-sm-1 {
  order: 1;
}

.order-sm-2 {
  order: 2;
}

.order-sm-3 {
  order: 3;
}

.order-sm-4 {
  order: 4;
}

.order-sm-5 {
  order: 5;
}
.order-sm-6 {
  order: 6;
}
         
         
          
             }
        @media only screen and (min-width: 767px) and (max-width: 912px) {
  
          .address-column{
            text-align: left !important;
            margin-bottom: 15% !important;
            
          }
          .p-address{
            font-size: 36px !important;
          }
          .form-group{
            font-size: 48px !important;

          }
          /* styles.css */
.order-sm-1 {
  order: 1;
}

.order-sm-2 {
  order: 2;
}

.order-sm-3 {
  order: 3;
}

.order-sm-4 {
  order: 4;
}

.order-sm-5 {
  order: 5;
}
.order-sm-6 {
  order: 6;
}
         
         
           
              }
        @media only screen and (min-width: 1024px) {
          
       
              }
        `}
      </style>
    </div>
  );
}

export default Examples;
