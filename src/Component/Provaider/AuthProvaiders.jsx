import React, { createContext, useState } from 'react';
import { getAuth , createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import app from '../../Firebase/Firebase.config';



 export const AuthContext= createContext(null)
 const auth=getAuth(app)

const AuthProvaiders = ({children}) => {

      const [user, setUser]=useState(null);
     // Register from connect kora hoise 
      const creatUser=(email, password)=>{
         return createUserWithEmailAndPassword(auth, email, password)
      }
  // login from connect kora hoise
   const signIn=(email, password)=>{
       return signInWithEmailAndPassword(auth ,email,password)
   } 


    // Akan teke use kora hoise  
 const authInfo={
   user,
   creatUser,
   signIn
 }

    return (
       <AuthContext.Provider value={authInfo}>
                {children}
       </AuthContext.Provider>
    );
};

export default AuthProvaiders;