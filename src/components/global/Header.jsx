import React from 'react'
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import "./global.css";
const Header = () => {
  return (
    <div className="main-head">
      <Navbar>
        <Container fluid>
          <Navbar.Brand>
            {"Dashboard > "} 
            {/* {title} */}
          </Navbar.Brand>
          <Navbar.Collapse className="justify-content-end">
            <Nav className="justify-content-center" activeKey="/home">
              <Button
                variant="danger"
                type="submit"
                className="px-4"
                // onClick={handleLogout}
              >
                Logout <i className="bi bi-box-arrow-in-right"></i>
              </Button>
              {/* <Nav.Item>
                <Nav.Link href="/home">Active</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-1">Link</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-2">Link</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="disabled" disabled>
                  Disabled
                </Nav.Link>
              </Nav.Item> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header