import React, { useState, useEffect } from 'react';

const Resturent = () => {

    const [serchText, setSerchText] = useState([])
    const [meals, setMeals] = useState([])
    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${serchText}`
        fetch(url)
            .then(res => res.json())
            .then(data => setMeals(data.meals))
    }, [serchText])

    const handleSerchMeal = (e) => {
        const serchTextValue = e.target.value;
        setSerchText(serchTextValue)
        console.log(serchTextValue);
    }
    return (
        <div>
            {
                meals.map(meal => console.log(meal))
            }
            <input onChange={handleSerchMeal} placeholder="serch Your favourite food " type="text" name="" id="" />

        </div>
    );
};

export default Resturent;