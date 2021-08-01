import React from 'react';
import FoodItem from './Components/FoodItem';
import foodItems from './fakeData/fakeData';

const AllFood = () => {
    const allfood = foodItems;
    return (
        <div className='container'>
            <div className="row">
                {
                    allfood.map((food,index) => {
                        <FoodItem></FoodItem>
                    })
                }
               
            </div>
        </div>
    );
};

export default AllFood;