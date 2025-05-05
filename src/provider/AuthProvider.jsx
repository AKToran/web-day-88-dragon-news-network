import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/firebase.init';

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)

  console.log(user);

  const registerUser = (email, password) =>{
    return createUserWithEmailAndPassword(auth, email, password);
  }

  const loginUser = (email, password) =>{
    return signInWithEmailAndPassword(auth, email, password);
  }

  useEffect(()=>{
    const unsubscribe =  onAuthStateChanged(auth, (currentUser)=>{
      setUser(currentUser)
    })

    return () =>{
      unsubscribe();
    }
  }, [])

  const authData = {
    user,
    setUser,
    registerUser,
    loginUser
  }

  return (
    <AuthContext value={authData}>
      {children}
    </AuthContext>
  );
};

export default AuthProvider;