import React, { useState } from 'react'
import axios from 'axios'
const Register = () => {
  const [username,setUsername]=useState("")
  const [password,setPassword]=useState("")
 

    const handleSubmit=async(e)=>{
        e.preventDefault()
        const data={
            username:username,
            password:password
        }
const user=await axios.post('http://localhost:4000/api/register',data)
console.log(user)
    }
  return (
    <div>
        <h2>Registration Form</h2>
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
        <button type='submit'>Register</button>
      </form>
    </div>
  )
}

export default Register
