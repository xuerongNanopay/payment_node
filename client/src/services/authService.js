export const signIn = async ({email, password}) => {
  alert("SignIn success with email: " + email + ", password: " + password);
}

export const signUp = async({email, username, password}) => {
  alert("SignUp success with email: " + email + ", password: " + password + " username: " + username)
}

export default {
  signIn,
  signUp
}