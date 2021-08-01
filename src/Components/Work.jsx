import React from 'react';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';


const Work = (props) => {
    return (
        <div className='col-md-4'>
            <div className="m-1">
            <img className='w-100 img-fluid' src={props.image} alt="" />
            <div className="row mt-4">
                <div className="col-md-2">
                    <img src={props.group} alt="" />
                </div>
                <div className="col-md-10">
                   <h4>{props.title}</h4>
                   <p style={{color:'gray',marginTop:'15px',marginBottom:'0',fontWeight:'600'}}>{props.content}</p>
                    <a href="/" style={{fontWeight:'600' ,textDecoration:'none'}}>Read more
                    <ArrowForwardIcon style={{marginLeft:'10px', background:'#7ac948',borderRadius:'50%',color:'white'}} />
                    </a>
                    
                </div>
            </div>
            </div>
        </div>
    );
};

export default Work;