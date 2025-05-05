import React, { useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/firebase.init';

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)

  const registerUser = (email, password) =>{
    return createUserWithEmailAndPassword(auth, email, password);
  }

  const authData = {
    user,
    setUser,
    registerUser,
  }

  return (
    <AuthContext value={authData}>
      {children}
    </AuthContext>
  );
};

export default AuthProvider;