import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup,signOut } from "firebase/auth";
import auth from "./firebase.config";
import propTypes from "prop-types"
import { GoogleAuthProvider } from "firebase/auth";

const Googleprovider = new GoogleAuthProvider();


export const AuthContext = createContext(null)


const Authprovider = ({children}) => {
    const [user , setUser] = useState(null)
    const [loading , setLoading] = useState(true)
    
    const createUser = (email, password) =>{
        setLoading(true);

        return createUserWithEmailAndPassword(auth, email, password)
    }

    const sinInWithGoogle =()=>{
        setLoading(true);

        return signInWithPopup(auth, Googleprovider)
    }

    const loginWithemailPass=(email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }


    const logOut = ()=>{
        setLoading(true);
        return signOut(auth)
    }
 

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser)
            setLoading(false);
        })
        return ()=>{
            unSubscribe();
        }

    },[])

    const authInfo ={
        createUser,
        sinInWithGoogle,
        logOut,
        user,
        loading,
        loginWithemailPass
    }
    return (
        <AuthContext.Provider value={authInfo}>
         {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;
Authprovider.propTypes={
    children: propTypes.node
}