// Importing necessary dependencies from React and Bootstrap
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

// Functional component representing a delete confirmation modal
function DeleteConfirmationButton({ show, onHide, onConfirm }) {
  return (
    <>
      {/* Modal component for delete confirmation */}
      <Modal show={show} onHide={onHide} centered>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Deletion</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this user?</Modal.Body>
        <Modal.Footer>
          {/* Cancel button to close the modal */}
          <Button variant="secondary" onClick={onHide}>
            Cancel
          </Button>
          {/* Delete button to confirm and trigger the deletion action */}
          <Button variant="danger" onClick={onConfirm}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
} // Exporting the DeleteConfirmationButton component as the default export
export default DeleteConfirmationButton;
