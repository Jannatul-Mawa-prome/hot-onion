import React from 'react';

const ReviewItem = (props) => {
    return (
        <div className="row reviewItem">
            <div className="col-md-4">
                <img  src={props.cart.image} alt="" />
            </div>
            <div className="col-md-4">
                <h6>{props.cart.name}</h6>
                <h4 style={{color:'#f50057'}}>${props.cart.taka}</h4>
                <span style={{color:'gray'}}>Delivary free</span>
            </div >
            <div className="col-md-4">
                <h3 style={{marginTop:'25px'}}>{props.cart.quentity}</h3><sub>Pack</sub>
            </div>
        </div>
    );
};

export default ReviewItem;