import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../Login_Signup/SignupformStyles.css';
import SignupImg from '../../Assets/finasolve_signup.svg';
import axios from 'axios';
// import SignupValidation from '../Login_Signup/sigunpValidation';
// import Axios from 'axios';




  






const SignupForm = () => {

  // {errors.lname && <span className='' style={{ color: 'red', fontSize : 13 }}>{errors.lname}</span>}
  const history = useNavigate();
  
  const [fname, setFname]=useState('')
  const [lname, setLname]=useState('')
  const [email,setEmail]=useState('')
  const [password, setPassword]=useState('')

  
  async function submit(e){
    e.preventDefault();
  
  try{
  await axios.post("http://localhost:3000/signup",{
    fname,lname,email,password
  })

  .then(res => {
    if (res.data="exist") {
      alert("user already exist")
      // history("/", { state: { id: email } })
    }
    else if (res.data="notexist") {
     history("/", { state: { id: email } })
    }
  })
  .catch(e => {
    alert("wrong details")
    console.log(e);
  })

  }
  catch(e){
  console.log(e)
  }
  
  
  }

  return (
    <div>

      <div className="signup-wrapper">
      <div className="signup-page">
        <div className="signup-img">
          <img src={SignupImg} alt="" />
        </div>
        <form className='signupForm-item' action=""   >
          <div className="signupform-title">Register</div>
          <div className="input-name">
            <div className="f-name">
              <label htmlFor="name">First Name</label>
              <input type="name" placeholder='First Name'  onChange={(e)=>{setFname(e.target.value)}}  required/>
             
            </div>
            <div className="l-name">
              <label htmlFor="name">Last Name</label>
              <input type="name" placeholder='Last Name'  onChange={(e)=>{setLname(e.target.value)}}/>
             
            </div>
          </div>
          <div className="email">
            <label htmlFor="email">Email</label>
            <input type="email" placeholder='Enter your registered Email'  onChange={(e)=>{setEmail(e.target.value)}}/>
           
          </div>
          <div className="password">
            <label htmlFor="password">Password</label>
            <input type="password" placeholder='Enter your password' onChange={(e)=>{setPassword(e.target.value)}} />
           
          </div>
          <div className="signup-button">
            <button type='submit' className='signup-btn form-control' onClick={submit} >Signup</button>
            
          </div>
          <div className="have-account">
            <p>Already have an account?</p>
            <Link to="/login" className='login-btn'>Login</Link>
            <p></p>
          </div>
        </form>
      </div>
      </div>
    </div>
  )
}

export default SignupForm;
