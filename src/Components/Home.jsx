import React from 'react';
import Banner from './Banner';
import AllFood from './AllFood';
import { useState } from 'react';
import Facilities from './Facilities';
import Header from './Header';

const Home = (props) => {
    const [inputData, setInputData] = useState('Breakfast');
    const handleEven=(e)=>{
        const value = e.target.value;
        setInputData(value);
    }
    return (
        <div>
             <Header cart={props.cart}></Header> 
            <Banner></Banner>
            <div className="navber text-center">
                <input onClick={handleEven} type="button"  value="Breakfast"/>
                <input onClick={handleEven} type="button"  value="Lunch"/>
                <input onClick={handleEven} type="button"  value="Dinner"/>
            </div>
            <AllFood inputData={inputData}></AllFood>
            <Facilities></Facilities>
            
        </div>
    );
};

export default Home;