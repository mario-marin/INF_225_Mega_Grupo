import React from "react";
import {
    Collapse,
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    CardDeck
  } from 'reactstrap';


const NavigationComponent = () => {

    return(
        <div>
            <Navbar color ="dark"  expand="md"> 
                <NavbarBrand href="/" color='white'> Home </NavbarBrand>
                <Collapse navbar>
                    <Nav className = "mr-auto" navbar>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle color='dark' nav caret>
                                Salas
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem href = "/salas">
                                Lista
                                </DropdownItem>
                                <DropdownItem href = "/salasForm">
                                Añadir
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    )
}

export default NavigationComponent;