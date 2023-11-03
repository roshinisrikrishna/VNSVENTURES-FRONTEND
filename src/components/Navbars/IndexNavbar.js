import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Collapse,
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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import NavbarShort from "./NavbarShort";
import SignUp from "views/index-sections/SignUp";
import { Avatar } from '@material-ui/core';
import { HashLink } from 'react-router-hash-link';

function IndexNavbar() {
  const [collapseOpen, setCollapseOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [click, setClick] = useState(false); // Add a click state

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState('');

  const [modal, setModal] = useState(false);
  const [userProfilePicture, setUserProfilePicture] = useState('');


  // const handleUserLoggedIn = (email) => {
  //   setIsLoggedIn(true);
  //   setUserEmail(email);
  // };
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
   
    

  const menuRef = useRef();

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
 
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
      if (window.innerWidth >= 1000) {
        setClick(true);
      } else {
        setClick(false);
      }      
    };
  
    handleResize(); // Initial call to set the click state
  
    window.addEventListener("resize", handleResize);
  
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array means this effect runs once on mount and cleanup on unmount
 

  
  const [dropdowns, setDropdowns] = useState([
    { id: "products", isOpen: false },
    { id: "solutions", isOpen: false },
    { id: "learn", isOpen: false },
    { id: "customers", isOpen: false },
    { id: "events", isOpen: false },
    { id: "company", isOpen: false },


  ]);
  const toggleDropdown = (dropdownId) => {
    setDropdowns((prevDropdowns) =>
      prevDropdowns.map((dropdown) =>
        dropdown.id === dropdownId ? { ...dropdown, isOpen: !dropdown.isOpen } : dropdown
      )
    );
  };

 
  
  const openDropdownOnMouseEnter = (dropdownId) => {
    setDropdowns((prevDropdowns) =>
      prevDropdowns.map((dropdown) =>
        dropdown.id === dropdownId ? { ...dropdown, isOpen: true } : dropdown
      )
    );
  };

  const closeDropdownOnMouseLeave = (dropdownId) => {
    setDropdowns((prevDropdowns) =>
      prevDropdowns.map((dropdown) =>
        dropdown.id === dropdownId ? { ...dropdown, isOpen: false } : dropdown
      )
    );
  };


  return (
    <div ref={menuRef}>
      {screenWidth >= 1200 || click ? ( // Check screenWidth or click state
     <Navbar className="top" expand="lg" style={{ fontFamily: "Avenir LT Pro 35 Light, sans-serif" }}>
        <Container fluid>
          <Collapse
            className="navbar-collapse justify-content-start"
            isOpen={collapseOpen}
            navbar
          >
            <Nav navbar>
              <NavItem>
                <NavLink to="/" tag={Link} className="nav-link mr-3" style={{ fontFamily: "Avenir LT Pro 35 Light, sans-serif" }}>
                  <p style={{ fontWeight: 400, color: "black", fontFamily: "Avenir LT Pro 35 Light, sans-serif" }}>Home</p>
                  {/* <p>{userEmail}</p> */}
                  {/* <p>{userProfilePicture}</p> */}
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/about-me" tag={Link} className="nav-link mr-3" style={{ fontFamily: "Avenir LT Pro 35 Light, sans-serif" }}>
                  <p style={{ fontWeight: 400, color: "black", fontFamily: "Avenir LT Pro 35 Light, sans-serif" }}>About Me</p>
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink to="/my-approach" tag={Link} className="nav-link mr-3" style={{ fontFamily: "Avenir LT Pro 35 Light, sans-serif" }}>
                  <p style={{ fontWeight: 400, color: "black", fontFamily: "Avenir LT Pro 35 Light, sans-serif" }}>My Approach</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <Dropdown
                  isOpen={dropdowns.find((d) => d.id === "company").isOpen}
                  toggle={() => toggleDropdown("company")}
                  nav
                  onMouseEnter={() => openDropdownOnMouseEnter("company")}
                  onMouseLeave={() => closeDropdownOnMouseLeave("company")}
                >
                  <DropdownToggle nav className="custom-dropdown-toggle mr-3" style={{ fontFamily: "Avenir LT Pro 35 Light, sans-serif" }}>
                    <p style={{ fontWeight: 400, color: "black", fontFamily: "Avenir LT Pro 35 Light, sans-serif" }}>Area of Expertise</p>
                  </DropdownToggle>
                  <DropdownMenu
                    className={`custom-dropdown-menu ${open ? 'active' : 'inactive'}`}
                    style={{
                      color: "black",
                      alignItems: "end",
                      justifyContent: "end",
                      textAlign: "right",
                      right: 0, // Align to the right
                      backgroundColor: "transparent"
                    }}
                  >
                    <Container style={{
                      alignItems: "flex-end",
                      justifyContent: "flex-end",
                      justifyItems: "end",
                      textAlign: "right"
                    }}>
                      {/* Dropdown items */}
                      <DropdownItem to="/iot-designs" tag={Link} style={{fontSize:"80%", marginBottom:"-5%"}}>
                        IOT Designs
                      </DropdownItem>
                      <DropdownItem
                        to="/salesforce"
                        tag={Link}
                        style={{fontSize:"80%", marginBottom:"-5%"}}
                      >
                        Salesforce
                      </DropdownItem>
                      <DropdownItem
                        to="/trading"
                        tag={Link}
                        style={{fontSize:"80%", marginBottom:"-5%"}}
                      >
                        Trading
                      </DropdownItem>
                    </Container>
                  </DropdownMenu>
                </Dropdown>
              </NavItem>
              <NavItem>
                <NavLink to="/blog" tag={Link} className="nav-link mr-3" style={{ fontFamily: "Avenir LT Pro 35 Light, sans-serif" }}>
                  <p style={{ fontWeight: 400, color: "black", fontFamily: "Avenir LT Pro 35 Light, sans-serif" }}>Blog</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/reading-materials" tag={Link} className="nav-link mr-3" style={{ fontFamily: "Avenir LT Pro 35 Light, sans-serif" }}>
                  <p style={{ fontWeight: 400, color: "black", fontFamily: "Avenir LT Pro 35 Light, sans-serif" }}>Reading Materials</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/contact" tag={Link} className="nav-link mr-3" style={{ fontFamily: "Avenir LT Pro 35 Light, sans-serif" }}>
                  <p style={{ fontWeight: 400, color: "black", fontFamily: "Avenir LT Pro 35 Light, sans-serif" }}>
                  <HashLink to="/#contact" smooth={true} style={{color:"black"}}>
                      Contact
                    </HashLink>
                  </p>
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>

          <Collapse className="justify-content-end" isOpen={collapseOpen} navbar>
            <Nav navbar>
            {isLoggedIn ? (
              
              <UncontrolledDropdown>
              <DropdownToggle style={{background:"transparent", padding:"0%"}}>
              <Avatar src={decodeURIComponent(userProfilePicture)} /> {/* Adjust the size here */}
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
    className="mt-2"
    id="navbar-brand"
    style={{ fontSize: "80%", fontWeight: 400, color: "#899DA3", textTransform: "capitalize" }}
  >
    <FontAwesomeIcon className="mr-2" icon={faUser} /> Log In
  </NavbarBrand>
)}


            </Nav>
          </Collapse>
        </Container>
<style>
  {`

// .menu-trigger dropdown-toggle{
  position: absolute;
  // top: 20px;
  right: 50px;
  height: 0px;
  width: 0px;
  background: transparent;
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;
}

.custom-dropdown-menu {
  top: -50px !important; /* Adjust this value as needed */
}

.custom-dropdown-menu.active{
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
  transition: 1000ms ease;

}

.custom-dropdown-menu.inactive{
  opacity: 0;
  visibility: hidden;
  transform: translateY(-20px);
  transition: 1000ms ease;
  top: 25px !important; /* Adjust this value as needed */

}

  .custom-dropdown-menu a {
  text-decoration: none; 
  border-bottom: 2px solid transparent; 
  transition: border-bottom 0.3s ease-in-out;
  color: #899DA3; 


}

 
  .close-button{
     color:white
  }
  .close-button:hover {
    color: blue;

  }
  
  .dropdown-menu {
    // background-color: rgb(29, 33, 43); 
    font-size: 16px;
    font-weight: 200;
    color: #899DA3; 
    // border-radius: 20px;
    position: absolute;
  }
  .dropdown-menu:hover {
    // background-color: rgb(29, 33, 43); 
    color: #899DA3; 
    // border-radius: 20px;
    position: absolute;
  }
  

  .custom-dropdown-toggle p {
    font-size: 14px;
  }
  .nav-item p{
    color: black;
    font-size: 100%;
  }
  .nav-item p:hover{
    color: #899DA3;
  }
  .nav-item p{
    color: #899DA3;
  }
  ` 
  }
</style>
{modal && (
  <SignUp
    onSetContributor={handleUserLoggedIn}
    toggleModal={() => setModal(false)}
  />
)}

</Navbar>
) : <NavbarShort />} 

</div>
);
}

export default IndexNavbar;
