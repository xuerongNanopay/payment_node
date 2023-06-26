//TODO: SignUp, LogIn, LogOut, VerifyEmail, ChangePassword, UpdateSelf
import express from 'express';

import {
  signUp,
  logIn,
  logOut,
  verifyEmail,
  changePassword,
  getUser,
  updateUser
} from '../controllers/auth';

const authRouter = express.Router();

authRouter.post('/signUp', signUp);
authRouter.post('/login', logIn);
authRouter.post('/logOut', logIn);
authRouter.post('/verifyEmail', logIn);
authRouter.put('/changePassword', logIn);
authRouter.get('/user', getUser);

export default authRouter;