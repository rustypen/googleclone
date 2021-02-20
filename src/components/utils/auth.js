import React, {createContext, useState} from "react";

const initialState = false

const Auth = ({children}) => {

  const [state, dispatch] = useState(initialState);
  const handleAuth = {
    isLoggedIn : state,
    login({username, password}){
      if(username==="admin" && password==="admin"){
        dispatch(true)
      }
      else{
        dispatch(false)
      }
    },
  
    logout(){
      dispatch(false)
    }
  }

  return (
    <AuthData.Provider value={handleAuth}>
      {children}
    </AuthData.Provider>
  )
};

export const AuthData = createContext(initialState);
export default Auth;