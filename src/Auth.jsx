import React from 'react';
import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";
import firebaseConfig from './firebase.config'
import { useState,useEffect } from 'react';
firebase.initializeApp(firebaseConfig);

const Auth = () =>{
    const [users, setUsers]=useState({})
    
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        conPass:'',
        error: '',
        success: '',
        login:false
    });

    const createUser = () =>{
        return firebase.auth().createUserWithEmailAndPassword(user.email,user.password)
        .then((sUser) => {
            const setUp ={...user};
            setUp.error="";
            setUp.success=true;
            setUser(setUp);
            updateUserData(user.name);
            console.log(sUser.user)
            // window.location.pathname = '/signIn';
        })
        .catch((error) => {
            const setUp ={...user};
            setUp.error=error.message;
            setUp.success=false;
            setUser(setUp);

        });
    }


    const signIn = () =>{
        return firebase.auth().signInWithEmailAndPassword(user.email,user.password)
        .then((signin) => {
            const setUp ={...user};
            setUp.error="";
            setUp.login=true;
            console.log(setUp.login)
            setUser(setUp);
            window.location.pathname = '/review';

        })
        .catch((error) => {
            const setUp ={...user};
            setUp.error=error.message;
            setUp.login=false;
            setUser(setUp);

        });
    }
    const signOut = () =>{
        return firebase.auth().signOut()
        .then((res) => {
            const setUp ={...user};
            setUp.success=false;
            setUser(setUp);
 
          })
          .catch((error) => {
            console.log(error);
          });
    }

    const updateUserData=(name) =>{
        const user = firebase.auth().currentUser;

        user.updateProfile({
            displayName: name
        }).then(() => {
            setUsers(users.name);
        }).catch((error) => {
        
        });
    }
    useEffect(()=>{
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
               const currentUser = user;
               setUsers(currentUser)
            } else {
              
            }
          });
    },[])

    return {
        createUser,
        signIn,
        user,
        setUser,
        updateUserData,
        signOut
    }

}

export default Auth;