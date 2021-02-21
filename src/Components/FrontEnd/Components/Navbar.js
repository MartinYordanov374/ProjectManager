import React from 'react'
import {Navbar, NavbarBrand, Nav} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../SCSS/navbarStyling.css'
function NavbarComponent() {
    return (
        <Navbar className='navbar'>
                <NavbarBrand className='navbarBrand'>
                    ProjectManager
                </NavbarBrand>
                <Nav>
                <Nav.Link href='/projects'>
                        <Nav.Item className='navbarLink'>
                           Projects
                        </Nav.Item>
                    </Nav.Link>
                    <Nav.Link href='/Add'>
                        <Nav.Item className='navbarLink'>
                            Add Project
                        </Nav.Item>
                    </Nav.Link>
                </Nav>
        </Navbar>
    )
}

export default NavbarComponent
