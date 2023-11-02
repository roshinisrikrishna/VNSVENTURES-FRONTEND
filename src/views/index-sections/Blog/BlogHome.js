import React, { useState, useEffect } from 'react';
import { Container, Button } from 'reactstrap';
import BlogList from './BlogList';
import BlogPost from './BlogPost';
import { Dropdown } from 'react-bootstrap';
import BlogDetail from './BlogDetail';
import SignUp from '../SignUp';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

function BlogHome() {
  const [showBlogPost, setShowBlogPost] = useState(false);
  const [blogs, setBlogs] = useState([]);
  const [username, setUsername] = useState(null);
  const [modal, setModal] = useState(false);
  const [views, setViews] = useState([]);
  const [comments, setComments] = useState([]);
  const [currentBlog, setCurrentBlog] = useState(null);
  const [editingBlog, setEditingBlog] = useState(null);

  useEffect(() => {
    const checkCookieChange = () => {
      const emailCookie = document.cookie.split(';').find(row => row.trim().startsWith('email='));
      const usernameFromCookie = emailCookie ? emailCookie.split('=')[1] : null;
     
      // If usernameFromCookie is null, set username state to null
      if (usernameFromCookie === null) {
        setUsername(null);
      } else if (username !== usernameFromCookie) {
        setUsername(usernameFromCookie);
      }
    };
  
    // Check for cookie changes immediately
    checkCookieChange();
  
    // Set up an interval to check for cookie changes every second
    const intervalId = setInterval(checkCookieChange, 500);
  
    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array means this effect runs once on mount
  
   
   

  const toggleModal = () => {
    setModal(!modal);
    setShowBlogPost(true);
  };

  const isEmailCookieSet = username !== null;

  return (
    <Container className="mt-5 pt-5" style={{ paddingBottom: "30%", maxWidth: "100%", backgroundColor: "#F0EDED", justifyContent: "center", alignItems: "center", textAlign: "center" }}>
      <h1 style={{ fontFamily: "Futura LT W01 Medium, sans-serif", fontSize: "180%", fontWeight: 600 }}>
        My Blog  {/* Update the display with username */}
        </h1>

      {/* {username ? (
        <Button
          as="span"
          style={{
            backgroundColor: "#899DA3",
            borderRadius: "0px",
            padding: "5px 19px",
            border: "none",
          }}
          onClick={toggleModal}
        >
          Add Blog
        </Button>
      ):null} */}

      {showBlogPost ? <BlogPost /> : <BlogList />}

    </Container>
  );
}

export default BlogHome;
