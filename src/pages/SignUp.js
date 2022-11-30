import React, {useState} from 'react'
import '../styles/sign_up.css'
import loginBG from '../assets/images/login_bg.png'
import {Dropdown} from '../components/Dropdown'
import { NavLink } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const SignUp = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState("English (UK)")
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [fullname, setFullname] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState({});

  const handleSignup = async (e) => {
    e.preventDefault();
    console.log(email);
    console.log(password);

    const data = JSON.stringify({
      fullname: fullname,
      email: email,
      phone: phone,
      password: password
    });

    var response = await axios.post('https://api-micasa.herokuapp.com/api/auth/register', data, {
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
    <div className="signup">
      <div className="logo-bg">
        <img src={loginBG} alt="" />
      </div>
      <div className="signup-card">
        <div className="dropdown-language">
          <Dropdown selected={selected} setSelected={setSelected}/>
        </div>
        <p className="heading">Create your Account</p>
        <div className="social-signup">
          <div className="google-signup">
            <div className="google-img">
              <img src="https://www.campingleroc.com/wp-content/uploads/2018/11/google-logo-icon-PNG-Transparent-Background.gif" alt="" style={{height: '20px', width: '20px'}}/>
            </div>
            <div className="text">
                <p>Continue with Google</p>
            </div>
          </div>
          <div className="google-signup">
            <div className="google-img">
              <img src="https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/640px-Facebook_f_logo_%282021%29.svg.png" alt="" style={{height: '20px', width: '20px'}}/>
            </div>
            <div className="text">
                <p>Continue with Facebook</p>
            </div>
          </div>
        </div>
        <div className="or">
          <p>OR</p>
        </div>
        <form className="form">
          <input type="text" name="full name" id="" placeholder="Full Name" onChange={(e)=> setFullname(e.target.value)}/>
          <input type="text" name="email address" id="" placeholder="Email Address" onChange={(e)=> setEmail(e.target.value)}/>
          <input type="text" name="phone number" id="" placeholder="Phone Number" onChange={(e)=> setPhone(e.target.value)}/>
          <input type="text" name="password" id="" placeholder="Password" onChange={(e)=> setPassword(e.target.value)}/>
          <input type="submit" value="Create Account" onClick={handleSignup}/>
          
          <div className="already-have-account">
            <p>Already have an account?</p>
            <NavLink
              to="/login"
              activeClass="active"
              spy={true}
              smooth={true}>
                <p className="login-text-btn">
                  Login
                </p>
            </NavLink>
          </div>
        </form>
      </div>
      
    </div>
  )
}
