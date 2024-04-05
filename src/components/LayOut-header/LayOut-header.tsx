import "./layOut-header.scss";
import LogoHeader from "./Logo-header/Logo-header";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

const LayOutHeader = () => {
  return (
    <>
      <Navbar expand="lg" bg="dark" data-bs-theme="dark" className="mb-3">
        <Container fluid>
          <Navbar.Brand href="#">
            <LogoHeader />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/films">Films</Nav.Link>
              <Nav.Link href="/starships">Starships</Nav.Link>
              <Nav.Link href="/vehicles">Vehicles</Nav.Link>
              <Nav.Link href="/species">Species</Nav.Link>
              <Nav.Link href="/planets">Planets</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default LayOutHeader;
