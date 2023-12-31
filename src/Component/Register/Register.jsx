import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provaider/AuthProvaiders';



const Register = () => {
      const {user, creatUser, signWithGoogle}=useContext(AuthContext)
   console.log(creatUser);

      const handleRegisfrom=(event)=>{ 
          event.preventDefault();
          const from=event.target;
          const name=from.name.value;   
          const email=from.email.value;
          const password= from.password.value;
          console.log(email, name, password);


          creatUser(email, password)
          .then(result=>{
            const logedUser=result.user;
            console.log(logedUser);
            from.reset()
          })
          .catch(error=>{
             console.log(error);
          })

      }

   const handleGoogleSignIn=()=>{
        signWithGoogle()
        .then(result=>{
          const logedGoogle=result.user
          console.log(logedGoogle);
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
      <h1 className="text-5xl font-bold">Please Register!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleRegisfrom} className="card-body">
        <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input type="text" name='name' placeholder="Your Name" className="input input-bordered" required />
          </div>
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
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register Now</button>
          <button onClick={handleGoogleSignIn} className="btn btn-primary mt-5"> login With Google</button>
        </div>
      </form>
      <Link to="/login"><button className="btn pl-8 btn-active btn-link">Login Now </button></Link>

    </div>
  </div>
</div>

        </div>
    );
};

export default Register;