import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Category.css';
import axios from 'axios';

function Category() {

    const [categoryData, setCategoryData] = useState([]);

    useEffect(() => {
        axios.get("https://www.themealdb.com/api/json/v1/1/categories.php")
        .then((response) => {
            setCategoryData(response.data.categories);
        })
    }, [])

    return (
        <div className="category-cards">
            {
                categoryData?.map((data) => {
                    return (
                        <article className="category-card">
                            <img src={data.strCategoryThumb} alt="Food" />
                            <div className="category-text">
                                <h3>{data.strCategory}</h3>
                                {data.strCategoryDescription.substring(0,75)}...
                                <Link to={{ pathname: '/subcategory', category: data.strCategory, description: data.strCategoryDescription }}><button className="category-card-button">View Dishes</button></Link>
                            </div>
                        </article>
                    )
                })
            }
        </div>
    )
}

export default Category
