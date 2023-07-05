import axios from "../utils/axios";

import { isValidToken, setSession } from "../utils/jwt";

export const signIn = async(email, password) => {
  
}

// const controller = new AbortController();
// signal: abortController.signal;
// controller.abort()
export const myAccount = async _ => {
  try {
    const accessToken = window.localStorage.getItem("accessToken");
    if ( accessToken && isValidToken(accessToken) ) {
      setSession(accessToken);

      const response = await axios.get("/api/auth/my-account");
      const { user } = response.data;

      return user;
    } else {
      // return null;
      return { id: 'aaa', email: 'xrw', roles:[]}
    }
  } catch ( err ) {
    console.log(err);
    return null;
  }
}