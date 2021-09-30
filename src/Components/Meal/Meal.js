import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const Meal = (props) => {
    const { strMeal, strMealThumb, strTags, strInstructions } = props.meal
    console.log(props.meal);
    return (

        <>
            <Col>
                <Card>
                    <Card.Img variant="top" src={strMealThumb} />
                    <Card.Body>
                        <Card.Title> {strMeal}</Card.Title>
                        <Card.Text>
                            {strInstructions}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>

        </>
    );
};

export default Meal;