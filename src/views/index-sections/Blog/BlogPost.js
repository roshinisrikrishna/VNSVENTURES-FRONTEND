import React, { useState, useEffect } from 'react';
import {
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Button,
  ButtonToolbar,
  CustomInput,
  Container,
} from 'reactstrap';
import axios from 'axios';
import BlogList from './BlogList';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router-dom';

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

const BlogPost = (props) => {
  const initialBlogState = props.blog || {
    title: '',
    subtitle: '',
    description: '',
    username: getEmailFromCookie(),
    date: new Date().toLocaleDateString(),
    image: '',
    profilepicture: getProfilePictureFromCookie(),
  };

  const [blog, setBlog] = useState(initialBlogState);
  const [showBlogList, setShowBlogList] = useState(false);
  const [blogs, setBlogs] = useState([]);
  const [currentBlog, setCurrentBlog] = useState(null);
  const [title, setTitle] = useState('');
  const navigate = useNavigate();


  // Equivalent to componentDidMount and componentDidUpdate
  useEffect(() => {
    if (props.blog) {
      setBlog(props.blog);
    }
  }, [props.blog]);
 
  const handleTitleChange = (e) => {
    setBlog({ ...blog, title: e.target.value });
  }

  const handlesubtitleChange = (e) => {
    setBlog({ ...blog, subtitle: e.target.value });
  }

  const handleDescriptionChange = (e) => {
    setBlog({ ...blog, description: e.target.value });
  }
  
  const handleImageChange = (e) => {
    setBlog({ ...blog, image: e.target.value });
  }

  const handleBackClick = () => {
    setShowBlogList(false);
  }

  const updateBlogList = () => {
    // Fetch the updated blog list and set the state in this function
    axios.get('https://vnsserver.onrender.com/get-blogs')
      .then((response) => {
        const data = response.data;
        console.log('Retrieved updated blog data:', data);

        // Sort the blogs based on the uploaded date in descending order (most recent first)
        data.sort((a, b) => new Date(b.date) - new Date(a.date));

        // Set the state with the updated list of blogs in BlogList component
        setBlogs(data);
        navigate('/blog', { state: { blogs: data } });

        
      })
      .catch((error) => {
        console.error('Error fetching updated blog data:', error);
      });
  };

  const handleDiscard = () => {
    navigate('/blog')
  }

   const handleSubmit = (e) => {
    e.preventDefault();
  
    const { title, subtitle, description, username, image, profilepicture } = blog;
  
    // Check if all required fields are filled
    if (!title || !subtitle || !image || !description) {
      alert('Please fill in all fields (Title, subtitle, and Image).');
      return;
    }
  
    // Create a new blog object
    const newBlog = {
      id: crypto.randomUUID(), // Generate a unique ID for the blog
      title,
      subtitle,
      description,
      username,
      date: new Date().toLocaleDateString(),
      image, // Convert the image file to a URL
      profilepicture
    };
    
    console.log("new Blog ",newBlog)
    
    if (currentBlog) {
      // If editing an existing blog, send a PUT request with the updated data
      const uploadFileDetailsURL = 'https://vnsserver.onrender.com/insertBlog'; // Change the URL accordingly
  
    // Send an HTTP POST request to the server
    axios.post(uploadFileDetailsURL, newBlog)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.error('Error updating blog:', error);
        });
    } else {
      const uploadFileDetailsURL = 'https://vnsserver.onrender.com/insertBlog'; // Change the URL accordingly

      // If creating a new blog, send a POST request to the server
      axios.post(uploadFileDetailsURL, newBlog)
      .then((response) => {
        console.log('New blog added successfully');
        updateBlogList(); // Call the function to update the blog list
      })
      .catch((error) => {
        console.error('Error creating blog:', error);
      });
    }
    
   
    setBlog({
      title: '',
      subtitle: '',
      description:'',
      image: '',
    });

    setShowBlogList(true);
  };
  
  // if (showBlogList) {
  //   return <BlogList blogs={blogs} title={title} />;
  // }

    return (
      <Container className="mt-5 pt-5" style={{ paddingBottom: "30%", maxWidth: "100%", backgroundColor: "#FFF", justifyContent: "center", alignItems: "center", textAlign: "center" }}>
           {/* <p onClick={handleBackClick} style={{ cursor: "pointer" }}>
          <FontAwesomeIcon icon={faArrowLeft} style={{ marginRight: "5px" }} />
          Back to Blogs
        </p> */}

        <h2 style={{ fontFamily: "Futura LT W01 Medium, sans-serif", fontSize: "180%", fontWeight: 600 }}>Write a Blog</h2>
        <Form onSubmit={handleSubmit}>
          <InputGroup className="mb-3">
            <InputGroupText>Blog Title</InputGroupText>
            <Input
              type="text"
              value={blog.title}
              onChange={handleTitleChange}
              disabled={props.currentBlog} // Disable the input field if the currentBlog state is set
              placeholder="✏️ Write blog title..."

            />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroupText>Blog Description</InputGroupText>
            <Input
              type="textarea"
              value={blog.subtitle}
              onChange={handlesubtitleChange}
              disabled={props.currentBlog} // Disable the input field if the currentBlog state is set
              placeholder="✏️ Write blog description..."

            />
          </InputGroup>
          <InputGroup className="mb-3">
          <InputGroupText>Blog Content</InputGroupText>
          <Input
            type="textarea"
            value={blog.description}
            onChange={handleDescriptionChange}
            disabled={props.currentBlog} // Disable the input field if needed
            placeholder="✏️ Write blog content..."

          />
        </InputGroup>

          <InputGroup className="mb-3">
            <InputGroupText>Enter Image URL</InputGroupText>
            <Input
              type="text"
              value={blog.image}
              onChange={handleImageChange}
              disabled={props.currentBlog} // Disable the input field if the currentBlog state is set
              placeholder="✏️ Paste blog image URL here..."

            />
            {/* <CustomInput
              type="file"
              id="imageUpload"
              accept="image/*" // Allow only image files
              onChange={handleImageChange}
              disabled={props.currentBlog} // Disable the file input field if the currentBlog state is set
            /> */}
          </InputGroup>
          <Button color="primary" type="submit">
            Post Blog
          </Button>
          <Button color="secondary" onClick={handleDiscard}>Discard</Button>

        </Form>
      </Container>
    );
  }


export default BlogPost;