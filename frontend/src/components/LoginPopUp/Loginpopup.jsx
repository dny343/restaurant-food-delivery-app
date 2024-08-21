import React, { useState } from 'react'
import './Loginpopup.css'
import { assets } from '../../assets/assets'

const Loginpopup = ({setShowLogin}) => {
    const [currState, setCurrState] = useState('Sign Up')
  return (
    <div className='login-popup'>
      <form className="login-popup-container">
        <div className="login-popup-title">
            <h2>{currState}</h2>
            <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-popup-input">
            {currState==='Login'?<></>:<input type="text" placeholder='your name' required/>}
            
            <input type="email" placeholder='your email' required/>
            <input type="password" placeholder='password' required/>
        </div>
        <button>{currState==="Sign Up"?"Create account":"Login"}</button>
        <div className="login-popup-condition">
            <input type="checkbox" required />
            <p>By Continuing, I agree to privacy policy, terms and conditions.</p>
        </div>
       {currState==='Login'
       ?<p>Create a New Account? <span onClick={()=>setCurrState('Sign Up')}>Sign Up</span></p>
       :<p>Already have an account? <span onClick={()=>setCurrState('Login')}>Login</span></p>

       } 
        
      </form>
    </div>
  )
}

export default Loginpopup
