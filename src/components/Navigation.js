import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from "styled-components";
import logo from "./logotype2.png"
// import 'bootstrap/dist/css/bootstrap.min.css';


const Styles = styled.div`
  a,
  .navbar-brand,
  .navbar-nav .nav-link {
    color: gray;
    word-spacing: 2px;
    padding: 3px;
    text-decoration: none;
    &:hover {
      text-decoration: none;
    }
  }
`;
function Navigation() {
    return (
      <>
      <Styles>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            <img src={logo} alt="Good" width="70px"/>
          </Navbar.Brand>
          <Navbar.Collapse>
            <Nav>
              <Nav.Link>
                <Link to="/">
                  HOME
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/thehut">
                  THE HUT
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/thearea">
                  THE AREA
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/booking">
                  BOOKING
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/aboutus">
                  ABOUT US
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>

        </Container>
      </Navbar>
      </Styles>
      </>
    );
}

export default Navigation;