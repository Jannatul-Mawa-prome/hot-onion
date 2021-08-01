import './App.css';
import React, { useState } from "react";
import Home from './Components/Home';
import FoodDetails from './Components/FoodDetails';
import foodItems from './fakeData/fakeData'
import Footer from './Components/Footer';
import Review from './Components/Review';
import SignUp from './Components/SignUp';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import SignIn from './Components/SignIn';

function App() {
  const [cart ,setCart] = useState([]);

  const addToCart = (toAdded) =>{
      const addItem = foodItems.find(food=> food.id === toAdded.id);
      console.log(addItem.name + ':' + addItem.quentity);
      let newItem ;
      if(addItem){
        const others = cart.filter(food =>food.id !== toAdded.id);
        newItem = [...others,addItem];
      }
      else{

        newItem = [...cart, toAdded]
     }
       
      setCart(newItem);
      console.log(addItem)
      
  }
  return (
    <Router>
      
      <Switch>
      <Route path="/details/:foodId">
            <FoodDetails cart={cart} addToCart={addToCart}></FoodDetails>
          </Route>
          <Route path="/home">
            <Home cart={cart}></Home>
          </Route>
          <Route path="/review">
            <Review cart={cart}></Review>
          </Route>
          <Route path="/signUp">
            <SignUp></SignUp>
          </Route>
          <Route path="/signIn">
            <SignIn></SignIn>
          </Route>
          <Route path="/">
            <Home cart={cart}></Home>
          </Route>
        </Switch>
        <Footer></Footer>
    </Router>
  );
}

export default App;
