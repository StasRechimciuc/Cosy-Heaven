import React from 'react'
import { useGlobalContext } from '../../context'
import {BsFillPersonCheckFill} from 'react-icons/bs'

const Login = () => {
    const {
        login,setLogin,

        name,handleName,
        family,handleFamily,
        email,handleEmail,
        password,handlePassword,
        handleLogin,handleLogout,
        isLogged
    } = useGlobalContext()

  return (
    <section className='login-section'>
        {!isLogged ? <form className="login-card">
            <h2 className='login-title'>{login ? 'Log in to your account' : 'Sign up'}</h2>
            <div className="logOrSign">
                <button className={!login ? "logBtn" : "logBtn activeLog"} type='button' onClick={() =>setLogin(!login)}>Log in</button>
                <button className={login ? "logBtn" : "logBtn activeLog"} type='button' onClick={() =>setLogin(!login)}>Sign up</button>
            </div>
            
            <div className="login-inputs">
             {!login ? 
                <div className="signup">
                    <h2>Sign up</h2>
                    <input 
                    type='text' 
                    placeholder='Name' 
                    className='login-inp'
                    onChange={handleName}
                    value={name}/>
                    <input 
                    type='text' 
                    placeholder='Family' 
                    className='login-inp'
                    onChange={handleFamily}
                    value={family}/>
                    <input 
                    type="password" 
                    placeholder='Password' 
                    className='login-inp'
                    onChange={handlePassword}
                    value={password}/>
                    <input 
                    type="email" 
                    placeholder='Email' 
                    className='login-inp'
                    onChange={handleEmail}
                    value={email}/> 
                </div> :
                <div className="login">
                    <h2>Log in</h2>
                    <input 
                    type="email" 
                    placeholder='Email' 
                    className='login-inp'
                    value={email}
                    onChange={handleEmail}/>
                    <input 
                    type="password" 
                    placeholder='Password' 
                    className='login-inp'
                    value={password}
                    onChange={handlePassword}/>
                </div>
            }
            </div>
            <button className='login-submit' onClick={e => handleLogin(e)}>{!login ? 'Sign Up' : 'Login'  }</button>
        </form> :
        <form className='logout'>
            <BsFillPersonCheckFill className='login-icon'/>
            <h2>Hello,{name}</h2>
            <button type='button' className='btn' onClick={e => handleLogout(e)}>Logout</button>
        </form>
        }
    </section>
  )
}

export default Login