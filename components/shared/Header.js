import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';

import auth0Client from '../../services/auth0';

const BsNavLink = props => <NavLink className='port-navbar-link'
    href={props.route}>{props.text}</NavLink>

const Login = () => <NavLink onClick={auth0Client.login}
    className='port-navbar-link'
    href='#'>Login</NavLink>

const Logout = () => <NavLink onClick={auth0Client.logout}
    className='port-navbar-link'
    href='#'>Logout</NavLink>

const Header = (props) => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => setIsOpen(!isOpen)
    debugger
    const { user, isAuthenticated } = props.auth
    return (
        <div>
            <Navbar className='port-navbar port-default absolute' color="transparent" dark expand="md">
                <NavbarBrand className='port-navbar-brand' href="/">{user.name}</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem className='port-navbar-item'>
                            <BsNavLink route='/' text='Home' />
                        </NavItem>
                        <NavItem className='port-navbar-item'>
                            <BsNavLink route='/about' text='About' />
                        </NavItem>
                        <NavItem className='port-navbar-item'>
                            <BsNavLink route='/portfolios' text='Portfolio' />
                        </NavItem>
                        <NavItem className='port-navbar-item'>
                            <BsNavLink route='/blogs' text='Blogs' />
                        </NavItem>
                        <NavItem className='port-navbar-item'>
                            <BsNavLink route='/cv' text='Cv' />
                        </NavItem>
                        {!isAuthenticated &&
                            <NavItem>
                                <Login />
                            </NavItem>
                        }
                        {isAuthenticated &&
                            <NavItem>
                                <Logout />
                            </NavItem>
                        }                       
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default Header