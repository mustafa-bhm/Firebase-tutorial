import React from "react";
import { Table, Button } from "react-bootstrap";

function BooksList() {
  return (
    <div>
      <div className="mb-2">
        <Button variant="dark edit">Refresh List</Button>
      </div>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Book Title</th>
            <th>Book Author</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>
              <Button variant="secondary" className="edit">
                Edit
              </Button>
              <Button variant="danger" className="delete">
                Delete
              </Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default BooksList;
