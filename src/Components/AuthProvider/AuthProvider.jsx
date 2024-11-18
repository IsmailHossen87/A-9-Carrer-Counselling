import React, { createContext, useEffect, useState } from 'react';
import app from '../FireBase/FireBase';
import {
    createUserWithEmailAndPassword,
    getAuth,
    GoogleAuthProvider,
    // GoogleAuthProvider,
    onAuthStateChanged,
    sendPasswordResetEmail,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile,
  } from "firebase/auth";
export const AuthContext = createContext()
// const storage = getStorage(app);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loader,setloader] = useState(true)
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
    // login Google
   
    const loginGoogle  = () => {
      setloader(true);
      return signInWithPopup(auth, provider)
        .then((result) => {
          setUser(result.user); 
        })
    };
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
    // Upload image to Firebase Storage
const uploadImage = async (file) => {
  const storageRef = ref(storage, `profilePictures/${auth.currentUser.uid}`);
  await uploadBytes(storageRef, file);
  return getDownloadURL(storageRef); 
};

// store firebase image
const forgetPass = (email) => {
  setloader(true);
  return sendPasswordResetEmail(auth, email)
    .then(() => {
      setloader(false);
      alert(`Password reset email sent to ${email}. Please check your inbox.`);
    })
    .catch((error) => {
      setloader(false);
      console.error("Error sending reset email:", error.message);
      alert("Failed to send reset email. Please check the email address.");
    });
};
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
      loginGoogle,
      setUser,
      user,
      logOut,
      loader,
      updateprofile,
      forgetPass,
      uploadImage
    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider >
    );
};

export default AuthProvider;