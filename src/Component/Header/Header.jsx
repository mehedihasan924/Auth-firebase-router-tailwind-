import React, { useContext } from 'react';
import {Link} from 'react-router-dom'
import { AuthContext } from '../Provaider/AuthProvaiders';
const Header = () => {

    const {user, logOut}=useContext(AuthContext)

 const handleLogOut=()=>{
        logOut()
        .then(()=>{})
        .catch(error=>console.error(error))
 }

    return (
        <div className='flex justify-between navbar bg-primary text-primary-content'>       
          <div className="">
             <a className="btn btn-ghost normal-case text-xl">Auth Master</a>
             <Link className="btn btn-ghost normal-case text-xl" to="/"> Home  </Link>
             <Link className="btn btn-ghost normal-case text-xl" to="/orders"> Order  </Link>
          {/* Simple Conditional Menu hiden llogin takle show korbe */}
           {  user &&
            <Link className="btn btn-ghost normal-case text-xl" to="/product"> All Product  </Link>
           } 
             <Link className="btn btn-ghost normal-case text-xl" to="/register"> Register</Link>
             <Link className="btn btn-ghost normal-case text-xl" to="/login"> Login      </Link>
         </div>
         <div className='gap-5 pr-5'> 
   {/* Condition in Login and signIn user */}
            {
                user ?
                <> 
                {user.email} 
                <button onClick={handleLogOut} className="btn btn-xs">Sign Out</button>
                </> : 
            <Link to="/login"><button  className="btn btn-xs"> Login</button> </Link> 
            }
         </div>
       
        </div>
    );
};

export default Header; 