import React, { useState, useEffect } from 'react';
import { Container, Form, Input, InputGroup, InputGroupText, Button } from 'reactstrap';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import IndexNavbar from 'components/Navbars/IndexNavbar';
import { useNavigate } from 'react-router-dom';


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

      <Form className='mt-5 pt-5' >
        <div className="mb-3">
          <InputGroupText>Blog Title</InputGroupText>
        </div>

        <div className="mb-3">
          <Input
            type="text"
            value={editedBlog.title}
            onChange={(e) => setEditedBlog({ ...editedBlog, title: e.target.value })}
          />
        </div>
        <div className="mb-3">
        <InputGroupText>Blog Description</InputGroupText>
        </div>
        <div className="mb-3">
        <Input
            type="textarea"
            value={editedBlog.subtitle}
            rows={20} // Set the number of rows
            cols={50} // Set the number of columns
            onChange={(e) => setEditedBlog({ ...editedBlog, subtitle: e.target.value })}
        />
        </div>
        <div className="mb-3">
        <InputGroupText>Blog Content</InputGroupText>
        </div>
        <div className="mb-3">
        <Input
            type="textarea"
            value={editedBlog.description}
            rows={20} // Set the number of rows
            cols={50} // Set the number of columns
            onChange={(e) => setEditedBlog({ ...editedBlog, description: e.target.value })}
        />
        </div>
        
        <div className="mb-3">
        <InputGroupText>Blog Image</InputGroupText>
        </div>
        <div className="mb-3">
        <Input
            type="textarea"
            value={editedBlog.imageUrl}
            rows={20} // Set the number of rows
            cols={50} // Set the number of columns
            onChange={(e) => setEditedBlog({ ...editedBlog, imageUrl: e.target.value })}
        />
        </div>

        {/* Add fields for other blog properties like image URL, etc. */}
        <Button color="primary" onClick={handleSave}>Save</Button>
        <Button color="secondary" onClick={handleCancel}>Cancel</Button>
      </Form>
    </Container>
    </Container>
  );
}

export default EditBlog;
