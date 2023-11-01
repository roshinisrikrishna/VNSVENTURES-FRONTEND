import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from 'reactstrap';
import { Auth0ProviderWithNavigate } from '../Auth0ProviderWithNavigate'; // Import the Auth0ProviderWithNavigate component


function LoginButton() {
  const {
    isAuthenticated,
    loginWithRedirect,
  } = useAuth0();

  return !isAuthenticated && (
    <Auth0ProviderWithNavigate> 

    <Button
      as="span"
      style={{
        backgroundColor: "#899DA3",
        borderRadius: "0px",
        padding: "5px 19px",
        border: "none",
      }}
      onClick={loginWithRedirect}
    >
      +File
    </Button>
    </Auth0ProviderWithNavigate> 

  );
}

export default LoginButton;
