import React, {useContext} from 'react'
import {AuthData} from './auth';
import {Route, Redirect} from 'react-router-dom'

function validateRoutes({forLoggedIn, ...props}) {
  
  const {isLoggedIn} = useContext(AuthData);

  if (isLoggedIn && forLoggedIn){
    return <Route {...props}/>
  }
  else if(!isLoggedIn && !forLoggedIn){
    return <Route {...props}/>
  }
  else{
    if(isLoggedIn){
      return <Redirect to="/" />;
    }
    return <Redirect to="/login" />;
  }
}

export default validateRoutes
