import React from 'react'
import { useState } from "react";


function EditUser(props) {
    const{setDataIsValid,users,validateEmail}=props
    const [email,setEmail]=useState('')
    const [name,setName]=useState('')
    const user = users.find((e) => props.match.params.id == e.id);
    

       const updateUser = (e) =>{
         fetch("https://jsonplaceholder.typicode.com/users/" + e.id,
            {
                method: 'PUT',
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
                   alert("The user has been updated!")
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
            <input  onChange={(e) => setEmail(e.target.value)} type="email" id="email" name="email"></input>
             <br/>
             <label for="name">Enter your name:</label>
              <br/>
            <input  onChange={(e) => setName(e.target.value)} type="text" id="name" name="name"></input>
             <br/>
              <input type='submit' value='submit'  onClick={(e) => {
                  e.preventDefault()
                  if(validateEmail(email) && name !==''){
                        updateUser(user)
                        setDataIsValid(false)
                  }else  alert("Please fill in all the fields correctly.")
                        }
                            }
                            />
        </form>
        </div>
    )
}

export default EditUser
