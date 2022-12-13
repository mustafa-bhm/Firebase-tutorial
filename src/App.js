import "./App.css";
import { Container, Navbar, Row, Col } from "react-bootstrap";
import AddBook from "./components/AddBook";
import BooksList from "./components/BooksList";
import { useState } from "react";

function App() {
  const [bookId, setBookId] = useState("");
  const getBookIdHandler = (id) => {
    setBookId(id);
  };
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark" className="header">
        <Container>
          <Navbar.Brand href="#home"> Library with Firebase</Navbar.Brand>
        </Container>
      </Navbar>
      <Container style={{ width: "600px" }}>
        <Row>
          <Col>
            <AddBook id={bookId} setBookId={setBookId} />
          </Col>
        </Row>
        <Row>
          <Col>
            <BooksList getBookId={getBookIdHandler} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
