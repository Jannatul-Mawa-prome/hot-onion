import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo2.png'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import Auth from './../Auth';

const SignIn = () => {
    const auth = Auth();
 
    const handelEven = (e) =>{
        let userInfo = {...auth.user}
        userInfo[e.target.name] = e.target.value;
        auth.setUser(userInfo);

    }
    
    const userSignIn = (e) =>{
        e.preventDefault();
        auth.signIn()
        
        auth.setUser({
            email: '',
            password: ''
        })
        
    }


    return (
        <div style={{backgroundImage:" url('https://i.ibb.co/t8SY2qV/signup-bg-a5fdc065.png')",backgroundSize:'100% 100%',padding:'20px 50px'}}>
            <Link style={{color:'gray'}} to='/home'> <ArrowBackIcon className='mt-5' /></Link>
            <div className="signup p-5 w-50 mx-auto text-center"style={{marginBottom:'110px'}}>
                <img style={{marginBottom:'70px'}} src={logo} alt="" />
                <form className='px-5' action="">
                    <h6 style={{color:'red'}}>{
                       auth.user.error
                    }</h6>
                    <input onChange={handelEven} value={auth.user.email}  name="email" placeholder='Eamil' type="email" />
                    <input onChange={handelEven} value={auth.user.password}  name="password" placeholder='Password' type="password" />
                    {
                        
                    }
                    <input onClick={userSignIn} style={{background:'#f50057',color:'white'}} type="submit" value ='sign Up' />
                </form>
                <span style={{color:'red',marginBottom:'20px'}}>Don't have an account? <Link to='/signUp'>Sing Up</Link></span>
            </div>
    </div>
    );
};

export default SignIn;