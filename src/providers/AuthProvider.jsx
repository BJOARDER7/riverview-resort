import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { createContext } from "react";
import { getAuth } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);


  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  }

  const authInfo = {
    user,
    createUser,
    logIn,
  }

  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;