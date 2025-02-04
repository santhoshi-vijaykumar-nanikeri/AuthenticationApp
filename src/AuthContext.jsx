import PropTypes from "prop-types"; // ✅ Import PropTypes
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "./firebaseConfig";
import {
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  // Signup function
  const signUp = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);

  // Login function
  const login = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);

  // Logout function
  const logout = () => signOut(auth);

  return (
    <AuthContext.Provider value={{ user, signUp, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// ✅ Add PropTypes validation
AuthProvider.propTypes = {
  children: PropTypes.node.isRequired, // Ensure 'children' is properly validated
};

export const useAuth = () => useContext(AuthContext);
