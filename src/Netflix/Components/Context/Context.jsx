import React, { createContext, useState, useEffect } from 'react'
import { auth } from "../../Firebase";

export const AuthContext = createContext(); //create context

export const useAuth = () => {
  return React.useContext(AuthContext); //this is a useContext
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setcurrentUser] = useState();
  const [loading, setloading] = useState(true);

  const signup = (email, password) => { //this is for signUp
    return auth.createUserWithEmailAndPassword(email, password);
  };
  const login = (email, password) => { //this is for Login
    return auth.signInWithEmailAndPassword(email, password);
  };
  const logout = () => { //this is for Logout
    return auth.signOut();
  };
//   const forgetPass = (email) => { //this is for reset password
//     return auth.sendPasswordResetEmail(email);
//   };
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setcurrentUser(user);
      setloading(false);
    });
    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    signup,
    login,
    logout,
    // forgetPass,
  };
  return (
    <div>
      <AuthContext.Provider value={value}>
        {!loading && children}
      </AuthContext.Provider>
    </div>
  );
};
