import Button from "@restart/ui/esm/Button";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useFirebase from "../Firebase/useFirebase";
import "./Header.css";

const Header = () => {
  const { user, logOut } = useFirebase();

  return (
    <>
      <div className="social-nav">
        <div className="mx-5 p-1 ">
          <a href="" className="text-white me-5">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="" className="text-white me-4">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="" className="text-white me-4">
            <i className="fab fa-google"></i>
          </a>
          <a href="" className="text-white me-4">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="" className="text-white me-4">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>

      <Navbar
        collapseOnSelect
        expand="lg"
        style={{ backgroundColor: "#003F63" }}
        variant="dark"
      >
        <Container className="nav-align">
          <Navbar.Brand href="#home">Travel Hoo</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="m-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/dailyNews">
                Daily News
              </Nav.Link>
              <Nav.Link as={Link} to="/hotel">
                Hotel
              </Nav.Link>
              <Nav.Link as={Link} to="/destination">
                Destination
              </Nav.Link>
            </Nav>
            <Nav>
              {user.email ? (
                <>
                  <Nav.Link as={Link} to="/shareExperience">
                    My Experience
                  </Nav.Link>
                  <Button
                    style={{
                      borderRadius: "10px",
                      border: "none",
                      margin: "0 10px",
                    }}
                    onClick={logOut}
                    variant="light"
                  >
                    Logout
                  </Button>
                  <Navbar.Text>
                    <a style={{ textDecoration: "none" }} href="#login">
                      {user?.displayName}
                    </a>
                  </Navbar.Text>
                </>
              ) : (
                <>
                  <Nav.Link as={Link} to="/signup">
                    Signup
                  </Nav.Link>
                  <Nav.Link as={Link} to="/login">
                    Login
                  </Nav.Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
