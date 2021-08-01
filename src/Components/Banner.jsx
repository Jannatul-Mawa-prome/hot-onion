import React from 'react';
import background from '../images/bannerbackground.png'

const Banner = () => {
    return (
        <div className="banner" style={{ backgroundImage: `url(${background})`,backgroundSize:'cover',padding:'170px 20px'}}>
            <div className="text-center" >
                <h1>Best Food Waiting For Your Belly</h1>
                <div style={{borderRadius:'50px',width:'10%'}} className="btn btn-success mt-3">Search</div>
            </div>
        </div>
    );
};

export default Banner;