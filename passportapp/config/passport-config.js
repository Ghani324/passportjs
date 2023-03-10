const localStrategy = require("passport-local").Strategy;
const User=require('../model/User')
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const passport = require("passport")


module.exports=function (passport){
    passport.use(new localStrategy(async(username,password,done)=>{
        const user=await User.findOne({username:username})
        if(!user){
            return done(null,false)
        }else{
            if(password=== user.password){
                return done(null,user)
            }
           
        }
    }))


passport.serializeUser((user,cb)=>{
    cb(null,user.id)
})
passport.deserializeUser(async(id,cb)=>{
    const user=await User.findOne({_id:id})
    if(!user){
       return  cb(null,false)
    }else{
        return cb(null,user)
    }
})

}

