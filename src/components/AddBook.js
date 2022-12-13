import { async } from "@firebase/util";
import React, { useState, useEffect } from "react";
import { Form, InputGroup, Button, ButtonGroup, Alert } from "react-bootstrap";
import BookDataService from "../services/book.services";

function AddBook({ id, setBookId }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [status, setStatus] = useState("");
  const [flag, setFlag] = useState(true);
  const [message, setMessage] = useState({ error: false, msg: "" });
  const [cover, setCover] = useState("");

  const handlSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    if (title === "" || author === "") {
      setMessage({ error: true, msg: "No empty fields are allowed" });
      return;
    }
    const newBook = {
      title: title,
      author: author,
      status: status,
      cover: cover,
    };

    // adding the new book to firbase collection
    try {
      // to check if adding new book or updating existing one if id exists;
      if (id !== undefined && id !== "") {
        // update book
        await BookDataService.updateBook(id, newBook);
        setBookId = "";
        setMessage({ error: false, msg: " book has been updated !" });
      } else {
        // create new book
        await BookDataService.addBooks(newBook);
        setMessage({ error: false, msg: "new book has been added" });
      }
    } catch (err) {
      setMessage({ error: true, msg: err.message });
    }

    setAuthor("");
    setTitle("");
    setCover("");
    setStatus("");
  };

  // to edit book
  // => to fetch data for particular book
  const editHandler = async () => {
    setMessage("");
    try {
      const bookSnap = await BookDataService.getBook(id);
      setTitle(bookSnap.data().title);
      setAuthor(bookSnap.data().author);
      setStatus(bookSnap.data().status);
      setCover(bookSnap.data().cover);
    } catch (err) {
      setMessage({ error: true, msg: err.message });
    }
  };

  useEffect(() => {
    console.log("to edit ", id);
    if (id !== undefined && id !== "") {
      editHandler();
    }
  }, [id]);

  return (
    <>
      <div className="p-4 box">
        {message?.msg && (
          <Alert
            variant={message?.error ? "danger" : "success"}
            dismissible
            onClose={() => setMessage("")}
          >
            {message?.msg}
          </Alert>
        )}
        <Form onSubmit={handlSubmit}>
          <Form.Group className="mb-3" controlId="formBookTitle">
            <InputGroup>
              <Form.Control
                type="text"
                placeholder="Book Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </InputGroup>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBookAuthor">
            <InputGroup>
              <Form.Control
                type="text"
                placeholder="Book Author"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
              />
            </InputGroup>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBookAuthor">
            <InputGroup>
              <Form.Control
                type="text"
                placeholder="Book cover link"
                value={cover}
                onChange={(e) => setCover(e.target.value)}
              />
            </InputGroup>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBookStatus">
            <InputGroup>
              <Form.Control
                type="text"
                placeholder="Have you read this book (Yes/No)"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              />
            </InputGroup>
          </Form.Group>

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
