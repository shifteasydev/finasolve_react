import React, { useState } from 'react';
import '../Login_Signup/LoginformStyles.css';
import { Link, useNavigate } from 'react-router-dom';
import LoginImg from '../../Assets/finasolve_login.svg';
import axios from 'axios';
// import Validation from'../Login_Signup/LoginValidation';


const LoginForm = () => {








  // const Login = () => {


  //   const [email,setEmail]= useState("");
  //   const [password,setPassword]= useState("");
  //   const [loginStatus,setLoginStatus]= useState("");
  //   // const [signupStatus,setSignupStatus]= useState("");

  //   const login = (e) =>{
  //     e.preventDefault();
  //     Axios.post("http://localhost:8081/signup", {
  //       email: email,
  //       password: password,
  //     }).then((response) => {
  //     if(response.data.message){
  //     setLoginStatus(response.data.message);
  //     }else{
  //       setLoginStatus(response.data[0].email);
  //     }
  //     })

  //     }


  // const [values, setValues]=useState({
  //   email:'',
  //   password:''
  // })
  // const [errors,setErrors]= useState({})

  // const  handleInput =(event) => {
  //   setValues ( prev=> ({...prev, [event.target.name]: [event.target.value]}))
  // } 

  // const handleSubmit =(event) => {
  //   event.preventDefault();
  //   setErrors(Validation(values));
  // }

  const history = useNavigate();

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function submit(e) {
    e.preventDefault();

    try {
      await axios.post("http://localhost:3000/login", {
        email, password
      })
        .then(res=>{
          if (res.data = "exist") {
            history("/", { state: { id: email } })
          }
          else if (res.data = "notexist") {
            alert("User have not signup")
          }
        })
        .catch(e => {
          alert("wrong details")
          console.log(e);
        })

    }
    catch (e) {
      console.log(e)
    }


  }


  return (
    <div>
      <div className="login-wrapper">
        <div className="login-page">
          <div className="login-img">
            <img src={LoginImg} alt="" />
          </div>
          <form className='LoginForm-item' action="" >
            <div className="form-title">Login</div>

            <div className="email">
              <label htmlFor="email">Email</label>
              <input type="email" placeholder='Enter your registered Email' onChange={(e) => { setEmail(e.target.value) }} />

            </div>
            <div className="password">
              <label htmlFor="password">Password</label>
              <input type="password" placeholder='Enter your password' onChange={(e) => { setPassword(e.target.value) }} />

            </div>
            <div className="login-button">
              <button type='submit' className='login-btn form-control' onClick={submit}>Login</button>

            </div>
            <div className="dont-account">
              <p>Don't have an account?</p>
              <Link to="/signup" className='login-btn'>Register to create account</Link>
              <p></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginForm;

