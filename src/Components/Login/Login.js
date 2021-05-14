import React from 'react'
import { useState } from "react";


function Login(props) {
    const {validate}=props
    const [mail,setMail]=useState('')
    const newMail = () =>{
        if(localStorage.getItem("mail") === null) {
             localStorage.setItem('mail', JSON.stringify(mail));
             props.routeInfo.history.push("/users")
        }else{
           if(localStorage.getItem('mail') === JSON.stringify(mail)){
                props.routeInfo.history.push("/users")
          }
           else{
               alert('Wrong email!')
        }
    }
 }

    return (
        <div>
            <label for ='email'>Email:</label>
            <br/>
            <input onChange={(e) => setMail( e.target.value)} type='text'id='email'></input>
            <br/>
             <button onClick={()=>{
                 validate(mail)
                 newMail()
              }}>Login</button>      
     </div>
    )            
}

export default Login
