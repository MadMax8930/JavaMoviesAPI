import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideoSlash } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container fluid>
         <Navbar.Brand href="/" style={{color: "gold"}}>
            <FontAwesomeIcon icon={faVideoSlash} />Movie App
         </Navbar.Brand>
         <Navbar.Toggle aria-controls="navbarScroll" />
         <Navbar.Collapse>
            <Nav
               className="me-auto my-2 my-lg-0"
               style={{maxHeight: "100px"}}
               navbarScroll
            >
               <NavLink className="nav-link" to="/">Home</NavLink>
               <NavLink className="nav-link" to="/watch">Watch List</NavLink> {/* cosmetic */}
            </Nav>
            <Button variant="outline-info" className="me-2">Login</Button> {/* cosmetic */}
            <Button variant="outline-info">Register</Button> {/* cosmetic */}
         </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header;