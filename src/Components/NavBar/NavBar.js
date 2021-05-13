import React from "react";
import "../NavBar/NavBar.css";
import logo from "../img/logo.png";
import { Container, Nav, Navbar, NavDropdown, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
function NavBar() {
  return (
    <Navbar className="bg-color" expand="lg">
      <Container>
        <Row className="NavRow">
          <Col lg={6} md={6} sm={6}>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                {false ? (
                  <Link to="">تسجيل الخروج</Link>
                ) : (
                  <NavDropdown title="سجل الان" id="basic-nav-dropdown">
                    <NavDropdown.Item>
                      <Link to="/Signup_Craftsman">صنايعي</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">
                      <Link to="/Signup_customer">عميل</Link>
                    </NavDropdown.Item>
                  </NavDropdown>
                )}

                <Nav.Link>
                  <Link to="/Contact">تواصل معانا</Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/About">نبذه عنا</Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/services">الخدمات</Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/">الرئيسية</Link>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Col>
          <Col className="padding-0" lg={6} md={6} sm={6}>
            <Navbar.Brand>
              <Link to="/">
                <span>
                  صنايعي خبره
                  <img src={logo} width="80px" alt="" />
                </span>
              </Link>
            </Navbar.Brand>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
}

export default NavBar;
