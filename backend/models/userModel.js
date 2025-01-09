const mongoose=require('mongoose');
const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
    },
    email:{
        type:String,
        required:true,
        trim:true,

    },
    password:{
        type:String,
        required:true,
        trim:true,

    },
    userName:{
        type:String,
        required:true,
        trim:true,

    },
    token:{
        type:String,

    },
    
    
    createdAt:{
        type:Date,
        default:Date.now
    }
    
})

const User=mongoose.model('User',userSchema);
module.exports=User;