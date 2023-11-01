import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import FileUploadTable from './Reading Materials/FileUpload';
import GoogleButton from 'react-google-button'; // Import the Google button component
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';

import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Form,
  Container,
  Row,
  Alert,
} from 'reactstrap';
import jwt_decode from "jwt-decode";

const clientId = "522870014553-e9bjj7q7a1b87l5pi3ngifff41e2ad6e.apps.googleusercontent.com"
function SignUp(props) {
  const [profilePicture, setProfilePicture] = useState("");


  const onSuccess = (res) => {
    var decoded = jwt_decode(res.credential);
    console.log(decoded);
    console.log(decoded.email);
    console.log('Decoded token:', decoded);
    console.log('Profile picture URL:', decoded.picture);
    setProfilePicture(decoded.picture);
    props.onSetContributor(decoded.email);
    props.toggleModal();

    var date = new Date();
date.setTime(date.getTime() + (1 * 24 * 60 * 60 * 1000)); // 7 days
var expires = "; expires=" + date.toUTCString();

var encodedProfilePicture = encodeURIComponent(decoded.picture);


document.cookie = `email=${decoded.email}; path=/; expires=${expires}`;
document.cookie = `profilePicture=${encodedProfilePicture}; path=/; expires=${expires}`;

  };
  
 const onFailure = (res) =>{
  console.log("Failed",res);
 }

  return (
    <>
      
              <GoogleOAuthProvider clientId="522870014553-e9bjj7q7a1b87l5pi3ngifff41e2ad6e.apps.googleusercontent.com">
              <GoogleLogin
                onSuccess={onSuccess}
                onError={() => {
                  console.log('Login Failed');
                }}
              />
              </GoogleOAuthProvider>
              

              
    </>
  );
}

export default SignUp;
