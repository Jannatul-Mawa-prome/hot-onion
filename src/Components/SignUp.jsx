import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo2.png'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import Auth from './../Auth';
import { useState } from 'react';
import Header from './Header';


const SignUp = () => {
    const auth = Auth();
    const [passMatch,setPassMatch] = useState('');

    const handelEven = (e) =>{
        let userInfo = {...auth.user}
        userInfo[e.target.name] = e.target.value;
        auth.setUser(userInfo);

    }
    
    const userSignUp = (e) =>{
        e.preventDefault();
        
        if(auth.user.password === auth.user.conPass){
            auth.createUser();
            setPassMatch(" ");
        }
        else{
            setPassMatch("Password does't Match");
        }
        auth.setUser({
            name: '',
            email: '',
            password: '',
            conPass:'',
            error: '',
            success: '',
        })

        

        
    }



    return (
        <div style={{backgroundImage:" url('https://i.ibb.co/t8SY2qV/signup-bg-a5fdc065.png')",backgroundSize:'100% 100%',padding:'20px 50px'}}>
            
            <Link style={{color:'gray'}} to='/home'> <ArrowBackIcon className='mt-4' /></Link>
            <div className="signup p-5 w-50 mx-auto text-center">
                <img style={{marginBottom:'50px'}} src={logo} alt="" />
                <span style={{color:'red'}}>{
                        auth.user.error
                }</span>
                <form className='px-5' action="">
                    <input onChange={handelEven} name="name" value={auth.user.name}  placeholder='Name' type="text" required />
                    <input onChange={handelEven} name="email" value={auth.user.email}  placeholder='Eamil' type="email" required />
                    <input onChange={handelEven} name="password" value={auth.user.password}  placeholder='Password' type="password" required />
                    <input onChange={handelEven} name="conPass" value={auth.user.conPass}  placeholder='Confirm Password' type="password" required />
                    <span style={{color:'red'}}>{
                       passMatch
                    }</span>
                    
                    <Link to="/signIn"><input onClick={userSignUp} style={{background:'#f50057',color:'white'}} type="submit" value ='sign Up' /></Link>
                </form>
                {
                   
                }
                <span style={{color:'#f50057',marginBottom:'20px'}}>Already Have An Account? <Link to='/signIn'>Sing In</Link></span>
            </div>
        </div>
    );
};

export default SignUp;