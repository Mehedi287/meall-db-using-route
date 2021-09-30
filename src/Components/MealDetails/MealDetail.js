import React, { useEffect, useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import "./MealDetails.css"

const MealDetail = () => {
    const { id } = useParams()
    console.log(id);
    const [details, setDetails] = useState({})
    useEffect(() => {

        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
            .then(res => res.json())
            .then(data => setDetails(data.meals[0]))
    }, [])
    console.log(details);
    const { idMeal, strArea, strCategory, strIngredient1, strIngredient2, strIngredient4, strMealThumb, strYoutube, strMeal } = details
    return (
        <div>

            <h3>mela details{details.idMeal}</h3>
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
                            <Link className="link" to="/details/45"> <Nav.Link className="text-white " ></Nav.Link>Meal Details</Link>

                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div className="details">
                <img src={strMealThumb} alt="" />
                <h1>{strMeal}</h1>
                <p>{strArea}</p>
                <p>{strCategory}</p>
                <p>{strIngredient1}</p>
                <p>{strIngredient4}</p>
                <p>{strIngredient2}</p>
                <p> Our Youtube link :{strYoutube}</p>
                <p>{ }</p>
            </div>
        </div>
    );
};

export default MealDetail;