import React from 'react';
import FoodItem from './FoodItem';
import foodItems from './../fakeData/fakeData';
import { Link } from 'react-router-dom';

const AllFood = (props) => {
    
    const catagoriesFood = foodItems.filter(food => props.inputData === food.category);
    console.log(catagoriesFood);
    return (
        <div className='container'>
            <div className="row">
            {
                catagoriesFood.map( food =>
                <div className="col-md-4  text-center my-4"> 
                    <Link style={{textDecoration:'none',color:'black'}} to={'/details/'+ food.id }><FoodItem food={food} /></Link>
                </div>)
            }
               
            </div>
        </div>
    );
};

export default AllFood;