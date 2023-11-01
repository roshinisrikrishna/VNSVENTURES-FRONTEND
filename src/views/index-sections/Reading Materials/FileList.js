import React, { useEffect, useState } from 'react';
import { gapi } from 'gapi-script';

const FileList = () => {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    gapi.load('client:auth2', initClient);
  }, []);
  
  const initClient = () => {
    setIsLoadingGoogleDriveApi(true);
    gapi.client
      .init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        discoveryDocs: DISCOVERY_DOCS,
        scope: SCOPES,
      })
      .then(
        function () {
          // Listen for sign-in state changes.
          gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);

          // Handle the initial sign-in state.
          updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
        },
        function (error) {}
      );
  };
    

  return (
    <div>
      {files.map(file => (
        <p key={file.id}>{file.name}</p>
      ))}
    </div>
  );
};

export default FileList;
