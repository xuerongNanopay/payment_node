//TODO: signIn, signUp, signOut implementation.
import { createContext, useEffect, useReducer, useState } from "react";

import * as authService from 'service/auth';

const INITIALIZE = "INITIALIZE";
const SIGN_IN = "SIGN_IN";
const SIGN_OUT = "SIGN_OUT";
const SIGN_UP = "SIGN_UP";

const INITIAL_STATE = {
  user: null,
};

const JWTReducer = (state, action) => {
  switch (action.type) {
    case INITIALIZE:
      return {
        ...state,
        user: action.payload.user,
      };
    case SIGN_IN:
      return {
        ...state,
        user: action.payload.user,
      };
    case SIGN_OUT:
      return {
        ...state,
        user: null,
      };

    case SIGN_UP:
      return {
        ...state,
        user: action.payload.user,
      };

    default:
      return state;
  }
};

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(JWTReducer, INITIAL_STATE);
  const [isLoading, setIsLoading] = useState(true);

  // Check 
  useEffect(() => {
    const loadUser = async _ => {
      setIsLoading(true);
      const user = await authService.myAccount();
      console.log('loadUser: ', user)
      if ( !! user ) {
        dispatch({type: INITIALIZE, payload: {user}})
      } else {
        dispatch({type: INITIALIZE, payload: {user: null}})
      }
      setIsLoading(false);
    }
    loadUser();
  }, []);

  return (
    <>
      {
        isLoading ? 
        (<div>TODO: loading</div>) : 
        <AuthContext.Provider
        value={{
          ...state
          }}
        >
          {children}
        </AuthContext.Provider>
      }
    </>
  )
}

export { AuthContext, AuthProvider };