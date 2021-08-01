import React from 'react';
import { useState } from 'react';
import ReviewItem from './ReviewItem';
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const Review = (props) => {
    const [order,setOrder] = useState('none');
    const [addressData, setAddressData] = useState({
        address:'',
        road:'',
        flat:''
    })
    const strTotle = props.cart.reduce((tol,food) => tol + food.taka*food.quentity,0);
    const subTotle = parseInt(strTotle);
    let tex=0;
    if(subTotle > 50){
        tex = tex + (subTotle % 5);
    }
     if(subTotle > 40){
        tex = tex + (subTotle % 4);
    }
     if(subTotle > 30){
        tex = tex + (subTotle % 3);
    }
     if(subTotle > 20){
        tex = tex + (subTotle % 2);
    }
     if (subTotle < 20){
        tex = 0;
    }
    const delivaryFee = 2;
    const totle = subTotle + tex + delivaryFee


    const handleEven =(e) =>{
        const newData = {...addressData};
        newData[e.target.name]= e.target.value;
        setAddressData(newData)
    }
    const orderPlace = (e) =>{
        e.preventDefault();
        setOrder('block');
        console.log(props.cart);
    }
    return (
        <div className='review'>
            <div className="container">
            <Link style={{color:'gray'}} to='/home'> <ArrowBackIcon className='mt-4' /></Link>
                <div className="row">
                    <div className="col-md-7">
                        <div className="delivary w-75 m-auto">
                            <h3  style={{margin:'40px 0 30px 0',paddingBottom:'10px', borderBottom:'1px solid gray' }}>Edit Delivary Details</h3>
                            <form onSubmit={orderPlace} action="">
                                <input value={addressData.address} name="address" onChange={handleEven} type="text" placeholder="Delivar Place..."  required />
                                <input value={addressData.road} name="road" onChange={handleEven} type="text" placeholder="Road No..." required />
                                <input value={addressData.flat} name="flat" onChange={handleEven} type="text" placeholder="Flat,suite or floor..." required />
                                <input  type="text" placeholder="Business Name..." />
                                <textarea type="text" placeholder="Add delivery..." />
                                <input  style={{background:'#f50057',color:'white'}} type="submit" value="Save & continue" />
                            </form>
                        </div>
                    </div>
                    <div className="col-md-5 orderSummery" style={{display:`${order}`}}>
                        <div className="order" style={{marginTop:'40px'}}>
                            <h5>From <b>Gulsan Plaza Restrurant</b></h5>
                            <h6 className="my-3">Arrivel in 20-30 min</h6>
                            <h5>To <b>{addressData.flat} Flat, {addressData.road} Road, {addressData.address}</b></h5>
                            {props.cart.map(item=><ReviewItem cart={item}></ReviewItem>)}
                        </div>
                        <div className="orderDetails mt-5">
                            <tr>
                                <td>SubTotle:</td>
                                <td>${Number(subTotle).toFixed(2)}</td>
                            </tr>
                            <tr>
                                <td>Tax: </td>
                                <td> ${Number(tex).toFixed(2)}</td>
                            </tr>
                            <tr>
                                <td>Delivary Fee:</td>
                                <td>${Number(delivaryFee).toFixed(2)}</td>
                            </tr>
                            <tr>
                                <td>Totle:</td>
                                <td> ${Number(totle).toFixed(2)}</td>
                            </tr>
                            
                            <input style={{width:'50%',background:'#1abc9c', 
                            marginTop:'20px',border:'none',padding:'8px 0',color:'white',borderRadius:'5px'}} 
                            type="submit" value="Place Order" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;