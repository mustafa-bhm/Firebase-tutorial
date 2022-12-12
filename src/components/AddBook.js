import React, { useState } from "react";
import { Form, InputGroup, Button, ButtonGroup } from "react-bootstrap";

function AddBook() {
  const [status, setStatus] = useState("Available");
  const [flag, setFlag] = useState(true);
  return (
    <>
      <div className="p-4 box">
        <Form>
          <Form.Group className="mb-3" controlId="formBookTitle">
            <InputGroup>
              <InputGroup.Text id="formBookTitle">B</InputGroup.Text>
              <Form.Control type="text" placeholder="Book Title" />
            </InputGroup>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBookAuthor">
            <InputGroup>
              <InputGroup.Text id="formBookAuthor">A</InputGroup.Text>
              <Form.Control type="text" placeholder="Book Author" />
            </InputGroup>
          </Form.Group>
          <ButtonGroup aria-label="Basic example" className="mb-3">
            <Button disabled={flag} variant="success">
              Available
            </Button>
            <Button variant="danger" disabled={!flag}>
              Not Available
            </Button>
          </ButtonGroup>
          <div className="d-grid gap-2">
            <Button variant="primary" type="Submit">
              Add/ Update
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
}

export default AddBook;
