import React from 'react';

const FoodItem = (props) => {
    const {image,id,name,catagory,taka} = props.food;
    console.log(image);
    return (
        
            <div className="food p-4 mx-2" >
                <img style={{width:'60%',margin:'auto'}} src={image} alt="" />
                <h5 className='mt-4'> {name}</h5>
                <p style={{color:'gray'}}>How you dream About Our Future</p>
                <h1>$ {taka}</h1>
            </div>
        
    );
};

export default FoodItem;