import "./App.css";
import { Container, Navbar, Row, Col } from "react-bootstrap";
import AddBook from "./components/AddBook";
import BooksList from "./components/BooksList";

function App() {
  // console.log(process.env.REACT_APP_authDomain);
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
            <AddBook />
          </Col>
        </Row>
        <Row>
          <Col>
            <BooksList />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
