import React, {useState, useEffect} from 'react'
import './Subcategory.css';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

function Subcategory() {

    const data = useLocation();
    const [subData, setSubData] = useState([]);

    useEffect(() => {
        axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${data.category}`)
        .then((response) => {
            setSubData(response.data.meals);
        })
    }, [])

    const getPriceData = (id, max=100000, min=90000) => {
        const price = id / (Math.random() * (max - min));
        return price.toFixed(2);
    }

    const addToCart = () => {
        alert("Added to cart!");
    }

    return (
        <div className="subcategory-cards">
            {
                subData.map((data) => {
                    return (
                        <article className="subcategory-card">
                            <img src={data.strMealThumb} alt="Food type"/>
                            <div className="subcategory-text">
                                <h3>{data.strMeal}</h3><br />${getPriceData(data.idMeal)}
                            </div>
                            <button onClick={() => addToCart(data)}>Add to Cart</button>
                        </article>
                    )
                })
            }
            <h2 className="subcategory-title">{data.description}</h2>
        </div>
    )
}

export default Subcategory
