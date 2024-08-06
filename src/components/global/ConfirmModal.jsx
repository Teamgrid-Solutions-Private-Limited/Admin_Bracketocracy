import React from "react";
import { Modal, Button } from "react-bootstrap";

const ConfirmModal = ({
  showConfirm,
  handleCloseConfirm,
  handleOKConfirm,
  actionButton,
  confirmDetails,
}) => {
  return (
    <Modal
      show={showConfirm}
      onHide={handleCloseConfirm}
      backdrop="static"
      keyboard={false}
      size="md"
    >
      <Modal.Header>
        <Modal.Title className="modal-title">
          {confirmDetails.title ? confirmDetails.title : "Please Confirm !"}
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        {confirmDetails.text ? confirmDetails.text : "Are you Sure?"}
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={handleCloseConfirm}>
          Cancel
        </Button>

        <Button variant="danger" onClick={handleOKConfirm}>
          {actionButton}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ConfirmModal;
