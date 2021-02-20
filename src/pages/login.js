import React, {useContext} from 'react'
import {AuthData} from '../components/utils/auth';
import './login.scss';

function home() {
  const {isLoggedIn, login} = useContext(AuthData);

  function handleAuth(event){
    event.preventDefault();
    const cred = {
      username: event.target["username"].value,
      password: event.target["password"].value
    }

    login(cred);
  }
  
  return <>
    <div className="login__page">
      <form onSubmit={handleAuth}>
        <label>
          <input type="text" name="username" placeholder="Username"/>
        </label>
        <label>
          <input type="password" name="password" placeholder="Password"/>
        </label>
        <button>Submit</button>
      </form>
      <div className="hint">
        <span><b>Username: </b>admin</span><br/>
        <span><b>Password: </b>admin</span>
      </div>
    </div>
  </>
  
}

export default home
