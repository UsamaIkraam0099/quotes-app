import React from "react";

// Others
import { Input } from "../../core";
import { Modal, Button } from "react-bootstrap";

const index = ({ show, form, handleClose, handleInputChange }) => {
  return (
    <Modal
      show={show}
      onHide={() => handleClose(0)}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>Add New Quote</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Input
          form={form}
          type="quote"
          name="quote"
          onChange={handleInputChange}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={() => handleClose(1)}>Add</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default index;
