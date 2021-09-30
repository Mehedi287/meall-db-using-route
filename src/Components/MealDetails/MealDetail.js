import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MealDetail = () => {
    return (
        <div>
            <h3>mela details</h3>
            <Navbar className="w-75 mt-4 mx-auto rounded " bg="dark" expand="lg">
                <Container className="w-75 " fluid>

                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >

                            <Link className="link" to="/home"><Nav.Link className="text-white " ></Nav.Link>Home</Link>
                            <Link className="link" to="/resturent"><Nav.Link className="text-white " ></Nav.Link>Meals</Link>
                            <Link className="link" to="/details"> <Nav.Link className="text-white " ></Nav.Link>Meal Details</Link>

                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default MealDetail;