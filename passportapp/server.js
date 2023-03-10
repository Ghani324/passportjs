const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const passport = require("passport");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const app = express();
const User=require("./model/User")
const {loginMiddleware}=require('./config/passport-middleware')

//Database

mongoose.connect("mongodb+srv://GlennGhani:GlennGhani@cluster0.iu4xsz8.mongodb.net/passportjs?retryWrites=true&w=majority")
.then(()=>console.log("Database is connected"))
//Middlewares
app.use(cors({
  origin:"http://localhost:3000",
  credentials:true
}))

app.use(session({
  resave:true,
  secret:"secretcode",
  saveUninitialized:true
}))
app.use(express.json())
app.use(cookieParser("secretcode"))
app.use(passport.initialize())
app.use(passport.session())
const initializer=require('./config/passport-config')
initializer(passport)
const auth=require('./config/passport-jwt')
auth(passport)



//login
app.post('/login',loginMiddleware,(req,res,next)=>{

})

//Protected Route
app.get('/getuser',passport.authenticate('jwt',{session:false}),(req,res,next)=>{
 const user=req.user
 res.status(200).json(user)
})

app.listen(4000,()=> console.log("Server is running"))