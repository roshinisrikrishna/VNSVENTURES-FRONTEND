import React, { useState, useEffect } from 'react';
import { Container, Form, Input, InputGroup, InputGroupText } from 'reactstrap';
import Button from '@mui/material/Button';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import IndexNavbar from 'components/Navbars/IndexNavbar';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function EditBlog({ blogData, onSave, onCancel }) {
  const { id } = useParams();
  const [editedBlog, setEditedBlog] = useState(null);
  const navigate = useNavigate();


  useEffect(() => {
    axios.get(`https://vnsserver.onrender.com/get-blog/${id}`)
      .then((response) => {
        setEditedBlog(response.data.blog);
      })
      .catch((error) => {
        console.error('Error fetching blog details:', error);
      });
  }, [id]);

  const handleSave = () => {
    axios.put(`https://vnsserver.onrender.com/update-blog/${editedBlog.id}`, editedBlog)
      .then((response) => {
        console.log("editedBlog",editedBlog)
        onSave(editedBlog);


      })
      .catch((error) => {
        console.error('Error updating blog:', error);

      });

      axios.get('https://vnsserver.onrender.com/get-blogs')
      .then((response) => {
        const data = response.data;
        console.log('Retrieved updated blog data:', data);

        // Sort the blogs based on the uploaded date in descending order (most recent first)
        data.sort((a, b) => new Date(b.date) - new Date(a.date));

        // Set the state with the updated list of blogs in BlogList component
        // setBlogs(data);

        navigate('/blog', { state: { blogs: data } });

        
      })
      .catch((error) => {
        console.error('Error fetching updated blog data:', error);
      });
  };
  const handleCancel = () => {
    // Use history to navigate back to the BlogList page
    navigate(`/blog`);
};
  if (!editedBlog) {
    return <div>Loading...</div>;
  }

  return (
    <Container style={{backgroundColor: "#F0EDED"}}>
        <IndexNavbar />
    <Container className="mt-5 pt-5" style={{ paddingBottom: "30%", maxWidth: "90%", backgroundColor: "#FFF", justifyContent: "center", alignItems: "center", textAlign: "center" }}>
      <h2 style={{ fontFamily: "Futura LT W01 Medium, sans-serif", fontSize: "180%", fontWeight: 600 }}>Edit Blog</h2>
      <img className='mt-5 pt-2' src={editedBlog.imageUrl} alt={editedBlog.title} style={{ width: "70%", height: "auto", margin: "2px 0" }} />
      <ToastContainer />

      <Form className='mt-5 pt-5' >
      <div className="form-group mt-5 mb-1" style={{ fontFamily: "Futura LT W01 Medium, sans-serif", fontSize: "80%",textAlign:"left", alignItems:"flex-start",justifyContent:"flex-start"}}>
        <label htmlFor="blogTitle" style={{ fontFamily: "Futura LT W01 Medium, sans-serif", fontSize: "140%",textAlign:"left", alignItems:"flex-start",justifyContent:"flex-start"}}>
              Blog Title
            </label>
          <Input
            type="text"
            value={editedBlog.title}
            style={{
              width: '100%',
              padding: '12px 20px',
              margin: '8px 0',
              boxSizing: 'border-box',
              border: '1px solid #ccc',
              borderTop: 'none',
              borderLeft: 'none',
              borderRight: 'none',
              borderRadius: '4px',
              fontSize: '16px',
              backgroundColor: 'white',
            }}
            onChange={(e) => setEditedBlog({ ...editedBlog, title: e.target.value })}
          />
        </div>
        <div className="form-group mt-5 mb-1" style={{ fontFamily: "Futura LT W01 Medium, sans-serif", fontSize: "80%",textAlign:"left", alignItems:"flex-start",justifyContent:"flex-start"}}>
        <label htmlFor="blogDescription" style={{ fontFamily: "Futura LT W01 Medium, sans-serif", fontSize: "140%",}}>
              Blog Description
            </label>
        <Input
            type="textarea"
            value={editedBlog.subtitle}
            rows={20} // Set the number of rows
            cols={50} // Set the number of columns
            style={{
              width: '100%',
              padding: '12px 20px',
              margin: '8px 0',
              boxSizing: 'border-box',
              border: '1px solid #ccc',
              borderTop: 'none',
              borderLeft: 'none',
              borderRight: 'none',
              borderRadius: '4px',
              fontSize: '16px',
              backgroundColor: 'white',
            }}
            onChange={(e) => setEditedBlog({ ...editedBlog, subtitle: e.target.value })}
        />
        </div>
        <div className="form-group mt-5 mb-1" style={{ fontFamily: "Futura LT W01 Medium, sans-serif", fontSize: "80%",textAlign:"left", alignItems:"flex-start",justifyContent:"flex-start"}}>
        <label htmlFor="blogContent" style={{ fontFamily: "Futura LT W01 Medium, sans-serif", fontSize: "140%",}}>
              Blog Content
            </label>
        <Input
            type="textarea"
            value={editedBlog.description}
            rows={20} // Set the number of rows
            cols={50} // Set the number of columns
            style={{
              width: '100%',
              padding: '12px 20px',
              margin: '8px 0',
              boxSizing: 'border-box',
              border: '1px solid #ccc',
              borderTop: 'none',
              borderLeft: 'none',
              borderRight: 'none',
              borderRadius: '4px',
              fontSize: '16px',
              backgroundColor: 'white',
            }}
            onChange={(e) => setEditedBlog({ ...editedBlog, description: e.target.value })}
        />
        </div>
        
        <div className="form-group mt-5 mb-1" style={{ fontFamily: "Futura LT W01 Medium, sans-serif", fontSize: "80%",textAlign:"left", alignItems:"flex-start",justifyContent:"flex-start"}}>
        <label htmlFor="imageUrl" style={{ fontFamily: "Futura LT W01 Medium, sans-serif", fontSize: "140%",}}>
              Enter Image URL
            </label>
        <Input
            type="textarea"
            value={editedBlog.imageUrl}
            rows={20} // Set the number of rows
            cols={50} // Set the number of columns
            style={{
              width: '100%',
              padding: '12px 20px',
              margin: '8px 0',
              boxSizing: 'border-box',
              border: '1px solid #ccc',
              borderTop: 'none',
              borderLeft: 'none',
              borderRight: 'none',
              borderRadius: '4px',
              fontSize: '16px',
              backgroundColor: 'white',
            }}
            onChange={(e) => setEditedBlog({ ...editedBlog, imageUrl: e.target.value })}
        />
        </div>

        {/* Add fields for other blog properties like image URL, etc. */}
        <Button className='mt-5' variant='contained' style={{background:"#899DA3"}} onClick={handleSave}>Save</Button>
        <Button className='mt-5' variant='text' style={{color:"black"}} onClick={handleCancel}>Cancel</Button>
      </Form>
      <ToastContainer />

    </Container>
    </Container>
  );
}

export default EditBlog;
