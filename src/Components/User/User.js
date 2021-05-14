import React from 'react';
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button"
import ButtonGroup from "@material-ui/core/ButtonGroup"
import SaveIcon from "@material-ui/icons/Save"
import DeleteIcon from "@material-ui/icons/Delete"


function User(props) {

  const {users, setDataIsValid}=props
  const user = users.find((e) => Number(props.match.params.id) == e.id);
  console.log(props)
  

  const deleteUser = (e) => {
    fetch("https://jsonplaceholder.typicode.com/users/" + e.id, {
      method: "DELETE",
      headers: {
                'Content-type': 'application/json',
      },
    })
     .then(res =>{
      if(res.ok){
         alert("The user has been deleted!")
         props.routeInfo.history.push("/users")
      }

  } )
  setDataIsValid(false);
        }


    return (
    
     
        <div>
            {
        user!==undefined &&
        <>
        <div>
         
             <h1>Company</h1>
        <h3>{user.company.name}</h3>
        </div>
        <div>
            <h1>Adress</h1>
            <h3>{user.address.city}</h3>
            <h3>{user.address.street}</h3>
        </div>
        <div>
        <h2>Email</h2>
        <h3>{user.email}</h3>
        </div>
        <div>
        <h2>ID</h2>
        <h3>{user.id}</h3>

        </div>
          <div>
        <h2>Name</h2>
        <h3>{user.name}</h3>

        </div>
          <div>
        <h2>Phone</h2>
        <h3>{user.phone}</h3>

        </div>
            <div>
        <h2>Username</h2>
        <h3>{user.username}</h3>

        </div>
            <div>
        <h2>Website</h2>
        <h3>{user.website}</h3>

        </div>

        <div>
        <ButtonGroup>
             <Link to={`/edit-user/${user.id}`}><Button
             startIcon={<SaveIcon />}
             color="primary"
             variant="contained"
             size="medium"
             >Edit</Button></Link>
            <Button
            startIcon={<DeleteIcon />}
            color="secondary"
             variant="contained"
             size="medium"

             onClick ={(e)=>{
                e.preventDefault()
                deleteUser(user)
                setDataIsValid(false)
            }}>Delete</Button>
            </ButtonGroup>

        </div>
</>
}
        </div>
        
      
         
    );
}

export default User
