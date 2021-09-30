import React from 'react';
import { Card, Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Meal = (props) => {
    const { strMeal, strMealThumb, strInstructions } = props.meal
    console.log(props.meal);
    return (

        <>

            <Col>
                <Card className="rounded">
                    <Card.Img variant="top" className="rounded" src={strMealThumb} />
                    <Card.Body>
                        <Card.Title> {strMeal}</Card.Title>
                        <Card.Text>
                            {strInstructions}
                        </Card.Text>
                        <button to="/details">show Details</button>
                    </Card.Body>
                </Card>
            </Col>

        </>
    );
};

export default Meal;