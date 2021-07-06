import React from 'react';
import { Container, Row, Col, Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';

const Header = () => {
    return (
        <header>
            <Navbar bg="dark"  variant="dark" className='px-3' expand="md" collapseOnSelect>
                <Container>
                    <Navbar.Brand href="/">Pro Shop</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                        <Nav.Link href="/cart">Cart</Nav.Link>
                        <Nav.Link href="/login">Sign In</Nav.Link>
                        <Nav.Link href="#home">Site Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                        <NavDropdown title="Templates by CMS" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/contao/">Contao</NavDropdown.Item>
                            <NavDropdown.Item href="/cmsms/">CMS Made Simple</NavDropdown.Item>
                            <NavDropdown.Item href="/wordpress/">WordPress</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                        </Nav>
                        
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            
            <Container>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                </Form>            
            </Container>
        </header>
    )
}

export default Header
