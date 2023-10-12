import React from "react";

// Others
import { Input } from "../../core";
import { Modal, Button, Spinner } from "react-bootstrap";

const index = ({ show, form, visible, handleClose, handleInputChange }) => {
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
          type="text"
          name="name"
          form={form}
          visible={visible}
          onChange={handleInputChange}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={() => handleClose(1)} disabled={visible}>
          Add
          {visible && (
            <Spinner
              as="span"
              animation="border"
              size="sm"
              role="status"
              aria-hidden="true"
              style={{ marginLeft: "1rem" }}
            />
          )}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default index;
