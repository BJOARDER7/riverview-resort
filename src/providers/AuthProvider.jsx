import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { createContext } from "react";
import { getAuth } from "firebase/auth";
import app from "../firebase/firebase.config";
import PropTypes from 'prop-types';

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [loading, setLoding] = useState(true);

  const googleProvider = new GoogleAuthProvider();
  

  const createUser = (email, password) => {
    setLoding(true);
    return createUserWithEmailAndPassword(auth, email, password);
  }

  const logIn = (email, password) => {
    setLoding(true);
    return signInWithEmailAndPassword(auth, email, password);
  }

  const googleLogin = () => {
    setLoding(true);
    return signInWithPopup(auth, googleProvider);
  }

  const logOut = () => {
    signOut(auth);
  }

  useEffect( () => {
    const unSubscribe = onAuthStateChanged(auth, currentUser => {
      console.log('User in the auth state changed', currentUser);
      setUser(currentUser);
      setLoding(false);
    });
    return () => {
      unSubscribe();
    }
  }, [])

  const authInfo = {
    user,
    loading,
    createUser,
    logIn,
    googleLogin,
    logOut
  }

  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.object
}

export default AuthProvider;