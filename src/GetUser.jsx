import React ,{useState}from 'react'
import axios from 'axios'


const GetUser = ({token}) => {
  const [users,setUsers]=useState([])

const handleAllUser=async(e)=>{
  e.preventDefault()
const res=await axios.get("http://localhost:4000/getuser",{
  headers:
    {"Authorization" : `Bearer ${token}`} 
  
})
setUsers(res.data)
console.log(res.data)
}
 const values=Object.values(users)

console.log(users)
  return (
    <div>
      <h2>Get User</h2>
      <button onClick={handleAllUser}>Get User</button>
      <h4>Users Available now</h4>
     
      {values.map((value,index)=>{
        return (
          <div key={index} >
          <ul>
          <li>{value.username}</li>
          </ul>
          
          </div>
        )
      })}
    </div>
  )
}

export default GetUser
