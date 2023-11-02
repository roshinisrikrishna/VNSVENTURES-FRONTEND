import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

// styles for this kit
import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss?v=1.5.0";
import "assets/demo/demo.css?v=1.5.0";
import "assets/demo/nucleo-icons-page-styles.css?v=1.5.0";
// pages for this kit
import Index from "views/Index.js";
import NucleoIcons from "views/NucleoIcons.js";
import LoginPage from "views/examples/LoginPage.js";
import LandingPage from "views/examples/LandingPage.js";
import ProfilePage from "views/examples/ProfilePage.js";
import Navbars from "views/index-sections/Navbars";
import Contact from "views/index-sections/Contact/Index";
import About from "views/index-sections/About/Index";
import Approach from "views/index-sections/Our Approach/Index";
import IOTDesigns from "views/index-sections/IOT Designs/Index";
import Salesforce from "views/index-sections/Salesforce/Index";
import Trading from "views/index-sections/Trading/Index";
import Reading from "views/index-sections/Reading Materials/Index";
import Blog from "views/index-sections/Blog/Index";
import BlogDetail from "views/index-sections/Blog/BlogDetail";
import EditBlog from "views/index-sections/Blog/EditBlog";
import BlogPost from "views/index-sections/Blog/BlogPost";







const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="" element={<Index />} />
      <Route path="contact" element={<Contact />} />
      <Route path="about-me" element={<About />} />
      <Route path="my-approach" element={<Approach />} />
      <Route path="iot-designs" element={<IOTDesigns />} />
      <Route path="salesforce" element={<Salesforce />} />
      <Route path="trading" element={<Trading />} />
      <Route path="reading-materials" element={<Reading />} />
      <Route path="blog" element={<Blog />} />
      <Route path="add-blog" element={<BlogPost />} />

      <Route path="blog/:id" element={<BlogDetail />} />
      <Route path="edit-blog/:id" element={<EditBlog />} />






      <Route path="login-page" element={<LoginPage />} />
      <Route path="review-demo" element={<Navbars />} />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  </BrowserRouter>
);
