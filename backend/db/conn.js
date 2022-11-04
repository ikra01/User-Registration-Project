
// Connecting to the database

const mongoose=require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/userRegProject", {
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>
{
    console.log("connection to database sucessful")
}).catch((err)=>
{
    console.log("database is not connected")
    console.log(err);
})