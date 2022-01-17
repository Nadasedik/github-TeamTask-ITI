// import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, NavDropdown,Nav,Container } from 'react-bootstrap';

import { Link } from 'react-router-dom';

const Naavbar =()=>{
    return(
<Navbar bg="light" expand="lg">
  <Container>
    
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="/Movies">Movies</Nav.Link>
        {/* <Nav.Link to="/Form">Register</Nav.Link> */}
        <li className="nav-item">
                <Link className="nav-link" to="/Form">Register</Link>
              </li>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    )
}

export default Naavbar;