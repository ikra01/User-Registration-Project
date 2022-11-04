
import './Register.css'
import { useState } from 'react';
import { AiOutlineExclamationCircle } from "react-icons/ai";




const UserReg=()=>{ 

    const[name, setName] = useState();
    const[email, setEmail] = useState();
    const[password, setPassword] = useState();
    const[confirmpassword, setConfirmpassword] = useState();
    const[focusedname, setFocusedname] = useState(false);
    const[focusedemail, setFocusedemail] = useState(false);
    const[focusedpassword, setFocusedpassword] = useState(false);
    const[focusedcpassword, setFocusedcpassword] = useState(false);
    const[isSubscribed, setIsSubscribed] = useState(false);

   
    
      
   

    // API to post data to database
    const addUser = async(e)=>{
        e.preventDefault();
        console.log(name,email,password,confirmpassword,isSubscribed)
        

    let result = await fetch("http://localhost:4000/users", {
        method: 'POST',
        body: JSON.stringify({name,email,password,confirmpassword,isSubscribed}),
        headers: { 'Content-Type': 'application/json'}
    });

    result=await result.json()
    console.log(result)      
    }  
   
   return(
        <div>
            <div className="container">        

                 <div className="innerContainer"> 
                    <div className="text-content">
                        <h1 className="title-first">New Here?</h1>
                        <h1 className="title-second">Create an account to begin shopping</h1>
                    </div>
                    <form>

                        <div className="form-content"> 
            
                            <div className="input-field" >
                <label htmlFor="name">Full name:</label>
                <input type="text" id="name" 
                onChange={(e)=>setName(e.target.value)} value={name} 
                onBlur={()=>setFocusedname(true)}
                focused={focusedname.toString()}
                pattern ={'^[A-Za-z\\s]*$'}
                required/>
                <span>
                    <p className="icon"><AiOutlineExclamationCircle></AiOutlineExclamationCircle></p>
                    <p>Please enter your name</p>
                </span>
                            </div>
            
                            <div className="input-field">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" 
                onChange={(e)=>setEmail(e.target.value)} value={email} 
                onBlur={()=>setFocusedemail(true)} focused={focusedemail.toString()}
     
                required
                />
                <span>
                <p className="icon"><AiOutlineExclamationCircle></AiOutlineExclamationCircle></p>
                <p>Please enter a valid email address</p>
                </span>
                            </div>
            
            
                            <div className="input-field">
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" 
                onChange={(e)=>setPassword(e.target.value)} value={password} 
                onBlur={()=>setFocusedpassword(true)} focused={focusedpassword.toString()}
                
                pattern = {`^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`}
                
                required/>
                <span>
                    <p className="icon"><AiOutlineExclamationCircle></AiOutlineExclamationCircle></p>
                    <p>Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character.</p>
                </span>
                            </div>
            
         
                            <div className="input-field">
                <label htmlFor="password">Confirm Password:</label>
                <input type="password" id="confirmpassword" 
                onChange={(e)=>setConfirmpassword(e.target.value)} value={confirmpassword} 
                onBlur={()=>setFocusedcpassword(true)} focused={focusedcpassword.toString()}
                
                pattern = {password}
                required/>
                <span>
                    <p className="icon"><AiOutlineExclamationCircle></AiOutlineExclamationCircle></p>
                    <p>Passwords do not match</p>
                </span>
                            </div>
       


                        </div>

                        <div className="subscribe">
                            <input type="checkbox"
                            onChange={(e) => setIsSubscribed(e.target.checked)}
                            checked={isSubscribed}
                            name="isSubscribed"
                            id="isSubscribed">
                            </input>
                            <label>Subscribe to receive updates and exclusive offers </label>
                        </div>
        
                        <div className="reg-button">
                            <button type="submit" onClick={addUser}>Register</button>
                        </div>

                    </form>
                        
                </div>
                
            </div>

        </div>

    )

 }

export default UserReg



