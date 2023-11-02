import React, { useEffect, useState } from 'react';
import { Container, Avatar, Typography } from '@material-ui/core'; // Import Avatar and Typography
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { deepOrange } from '@material-ui/core/colors';
import IndexNavbar from 'components/Navbars/IndexNavbar';
import { useNavigate } from 'react-router-dom';
import { Button } from 'reactstrap';
import { FaFacebook, FaTwitter, FaLinkedin, FaGoogle } from 'react-icons/fa';
import RecentPosts from './RecentPosts';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';


function BlogDetail() {
  const [blog, setBlog] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  const identifyHeadings = (text, index, array) => {
    // Check if the paragraph is a heading
    const isHeading = index > 0 && index < array.length - 1 &&
      !text.endsWith('.') && array[index - 1].trim() === '' && array[index + 1].trim() === '';

    return isHeading;
  };

  function Footer() {
    return (
      <footer style={{ display: 'flex', justifyContent: 'flex-start', padding: '1em' }}>
        <FaFacebook style={{ margin: '0 1em', cursor: 'pointer' }} />
        <FaTwitter style={{ margin: '0 1em', cursor: 'pointer' }} />
        <FaLinkedin style={{ margin: '0 1em', cursor: 'pointer' }} />
        <FaGoogle style={{ margin: '0 1em', cursor: 'pointer' }} />
      </footer>
    );
  }
  

  useEffect(() => {
    // Make an HTTP request to get the blog details by ID
    axios.get(`https://vnsserver.onrender.com/get-blog/${id}`)
      .then((response) => {
        // Update the state with the fetched blog details
        console.log("response at view blog",response.data.blog)
        setBlog(response.data.blog);
        // Scroll to the top when component mounts
        window.scrollTo(0, 0);
      })
      .catch((error) => {
        // Handle error
        console.error('Error fetching blog details:', error);
      });
  }, [id]); // Fetch data whenever the 'id' parameter changes
  

  if (!blog) {
    return <div>Loading...</div>; // Display a loading message or handle the case when the blog data is not available yet
  }
  const handleCancel = () => {
    // Use history to navigate back to the BlogList page
    navigate(`/blog`);
};
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


  
  return (
    <>
          {/* <IndexNavbar /> */}

    <Container className='blog-main-detail' style={{ cursor: 'pointer',backgroundColor:"#F0EDED", justifyContent: "center", margin: "2px 0", alignItems: "center", textAlign: "" }}>
      <Container className='blog-container  pt-5' style={{ backgroundColor:"", maxWidth: "80%" }}>
      <div className='space-50'></div>

      <Link className='pb-4 link-blog' to="/blog" style={{ position: 'absolute',  left: '40px', fontWeight: 600, color:"black" }}>
      <FaArrowLeft /> Go back to Blogs
        </Link>
      <div className='space-50'></div>
      <div className='mt-3 pt-2 head-user' style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: '16px' }}>

          <div className='blog-avatar' style={{ display: 'flex', alignItems: 'center' }}>
          {/* <Link to="/blog" style={{ position: 'absolute', top: '10px', left: '10px', color:"black" }}>Go back to Blogs</Link> */}

          <Avatar src={decodeURIComponent(blog.profilepicture)} style={{ width: "28px", height: "28px" }} /> {/* Adjust the size here */}
            <Typography className='ml-2 typo' variant="body2" style={{ fontSize:"100%", fontFamily: "Futura LT W01 Medium, sans-serif", color: "black" }}>
              {blog.username}{` . `}{" "}
            </Typography>
            <Typography className='ml-2 typo' variant="body2" color="textSecondary" style={{ fontFamily: "Futura LT W01 Medium, sans-serif", color: "black" }}>
              {" "}{formatDate(blog.date || new Date().toISOString())}{` .    4min read`}
            </Typography>

          </div>

        </div>
        <h2 className='blog-title mt-4 pt-1' style={{ fontFamily: "Futura LT W01 Medium, sans-serif", fontSize: "200%",
          fontWeight: "bolder", color: "black", margin: "2px 0" }}>{blog.title}</h2>
        <p className='blog-subtitle mt-4 pt-1' style={{ fontSize:"100%", margin: "2px 0", textAlign: "left", fontFamily: "Futura LT W01 Medium, sans-serif", color: "black", paddingBottom: "0%", fontWeight: 600 }}>{blog.subtitle}</p>
       <img className='mt-4 pt-2' src={blog.imageUrl} alt={blog.title} style={{ width: "100%", height: "auto", margin: "0 0" }} />
            <p className='blog-desc' style={{ paddingTop:"18%", margin: "10px 0", textAlign: "left", fontFamily: "Avenir LT Pro 35 Light, sans-serif", color: "black", paddingBottom: "15%", fontWeight: 400, fontSize: "85%" }}>
            {blog && blog.description && blog.description.split('\n').map((paragraph, index, array) => {           // Display an empty line if encountering multiple consecutive newlines
          if (paragraph.trim() === '' && (index + 1) < array.length && array[index + 1].trim() === '') {
            return <br key={index} />;
          }
        
          return (
            <p className='blog-desc-key' key={index} style={{ margin: "-108px 0", textAlign: "left", fontFamily: "Avenir LT Pro 35 Light, sans-serif", color: "black", paddingBottom: "15%", fontWeight: "normal" }}>
              {paragraph}
            </p>
          );
        })}
      </p>
      
       
        <hr className='' />
        {/* <Button color="secondary" onClick={handleCancel}>Go Back To Blogs</Button> */}
        <Footer />
        <hr className='' />

        {/* <Button color="secondary" onClick={handleCancel}>Go Back To Blogs</Button> */}

      </Container>
      <RecentPosts />
      <Container className="" style={{ background: '#E8EFF1', maxWidth: "100%", paddingTop: '20px' }}>
  <div style={{ fontSize: "13px", letterSpacing: "1.5px", fontFamily: "Avenir LT Pro 35 Light, sans-serif", background: '#E8EFF1', color: '#6E6E6D', textAlign: 'center' }}>
    © 2023 by VNS Ventures. Powered and secured by RFLABS
  </div>
</Container>
      <style>{`
            @media only screen and (min-width: 280px) and (max-width: 766px) {
              .blog-container{
                align-items: left !important;
                text-align: left !important;
                max-width: 100% !important;
              }
              .head-user{
                align-items: left !important;
                text-align: left !important;
                max-width: 100% !important;
              }
              .blog-avatar{
                align-items: left !important;
                max-width: 100% !important;
                font-size: 14px !important;
                font-weight: bold !important;
                letter-spacing: 0.1px !important;


              }
              .link-blog{
                font-size: 15px !important;
                margin-bottom: 10% !important;

              }
              .typo{
                font-size: 13px !important;
                margin-left: 0% !important;

              }
              .blog-title{
                padding-top: 10% !important;
                font-size: 22px !important;

              }
              .blog-subtitle{
                font-size: 18px !important;

              }
              .blog-desc{
                padding-top: 15% !important;
              }
              .blog-desc-key{
                margin: -30px 0 !important;
              }
            }
            @media only screen and (min-width: 767px) and (max-width: 912px) {
              .blog-main-detail{
                padding-top: 5% !important;
              }
              .blog-container{
                align-items: left !important;
                max-width: 100% !important;
              }
              .head-user{
                align-items: left !important;
                max-width: 100% !important;
              }
              .blog-avatar{
                align-items: left !important;
                max-width: 100% !important;
                font-size: 30px !important;


              }
              .link-blog{
                font-size: 28px !important;
                padding-bottom: 20% !important;

              }
              .typo{
                font-size: 28px !important;

              }
              .blog-desc{
                padding-top: 20% !important;
                font-size: 32px !important;

              }
              .blog-title{
                font-size: 48px !important;
                padding-top: 10% !important;


              }
              .blog-subtitle{
                font-size: 32px !important;

              }
              .blog-desc-key{
                margin: -70px 0 !important;
              }
            }
            @media only screen and (min-width: 1024px) {
        
              .link-blog{
                padding-left: 10% !important;

              }
            }
      
      `}</style>
      
    </Container>
    </>
  );
}

export default BlogDetail;
