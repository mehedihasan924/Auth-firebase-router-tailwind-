import React, { createContext } from 'react';
import { getAuth } from "firebase/auth";
import app from '../../Firebase/Firebase.config';



 export const AuthContext= createContext(null)

 const auth=getAuth(app)

const AuthProvaiders = ({children}) => {
         const user ={ displayName:'Sagor Nodi'}
    return (
       <AuthContext.Provider value={user}>
                {children}
       </AuthContext.Provider>
    );
};

export default AuthProvaiders;