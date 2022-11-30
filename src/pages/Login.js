import React, {useState} from 'react'
import '../styles/login.css'
import axios from "axios";
import loginBG from '../assets/images/login_bg.png'
import {Dropdown} from '../components/Dropdown'
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState("English (UK)")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [userData, setUserData] = useState({});

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log(email);
    console.log(password);

    const data = JSON.stringify({
      email: email,
      password: password
    });

    var response = await axios.post('https://api-micasa.herokuapp.com/api/auth/login', data, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    });

    if(response.status==200){
      console.log(response.data);
      setUserData(response.data);
      navigate("/");
    }else{
      alert("Something went wrong!");
    }
  }
  

  return (
    <div className="login">
      <div className="logo-bg">
        <img src={loginBG} alt="" />
      </div>
      <div className="login-card">
        <div className="dropdown-language">
          <Dropdown selected={selected} setSelected={setSelected}/>
        </div>
        <p className="heading">Welcome</p>
        <p className="description">Login to continue</p>
        <form className="form">
          <label htmlFor="email">Email
            <input type="email" name="email" id="email" placeholder="" onChange={(e)=> setEmail(e.target.value)}/>
          </label>
          <label htmlFor="password">Password
            <input type="password" name="" id="password" onChange={(e)=> setPassword(e.target.value)} autocomplete="current-password"/>
          </label>
          <div class="remember-me-and-forgot-password">
            <div class="remember-me">
            <input type="checkbox" value="" id="" className="remember-me-checkbox"></input> <label htmlFor="remember-me" className="remember-me-label">Remember Me</label>
            </div>
              <div class="forgot-password">Forgot Password?</div>
          </div>
          <input type="submit" value="Login" onClick={handleLogin}/>
        </form>
        <div className="or-continue">
          <p>or continue with</p>
        </div>
        <div className="social-login">
          <img src="https://www.campingleroc.com/wp-content/uploads/2018/11/google-logo-icon-PNG-Transparent-Background.gif" alt="" style={{height: '20px', width: '20px'}}/>
          <img src="https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/640px-Facebook_f_logo_%282021%29.svg.png" alt="" style={{height: '20px', width: '20px'}}/>
          <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="" style={{height: '20px', width: '20px'}}/>
        </div>
      </div>
    </div>
  )
}
