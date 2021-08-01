import React from 'react';
import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import foodItems from './../fakeData/fakeData';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Button from '@material-ui/core/Button';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Header from './Header';

const FoodDetails = (props) => {
    let { foodId } = useParams();
    const [value,setValue ]= useState(1);
    const [button,setButton] = useState(true);
    const foodRetrive = foodItems.find(food => food.id === foodId);

   const addFood = (toAdded) =>{
       props.addToCart(toAdded);
   }
    const itemAdd = ()=>{
        setValue(value + 1);
        foodRetrive.quentity= value + 1;
        setButton(false);
    }
    const itemDel = ()=>{
        setValue(value - 1);
        foodRetrive.quentity= value - 1 ;
        if(value <= 1){
            setButton(true);
        }
    }
    return (
        <>
            <Header cart={props.cart}></Header>
            <div className="container">
               <Link style={{color:'gray'}} to='/home'> <ArrowBackIcon className='mt-4' /></Link>
                <div className="row">
                    <div className="col-md-6">
                        <div className="w-75 mt-5" style={{marginLeft:'30px'}}>
                            <h2 className='mb-4'>{foodRetrive.name}</h2>
                            <p style={{color:'gray'}}>Food is any substance[1] consumed to provide nutritional support for an organism. Food is usually of plant or animal origin, and contains essential nutrients, such as carbohydrates, fats, proteins, vitamins, or minerals.</p>
                            <div className="d-flex">
                                <h1 className='mb-1'>${foodRetrive.taka}</h1>
                                <div class="card-controller btn">
                                    <button onClick={itemDel} class="btn" disabled={button}>-</button>
                                        {value}
                                    <button onClick={itemAdd} class="btn">+</button>
                                </div>
                            </div>
                            <Button onClick={()=>addFood(foodRetrive)} variant="contained" color="secondary" style={{borderRadius:'50px',marginTop:'20px'}}><ShoppingCartIcon className="mx-2" />Add</Button>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <img style={{width:'80%'}} src={foodRetrive.image} alt="" />
                    </div>
                </div>

            </div>
        </>
    );
};

export default FoodDetails;