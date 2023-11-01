 import React from "react";
import { Container } from "reactstrap";
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
const fadeImageVariants = {
  animate: {
    opacity: 1,
    visibility: "visible",
    transform: "translateY(0px)",
    transition: {
      delay: 0.5,
      duration: 1,
      ease: "ease"
    }
  },
  initial: {
    opacity: 0,
    visibility: "hidden",
    transform: "translateY(-20px)",
    transition: {
      delay: 0.1,
      duration: 2,
      ease: "ease"
    }
  },
};

function IndexHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div className="page-header clear-filter" filter-color="black">
        <div
          className="page-header-image"
          style={{
            background:
              "linear-gradient(to right , rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9) 50%, rgba(6, 18, 70, 0.88))",
          }}
          ref={pageHeader}
        >
          <motion.img
            alt="..."
            src={require("assets/img/dotted_waves.png")}
            style={{
              width: "500px",
              height: "auto",
              position: "absolute",
              top: 0,
              left: "10px",
            }}
             variants={fadeImageVariants}
          initial="initial"
          whileInView="animate"
          viewport={{once: true,}}
            
          />
        </div>

        <Container>
          
        <div className="content-center brand" style={{ marginTop: "140px", marginLeft: "-10px" }}>
  <motion.h1
    style={{
      fontWeight: "bolder",
      fontFamily: "Museo Sans Rounded, sans-serif",
    }}
    variants={fadeInAnimationVariants}
    initial="initial"
    whileInView="animate"
    viewport={{ once: true }}
    custom={4}
  >
    Everything talent,
  </motion.h1>
  <motion.h1
    style={{
      background: "-webkit-linear-gradient(45deg, #FFFFFF, #0fb3fa 85%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      fontFamily: "Museo Sans Rounded, sans-serif",
      fontWeight: "bolder",
      marginTop: "-30px", // Adjust this margin to reduce space
    }}
    variants={fadeInAnimationVariants}
    initial="initial"
    whileInView="animate"
    viewport={{ once: true }}
    custom={3}
  >
    powered by AI
  </motion.h1>

            <motion.p
              style={{
                fontSize: "22px",
                fontFamily: "Museo Sans Rounded, sans-serif",
              }}
              variants={fadeInAnimationVariants}
          initial="initial"
          whileInView="animate"
          viewport={{once: true,}}
          custom={2}
            >
              Our AI platform for all talent brings to light everything you need
              to hire and develop people to their highest potential
            </motion.p>
            <motion.button
              className="hover-white-button"
              style={{
                borderRadius: "60px",
                color: "#fff",
                border: "none",
                cursor: "pointer",
                marginTop: "10px",
                fontWeight: "bolder",
                fontSize: "17px",
                width: "230px",
                padding: "10px",
                fontFamily: "Museo Sans Rounded, sans-serif",
              }}
              variants={fadeInAnimationVariants}
          initial="initial"
          whileInView="animate"
          viewport={{once: true,}}
          custom={1}
            >
              Ready for greatness
            </motion.button>
          </div>
        </Container>
        <motion.img
          alt="..."
          className="n-logo"
          src={require("assets/img/dotted_waves_reversed.png")}
          style={{
            width: "600px",
            height: "auto",
            position: "absolute",
            bottom: 0,
            right: "5px",
          }}
          variants={fadeImageVariants}
          initial="initial"
          whileInView="animate"
          viewport={{once: true,}}
        />
      </div>
      <style>
        {`
          .hover-white-button {
            background-color: #1b9af5;
            color: #fff;
            transition: background-color 0.3s, color 0.3s;
          }
          .hover-white-button:hover {
            background-color: #28607E;
          }
        `}
      </style>
    </>
  );
}

export default IndexHeader;