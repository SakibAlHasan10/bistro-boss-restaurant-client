import { createContext, useState } from "react";
import PropTypes from "prop-types";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../Config/Firebase/Firebase.config";
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoader, setIsLoader] = useState(true);
  // create user with email and password
  const createUser = (email, password) => {
    setIsLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // login user with email and password
  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const authIfo = {
    user,
    isLoader,
    createUser,
    loginUser,
  };
  return (
    <AuthContext.Provider value={authIfo}>{children}</AuthContext.Provider>
  );
};
AuthProvider.propTypes = {
  children: PropTypes.node,
};
export default AuthProvider;
