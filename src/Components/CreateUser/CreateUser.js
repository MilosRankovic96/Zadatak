import React from 'react'
import { useState } from "react";


function CreateUser(props) {

    const{setDataIsValid,validateEmail}=props
    const [email,setEmail]=useState('')
    const [name,setName]=useState('')
    

    const newUser = () =>{
         fetch('https://jsonplaceholder.typicode.com/users/',
            {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify(
                    {
                       email:email,
                       name:name
                    }
                )
            }
        )
        .then(res =>{
            if(res.ok){
               alert("New user has been created!")
               props.routeInfo.history.push("/users")
            }
        } )
        setDataIsValid(false);
}

    return (
        
        <div>
        <form>
            <label for="email">Enter your email:</label>
            <br/>
            <input  onChange={(e) => setEmail(e.target.value)} type="text" id="email" name="email"></input>
             <br/>
             <label for="name">Enter your name:</label>
              <br/>
            <input  onChange={(e) => setName(e.target.value)} type="text" id="name" name="name"></input>
             <br/>
              <input type='submit' value='submit'  onClick={(e) => {
                 e.preventDefault()
                 if(validateEmail(email) && name !==''){
                       newUser()
                       setDataIsValid(false)
                 }else  alert("Please fill in all the fields correctly.")
                       }
                           }
                           />
        </form>
        </div>
    )
}

export default CreateUser
