import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    // UncontrolledDropdown,
    // DropdownToggle,
    // DropdownMenu,
    // DropdownItem,
    // NavbarText
} from 'reactstrap';

class nav extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpen: false
        }
        this.toggle = this.toggle.bind(this);
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render(){
        return(
            <div>
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/Home">Perpustakaan</NavbarBrand>
                <NavbarToggler />
                <Collapse navbar>
                <Nav className="mr-auto" navbar>
                    <NavItem>
                    <NavLink href="/Home">Home</NavLink>
                    </NavItem>
                    <NavItem>
                    <NavLink href="/Manage_Data">Manage Buku</NavLink>
                    </NavItem>
                    {/* <NavItem>
                    <NavLink href="/Add">Add Buku</NavLink>
                    </NavItem> */}
                    {/* <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                        Options
                    </DropdownToggle>
                    <DropdownMenu right>
                        <DropdownItem>
                        Option 1
                        </DropdownItem>
                        <DropdownItem>
                        Option 2
                        </DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>
                        Reset
                        </DropdownItem>
                    </DropdownMenu>
                    </UncontrolledDropdown> */}
                </Nav>
                {/* <NavbarText>Simple Text</NavbarText> */}
                </Collapse>
            </Navbar>
            </div>
            
            // <Navbar color="faded" light expand="md" color="red">
            //     <NavbarBrand href="/Dashboard">Perpustakaan</NavbarBrand>
            //     <NavbarToggler onClick={this.toggle} />
            //     <Collapse isOpen={this.state.isOpen} navbar>
            //         <Nav className="ml-auto" navbar>
            //             <NavItem>
            //                 <NavLink href="/Buku">Home</NavLink>
            //             </NavItem>
            //             <NavItem>
            //                 <NavLink href="/Manage_Data">Manage Data</NavLink>
            //             </NavItem>
            //             <NavItem>
            //                 <NavLink href="/Add">Tambah Data</NavLink>
            //             </NavItem>
            //         </Nav>
            //     </Collapse>
            // </Navbar>
        )
    }
}

export default nav