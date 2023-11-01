import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Card, CardContent, Typography, IconButton } from '@material-ui/core';
import { Grid, Box } from '@material-ui/core';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { pink } from '@mui/material/colors';
import { useNavigate } from 'react-router-dom';

function RecentPosts() {
  const [recentPosts, setRecentPosts] = useState([]);
  const navigate = useNavigate();

  const viewBlogById = (id) => {
    navigate(`/blog/${id}`);

    axios.put(`https://vnsserver.onrender.com/increment-view-count/${id}`)
      .then((response) => {
        console.log('View count incremented successfully');
      })
      .catch((error) => {
        console.error('Error incrementing view count:', error);
      });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://vnsserver.onrender.com/get-blogs');
        if (response.data && Array.isArray(response.data)) {
          const posts = response.data.slice(0, 3);
          setRecentPosts(posts);
        }
      } catch (error) {
        console.error('Error fetching recent posts:', error);
      }
    };

    fetchData();
  }, []);

  const truncate = (text, limit) => {
    return text.length > limit ? `${text.substring(0, limit)}...` : text;
  };

  return (
    <Container style={{ background: "#F0EDED" }}>
      <Typography variant="h4" gutterBottom>
        Recent Posts
      </Typography>
      <div style={{ display: 'flex', overflowX: 'auto' }}>
        {recentPosts.map(post => (
          <Card
            key={post.id}
            onClick={() => viewBlogById(post.id)}
            style={{ border: "none", boxShadow: "none", width: 275, margin: '0 10px', height: '350px', background: "#F0EDED" }}
          >
            <img
              src={post.imageUrl}
              alt=""
              style={{ width: '100%', height: '150px', objectFit: 'cover' }}
            />
            <CardContent style={{ height: '200px', overflow: 'hidden' }}>
              <Typography variant="h6" component="h2" noWrap>
                {truncate(post.title, 30)}
              </Typography>
              <hr />
              <Grid container justifyContent="space-between" alignItems="center">
                <Box>
                  <Typography variant="body2" color="textSecondary" style={{ fontFamily: "Futura LT W01 Medium, sans-serif", color: "black" }}>
                    {post.views || 0} views
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="body2" color="textSecondary" style={{ fontFamily: "Futura LT W01 Medium, sans-serif", color: "black" }}>
                    {post.commentCount || 0} comments
                  </Typography>
                </Box>
                <Box>
                  <IconButton
                    aria-label="add to favorites"
                    color="pink"
                  >
                    <FavoriteBorderOutlinedIcon sx={{ color: pink[500] }} />
                  </IconButton>
                </Box>
              </Grid>
            </CardContent>
          </Card>
        ))}
      </div>
    </Container>
  );
}

export default RecentPosts;
