import { Auth0Provider } from "@auth0/auth0-react";
import React from "react";

export const Auth0ProviderWithNavigate = ({ children }) => {
  const domain = 'roshinir.auth0.com';
  const clientId = '8bRQOoXwk8TLh6DkvYYbib7LCkvoAAOd';
  const redirectUri = 'http://localhost:3000/reading-materials';
  const audience = process.env.REACT_APP_AUTH0_AUDIENCE;

  const onRedirectCallback = (appState) => {
    window.history.replaceState(
      {},
      document.title,
      appState?.returnTo || window.location.pathname
    );
  };

  if (!(domain && clientId && redirectUri && audience)) {
    return null;
  }

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={redirectUri}
      audience={audience}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};
