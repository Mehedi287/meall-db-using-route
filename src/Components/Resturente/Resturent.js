import React, { useState, useEffect } from 'react';
import { Container, Nav, Navbar, NavDropdown, Row } from 'react-bootstrap';
import Meal from '../Meal/Meal';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Resturent.css"

const Resturent = () => {


    const [serchText, setSerchText] = useState('a')
    const [meals, setMeals] = useState([])
    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${serchText}`
        fetch(url)
            .then(res => res.json())
            .then(data => setMeals(data))
    }, [serchText])
    const handleSerchMeal = (e) => {
        const serchTextValue = e.target.value;
        setSerchText(serchTextValue)

    }
    console.log();

    return (
        <div><Navbar className="w-75 mt-4 mx-auto rounded " bg="dark" expand="lg">
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
                        <Link className="link" to="/details/45"> <Nav.Link className="text-white " ></Nav.Link>Meal Details</Link>

                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
            <input onChange={handleSerchMeal} placeholder="serch Your favourite food " type="text" className="w-50 mt-4" name="" id="" />
            <Row xs={1} md={3} className="g-4 mt-4">
                {
                    serchText.length > 0 ? meals.meals?.map(meal => <Meal meal={meal} key={meal.idMeal}></Meal>) : <h2>this result not found</h2>

                }
            </Row>
        </div>
    );
};

export default Resturent;