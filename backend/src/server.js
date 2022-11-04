
const express = require('express');
const app = express();
require('../db/conn')
const Registration = require('../models/Registration')
const cors = require('cors');
 

app.use(express.json());
app.use(cors());


// API to save registered users in database
app.post('/users', async(req,res)=>
{
try{
    const password = req.body.password;
    const cpassword = req.body.confirmpassword;
        if(password === cpassword){
            const users = new Registration(req.body)
            let result = await users.save();
            res.status(201).send(result);      
        } 
        else{
            res.status(401).send({message: "Passwords do not match"})
        }
    
} catch(err) {
    res.status(400).send({message: err.message})    
}
})

app.listen(4000,()=>
{
    console.log('Server is running at port number 4000')
})