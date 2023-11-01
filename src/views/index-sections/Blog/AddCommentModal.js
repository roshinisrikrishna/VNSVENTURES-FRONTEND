import React from 'react';
import { Modal, Button, TextArea } from 'your-preferred-ui-library'; // Import appropriate UI components

const AddCommentModal = ({ isOpen, onClose, onSubmitComment }) => {
  const [comment, setComment] = useState('');

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = () => {
    onSubmitComment(comment);
    setComment('');
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h2>Add Comment</h2>
      <TextArea value={comment} onChange={handleCommentChange} />
      <Button onClick={handleSubmit}>Submit</Button>
    </Modal>
  );
};

export default AddCommentModal;
