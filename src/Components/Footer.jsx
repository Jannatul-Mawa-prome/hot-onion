import React from 'react';
import logo from '../images/logo2.png'
const Footer = () => {
    return (
        <div className='footer bg-dark mt-5'>
            <div className="container">
                <div className="footer-head">
                    <div className="row py-4">
                        <div className="col-md-6">
                            <img style={{height:'auto', width:'140px'}} src={logo} alt="" />
                        </div>
                        <div className="col-md-3">
                            <ul>
                                <li>About Online Food</li>
                                <li>Read Our Blog</li>
                                <li>Sign Up to Deliver</li>
                                <li>Add Our Restrurant</li>
                            </ul>
                        </div>
                        <div className="col-md-3">
                            <ul>
                                <li>Get Helps</li>
                                <li>Read FAQs</li>
                                <li>View All Cities</li>
                                <li>Restrurant Near Me</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;