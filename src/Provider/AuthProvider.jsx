import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import auth from "../firebase/firebase.config";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  const registerWithEmailPassword = (email, pass) => {
    return createUserWithEmailAndPassword(auth, email, pass);
  };

  const signInWithEmailPassword = (email, pass) => {
    return signInWithEmailAndPassword(auth, email, pass);
  };

  const handlgGoogleSignIn = () => {
    return signInWithPopup(auth, googleProvider);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const authData = {
    registerWithEmailPassword,
    signInWithEmailPassword,
    handlgGoogleSignIn,
    setUser,
    user,
  };
  return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;
