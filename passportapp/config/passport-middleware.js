const passport = require("passport")
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const User = require('../model/User');
const jwt=require('jsonwebtoken')

const loginMiddleware=async(req,res,next)=>{
    passport.authenticate("local",(err,user,info)=>{
        if(err) {
            throw err
        }if(!user){
            return res.status(400).send("Invalid Credentials")
        }else{
          const {username,...docs}=user._doc
          const token= jwt.sign({username:user.username},"secretjwt")
            return res.status(200).json({username,token})
        }
    })(req,res,next)
}

const routeMiddleware=async(req,res,next)=>{
 
}




module.exports.loginMiddleware=loginMiddleware



