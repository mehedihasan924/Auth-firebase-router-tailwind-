import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provaider/AuthProvaiders';

const Login = () => {
  const {signIn}=useContext(AuthContext)

     const handleLogin=(event)=>{
        event.preventDefault();
        const from=event.target;
        const email=from.email.value;
        const password=from.password.value;
        console.log(email, password);


      signIn(email, password)
      .then(result=>{
        const sineddUser=result.user;
        console.log(sineddUser);
      })
      .catch(error=>{
        console.log(error);
      })

     }



    return (
        <div>
           <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                <label className="label">
                <button className="btn btn-active btn-link"> Forget Password</button>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
      </form>
       <Link to="/register"><button className="btn pl-8 btn-active btn-link">Register Now </button></Link>

    </div>
  </div>
</div>
        </div>
    );
};

export default Login;