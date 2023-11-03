import React, { useState, useEffect } from 'react';
import {  Avatar, TextField } from '@material-ui/core';
import { deepOrange } from '@material-ui/core/colors';
import { Container, Table, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'; // Corrected import statements
import {
  faFileImage,
  faFileAudio,
  faFileVideo,
  faFilePdf,
  faFileAlt,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSearch,
  faArrowDown,
  faStar as faStarRegular,
  faFile,
  faBars, // Add the bars icon
} from '@fortawesome/free-solid-svg-icons'; 
import { faStar as faStarOutline } from '@fortawesome/free-regular-svg-icons';
import Button from 'react-bootstrap/Button';
import { FiImage, FiVideo, FiMusic, FiFileText, FiFile } from 'react-icons/fi';
import { saveAs } from 'file-saver';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import SignUp from '../SignUp';
import axios from 'axios';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import FileTable from './FileTable';

function getCookie(name) {
  const cookieName = `${encodeURIComponent(name)}=`;
  const cookieArray = document.cookie.split(';');
  let cookie = null;

  for(let i = 0; i < cookieArray.length; i++) {
    let c = cookieArray[i];
    while (c.charAt(0) === ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(cookieName) === 0) {
      cookie = decodeURIComponent(c.substring(cookieName.length, c.length));
      break;
    }
  }
  return cookie;
}

const FileUploadTable = () => {
  // Get the email from the cookie

  // Initialize state to store uploaded files, search input visibility, and contributor
  const [files, setFiles] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isSearchVisible, setSearchVisible] = useState(false);
  const [sortColumn, setSortColumn] = useState(null);
  const [sortOrder, setSortOrder] = useState('asc');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [sortByDropdownOpen, setSortByDropdownOpen] = useState(false);
  const [modal, setModal] = useState(false);
  const toggleModal = () => setModal(!modal);
  const [contributor, setContributor] = useState(null); // Set the contributor to the email from the cookie
  const [profilePicture, setProfilePicture] = useState("");
  const [favoritedFiles, setFavoritedFiles] = useState([]);
  const [isMobile, setIsMobile] = useState(false);
  const [isLoading, setIsLoading] = useState(true);


  const toggleDropdown = (index) => {
    setDropdownOpen(prevState => ({
      ...prevState,
      [index]: !prevState[index]
    }));
  };
  

  const handleSetContributor = (email) => {
    setContributor(email);
  };

console.log("contributor ",contributor)

  function guardarArchivo(uploadedFile) {
    return new Promise((resolve, reject) => {
      var file = uploadedFile;
      var reader = new FileReader();
      reader.readAsDataURL(uploadedFile);
  
      reader.onload = function (e) {
        var rawLog = reader.result.split(',')[1];
        var dataSend = {
          dataReq: { data: rawLog, name: file.name, type: file.type },
          fname: 'uploadFilesToGoogleDrive',
        };
  
        fetch('https://script.google.com/macros/s/AKfycbwat6AcO3mG35qGCrcf-4lfHhEJzONRNiBZB5oe1P-OXsWOFTvHtW9NNZmugs-WIJNmsA/exec', {
          method: 'POST',
          body: JSON.stringify(dataSend),
        })
          .then((res) => res.json())
          .then((a) => {
            console.log(a);
            console.log('id at drive', a.id);
            resolve(a.id); // Resolve the id
          })
          .catch((e) => {
            console.log(e);
            reject(e); // Reject with an error
          });
      };
    });
  }
  
  
  // Function to handle file upload and update state
 // Function to handle file upload and update state
const handleFileUpload = async (uploadedFile) => {
  // Get file details
  const id = await guardarArchivo(uploadedFile); // Wait for the id from guardarArchivo

  console.log("file at handleFileUpload ",uploadedFile)
  const fileName = uploadedFile.name;
  const fileType = getFileTypeIcon(uploadedFile.type);
  const fileSize = getFileSize(uploadedFile.size);
  const uploadDate = new Date().toISOString(); // Capture date and time
  const initialViews = 0; // Initialize views count to 0

  const newFile = {
    id,
    fileName,
    fileType: uploadedFile.type, // Send fileType as a string
    fileSize,
    uploadDate,
    views: initialViews,
    contributor: contributor,
    profilePicture: profilePicture, // Add the profilePicture here
    favorites: 0,
  };

  console.log("files at fileupload ",newFile)
    // Send the newFile to the server
  sendFileDetailsToServer(newFile);

  setFiles([...files, newFile]);
};

  function getContributorFromCookie() {
    const cookies = document.cookie.split('; ');
    for (let i = 0; i < cookies.length; i++) {
      let cookie = cookies[i];
      let eqPos = cookie.indexOf('=');
      let name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
      if (name === 'email') {
        return cookie.substr(eqPos + 1);
      }
    }
    return null;
  }
  function getProfilePictureFromCookie() {
    const cookies = document.cookie.split('; ');
    for (let i = 0; i < cookies.length; i++) {
      let cookie = cookies[i];
      let eqPos = cookie.indexOf('=');
      let name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
      if (name === 'profilePicture') {
        return cookie.substr(eqPos + 1);
      }
    }
    return null;
  }
  
  const fetchFileDetails = () => {
    // Make a GET request to the server's /get-file-details route
    setIsLoading(true);
  axios.get('https://vnsserver.onrender.com/get-file-details')
    .then((response) => {
      const filesWithDropdownState = response.data.map((file, index) => ({
        ...file,
        dropdownOpen: false
      }));
      console.log("files at frontend ",filesWithDropdownState)
      setFiles(filesWithDropdownState);
      setIsLoading(false);
    })
    .catch((error) => {
      console.error('Error fetching file details:', error);
      setIsLoading(false);
    });
    
  };
   // Use the useEffect hook to fetch file details when the component is mounted
   useEffect(() => {

  const contributor = getContributorFromCookie();
  const profilePicture = getProfilePictureFromCookie();
  if (contributor) {
    handleSetContributor(contributor);
  }
  if (profilePicture) {
    setProfilePicture(decodeURIComponent(profilePicture));
  }
  fetchFileDetails();

  const checkCookieChange = () => {
    const emailCookie = document.cookie.split(';').find(row => row.trim().startsWith('email='));
    const usernameFromCookie = emailCookie ? emailCookie.split('=')[1] : null;
   
    // If usernameFromCookie is null, set username state to null
    if (usernameFromCookie === null) {
      setContributor(null);
    } else if (contributor !== usernameFromCookie) {
      setContributor(usernameFromCookie);
    }
  };

  // Check for cookie changes immediately
  checkCookieChange();
  const favoritedFileIds = document.cookie.split(';')
      .map(cookie => cookie.trim())
      .filter(cookie => cookie.startsWith('favoritedFile='))
      .map(cookie => cookie.replace('favoritedFile=', ''))
      .map(fileId => parseInt(fileId, 10));

    setFavoritedFiles(favoritedFileIds);
    const handleResize = () => {
      if (window.matchMedia('(min-width: 280px) and (max-width: 912px)').matches) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };
   
    window.addEventListener('resize', handleResize);
    handleResize(); // Call the function once to set the initial state
   
    const intervalId = setInterval(checkCookieChange, 500);
   
    return () => {
      window.removeEventListener('resize', handleResize); // Clean up the event listener
      clearInterval(intervalId); // Clean up the interval
    };
   }, []);

function getContributorFromCookie() {
  const cookies = document.cookie.split('; ');
  for (let i = 0; i < cookies.length; i++) {
    let cookie = cookies[i];
    let eqPos = cookie.indexOf('=');
    let name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
    if (name === 'email') {
      return cookie.substr(eqPos + 1);
    }
  }
  return null;
}
  const sendFileDetailsToServer = (newFile) => {
    console.log("inside sendFileDetils to server")
    // Define the URL of your Express server endpoint for uploading file details
    const uploadFileDetailsURL = 'https://vnsserver.onrender.com/upload-file-details'; // Change the URL accordingly
  
    // Send an HTTP POST request to the server
    axios.post(uploadFileDetailsURL, newFile)
      .then((response) => {
        console.log('File details uploaded successfully', response.data);
      })
      .catch((error) => {
        console.error('Error uploading file details', error);
      });
  };
  
  const toggleFavorite = (id) => {
    const alreadyFavorited = favoritedFiles.includes(id);
  
    if (!alreadyFavorited) {
      // Make a POST request to the server to increment the favorite count
      axios.put(`https://vnsserver.onrender.com/increment-favorite-files/${id}`)
        .then(() => {
          console.log('Favorite count incremented successfully');
          // Update the state to reflect the new favorite count
          const updatedFiles = files.map(file => {
            if (file.id === id) {
              return {
                ...file,
                favorites: file.favorites + 1 // Assuming the API increments the count
              };
            }
            return file;
          });
          setFiles(updatedFiles); // Update the state with the new data
  
          // Set a browser cookie to track this favorited blog ID
          document.cookie = `favoritedFiles=${id}`;
          // Update the state to reflect the favorited blog
          setFavoritedFiles([...favoritedFiles, id]);
        })
        .catch((error) => {
          console.error('Error incrementing favorite count:', error);
        });
    } else {
      // If the blog is already favorited, make a request to decrease the favorite count
      axios.put(`https://vnsserver.onrender.com/decrease-favorites-files/${id}`)
        .then(() => {
          console.log('Favorite count decreased successfully');
          // Update the state to reflect the decreased favorite count
          const updatedFiles = files.map(file => {
            if (file.id === id && file.favorites > 0) {
              return {
                ...file,
                favorites: file.favorites - 1 // Assuming the API decrements the count
              };
            }
            return file;
          });
          setFiles(updatedFiles); // Update the state with the updated data
  
          // Remove the favorited blog ID from the browser cookie
          const updatedFavoritedFiles = favoritedFiles.filter(favId => favId !== id);
          setFavoritedFiles(updatedFavoritedFiles); // Update the state of favorited blogs
        })
        .catch((error) => {
          console.error('Error decrementing favorite count:', error);
        });
    }
  };

  // Function to increase the number of views and open the file in a new tab
  const openFile = (index) => {
    const updatedFiles = [...files];
    updatedFiles[index].views += 1;
    setFiles(updatedFiles);
   
  };


  const filteredFiles = files.filter((file) => file.fileName.toLowerCase().includes(searchTerm.toLowerCase()));


  const getFileTypeIcon = (fileType) => {
    switch(fileType) {
      case 'image':
        return <FontAwesomeIcon icon={faFileImage} style={{fontSize:"40px"}}/>;
      case 'audio':
        return <FontAwesomeIcon icon={faFileAudio} style={{fontSize:"40px"}}/>;
      case 'video':
        return <FontAwesomeIcon icon={faFileVideo} style={{fontSize:"40px"}}/>;
      case 'application/pdf':
        return   <img
      alt="..."
      src={require("assets/img/pdf.png")}
      style={{ width: "20%", height: "100%" }}
    ></img>;
        // return <FontAwesomeIcon icon={faFilePdf} style={{fontSize:"40px"}} />;
      default:
        return <FontAwesomeIcon icon={faFileAlt} style={{fontSize:"40px"}}/>;
    }
  };
  

  // Function to format file size in terms of MB/KB
  const getFileSize = (sizeInBytes) => {
    const kilobyte = 1024;
    const megabyte = kilobyte * 1024;
    if (sizeInBytes >= megabyte) {
      console.log("size of file ",sizeInBytes)
      return `${(sizeInBytes / megabyte).toFixed(2)} MB`;
    } else {
      console.log("size of file ",sizeInBytes)
      return `${(sizeInBytes / kilobyte).toFixed(2)} KB`;
    }
  };

  const toggleSort = (column) => {
    // If the same column is clicked again, toggle the sort order
    if (column === sortColumn) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      // Otherwise, set the new column and default to ascending order
      setSortColumn(column);
      setSortOrder('asc');
    }
  };

  const getSortedFiles = () => {
    const sortedFiles = [...files];
  
    sortedFiles.sort((a, b) => {
      const dateA = new Date(a.uploadDate);
      const dateB = new Date(b.uploadDate);
  
      if (sortColumn === 'item_name') {
        return sortOrder === 'asc' ? a.fileName.localeCompare(b.fileName) : b.fileName.localeCompare(a.fileName);
      } else if (sortColumn === 'views') {
        return sortOrder === 'asc' ? a.views - b.views : b.views - a.views;
      } else if (sortColumn === 'last_updated') {
        return sortOrder === 'asc' ? dateA - dateB : dateB - dateA;
      }
      return 0;
    });
  
    return sortedFiles;
  };
  


  const handleSortByClick = (column) => {
    toggleSort(column);
    setSortByDropdownOpen(false);
  };

  const viewFile = (id) => {
    // Display a confirmation dialog
    const userConfirmed = window.confirm("Do you want to view this file?");
  
    // If the user clicked OK, proceed with viewing the file
    if (userConfirmed) {
      axios.get(`https://vnsserver.onrender.com/download-file/${id}`)
        .then(response => {
          const viewLink = response.data.webViewLink;
          console.log("response link ",viewLink);
          window.open(viewLink, '_blank'); // Open the file in a new tab
  
          // Increment the view count after the view
          axios.put(`https://vnsserver.onrender.com/increment-view-file/${id}`)
            .then((response) => {
              console.log('View count incremented successfully');
              fetchFileDetails(); // Fetch updated file details after incrementing the view count
            })
            .catch((error) => {
              console.error('Error incrementing view count:', error);
            });
        })
        .catch(error => {
          console.error('Error viewing file:', error);
        });
    }
  };
  
  const downloadFile = (id) => {
    // Display a confirmation dialog
    const userConfirmed = window.confirm("Do you want to download this file?");
  
    // If the user clicked OK, proceed with the download
    if (userConfirmed) {
      axios.get(`https://vnsserver.onrender.com/download-file/${id}`)
        .then(response => {
          const downloadLink = response.data.webContentLink;
          console.log("response link ",downloadLink);
          window.location.href = downloadLink; // Trigger the download using the received URL
  
          // Increment the view count after the download
          axios.put(`https://vnsserver.onrender.com/increment-view-file/${id}`)
            .then((response) => {
              console.log('View count incremented successfully');
              fetchFileDetails(); // Fetch updated file details after incrementing the view count
            })
            .catch((error) => {
              console.error('Error incrementing view count:', error);
            });
        })
        .catch(error => {
          console.error('Error downloading file:', error);
        });
    }
  };
  
   const deleteFile = (id) => {
    // Display a confirmation dialog
    const userConfirmed = window.confirm("Are you sure you want to delete this file?");
  
    // If the user clicked OK, proceed with deleting the file
    if (userConfirmed) {
      // Send a DELETE request to the server to delete the file
      axios.delete(`https://vnsserver.onrender.com/delete-file/${id}`)
        .then((response) => {
          if (response.status === 200) {
            console.log('File deleted successfully');
            // Update the state to remove the deleted file
            const updatedFiles = files.filter((file) => file.id !== id);
            setFiles(updatedFiles);
          }
        })
        .catch((error) => {
          console.error('Error deleting file:', error);
        });
    }
  };
  
  
  function formatDate(dateString) {
    // Create a new Date object from the date string
    const date = new Date(dateString);

    // Format the date
    const options = { month: 'short', day: 'numeric', year: 'numeric' };
    const formattedDate = date.toLocaleDateString('en-US', options);

    return formattedDate;
}

  
  
  
  
  function getTimeDifference(uploadDate) {
    const now = new Date();
    const uploadedAt = new Date(uploadDate);
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
    <div style={{ justifyContent: "center", alignItems: "center", textAlign: "center" }}>
    {!isMobile &&(
      <Container style={{ maxWidth: '70%', justifyContent: "center", alignItems: "center", textAlign: "center" }}>
        <div
          style={{
            fontFamily: "Avenir LT Pro 35 Light, sans-serif",
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: '10px',
          }}
        >
          <p style={{ flex: 1, fontSize: "14px", textAlign: 'left' }}>Files & Folders</p>
          <div
            style={{
              cursor: 'pointer',
              padding: '8px',
              display: 'flex',
              alignItems: 'center',
            }}
            onClick={() => setSearchVisible(!isSearchVisible)}
          >
            <FontAwesomeIcon icon={faSearch} style={{ fontSize: "14px" }} />
          </div>
          {isSearchVisible && (
            <TextField
        label="Search by file name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
          />
          )}
       {contributor ? (
          <input
            type="file"
            style={{ display: 'none' }}
            id="fileInput"
            onChange={(e) => handleFileUpload(e.target.files[0])}
          />
        ) : null}

          
          <label htmlFor="fileInput">
            {contributor? (<Button
              as="span"
              style={{
                backgroundColor: "#899DA3",
                borderRadius: "0px",
                padding: "5px 35px",
                border: "none",
              }}
              onClick={toggleModal}
            >
              +File
            </Button>):null
}
                    
          </label>
        </div>
        {isLoading ? (
          <div>Loading Files...</div>
        ) : (
        <Table className='fileTable' style={{ fontFamily: "Avenir LT Pro 35 Light, sans-serif", fontSize: "14px", maxWidth:"100%" }}>
          <thead style={{ fontFamily: "Avenir LT Pro 35 Light, sans-serif", fontSize: "13px", fontWeight: 400 }}>
            <tr>
              <th
                style={{
                  fontWeight: "normal",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "left",
                  cursor: 'pointer',
                }}
                onClick={() => toggleSort('item_name')}
              >
                Item Name
               
              </th>
              <th
                style={{ fontWeight: "normal",textAlign:"center",  cursor: 'pointer' }}
                onClick={() => toggleSort('last_updated')}
              >
                Last Updated      <FontAwesomeIcon icon={faArrowDown} style={{ color: 'black' }} /> 

                
              </th>
              <th
                style={{
                  fontWeight: "normal",
                  cursor: 'pointer',
                  textAlign:"left",
                }}
                onClick={() => toggleSort('views')}
              >
                Views
                
              </th>
              <th style={{ fontWeight: "normal",  textAlign: 'left' }}>
                Favorites
              </th>
              <th style={{ fontWeight: "normal",  textAlign: 'left' }}>
                Contributors
              </th>
              <th
                style={{
                  fontWeight: "normal",                  
                  cursor: 'pointer',
                }}
              >
                <Dropdown
                  isOpen={sortByDropdownOpen}
                  toggle={() => setSortByDropdownOpen(!sortByDropdownOpen)}
                >
                  <DropdownToggle
                    tag="span"
                    data-toggle="dropdown"
                    aria-expanded={sortByDropdownOpen}
                  >
                    <FontAwesomeIcon icon={faBars} style={{ fontSize: "20px" }} />
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem onClick={() => handleSortByClick('item_name')}>Sort by Item Name</DropdownItem>
                    <DropdownItem onClick={() => handleSortByClick('views')}>Sort by Views</DropdownItem>
                    <DropdownItem onClick={() => handleSortByClick('last_updated')}>Sort by Last Updated</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </th>
            </tr>
          </thead>
          <tbody>
          {getSortedFiles()
            .filter(file => file.fileName.toLowerCase().includes(searchTerm.toLowerCase()))
            .map((file, index) => (
                <tr key={index} style={{ padding: '50px', justifyContent: "left" }}>
              
              <td style={{ cursor: 'pointer', color: '', fontSize: "14.5px", width: "40%", padding: "2.5% 0%", textAlign: "left" }}
              onClick={() => viewFile(file.id)}>
                {getFileTypeIcon(file.fileType)} {file.fileName}
                <div style={{ fontSize: "13px", color: "gray", paddingLeft: "21%", marginTop:"-5%" }}>{file.fileSize}</div>

              </td>

                {/* <td style={{ padding: '4%', textAlign: 'left', fontSize:"13px", width:"20%" }}>{formatDate(file.uploadDate)}{}</td> */}
              <td style={{ padding: '5% 0%', textAlign: 'center', width: "20%", fontSize:"13px" }}>
                  {formatDate(file.uploadDate)}
                </td>

                <td style={{ padding: '5% 0%', textAlign: 'center', width:"",fontSize:"13px" }}>{file.views}</td>
                <td style={{ padding: '5% 0%', textAlign: 'left', width:"",fontSize:"13px" }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <FontAwesomeIcon
                      icon={file.favorites > 0 ? faStarRegular : faStarOutline}
                      style={{ cursor: 'pointer', color: file.favorites ? 'gray' : 'inherit' }}
                      onClick={() => toggleFavorite(file.id)}
                    />
                    {file.favorites > 0 ? <span style={{ marginLeft: '5px', color: 'gray' }}>{file.favorites}</span> : null}
                  </div>
                </td>

                <td style={{ padding: '5% 0%', textAlign: 'center', width:"20%",fontSize:"13px" }}>
                  <div style={{display: 'flex', alignItems: 'center'}}>
                  <Avatar src={file.profilePicture} style={{ width: "28px", height: "28px", marginRight:"5px" }} />
                {file.contributor.split('@')[0]}

                  </div>
                </td>

                <td style={{ fontWeight: "normal", padding: '5% 2%', textAlign: 'left' }}>
                {contributor && (

                <Dropdown isOpen={dropdownOpen[index]} toggle={() => toggleDropdown(index)}>
                        <DropdownToggle tag="span">
                        <FontAwesomeIcon icon={faEllipsisV} />
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem onClick={() => downloadFile(file.id)}>Download</DropdownItem>
                          {/* <DropdownItem onClick={() => renameFile(index)}>Rename</DropdownItem> */}
                          <DropdownItem onClick={() => deleteFile(file.id)}>Delete</DropdownItem>
                        </DropdownMenu>
                      </Dropdown>
                      )}

                </td>

              </tr>
            ))}
          </tbody>
        </Table>
        )}
      <style>
        {`
        /* CSS file (e.g., styles.css) */

        @media only screen and (min-width: 767px) and (max-width: 912px) {
          .dropdown-menu {
            background-color: white;
            color: black;
          }
          .dropdown-menu:hover {
            background-color: white; /* Maintain white background color */
            color: black; /* Maintain black text color */
          }
          
          .dropdown-menu .dropdown-item:hover {
            background-color: inherit; /* Inherit the background color from the parent */
            color: inherit; /* Inherit the text color from the parent */
          }
        }
        
        @media only screen and (min-width: 280px) and (max-width: 766px) {
          .dropdown-menu {
            background-color: white;
            color: black;
          }
          .dropdown-menu:hover {
            background-color: white; /* Maintain white background color */
            color: black; /* Maintain black text color */
          }
          
          
        }
        



        
              @media only screen and (min-width: 280px) and (max-width: 766px) {
                .fileTable{
                  max-width: 90% !important;
                }
                .file-img{
                  width: 40% !important;
                }
                .file-img img {
                  width: 20%;
                }
                .file-img span {
                  display: inline;
                }
              }
        
        `
        }
      </style>
      </Container>
   )}
   {isMobile && <FileTable />}
    </div>
  );
};

export default FileUploadTable;