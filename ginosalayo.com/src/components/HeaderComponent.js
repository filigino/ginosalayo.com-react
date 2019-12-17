import React from 'react'
import { Jumbotron, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem }
    from 'reactstrap'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        // Shorthand for <React.fragment>
        <>
            <Navbar dark expand="xs">
                <div className="container">
                    <NavbarToggler />
                    <NavbarBrand href="/">
                        <span className="fa fa-home fa-2x"></span>
                    </NavbarBrand>
                    <Nav navbar>
                        <NavItem>
                            <a className="nav-link" href="https://linkedin.com/in/ginosalayo" target="_blank" rel="noopener noreferrer">
                                <span className="fa fa-linkedin-square fa-2x icon-white"></span>
                            </a>
                        </NavItem>
                        <NavItem>
                            <a className="nav-link" href="https://github.com/filigino" target="_blank" rel="noopener noreferrer">
                                <span className="fa fa-github fa-2x icon-white"></span>
                            </a>
                        </NavItem>
                    </Nav>
                </div>
            </Navbar>
            <Jumbotron>
                <div className="container text-dark">
                    <div className="row row-content text-center">
                        <div className="col-12">
                            <img src="assets/img/headshot.png" className="img-fluid headshot" alt="Gino Salayo"/>
                        </div>
                        <div class="col-12">
                            <h1>Gino Salayo</h1>
                        </div>
                        <div class="col-12">
                            <h3>Mechatronics Engineering Graduate<br />from McMaster University</h3>
                        </div>
                    </div>
                </div>
            </Jumbotron>
            <div className="container text-dark">
                <div className="row row-content text-center">
                    <div className="col-12 col-sm">
                        <h2>
                            <Link to="/about" className="text-dark">
                                About
                            </Link>
                        </h2>
                    </div>
                    <div className="col-12 col-sm">
                        <h2>
                            <Link to="/courses" className="text-dark">
                                Courses
                            </Link>
                        </h2>
                    </div>
                    <div className="col-12 col-sm">
                        <h2>
                            <a href="assets/Resume - Gino Salayo.pdf" target="_blank" rel="noopener noreferrer" className="text-dark">
                                Resume
                            </a>
                        </h2>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header
