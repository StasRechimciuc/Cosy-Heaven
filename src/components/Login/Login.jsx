import React from 'react'
import { useGlobalContext } from '../../context'
import {BsFillPersonCheckFill} from 'react-icons/bs'

const Login = () => {
    const {
        login,setLogin
    } = useGlobalContext()

  return (
    <section className='login-section'>
        <form className="login-card">
            <BsFillPersonCheckFill className='login-icon'/>
            <h2 className='login-title'>Log in to your account</h2>
            <div className="logOrSign">
                <button className={!login ? "logBtn" : "logBtn activeLog"} type='button' onClick={() =>setLogin(!login)}>Sign up</button>
                <button className={login ? "logBtn" : "logBtn activeLog"} type='button' onClick={() =>setLogin(!login)}>Log in</button>
            </div>
            
            <div className="login-inputs">
             {login ? 
                <div className="signup">
                    <h2>Sign up</h2>
                    <input type='text' placeholder='Name' className='login-inp'/>
                    <input type='text' placeholder='Family' className='login-inp'/>
                    <input type="password" placeholder='Password' className='login-inp'/>
                    <input type="email" placeholder='Email' className='login-inp'/> 
                </div> :
                <div className="login">
                    <h2>Log in</h2>
                    <input type="password" placeholder='Password' className='login-inp'/>
                    <input type="email" placeholder='Email' className='login-inp'/>
                </div>
            }
            </div>
            <button className='login-submit'>Log in</button>
        </form>
    </section>
  )
}

export default Login