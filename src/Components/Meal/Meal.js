import React from 'react';
import { Card, Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';

const Meal = (props) => {
    const { strMeal, strMealThumb, strInstructions, idMeal } = props.meal

    const url = `/details/${idMeal}`
    const history = useHistory();
    const handleDetails = () => {
        history.push(url)
    }
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
                        <button onClick={handleDetails}>show Details</button>
                    </Card.Body>
                </Card>
            </Col>

        </>
    );
};

export default Meal;