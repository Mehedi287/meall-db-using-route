import React, { useState, useEffect } from 'react';
import { Row } from 'react-bootstrap';
import Meal from '../Meal/Meal';

const Resturent = () => {

    const handleSerchMeal = (e) => {
        const serchTextValue = e.target.value;
        setSerchText(serchTextValue)
        console.log(serchTextValue);
    }
    const [serchText, setSerchText] = useState([])
    const [meals, setMeals] = useState([])
    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${serchText}`
        fetch(url)
            .then(res => res.json())
            .then(data => setMeals(data.meals))
    }, [serchText])

    return (
        <div>
            <input onChange={handleSerchMeal} placeholder="serch Your favourite food " type="text" name="" id="" />
            <Row xs={1} md={3} className="g-4">
                {
                    meals.map(meal => <Meal meal={meal}></Meal>)
                }
            </Row>



        </div>
    );
};

export default Resturent;