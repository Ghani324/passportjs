import React, { useState } from 'react'
import axios from 'axios'
import GetUser from './GetUser'
const Login = () => {
  const [username,setUsername]=useState("")
  const [password,setPassword]=useState("")
 const [user,setUser]=useState([])

    const handleSubmit=async(e)=>{
        e.preventDefault()
        const data={
            username:username,
            password:password
        }
const user=await axios.post('http://localhost:4000/login',data)
setUser(user.data)
      }
console.log(user)
   const token=user["token"]
    
  return (
    <div>
        <h2>Login Form</h2>
      <form  onSubmit={handleSubmit}>
        <label htmlFor="">Username</label>
        <input type="text" placeholder='Username' value={username}
        onChange={e=>setUsername(e.target.value)}
        />
        <br />
        <label htmlFor="">Password</label>
        <input type="text" placeholder='Password'  value={password}
         onChange={e=>setPassword(e.target.value)}
        />
        <br />
        <button type='submit'>Login</button>


      {Object.keys(user).map((key,index)=>{
        return (
          <div key={index} >
            <h4>{key}</h4> <span>{user[key]}</span>
          </div>
        )
      })}
      </form>
      <hr />
      <GetUser token={token}/>
  
    </div>
       
  )
}

export default Login;
