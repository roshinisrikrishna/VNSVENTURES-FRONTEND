import React, { useState } from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
} from "reactstrap";

const SearchModal = ({ isOpen, toggleSearchModal }) => {
  const [searchText, setSearchText] = useState("");

  return (
    <Modal isOpen={isOpen} toggle={toggleSearchModal} fullscreen style={{ 
      fontFamily: "Museo Sans Rounded, sans-serif",
      position: "fixed",maxWidth: "1400px", width: "100%",
       height: "100%", backgroundColor: "rgba(0, 0, 0, 0.9)" }}>
    
    <ModalBody className="d-flex flex-column align-items-center justify-content-center" style={{ backgroundColor: "rgba(0, 0, 0)", height: "80vh", color: "white", overflowY: "auto", marginTop: "-50px" }}>
        {/* Close button */}
        <button
          className="close-button"
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            zIndex: 1,
            background: "transparent",
            border: "none",
            cursor: "pointer",
            transition: "color 0.3s",
            fontSize: "32px",
          }}
          onClick={toggleSearchModal}
        >
          <span>&times;</span>
        </button>

        {/* Styled input field */}
        <div
          style={{
            position: "relative",
            width: "100%",
            maxWidth: "950px",
            borderBottom: "1px solid #ccc",
            marginBottom: "10px",
          }}
        >
          <input
            type="text"
            placeholder="Search" // Placeholder text
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            style={{
              width: "100%",
              textAlign: "center",
              fontSize: "55px",
              fontWeight: 400,
              color: "#FFF", // Text color
              border: "none",
              background: "transparent", // Making the background transparent
              outline: "none", // Removing the default outline
            }}
          />
          {searchText && ( // Render close icon only when there's text
            <span
              className="close-icon"
              style={{
                position: "absolute",
                top: "50%",
                right: "10px",
                transform: "translateY(-50%)",
                cursor: "pointer",
                color: "blue", 
                fontSize: "30px",
              fontFamily: 'Museo Sans Rounded'
              }}
              onClick={() => setSearchText("")} // Clear text on click
            >
              &times;
            </span>
          )}
        </div>
      </ModalBody>
      <style>
        {`
          input::placeholder {
            color: #a3a3a3;
            font-family: 'Museo Sans Rounded';
          }
        `}
      </style>
    </Modal>
  );
};

export default SearchModal;
