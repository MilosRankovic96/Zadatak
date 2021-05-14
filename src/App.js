import React from 'react'
import { useEffect, useState } from "react";
import User from './Components/User/User';
import Users from './Components/Users/Users' 
import CreateUser from './Components/CreateUser/CreateUser'
import Login from './Components/Login/Login'
import EditUser from './Components/EditUser/EditUser'
import {
  BrowserRouter as 
  Switch,
  Route,
} from "react-router-dom";



function App() {
  const [users,setUsers]=useState([]) 
  const [dataIsValid, setDataIsValid] = useState(false)

  useEffect(()=>{
      if (!dataIsValid)
   fetch('https://jsonplaceholder.typicode.com/users')
     .then(response => response.json())
     .then(json => {setUsers(json)
     setDataIsValid(true)
    })

 },[dataIsValid])

   function validateEmail(email) {
     const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
     return re.test(email);
   }

   function validate(email) {
  
     if (validateEmail(email)) {
       alert(email + " is valid");
     } else {
       alert(email + " is not a valid email");
     }
     return false;
  }

return (
  <div className="App">
    <Switch>
      <Route
          exact
          path="/users"
          render={() => (
            <Users users={users} /> 
               )}
        />
      <Route
          exact
          path="/user/:id"
          render={(routeInfo) => (
            <User           
                {...routeInfo}
                users={users} routeInfo = {routeInfo} setDataIsValid={setDataIsValid} /> 
               )}
        />
        <Route
          exact
          path="/create-user"
          render={(routeInfo) => (
            <CreateUser validateEmail={validateEmail} routeInfo = {routeInfo} setDataIsValid={setDataIsValid} />
               )}
        />
        <Route
          exact
          path="/"
          render={(routeInfo) => (
            <Login validate={validate} routeInfo={routeInfo} />
               )}
        />
             <Route
          exact
          path="/edit-user/:id"
          render={(routeInfo) => (
          <EditUser           
                {...routeInfo}
                users={users} validateEmail={validateEmail} routeInfo = {routeInfo} setDataIsValid={setDataIsValid} /> 
               )}
        />
    </Switch>
    </div>
  );
}

export default App;
