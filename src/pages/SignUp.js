import React, {useState} from 'react'
import '../styles/sign_up.css'
import loginBG from '../assets/images/login_bg.png'
import {Dropdown} from '../components/Dropdown'

export const SignUp = () => {
  const [selected, setSelected] = useState("English (UK)")
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
        <div className="form">
          <input type="text" name="full name" id="" placeholder="Full Name"/>
          <input type="text" name="email address" id="" placeholder="Email Address"/>
          <input type="text" name="phone number" id="" placeholder="Phone Number"/>
          <input type="text" name="password" id="" placeholder="Password"/>
          <input type="submit" value="Create Account" />
          <div className="already-have-account">
            <p>Already have an account?</p>
            <p className="login-text-btn">Login</p>
          </div>
        </div>
      </div>
      
    </div>
  )
}
