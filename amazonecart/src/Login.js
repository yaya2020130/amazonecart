import React ,{useState}from 'react'
import {Link} from 'react-router-dom'
import './Login.css'
function Login() {
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const signIn=e=>{
    e.preventDefault()
    //firebase login

  }
  const register = e=>{
    e.preventDefault()
  
     //firebase register
  }

  return (
    <div className='login'>
      <Link to="/">
        <img className="login_logo"src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTzQ2HssRLd-4YbIfH5bRC2NTlGI2hrhLm79A&usqp=CAU"alt="img"></img>
      </Link>
      <div className='login_container'>
        <h1>
          Sign-in
        </h1>
        <form>
          <h5>E-mail</h5>
          <input className="input" type ='text' value={email}
          onChange={e=>setEmail(e.target.value)}/>
         
          <h5>Password</h5>
          <input type ="password" value={password}
          onChange={e=>setPassword(e.target.value)}/>
        <button  type='submit' onClick={signIn}className='login_signInButton'>Sign
          In</button>
        </form>
        <p>
          By signin in you agree to amazone tems znd conditions of use and sale. pleade see our privacy notice ,our cook
        </p>
        <button className  ='login_registerButton' onClick={register} >create amazone account</button>
      </div>
    </div>
  )
}

export default Login
