import React from 'react'
import { Link } from "react-router-dom";


function Users(props) {

    const{users}=props
    
    return (
        <div>
      <table>
            {users.map((user)=>{
                return(
                   <Link to ={`/user/${user.id}`}>
                      <tr>
                          <td>{user.id}</td>
                          <td>{user.name}</td>
                          <td>{user.email}</td>
                          <td>{user.address.city}</td>
                      </tr>  
                      </Link>
                )
            })}
         </table>

          <Link to='/create-user'>Create</Link>
        </div>
    )
}

export default Users
