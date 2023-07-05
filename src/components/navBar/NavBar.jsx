import React, { useState } from 'react';
import {Collapse,Navbar,NavbarToggler,NavbarBrand,Nav,NavItem,NavLink,UncontrolledDropdown,DropdownToggle,DropdownMenu,DropdownItem} from 'reactstrap';
import { CgProfile } from "react-icons/cg";
import Logo from "../../assests/logo.png"
import "../navBar/NavBarStyles.css"

function NavBar(args) {

    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => setIsOpen(!isOpen);
  
  
  
    return (
      <div>
        <Navbar {...args} className='shadow fixed-top' id='navBar' style={{backgroundColor:'#008186'}}>
        <NavbarBrand href="/">
        <img
          alt="logo"
          src={Logo}
          style={{
            height: 31,
            width: 184,
            marginLeft : 30
          }}
        />
      </NavbarBrand>
                  <Nav id='NavBar-lg' className='fs-6 text-white' style={{fontFamily:'Roboto'}}>
                    <NavItem className='nav-items'>
                        <NavLink active href="#" className='text-reset'>
                              Home
                        </NavLink>
                    </NavItem>
                    <UncontrolledDropdown nav inNavbar className='nav-items'>
                      <DropdownToggle nav caret className='text-reset'>
                      Features
                      </DropdownToggle>
                      <DropdownMenu right>
                        <DropdownItem>Option 1</DropdownItem>
                        <DropdownItem>Option 2</DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>Reset</DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
          
                  <NavItem className='nav-items'>
                      <NavLink href="#" className='text-reset'>
                      Blog
                      </NavLink>
                  </NavItem>
                  <NavItem className='nav-items'>
                      <NavLink href="#" className='text-reset'>
                    Shop
                      </NavLink>
                  </NavItem>
                  <NavItem className='nav-items'>
                      <NavLink href="#" className='text-reset'>
                     About
                      </NavLink>
                  </NavItem>
                  <NavItem className='nav-items'>
                      <NavLink href="#" className='text-reset'>
                     Contact
                      </NavLink>
                  </NavItem>
                  <NavbarBrand href="/" className='ms-5 me-5 mb-3 fs-2 text-white'>
                  <CgProfile/>
                   </NavbarBrand>
                  </Nav>


            {/* responsive code */}

            <NavbarToggler id='toggleBtn' className='NavBar-sm' onClick={toggle} />
                 <Collapse className='NavBar-sm' isOpen={isOpen} navbar>
                    <Nav navbar  className='me-auto fs-6 text-white' style={{fontFamily:'Roboto'}}>
                      <NavItem className='nav-items'>
                          <NavLink active href="#" className='text-reset'>
                                Home
                          </NavLink>
                      </NavItem>
                    
                        <UncontrolledDropdown nav inNavbar className='nav-items'>
                          <DropdownToggle nav caret className='text-reset'>
                          Features
                          </DropdownToggle>
                          <DropdownMenu right>
                            <DropdownItem>Option 1</DropdownItem>
                            <DropdownItem>Option 2</DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem>Reset</DropdownItem>
                          </DropdownMenu>
                        </UncontrolledDropdown>
              
                      <NavItem className='nav-items'>
                          <NavLink href="#" className='text-reset'>
                          Blog
                          </NavLink>
                      </NavItem>
                      <NavItem className='nav-items'>
                          <NavLink href="#" className='text-reset'>
                        Shop
                          </NavLink>
                      </NavItem>
                      <NavItem className='nav-items'>
                          <NavLink href="#" className='text-reset'>
                        About
                          </NavLink>
                      </NavItem>
                      <NavItem className='nav-items'>
                          <NavLink href="#" className='text-reset'>
                        Contact
                          </NavLink>
                      </NavItem>
                      <NavbarBrand id='profile-icon' href="/" className='ms-5 me-5 mb-3 fs-2 text-white'>
                      <CgProfile/>
                      </NavbarBrand>
                </Nav>  
             </Collapse>
        </Navbar>
      </div>
    );
  
  }
  

export default NavBar;