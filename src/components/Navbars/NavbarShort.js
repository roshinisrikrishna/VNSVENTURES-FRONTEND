// Import React and various components and libraries
import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Dropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Row,
  Col,
  Container,
} from "reactstrap";

// Import FontAwesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import SignUp from "views/index-sections/SignUp";
import { Avatar } from '@material-ui/core';
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { HashLink } from 'react-router-hash-link';


function NavbarShort() {
  // Define various state variables
  const [collapseOpen, setCollapseOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [closeTimeout, setCloseTimeout] = useState(null);
  const [click, setClick] = useState(false); // Add a click state
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const whiteTextColorClass = screenWidth < 1000 ? 'slate-text' : '';
  const [modal, setModal] = useState(false);


  // Function to handle click event
  const handleClick = () => {
    setClick(!click); // Toggle the click state
  };

  // Define state for dropdown menus
  const [dropdowns, setDropdowns] = useState([
    { id: "solutions", isOpen: false },
  ]);

  const [open, setOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [userProfilePicture, setUserProfilePicture] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  // Function to open the modal
  const openModal = () => {
    setModalOpen(true);
  };
  
  // Function to close the modal
  const closeModal = () => {
    setModalOpen(false);
  };

  const handleUserLoggedIn = (email) => {
    setIsLoggedIn(true);
    setUserEmail(email);
    const profilePicture = getProfilePictureFromCookie();
    setUserProfilePicture(profilePicture);
  };
  

  const getProfilePictureFromCookie = () => {
    const cookies = document.cookie.split('; ');
    for (let i = 0; i < cookies.length; i++) {
      let cookie = cookies[i];
      let eqPos = cookie.indexOf('=');
      let name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
      if (name === 'profilePicture') {
        return cookie.substr(eqPos + 1);
      }
    }
    return '';
  };

  const getEmailFromCookie = () => {
    const cookies = document.cookie.split('; ');
    for (let i = 0; i < cookies.length; i++) {
      let cookie = cookies[i];
      let eqPos = cookie.indexOf('=');
      let name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
      if (name === 'email') {
        return cookie.substr(eqPos + 1);
      }
    }
    return '';
  };
  const clearEmailCookie = () => {
    document.cookie = "email=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  };
  const clearProfilePictureCookie = () => {
    document.cookie = "profilePicture=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
   };
   
   const handleUserLoggedOut = () => {
    clearEmailCookie();
    clearProfilePictureCookie();
    setIsLoggedIn(false);
    setUserEmail('');
    setUserProfilePicture('');
   };
   

  // Create a reference to the menu element
  const menuRef = useRef();

  // Use useEffect for side effects and event listeners
  useEffect(() => {
    const email = getEmailFromCookie();
    const profilePicture = getProfilePictureFromCookie();

    if (email) {
      setIsLoggedIn(true);
      setUserEmail(email);
      setUserProfilePicture(profilePicture);


    } else {
      setIsLoggedIn(false);
      setUserEmail('');
      setUserProfilePicture('');
    }
 
    // Function to handle window resize
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    // Add a window resize event listener
    window.addEventListener("resize", handleResize);

    // Function to handle clicks outside of the menu
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setOpen(false);
        console.log(menuRef.current);
      }
    };

    // Add a document click event listener
    document.addEventListener("mousedown", handler);

    // Add logic to set click to true when screen width is 1000px
    if (window.innerWidth >= 1000) {
      setClick(true);
    } else {
      setClick(false);
    }

    // Cleanup: remove event listeners
    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  // Function to toggle a dropdown menu
  const toggleDropdown = (id) => {
    const updatedDropdowns = dropdowns.map((dropdown) => {
      if (dropdown.id === id) {
        return { ...dropdown, isOpen: !dropdown.isOpen };
      }
      return dropdown;
    });
    setDropdowns(updatedDropdowns);
  };


     
  return (
    <div ref={menuRef} >
 
      
      <Navbar
  className='navbar-top sticky-top'
//   expand="lg"
  color="white"
  style={{ maxWidth:"110vw",background: "#2B3140",
  fontFamily: "Avenir LT Pro 35 Light, sans-serif",
   }}
>
            
          <div className="sticky-nav" style={{width: "100%",backgroundColor: "transparent"}}>
          <Nav navbar style={{ width: "100%" }}>
  <NavItem className={click ? "d-flex align-items-left justify-content-left sticky-border" : "d-flex align-items-left justify-content-left"}>
    <i
      className={click ? "fas fa-times d-flex align-items-right justify-content-right mr-2 mt-3" : "fas fa-bars d-flex align-items-right justify-content-right mr-2 mt-3"}
      onClick={handleClick}
      style={{ fontSize: "26px", position: "absolute", right: "15px", cursor: "pointer", color: "black" }}
    />
    
    {isLoggedIn ? (
  <UncontrolledDropdown>
    <DropdownToggle className="ml-5" style={{background:"transparent", padding:"0%", display: "flex", justifyContent: "space-between"}}>
      <Avatar src={decodeURIComponent(userProfilePicture)} /> {/* Adjust the size here */}
      <FontAwesomeIcon className="mt-2 ml-1" icon={faCaretDown} color="black"/> 
    </DropdownToggle>
    <DropdownMenu right={false}>
      <DropdownItem onClick={handleUserLoggedOut}>
        Log Out
      </DropdownItem>
    </DropdownMenu>
  </UncontrolledDropdown>
) : (
  <NavbarBrand
    onClick={() => setModal(true)}
    className="mt-2 ml-5"
    id="navbar-brand"
    style={{ fontSize: "80%", fontWeight: 400, color: "#899DA3", textTransform: "capitalize" }}
  >
    <FontAwesomeIcon className="mr-2" icon={faUser} /> Log In
  </NavbarBrand>
)}

   {modal && (
  <SignUp
    onSetContributor={handleUserLoggedIn}
    toggleModal={() => setModal(false)}
  />
)}
  </NavItem>
  <NavItem className="sticky-border">
 
  </NavItem>
</Nav>

</div>

            {click && (
              <Container
              className="pl-5" // Apply the "sticky-border" class here
              style={{
    // height: "100vh",
    // height: "100%",
    // borderTop: "1px solid #ccc",
    maxWidth: "100vw", // Set maxWidth to 100% to occupy full width
  }}
>
<Nav className="d-flex align-items-center justify-content-center" navbar style={{  width: "100%", textAlign:"center"}}>
 
   <NavItem className="horizontal-line pb-2 pt-2">
   <NavLink to="/" tag={Link}>

  <p className="nav-p"
    style={{ fontSize: "100%", margin: "0", padding: "0 0" }}
    >
    Home 
  </p>
  </NavLink>
  
</NavItem>

<NavItem className="horizontal-line pb-2 pt-2">
   <NavLink to="/about-me" tag={Link}>

  <p className="nav-p"
    style={{ fontSize: "100%", margin: "0", padding: "0 0" }}
    >
    About Me 
  </p>
  </NavLink>
  
</NavItem>
<NavItem className="horizontal-line pb-2 pt-2">
   <NavLink to="/my-approach" tag={Link}>

  <p className="nav-p"
    style={{ fontSize: "100%", margin: "0", padding: "0 0" }}
    >
    My Approach
  </p>
  </NavLink>
  
</NavItem>
<NavItem className="horizontal-line pb-2 pt-2">
    <div>
          <Dropdown
            // isOpen={dropdowns.find((d) => d.id === "solutions").isOpen}
            // onClick={menuClick("solutions")} 
            toggle={() => toggleDropdown("solutions")}
            nav
            // onMouseEnter={() => openDropdownOnMouseEnter("solutions")}
            // onMouseLeave={() => closeDropdownOnMouseLeave("solutions")}
          >     
          <DropdownToggle nav 
            onClick={() => toggleDropdown("solutions")} // Toggle dropdown on click
          >
             <p
    className={`dropdown-toggle-text ${dropdowns.find((d) => d.id === "solutions").isOpen ? "blueText" : "white-text"}`}
    style={{  margin: "0", padding: "0 0" }}
    >
    Area of Expertise <FontAwesomeIcon icon={faAngleDown} style={{color: "black"}}/>
  </p>
            </DropdownToggle>

{dropdowns.find((d) => d.id === "solutions").isOpen && (
        <div>
        <NavItem className="ml-5 pb-3" style={{textAlign:"center"}} >
        <Link className={whiteTextColorClass} to="/iot-designs" style={{color:"black"}}>IOT Designs</Link>   
                  </NavItem>
                  <NavItem className="ml-5 pb-3" style={{textAlign:"center"}}  >
                  <Link className={whiteTextColorClass} to="/salesforce" style={{color:"black"}}>Salesforce</Link>   
                  </NavItem>
                  <NavItem className="ml-5 pb-3" style={{textAlign:"center"}}  >
                  <Link className={whiteTextColorClass} to="/trading" style={{color:"black"}}>Trading</Link>      
                  </NavItem>
                  </div>
)}
          </Dropdown>
          </div>
          </NavItem> 
<NavItem className="horizontal-line pb-2 pt-2">
   <NavLink to="/blog" tag={Link}>

  <p className="nav-p"
    style={{ fontSize: "100%", margin: "0", padding: "0 0" }}
    >
    Blog
  </p>
  </NavLink>
  
</NavItem> 
<NavItem className="horizontal-line pb-2 pt-2">
   <NavLink to="/reading-materials" tag={Link} >

  <p className="nav-p"
    style={{ fontSize: "100%", margin: "0", padding: "0 0" }}
    >
    Reading Materials
  </p>
  </NavLink>
  
</NavItem> 
<NavItem className="horizontal-line pb-2 pt-2">
   <NavLink to="/contact" tag={Link}>

  <p className="nav-p"
    style={{ fontSize: "100%", margin: "0", padding: "0 0" }}
    >
    <HashLink to="/#contact" smooth={true} style={{color:"black"}}>
        Contact
    </HashLink> 
  </p>
  </NavLink>
  
</NavItem>
  
  
  </Nav>

  </Container>

)}
    
              

{/* </Container> */}

<style>
  {`

.sticky-nav {
    position: sticky;
    top: 0;
    background-color: #fff; /* Set the background color as needed */
    z-index: 1000; /* Adjust the z-index as needed */
  }
  
/* Add this CSS to your stylesheets or in a <style> tag */

  .dropdown-menu {
    background-color: rgb(29, 33, 43); 
    font-size: 120%;
    font-weight: 200;
    color: white; 
    border-radius: 20px;
    position: absolute;
  }
  .dropdown-menu:hover {
    background-color: rgb(29, 33, 43); 
    color: white; 
    border-radius: 20px;
    position: absolute;
  }
 

  .custom-dropdown-toggle p {
    font-size: 120%;
  }
  .white-text {
    color: #fff;
    font-size: 60%;
    padding-left: 3%;
    padding-top: 1%;

  }
  .slate-text{
    color: #000;

  }
  .blueText {
    color: #008FBF; /* Change this to your desired blue color */
  }
    
  /* CSS for screen width 280px to 540px */
  @media only screen and (min-width: 280px) and (max-width: 766px) {
    .nav-p{
      font-size: 20px !important;
    }
    .navbar-top {
      top: -9%;
      left: 0;
      right: 0;
      position: fixed;
      z-index: 1000; /* Adjust the z-index as needed */
    }
    
   .navbar-logo-main{
    font-size: 18px !important;
    // padding-left: 10% !important;
   }

   .slate-text{
    color: #000;
    font-size: 20px !important;
    font-weight: 400 !important;


  }
  .blueText {
    color: #000; /* Change this to your desired blue color */
    font-size: 20px !important;
    // margin-left: -5% !important;


  }
  .white-text {
    font-size: 20px !important;
    // margin-left: -5% !important;

   

  }
  .service-p{
    // margin-left: -5% !important;

  }

    
       }
  @media only screen and (min-width: 767px) and (max-width: 912px) {
    .navbar-top {
      top: -3%;
      left: 0;
      right: 0;
      position: fixed;
      z-index: 1000; /* Adjust the z-index as needed */
    }

    .nav-p{
      font-size: 28px !important;
      padding-bottom: 3% !important;

    }
    
    .navbar-logo-main{
      font-size: 14px !important;
     }
   
     .slate-text{
      color: #000;
      // margin-bottom: -2% !important;
      font-size: 28px !important;
      font-weight: 400 !important;
      padding-left: 5% !important;
      padding-bottom: 3% !important;
  
    }
    .blueText {
      color: #000; /* Change this to your desired blue color */
      font-size: 28px !important;
      padding-bottom: 3% !important;

  
    }
    .white-text {
      font-size: 28px !important;
      padding-bottom: 3% !important;

  
    }
   
    
       }
       .dropdown-toggle-text {
        display: flex;
        align-items: center; /* Align vertically in the middle */
        justify-content: space-between;
      }
  
      .dropdown-toggle-text .blueText {
        margin-right: 5px; /* Add spacing between text and icon */
        padding-bottom: 3% !important;

      }
      
  
      .sticky-border {
        position: sticky;
        // top: 0;
        // background-color: white; /* Add a background color if needed */
        // z-index: 1; /* You may need to adjust the z-index based on your layout */
        border-bottom: 0.5px solid #ccc; /* Adjust border properties as needed */
      }
      .horizontal-line {
        border-bottom: 1px solid #000; /* Adjust the color and width as needed */
        width: 100%; /* Set the width to 100% to span the entire width of the NavItem */
        
      }

      @media only screen and (min-width: 1024px) {
        .navbar-logo-main{
          font-size: 14px !important;
         }
      }
      
  
  ` 
  }
</style>
</Navbar>

    </div>
);
}

export default NavbarShort;
