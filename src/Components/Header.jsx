import React from 'react';
import logo from '../images/logo2.png'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Auth from './../Auth';

const Header = (props) => {
    const auth = Auth();
    const handleSignOut = () =>{
        auth.signOut();
    }
    console.log(auth.user.success)
    return (
        <div className="container d-flex my-3">
            <img src={logo} alt="logo"
             style ={{height:'auto', width:'140px'}} />
            <div className="account d-block ms-auto">
                <Link to="/review" style={{textDecoration:'none',color:'black',margin:'0 10px',}}>
                    <ShoppingCartIcon /><sup style={{color:'#f50057'}}>{props.cart.length}</sup>
                </Link>
                
                {
                auth.user.login ? <Link to="/signUp" style={{ color:'white',textDecoration:'none'}}> LogOut</Link> 
                : <Link to="/signIn" style={{margin:'0 10px', color:'black',textDecoration:'none'}}>Login</Link>}

                {auth.user.success ? <span>{auth.users.name}</span> : <Button  variant="contained" color="secondary" style={{borderRadius:'50px'}}>
                   <Link to="/signUp" style={{ color:'white',textDecoration:'none'}}> Sign Up</Link>
                </Button>}
                
            
            </div>
            
        </div>
    );
};

export default Header;