import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../Config/Firebase/Firebase.config";
import usePublic from "../Hooks/AxiosPublic/usePublic";
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const axiosPublic = usePublic();
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

  // sign out user
  const logOutUser = () => {
    signOut(auth)
      .then((res) => {
        console.log(res);
        alert("sign out successfully");
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  // state change
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setIsLoader(false);
      const userEmail = currentUser?.email || user?.email;
      const loggedUser = { email: userEmail };
      // console.log(loggedUser)
      if (currentUser) {
        axiosPublic
          .post("/jwt", loggedUser)
          .then(() => {
          });
      } else {
        axiosPublic
          .post("/logout", loggedUser, { withCredentials: true })
          .then(() => {
            // console.log(res.data)
          });
      }
    });
    return () => {
      unSubscribe();
    };
  }, [axiosPublic, user?.email]);

  // context info
  const authIfo = {
    user,
    isLoader,
    createUser,
    loginUser,
    logOutUser,
  };
  return (
    <AuthContext.Provider value={authIfo}>{children}</AuthContext.Provider>
  );
};
AuthProvider.propTypes = {
  children: PropTypes.node,
};
export default AuthProvider;
