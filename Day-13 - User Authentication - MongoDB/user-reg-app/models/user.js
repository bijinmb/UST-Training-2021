const mongoose = require('mongoose');
//const Schema = mongoose.Schema;
const Users = mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    phone:{
        type:String
    },
    password:{
        type:String
    }
    
}, {timestamp: true})

const User = mongoose.model('users',Users)
module.exports=User;