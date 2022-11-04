//Creating a collection in the database

const mongoose=require('mongoose');


const userData = mongoose.Schema({
    name:{
        type:String, 
        required:[true, 'Please enter your name'],
    },
    email:{
        type:String,
        required:[true, 'Please enter your email'],
        unique:true

    },
    password:{
        type:String,
        required:[true, 'Please enter a password'],
        mainLength:[8, 'Minimum password length is 8 characters'],
        maxLength: 20

    },
    confirmpassword:{
        type:String, 
        required:[true, 'Please confirm password'],
        mainLength:[8, 'Minimum password length is 8 characters'],
        maxLength: 20
    },
    isSubscribed:{
        type:String,
        
    }
})
const RegisteredUsers = mongoose.model("registeredUsers", userData);
module.exports = RegisteredUsers;
