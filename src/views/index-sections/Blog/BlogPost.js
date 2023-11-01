import React, { Component } from 'react';
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

class BlogPost extends Component {
  constructor(props) {
    super(props);
  
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
  
    this.state = {
      title: this.props.blog ? this.props.blog.title : '',
      subtitle: this.props.blog ? this.props.blog.subtitle : '',
      description: this.props.blog ? this.props.blog.description : '', // Define 'description' in the state
      username: this.props.blog ? this.props.blog.username : getEmailFromCookie(),
      date: this.props.blog ? this.props.blog.date : new Date().toLocaleDateString(),
      image: this.props.blog ? this.props.blog.image : '',
      showBlogList: false,
      profilepicture: this.props.blog ? this.props.blog.profilepicture : getProfilePictureFromCookie(),

    };
  }
  


  handleTitleChange = (e) => {
    this.setState({ title: e.target.value });
  }

  handlesubtitleChange = (e) => {
    this.setState({ subtitle: e.target.value });
  }
  handleDescriptionChange = (e) => {
    this.setState({ description: e.target.value });
  }
  
  handleImageChange = (e) => {
    this.setState({ image: e.target.value }); // Get the selected image file
  }
  handleBackClick = () => {
    this.setState({ showBlogPost: false });
  }
  updateBlogList = () => {
    // Fetch the updated blog list and set the state in this function
    axios.get('https://vnsserver.onrender.com/get-blogs')
      .then((response) => {
        const data = response.data;
        console.log('Retrieved updated blog data:', data);

        // Sort the blogs based on the uploaded date in descending order (most recent first)
        data.sort((a, b) => new Date(b.date) - new Date(a.date));

        // Set the state with the updated list of blogs in BlogList component
        this.setState({ blogs: data });
      })
      .catch((error) => {
        console.error('Error fetching updated blog data:', error);
      });
  };
  handleDiscard = () => {
    this.setState({ showBlogList: true });
  }
  
  handleSubmit = (e) => {
    e.preventDefault();
  
    const { title, subtitle, description, username, image, profilepicture } = this.state;
  
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
      date: this.state.date,
      image, // Convert the image file to a URL
      profilepicture
    };
    
    console.log("new Blog ",newBlog)
    
    if (this.props.currentBlog) {
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
        this.updateBlogList(); // Call the function to update the blog list
      })
      .catch((error) => {
        console.error('Error creating blog:', error);
      });
    }
    
    // Clear the form fields
    this.setState({
      title: '',
      subtitle: '',
      description:'',
      image: '',
      showBlogList: true,  // Add this line
    });
  };
  
 

  render() {
    if (this.state.showBlogList) {
      return <BlogList blogs={this.state.blogs} />; // Pass the updated blogs as props
    }

    return (
      <Container className="mt-5 pt-5" style={{ paddingBottom: "30%", maxWidth: "100%", backgroundColor: "#FFF", justifyContent: "center", alignItems: "center", textAlign: "center" }}>
           {/* <p onClick={this.handleBackClick} style={{ cursor: "pointer" }}>
          <FontAwesomeIcon icon={faArrowLeft} style={{ marginRight: "5px" }} />
          Back to Blogs
        </p> */}

        <h2 style={{ fontFamily: "Futura LT W01 Medium, sans-serif", fontSize: "180%", fontWeight: 600 }}>Write a Blog</h2>
        <Form onSubmit={this.handleSubmit}>
          <InputGroup className="mb-3">
            <InputGroupText>Blog Title</InputGroupText>
            <Input
              type="text"
              value={this.state.title}
              onChange={this.handleTitleChange}
              disabled={this.props.currentBlog} // Disable the input field if the currentBlog state is set
              placeholder="✏️ Write blog title..."

            />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroupText>Blog Subtitle</InputGroupText>
            <Input
              type="textarea"
              value={this.state.subtitle}
              onChange={this.handlesubtitleChange}
              disabled={this.props.currentBlog} // Disable the input field if the currentBlog state is set
              placeholder="✏️ Write blog subtitle..."

            />
          </InputGroup>
          <InputGroup className="mb-3">
          <InputGroupText>Blog Description</InputGroupText>
          <Input
            type="textarea"
            value={this.state.description}
            onChange={this.handleDescriptionChange}
            disabled={this.props.currentBlog} // Disable the input field if needed
            placeholder="✏️ Write blog description..."

          />
        </InputGroup>

          <InputGroup className="mb-3">
            <InputGroupText>Enter Image URL</InputGroupText>
            <Input
              type="text"
              value={this.state.image}
              onChange={this.handleImageChange}
              disabled={this.props.currentBlog} // Disable the input field if the currentBlog state is set
              placeholder="✏️ Paste blog image URL here..."

            />
            {/* <CustomInput
              type="file"
              id="imageUpload"
              accept="image/*" // Allow only image files
              onChange={this.handleImageChange}
              disabled={this.props.currentBlog} // Disable the file input field if the currentBlog state is set
            /> */}
          </InputGroup>
          <Button color="primary" type="submit">
            Post Blog
          </Button>
          <Button color="secondary" onClick={this.handleDiscard}>Discard</Button>

        </Form>
      </Container>
    );
  }
}

export default BlogPost;