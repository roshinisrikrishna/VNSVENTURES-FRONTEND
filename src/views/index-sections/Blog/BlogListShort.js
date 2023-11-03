import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardMedia, Typography, Avatar, Container, TextField } from '@material-ui/core';
import { deepOrange } from '@material-ui/core/colors';
import { Button } from 'react-bootstrap';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Grid, Box } from '@material-ui/core';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { pink } from '@mui/material/colors';
import { useNavigate } from 'react-router-dom';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios'
import {
  Form,
  Input,
 
} from 'reactstrap';

import { Row } from 'react-bootstrap';
import { FaComment } from 'react-icons/fa'; // You need to import the comment icon from a relevant library
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSearch,
  faArrowDown,
  faStar as faStarRegular,
  faFile,
  faBars, // Add the bars icon
} from '@fortawesome/free-solid-svg-icons';



  
  const ITEM_HEIGHT = 48;
  

  function formatDate(dateString) {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
      // Date is not valid
      console.error('Invalid date:', dateString);
      return '';
    }
    const options = {  month: 'short', day: 'numeric' };
    return new Intl.DateTimeFormat('en-US', options).format(date);
  }

function BlogListShort({ blogs }) {
  const [selectedBlogId, setSelectedBlogId] = useState(null);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false);
  const [blogSet, setBlogSet] = useState([]); // Define and initialize the blogs state
  const [openDialog, setOpenDialog] = useState(false);
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [editedBlog, setEditedBlog] = useState(selectedBlog);
  const [commentText, setCommentText] = useState("");
  const [showComment, setShowComment] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 5; // Number of blogs per page
  const [selectedBlogComments, setSelectedBlogComments] = useState([]);
  const [blogComments, setBlogComments] = useState({});
  const [selectedBlogIdForComment, setSelectedBlogIdForComment] = useState(null);
  const [commentCounts, setCommentCounts] = useState({});
  const [username, setUsername] = useState(null);
  const [toggledFileIds, setToggledFileIds] = useState([]);
  const [favoritedBlogs, setFavoritedBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState(""); // Add this line
  const [isSearchVisible, setSearchVisible] = useState(false);
  const [show, setShow] = useState(false);
  const [showStates, setShowStates] = useState({});
  const [showFavoriteMessage, setShowFavoriteMessage] = useState({});


  // Logic to determine the blogs to display based on the current page
  const filteredBlogs = blogsPerPage ? blogSet.filter(blog => blog.title.toLowerCase().includes(searchTerm.toLowerCase())) : [];
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);

  const totalPages = Math.ceil(blogSet.length / blogsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  
    // const handleMenuOpen = (event, blogId) => {
    //   setAnchorEl(event.currentTarget);
    //   setSelectedBlogId(blogId);
    // };
    const handleMenuOpen = (event, blogId, title) => {
      setAnchorEl(event.currentTarget);
      setSelectedBlogId(blogId);
      // setSelectedBlogTitle(title); // Store the selected title in a state variable
    };
    
  
    const handleMenuClose = () => {
      setAnchorEl(null);
      setSelectedBlogId(null);
    };
  
  const navigate = useNavigate();


  const handleFavoriteClick = (id) => {
    const alreadyFavorited = favoritedBlogs.includes(id);
  
    if (!alreadyFavorited) {
      // Make a POST request to the server to increment the favorite count
      axios.put(`https://vnsserver.onrender.com/increment-favorite-count/${id}`)
        .then(() => {
          console.log('Favorite count incremented successfully');

          setShowFavoriteMessage(prevStates => ({ ...prevStates, [id]: true }));
          setTimeout(() => {
            setShowFavoriteMessage(prevStates => ({ ...prevStates, [id]: false }));
          }, 1000);
          // Update the state to reflect the new favorite count
          const updatedBlogs = blogSet.map(blog => {
            if (blog.id === id) {
              return {
                ...blog,
                favorites: blog.favorites + 1 // Assuming the API increments the count
              };
            }
            return blog;
          });
          setBlogSet(updatedBlogs); // Update the state with the new data
  
          // Set a browser cookie to track this favorited blog ID
          document.cookie = `favoritedBlog=${id}`;
          // Update the state to reflect the favorited blog
          setFavoritedBlogs([...favoritedBlogs, id]);
        })
        .catch((error) => {
          console.error('Error incrementing favorite count:', error);
        });
    } else {
      // If the blog is already favorited, make a request to decrease the favorite count
      axios.put(`https://vnsserver.onrender.com/decrease-favorite-blog/${id}`)
        .then(() => {
          console.log('Favorite count decreased successfully');
          // Update the state to reflect the decreased favorite count
          const updatedBlogs = blogSet.map(blog => {
            if (blog.id === id && blog.favorites > 0) {
              return {
                ...blog,
                favorites: blog.favorites - 1 // Assuming the API decrements the count
              };
            }
            return blog;
          });
          setBlogSet(updatedBlogs); // Update the state with the updated data
  
          // Remove the favorited blog ID from the browser cookie
          const updatedFavoritedBlogs = favoritedBlogs.filter(favId => favId !== id);
          setFavoritedBlogs(updatedFavoritedBlogs); // Update the state of favorited blogs
        })
        .catch((error) => {
          console.error('Error decrementing favorite count:', error);
        });
    }
  };
  
  const viewBlogById = (id) => {
    console.log("title at view ",id)
    
  
    // Make a POST request to the server to increment the view count
    axios.put(`https://vnsserver.onrender.com/increment-view-blog/${id}`)
      .then((response) => {
        console.log('View count incremented successfully');
      })
      .catch((error) => {
        console.error('Error incrementing view count:', error);
      });
      navigate(`/blog/${id}`);
  }
  
  // Inside your React component where you want to fetch the blog data
  useEffect(() => {
   
    setIsLoading(true);
  axios.get('https://vnsserver.onrender.com/get-blogs')
    .then((response) => {
      const data = response.data;
      console.log('Retrieved blog data:', data);
      data.sort((a, b) => new Date(b.date) - new Date(a.date));
      setBlogSet(data);
      setIsLoading(false);
    })
    .catch((error) => {
      console.error('Error fetching blog data:', error);
      setIsLoading(false);
    });
      const favoritedBlogIds = document.cookie.split(';')
      .map(cookie => cookie.trim())
      .filter(cookie => cookie.startsWith('favoritedBlog='))
      .map(cookie => cookie.replace('favoritedBlog=', ''))
      .map(blogId => parseInt(blogId, 10));

    setFavoritedBlogs(favoritedBlogIds);
       // Fetch data from the server
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
  }, []);

  const addBlog = async () => {
    try {
      // Navigate to the BlogPost component and wait for the result
      const newBlog = await navigate('/add-blog');

      // Assuming the BlogPost component returns the updated blogs with the new blog added
      if (newBlog) {
        setBlogSet(newBlog); // Update the blogs in the BlogList component state
      }
    } catch (error) {
      console.error('Error navigating to BlogPost:', error);
    }
  };

  const editBlogById = async(id) => {
      try {
      // Navigate to the BlogPost component and wait for the result   
      const newBlog = await navigate(`/edit-blog/${id}`);

      // Assuming the BlogPost component returns the updated blogs with the new blog added
      if (newBlog) {
        setBlogSet(newBlog); // Update the blogs in the BlogList component state
      }
    } catch (error) {
      console.error('Error navigating to BlogPost:', error);
    }
   
    
  }
  
  
  const deleteBlogById = (id) => {
    // Display a confirmation dialog
    const userConfirmed = window.confirm("Are you sure you want to delete this blog?");
  
    // If the user clicked OK, proceed with deleting the blog
    if (userConfirmed) {
      // Make an HTTP DELETE request to the server to delete the blog with the given ID
      axios.delete(`https://vnsserver.onrender.com/delete-blog/${id}`)
        .then((response) => {
          console.log('Blog deleted successfully');
    
          // Filter out the deleted blog from the current state
          const updatedBlogSet = blogSet.filter(blog => blog.id !== id);
    
          // Set the state with the updated list of blogs
          setBlogSet(updatedBlogSet);
        })
        .catch((error) => {
          console.error('Error deleting blog:', error);
        });
    }
  };
  
  
  const addCommentById = (id) => {
    if (selectedBlogIdForComment === id) {
      setShowComment(!showComment); // Toggle the showComment state
    } else {
      setShowComment(true); // Show comment section if a different blog's comment is clicked
      setSelectedBlogIdForComment(id); // Set the selected blog ID for comment
    }
    // setSelectedBlogIdForComment(id);

    // setShowComment(true);
  
    // Fetch the comments for the blog post
    axios.get(`https://vnsserver.onrender.com/get-comments/${id}`)
      .then((response) => {
        const comments = response.data;
        console.log('Retrieved comments:', comments);
        setSelectedBlogComments(comments);
        console.log('Resulted comments:', comments.commentText);

      })
      .catch((error) => {
        console.error('Error fetching comments:', error);
      });
  };
    
  const handleCommentSubmit = (id) => {
    axios
      .post(`https://vnsserver.onrender.com/add-comment/${id}`, { text: commentText })
      .then((response) => {
        console.log('Comment added successfully');
        setShowStates(prevStates => ({ ...prevStates, [id]: true }));

        setShow(true)
        setTimeout(() => {
          setShowStates(prevStates => ({ ...prevStates, [id]: false }));
        }, 1000);

        // After adding the comment, update the comment count in the UI
        const updatedBlogs = blogSet.map((blog) => {
          if (blog.id === id) {
            return {
              ...blog,
              commentCount: blog.commentCount + 1, // Increment the comment count
            };
          }
          return blog;
        });
  
        setBlogSet(updatedBlogs); // Update the state with the new data
  
        // Update the comment section to display the newly added comment immediately
        const newComment = { id: response.data.id, commentText: commentText }; // Assuming the response has the new comment's ID
        const updatedComments = [...selectedBlogComments, newComment];
        setSelectedBlogComments(updatedComments);
  
        setShowComment(false);
        setCommentText(''); // Reset the commentText state to clear the textarea
      })
      .catch((error) => {
        console.error('Error adding comment:', error);
      });
  };
  
  const handleCommentChange = (event) => {
    setCommentText(event.target.value);
  };
      
    
  function getTimeDifference(uploadDate) {
    const now = new Date();
    const uploadedAt = new Date(uploadDate);
    console.log("uploaded date ",uploadedAt)
    console.log("format uploaded date ",formatDate(uploadedAt))

    console.log("date ",now)

    const timeDifference = now - uploadedAt;
  
    // Calculate the difference in seconds, minutes, hours, and days
    const seconds = Math.floor(timeDifference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
  
    if (days > 0) {
      return `${days} day${days > 1 ? 's' : ''} ago`;
    } else if (hours > 0) {
      return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    } else if (minutes > 0) {
      return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
    } else {
      return `${seconds} second${seconds > 1 ? 's' : ''} ago`;
    }
  }
  
    return (
      <>
    
      {isLoading ? (
      <div>Loading Blogs...</div>
    ) :(
      <Container style={{ maxWidth: '85%', color:"black" }}>
        <div
          style={{
            fontFamily: "Avenir LT Pro 35 Light, sans-serif",
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: '30px',
            marginTop: '50px',

          }}
        >
          {/* <p style={{ flex: 1, fontSize: "16px", textAlign: 'left' }}>All Posts</p> */}
          <div
            style={{
              cursor: 'pointer',
              padding: '2px',
              display: 'flex',
              alignItems: 'center',
            }}
            onClick={() => setSearchVisible(!isSearchVisible)}
          >
            <FontAwesomeIcon icon={faSearch} style={{ fontSize: "14px" }} />
          </div>
          {isSearchVisible && (
            <TextField
            label="Search blogs"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          )}
      {username ? (
        <Button
          as="span"
          style={{
            backgroundColor: "#899DA3",
            borderRadius: "0px",
            padding: "5px 19px",
            border: "none",
          }}
          onClick={addBlog}
        >
          +Blog
        </Button>
      ):null}     

                    
        </div>
        
      
        {currentBlogs.map((blog) => (
            <div key={blog.id}  style={{ cursor: 'pointer', background: "rgb(253, 253, 253, 0.9)" }}>
          <Card style={{  fontFamily: "Futura LT W01 Medium, sans-serif", color:"black", marginBottom: '20px', maxWidth: '100%', border: 'none', boxShadow: 'none' }}>

          {/* <h1>{blog.imageUrl}</h1> */}

            <img
              style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
              src={blog.imageUrl}
              alt=""
              onClick={() => viewBlogById(blog.id)}
            />
  
            <Container style={{ maxWidth:"100%", textAlign:"left",justifyContent:"left",alignItems:"flex-start",}} >
            <div style={{ display: 'flex', flexDirection:"column",justifyContent: 'flex-end', alignItems: 'flex-end' }}>

         <IconButton
           aria-label="more"
           id="long-button"
           aria-controls={open ? 'long-menu' : undefined}
           aria-expanded={open ? 'true' : undefined}
           aria-haspopup="true"
           onClick={(event) => handleMenuOpen(event, blog.id, blog.title)} // Pass blog.title here
         >
           <MoreVertIcon />
         </IconButton>
         {/* <h1>{blog.title}</h1> */}
         <Menu
  id="long-menu"
  MenuListProps={{
    'aria-labelledby': 'long-button',
  }}
  anchorEl={anchorEl}
  open={open}
  onClose={handleClose}
  PaperProps={{
    style: {
      maxHeight: ITEM_HEIGHT * 4.5,
      width: '20ch',
    },
  }}
>
  <MenuItem onClick={() => {
    viewBlogById(selectedBlogId);
    handleClose(); // Close the menu after selecting the View option
  }}>View</MenuItem>
  {username && <MenuItem onClick={() => {
    editBlogById(selectedBlogId);
    handleClose(); // Close the menu after selecting the Edit option
  }}>Edit</MenuItem>}
  {username && <MenuItem onClick={() => {
    deleteBlogById(selectedBlogId);
    handleClose(); // Close the menu after selecting the Delete option
  }}>Delete</MenuItem>}
  <MenuItem onClick={() => {
    addCommentById(selectedBlogId);
    handleClose(); // Close the menu after selecting the Add Comment option
  }}>Add Comment</MenuItem>
</Menu>


       </div>
              <CardContent >
              <div onClick={() => viewBlogById(blog.id)} style={{ display: 'flex', textAlign: "left", justifyContent: "left", alignItems: "flex-start", marginTop: '16px' }}>
              <Avatar className='mr-2' src={decodeURIComponent(blog.profilepicture)} style={{ width: "28px", height: "28px" }} /> {/* Adjust the size here */}
                <Typography variant="body2" style={{ fontFamily: "Futura LT W01 Medium, sans-serif", color: "black" }}>{blog?.username}</Typography>
              </div>
                <div onClick={() => viewBlogById(blog.id)} style={{ display: 'flex', textAlign:"left",justifyContent:"left",alignItems:"flex-start", marginTop: '8px' }}>
                  <Typography variant="body2" color="textSecondary" style={{fontFamily: "Futura LT W01 Medium, sans-serif", color:"black",}}>
                    {" "}{formatDate(blog.date || new Date().toISOString())}{` .    4min read`}

                  </Typography>
                </div>
                <div onClick={() => viewBlogById(blog.id)} style={{ display: 'flex', textAlign:"left",justifyContent:"left",alignItems:"flex-start", marginTop: '8px' }}>

                <Typography variant="h5" component="div" style={{ fontFamily: "Futura LT W01 Medium, sans-serif", color:"black", }}>
                  {blog.title}
                </Typography>
                </div>
                <div onClick={() => viewBlogById(blog.id)} style={{ display: 'flex',  marginTop: '8px' }}>
                <Typography variant="body2" color="textSecondary" component="p" style={{ fontFamily: "Futura LT W01 Medium, sans-serif", color:"#4a4a4a", paddingBottom:"15%", fontWeight:"normal" }}>
                  {blog.subtitle.length > 100 ? `${blog.subtitle.substring(0, 100)}...` : blog.subtitle}
                </Typography>
                </div>
                <div>
                  {/* <Button onClick={() => viewBlog(blog.id)}>View</Button>
                  <Button onClick={() => commentBlog(blog.id)}>Comment</Button> */}
                  <hr />
                <Grid container justifyContent="space-between" alignItems="center">
  <Box onClick={() => viewBlogById(blog.id)}>
    <Typography variant="body2" color="textSecondary" style={{fontFamily: "Futura LT W01 Medium, sans-serif", color:"black",}}>
      {(blog.views || 0 )} views 
    </Typography>
  </Box>
  <Box mx={1} onClick={() => addCommentById(blog.id)}>
    <Typography variant="body2" color="textSecondary" style={{fontFamily: "Futura LT W01 Medium, sans-serif", color:"black",}}>
    {(blog.commentCount || 0)} comments                     

    </Typography>
  </Box>
  <IconButton
  aria-label="add to favorites"
  color="pink"
  onClick={() => handleFavoriteClick(blog.id)}
>
  {blog.favorites > 0 ? (
    <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
  <span style={{ position: 'absolute', top: '-10px', right: '0', fontSize: "50%" }}>{blog.favorites}</span>
    <FavoriteIcon sx={{ color: pink[500] }} />
  </div>
  
  ) : (
    <FavoriteBorderOutlinedIcon sx={{ color: pink[500] }} />
  )}
      {showFavoriteMessage[blog.id] && <sup className='ml-1' style={{fontSize: "50%"}}>Liked!</sup>}

</IconButton>



   </Grid>
   {showStates[blog.id] && (
  <Container className="" style={{ background: '#a0fab8', maxWidth: "100%", paddingTop: '5px', paddingBottom:'5px' }}>
    <div style={{ maxWidth:"100%",fontSize: "9px", letterSpacing: "1.5px", fontFamily: "Avenir LT Pro 35 Light, sans-serif", background: '#a0fab8', color: '#6E6E6D' }}>
      Added Comment Successfully!!!!
    </div>
  </Container>
)}
                </div>
                

              </CardContent>
              
            </Container>
          </Card>

          {showComment && selectedBlogIdForComment === blog.id && (
              <Card style={{background: "rgb(253, 253, 253, 0.9)",}}>
                <CardContent>
                  <div style={{  display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Input
                      type="textarea"
                      placeholder="    Write a comment..."
                      value={commentText}
                      onChange={handleCommentChange}
                      onKeyPress={(event) => {
                        if (event.key === 'Enter') handleCommentSubmit(blog.id);
                      }}
                      style={{color:"#454545",textAlign:"left", background:"white", maxWidth: '90%', marginBottom: '10px' }}
                    />
                    {selectedBlogComments.map((comment) => (
                      <Card key={comment.id} style={{ fontSize:"220%",textAlign:"left", color:"#292828",background:"white", width: '90%', marginTop: '10px' }}>
                        <CardContent>
                          <Typography variant="body2" color="textSecondary" component="p" style={{fontSize:"40%"}}>
                            {comment.commentText}
                          </Typography>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

                      </div>
                    ))}
           
           <Container className="mt-3">
        <Row className="justify-content-center">
          <ul className="pagination">
            <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
              <button
                className="page-link paginator-button"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                &lt;&lt;
              </button>
            </li>
            {Array.from({ length: totalPages }).map((_, index) => (
              <li
                key={index}
                className={`page-item ${index + 1 === currentPage ? 'active' : ''}`}
              >
                <button
                  className={`page-link paginator-button ${
                    index + 1 === currentPage ? 'blue-background' : ''
                  }`}
                  onClick={() => handlePageChange(index + 1)}
                >
                  {index + 1}
                </button>
              </li>
            ))}
            <li
              className={`page-item ${
                currentPage === totalPages || blogSet.length % blogsPerPage === 0 ? 'disabled' : ''
              }`}
            >
              <button
                className="page-link paginator-button"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages || blogSet.length % blogsPerPage === 0}
              >
                &gt;&gt;
              </button>
            </li>
          </ul>
        </Row>
      </Container>
      <style>
        {`
        @media only screen and (max-width: 480px) {
          .container {
            max-width: 100%;
          }
          .card {
            display: block;
          }
          .cardMedia {
            width: 100%;
          }
        }
        @media only screen and (min-width: 481px) and (max-width: 768px) {
          .container {
            max-width: 80%;
          }
          .card {
            display: flex;
            flex-direction: column;
            width: 100%;
          }
          .cardMedia {
            width: 100%;
          }
        }
        @media only screen and (min-width: 769px) {
          .container {
            max-width: 70%;
          }
          .card {
            display: flex;
            flex-direction: row;
            width: 100%;
          }
          .cardMedia {
            width: 30%;
          }
        }
        `}
      </style>
      
    </Container>
    )}
    </>
  );
}

export default BlogListShort;