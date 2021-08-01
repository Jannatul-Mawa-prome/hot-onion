import React from 'react';
import Work from './Work';
import image1 from '../images/Image/adult-blur-blurred-background-687824.png';
import group1 from '../images/ICON/Group 204.png'
import image3 from '../images/Image/architecture-building-city-2047397.png'
import group2 from '../images/ICON/Group 245.png'
import group3 from '../images/ICON/Group 1133.png'
import image2 from '../images/Image/chef-cook-food-33614.png'


const Facilities = () => {
    return (
        <div className='container mt-5'>
            <div className="w-50">
                <h3 style={{margin:'30px 0'}}>Why you choose Us</h3>
                <p style={{fontWeight:'600',marginBottom:'50px'}}>Lorem Ipsum is simply dummy  typesetting industry. when an unknown printer took a galley of type and scrambled it to type specimen book.</p>
            </div>
            <div className="row">
                <Work 
                    image={image1} 
                    group={group1}
                    title='Fast Delivaey'
                    content=' typesetting industry. when an unknown printer took a galley of type and scrambled it to type specimen book'
                ></Work>
                <Work 
                    image={image2} 
                    group={group2}  
                    title='A Good Auto Responder'
                    content=' typesetting industry. when an unknown printer took a galley of type and scrambled it to type specimen book'>
                </Work>
                <Work 
                    image={image3} 
                    group={group3}  
                    title='Home Delivaey'
                    content=' typesetting industry. when an unknown printer took a galley of type and scrambled it to type specimen book'>
                </Work>
            </div>
        </div>
    );
};

export default Facilities;