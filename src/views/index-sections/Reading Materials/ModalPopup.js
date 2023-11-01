import React, { useState, useEffect } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import SignUp from '../SignUp';
import FileUploadTable from './FileUpload';

const ModalPopup = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [contributorEmail, setContributorEmail] = useState('');

  const openModal = () => {
    setModalOpen(true);
  };

  // Handle user sign-in with Gmail
  const handleSignIn = (email) => {
    setModalOpen(false);
    setContributorEmail(email);
  };

  return (
    <>
      <Button onClick={openModal}>+File</Button>

      <Modal isOpen={modalOpen} toggle={() => setModalOpen(!modalOpen)}>
        <ModalHeader toggle={() => setModalOpen(!modalOpen)}></ModalHeader>
        <ModalBody>
          <SignUp onSignIn={handleSignIn} />
        </ModalBody>
        <ModalFooter>
          <Button color="info" onClick={() => setModalOpen(false)}>
            Close
          </Button>
        </ModalFooter>
      </Modal>

      <FileUploadTable contributorEmail={contributorEmail} setContributorEmail={setContributorEmail} />

    </>
  );
};

export default ModalPopup;
