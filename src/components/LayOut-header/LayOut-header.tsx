import "./layOut-header.scss";
import LogoHeader from "./Logo-header/Logo-header";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

const LayOutHeader = () => {
  return (
    <>
      <Container>
        <Navbar expand="lg">
          <Container>
            <Navbar.Brand href="#">
              <LogoHeader />
            </Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/game">Game</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </Container>
    </>
  );
};

export default LayOutHeader;
