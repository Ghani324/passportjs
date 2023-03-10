const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const User = require('../model/User');


const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: "secretjwt",
  };

module.exports=function(passport){
   
    passport.use(new JwtStrategy(jwtOptions,async(jwt_payload,cb)=>{
        console.log(jwt_payload)
        const user=await User.find({},{_id:0,createdAt:0,updatedAt:0,__v:0,password:0})
        if(user){
           return  cb(null,user)
        }
        cb(null,false)
    }))
}