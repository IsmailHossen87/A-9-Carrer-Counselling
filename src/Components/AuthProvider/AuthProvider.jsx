import React, { createContext, useEffect, useState } from 'react';
import app from '../FireBase/FireBase';
import {
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
    updateProfile,
  } from "firebase/auth";
export const AuthContext = createContext()
const auth = getAuth(app)
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loader,setloader] = useState(true)
    console.log(user)
    //  create a user
    const createUser = (email, Password) => {
      setloader(true)
      return createUserWithEmailAndPassword(auth, email, Password);
    };
    // login create
    const createLogin = (email,password)=>{
      setloader(true)
      return signInWithEmailAndPassword(auth,email,password)
    }
    // sing Out
    const logOut = () => {
       signOut(auth);
       setloader(true)
      return setUser(null)
    };
    // updata Profile
    const updateprofile = (updataData)=>{
      return updateProfile(auth.currentUser,updataData)
  
    }
    useEffect(() => {
      const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
        if (currentUser) {
          setUser(currentUser);
        }
        setloader(false)
      });
      return () => unSubscribe();
    }, []);
  
    const authInfo = {
      createUser,
      createLogin,
      setUser,
      user,
      logOut,
      loader,
      updateprofile
    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider >
    );
};

export default AuthProvider;